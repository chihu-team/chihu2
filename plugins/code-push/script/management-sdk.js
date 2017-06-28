var fs = require("fs");
var os = require("os");
var path = require("path");
var Q = require("q");
var slash = require("slash");
var superagent = require("superagent");
var recursiveFs = require("recursive-fs");
var yazl = require("yazl");
var Promise = Q.Promise;
var superproxy = require("superagent-proxy");
superproxy(superagent);
var packageJson = require("../package.json");
// A template string tag function that URL encodes the substituted values
function urlEncode(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += encodeURIComponent(values[i]);
        }
    }
    return result;
}
var AccountManager = (function () {
    function AccountManager(accessKey, customHeaders, serverUrl, proxy) {
        if (!accessKey)
            throw new Error("A token must be specified.");
        this._accessKey = accessKey;
        this._customHeaders = customHeaders;
        this._serverUrl = serverUrl || AccountManager.SERVER_URL;
        this._proxy = proxy;
    }
    Object.defineProperty(AccountManager.prototype, "accessKey", {
        get: function () {
            return this._accessKey;
        },
        enumerable: true,
        configurable: true
    });
    AccountManager.prototype.isAuthenticated = function (throwIfUnauthorized) {
        var _this = this;
        return Promise(function (resolve, reject, notify) {
            var request = superagent.get(_this._serverUrl + (_a = ["/authenticated"], _a.raw = ["/authenticated"], urlEncode(_a)));
            if (_this._proxy)
                request.proxy(_this._proxy);
            _this.attachCredentials(request);
            request.end(function (err, res) {
                var status = _this.getErrorStatus(err, res);
                if (err && status !== AccountManager.ERROR_UNAUTHORIZED) {
                    reject(_this.getCodePushError(err, res));
                    return;
                }
                var authenticated = status === 200;
                if (!authenticated && throwIfUnauthorized) {
                    reject(_this.getCodePushError(err, res));
                    return;
                }
                resolve(authenticated);
            });
            var _a;
        });
    };
    AccountManager.prototype.addAccessKey = function (friendlyName, ttl) {
        if (!friendlyName) {
            throw new Error("A name must be specified when adding an access key.");
        }
        var accessKeyRequest = {
            createdBy: os.hostname(),
            friendlyName: friendlyName,
            ttl: ttl
        };
        return this.post((_a = ["/accessKeys/"], _a.raw = ["/accessKeys/"], urlEncode(_a)), JSON.stringify(accessKeyRequest), true)
            .then(function (response) {
            return {
                createdTime: response.body.accessKey.createdTime,
                expires: response.body.accessKey.expires,
                key: response.body.accessKey.name,
                name: response.body.accessKey.friendlyName
            };
        });
        var _a;
    };
    AccountManager.prototype.getAccessKey = function (accessKeyName) {
        return this.get((_a = ["/accessKeys/", ""], _a.raw = ["/accessKeys/", ""], urlEncode(_a, accessKeyName)))
            .then(function (res) {
            return {
                createdTime: res.body.accessKey.createdTime,
                expires: res.body.accessKey.expires,
                name: res.body.accessKey.friendlyName,
            };
        });
        var _a;
    };
    AccountManager.prototype.getAccessKeys = function () {
        return this.get((_a = ["/accessKeys"], _a.raw = ["/accessKeys"], urlEncode(_a)))
            .then(function (res) {
            var accessKeys = [];
            res.body.accessKeys.forEach(function (serverAccessKey) {
                !serverAccessKey.isSession && accessKeys.push({
                    createdTime: serverAccessKey.createdTime,
                    expires: serverAccessKey.expires,
                    name: serverAccessKey.friendlyName
                });
            });
            return accessKeys;
        });
        var _a;
    };
    AccountManager.prototype.getSessions = function () {
        return this.get((_a = ["/accessKeys"], _a.raw = ["/accessKeys"], urlEncode(_a)))
            .then(function (res) {
            // A machine name might be associated with multiple session keys,
            // but we should only return one per machine name.
            var sessionMap = {};
            var now = new Date().getTime();
            res.body.accessKeys.forEach(function (serverAccessKey) {
                if (serverAccessKey.isSession && serverAccessKey.expires > now) {
                    sessionMap[serverAccessKey.createdBy] = {
                        loggedInTime: serverAccessKey.createdTime,
                        machineName: serverAccessKey.createdBy
                    };
                }
            });
            var sessions = Object.keys(sessionMap)
                .map(function (machineName) { return sessionMap[machineName]; });
            return sessions;
        });
        var _a;
    };
    AccountManager.prototype.patchAccessKey = function (oldName, newName, ttl) {
        var accessKeyRequest = {
            friendlyName: newName,
            ttl: ttl
        };
        return this.patch((_a = ["/accessKeys/", ""], _a.raw = ["/accessKeys/", ""], urlEncode(_a, oldName)), JSON.stringify(accessKeyRequest))
            .then(function (res) {
            return {
                createdTime: res.body.accessKey.createdTime,
                expires: res.body.accessKey.expires,
                name: res.body.accessKey.friendlyName,
            };
        });
        var _a;
    };
    AccountManager.prototype.removeAccessKey = function (name) {
        return this.del((_a = ["/accessKeys/", ""], _a.raw = ["/accessKeys/", ""], urlEncode(_a, name)))
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.removeSession = function (machineName) {
        return this.del((_a = ["/sessions/", ""], _a.raw = ["/sessions/", ""], urlEncode(_a, machineName)))
            .then(function () { return null; });
        var _a;
    };
    // Account
    AccountManager.prototype.getAccountInfo = function () {
        return this.get((_a = ["/account"], _a.raw = ["/account"], urlEncode(_a)))
            .then(function (res) { return res.body.account; });
        var _a;
    };
    // Apps
    AccountManager.prototype.getApps = function () {
        return this.get((_a = ["/apps"], _a.raw = ["/apps"], urlEncode(_a)))
            .then(function (res) { return res.body.apps; });
        var _a;
    };
    AccountManager.prototype.getApp = function (appName) {
        return this.get((_a = ["/apps/", ""], _a.raw = ["/apps/", ""], urlEncode(_a, this.appNameParam(appName))))
            .then(function (res) { return res.body.app; });
        var _a;
    };
    AccountManager.prototype.addApp = function (appName, appOs, appPlatform, manuallyProvisionDeployments) {
        if (manuallyProvisionDeployments === void 0) { manuallyProvisionDeployments = false; }
        var app = {
            name: appName,
            os: appOs,
            platform: appPlatform,
            manuallyProvisionDeployments: manuallyProvisionDeployments
        };
        return this.post((_a = ["/apps/"], _a.raw = ["/apps/"], urlEncode(_a)), JSON.stringify(app), false)
            .then(function () { return app; });
        var _a;
    };
    AccountManager.prototype.removeApp = function (appName) {
        return this.del((_a = ["/apps/", ""], _a.raw = ["/apps/", ""], urlEncode(_a, this.appNameParam(appName))))
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.renameApp = function (oldAppName, newAppName) {
        return this.patch((_a = ["/apps/", ""], _a.raw = ["/apps/", ""], urlEncode(_a, this.appNameParam(oldAppName))), JSON.stringify({ name: newAppName }))
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.transferApp = function (appName, email) {
        return this.post((_a = ["/apps/", "/transfer/", ""], _a.raw = ["/apps/", "/transfer/", ""], urlEncode(_a, this.appNameParam(appName), email)), null, false)
            .then(function () { return null; });
        var _a;
    };
    // Collaborators
    AccountManager.prototype.getCollaborators = function (appName) {
        return this.get((_a = ["/apps/", "/collaborators"], _a.raw = ["/apps/", "/collaborators"], urlEncode(_a, this.appNameParam(appName))))
            .then(function (res) { return res.body.collaborators; });
        var _a;
    };
    AccountManager.prototype.addCollaborator = function (appName, email) {
        return this.post((_a = ["/apps/", "/collaborators/", ""], _a.raw = ["/apps/", "/collaborators/", ""], urlEncode(_a, this.appNameParam(appName), email)), null, false)
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.removeCollaborator = function (appName, email) {
        return this.del((_a = ["/apps/", "/collaborators/", ""], _a.raw = ["/apps/", "/collaborators/", ""], urlEncode(_a, this.appNameParam(appName), email)))
            .then(function () { return null; });
        var _a;
    };
    // Deployments
    AccountManager.prototype.addDeployment = function (appName, deploymentName) {
        var deployment = { name: deploymentName };
        return this.post((_a = ["/apps/", "/deployments/"], _a.raw = ["/apps/", "/deployments/"], urlEncode(_a, this.appNameParam(appName))), JSON.stringify(deployment), true)
            .then(function (res) { return res.body.deployment; });
        var _a;
    };
    AccountManager.prototype.clearDeploymentHistory = function (appName, deploymentName) {
        return this.del((_a = ["/apps/", "/deployments/", "/history"], _a.raw = ["/apps/", "/deployments/", "/history"], urlEncode(_a, this.appNameParam(appName), deploymentName)))
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.getDeployments = function (appName) {
        return this.get((_a = ["/apps/", "/deployments/"], _a.raw = ["/apps/", "/deployments/"], urlEncode(_a, this.appNameParam(appName))))
            .then(function (res) { return res.body.deployments; });
        var _a;
    };
    AccountManager.prototype.getDeployment = function (appName, deploymentName) {
        return this.get((_a = ["/apps/", "/deployments/", ""], _a.raw = ["/apps/", "/deployments/", ""], urlEncode(_a, this.appNameParam(appName), deploymentName)))
            .then(function (res) { return res.body.deployment; });
        var _a;
    };
    AccountManager.prototype.renameDeployment = function (appName, oldDeploymentName, newDeploymentName) {
        return this.patch((_a = ["/apps/", "/deployments/", ""], _a.raw = ["/apps/", "/deployments/", ""], urlEncode(_a, this.appNameParam(appName), oldDeploymentName)), JSON.stringify({ name: newDeploymentName }))
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.removeDeployment = function (appName, deploymentName) {
        return this.del((_a = ["/apps/", "/deployments/", ""], _a.raw = ["/apps/", "/deployments/", ""], urlEncode(_a, this.appNameParam(appName), deploymentName)))
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.getDeploymentMetrics = function (appName, deploymentName) {
        return this.get((_a = ["/apps/", "/deployments/", "/metrics"], _a.raw = ["/apps/", "/deployments/", "/metrics"], urlEncode(_a, this.appNameParam(appName), deploymentName)))
            .then(function (res) { return res.body.metrics; });
        var _a;
    };
    AccountManager.prototype.getDeploymentHistory = function (appName, deploymentName) {
        return this.get((_a = ["/apps/", "/deployments/", "/history"], _a.raw = ["/apps/", "/deployments/", "/history"], urlEncode(_a, this.appNameParam(appName), deploymentName)))
            .then(function (res) { return res.body.history; });
        var _a;
    };
    AccountManager.prototype.release = function (appName, deploymentName, filePath, targetBinaryVersion, updateMetadata, uploadProgressCallback) {
        var _this = this;
        return Promise(function (resolve, reject, notify) {
            updateMetadata.appVersion = targetBinaryVersion;
            var request = superagent.post(_this._serverUrl + (_a = ["/apps/", "/deployments/", "/release"], _a.raw = ["/apps/", "/deployments/", "/release"], urlEncode(_a, _this.appNameParam(appName), deploymentName)));
            if (_this._proxy)
                request.proxy(_this._proxy);
            _this.attachCredentials(request);
            var getPackageFilePromise = _this.packageFileFromPath(filePath);
            getPackageFilePromise.then(function (packageFile) {
                var file = fs.createReadStream(packageFile.path);
                request.attach("package", file)
                    .field("packageInfo", JSON.stringify(updateMetadata))
                    .on("progress", function (event) {
                    if (uploadProgressCallback && event && event.total > 0) {
                        var currentProgress = event.loaded / event.total * 100;
                        uploadProgressCallback(currentProgress);
                    }
                })
                    .end(function (err, res) {
                    if (packageFile.isTemporary) {
                        fs.unlinkSync(packageFile.path);
                    }
                    if (err) {
                        reject(_this.getCodePushError(err, res));
                        return;
                    }
                    if (res.ok) {
                        resolve(null);
                    }
                    else {
                        try {
                            var body = JSON.parse(res.text);
                        }
                        catch (err) {
                        }
                        if (body) {
                            reject({ message: body.message, statusCode: res && res.status });
                        }
                        else {
                            reject({ message: res.text, statusCode: res && res.status });
                        }
                    }
                });
            });
            var _a;
        });
    };
    AccountManager.prototype.patchRelease = function (appName, deploymentName, label, updateMetadata) {
        updateMetadata.label = label;
        var requestBody = JSON.stringify({ packageInfo: updateMetadata });
        return this.patch((_a = ["/apps/", "/deployments/", "/release"], _a.raw = ["/apps/", "/deployments/", "/release"], urlEncode(_a, this.appNameParam(appName), deploymentName)), requestBody, false)
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.promote = function (appName, sourceDeploymentName, destinationDeploymentName, updateMetadata) {
        var requestBody = JSON.stringify({ packageInfo: updateMetadata });
        return this.post((_a = ["/apps/", "/deployments/", "/promote/", ""], _a.raw = ["/apps/", "/deployments/", "/promote/", ""], urlEncode(_a, this.appNameParam(appName), sourceDeploymentName, destinationDeploymentName)), requestBody, false)
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.rollback = function (appName, deploymentName, targetRelease) {
        return this.post((_a = ["/apps/", "/deployments/", "/rollback/", ""], _a.raw = ["/apps/", "/deployments/", "/rollback/", ""], urlEncode(_a, this.appNameParam(appName), deploymentName, targetRelease || "")), null, false)
            .then(function () { return null; });
        var _a;
    };
    AccountManager.prototype.packageFileFromPath = function (filePath) {
        var _this = this;
        var getPackageFilePromise;
        if (fs.lstatSync(filePath).isDirectory()) {
            getPackageFilePromise = Promise(function (resolve, reject) {
                var directoryPath = filePath;
                recursiveFs.readdirr(directoryPath, function (error, directories, files) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    var baseDirectoryPath = path.dirname(directoryPath);
                    var fileName = _this.generateRandomFilename(15) + ".zip";
                    var zipFile = new yazl.ZipFile();
                    var writeStream = fs.createWriteStream(fileName);
                    zipFile.outputStream.pipe(writeStream)
                        .on("error", function (error) {
                        reject(error);
                    })
                        .on("close", function () {
                        filePath = path.join(process.cwd(), fileName);
                        resolve({ isTemporary: true, path: filePath });
                    });
                    for (var i = 0; i < files.length; ++i) {
                        var file = files[i];
                        var relativePath = path.relative(baseDirectoryPath, file);
                        // yazl does not like backslash (\) in the metadata path.
                        relativePath = slash(relativePath);
                        zipFile.addFile(file, relativePath);
                    }
                    zipFile.end();
                });
            });
        }
        else {
            getPackageFilePromise = Q({ isTemporary: false, path: filePath });
        }
        return getPackageFilePromise;
    };
    AccountManager.prototype.generateRandomFilename = function (length) {
        var filename = "";
        var validChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            filename += validChar.charAt(Math.floor(Math.random() * validChar.length));
        }
        return filename;
    };
    AccountManager.prototype.get = function (endpoint, expectResponseBody) {
        if (expectResponseBody === void 0) { expectResponseBody = true; }
        return this.makeApiRequest("get", endpoint, null, expectResponseBody, null);
    };
    AccountManager.prototype.post = function (endpoint, requestBody, expectResponseBody, contentType) {
        if (contentType === void 0) { contentType = "application/json;charset=UTF-8"; }
        return this.makeApiRequest("post", endpoint, requestBody, expectResponseBody, contentType);
    };
    AccountManager.prototype.patch = function (endpoint, requestBody, expectResponseBody, contentType) {
        if (expectResponseBody === void 0) { expectResponseBody = false; }
        if (contentType === void 0) { contentType = "application/json;charset=UTF-8"; }
        return this.makeApiRequest("patch", endpoint, requestBody, expectResponseBody, contentType);
    };
    AccountManager.prototype.del = function (endpoint, expectResponseBody) {
        if (expectResponseBody === void 0) { expectResponseBody = false; }
        return this.makeApiRequest("del", endpoint, null, expectResponseBody, null);
    };
    AccountManager.prototype.makeApiRequest = function (method, endpoint, requestBody, expectResponseBody, contentType) {
        var _this = this;
        return Promise(function (resolve, reject, notify) {
            var request = superagent[method](_this._serverUrl + endpoint);
            if (_this._proxy)
                request.proxy(_this._proxy);
            _this.attachCredentials(request);
            if (requestBody) {
                if (contentType) {
                    request = request.set("Content-Type", contentType);
                }
                request = request.send(requestBody);
            }
            request.end(function (err, res) {
                if (err) {
                    reject(_this.getCodePushError(err, res));
                    return;
                }
                try {
                    var body = JSON.parse(res.text);
                }
                catch (err) {
                }
                if (res.ok) {
                    if (expectResponseBody && !body) {
                        reject({ message: "Could not parse response: " + res.text, statusCode: AccountManager.ERROR_INTERNAL_SERVER });
                    }
                    else {
                        resolve({
                            headers: res.header,
                            body: body
                        });
                    }
                }
                else {
                    if (body) {
                        reject({ message: body.message, statusCode: _this.getErrorStatus(err, res) });
                    }
                    else {
                        reject({ message: res.text, statusCode: _this.getErrorStatus(err, res) });
                    }
                }
            });
        });
    };
    AccountManager.prototype.getCodePushError = function (error, response) {
        if (error.syscall === "getaddrinfo") {
            error.message = "Unable to connect to the CodePush server. Are you offline, or behind a firewall or proxy?\n(" + error.message + ")";
        }
        return {
            message: this.getErrorMessage(error, response),
            statusCode: this.getErrorStatus(error, response)
        };
    };
    AccountManager.prototype.getErrorStatus = function (error, response) {
        return (error && error.status) || (response && response.status) || AccountManager.ERROR_GATEWAY_TIMEOUT;
    };
    AccountManager.prototype.getErrorMessage = function (error, response) {
        return response && response.text ? response.text : error.message;
    };
    AccountManager.prototype.attachCredentials = function (request) {
        if (this._customHeaders) {
            for (var headerName in this._customHeaders) {
                request.set(headerName, this._customHeaders[headerName]);
            }
        }
        request.set("Accept", "application/vnd.code-push.v" + AccountManager.API_VERSION + "+json");
        request.set("Authorization", "Bearer " + this._accessKey);
        request.set("X-CodePush-SDK-Version", packageJson.version);
    };
    // IIS and Azure web apps have this annoying behavior where %2F (URL encoded slashes) in the URL are URL decoded
    // BEFORE the requests reach node. That essentially means there's no good way to encode a "/" in the app name--
    // URL encodeing will work when running locally but when running on Azure it gets decoded before express sees it,
    // so app names with slashes don't get routed properly. See https://github.com/tjanczuk/iisnode/issues/343 (or other sites
    // that complain about the same) for some more info. I explored some IIS config based workarounds, but the previous
    // link seems to say they won't work, so I eventually gave up on that.
    // Anyway, to workaround this issue, we now allow the client to encode / characters as ~~ (two tildes, URL encoded).
    // The CLI now converts / to ~~ if / appears in an app name, before passing that as part of the URL. This code below
    // does the encoding. It's hack, but seems like the least bad option here.
    // Eventually, this service will go away & we'll all be on Max's new service. That's hosted in docker, no more IIS,
    // so this issue should go away then.
    AccountManager.prototype.appNameParam = function (appName) {
        return appName.replace("/", "~~");
    };
    AccountManager.AppPermission = {
        OWNER: "Owner",
        COLLABORATOR: "Collaborator"
    };
    AccountManager.SERVER_URL = "https://codepush-management.azurewebsites.net";
    AccountManager.MOBILE_CENTER_SERVER_URL = "https://mobile.azure.com";
    AccountManager.API_VERSION = 2;
    AccountManager.ERROR_GATEWAY_TIMEOUT = 504; // Used if there is a network error
    AccountManager.ERROR_INTERNAL_SERVER = 500;
    AccountManager.ERROR_NOT_FOUND = 404;
    AccountManager.ERROR_CONFLICT = 409; // Used if the resource already exists
    AccountManager.ERROR_UNAUTHORIZED = 401;
    return AccountManager;
})();
module.exports = AccountManager;
