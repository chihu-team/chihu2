webpackJsonp([30],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeInformPageModule", function() { return NoticeInformPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_inform__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mes_item_mes_item_module__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoticeInformPageModule = (function () {
    function NoticeInformPageModule() {
    }
    return NoticeInformPageModule;
}());
NoticeInformPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notice_inform__["a" /* NoticeInformPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_mes_item_mes_item_module__["a" /* MesItemComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notice_inform__["a" /* NoticeInformPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notice_inform__["a" /* NoticeInformPage */]
        ]
    })
], NoticeInformPageModule);

//# sourceMappingURL=notice-inform.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesItemComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mes_item__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MesItemComponentModule = (function () {
    function MesItemComponentModule() {
    }
    return MesItemComponentModule;
}());
MesItemComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mes_item__["a" /* MesItemComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__mes_item__["a" /* MesItemComponent */]
        ]
    })
], MesItemComponentModule);

//# sourceMappingURL=mes-item.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesItemComponent; });
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
 * Generated class for the MesItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MesItemComponent = (function () {
    function MesItemComponent() {
        this.items = [{
                "_id": "594936e835b71e5004c7eb92",
                "uid": "59475a9e35b71e5004c7eb86",
                "id": "594935e835b71e5004c7eb91",
                "userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3",
                "artid": "594788b835b71e5004c7eb8a",
                "isread": 0,
                "title": "菜谱测试",
                "type": "1",
                "conttext": "112233445566  ❤️感谢了你的作品分享"
            },
            {
                "_id": "5949e73db6c066e50e04a2a5",
                "uid": "59475a9e35b71e5004c7eb86",
                "id": "594935e835b71e5004c7eb91",
                "userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3",
                "artid": "59475afe35b71e5004c7eb88",
                "isread": 0,
                "title": "什么汤对胃好",
                "type": "0",
                "conttext": "112233445566  ❤️️感谢了你的回答"
            },
            {
                "_id": "594b8b648063ec6f1b4ae728",
                "uid": "59475a9e35b71e5004c7eb86",
                "id": "594b8aa58063ec6f1b4ae724",
                "userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3",
                "artid": "594787e435b71e5004c7eb89",
                "isread": 0,
                "title": "昨天是父亲节，也是爷爷的生日，好开心啊🎉🎉🎉",
                "type": "2",
                "conttext": "123  👍点赞了你的分享"
            },
            {
                "_id": "594b8b6a8063ec6f1b4ae72a",
                "uid": "59475a9e35b71e5004c7eb86",
                "id": "594b8aa58063ec6f1b4ae724",
                "userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3",
                "artid": "594787e435b71e5004c7eb89",
                "isread": 0,
                "title": "昨天是父亲节，也是爷爷的生日，好开心啊🎉🎉🎉",
                "type": "2",
                "conttext": "123  👍点赞了你的分享"
            },
            {
                "_id": "594b8e5c8063ec6f1b4ae72c",
                "uid": "59475a9e35b71e5004c7eb86",
                "id": "5946a0f0285302bb09d9e601",
                "userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3",
                "artid": "594787e435b71e5004c7eb89",
                "isread": 0,
                "title": "昨天是父亲节，也是爷爷的生日，好开心啊🎉🎉🎉",
                "type": "2",
                "conttext": "zhangtao  👍点赞了你的分享"
            },
            {
                "_id": "5950878b5b21b48108124705",
                "uid": "59475a9e35b71e5004c7eb86",
                "id": "594935e835b71e5004c7eb91",
                "userimg": "https://avatars2.githubusercontent.com/u/11835988?v=3",
                "artid": "594d378263a02f0cff548395",
                "isread": 0,
                "title": "\n带着满满的记忆味道~~~幹豆角烧肉在计划经济年代，物资匮乏是普遍现象；因为没有冰箱和一些其它防......",
                "type": "2",
                "conttext": "112233445566  👍点赞了你的分享"
            }];
    }
    return MesItemComponent;
}());
MesItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'mes-item',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/components/mes-item/mes-item.html"*/'<!-- Generated template for the MesItemComponent component -->\n<ion-list>\n\n    <ion-item *ngFor="let item of items">\n        <ion-avatar item-left (click)="pushPersonPage( item.id )">\n            <img [src]="item.userimg">\n        </ion-avatar>\n        <div (click)="open( item.artid, item.type );">\n            <h2>{{item.conttext}}</h2>\n            <p>{{item.title}}</p>\n        </div>\n    </ion-item>\n\n\n</ion-list>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/components/mes-item/mes-item.html"*/
    }),
    __metadata("design:paramtypes", [])
], MesItemComponent);

//# sourceMappingURL=mes-item.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeInformPage; });
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
 * Generated class for the NoticeInformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NoticeInformPage = (function () {
    function NoticeInformPage(UserService, http, navCtrl, navParams) {
        this.UserService = UserService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.nomessage = true;
        this.rootNavCtrl = navParams.get('rootNavCtrl');
        this.getdata();
    }
    //获取数据
    NoticeInformPage.prototype.getdata = function () {
        var _this = this;
        if (!this.UserService._user._id) {
            //未登录
            this.items = [];
            return true;
        }
        var url = "http://www.devonhello.com/chihu2/getinform";
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "uid=" + this.UserService._user._id, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.items = res.json();
            if (res.json().length != '0') {
                _this.nomessage = false;
            }
        });
    };
    //查看TA的个人主页
    NoticeInformPage.prototype.pushPerson = function (_id) {
        this.rootNavCtrl.push('PersonalPage', {
            _id: _id
        });
    };
    //打开文章
    NoticeInformPage.prototype.pushPages = function (type, _id) {
        switch (type) {
            case '1':
                this.rootNavCtrl.push('ArticlePage', {
                    _id: _id
                });
                break;
            case '2':
                this.rootNavCtrl.push('AnswerPage', {
                    _id: _id
                });
                break;
            case '3':
                this.rootNavCtrl.push('OpenSharePage', {
                    _id: _id
                });
                break;
            default:
                break;
        }
    };
    NoticeInformPage.prototype.ionViewDidEnter = function () {
        this.getdata();
    };
    return NoticeInformPage;
}());
NoticeInformPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-notice-inform',template:/*ion-inline-start:"/Users/apple/Desktop/github/chihu2/src/pages/notice/notice-inform/notice-inform.html"*/'<!--\n  Generated template for the NoticeInformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content [class.nomessage]="nomessage">\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of items">\n            <ion-avatar item-left (click)="pushPerson( item.targetid );">\n                <img [src]="item.userimg">\n            </ion-avatar>\n            <h2 (click)="pushPages( item.type, item.artid );">{{item.name}}</h2>\n            <p (click)="pushPages( item.type, item.artid );">{{item.title}}</p>\n\n        </ion-item>\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/apple/Desktop/github/chihu2/src/pages/notice/notice-inform/notice-inform.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], NoticeInformPage);

//# sourceMappingURL=notice-inform.js.map

/***/ })

});
//# sourceMappingURL=30.main.js.map