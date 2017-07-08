webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_module__ = __webpack_require__("../../../../../src/app/contacts/contacts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_contacts_routing_module__ = __webpack_require__("../../../../../src/app/contacts/contacts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_http_json_client__ = __webpack_require__("../../../../../src/app/common/http-json-client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* appRouting */],
            __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_module__["a" /* ContactsModule */],
            __WEBPACK_IMPORTED_MODULE_8__contacts_contacts_routing_module__["a" /* ContactsRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__common_http_json_client__["a" /* HttpJsonClient */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });



var appRoutes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: 'not-found' }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/common/basic-validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicValidators; });
var BasicValidators = (function () {
    function BasicValidators() {
    }
    BasicValidators.email = function (control) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(control.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    BasicValidators.phone = function (control) {
        var PHONE_REGEXP = /^(\s*|\d{9})$/;
        return !control.value || PHONE_REGEXP.test(control.value) ? null : {
            validatePhone: {
                valid: false
            }
        };
    };
    return BasicValidators;
}());

//# sourceMappingURL=basic-validators.js.map

/***/ }),

/***/ "../../../../../src/app/common/http-json-client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpJsonClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpJsonClient = (function () {
    function HttpJsonClient(http) {
        this.http = http;
    }
    HttpJsonClient.prototype.createJsonContentTypeHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    HttpJsonClient.prototype.get = function (url, params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createJsonContentTypeHeader(headers);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        if (params) {
            options.params = params;
        }
        return this.http.get(url, options);
    };
    HttpJsonClient.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createJsonContentTypeHeader(headers);
        return this.http.post(url, JSON.stringify(data), {
            headers: headers
        });
    };
    HttpJsonClient.prototype.put = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createJsonContentTypeHeader(headers);
        return this.http.put(url, JSON.stringify(data), {
            headers: headers
        });
    };
    HttpJsonClient.prototype.delete = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createJsonContentTypeHeader(headers);
        return this.http.delete(url, {
            headers: headers
        });
    };
    return HttpJsonClient;
}());
HttpJsonClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HttpJsonClient);

