webpackJsonp([20],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_module__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CommentsPageModule = (function () {
    function CommentsPageModule() {
    }
    return CommentsPageModule;
}());
CommentsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_module__["a" /* FooterComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */]
        ]
    })
], CommentsPageModule);

//# sourceMappingURL=comments.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
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
 * Generated class for the CommentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommentsPage = (function () {
    function CommentsPage(http, UserService, navCtrl, navParams) {
        this.http = http;
        this.UserService = UserService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.ishide = true;
        this.id = this.navParams.get('id');
        this.type = this.navParams.get('type');
        this.getComment();
    }
    //获取评论
    CommentsPage.prototype.getComment = function () {
        var _this = this;
        var url = "http://www.devonhello.com/chihu2/see_comment";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "&id=" + this.id + "&type=" + this.type, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.data = res.json()[0];
            if (_this.data['commarr'].length > 0) {
                _this.ishide = false;
            }
        });
    };
    //查看TA的个人主页
    CommentsPage.prototype.pushPersonPage = function (_id) {
        this.navCtrl.push('PersonalPage', {
            _id: _id
        });
    };
    CommentsPage.prototype.sendComment = function (pl, comid, targetname, targetid, _id, reply) {
        if (!this.UserService._user._id) {
            this.navCtrl.push('LoginPage');
            return true;
        }
        this.navCtrl.push('SendCommentsPage', {
            pl: pl,
            artid: this.data['artid'],
            comid: comid,
            type: this.type,
            targetname: targetname,
            targetid: targetid,
            _id: _id,
            reply: reply
        });
    };
    CommentsPage.prototype.ionViewDidEnter = function () {
        this.getComment();
    };
    return CommentsPage;
}());
CommentsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-comments',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/comments/comments.html"*/'<!--\n  Generated template for the CommentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="mblue">\n        <ion-title>评论详情</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <section class="dv_list">\n        <section class="dv_list">\n            <!--重复-->\n            <section class="dv_item">\n                <section class="dv_item_head" (click)="pushPersonPage( data.uid );">\n                    <img [src]="data.userimg" />\n                    <p>{{data.name}}</p>\n                </section>\n\n                <p>{{data.text}}</p>\n                <section class="dv_item_bottom">\n                    <p class="fl">{{data.time | date }}</p>\n                    <p class="fr mess" (click)="sendComment( \'@\'+data.name, data._id, data.name, data.uid, data._id, \'\' );">回复</p>\n                </section>\n            </section>\n\n        </section>\n\n    </section>\n    <ion-list [hidden]="ishide">\n        <ion-list-header>\n            回复列表 ⬇️️️⬇️️️⬇️️️\n        </ion-list-header>\n    </ion-list>\n    <section class="dv_list">\n        <!--重复-->\n        <section class="dv_item" *ngFor="let item of data.commarr">\n            <section class="dv_item_head" (click)="pushPersonPage( item.uid );">\n                <img [src]="item.userimg" />\n                <p>{{item.name}}</p>\n            </section>\n\n            <p>{{item.text}}<span *ngIf="item.reply && item.reply != \'\'"> //@ <a href="javascript:;" (click)="pushPersonPage( item.targetid );">{{item.targetname}}</a>: {{item.reply}}</span></p>\n            <section class="dv_item_bottom">\n                <p class="fl">{{item.time | date }}</p>\n                <p class="fr mess" (click)="sendComment( \'@\'+item.name, data._id, item.name, item.uid, data._id, item.text );">回复</p>\n            </section>\n        </section>\n\n    </section>\n</ion-content>\n\n<footer [data]="data" [type]="type"></footer>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/comments/comments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CommentsPage);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(384);
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

/***/ 384:
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
        this.type = '';
    }
    FooterComponent.prototype.sendComment = function (pl, comid, targetname, targetid, _id, reply) {
        if (!this.UserService._user._id) {
            this.navCtrl.push('LoginPage');
            return true;
        }
        this.navCtrl.push('SendCommentsPage', {
            pl: pl,
            artid: this.data['artid'],
            comid: comid,
            type: this.type,
            targetname: targetname,
            targetid: targetid,
            _id: _id,
            reply: reply
        });
    };
    return FooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FooterComponent.prototype, "type", void 0);
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'footer',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/comments/footer/footer.html"*/'<!-- Generated template for the FooterComponent component -->\n<ion-footer no-border (click)="sendComment( \'@\'+data.name, data._id, data.name, data.uid, data._id, \'\' )">\n    <ion-grid class="input-wrap">\n        <ion-row>\n\n            <ion-col col-10>\n                <ion-textarea #chat_input disabled=\'true\' placeholder="我要评论..."></ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right>\n                    <ion-icon  name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/comments/footer/footer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ })

});
//# sourceMappingURL=20.main.js.map