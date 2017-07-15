webpackJsonp([15],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListPageModule", function() { return CommentsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_list__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_comments_comments_module__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommentsListPageModule = (function () {
    function CommentsListPageModule() {
    }
    return CommentsListPageModule;
}());
CommentsListPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comments_list__["a" /* CommentsListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_comments_comments_module__["a" /* CommentsComponentModule */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["a" /* FooterComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comments_list__["a" /* CommentsListPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comments_list__["a" /* CommentsListPage */]
        ]
    })
], CommentsListPageModule);

//# sourceMappingURL=comments-list.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentsComponentModule = (function () {
    function CommentsComponentModule() {
    }
    return CommentsComponentModule;
}());
CommentsComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsComponent */]
        ]
    })
], CommentsComponentModule);

//# sourceMappingURL=comments.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
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
 * Generated class for the CommentsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CommentsComponent = (function () {
    function CommentsComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.data = [];
        this.type = [];
    }
    //评论回复列表
    CommentsComponent.prototype.openComments = function (id) {
        this.navCtrl.push('CommentsPage', {
            id: id,
            type: this.type
        });
    };
    //查看TA的个人主页
    CommentsComponent.prototype.pushPersonPage = function (_id) {
        this.navCtrl.push('PersonalPage', {
            _id: _id
        });
    };
    return CommentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "type", void 0);
CommentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'comments',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/components/comments/comments.html"*/'<!-- Generated template for the CommentsComponent component -->\n<section class="item">\n    <header>\n        <img (click)="pushPersonPage( data.uid );" [src]="data.userimg" alt="">\n        <div class="it-left">\n            <h6>{{data.name}}</h6>\n            <p class="time"><i class="fa fa-clock-o" aria-hidden="true"></i>:{{data.time | date }}</p>\n        </div>\n        <div class="fork" (click)="openComments( data._id );"><i class="fa fa-plus" aria-hidden="true"></i> 回复&nbsp;&nbsp;{{data.commarr.length==\'0\'?\'\':data.commarr.length}}</div>\n    </header>\n    <p>{{data.text}}</p>\n\n</section>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/components/comments/comments.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], CommentsComponent);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsListPage; });
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
 * Generated class for the CommentsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommentsListPage = (function () {
    function CommentsListPage(UserService, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [];
        this.isget = false;
        this._id = this.navParams.get('_id');
        this.type = this.navParams.get('type');
        this.name = this.navParams.get('name');
        this.uid = this.navParams.get('uid');
        this.getComment();
    }
    //获取评论
    CommentsListPage.prototype.getComment = function () {
        var _this = this;
        this.UserService.presentLoadingDefault();
        var url = "http://www.devonhello.com/chihu2/get_comment";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "&artid=" + this._id + "&type=" + this.type, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json();
            _this.isget = true;
            _this.UserService.presentLoadingDismiss();
        });
    };
    CommentsListPage.prototype.ionViewDidEnter = function () {
        if (this.isget) {
            this.getComment();
        }
    };
    return CommentsListPage;
}());
CommentsListPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-comments-list',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/comments-list/comments-list.html"*/'<!--\n  Generated template for the CommentsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="mblue">\n        <ion-title>评论列表</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-list-header>\n            {{data.length}} 个评论\n        </ion-list-header>\n    </ion-list>\n    <comments *ngFor="let item of data" [data]="item" [type]="type"></comments>\n</ion-content>\n\n<footer [name]="name" [_id]="_id" [type]="type" [uid]="uid"></footer>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/comments-list/comments-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CommentsListPage);

//# sourceMappingURL=comments-list.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(381);
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

/***/ 381:
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
        this.name = '';
        this._id = '';
        this.uid = '';
        this.type = '';
    }
    FooterComponent.prototype.sendComment = function (pl, comid) {
        if (this.UserService._user._id) {
            this.navCtrl.push('SendCommentsPage', {
                pl: pl,
                artid: this._id,
                comid: comid,
                type: this.type,
                targetid: this.uid
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
], FooterComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "uid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "type", void 0);
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'footer',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/comments-list/footer/footer.html"*/'<!-- Generated template for the FooterComponent component -->\n<ion-footer no-border (click)="sendComment( \'@\'+name, 0 )">\n    <ion-grid class="input-wrap">\n        <ion-row>\n\n            <ion-col col-10>\n                <ion-textarea #chat_input disabled=\'true\' placeholder="我要评论..."></ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right>\n                    <ion-icon  name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/comments-list/footer/footer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map