webpackJsonp([40],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsPageModule", function() { return PersonalDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_details__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalDetailsPageModule = (function () {
    function PersonalDetailsPageModule() {
    }
    return PersonalDetailsPageModule;
}());
PersonalDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */]
        ]
    })
], PersonalDetailsPageModule);

//# sourceMappingURL=personal-details.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsPage; });
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
 * Generated class for the PersonalDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PersonalDetailsPage = (function () {
    function PersonalDetailsPage(UserService, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.isfork = false;
        this.isme = true;
        this.user = this.UserService._user;
        this.rootNavCtrl = navParams.get('rootNavCtrl');
        this._id = this.navParams.data._id;
        if (this.UserService._user._id && this._id == this.UserService._user._id) {
            this.isme = true;
        }
        else {
            this.isme = false;
        }
        this.getdata();
    }
    PersonalDetailsPage.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu2/getuserdata";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.user = res.json()[0];
            if (_this.UserService._user._id && !_this.isme) {
                _this.checkfork();
            }
            else {
                _this.UserService.presentLoadingDismiss();
            }
        });
    };
    //检查是否已经关注
    PersonalDetailsPage.prototype.checkfork = function () {
        this.isfork = this.UserService.checkisfork(this._id);
        this.UserService.presentLoadingDismiss();
    };
    //关注
    PersonalDetailsPage.prototype.fork = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            this.rootNavCtrl.push('LoginPage');
            return true;
        }
        this.checkfork();
        if (this.isfork) {
            return true;
        }
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/forkuser";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&uname=" + this.user['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.user['userimg'], {
            headers: headers
        })
            .subscribe(function (res) {
            if (res.json()) {
                _this.isfork = true;
                _this.UserService.get_fork_user();
            }
        });
    };
    //取消关注
    PersonalDetailsPage.prototype.disfork = function () {
        var _this = this;
        this.checkfork();
        if (!this.isfork) {
            return true;
        }
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/disfork_user";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.isfork = false;
            _this.UserService.get_fork_user();
        });
    };
    PersonalDetailsPage.prototype.baseic = function () {
        alert(1);
    };
    return PersonalDetailsPage;
}());
PersonalDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-personal-details',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/personal-details/personal-details.html"*/'<!--\n  Generated template for the PersonalDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n    <section class="dv_ban_top">\n        <div class="dv_ban_top_div">\n            <p>关注的话题</p>\n            <h2>{{user.forkqus}}</h2>\n        </div>\n        <div class="dv_ban_top_div">\n            <p>我关注的人</p>\n            <h2>{{user.forkuser}}</h2>\n        </div>\n        <div class="dv_ban_top_div">\n            <p>关注我的人</p>\n            <h2>{{user.fork}}</h2>\n        </div>\n        <p>{{user.dec}}</p>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>{{user.work}}</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>{{user.share}}</div>\n                </button>\n            </ion-col>\n            <ion-col center text-center>\n                <button [hidden]="isme || isfork" (click)="fork();" ion-button>关注</button>\n                <button [hidden]="isme || !isfork" (click)="disfork();" ion-button>取消关注</button>\n                <button [hidden]="!isme" (click)="baseic();" ion-button>编辑</button>\n            </ion-col>\n        </ion-row>\n    </section>\n\n    <ion-list no-border>\n\n        <ion-item>\n            <ion-icon name=\'eye\' item-left color="h"></ion-icon>\n            性别\n            <ion-note item-right>\n                {{user.sex==\'0\'?\'男\':\'女\'}}\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'star\' item-left color="h"></ion-icon>\n            积分\n            <ion-note item-right>\n                {{user.integral}}\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'document\' item-left color="h"></ion-icon>\n            居住地\n            <ion-note item-right>\n                {{user.city==\'\'?\'❌\':city}}\n            </ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\'time\' item-left color="h"></ion-icon>\n            行业\n            <ion-note item-right>\n                {{user.job==\'\'?\'❌\':job}}\n            </ion-note>\n        </ion-item>\n\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/personal-details/personal-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PersonalDetailsPage);

//# sourceMappingURL=personal-details.js.map

/***/ })

});
//# sourceMappingURL=40.main.js.map