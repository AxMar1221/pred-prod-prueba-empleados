(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/file-item.ts":
/*!*************************************!*\
  !*** ./src/app/Models/file-item.ts ***!
  \*************************************/
/*! exports provided: FileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
var FileItem = /** @class */ (function () {
    function FileItem(file) {
        this.file = file;
        this.fileName = file.name;
        this.estateOfCharge = false;
        this.progress = 0;
    }
    return FileItem;
}());



/***/ }),

/***/ "./src/app/Models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/Models/user.model.ts ***!
  \**************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_employees_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/employees/employees.component */ "./src/app/pages/employees/employees.component.ts");
/* harmony import */ var _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/upload/upload.component */ "./src/app/pages/upload/upload.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");









var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'registro', component: _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__["RegistroComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'employees', component: _pages_employees_employees_component__WEBPACK_IMPORTED_MODULE_6__["EmployeesComponent"] },
    { path: 'upload', component: _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'registro' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'loginApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/ng-drop-files.directive */ "./src/app/directives/ng-drop-files.directive.ts");
/* harmony import */ var _services_uploadimg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/uploadimg.service */ "./src/app/services/uploadimg.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/registro/registro.component */ "./src/app/pages/registro/registro.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/navbar/navbar.component */ "./src/app/pages/navbar/navbar.component.ts");
/* harmony import */ var _pages_employees_employees_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/employees/employees.component */ "./src/app/pages/employees/employees.component.ts");
/* harmony import */ var _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/upload/upload.component */ "./src/app/pages/upload/upload.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_14__["RegistroComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _pages_employees_employees_component__WEBPACK_IMPORTED_MODULE_17__["EmployeesComponent"],
                _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_18__["UploadComponent"],
                _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_2__["NgDropFilesDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"]
            ],
            providers: [
                _services_uploadimg_service__WEBPACK_IMPORTED_MODULE_3__["UploadimgService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/ng-drop-files.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/ng-drop-files.directive.ts ***!
  \*******************************************************/
/*! exports provided: NgDropFilesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDropFilesDirective", function() { return NgDropFilesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_file_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/file-item */ "./src/app/Models/file-item.ts");



var NgDropFilesDirective = /** @class */ (function () {
    function NgDropFilesDirective() {
        this.files = [];
        this.mouseIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgDropFilesDirective.prototype.onDragEnter = function (event) {
        this.mouseIn.emit(true);
        this._preventKeep(event);
    };
    NgDropFilesDirective.prototype.onDragLeave = function (event) {
        this.mouseIn.emit(false);
    };
    NgDropFilesDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        this._extracFile(transfer.files);
        this._preventKeep(event);
        this.mouseIn.emit(false);
    };
    NgDropFilesDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer
            : event.originalEvent.dataTransfer;
    };
    NgDropFilesDirective.prototype._extracFile = function (filesList) {
        // console.log( filesList );
        for (var property in Object.getOwnPropertyNames(filesList)) {
            var fileTemp = filesList[property];
            if (this._fileCanUpload(fileTemp)) {
                var newFile = new _Models_file_item__WEBPACK_IMPORTED_MODULE_2__["FileItem"](fileTemp);
                this.files.push(newFile);
            }
        }
        console.log(this.files);
    };
    //validations
    NgDropFilesDirective.prototype._fileCanUpload = function (file) {
        if (!this._fileWasDrop(file.name) && this._isImage(file.type)) {
            return true;
        }
        else {
            return false;
        }
    };
    NgDropFilesDirective.prototype._preventKeep = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    NgDropFilesDirective.prototype._fileWasDrop = function (fileName) {
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            if (file.fileName === fileName) {
                console.log('El archivo' + fileName + 'ya esta cargado');
                return true;
            }
        }
        return false;
    };
    NgDropFilesDirective.prototype._isImage = function (typeFile) {
        return (typeFile === '' || typeFile === undefined) ? false
            : typeFile.startsWith('image');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgDropFilesDirective.prototype, "files", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgDropFilesDirective.prototype, "mouseIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDragEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NgDropFilesDirective.prototype, "onDrop", null);
    NgDropFilesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNgDropFiles]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgDropFilesDirective);
    return NgDropFilesDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/employees/employees.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/employees/employees.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<p>employees works!</p>\n"

