webpackJsonp([16],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SettingPageModule = (function () {
    function SettingPageModule() {
    }
    return SettingPageModule;
}());
SettingPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["b" /* TransferObject */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]
        ]
    })
], SettingPageModule);

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TransferObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Transfer
 *
 * @description
 * This plugin allows you to upload and download files.
 *
 * @usage
 * ```typescript
 * import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
 * import { File } from '@ionic-native/file';
 *
 * constructor(private transfer: Transfer, private file: File) { }
 *
 * ...
 *
 * const fileTransfer: TransferObject = this.transfer.create();
 *
 * // Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * // Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * // Abort active transfer:
 * fileTransfer.abort();
 *
 * // full example
 * upload() {
 *   let options: FileUploadOptions = {
 *      fileKey: 'file',
 *      fileName: 'name.jpg',
 *      headers: {}
 *      .....
 *   }
 *
 *   fileTransfer.upload('<file path>', '<api endpoint>', options)
 *    .then((data) => {
 *      // success
 *    }, (err) => {
 *      // error
 *    })
 * }
 **
 * download() {
 *   const url = 'http://www.example.com/file.pdf';
 *   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
 *     console.log('download complete: ' + entry.toURL());
 *   }, (error) => {
 *     // handle error
 *   });
 * }
 *
 * ```
 *
 * To store files in a different/publicly accessible directory, please refer to the following link
 * https://github.com/apache/cordova-plugin-file#where-to-store-files
 *
 * @interfaces
 * FileUploadOptions
 * FileUploadResult
 * FileTransferError
 * @classes
 * TransferObject
 */
var Transfer = (function (_super) {
    __extends(Transfer, _super);
    function Transfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {TransferObject}
     */
    Transfer.prototype.create = function () {
        return new TransferObject();
    };
    return Transfer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
Transfer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
Transfer.ctorParameters = function () { return []; };
Transfer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        pluginName: 'FileTransfer',
        plugin: 'cordova-plugin-file-transfer',
        pluginRef: 'FileTransfer',
        repo: 'https://github.com/apache/cordova-plugin-file-transfer',
        platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Transfer);

/**
 * @hidden
 */
var TransferObject = (function () {
    function TransferObject() {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* checkAvailability */])('FileTransfer', null, 'FileTransfer') === true) {
            this._objectInstance = new FileTransfer();
        }
    }
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} options  Optional parameters.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    TransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) {
        return;
    };
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {stirng} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    TransferObject.prototype.download = function (source, target, trustAllHosts, options) {
        return;
    };
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param listener {function} Listener that takes a progress event.
     */
    TransferObject.prototype.onProgress = function (listener) {
        this._objectInstance.onprogress = listener;
    };
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    TransferObject.prototype.abort = function () { };
    return TransferObject;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* CordovaInstance */])({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Boolean]),
    __metadata("design:returntype", Promise)
], TransferObject.prototype, "upload", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* CordovaInstance */])({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], TransferObject.prototype, "download", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* InstanceCheck */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], TransferObject.prototype, "onProgress", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* CordovaInstance */])({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransferObject.prototype, "abort", null);
TransferObject = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        plugin: 'cordova-plugin-file-transfer',
        pluginName: 'FileTransfer'
    }),
    __metadata("design:paramtypes", [])
], TransferObject);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileOpener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File Opener
 * @description
 * This plugin will open a file on your device file system with its default application.
 *
 * @usage
 * ```typescript
 * import { FileOpener } from '@ionic-native/file-opener';
 *
 * constructor(private fileOpener: FileOpener) { }
 *
 * ...
 *
 * this.fileOpener.open('path/to/file.pdf', 'application/pdf')
 *   .then(() => console.log('File is opened'))
 *   .catch(e => console.log('Error openening file', e));
 *
 * ```
 */
