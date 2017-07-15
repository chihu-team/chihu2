webpackJsonp([9],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundPageModule", function() { return FoundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__found__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_swiper_swiper_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_share_share_module__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FoundPageModule = (function () {
    function FoundPageModule() {
    }
    return FoundPageModule;
}());
FoundPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__found__["a" /* FoundPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_swiper_swiper_module__["a" /* SwiperComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_share_share_module__["a" /* ShareComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__found__["a" /* FoundPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__found__["a" /* FoundPage */]
        ]
    })
], FoundPageModule);

//# sourceMappingURL=found.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderComponentModule = (function () {
    function HeaderComponentModule() {
    }
    return HeaderComponentModule;
}());
HeaderComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderComponent */]
        ]
    })
], HeaderComponentModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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




/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var HeaderComponent = (function () {
    function HeaderComponent(UserService, http, navCtrl) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.data = {};
        //是否关注
        this.isfork = false;
    }
    HeaderComponent.prototype.ngOnChanges = function (ch) {
        try {
            if (ch['data'].currentValue && ch['data'].currentValue.uid) {
                //console.log( ch['data'].currentValue.uid );
                this.checkfork();
            }
        }
        catch (error) { }
    };
    //关注
    HeaderComponent.prototype.fork = function () {
        var _this = this;
        this.checkfork();
        if (this.isfork) {
            return true;
        }
        this.UserService.presentLoadingDefault();
        if (this.UserService._user._id != this.data['uid'] && this.UserService._user._id) {
            var url = "http://www.devonhello.com/chihu2/forkuser";
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&uname=" + this.data['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.data['userimg'], {
                headers: headers
            })
                .subscribe(function (res) {
                if (res.json()) {
                    _this.isfork = true;
                }
                _this.UserService.get_fork_user();
            });
        }
        else {
            if (this.UserService._user._id) {
                return true;
            }
            this.navCtrl.push("LoginPage");
        }
    };
    //取消关注
    HeaderComponent.prototype.unfork = function () {
        var _this = this;
        this.checkfork();
        if (!this.isfork) {
            return true;
        }
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/unforkuser";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            if (res.json()) {
                _this.isfork = false;
            }
            _this.UserService.get_fork_user();
        });
    };
    //检查是否已经关注
    HeaderComponent.prototype.checkfork = function () {
        this.isfork = this.UserService.checkisfork(this.data['uid']);
    };
    //查看TA的个人页面
    HeaderComponent.prototype.pushPersonPage = function (_id) {
        this.navCtrl.push('PersonalPage', {
            _id: _id
        });
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "data", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'header',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/components/share/header/header.html"*/'<!-- Generated template for the HeaderComponent component -->\n<section class="header">\n    <img (click)="pushPersonPage( data.uid );" [src]="data.userimg" alt="">\n    <div class="it-left">\n        <h6>{{data.name}} 分享了心情</h6>\n        <p class="time"><i class="fa fa-clock-o" aria-hidden="true"></i>:{{data.time | date}}</p>\n    </div>\n    <div [hidden]="isfork" class="fork" (click)="fork();"><i class="fa fa-plus" aria-hidden="true"></i> 关注</div>\n    <div [hidden]="!isfork" class="fork nofork" (click)="unfork();"><i class="fa fa-plus" aria-hidden="true"></i> 取消关注</div>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/components/share/header/header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HeaderComponent);

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShareComponentModule = (function () {
    function ShareComponentModule() {
    }
    return ShareComponentModule;
}());
ShareComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__share__["a" /* ShareComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__share__["a" /* ShareComponent */]
        ]
    })
], ShareComponentModule);

//# sourceMappingURL=share.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareComponent; });
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
 * Generated class for the ShareComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ShareComponent = (function () {
    function ShareComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.data = {};
    }
    ShareComponent.prototype.pushOpenSharePage = function (_id) {
        this.navCtrl.push('OpenSharePage', {
            _id: _id
        });
    };
    return ShareComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], ShareComponent.prototype, "data", void 0);
ShareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'share',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/components/share/share.html"*/'<!-- Generated template for the ShareComponent component -->\n<section class="item" *ngFor="let item of data">\n    <header [data]="item"></header>\n    <section (click)="pushOpenSharePage( item._id );">\n        <p>{{item.text}}</p>\n        <section class="imgs-wrap">\n            <div *ngFor="let item2 of item.img" class="imgs" [style.background]="\'url(\'+item2.src+\')\'"></div>\n\n        </section>\n        <section class="mark">\n            <p><i class="fa fa-eye" aria-hidden="true"></i> 0</p>\n            <p class="cen"><i class="fa fa-commenting-o" aria-hidden="true"></i> {{item.mark.cont}}</p>\n            <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{item.mark.like}}</p>\n        </section>\n    </section>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/components/share/share.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ShareComponent);

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swiper__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwiperComponentModule = (function () {
    function SwiperComponentModule() {
    }
    return SwiperComponentModule;
}());
SwiperComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__swiper__["a" /* SwiperComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__swiper__["a" /* SwiperComponent */]
        ]
    })
], SwiperComponentModule);

//# sourceMappingURL=swiper.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwiperComponent = (function () {
    function SwiperComponent() {
        //存储swiper对象
        this.oSwiper = null;
    }
    SwiperComponent.prototype.ngOnInit = function () {
        this.oSwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            // 如果需要分页器
            pagination: '.swiper-pagination',
        });
    };
    return SwiperComponent;
}());
SwiperComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'swiper',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/components/swiper/swiper.html"*/'<!-- Generated template for the SwiperComponent component -->\n<div class="swiper-container">\n    <div class="swiper-wrapper">\n\n        <div class="swiper-slide" style="background: url(\'http://7xp2ia.com1.z0.glb.clouddn.com/banner5.png\')"></div>\n        <div class="swiper-slide" style="background: url(\'http://7xp2ia.com1.z0.glb.clouddn.com/banner2.png\')"></div>\n        <div class="swiper-slide" style="background: url(\'http://7xp2ia.com1.z0.glb.clouddn.com/banner3.png\')"></div>\n        <div class="swiper-slide" style="background: url(\'http://7xp2ia.com1.z0.glb.clouddn.com/banner4.png\')"></div>\n        <div class="swiper-slide" style="background: url(\'http://7xp2ia.com1.z0.glb.clouddn.com/banner1.png\')"></div>\n\n    </div>\n    <!-- 如果需要分页器 -->\n    <div class="swiper-pagination"></div>\n</div>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/components/swiper/swiper.html"*/
    }),
    __metadata("design:paramtypes", [])
], SwiperComponent);

//# sourceMappingURL=swiper.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoundPage; });
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
 * Generated class for the FoundPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FoundPage = (function () {
    function FoundPage(UserService, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //数据
        this.data = [];
        this._refresher = null;
        this.getdata();
    }
    //获取分享数据
    FoundPage.prototype.getdata = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/share";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "len=" + this.data.length, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = _this.data.concat(res.json());
            _this.UserService.presentLoadingDismiss();
            if (_this._refresher) {
                _this._refresher.complete();
            }
        });
    };
    FoundPage.prototype.pushQueList = function () {
        this.navCtrl.push('QuestionListPage');
    };
    FoundPage.prototype.pushHotWork = function () {
        this.navCtrl.push('HotWorkPage');
    };
    FoundPage.prototype.pushHotAnswer = function () {
        this.navCtrl.push('HotAnswerPage');
    };
    FoundPage.prototype.pushHotShare = function () {
        this.navCtrl.push('HotSharePage');
    };
    FoundPage.prototype.doRefresh = function (refresher) {
        this.data = [];
        this.getdata();
        this._refresher = refresher;
    };
    FoundPage.prototype.doInfinite = function (infiniteScroll) {
        //alert(1);
        this.getdata();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1500);
    };
    return FoundPage;
}());
FoundPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-found',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/found/found.html"*/'<!--\n  Generated template for the FoundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>发现</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <!--banner切换组件-->\n    <swiper></swiper>\n\n    <section class="dv_box">\n        <div class="dv_items" (click)="pushQueList();">\n            <i style="color: #9c27b0;" class="fa fa-question-circle" aria-hidden="true"></i>\n            <p>问题列表</p>\n        </div>\n        <div class="dv_items" (click)="pushHotWork();">\n            <i style="color: #ffeb3b;" class="fa fa-industry" aria-hidden="true"></i>\n            <p>热门作品</p>\n        </div>\n        <div class="dv_items" (click)="pushHotAnswer();">\n            <i style="color: #03a9f4;" class="fa fa-bookmark" aria-hidden="true"></i>\n            <p>精品回答</p>\n        </div>\n        <div class="dv_items" (click)="pushHotShare();">\n            <i style="color: #8BC34A;" class="fa fa-shield" aria-hidden="true"></i>\n            <p>人气分享</p>\n        </div>\n    </section>\n\n    <share [data]="data"></share>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/found/found.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FoundPage);

//# sourceMappingURL=found.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map