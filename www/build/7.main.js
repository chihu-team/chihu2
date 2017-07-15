webpackJsonp([7],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQuestionPageModule", function() { return MyQuestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_question__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_list_question_question_module__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyQuestionPageModule = (function () {
    function MyQuestionPageModule() {
    }
    return MyQuestionPageModule;
}());
MyQuestionPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_question__["a" /* MyQuestionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__question_list_question_question_module__["a" /* QuestionComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_question__["a" /* MyQuestionPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_question__["a" /* MyQuestionPage */]
        ]
    })
], MyQuestionPageModule);

//# sourceMappingURL=my-question.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(345);
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

/***/ 345:
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
        this.data = {};
        //是否关注
        this.ishide = true;
    }
    FooterComponent.prototype.ngOnChanges = function (ch) {
        try {
            if (ch['data'].currentValue && ch['data'].currentValue._id) {
                //console.log( ch['data'].currentValue.uid );
                this._id = ch['data'].currentValue._id;
                this.checkfork();
            }
        }
        catch (error) { }
    };
    FooterComponent.prototype.checkfork = function () {
        var _this = this;
        if (this.UserService._user._id) {
            var url = "http://www.devonhello.com/chihu2/checkforkquestion";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "artid=" + this._id + "&id=" + this.UserService._user._id, {
                headers: headers
            })
                .subscribe(function (res) {
                if (res.json().length == "0") {
                    _this.ishide = false;
                }
            });
        }
    };
    FooterComponent.prototype.fork = function () {
        var _this = this;
        if (this.UserService._user._id) {
            var url = "http://www.devonhello.com/chihu2/forkquestion";
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post(url, "uid=" + this.data['uid'] + "&artid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&title=" + this.data['title'], {
                headers: headers
            })
                .subscribe(function (res) {
                if (res.json()['result']['ok'] == 1) {
                    _this.ishide = true;
                    alert("关注成功");
                }
            });
        }
        else {
            this.navCtrl.push('LoginPage');
        }
    };
    return FooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "data", void 0);
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'footer',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/question-list/question/footer/footer.html"*/'<!-- Generated template for the FooterComponent component -->\n<ion-row>\n    <ion-col>\n        <button ion-button icon-left clear small>\n                  <ion-icon name="eye"></ion-icon>\n                  <div>{{data.fork}}</div>\n                </button>\n    </ion-col>\n    <ion-col>\n        <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>{{data.answer}}</div>\n                </button>\n    </ion-col>\n    <ion-col center text-center>\n        <button [hidden]="ishide" ion-button (click)="fork();">＋关注问题</button>\n        <button [hidden]="!ishide" color="tabc" ion-button>-取消关注</button>\n    </ion-col>\n</ion-row>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/question-list/question/footer/footer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(347);
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

/***/ 347:
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
        catch (error) { }
    };
    //检查是否已经关注
    HeaderComponent.prototype.checkfork = function () {
        this.isfork = this.UserService.checkisfork(this.data['uid']);
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
        selector: 'header',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/question-list/question/header/header.html"*/'<!-- Generated template for the HeaderComponent component -->\n<section class="header">\n    <img (click)="pushPersonPage( data.uid );" [src]="data.userimg" alt="">\n    <div class="it-left">\n        <h6>{{data.name}} 分享了心情</h6>\n        <p class="time"><i class="fa fa-clock-o" aria-hidden="true"></i>:{{data.time | date}}</p>\n    </div>\n    <div [hidden]="isfork" class="fork" (click)="fork();"><i class="fa fa-plus" aria-hidden="true"></i> 关注</div>\n    <div [hidden]="!isfork" class="fork nofork" (click)="unfork();"><i class="fa fa-plus" aria-hidden="true"></i> 取消关注</div>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/question-list/question/header/header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
], HeaderComponent);

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var QuestionComponentModule = (function () {
    function QuestionComponentModule() {
    }
    return QuestionComponentModule;
}());
QuestionComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__question__["a" /* QuestionComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["a" /* FooterComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__question__["a" /* QuestionComponent */]
        ]
    })
], QuestionComponentModule);

//# sourceMappingURL=question.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
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
 * Generated class for the QuestionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var QuestionComponent = (function () {
    function QuestionComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.data = {};
    }
    //打开问题
    QuestionComponent.prototype.pushQuestionPage = function (_id) {
        this.navCtrl.push('QuestionPage', {
            _id: _id
        });
    };
    return QuestionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], QuestionComponent.prototype, "data", void 0);
QuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'question',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/question-list/question/question.html"*/'<!-- Generated template for the QuestionComponent component -->\n<section class="dv_top_ban">\n    <header [data]="data"></header>\n    <section (click)="pushQuestionPage(data._id);">\n        <h2>{{data.title}}</h2>\n        <p>{{data.text}}</p>\n        <footer [data]="data"></footer>\n    </section>\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/question-list/question/question.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], QuestionComponent);

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyQuestionPage; });
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
 * Generated class for the MyQuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyQuestionPage = (function () {
    function MyQuestionPage(UserService, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        if (this.navParams.get('id')) {
            this.uid = this.navParams.get('id');
        }
        else {
            this.uid = this.UserService._user._id;
        }
        this.getdata();
    }
    MyQuestionPage.prototype.getdata = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/my_question";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this.uid, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.UserService.presentLoadingDismiss();
            _this.items = res.json();
        });
    };
    return MyQuestionPage;
}());
MyQuestionPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-my-question',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/my-question/my-question.html"*/'<!--\n  Generated template for the MyQuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>我的提问</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <question *ngFor="let item of data" [data]="item"></question>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/my-question/my-question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MyQuestionPage);

//# sourceMappingURL=my-question.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map