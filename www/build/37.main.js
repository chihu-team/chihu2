webpackJsonp([37],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendAnswerPageModule", function() { return SendAnswerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_answer__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendAnswerPageModule = (function () {
    function SendAnswerPageModule() {
    }
    return SendAnswerPageModule;
}());
SendAnswerPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__send_answer__["a" /* SendAnswerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__send_answer__["a" /* SendAnswerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__send_answer__["a" /* SendAnswerPage */]
        ]
    })
], SendAnswerPageModule);

//# sourceMappingURL=send-answer.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SendAnswerPage = (function () {
    function SendAnswerPage(http, UserService, navCtrl, navParams) {
        this.http = http;
        this.UserService = UserService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._id = this.navParams.get('id');
        this.title = this.navParams.get('title');
    }
    SendAnswerPage.prototype.ngOnInit = function () {
        var _that = this;
        this.summernote = $('#summernote');
        this.summernote.summernote({
            height: 380,
            placeholder: '文章内容...',
            callbacks: {
                onImageUpload: function (files) {
                    var imgs = _that.upFile(files[0]);
                }
            },
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['Insert', ['picture']]
            ]
        });
    };
    SendAnswerPage.prototype.upFile = function (file) {
        this.UserService.presentLoadingDefault();
        var _data = new FormData(), _that = this;
        _data.append("file", file);
        $.ajax({
            data: _data,
            dataType: 'text',
            type: "POST",
            url: "http://www.devonhello.com/cfdkAdmin/uploadimg",
            cache: false,
            contentType: false,
            processData: false,
            success: function (url) {
                _that.summernote.summernote('insertImage', "http://7xp2ia.com1.z0.glb.clouddn.com/" + url, 'image name'); // the insertImage API  
                _that.UserService.presentLoadingDismiss();
            }
        });
    };
    SendAnswerPage.prototype.send = function () {
        var _this = this;
        this.text = this.summernote.summernote('code');
        if (this.text < 10) {
            alert("内容太短...至少10个字符");
            return true;
        }
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/send_answer";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.UserService._user._id + "&answerid=" + this._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&title=" + this.title + "&text=" + this.text, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.UserService.presentLoadingDismiss();
            _this.navCtrl.pop();
        });
    };
    return SendAnswerPage;
}());
SendAnswerPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-send-answer',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/send-answer/send-answer.html"*/'<!--\n  Generated template for the SendAnswerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>我要回答</ion-title>\n        <ion-buttons end (click)="send();">\n            <ion-title>发布</ion-title>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <textarea id="summernote" placeholder="Comments"></textarea>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/send-answer/send-answer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SendAnswerPage);

//# sourceMappingURL=send-answer.js.map

/***/ })

});
//# sourceMappingURL=37.main.js.map