var FileOpener = (function (_super) {
    __extends(FileOpener, _super);
    function FileOpener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open an file
     * @param filePath {string} File Path
     * @param fileMIMEType {string} File MIME Type
     * @returns {Promise<any>}
     */
    FileOpener.prototype.open = function (filePath, fileMIMEType) { return; };
    /**
     * Uninstalls a package
     * @param packageId {string}  Package ID
     * @returns {Promise<any>}
     */
    FileOpener.prototype.uninstall = function (packageId) { return; };
    /**
     * Check if an app is already installed
     * @param packageId {string} Package ID
     * @returns {Promise<any>}
     */
    FileOpener.prototype.appIsInstalled = function (packageId) { return; };
    return FileOpener;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
FileOpener.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
FileOpener.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Cordova */])({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FileOpener.prototype, "open", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Cordova */])({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileOpener.prototype, "uninstall", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Cordova */])({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileOpener.prototype, "appIsInstalled", null);
FileOpener = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        pluginName: 'FileOpener',
        plugin: 'cordova-plugin-file-opener2',
        pluginRef: 'cordova.plugins.fileOpener2',
        repo: 'https://github.com/pwlin/cordova-plugin-file-opener2',
        platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
    })
], FileOpener);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(49);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 * The File class implements static convenience functions to access files and directories.
 *
 * Example:
 * ```
 * import { File } from '@ionic-native/file';
 *
 * constructor(private file: File) { }
 *
 * ...
 *
 * this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
 *
 * ```
 *
 *  This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html
 *  @interfaces
 *  IFile
 *  Entry
 *  DirectoryEntry
 *  DirectoryReader
 *  FileSystem
 */
