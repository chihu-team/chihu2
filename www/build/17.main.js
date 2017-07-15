webpackJsonp([17],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendWorkPageModule", function() { return SendWorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_work__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SendWorkPageModule = (function () {
    function SendWorkPageModule() {
    }
    return SendWorkPageModule;
}());
SendWorkPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__send_work__["a" /* SendWorkPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__send_work__["a" /* SendWorkPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__send_work__["a" /* SendWorkPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["b" /* TransferObject */]
        ]
    })
], SendWorkPageModule);

//# sourceMappingURL=send-work.module.js.map

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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
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
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires and the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.DATA_URL,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.prototype.getPicture = function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    Camera.prototype.cleanup = function () { return; };
    ;
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
Camera.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
Camera.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Cordova */])({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Camera.prototype, "getPicture", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Cordova */])({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Camera.prototype, "cleanup", null);
Camera = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        pluginName: 'Camera',
        plugin: 'cordova-plugin-camera',
        pluginRef: 'navigator.camera',
        repo: 'https://github.com/apache/cordova-plugin-camera',
        platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone 8']
    })
], Camera);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_work_data_work_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(321);
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
 * Generated class for the SendWorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SendWorkPage = (function () {
    function SendWorkPage(http, navCtrl, transfer, alertCtrl, navParams, camera, actionSheetCtrl, WorkService, UserService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.WorkService = WorkService;
        this.UserService = UserService;
        this.title = '';
        this.text = '';
        this.tip = '';
        this.items = [];
        this.foods = [];
        this.isReordering = false;
        this.sphide = false;
        this.banner = "assets/icon/work_banner.png";
        this.title = this.WorkService._title;
        this.fileTransfer = this.transfer.create();
        this.init();
    }
    SendWorkPage.prototype.init = function () {
        this.items = this.WorkService._item;
    };
    SendWorkPage.prototype.ionViewDidEnter = function () {
        this.init();
    };
    SendWorkPage.prototype.reorderItems = function (indexes) {
        var element = this.items[indexes.from];
        this.items.splice(indexes.from, 1);
        this.items.splice(indexes.to, 0, element);
    };
    SendWorkPage.prototype.edit = function () {
        this.sphide = !this.sphide;
        this.isReordering = !this.isReordering;
    };
    SendWorkPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '食材',
            message: "输入你要添加的材料和用量，例如：鸡蛋，一只",
            inputs: [
                {
                    name: 'name',
                    placeholder: '材料：如鸡蛋'
                },
                {
                    name: 'len',
                    placeholder: '用量：如一只'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                },
                {
                    text: '添加',
                    handler: function (data) {
                        _this.foods.push({
                            name: data.name,
                            len: data.len
                        });
                        //alert(data.name);
                        //alert(data.len);
                    }
                }
            ]
        });
        prompt.present();
    };
    //发布
    SendWorkPage.prototype.send = function () {
        if (this.items.length < 1 && this.foods.length < 1 && this.title.length < 1 && this.banner == "assets/icon/work_banner.png") {
            alert("抱歉，请填写完整...");
        }
        else {
            this.postdata();
        }
    };
    SendWorkPage.prototype.postdata = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/send_article";
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&work=" + JSON.stringify(this.items) + "&text=" + this.text + "&food=" + JSON.stringify(this.foods) + "&workbanner=" + this.banner + "&tip=" + this.tip + "&type=" + "1" + "&title=" + this.title, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.UserService.presentLoadingDismiss();
            if (res.json()['result']['ok'] == '1') {
                _this.navCtrl.popToRoot();
            }
        });
    };
    //长按删除事件
    SendWorkPage.prototype.pressEvent = function (idx) {
        //alert(idx);
        this.showConfirm(idx);
    };
    //删除提示
    SendWorkPage.prototype.showConfirm = function (idx) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '提示',
            message: '是否删除此材料?',
            buttons: [
                {
                    text: '在想想',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.foods.splice(idx, 1);
                    }
                }
            ]
        });
        confirm.present();
    };
    SendWorkPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '图片来源',
            buttons: [
                {
                    text: '相册',
                    icon: 'images',
                    handler: function () {
                        _this.seleImgType(0);
                    }
                },
                {
                    text: '相机',
                    icon: 'camera',
                    handler: function () {
                        _this.seleImgType(1);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //成品图片
    SendWorkPage.prototype.seleImgType = function (type) {
        var _this = this;
        var _that = this;
        this.camera.getPicture({
            quality: 80,
            allowEdit: true,
            sourceType: type,
            correctOrientation: true,
        }).then(function (imageData) {
            _this.up(imageData);
        }, function (err) {
            // Handle error
        });
    };
    SendWorkPage.prototype.up = function (path) {
        var _this = this;
        this.UserService.presentLoadingDefault();
        this.fileTransfer.upload(path, "http://www.devonhello.com/chihu2/upload", {})
            .then(function (data) {
            // success
            //alert(JSON.stringify(data));
            var response = JSON.parse(data["response"]);
            _this.banner = response['src'];
            _this.UserService.presentLoadingDismiss();
        }, function (err) {
            // error
            _this.UserService.presentLoadingDismiss();
            alert('err');
        });
    };
    //添加步骤
    SendWorkPage.prototype.addItem = function () {
        this.navCtrl.push('SendWorkItemPage', {
            idx: -1
        });
    };
    //修改步骤信息
    SendWorkPage.prototype.editItem = function (idx) {
        this.navCtrl.push('SendWorkItemPage', {
            idx: idx
        });
    };
    return SendWorkPage;
}());
SendWorkPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-send-work',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/send-work/send-work.html"*/'<!--\n  Generated template for the SendWorkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>发布作品</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <section class="work_top">\n        <section (click)="presentActionSheet();" class="work_banner" [style.background]="\'url(\'+ banner +\')\'"></section>\n        <input class="dv_work_title" [(ngModel)]="title" type="text" placeholder="写下你的菜谱名吧" />\n    </section>\n    <ion-list-header>\n        心得：\n    </ion-list-header>\n    <ion-textarea [(ngModel)]="text" placeholder="输入这道美食背后的故事"></ion-textarea>\n    <ion-list-header>\n        用料：\n    </ion-list-header>\n    <section class="dv_food_list">\n        <ion-row (press)="pressEvent(i)" *ngFor="let food of foods; let i=index">\n            <ion-col>\n                <div>{{food.name}}</div>\n            </ion-col>\n            <ion-col>\n                <div>{{food.len}}</div>\n            </ion-col>\n        </ion-row>\n    </section>\n    <br/>\n    <button (click)="showPrompt();" class="dv_button" ion-button round outline>添加材料</button>\n\n    <ion-list>\n        <ion-list-header>做法：（ 点击编辑步骤后，长按可删除 ）</ion-list-header>\n        <ion-item-group [reorder]="isReordering" (ionItemReorder)="reorderItems($event)">\n\n            <div class="sp" [class.sp_hide]="sphide"></div>\n\n            <ion-item (press)="pressEvent(i)" (click)="editItem(i)" *ngFor="let item of items; let i=index">\n\n                <section *ngIf="item.src != \'\'" class="imgs" [style.background]="\'url(\'+ item.src +\')\'"></section>\n\n                <p>\n                    {{item.text}}\n                </p>\n            </ion-item>\n\n\n        </ion-item-group>\n    </ion-list>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col width-50>\n                <button (click)="addItem();" class="dv_edit_button" ion-button icon-left round outline>\n                    <ion-icon name="star"></ion-icon>\n                    添加步骤\n                </button>\n            </ion-col>\n            <ion-col width-50>\n                <button (click)="edit()" class="dv_edit_button" ion-button icon-left round outline>\n                    <ion-icon name="reorder"></ion-icon>\n                    编辑步骤\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-list-header>\n        Tip：\n    </ion-list-header>\n    <ion-textarea [(ngModel)]="tip" placeholder="温馨提示"></ion-textarea>\n\n    <button (click)="send();" class="dv_button" ion-button round outline>发布菜谱</button>\n    <br/>\n    <br/>\n    <br/>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/send-work/send-work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_work_data_work_data__["a" /* WorkDataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], SendWorkPage);

//# sourceMappingURL=send-work.js.map

/***/ })

});
//# sourceMappingURL=17.main.js.map