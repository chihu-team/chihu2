webpackJsonp([46],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForkQuestionPageModule", function() { return ForkQuestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fork_question__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForkQuestionPageModule = (function () {
    function ForkQuestionPageModule() {
    }
    return ForkQuestionPageModule;
}());
ForkQuestionPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__fork_question__["a" /* ForkQuestionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fork_question__["a" /* ForkQuestionPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__fork_question__["a" /* ForkQuestionPage */]
        ]
    })
], ForkQuestionPageModule);

//# sourceMappingURL=fork-question.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForkQuestionPage; });
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
 * Generated class for the ForkQuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForkQuestionPage = (function () {
    function ForkQuestionPage(UserService, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.rootNavCtrl = navParams.get('rootNavCtrl');
        if (this.navParams.get('id')) {
            this.uid = this.navParams.get('id');
        }
        else {
            this.uid = this.UserService._user._id;
        }
        this.getdata();
    }
    //关注的问题
    ForkQuestionPage.prototype.getdata = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu2/getforkquestion";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "id=" + this.uid, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    //打开问题
    ForkQuestionPage.prototype.pushQuestionPage = function (_id) {
        this.rootNavCtrl.push('QuestionPage', {
            _id: _id
        });
    };
    return ForkQuestionPage;
}());
ForkQuestionPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-fork-question',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/fork-question/fork-question.html"*/'<!--\n  Generated template for the ForkQuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n    <ion-list inset>\n        <button (click)="pushQuestionPage( item.artid );" ion-item *ngFor="let item of data">\n          {{ item.title }}\n        </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/fork-question/fork-question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ForkQuestionPage);

//# sourceMappingURL=fork-question.js.map

/***/ })

});
//# sourceMappingURL=46.main.js.map