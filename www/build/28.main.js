webpackJsonp([28],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_work_work_module__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_work_work_module__["a" /* WorkComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

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

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(UserService, http, navCtrl, navParams, ref) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.tabanimate = false;
        this.old_scrollTop = 0;
        this.new_scrollTop = 0;
        this._refresher = null;
        //数据
        this.items = [];
        this.getdata();
    }
    //获取数据
    HomePage.prototype.getdata = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/home";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "len=" + this.items.length, {
            headers: headers
        })
            .subscribe(function (res) {
            if (_this._refresher) {
                _this._refresher.complete();
            }
            _this.items = _this.items.concat(res.json());
            _this.UserService.presentLoadingDismiss();
        });
    };
    HomePage.prototype.openSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.items = [];
        this.getdata();
        this._refresher = refresher;
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        this.getdata();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1500);
    };
    HomePage.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
            if (!this.tabanimate) {
                this.tabanimate = true;
            }
        }
        else {
            this.tabanimate = false;
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    };
    HomePage.prototype.openMmessage = function () {
        this.navCtrl.push('MessagePage');
    };
    //创建菜谱
    HomePage.prototype.CreateCook = function () {
        this.checkLogin('SendWorkTypePage');
    };
    //提问
    HomePage.prototype.CreateQuestion = function () {
        this.checkLogin('SendQuestionPage');
    };
    //分享
    HomePage.prototype.CreateShare = function () {
        this.checkLogin('SendSharePage');
    };
    //检查登录状态
    HomePage.prototype.checkLogin = function (page) {
        if (this.UserService._user._id) {
            this.navCtrl.push(page);
        }
        else {
            this.navCtrl.push('LoginPage');
        }
    };
    return HomePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header [class.headanimate]="tabanimate">\n\n    <ion-navbar color="mblue">\n        <ion-searchbar (click)="openSearch();" placeholder="搜索"></ion-searchbar>\n        <ion-buttons end (click)="openMmessage();">\n            <button ion-button icon-only>\n              <ion-icon name="text"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (ionScroll)="onScroll($event)" scrollY="false">\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <work [data]=\'items\'></work>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    <!--发布按钮-->\n    <ion-fab right bottom edge #327eff>\n        <button ion-fab><ion-icon name="arrow-dropup"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button (click)="CreateQuestion()" ion-fab><ion-icon name="help"></ion-icon></button>\n            <button (click)="CreateShare()" ion-fab><ion-icon name="images"></ion-icon></button>\n            <button (click)="CreateCook()" ion-fab><ion-icon name="clipboard"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ChangeDetectorRef */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=28.main.js.map