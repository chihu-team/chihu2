webpackJsonp([10],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_work_work_module__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_work_work_module__["a" /* WorkComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["b" /* TransferObject */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */]
        ]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkComponentModule = (function () {
    function WorkComponentModule() {
    }
    return WorkComponentModule;
}());
WorkComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__work__["a" /* WorkComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__work__["a" /* WorkComponent */]
        ]
    })
], WorkComponentModule);

//# sourceMappingURL=work.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
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
 * Generated class for the WorkComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var WorkComponent = (function () {
    function WorkComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.ishideTitle = false;
        this.rootNavCtrl = null;
        this.irootNavCtrl = this.navCtrl;
    }
    WorkComponent.prototype.ngOnChanges = function (ch) {
        try {
            if (ch['rootNavCtrl'].currentValue) {
                //console.log( ch['data'].currentValue.uid );
                if (this.rootNavCtrl != null) {
                    this.irootNavCtrl = this.navParams.get('rootNavCtrl');
                }
                this.ishideTitle = ch['ishideTitle'].currentValue;
            }
        }
        catch (error) {
        }
    };
    //打开作品
    WorkComponent.prototype.pushArticlePage = function (_id) {
        this.irootNavCtrl.push('ArticlePage', {
            _id: _id
        });
    };
    //打开回答
    WorkComponent.prototype.pushAnswerPage = function (_id) {
        this.irootNavCtrl.push('AnswerPage', {
            _id: _id
        });
    };
    //打开问题
    WorkComponent.prototype.pushQuestionPage = function (_id) {
        this.irootNavCtrl.push('QuestionPage', {
            _id: _id
        });
    };
    return WorkComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], WorkComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Boolean)
], WorkComponent.prototype, "ishideTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], WorkComponent.prototype, "rootNavCtrl", void 0);
WorkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'work',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/components/work/work.html"*/'<!-- Generated template for the WorkComponent component -->\n<section class="item" *ngFor="let item of data">\n    <header>\n        <img [src]="item.userimg" alt="">\n        <h4 *ngIf="item.type == \'0\'">{{item.name}} 回答了问题</h4>\n        <h4 *ngIf="item.type == \'1\'">{{item.name}} 分享的作品</h4>\n        <p class="time"><i class="fa fa-clock-o" aria-hidden="true"></i>:{{item.time | date}}</p>\n    </header>\n    <section *ngIf="item.type == \'1\'" class="banner" (click)="pushArticlePage( item._id );" [style.background]="\'url(\'+item.workbanner+\')\'"></section>\n    <h5 [hidden]="ishideTitle" *ngIf="item.type == \'0\'" (click)="pushQuestionPage( item.answerid );"><i class="fa fa-cutlery" aria-hidden="true"></i> &nbsp;{{item.title}}</h5>\n    <h5 *ngIf="item.type == \'1\'" (click)="pushArticlePage( item._id );"><i class="fa fa-cutlery" aria-hidden="true"></i> &nbsp;{{item.title}}</h5>\n    <p *ngIf="item.type == \'0\'" (click)="pushAnswerPage( item._id );">{{item.dec}}</p>\n    <p *ngIf="item.type == \'1\'" (click)="pushArticlePage( item._id );">{{item.text}}</p>\n    <section class="mark">\n        <p><i class="fa fa-heart" aria-hidden="true"></i> 感谢:{{item.mark.think}} • <i class="fa fa-file" aria-hidden="true"></i> 收藏:{{item.mark.collect}} • <i class="fa fa-comment" aria-hidden="true"></i> 评论:{{item.mark.cont}}</p>\n    </section>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/components/work/work.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WorkComponent);

//# sourceMappingURL=work.js.map

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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = TabsPage_1 = (function () {
    function TabsPage(fileOpener, transfer, http, appVersion, UserService, platform, navCtrl, toastCtrl, alertCtrl, file) {
        var _this = this;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.http = http;
        this.appVersion = appVersion;
        this.UserService = UserService;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.tabHome = 'HomePage';
        this.tabClass = 'ClassPage';
        this.tabNotice = 'NoticePage';
        this.tabFound = 'FoundPage';
        this.tabMore = 'MorePage';
        this.backButtonPressed = false;
        this.itimer = null;
        this.apkDownloadUrl = '';
        setTimeout(function () {
            _this.pageBack();
        }, 1000);
    }
    //app版本获取
    TabsPage.prototype.getAppVersion = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu2/appversion";
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
        });
    };
    //下载最新版本
    TabsPage.prototype.download = function () {
        var _this = this;
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
    TabsPage.prototype.AppV = function () {
        var _this = this;
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
    TabsPage.prototype.pageBack = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.appVersion.getVersionNumber().then(function (version) {
                _this.UserService.Version = version;
            });
            var activeVC = _this.navCtrl.getActive();
            var page = activeVC.instance;
            page.tabs;
            if (!(page instanceof TabsPage_1)) {
                if (!_this.navCtrl.canGoBack()) {
                    return _this.showExit();
                }
                _this.UserService.presentLoadingDismiss();
                return _this.navCtrl.pop();
            }
            var tabs = page.tabs;
            var activeNav = tabs.getSelected();
            if (!activeNav.canGoBack()) {
                return _this.showExit();
            }
            _this.UserService.presentLoadingDismiss();
            return activeNav.pop();
        }, 101);
    };
    //双击退出提示框
    TabsPage.prototype.showExit = function () {
        var _that = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.presentToast();
            this.backButtonPressed = true;
            if (this.itimer) {
                clearTimeout(this.itimer);
            }
            this.itimer = setTimeout(function () {
                _that.backButtonPressed = false;
            }, 2000);
        }
    };
    TabsPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: '再次点击返回退出APP',
            duration: 2000
        });
        toast.present();
    };
    return TabsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Tabs */])
], TabsPage.prototype, "tabs", void 0);
TabsPage = TabsPage_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs>\n    <ion-tab [root]="tabHome" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="tabFound" tabIcon="aperture"></ion-tab>\n    <ion-tab [root]="tabClass" tabIcon="apps"></ion-tab>\n    <ion-tab [root]="tabNotice" tabIcon="notifications"></ion-tab>\n    <ion-tab [root]="tabMore" tabIcon="list"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */]])
], TabsPage);

var TabsPage_1;
//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map