webpackJsonp([27],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotAnswerPageModule", function() { return HotAnswerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hot_answer__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_work_work_module__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HotAnswerPageModule = (function () {
    function HotAnswerPageModule() {
    }
    return HotAnswerPageModule;
}());
HotAnswerPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__hot_answer__["a" /* HotAnswerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_work_work_module__["a" /* WorkComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hot_answer__["a" /* HotAnswerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__hot_answer__["a" /* HotAnswerPage */]
        ]
    })
], HotAnswerPageModule);

//# sourceMappingURL=hot-answer.module.js.map

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

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotAnswerPage; });
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
 * Generated class for the HotAnswerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HotAnswerPage = (function () {
    function HotAnswerPage(UserService, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.getdata();
    }
    //获取数据
    HotAnswerPage.prototype.getdata = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/hot_answer";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "type=0", {
            headers: headers
        })
            .subscribe(function (res) {
            _this.UserService.presentLoadingDismiss();
            _this.data = _this.data.concat(res.json());
        });
    };
    return HotAnswerPage;
}());
HotAnswerPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-hot-answer',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/hot-answer/hot-answer.html"*/'<!--\n  Generated template for the HotAnswerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>热门回答</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <work [data]="data"></work>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/hot-answer/hot-answer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HotAnswerPage);

//# sourceMappingURL=hot-answer.js.map

/***/ })

});
//# sourceMappingURL=27.main.js.map