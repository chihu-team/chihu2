webpackJsonp([34],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendWorkTypePageModule", function() { return SendWorkTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_work_type__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendWorkTypePageModule = (function () {
    function SendWorkTypePageModule() {
    }
    return SendWorkTypePageModule;
}());
SendWorkTypePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__send_work_type__["a" /* SendWorkTypePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__send_work_type__["a" /* SendWorkTypePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__send_work_type__["a" /* SendWorkTypePage */]
        ]
    })
], SendWorkTypePageModule);

//# sourceMappingURL=send-work-type.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendWorkTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_work_data_work_data__ = __webpack_require__(200);
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
 * Generated class for the SendWorkTypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SendWorkTypePage = (function () {
    function SendWorkTypePage(WorkService, navCtrl, navParams) {
        this.WorkService = WorkService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = '';
    }
    //继续
    SendWorkTypePage.prototype.next = function () {
        this.WorkService._title = this.title;
        //alert(this.WorkService._title);
        this.navCtrl.push('SendWorkPage');
    };
    return SendWorkTypePage;
}());
SendWorkTypePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-send-work-type',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/send-work-type/send-work-type.html"*/'<!--\n  Generated template for the SendWorkTypePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n    <ion-navbar color="mblue">\n        <ion-title>作品分类</ion-title>\n        <ion-buttons end (click)="next();">\n            <ion-title>继续</ion-title>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <input class="dv_work_title" [(ngModel)]="title" type="text" placeholder="写下你的菜谱名吧" />\n    <br/>\n    <br/>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/send-work-type/send-work-type.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_work_data_work_data__["a" /* WorkDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SendWorkTypePage);

//# sourceMappingURL=send-work-type.js.map

/***/ })

});
//# sourceMappingURL=34.main.js.map