var _a;
//# sourceMappingURL=http-json-client.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contact-form/contact-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preloader-background {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n  background: rgba(0, 0, 0, 0.3);\r\n\r\n\tposition: fixed;\r\n\tz-index: 100;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contact-form/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"row\">\n  <h5>{{ title }}</h5>\n</div>\n\n<div class=\"preloader-background\" *ngIf=\"isLoading\">\n  <div class=\"preloader-wrapper big active\">\n    <div class=\"spinner-layer spinner-blue-only\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"gap-patch\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <form materialize class=\"col s12\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <i class=\"material-icons prefix\">account_circle</i>\n        <input id=\"firstName\" type=\"text\" class=\"validate\" [(ngModel)]=\"contact.firstName\" formControlName=\"firstName\">\n        <label for=\"firstName\" [class.active]=\"contact.firstName\">\n          First name\n        </label>\n      </div>\n      <div class=\"input-field col s6\">\n        <i class=\"material-icons prefix\">account_circle</i>\n        <input id=\"lastName\" type=\"text\" class=\"validate\" [(ngModel)]=\"contact.lastName\" formControlName=\"lastName\" [ngClass]=\"{'invalid': form.controls['lastName'].touched && !form.controls['lastName'].valid }\"\n          [class.invalid]=\"form.controls['lastName'].touched && !form.controls['lastName'].valid\">\n        <label for=\"lastName\" [class.active]=\"contact.lastName\" data-error=\"Last name is required\">\n          Last name *\n        </label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <i class=\"material-icons prefix\">email</i>\n        <input id=\"email\" type=\"email\" class=\"validate\" [(ngModel)]=\"contact.email\" formControlName=\"email\" [class.invalid]=\"form.controls['email'].touched && !form.controls['email'].valid\">\n        <label for=\"email\" [class.active]=\"contact.email\" data-error=\"Invalid Email\">\n          Email *\n        </label>\n      </div>\n      <div class=\"input-field col s6\">\n        <i class=\"material-icons prefix\">phone</i>\n        <input id=\"phoneNumber\" type=\"text\" class=\"validate\" [(ngModel)]=\"contact.phoneNumber\" formControlName=\"phoneNumber\" [class.invalid]=\"form.controls['phoneNumber'].touched && !form.controls['phoneNumber'].valid\">\n        <label for=\"phoneNumber\" [class.active]=\"contact.phoneNumber\" data-error=\"Invalid phone number\">Phone number</label>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <i class=\"material-icons prefix\">place</i>\n        <input id=\"street\" type=\"text\" class=\"validate\" [(ngModel)]=\"contact.street\" formControlName=\"street\" [class.invalid]=\"form.controls['street'].touched\n                  && !form.controls['street'].valid\">\n        <label for=\"street\" [class.active]=\"contact.street\">\n            Street\n          </label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field col s8\">\n        <i class=\"material-icons prefix\">map</i>\n        <input id=\"city\" type=\"text\" class=\"validate\" [(ngModel)]=\"contact.city\" formControlName=\"city\" [class.invalid]=\"form.controls['city'].touched && !form.controls['city'].valid\">\n        <label for=\"city\" [class.active]=\"contact.city\" data-error=\"City is required\">City *</label>\n      </div>\n      <div class=\"input-field col s4\">\n        <input id=\"zipcode\" type=\"text\" class=\"validate\" [(ngModel)]=\"contact.zipcode\" formControlName=\"zipcode\" [class.invalid]=\"form.controls['zipcode'].touched\n                  && !form.controls['zipcode'].valid\">\n        <label for=\"zipcode\" [class.active]=\"contact.zipcode\" data-error=\"Invalid ZipCode\">\n            ZipCode\n          </label>\n      </div>\n    </div>\n    <br />\n    <div class=\"row\">\n      <div>Contact groups</div>\n      <div *ngIf=\"groups && groups.controls\" class=\"input-field col s8\">\n        <span *ngFor=\"let group of groups.controls; let i=index; let id=index\" style=\"padding-right: 30px\">\n            <input id=\"{{id}}\" type=\"checkbox\" [formControl]=\"group\"/>\n            <label for=\"{{id}}\">{{contactGroups[i].name}}</label>\n          </span>\n      </div>\n    </div>\n    <br /><br />\n    <button class=\"btn waves-effect waves-light\" type=\"submit\" [disabled]=\"!form.valid\">\n      Submit<i class=\"material-icons right\">send</i>\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contact-form/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_contacts_service__ = __webpack_require__("../../../../../src/app/contacts/shared/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_contact_model__ = __webpack_require__("../../../../../src/app/contacts/shared/contact-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_basic_validators__ = __webpack_require__("../../../../../src/app/common/basic-validators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactFormComponent = (function () {
    function ContactFormComponent(formBuilder, router, route, contactService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.contactService = contactService;
        this.contact = new __WEBPACK_IMPORTED_MODULE_1__shared_contact_model__["a" /* ContactModel */]();
        this.contactGroups = new Array();
        this.isLoading = false;
        this.form = formBuilder.group({
            firstName: [''],
            lastName: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* Validators */].required
                ]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_7__common_basic_validators__["a" /* BasicValidators */].email
                ]],
            phoneNumber: ['', [
                    __WEBPACK_IMPORTED_MODULE_7__common_basic_validators__["a" /* BasicValidators */].phone
                ]],
            street: [''],
            city: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* Validators */].required,
                ]],
            zipcode: [''],
            groups: this.buildContactGroups()
        });
    }
    Object.defineProperty(ContactFormComponent.prototype, "groups", {
        get: function () {
            return this.form.get('groups');
        },
        enumerable: true,
        configurable: true
    });
    ContactFormComponent.prototype.buildContactGroups = function () {
        var _this = this;
        var arr = this.contactGroups.map(function (s) {
            return _this.formBuilder.control(s.selected);
        });
        return this.formBuilder.array(arr);
    };
    ContactFormComponent.prototype.setContactGroups = function () {
        var newGroups = this.buildContactGroups();
        var groupsArray = this.form.get('groups');
        for (var index = 0; index < newGroups.length; index++) {
            var existingControl = groupsArray.at(index);
            if (existingControl) {
                groupsArray.setControl(index, newGroups.at(index));
            }
            else {
                groupsArray.insert(index, newGroups.at(index));
            }
        }
    };
    ContactFormComponent.prototype.getSelectedGroupIds = function (formValues) {
        var _this = this;
        return formValues.groups.map(function (item, index) {
            return {
                id: _this.contactGroups[index].id,
                selected: item
            };
        })
            .filter(function (item) { return item.selected; })
            .map(function (item) { return item.id; });
    };
    ContactFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.contactId = id;
            _this.title = id ? 'Edit contact' : 'New contact';
            _this.isLoading = true;
            __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(_this.contactService.getContactGroups(), _this.contactService.getContact(id))
                .subscribe(function (resp) {
                var contactGroups = resp[0];
                var contact = resp[1];
                if (id && !contact) {
                    _this.router.navigate(['NotFound']);
                }
                if (contact) {
                    _this.contact = contact;
                }
                _this.contactGroups = contactGroups.map(function (group) {
                    return {
                        id: group.id,
                        name: group.name,
                        selected: contact && contact.groups.indexOf(group.id) > -1 || false
                    };
                });
                _this.setContactGroups();
            }, function (error) { return alert('Unabwle to load contact'); }, function () { return _this.isLoading = false; });
        });
    };
    ContactFormComponent.prototype.save = function () {
        var _this = this;
        var result;
        var contactValue = this.form.value;
        contactValue.groups = this.getSelectedGroupIds(contactValue);
        this.isLoading = true;
        if (this.contactId) {
            result = this.contactService.updateContact(this.contactId, contactValue);
        }
        else {
            result = this.contactService.addContact(contactValue);
        }
        result.subscribe(function (data) { return _this.router.navigate(['contacts']); }, function (error) { return alert(_this.formatErrorResponse(error)); }, function () { return _this.isLoading = false; });
    };
    ContactFormComponent.prototype.formatErrorResponse = function (errorResponse) {
        var formatedText = errorResponse.message;
        if (errorResponse.errors) {
            errorResponse.errors.forEach(function (error) {
                formatedText += "\r\n - " + error.field + ": " + error.message;
            });
        }
        return formatedText;
    };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_10" /* Component */])({
        selector: 'app-contact-form',
        template: __webpack_require__("../../../../../src/app/contacts/contact-form/contact-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contact-form/contact-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_contacts_service__["a" /* ContactsService */]) === "function" && _d || Object])
], ContactFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contact-list/contact-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preloader-background {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  background: rgba(0, 0, 0, 0.3);\r\n\r\n  position: fixed;\r\n  z-index: 100;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n.buttonlink {\r\n  background: none !important;\r\n  color: inherit;\r\n  border: none;\r\n  padding: 0 !important;\r\n  font: inherit;\r\n  /*border is optional*/\r\n  border-bottom: 1px solid #444;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <p style=\"font-size: 25px\">\r\n    Displaying {{ contacts.length }} contacts.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"preloader-background\" *ngIf=\"isLoading\">\r\n  <div class=\"preloader-wrapper big active\">\r\n    <div class=\"spinner-layer spinner-blue-only\">\r\n      <div class=\"circle-clipper left\">\r\n        <div class=\"circle\"></div>\r\n      </div>\r\n      <div class=\"gap-patch\">\r\n        <div class=\"circle\"></div>\r\n      </div>\r\n      <div class=\"circle-clipper right\">\r\n        <div class=\"circle\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <label>Filter by group</label>\r\n  <select class=\"browser-default\" [ngModel]=\"selectedGroup\" (ngModelChange)=\"onGroupChange($event)\">\r\n    <option [ngValue]=\"group.id\" *ngFor=\"let group of contactGroups\">{{group.name}}</option>\r\n    <option [ngValue]=\"selectedGroup\">--- All groups ---</option>\r\n  </select>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<table>\r\n  <thead>\r\n  <tr>\r\n    <th data-field=\"name\">First name</th>\r\n    <th data-field=\"name\">Last name</th>\r\n    <th data-field=\"name\">Email</th>\r\n    <th data-field=\"name\">Groups</th>\r\n    <th data-field=\"name\">Edit</th>\r\n    <th data-field=\"name\">Delete</th>\r\n  </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let contact of contacts\">\r\n      <td>{{ contact.firstName }}</td>\r\n      <td>{{ contact.lastName }}</td>\r\n      <td>{{ contact.email }}</td>\r\n      <td>\r\n        <ng-template ngFor let-group [ngForOf]=\"translateGroupIds(contact.groups)\">\r\n          <div class=\"chip\">{{group}}</div>\r\n        </ng-template>\r\n      </td>\r\n      <td>\r\n        <a [routerLink]=\"['/contacts', contact.id]\">\r\n          <i class=\"material-icons\">mode_edit</i>\r\n        </a>\r\n      </td>\r\n      <td>\r\n        <button class=\"buttonlink\" (click)=\"deleteContact($event, contact)\">\r\n          <i class=\"material-icons\">delete</i>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n\r\n<div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\r\n  <a class=\"btn-floating btn-large waves-effect waves-light green\"\r\n     routerLink=\"/contacts/new\">\r\n    <i class=\"material-icons\">add</i>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_contacts_service__ = __webpack_require__("../../../../../src/app/contacts/shared/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_finally__ = __webpack_require__("../../../../rxjs/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operator_finally__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactListComponent = (function () {
    function ContactListComponent(contactService, router) {
        this.contactService = contactService;
        this.router = router;
        this.contacts = [];
        this.contactGroups = [];
        this.isLoading = true;
    }
    ContactListComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(this.contactService.getContactGroups(), this.contactService.getContacts()).subscribe(function (resp) {
            _this.contactGroups = resp[0];
            _this.contacts = resp[1];
        }, function (error) { return alert('Unable to load contacts'); }, function () { return (_this.isLoading = false); });
    };
    ContactListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ContactListComponent.prototype.translateGroupIds = function (ids) {
        var _this = this;
        var result = [];
        ids.sort().forEach(function (id) {
            result.push(_this.contactGroups.find(function (i) { return i.id === id; }).name);
        });
        return result;
    };
    ContactListComponent.prototype.deleteContact = function (event, contact) {
        var _this = this;
        event.stopPropagation();
        if (confirm('Are you sure you want to delete ' + contact.lastName + '?')) {
            this.contactService
                .deleteContact(contact.id)
                .subscribe(function () { return _this.loadData(); }, function (err) {
                alert('Could not delete contact.');
            });
        }
    };
    ContactListComponent.prototype.onGroupChange = function (selectedGroup) {
        var _this = this;
        this.isLoading = true;
        this.contactService.getContacts(selectedGroup).subscribe(function (contacts) {
            _this.contacts = contacts;
        }, function (error) { return alert('Unable to load contacts'); }, function () { return (_this.isLoading = false); });
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__("../../../../../src/app/contacts/contact-list/contact-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contact-list/contact-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_contacts_service__["a" /* ContactsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactListComponent);

var _a, _b;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_form_contact_form_component__ = __webpack_require__("../../../../../src/app/contacts/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/contacts/contact-list/contact-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_3__contact_list_contact_list_component__["a" /* ContactListComponent */], pathMatch: 'full' },
    { path: 'contacts/new', component: __WEBPACK_IMPORTED_MODULE_2__contact_form_contact_form_component__["a" /* ContactFormComponent */] },
    { path: 'contacts/:id', component: __WEBPACK_IMPORTED_MODULE_2__contact_form_contact_form_component__["a" /* ContactFormComponent */] }
];
var ContactsRoutingModule = (function () {
    function ContactsRoutingModule() {
    }
    return ContactsRoutingModule;
}());
ContactsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ContactsRoutingModule);

//# sourceMappingURL=contacts-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_routing_module__ = __webpack_require__("../../../../../src/app/contacts/contacts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_list_contact_list_component__ = __webpack_require__("../../../../../src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_form_contact_form_component__ = __webpack_require__("../../../../../src/app/contacts/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_contacts_service__ = __webpack_require__("../../../../../src/app/contacts/shared/contacts.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ContactsModule = (function () {
    function ContactsModule() {
    }
    return ContactsModule;
}());
ContactsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__contacts_routing_module__["a" /* ContactsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__contact_list_contact_list_component__["a" /* ContactListComponent */], __WEBPACK_IMPORTED_MODULE_6__contact_form_contact_form_component__["a" /* ContactFormComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__shared_contacts_service__["a" /* ContactsService */]]
    })
], ContactsModule);

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/shared/contact-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModel; });
var ContactModel = (function () {
    function ContactModel() {
    }
    return ContactModel;
}());