var File = (function (_super) {
    __extends(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    /**
     * Get free disk space in Bytes
     * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
     */
    File.prototype.getFreeDiskSpace = function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
        });
    };
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dir Name of directory to check
     * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
     */
    File.prototype.checkDir = function (path, dir) {
        if ((/^\//.test(dir))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var fullpath = path + dir;
        return this.resolveDirectoryUrl(fullpath)
            .then(function () {
            return true;
        });
    };
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
     */
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, options);
        });
    };
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.remove(de);
        });
    };
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destionation path to the directory
     * @param {string} newDirName The destination directory name
     * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
     */
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        newDirName = newDirName || dirName;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.move(srcde, deste, newDirName);
            });
        });
    };
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
     */
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.copy(srcde, deste, newDirName);
            });
        });
    };
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
     */
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false, exclusive: false });
        })
            .then(function (de) {
            var reader = de.createReader();
            return _this.readEntries(reader);
        });
    };
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
     */
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.rimraf(de);
        });
    };
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file to check
     * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
     */
    File.prototype.checkFile = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveLocalFilesystemUrl(path + file)
            .then(function (fse) {
            if (fse.isFile) {
                return true;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a file';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
     */
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, options);
        });
    };
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to remove
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (fe) {
            return _this.remove(fe);
        });
    };
    /** Write a new file to the desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var getFileOpts = {
            create: !options.append,
            exclusive: !options.replace
        };
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, fileName, getFileOpts);
        })
            .then(function (fileEntry) {
            return _this.writeFileEntry(fileEntry, text, options);
        });
    };
    /** Write content to FileEntry.
     *
     * @hidden
     * @param {FileEntry} fe file entry object
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    /** Write to an existing file.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    File.prototype.writeExistingFile = function (path, fileName, text) {
        return this.writeFile(path, fileName, text, { replace: true });
    };
    /**
     * Read the contents of a file as text.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
     */
    File.prototype.readAsText = function (path, file) {
        return this.readFile(path, file, 'Text');
    };
    /**
     * Read file and return data as a base64 encoded data url.
     * A data url is of the form:
     *      data: [<mediatype>][;base64],<data>
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
     */
    File.prototype.readAsDataURL = function (path, file) {
        return this.readFile(path, file, 'DataURL');
    };
    /**
     * Read file and return data as a binary data.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
     */
    File.prototype.readAsBinaryString = function (path, file) {
        return this.readFile(path, file, 'BinaryString');
    };
    /**
     * Read file and return data as an ArrayBuffer.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
     */
    File.prototype.readAsArrayBuffer = function (path, file) {
        return this.readFile(path, file, 'ArrayBuffer');
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
     */
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.move(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
     */
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.copy(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    /**
     * Resolves a local file system URL
     * @param fileUrl {string} file system url
     * @returns {Promise<Entry>}
     */
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                    resolve(entry);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Resolves a local directory url
     * @param directoryUrl {string} directory system url
     * @returns {Promise<DirectoryEntry>}
     */
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        return this.resolveLocalFilesystemUrl(directoryUrl)
            .then(function (de) {
            if (de.isDirectory) {
                return de;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a directory';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Get a directory
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param directoryName {string} Directory name
     * @param flags {Flags} Options
     * @returns {Promise<DirectoryEntry>}
     */
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getDirectory(directoryName, flags, function (de) {
                    resolve(de);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Get a file
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param fileName {string} File name
     * @param flags {Flags} Options
     * @returns {Promise<FileEntry>}
     */
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getFile(fileName, flags, resolve, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return new Promise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    return File;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
File.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
File.ctorParameters = function () { return []; };
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "applicationDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "applicationStorageDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "dataDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "cacheDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "externalApplicationStorageDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "externalDataDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "externalCacheDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "externalRootDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "tempDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "syncedDataDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "documentsDirectory", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaProperty */],
    __metadata("design:type", String)
], File.prototype, "sharedDirectory", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], File.prototype, "getFreeDiskSpace", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "checkDir", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", Promise)
], File.prototype, "createDir", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "removeDir", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "moveDir", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "copyDir", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "listDir", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "removeRecursively", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "checkFile", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", Promise)
], File.prototype, "createFile", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "removeFile", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], File.prototype, "writeFile", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], File.prototype, "writeExistingFile", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "readAsText", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "readAsDataURL", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "readAsBinaryString", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "readAsArrayBuffer", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "moveFile", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], File.prototype, "copyFile", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], File.prototype, "resolveLocalFilesystemUrl", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], File.prototype, "resolveDirectoryUrl", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], File.prototype, "getDirectory", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], File.prototype, "getFile", null);
File = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        pluginName: 'File',
        plugin: 'cordova-plugin-file',
        pluginRef: 'cordova.file',
        repo: 'https://github.com/apache/cordova-plugin-file',
        platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'macOS', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], File);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(alertCtrl, file, fileOpener, transfer, http, UserService, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.http = http;
        this.UserService = UserService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Version = '';
        this.ishide = true;
        this.apkDownloadUrl = '';
        this.Version = this.UserService.Version;
        if (this.UserService._user._id) {
            this.ishide = false;
        }
    }
    SettingPage.prototype.out = function () {
        this.UserService.clearStorage();
        this.navCtrl.pop();
    };
    //app版本获取
    SettingPage.prototype.getAppVersion = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu/appversion";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "", {
            headers: headers
        })
            .subscribe(function (res) {
            //alert(res.json()[0]["v"]);
            if (res.json()[0]["v"] != _this.UserService.Version) {
                //可升级
                _this.apkDownloadUrl = res.json()[0]["url"];
                _this.fileTransfer = _this.transfer.create();
                _this.AppV();
            }
            else {
                _this.UserService.presentLoadingDismiss();
                alert("已经是最新版了...");
            }
        });
    };
    //下载最新版本
    SettingPage.prototype.download = function () {
        var _this = this;
        alert("新版吃乎正在后台下载中...稍后安装");
        var _that = this;
        var apkurl = this.file.externalDataDirectory + 'chihu.apk';
        this.fileTransfer.download(this.apkDownloadUrl, apkurl).then(function (entry) {
            //打开apk
            _this.fileOpener.open(apkurl, 'application/vnd.android.package-archive')
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) { return alert('Error：' + e); });
        }, function (error) {
            // handle error
        });
    };
    SettingPage.prototype.AppV = function () {
        var _this = this;
        this.UserService.presentLoadingDismiss();
        var alert = this.alertCtrl.create({
            title: '提示',
            message: '是否要更新到最新版本?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.download();
                    }
                }
            ]
        });
        alert.present();
    };
    return SettingPage;
}());
SettingPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>设置</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item>清除缓存</ion-item>\n        <ion-item>\n            当前版本\n            <ion-note item-right>\n                {{Version}}\n            </ion-note>\n        </ion-item>\n        <ion-item (click)="getAppVersion();">检查更新</ion-item>\n        <ion-item>意见反馈</ion-item>\n        <ion-item>关于吃乎</ion-item>\n        <ion-item [hidden]="ishide" class="logout" (click)="out();">退出账号</ion-item>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/setting/setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map