/***/ }),

/***/ "./src/app/pages/employees/employees.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/employees/employees.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/pages/employees/employees.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"col\">\n  <div class=\"row container\">\n    <div *ngFor=\"let item of items | async\" class=\"card border-danger mt-3 mb-2\" style=\"max-width: 10rem;\">\n      <img class=\"card-imf-top\" [src]=\"item.url\" alt=\"escudos-loga-mx\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(afs) {
        this.afs = afs;
        this.itemsCollection = afs.collection('img');
        this.items = this.itemsCollection.valueChanges();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInLeft\">\n    <div class=\"container-login100\">\n        <div class=\"wrap-login100 p-t-50 p-b-90\">\n            <form (ngSubmit)=\"login( form )\"\n                  #form=\"ngForm\"\n                  class=\"login100-form validate-form flex-sb flex-w\">\n                <span class=\"login100-form-title p-b-51\">\n                    Login\n                </span>\n                <span *ngIf=\"form.submitted && form.controls['email'].errors\"\n                      class=\"text-danger animated fadeIn\">El email es obligatorio</span>\n                <div class=\"wrap-input100 m-b-16\">\n                    <input class=\"input100\"\n                           type=\"email\"\n                           name=\"email\"\n                           [(ngModel)]=\"user.email\"\n                           required\n                           email\n                           placeholder=\"Correo electronico\">\n                    <span class=\"focus-input100\"></span>\n                </div>\n                <span *ngIf=\"form.submitted && form.controls['password'].errors\"\n                      class=\"text-danger animated fadeIn\">El password debe tener minimo 6 caracteres</span>\n                <div class=\"wrap-input100 m-b-16\" data-validate = \"Password is required\">\n                    <input class=\"input100\"\n                           type=\"password\"\n                           name=\"password\"\n                           [(ngModel)]=\"user.password\"\n                           required\n                           minlength=\"6\"\n                           placeholder=\"Password\">\n                    <span class=\"focus-input100\"></span>\n                </div>\n                <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                    <div class=\"contact100-form-checkbox\">\n                        <input ngModel=\"recallUser\"\n                               class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                        <label class=\"label-checkbox100\" for=\"ckb1\">\n                            Recordar mi usuario\n                        </label>\n                    </div>\n                    <div>\n                        <a routerLink=\"/registro\" class=\"txt1\">\n                            ¿No tienes cuenta?\n                        </a>\n                    </div>\n                </div>\n                <div class=\"container-login100-form-btn m-t-17\">\n                    <button class=\"login100-form-btn\" type=\"submit\">\n                        Ingresar\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/user.model */ "./src/app/Models/user.model.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = new src_app_Models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
        this.recallUser = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('email')) {
            this.user.email = localStorage.getItem('email');
            this.recallUser = true;
        }
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Espere por favor'
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        this.auth.login(this.user)
            .subscribe(function (resp) {
            // console.log( resp );
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
            if (_this.recallUser) {
                localStorage.setItem('email', _this.user.email);
            }
            _this.router.navigateByUrl('/home');
        }, function (err) {
            // console.log( err.error.error.message );
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'info',
                title: 'Error al autenticar',
                text: err.error.error.message
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"/home\" >Prueba Técnica</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav me-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/employees\">Empleados</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/upload\">Cargar fotos</a>\n          </li>\n        </ul>\n        <form class=\"d-flex\" role=\"search\">\n          <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <button class=\"btn btn-success btn-space\" type=\"submit\">Search</button>\n          <button class=\"btn btn-danger btn-space\"\n                  (click)=\"logout()\">Logout</button>\n        </form>\n      </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.loutout();
        this.router.navigateByUrl('/login');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/pages/navbar/navbar.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/registro/registro.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/registro/registro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter animated fadeInRight\">\n        <div class=\"container-login100\">\n            <div class=\"wrap-login100 p-t-50 p-b-90\">\n                <form (ngSubmit)=\"onSubmit( form )\"\n                      #form=\"ngForm\"\n                      class=\"login100-form validate-form flex-sb flex-w\">\n                    <span class=\"login100-form-title p-b-51\">\n                        Crear nueva cuenta\n                    </span>\n                    <span *ngIf=\"form.submitted && form.controls['email'].errors\"\n                          class=\"text-danger animated fadeIn\">El email es obligatorio</span>\n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\"\n                               type=\"email\"\n                               name=\"email\"\n                               [(ngModel)]=\"user.email\"\n                               required\n                               email\n                               placeholder=\"Email\"s>\n                        <span class=\"focus-input100\"></span>\n                    </div>\n                    <span *ngIf=\"form.submitted && form.controls['name'].errors\"\n                    class=\"text-danger animated fadeIn\">El nombre es obligatorio</span>\n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\"\n                               type=\"text\"\n                               name=\"name\"\n                               [(ngModel)]=\"user.name\"\n                               minlength=\"2\"\n                               required\n                               placeholder=\"Nombre y apellidos\">\n                        <span class=\"focus-input100\"></span>\n                    </div>\n                    <span *ngIf=\"form.submitted && form.controls['password'].errors\"\n                    class=\"text-danger animated fadeIn\">El password debe tener minimo 6 caracteres</span>\n                    <div class=\"wrap-input100 m-b-16\">\n                        <input class=\"input100\"\n                               type=\"password\"\n                               name=\"password\"\n                               [(ngModel)]=\"user.password\"\n                               required\n                               minlength=\"6\"\n                               placeholder=\"Password\">\n                        <span class=\"focus-input100\"></span>\n                    </div>\n                    <div class=\"flex-sb-m w-full p-t-3 p-b-24\">\n                        <div class=\"contact100-form-checkbox\">\n                            <input ngModel=\"recallUser\"\n                                   class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\n                            <label class=\"label-checkbox100\" for=\"ckb1\">\n                                Recordar mi usuario\n                            </label>\n                        </div>\n                        <div>\n                            <a routerLink=\"/login\" class=\"txt1\">\n                                ¿Ya tienes cuenta? / Ingresar\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"container-login100-form-btn m-t-17\">\n                        <button class=\"login100-form-btn\" type=\"submit\">\n                            Crear cuenta\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/pages/registro/registro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/registro/registro.component.ts ***!
  \******************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/user.model */ "./src/app/Models/user.model.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(auht, router) {
        this.auht = auht;
        this.router = router;
        this.recallUser = false;
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.user = new src_app_Models_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
    };
    RegistroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Espere por favor'
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        this.auht.newUser(this.user)
            .subscribe(function (resp) {
            // console.log( resp );
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.close();
            if (_this.recallUser) {
                localStorage.setItem('email', _this.user.email);
            }
            _this.router.navigateByUrl('/home');
        }, function (err) {
            // console.log( err.error.error.message );
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'info',
                title: 'Error al autenticar',
                text: err.error.error.message
            });
        });
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/pages/registro/registro.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/pages/upload/upload.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/upload/upload.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row-container\">\n  <div class=\"col-md-4 mt-3 container\">\n    <h3>Seleccione archivos</h3>\n    <div appNgDropFiles\n         [files]=\"files\"\n         (mouseIn)=\"inTheDrop = $event\" [ngClass]=\"{'file-over': inTheDrop }\" class=\"well drop-zone\">\n      <h4>Arraste aquí sus archivos</h4>\n      <img  src=\"/assets/drag-and-drop-images.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"cold-md-8 mt-3 container\">\n    <h4 class=\"text-center\">Cargar imágenes</h4>\n    <div class=\"text-center\">\n      <button (click)=\"loadImages()\" [disabled]=\"files.length === 0\" class=\"btn btn-success btn-space\">subir imagen</button>\n      <button (click)=\"clearFiles()\" class=\"btn btn-danger btn-space\">Limpiar</button>\n      <table class=\"table\">\n        <thead class=\"thead bg-primary\">\n          <tr>\n            <th>Nombre archivo</th>\n            <th>Tamaño</th>\n            <th>Estado</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let file of files\">\n            <td [ngClass]=\"{ 'text-green' : file.progress >= 100}\">\n              {{ file.fileName }}\n            </td>\n            <td>{{ file.file.size /1024/1024 | number: '.2-2' }} MB</td>\n            <td>\n              <div class=\"progress\">\n                <div class=\"progress-bar\"\n                     role=\"progressbar\"\n                     [ngStyle]=\"{'width': file.progress + '%'}\">\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/upload/upload.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/upload/upload.component.ts ***!
  \**************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_uploadimg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/uploadimg.service */ "./src/app/services/uploadimg.service.ts");



