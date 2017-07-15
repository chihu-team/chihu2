webpackJsonp([14],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotSharePageModule", function() { return HotSharePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hot_share__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_share_share_module__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HotSharePageModule = (function () {
    function HotSharePageModule() {
    }
    return HotSharePageModule;
}());
HotSharePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__hot_share__["a" /* HotSharePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_share_share_module__["a" /* ShareComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hot_share__["a" /* HotSharePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__hot_share__["a" /* HotSharePage */]
        ]
    })
], HotSharePageModule);

//# sourceMappingURL=hot-share.module.js.map

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
        selector: 'share',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/components/share/share.html"*/'<!-- Generated template for the ShareComponent component -->\n<section class="item" *ngFor="let item of data" (click)="pushOpenSharePage( item._id );">\n    <header [data]="item"></header>\n    <section>\n        <p>{{item.text}}</p>\n        <section class="imgs-wrap">\n            <div *ngFor="let item2 of item.img" class="imgs" [style.background]="\'url(\'+item2.src+\')\'"></div>\n\n        </section>\n        <section class="mark">\n            <p><i class="fa fa-eye" aria-hidden="true"></i> 0</p>\n            <p class="cen"><i class="fa fa-commenting-o" aria-hidden="true"></i> {{item.mark.cont}}</p>\n            <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{item.mark.like}}</p>\n        </section>\n    </section>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/components/share/share.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ShareComponent);

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotSharePage; });
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
 * Generated class for the HotSharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HotSharePage = (function () {
    function HotSharePage(UserService, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.getdata();
    }
    HotSharePage.prototype.getdata = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/hot_share";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "len=" + this.data.length, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.UserService.presentLoadingDismiss();
            _this.data = _this.data.concat(res.json());
        });
    };
    HotSharePage.prototype.doInfinite = function (infiniteScroll) {
        this.getdata();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1500);
    };
    return HotSharePage;
}());
HotSharePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-hot-share',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/hot-share/hot-share.html"*/'<!--\n  Generated template for the HotSharePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>人气分享</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <share [data]="data"></share>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/hot-share/hot-share.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HotSharePage);

//# sourceMappingURL=hot-share.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map