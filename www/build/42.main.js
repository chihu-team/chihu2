webpackJsonp([42],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MorePageModule = (function () {
    function MorePageModule() {
    }
    return MorePageModule;
}());
MorePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__more__["a" /* MorePage */]
        ]
    })
], MorePageModule);

//# sourceMappingURL=more.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(197);
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
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MorePage = (function () {
    function MorePage(UserService, navCtrl, navParams) {
        this.UserService = UserService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = '';
        this.mimg = '';
        this.init();
    }
    MorePage.prototype.ionViewDidEnter = function () {
        this.init();
    };
    MorePage.prototype.init = function () {
        this.name = this.UserService._user.nickname;
        this.mimg = this.UserService._user.userimg;
    };
    MorePage.prototype.PersonalPage = function () {
        this.checkLogin('PersonalPage');
    };
    MorePage.prototype.pushFocusPage = function () {
        this.checkLogin('MyForkPage');
    };
    MorePage.prototype.pushCollectPage = function () {
        this.checkLogin('MyCollectPage');
        //this.navCtrl.push( 'MyCollectPage' );
    };
    MorePage.prototype.pushMySharePage = function () {
        this.checkLogin('MySharePage');
    };
    MorePage.prototype.pushMyQuestionPage = function () {
        this.checkLogin('MyQuestionPage');
    };
    MorePage.prototype.pushMyWorkPage = function () {
        this.checkLogin('MyWorkPage');
    };
    MorePage.prototype.pushMyAnswerPage = function () {
        this.checkLogin('MyAnswerPage');
    };
    MorePage.prototype.pushMyCirclePage = function () {
        this.checkLogin('MyCirclePage');
    };
    MorePage.prototype.pushSettingPage = function () {
        this.navCtrl.push('SettingPage');
    };
    //检查登录状态
    MorePage.prototype.checkLogin = function (page) {
        //alert(this.UserService._user.id);
        if (this.UserService._user._id) {
            this.navCtrl.push(page);
        }
        else {
            this.navCtrl.push('LoginPage');
        }
    };
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    return MorePage;
}());
MorePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-more',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/more/more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>更多</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <section class="dv_data" (click)="PersonalPage();">\n        <img [src]="mimg" />\n        <section class="dv_name_wrap">\n            <h5>{{name}}</h5>\n            <p>查看或编辑个人主页</p>\n        </section>\n    </section>\n\n    <ion-list no-border>\n\n        <ion-item (click)="pushFocusPage();">\n            <ion-icon name=\'eye\' item-left color="h"></ion-icon>\n            我的关注\n        </ion-item>\n        <ion-item (click)="pushCollectPage();">\n            <ion-icon name=\'star\' item-left color="h"></ion-icon>\n            我的收藏\n        </ion-item>\n        <ion-item (click)="pushMySharePage();">\n            <ion-icon name=\'document\' item-left color="h"></ion-icon>\n            我的分享\n        </ion-item>\n        <ion-item (click)="pushMyQuestionPage();">\n            <ion-icon name=\'time\' item-left color="h"></ion-icon>\n            我的提问\n        </ion-item>\n        <ion-item (click)="pushMyWorkPage();">\n            <ion-icon name=\'bookmarks\' item-left color="h"></ion-icon>\n            我的作品\n        </ion-item>\n        <ion-item (click)="pushMyAnswerPage();">\n            <ion-icon name=\'play\' item-left color="h"></ion-icon>\n            我的回答\n        </ion-item>\n        <ion-item (click)="pushMyCirclePage();">\n            <ion-icon name=\'play\' item-left color="h"></ion-icon>\n            朋友圈\n        </ion-item>\n        <ion-item (click)="pushSettingPage();">\n            <ion-icon name=\'school\' item-left color="h"></ion-icon>\n            设置\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/more/more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ })

});
//# sourceMappingURL=42.main.js.map