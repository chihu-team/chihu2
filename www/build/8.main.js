webpackJsonp([8],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPageModule", function() { return QuestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_work_work_module__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_list_question_header_header_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_list_question_footer_footer_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QuestionPageModule = (function () {
    function QuestionPageModule() {
    }
    return QuestionPageModule;
}());
QuestionPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__question__["a" /* QuestionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_work_work_module__["a" /* WorkComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4__question_list_question_header_header_module__["a" /* HeaderComponentModule */],
            __WEBPACK_IMPORTED_MODULE_5__question_list_question_footer_footer_module__["a" /* FooterComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* QuestionPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__question__["a" /* QuestionPage */]
        ]
    })
], QuestionPageModule);

//# sourceMappingURL=question.module.js.map

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

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
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
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var QuestionPage = (function () {
    function QuestionPage(UserService, ref, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.ref = ref;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = '';
        this.tabanimate = false;
        this.data = {};
        this.items = [];
        this.ishide = true;
        this._id = this.navParams.get("_id");
        this.getdata();
    }
    QuestionPage.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu2/question";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json()[0];
            _this.title = _this.data['title'];
            _this.getlist();
        });
    };
    //获取数据
    QuestionPage.prototype.getlist = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu2/answer_list";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.items = res.json();
        });
    };
    QuestionPage.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        if (scrollTop > 250) {
            if (!this.tabanimate) {
                this.tabanimate = true;
            }
        }
        else {
            this.tabanimate = false;
        }
        this.ref.detectChanges();
    };
    QuestionPage.prototype.add = function () {
        if (!this.UserService._user._id) {
            this.navCtrl.push('LoginPage');
            return true;
        }
        this.navCtrl.push('SendAnswerPage', {
            id: this._id,
            title: this.title
        });
    };
    return QuestionPage;
}());
QuestionPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-question',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/question/question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title [class.animate]="tabanimate">\n            {{title}}\n            <p>{{data.answer}} 个回答</p>\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (ionScroll)="onScroll($event)">\n    <section class="dv_top_ban">\n        <header [data]="data"></header>\n        <h2>{{data.title}}</h2>\n        <p>{{data.text}}</p>\n        <footer [data]="data"></footer>\n    </section>\n\n\n    <ion-list>\n        <ion-list-header>\n            4 个评论\n        </ion-list-header>\n    </ion-list>\n    <work [data]=\'items\' [ishideTitle]="ishide"></work>\n\n    <ion-fab right bottom>\n        <button ion-fab mini (click)="add();"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/question/question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], QuestionPage);

//# sourceMappingURL=question.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map