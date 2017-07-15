webpackJsonp([36],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendCommentsPageModule", function() { return SendCommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_comments__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendCommentsPageModule = (function () {
    function SendCommentsPageModule() {
    }
    return SendCommentsPageModule;
}());
SendCommentsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__send_comments__["a" /* SendCommentsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__send_comments__["a" /* SendCommentsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__send_comments__["a" /* SendCommentsPage */]
        ]
    })
], SendCommentsPageModule);

//# sourceMappingURL=send-comments.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendCommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(197);
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
 * Generated class for the SendCommentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SendCommentsPage = (function () {
    function SendCommentsPage(navCtrl, navParams, UserService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserService = UserService;
        this.http = http;
        this.text = '';
        this.pl = '';
        this.artid = '';
        this.comid = '';
        this.type = '';
        this.targetname = '';
        this.targetid = '';
        this._id = '';
        this.isreply = '';
        this.pl = this.navParams.get('pl');
        this.artid = this.navParams.get('artid');
        this.comid = this.navParams.get('comid');
        this.type = this.navParams.get('type');
        this.targetname = this.navParams.get('targetname');
        this.targetid = this.navParams.get('targetid');
        this._id = this.navParams.get('_id');
        this.isreply = this.navParams.get('reply');
    }
    SendCommentsPage.prototype.save = function () {
        if (this.text.length < 1) {
            alert("请输入评论的内容!");
            return true;
        }
        this.UserService.presentLoadingDefault();
        if (this.comid == '0') {
            this.postdata();
        }
        else {
            this.reply();
        }
    };
    SendCommentsPage.prototype.postdata = function () {
        var _this = this;
        //this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/send_comment";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.UserService._user._id + "&userimg=" + this.UserService._user.userimg + "&name=" + this.UserService._user.nickname + "&artid=" + this.artid + "&type=" + this.type + "&text=" + this.text + "&targetid=" + this.targetid, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.UserService.presentLoadingDismiss();
            if (res.json()) {
                _this.navCtrl.pop();
            }
        });
    };
    //回复
    SendCommentsPage.prototype.reply = function () {
        var _this = this;
        //this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/reply_comment";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "_id=" + this._id + "&name=" + this.UserService._user.nickname + "&targetname=" + this.targetname + "&targetid=" + this.targetid + "&text=" + this.text + "&uid=" + this.UserService._user._id + "&artid=" + this.artid + "&type=" + this.type + "&userimg=" + this.UserService._user.userimg + "&reply=" + this.isreply, {
            headers: headers
        })
            .subscribe(function (res) {
            if (res.json()) {
                _this.UserService.presentLoadingDismiss();
                _this.navCtrl.pop();
            }
        });
    };
    return SendCommentsPage;
}());
SendCommentsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-send-comments',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/send-comments/send-comments.html"*/'<!--\n  Generated template for the SendCommentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>发表评论</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n            输入要评论的内容\n        </ion-list-header>\n\n        <ion-textarea [(ngModel)]="text" placeholder="{{pl}}"></ion-textarea>\n\n    </ion-list>\n    <button ion-button full (click)="save();">发送</button>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/send-comments/send-comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], SendCommentsPage);

//# sourceMappingURL=send-comments.js.map

/***/ })

});
//# sourceMappingURL=36.main.js.map