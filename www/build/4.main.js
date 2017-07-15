webpackJsonp([4],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageModule", function() { return ArticlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_food_module__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__steps_steps_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_module__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ArticlePageModule = (function () {
    function ArticlePageModule() {
    }
    return ArticlePageModule;
}());
ArticlePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__article__["a" /* ArticlePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4__food_food_module__["a" /* FoodComponentModule */],
            __WEBPACK_IMPORTED_MODULE_5__steps_steps_module__["a" /* StepsComponentModule */],
            __WEBPACK_IMPORTED_MODULE_6__footer_footer_module__["a" /* FooterComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__article__["a" /* ArticlePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__article__["a" /* ArticlePage */]
        ]
    })
], ArticlePageModule);

//# sourceMappingURL=article.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
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
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ArticlePage = (function () {
    function ArticlePage(UserService, ref, navCtrl, navParams, http) {
        this.UserService = UserService;
        this.ref = ref;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = {};
        this._id = 0;
        //头部导航标题
        this.title = '';
        //底部导航class运动控制属性
        this.tabanimate = false;
        //头部导航class运动控制属性
        this.tabbule = false;
        this.old_scrollTop = 0;
        this.conts = 0;
        this._id = this.navParams.get("_id");
        this.getdata();
    }
    //获取文章数据
    ArticlePage.prototype.getdata = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/article_dec";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json()[0];
            _this.UserService.presentLoadingDismiss();
        });
    };
    //滚动监听
    ArticlePage.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
            if (!this.tabanimate) {
                this.tabanimate = true;
            }
        }
        else {
            this.tabanimate = false;
            if (!this.tabbule && scrollTop > 150) {
                this.tabbule = true;
                this.title = this.data['title'];
            }
            if (scrollTop <= 150) {
                this.tabbule = false;
                this.title = '';
            }
        }
        this.old_scrollTop = scrollTop;
        this.ref.detectChanges();
    };
    return ArticlePage;
}());
ArticlePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-article',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/article/article.html"*/'<!--\n  Generated template for the ArticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border [class.animate]="tabanimate">\n\n    <ion-navbar color="tran" [class.bule]="tabbule">\n        <ion-title>{{data.title}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (ionScroll)="onScroll($event)">\n    <header [data]="data"></header>\n\n    <food [data]="data"></food>\n\n    <steps [data]="data"></steps>\n\n</ion-content>\n\n<footer [data]="data" [tabanimate]="tabanimate" [_id]="_id"></footer>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/article/article.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], ArticlePage);

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodComponentModule = (function () {
    function FoodComponentModule() {
    }
    return FoodComponentModule;
}());
FoodComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__food__["a" /* FoodComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__food__["a" /* FoodComponent */]
        ]
    })
], FoodComponentModule);

//# sourceMappingURL=food.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
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