//# sourceMappingURL=contact-model.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/shared/contacts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_http_json_client__ = __webpack_require__("../../../../../src/app/common/http-json-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactsService = (function () {
    function ContactsService(http) {
        this.http = http;
        this.serviceUrl = 'http://localhost:5000/api/contacts';
    }
    ContactsService.prototype.extractData = function (res) {
        var body = res.json();
        return (body || null);
    };
    ContactsService.prototype.handleError1 = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ContactsService.prototype.handleError = function (error) {
        var result;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Response */]) {
            var body = error.json();
            result = body;
            result.statusCode = error.status;
        }
        else {
            result.message = error.message ? error.message : error.toString();
        }
        console.error(result);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(result);
    };
    ContactsService.prototype.getContacts = function (groupId) {
        var _this = this;
        var url = this.serviceUrl;
        if (groupId) {
            url += "?groupId=" + groupId;
        }
        return this.http
            .get(url)
            .map(function (resp) { return _this.extractData(resp); })
            .catch(this.handleError);
    };
    ContactsService.prototype.getContact = function (id) {
        var _this = this;
        if (!id) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(null);
        }
        return this.http
            .get(this.serviceUrl + "/" + id)
            .map(function (resp) { return _this.extractData(resp); })
            .catch(this.handleError);
    };
    ContactsService.prototype.addContact = function (contact) {
        var _this = this;
        return this.http
            .post(this.serviceUrl, contact)
            .map(function (resp) { return _this.extractData(resp); })
            .catch(this.handleError);
    };
    ContactsService.prototype.updateContact = function (id, contact) {
        var _this = this;
        return this.http
            .put(this.serviceUrl + "/" + id, contact)
            .map(function (resp) { return _this.extractData(resp); })
            .catch(this.handleError);
    };
    ContactsService.prototype.deleteContact = function (id) {
        return this.http
            .delete(this.serviceUrl + "/" + id)
            .map(function (resp) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].empty(); })
            .catch(this.handleError);
    };
    ContactsService.prototype.getContactGroups = function () {
        var _this = this;
        if (!this.contactGroups) {
            this.contactGroups = this.http
                .get(this.serviceUrl + '/contactgroups')
                .map(function (resp) { return _this.extractData(resp); })
                .publishReplay(1).refCount()
                .catch(this.handleError);
        }
        return this.contactGroups;
    };
    return ContactsService;
}());
ContactsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__common_http_json_client__["a" /* HttpJsonClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_http_json_client__["a" /* HttpJsonClient */]) === "function" && _a || Object])
], ContactsService);

var _a;
//# sourceMappingURL=contacts.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Welcome to awesome demo app\n</h1>\n\n<p>\n  Continue to contact manager via nav bar link\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav>\n    <div class=\"nav-wrapper\">\n      <a href=\"#!\" class=\"brand-logo center\">Awesome demo app</a>\n      <ul class=\"left hide-on-med-and-down\">\n        <li><a routerLink=\"contacts\" routerLinkActive=\"active\">Contacts</a></li>\n      </ul>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Resource not found\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map