var UploadComponent = /** @class */ (function () {
    function UploadComponent(_loadImages) {
        this._loadImages = _loadImages;
        this.inTheDrop = false;
        this.files = [];
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.loadImages = function () {
        this._loadImages.loadImagesFirebase(this.files);
    };
    UploadComponent.prototype.clearFiles = function () {
        this.files = [];
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/pages/upload/upload.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_uploadimg_service__WEBPACK_IMPORTED_MODULE_2__["UploadimgService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    // crear
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    // login
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    function AuthService(http) {
        this.http = http;
        this.url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
        this.apiKey = 'AIzaSyBECGq-7zWZxPwQsT8KAbQY104MAbivuzQ';
        this.readToken();
    }
    AuthService.prototype.loutout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var authData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { returnSecureToken: true });
        return this.http.post(this.url + "signInWithPassword?key=" + this.apiKey, authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this.saveToken(resp['idToken']);
            return resp;
        }));
    };
    AuthService.prototype.newUser = function (user) {
        var _this = this;
        var authData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { returnSecureToken: true });
        return this.http.post(this.url + "signUp?key=" + this.apiKey, authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this.saveToken(resp['idToken']);
            return resp;
        }));
    };
    AuthService.prototype.saveToken = function (idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
        var today = new Date();
        today.setSeconds(3600);
        localStorage.setItem('expires', today.getTime().toString());
    };
    AuthService.prototype.readToken = function () {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        }
        else {
            this.userToken = '';
        }
        return this.userToken;
    };
    AuthService.prototype.isAuthenticated = function () {
        if (this.userToken.length < 2) {
            return false;
        }
        var expires = Number(localStorage.getItem('expires'));
        var expiresDay = new Date();
        expiresDay.setTime(expires);
        if (expiresDay > new Date()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/uploadimg.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/uploadimg.service.ts ***!
  \***********************************************/
/*! exports provided: UploadimgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadimgService", function() { return UploadimgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");





var UploadimgService = /** @class */ (function () {
    function UploadimgService(db) {
        this.db = db;
        this.IMG_FOLDER = 'img';
    }
    UploadimgService.prototype.loadImagesFirebase = function (images) {
        var _this = this;
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
        var _loop_1 = function (item) {
            item.estateOfCharge = true;
            if (item.progress >= 100) {
                return "continue";
            }
            var uploadTask = storageRef.child(" " + this_1.IMG_FOLDER + "/" + item.fileName)
                .put(item.file);
            uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_3__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { return item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; }, function (error) { return console.log('Error al subir', error); }, function () {
                console.log('Imagen cargada', item.progress);
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(function (data) {
                    _this.saveImg({
                        name: item.fileName,
                        url: data
                    });
                    item.estateOfCharge = false;
                });
            });
        };
        var this_1 = this;
        for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
            var item = images_1[_i];
            _loop_1(item);
        }
    };
    UploadimgService.prototype.saveImg = function (image) {
        this.db.collection("/" + this.IMG_FOLDER)
            .add(image);
    };
    UploadimgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UploadimgService);
    return UploadimgService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyBECGq-7zWZxPwQsT8KAbQY104MAbivuzQ',
        authDomain: 'prueba-employees.firebaseapp.com',
        projectId: 'prueba-employees',
        storageBucket: 'prueba-employees.appspot.com',
        messagingSenderId: '619802067663',
        appId: '1:619802067663:web:fa059e72da2d474113adba',
        measurementId: 'G-F1Y4JY0MW9'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tachidito/Desktop/Prueba-técnica/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map