/**
 * Generated class for the FoodComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var FoodComponent = (function () {
    function FoodComponent() {
        this.data = {};
    }
    return FoodComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FoodComponent.prototype, "data", void 0);
FoodComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'food',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/article/food/food.html"*/'<!-- Generated template for the FoodComponent component -->\n<section class="dv_content">\n    <h3>{{data.title}}</h3>\n    <p>{{data.text}}</p>\n    <h6>用料：</h6>\n\n    <ion-row *ngFor="let item of data.food">\n        <ion-col>\n            <div>{{item.name}}</div>\n        </ion-col>\n        <ion-col>\n            <div>{{item.len}}</div>\n        </ion-col>\n    </ion-row>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/article/food/food.html"*/
    }),
    __metadata("design:paramtypes", [])
], FoodComponent);

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FooterComponentModule = (function () {
    function FooterComponentModule() {
    }
    return FooterComponentModule;
}());
FooterComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__footer__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__footer__["a" /* FooterComponent */]
        ]
    })
], FooterComponentModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(48);
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
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var FooterComponent = (function () {
    function FooterComponent(UserService, http, navCtrl) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.tabanimate = false;
        this.data = {};
        this.conts = 0;
        this.iscoll = false;
        this.isthank = false;
        this.ischecking = false;
    }
    FooterComponent.prototype.ngOnChanges = function (ch) {
        try {
            if (ch['data'].currentValue && ch['data'].currentValue.uid) {
                //console.log( ch['data'].currentValue.uid );
                this.conts = this.data.mark.cont;
                this.checkcoll();
            }
        }
        catch (error) {
        }
    };
    FooterComponent.prototype.pushCommentsListPage = function (type, name, uid, _id) {
        this.navCtrl.push('CommentsListPage', {
            type: type,
            _id: _id,
            name: name,
            uid: uid
        });
    };
    //检查是否已经收藏
    FooterComponent.prototype.checkcoll = function () {
        var _this = this;
        if (this.UserService._user._id != this.data['uid'] && this.UserService._user._id && !this.ischecking) {
            this.ischecking = true;
            var url = "http://www.devonhello.com/chihu2/checkcollart";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "artid=" + this.data['_id'] + "&uid=" + this.UserService._user._id + "&type=1", {
                headers: headers
            })
                .subscribe(function (res) {
                if (res.json().length != "0") {
                    _this.iscoll = true;
                }
                _this.checkthank();
            });
        }
    };
    //检查是否已经关注
    FooterComponent.prototype.checkthank = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu2/checkthank";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "artid=" + this.data['_id'] + "&id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            if (res.json().length != "0") {
                _this.isthank = true;
            }
            _this.ischecking = false;
        });
    };
    //感谢
    FooterComponent.prototype.thank = function () {
        var _this = this;
        if (this.UserService._user._id && !this.ischecking) {
            if (this.UserService._user._id == this.data['uid']) {
                return true;
            }
            var url = "http://www.devonhello.com/chihu2/thank";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&type=1" + "&userimg=" + this.UserService._user.userimg + "&artid=" + this._id + "&title=" + this
                .data['title'], {
                headers: headers
            })
                .subscribe(function (res) {
                if (res.json()['result']['ok'] == 1) {
                    _this.isthank = true;
                }
            });
        }
        else {
            if (this.UserService._user._id) {
                this.checkcoll();
                return true;
            }
            //未登录跳转登陆
            this.navCtrl.push("LoginPage");
        }
    };
    //收藏
    FooterComponent.prototype.collect = function () {
        var _this = this;
        if (this.UserService._user._id && !this.ischecking) {
            if (this.UserService._user._id == this.data['uid']) {
                return true;
            }
            this.UserService.presentLoadingDefault();
            var url = "http://www.devonhello.com/chihu2/coll_article";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "_id=" + this.data['_id'] + "&uid=" + this.UserService._user._id + "&name=" + this.data['name'] + "&type=1" + "&userimg=" + this.data['userimg'] + "&title=" + this.data['title'] + "&text=" + this.data['text'] + "&workbanner=" + this.data['workbanner'], {
                headers: headers
            })
                .subscribe(function (res) {
                if (res.json()) {
                    _this.iscoll = true;
                }
                _this.UserService.presentLoadingDismiss();
            });
        }
        else {
            if (this.UserService._user._id) {
                this.checkcoll();
                return true;
            }
            //未登录跳转登陆
            this.navCtrl.push("LoginPage");
        }
    };
    FooterComponent.prototype.discollect = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/discoll_article";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "artid=" + this._id + "&uid=" + this.UserService._user._id + "&type=1", {
            headers: headers
        })
            .subscribe(function (res) {
            _this.iscoll = false;
            _this.UserService.presentLoadingDismiss();
        });
    };
    return FooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Boolean)
], FooterComponent.prototype, "tabanimate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "_id", void 0);
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'footer',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/article/footer/footer.html"*/'<!-- Generated template for the FooterComponent component -->\n<ion-footer [class.footanimate]="tabanimate">\n    <ion-toolbar color=\'fff\'>\n        <div class="dv_f" (click)="pushCommentsListPage( 1, data.name, data.uid, data._id );">\n            <ion-icon name="text"></ion-icon>\n            {{conts}}\n        </div>\n        <div [hidden]="iscoll" class="dv_f" (click)="collect();">\n            <ion-icon name="star-outline"></ion-icon>\n            收藏\n        </div>\n        <div [hidden]="!iscoll" class="dv_f" (click)="discollect();">\n            <ion-icon name="star"></ion-icon>\n            取消收藏\n        </div>\n        <div [hidden]="isthank" class="dv_f" (click)="thank();">\n            <ion-icon name="heart-outline"></ion-icon>\n            感谢\n        </div>\n        <div [hidden]="!isthank" class="dv_f">\n            <ion-icon name="heart"></ion-icon>\n            已感谢\n        </div>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/article/footer/footer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(369);
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

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(48);
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
        catch (error) {
        }
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
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
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
            this.UserService.presentLoadingDismiss();
            if (this.UserService._user._id) {
                return true;
            }
            this.navCtrl.push("LoginPage");
        }
    };
    //查看TA的个人页面
    HeaderComponent.prototype.pushPersonPage = function (_id) {
        this.navCtrl.push('PersonalPage', {
            _id: _id
        });
    };
    //检查是否已经关注
    HeaderComponent.prototype.checkfork = function () {
        this.isfork = this.UserService.checkisfork(this.data['uid']);
    };
    //取消关注
    HeaderComponent.prototype.unfork = function () {
        var _this = this;
        this.checkfork();
        if (!this.isfork) {
            return true;
        }
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/disfork_user";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
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
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "data", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'header',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/article/header/header.html"*/'<!-- Generated template for the HeaderComponent component -->\n<section class="dv_banner" [style.background]="\'url(\'+data.workbanner+\')\'"></section>\n<section class="user">\n    <img (click)="pushPersonPage( data.uid );" [src]="data.userimg" />\n    <section (click)="pushPersonPage( data.uid );" class="data">\n        <h4>{{data.name}}</h4>\n        <p>创建于：{{data.time | date}}</p>\n    </section>\n    <section [hidden]="isfork" class="fork" (click)="fork();">＋ 关注</section>\n    <section [hidden]="!isfork" class="fork nofork" (click)="unfork();">取消关注</section>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/article/header/header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
], HeaderComponent);

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__steps__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StepsComponentModule = (function () {
    function StepsComponentModule() {
    }
    return StepsComponentModule;
}());
StepsComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__steps__["a" /* StepsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__steps__["a" /* StepsComponent */]
        ]
    })
], StepsComponentModule);

//# sourceMappingURL=steps.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsComponent; });
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

/**
 * Generated class for the StepsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var StepsComponent = (function () {
    function StepsComponent() {
        this.data = {};
    }
    return StepsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], StepsComponent.prototype, "data", void 0);
StepsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'steps',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/article/steps/steps.html"*/'<!-- Generated template for the StepsComponent component -->\n<section class="dv_content">\n    <h6>做法：</h6>\n    <div *ngFor="let item of data.work; let i=index">\n        <p><span>{{i+1}}：</span>{{item.text}}</p>\n        <section *ngIf="item.src != \'\'" class="dv_imgs" (click)="pswpElementInit(i);" [style.background]="\'url(\'+item.src+\')\'"></section>\n    </div>\n    <h6 *ngIf="data.tip != \'\'">提示：</h6>\n    <section *ngIf="data.tip != \'\'" class="dv_tips">\n        <p>{{data.tip}}</p>\n    </section>\n\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/article/steps/steps.html"*/
    }),
    __metadata("design:paramtypes", [])
], StepsComponent);

//# sourceMappingURL=steps.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map