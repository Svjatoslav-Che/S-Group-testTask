(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_globals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../service/globals.service */
      "./src/service/globals.service.ts");
      /* harmony import */


      var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/auth.component */
      "./src/app/auth/auth.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _formsdisplay_formsdisplay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formsdisplay/formsdisplay.component */
      "./src/app/formsdisplay/formsdisplay.component.ts");

      function AppComponent_app_formsdisplay_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-formsdisplay");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(globalService) {
          _classCallCheck(this, AppComponent);

          this.globalService = globalService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_formsdisplay_1_Template, 1, 0, "app-formsdisplay", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.globalService.loggedIn);
          }
        },
        directives: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _formsdisplay_formsdisplay_component__WEBPACK_IMPORTED_MODULE_4__["FormsdisplayComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _service_globals_service__WEBPACK_IMPORTED_MODULE_1__["GlobalsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/api.service */
      "./src/service/api.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
      /* harmony import */


      var _service_globals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../service/globals.service */
      "./src/service/globals.service.ts");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-click-outside */
      "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _service_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../service/cookie.service */
      "./src/service/cookie.service.ts");
      /* harmony import */


      var _service_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../service/token.service */
      "./src/service/token.service.ts");
      /* harmony import */


      var _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./auth/auth.component */
      "./src/app/auth/auth.component.ts");
      /* harmony import */


      var _formsdisplay_formsdisplay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./formsdisplay/formsdisplay.component */
      "./src/app/formsdisplay/formsdisplay.component.ts");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../service/auth.service */
      "./src/service/auth.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _service_globals_service__WEBPACK_IMPORTED_MODULE_7__["GlobalsService"], _service_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"], _service_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"], _formsdisplay_formsdisplay_component__WEBPACK_IMPORTED_MODULE_12__["FormsdisplayComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"], _formsdisplay_formsdisplay_component__WEBPACK_IMPORTED_MODULE_12__["FormsdisplayComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _service_globals_service__WEBPACK_IMPORTED_MODULE_7__["GlobalsService"], _service_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"], _service_token_service__WEBPACK_IMPORTED_MODULE_10__["TokenService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/auth/auth.component.ts":
    /*!****************************************!*\
      !*** ./src/app/auth/auth.component.ts ***!
      \****************************************/

    /*! exports provided: AuthComponent */

    /***/
    function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/auth.service */
      "./src/service/auth.service.ts");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/api.service */
      "./src/service/api.service.ts");
      /* harmony import */


      var _service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/cookie.service */
      "./src/service/cookie.service.ts");
      /* harmony import */


      var _service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/token.service */
      "./src/service/token.service.ts");
      /* harmony import */


      var _service_globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/globals.service */
      "./src/service/globals.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0() {
        return ["row_r", "rules", "step"];
      };

      var _c1 = function _c1() {
        return {
          "margin-top": "7px"
        };
      };

      function AuthComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " E-mail: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AuthComponent_div_1_Template_input_keyup_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onInputEmail($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pass: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AuthComponent_div_1_Template_input_keyup_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onInputPassword($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        }
      }

      var _c2 = function _c2() {
        return ["row_r", "rules"];
      };

      function AuthComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_2_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.loginByVal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.emailValidate || !ctx_r1.passwordValidate);
        }
      }

      var _c3 = function _c3() {
        return ["row_r", "rules", "step", "move"];
      };

      var _c4 = function _c4() {
        return ["move"];
      };

      var _c5 = function _c5() {
        return ["warning"];
      };

      function AuthComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logged as: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_ng_template_3_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Log Out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.resultAuth.user.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        }
      }

      var _c6 = function _c6() {
        return ["auth_box"];
      };

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent(authService, apiService, cookieService, tokenService, globalService) {
          _classCallCheck(this, AuthComponent);

          this.authService = authService;
          this.apiService = apiService;
          this.cookieService = cookieService;
          this.tokenService = tokenService;
          this.globalService = globalService;
          this.timerRun = false;
          this.emailValidate = false;
          this.passwordValidate = false;
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.tokenService.getToken()) {
              this.authDataScenarioRef();
            }
          }
        }, {
          key: "onInputEmail",
          value: function onInputEmail(event) {
            // @ts-ignore
            this.email = event.target.value;
            this.emailValidate = this.validateEmail(event.target.value);
          }
        }, {
          key: "onInputPassword",
          value: function onInputPassword(event) {
            // @ts-ignore
            this.password = event.target.value;

            if (event.target.value.length >= 3) {
              this.passwordValidate = true;
            } else {
              this.passwordValidate = false;
            }
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }
        }, {
          key: "authDataScenarioIn",
          value: function authDataScenarioIn(emailIn, passwordIn) {
            var _this = this;

            this.authService.getAuthDataFromServer(emailIn, passwordIn).subscribe(function (result) {
              _this.resultAuth = result;

              _this.tokenService.putAccessToken(result.access_token);

              _this.globalService.loggedIn = true;

              _this.startRefreshToken(result.refresh_in);
            }, function (error) {
              return alert('Auth Log In error, code: ' + error.status);
            });
          }
        }, {
          key: "authDataScenarioOut",
          value: function authDataScenarioOut() {
            var _this2 = this;

            this.authService.refreshTokenServer(this.tokenService.getToken()).subscribe(function (result) {
              clearTimeout(_this2.timerId);
              _this2.globalService.loggedIn = false;
            }, function (error) {
              return alert('Auth Log Out error, code: ' + error.status);
            });
          }
        }, {
          key: "authDataScenarioRef",
          value: function authDataScenarioRef() {
            var _this3 = this;

            this.authService.refreshTokenServer(this.tokenService.getToken()).subscribe(function (result) {
              _this3.resultAuth = result;

              _this3.tokenService.putAccessToken(result.access_token);

              _this3.globalService.loggedIn = true;

              if (_this3.timerRun === false) {
                _this3.startRefreshToken(result.expires_in);
              }
            }, function (error) {
              return alert('Auth Refresh error, code: ' + error.status);
            });
          }
        }, {
          key: "loginByVal",
          value: function loginByVal() {
            this.authDataScenarioIn(this.email, this.password);
          }
        }, {
          key: "loginAuto",
          value: function loginAuto() {
            this.authDataScenarioIn('test14@test.com', '3edfhgfhjsdxdvf');
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.globalService.loggedIn = false;
            this.authDataScenarioOut();
            this.tokenService.destroyToken();
            this.timerRun = false;
          }
        }, {
          key: "startRefreshToken",
          value: function startRefreshToken(timer) {
            var _this4 = this;

            this.timerId = setInterval(function () {
              return _this4.authDataScenarioRef();
            }, timer);
            this.timerRun = true;
          }
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"]));
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 5,
        vars: 5,
        consts: [[3, "ngClass"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["logoutBlock", ""], [3, "ngStyle"], ["type", "email", 3, "keyup"], ["type", "text", 3, "keyup"], ["id", "submitInputData", 3, "disabled", "click"], [3, "ngClass", "click"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_1_Template, 9, 8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_2_Template, 4, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthComponent_ng_template_3_Template, 9, 13, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.globalService.loggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.globalService.loggedIn)("ngIfElse", _r2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
          }]
        }], function () {
          return [{
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
          }, {
            type: _service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
          }, {
            type: _service_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/formsdisplay/formsdisplay.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/formsdisplay/formsdisplay.component.ts ***!
      \********************************************************/

    /*! exports provided: FormsdisplayComponent */

    /***/
    function srcAppFormsdisplayFormsdisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsdisplayComponent", function () {
        return FormsdisplayComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/auth.service */
      "./src/service/auth.service.ts");
      /* harmony import */


      var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/api.service */
      "./src/service/api.service.ts");
      /* harmony import */


      var _service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/cookie.service */
      "./src/service/cookie.service.ts");
      /* harmony import */


      var _service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/token.service */
      "./src/service/token.service.ts");
      /* harmony import */


      var _service_globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/globals.service */
      "./src/service/globals.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0() {
        return ["control_box"];
      };

      var _c1 = function _c1() {
        return ["row", "rules", "step"];
      };

      var _c2 = function _c2() {
        return ["apply"];
      };

      var _c3 = function _c3() {
        return {
          "margin-top": "9px"
        };
      };

      var _c4 = function _c4() {
        return ["cancel"];
      };

      var _c5 = function _c5() {
        return ["row", "rules"];
      };

      function FormsdisplayComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.createNewForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create new form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search by value: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormsdisplayComponent_div_0_Template_input_keyup_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onInputSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.submitSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.disableSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Disable Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sort elements by date of creation: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.sortTimeUp(ctx_r8.formsTransform);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Sort Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.sortTimeDown(ctx_r9.formsTransform);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sort Down ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.sortDisable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Disable Sorting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Elements per page: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormsdisplayComponent_div_0_Template_input_keyup_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onInputPagination($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.submitPagination();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.goPrevPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " << Prev Page ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Page: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_0_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.goNextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Next Page >> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.currentSearchValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.searchButton === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.searchOn)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.sortParam === "up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.sortParam === "down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.sortParam === undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.currentPaginationNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.submitPaginationButton === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" of: ", ctx_r0.pagesAtAll, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.currentPage === ctx_r0.pagesAtAll);
        }
      }

      function FormsdisplayComponent_div_1_div_1_div_31_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormsdisplayComponent_div_1_div_1_div_31_div_6_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r20.onInputFOrmLine($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_1_div_1_div_31_div_6_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r22.editFormLineAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_1_div_1_div_31_div_6_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r23.editCurrentFormLine = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r19.editData.form_field_values[0].value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4));
        }
      }

      var _c6 = function _c6() {
        return ["move"];
      };

      var _c7 = function _c7() {
        return {
          "margin-right": "0px"
        };
      };

      function FormsdisplayComponent_div_1_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldscontainer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_1_div_1_div_31_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var field_r18 = ctx.$implicit;

            var form_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.editCurrentLine(form_r16.id, field_r18.form_field_id, field_r18.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormsdisplayComponent_div_1_div_1_div_31_div_6_Template, 6, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r18 = ctx.$implicit;

          var form_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r18.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c7))("disabled", ctx_r17.editCurrentFormLine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.editCurrentFormLine && form_r16.id === ctx_r17.editFormID && field_r18.form_field_id === ctx_r17.editData.form_field_values[0].form_field_id);
        }
      }

      var _c8 = function _c8() {
        return ["container", "rules"];
      };

      var _c9 = function _c9() {
        return ["space"];
      };

      var _c10 = function _c10() {
        return {
          "margin-left": "13px"
        };
      };

      var _c11 = function _c11() {
        return {
          "margin-right": "13px"
        };
      };

      var _c12 = function _c12() {
        return ["step"];
      };

      var _c13 = function _c13() {
        return ["warning"];
      };

      function FormsdisplayComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "smalltext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Form ID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "smalltext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Created: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " at: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "smalltext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Updated: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " at: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "smalltext", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " User ID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FormsdisplayComponent_div_1_div_1_div_31_Template, 7, 7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_1_div_1_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var form_r16 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.deleteForm(form_r16.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Delete form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var form_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](form_r16.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 14, form_r16.created_at, "dd.MM.yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 17, form_r16.created_at, "hh:mm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 20, form_r16.updated_at, "dd.MM.yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 23, form_r16.updated_at, "hh:mm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](form_r16.user_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", form_r16.form_field_values);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c13));
        }
      }

      function FormsdisplayComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormsdisplayComponent_div_1_div_1_Template, 34, 33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.formsDisplay);
        }
      }

      var _c14 = function _c14() {
        return {
          "margin-right": "10px"
        };
      };

      function FormsdisplayComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "smalltext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create New Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " : first field ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " : second field: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " : third field ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " : fourth field ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " : fifth field: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_2_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.createNewFormRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Create ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsdisplayComponent_div_2_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.openFormChange = undefined;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c4));
        }
      }

      var FormsdisplayComponent = /*#__PURE__*/function () {
        function FormsdisplayComponent(authService, apiService, cookieService, tokenService, globalService) {
          _classCallCheck(this, FormsdisplayComponent);

          this.authService = authService;
          this.apiService = apiService;
          this.cookieService = cookieService;
          this.tokenService = tokenService;
          this.globalService = globalService;
          this.formsTransformTemp = undefined;
          this.currentPage = undefined;
          this.currentPaginationNumber = undefined;
          this.paginatorEnter = this.currentPaginationNumber;
          this.previousSearchValue = undefined;
          this.searchButton = false;
          this.searchOn = false;
          this.sortParam = undefined;
          this.submitPaginationButton = false;
          this.openFormChange = undefined;
          this.editCurrentFormLine = false;
          this.editData = {
            form_field_values: [{
              form_field_id: undefined,
              value: undefined
            }]
          };
        }

        _createClass(FormsdisplayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDataForms();
          }
        }, {
          key: "getAllDataRequest",
          value: function getAllDataRequest(token) {
            return this.apiService.get('/forms', token);
          }
        }, {
          key: "updateOneFormField",
          value: function updateOneFormField(token, formID, data) {
            var _this5 = this;

            return this.apiService.update('/forms/' + formID, this.tokenService.getToken(), data).subscribe(function (result) {
              _this5.editCurrentFormLine = false;

              _this5.getDataForms();
            }, function (error) {
              return alert('Forms Update Error, code: ' + error.status);
            });
          }
        }, {
          key: "getDataForms",
          value: function getDataForms() {
            var _this6 = this;

            this.getAllDataRequest(this.tokenService.getToken()).subscribe(function (result) {
              _this6.formsData = result;
              _this6.formsTransform = JSON.parse(JSON.stringify(result.data));
              _this6.currentPage = result.meta.page;
              _this6.currentPaginationNumber = result.meta.per_page;

              _this6.mathService(_this6.formsTransform);
            }, function (error) {
              return alert('Forms Get Error, code: ' + error.status);
            });
          }
        }, {
          key: "dataSlicer",
          value: function dataSlicer(data, begin, end) {
            this.formsDisplay = data.slice(begin, end);
          }
        }, {
          key: "submitPagination",
          value: function submitPagination() {
            if (this.paginatorEnter) {
              this.currentPaginationNumber = this.paginatorEnter;
            }

            this.currentPage = 1;
            this.mathService(this.formsTransform);
            this.submitPaginationButton = false;
          }
        }, {
          key: "onInputPagination",
          value: function onInputPagination(event) {
            this.paginatorEnter = event.target.value;

            if (this.currentPaginationNumber === event.target.value) {
              this.submitPaginationButton = false;
            } else {
              this.submitPaginationButton = true;
            }
          }
        }, {
          key: "goPrevPage",
          value: function goPrevPage() {
            this.currentPage--;
            this.mathService(this.formsTransform);
          }
        }, {
          key: "goNextPage",
          value: function goNextPage() {
            this.currentPage++;
            this.mathService(this.formsTransform);
          }
        }, {
          key: "saveBeforeSort",
          value: function saveBeforeSort() {
            this.formsTransformTemp = JSON.parse(JSON.stringify(this.formsTransform));
          }
        }, {
          key: "sortTimeUp",
          value: function sortTimeUp(value) {
            if (this.formsTransformTemp === undefined) {
              this.saveBeforeSort();
            }

            var newValue = value.sort(function (a, b) {
              return new Date(b.created_at) - new Date(a.created_at);
            });
            this.currentPage = 1;
            this.mathService(newValue);
            this.sortParam = 'up';
          }
        }, {
          key: "sortTimeDown",
          value: function sortTimeDown(value) {
            if (this.formsTransformTemp === undefined) {
              this.saveBeforeSort();
            }

            var newValue = value.sort(function (a, b) {
              return new Date(a.created_at) - new Date(b.created_at);
            });
            this.currentPage = 1;
            this.mathService(newValue);
            this.sortParam = 'down';
          }
        }, {
          key: "sortDisable",
          value: function sortDisable() {
            this.currentPage = 1;
            this.mathService(this.formsTransformTemp);
            this.sortParam = undefined;
          }
        }, {
          key: "onInputSearch",
          value: function onInputSearch(event) {
            // @ts-ignore
            this.currentSearchValue = event.target.value;

            if (Boolean(this.currentSearchValue) && this.currentSearchValue.replace(/\s/g, '') !== '' && this.currentSearchValue !== this.previousSearchValue) {
              this.searchButton = true;
            } else {
              this.searchButton = false;
            }
          }
        }, {
          key: "abortSearchResults",
          value: function abortSearchResults() {
            this.formsTransform = JSON.parse(JSON.stringify(this.formsData.data));
          }
        }, {
          key: "submitSearch",
          value: function submitSearch() {
            var _this7 = this;

            this.previousSearchValue = this.currentSearchValue;
            var i = 0;
            this.formsTransform = [];
            this.formsData.data.forEach(function (element) {
              element.form_field_values.forEach(function (element2) {
                if (element2.value.toLowerCase().search(_this7.currentSearchValue.toLowerCase()) !== -1) {
                  _this7.formsTransform.push(_this7.formsData.data[i]);
                }
              });
              i++;
            });
            this.searchOn = true;

            if (this.formsTransform.length === 0) {
              alert('No results for Searching');
              this.disableSearch();
            }

            this.mathService(this.formsTransform);
            this.searchButton = false;
          }
        }, {
          key: "disableSearch",
          value: function disableSearch() {
            this.abortSearchResults();
            this.searchOn = false;
            this.mathService(this.formsTransform);
            this.currentSearchValue = undefined;
            this.sortParam = undefined;
            this.formsTransformTemp = undefined;
          }
        }, {
          key: "mathService",
          value: function mathService(data) {
            this.pagesAtAll = Math.ceil(data.length / this.currentPaginationNumber);
            this.dataSlicer(data, (this.currentPage - 1) * this.currentPaginationNumber, this.currentPage * this.currentPaginationNumber);
          }
        }, {
          key: "createNewForm",
          value: function createNewForm() {
            this.openFormChange = 'create';
          }
        }, {
          key: "deleteForm",
          value: function deleteForm(idValue) {
            var _this8 = this;

            if (confirm('Delete form ID ' + idValue + ' ?')) {
              return this.apiService["delete"]('/forms/' + idValue, this.tokenService.getToken()).subscribe(function (result) {
                _this8.getDataForms();
              }, function (error) {
                return alert('Forms Delete Error, code: ' + error.status);
              });
            }
          }
        }, {
          key: "editCurrentLine",
          value: function editCurrentLine(formID, lineID, value) {
            this.editCurrentFormLine = true;
            this.editFormID = formID;
            this.editData.form_field_values[0].form_field_id = lineID;
            this.editData.form_field_values[0].value = value;
          }
        }, {
          key: "onInputFOrmLine",
          value: function onInputFOrmLine(event) {
            // @ts-ignore
            this.editData.form_field_values[0].value = event.target.value;
          }
        }, {
          key: "editFormLineAction",
          value: function editFormLineAction() {
            var data = this.formsTransform = JSON.parse(JSON.stringify(this.editData));
            this.updateOneFormField(this.tokenService.getToken(), this.editFormID, data);
          }
        }, {
          key: "createNewFormRequest",
          value: function createNewFormRequest() {
            var _this9 = this;

            var data = {
              form_field_values: []
            }; // @ts-ignore

            var valueTime = document.getElementById('inputT').value;

            for (var i = 1; i < 6; i++) {
              // @ts-ignore
              var valueForm = document.getElementById('input' + i).value;

              if (valueForm) {
                i === 4 && valueTime ? data.form_field_values.push({
                  form_field_id: i,
                  value: valueForm + ' ' + valueTime
                }) : data.form_field_values.push({
                  form_field_id: i,
                  value: valueForm
                });
              }
            }

            return this.apiService.create('/forms', this.tokenService.getToken(), data).subscribe(function (result) {
              _this9.openFormChange = undefined;

              _this9.getDataForms();
            }, function (error) {
              return alert('Forms Create Error, code: ' + error.status);
            });
          }
        }]);

        return FormsdisplayComponent;
      }();

      FormsdisplayComponent.ɵfac = function FormsdisplayComponent_Factory(t) {
        return new (t || FormsdisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"]));
      };

      FormsdisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormsdisplayComponent,
        selectors: [["app-formsdisplay"]],
        decls: 3,
        vars: 3,
        consts: [[3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], [3, "ngClass", "click"], [3, "ngStyle"], ["type", "text", 3, "value", "keyup"], [3, "disabled", "click"], [3, "disabled", "ngClass", "click"], ["type", "number", 3, "value", "keyup"], [3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "ngStyle", "disabled", "click"], [3, "value", "keyup"], ["type", "text", "placeholder", "Enter any string value", "id", "input1", 3, "ngStyle"], ["type", "text", "placeholder", "Enter any string value", "id", "input2", 3, "ngStyle"], ["type", "text", "placeholder", "Enter any string value", "id", "input3", 3, "ngStyle"], ["type", "date", "placeholder", "Enter date only", "id", "input4", 3, "ngStyle"], ["type", "time", "placeholder", "Enter date only", "id", "inputT", 3, "ngStyle"], ["type", "number", "placeholder", "Enter numbers only", "id", "input5", 3, "ngStyle"]],
        template: function FormsdisplayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormsdisplayComponent_div_0_Template, 38, 38, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormsdisplayComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormsdisplayComponent_div_2_Template, 31, 30, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsData && ctx.openFormChange === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsData && ctx.openFormChange === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openFormChange === "create");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zZGlzcGxheS9mb3Jtc2Rpc3BsYXkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsdisplayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-formsdisplay',
            templateUrl: './formsdisplay.component.html',
            styleUrls: ['./formsdisplay.component.scss']
          }]
        }], function () {
          return [{
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
          }, {
            type: _service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
          }, {
            type: _service_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        url: 'test.s-group.vn.ua',
        api_url: 'https://test.s-group.vn.ua/api/v1'
      };
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "./src/service/api.service.ts":
    /*!************************************!*\
      !*** ./src/service/api.service.ts ***!
      \************************************/

    /*! exports provided: ApiService */

    /***/
    function srcServiceApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      "./node_modules/rxjs/add/operator/map.js");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/add/operator/catch */
      "./node_modules/rxjs/add/operator/catch.js");
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, platformId) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.platformId = platformId;
          this.isServer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId);
        }

        _createClass(ApiService, [{
          key: "setHeaders",
          value: function setHeaders() {
            var headersFields = {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            };
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](headersFields);
          }
        }, {
          key: "setRefreshHeaders",
          value: function setRefreshHeaders(token) {
            var headersFields = {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: "Bearer ".concat(token)
            };
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](headersFields);
          }
        }, {
          key: "get",
          value: function get(path, token) {
            var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            var url = this.isServer ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ssr_api_url : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
            return this.http.get("".concat(url).concat(path), {
              headers: this.setRefreshHeaders(token)
            });
          }
        }, {
          key: "put",
          value: function put(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var url = this.isServer ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ssr_api_url : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
            return this.http.put("".concat(url).concat(path), JSON.stringify(body), {
              headers: this.setHeaders()
            });
          }
        }, {
          key: "post",
          value: function post(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var url = this.isServer ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ssr_api_url : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
            return this.http.post("".concat(url).concat(path), JSON.stringify(body), {
              headers: this.setHeaders()
            });
          }
        }, {
          key: "delete",
          value: function _delete(path, token) {
            var url = this.isServer ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ssr_api_url : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
            return this.http["delete"]("".concat(url).concat(path), {
              headers: this.setRefreshHeaders(token)
            });
          }
        }, {
          key: "dataRequest",
          value: function dataRequest(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var url = this.isServer ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ssr_api_url : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
            return this.http.post("".concat(url).concat(path), body);
          }
        }, {
          key: "dataRefresh",
          value: function dataRefresh(path, token) {
            var url = this.isServer ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ssr_api_url : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
            return this.http.post("".concat(url).concat(path), {}, {
              headers: this.setRefreshHeaders(token)
            });
          }
        }, {
          key: "update",
          value: function update(path, token) {
            var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var url = this.isServer ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ssr_api_url : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
            return this.http.post("".concat(url).concat(path), JSON.stringify(body), {
              headers: this.setRefreshHeaders(token)
            });
          }
        }, {
          key: "create",
          value: function create(path, token) {
            var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var url = this.isServer ? _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ssr_api_url : _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url;
            return this.http.post("".concat(url).concat(path), JSON.stringify(body), {
              headers: this.setRefreshHeaders(token)
            });
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/service/auth.service.ts":
    /*!*************************************!*\
      !*** ./src/service/auth.service.ts ***!
      \*************************************/

    /*! exports provided: AuthService */

    /***/
    function srcServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      "./node_modules/rxjs/add/operator/map.js");
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/add/operator/catch */
      "./node_modules/rxjs/add/operator/catch.js");
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cookie.service */
      "./src/service/cookie.service.ts");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./api.service */
      "./src/service/api.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(cookieService, apiService, http, platformId) {
          _classCallCheck(this, AuthService);

          this.cookieService = cookieService;
          this.apiService = apiService;
          this.http = http;
          this.platformId = platformId;
          this.isServer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(platformId);
        }

        _createClass(AuthService, [{
          key: "getAuthDataFromServer",
          value: function getAuthDataFromServer(emailIn, passwordIn) {
            return this.apiService.dataRequest("/auth/login", {
              email: emailIn,
              password: passwordIn
            });
          } // tslint:disable-next-line:typedef

        }, {
          key: "refreshTokenServer",
          value: function refreshTokenServer(token) {
            return this.apiService.dataRefresh("/auth/refresh", token);
          }
        }, {
          key: "authLogOut",
          value: function authLogOut(token) {
            return this.apiService.dataRefresh("/auth/logout", token);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/service/cookie.service.ts":
    /*!***************************************!*\
      !*** ./src/service/cookie.service.ts ***!
      \***************************************/

    /*! exports provided: CookieService */

    /***/
    function srcServiceCookieServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CookieService", function () {
        return CookieService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CookieService = /*#__PURE__*/function () {
        function CookieService(platformId) {
          _classCallCheck(this, CookieService);

          this.platformId = platformId;
          this.documentIsAccessible = false;
          if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId)) this.document = document;
          this.documentIsAccessible = this.document !== undefined;
        }

        _createClass(CookieService, [{
          key: "getCookieRegExp",
          value: function getCookieRegExp(name) {
            // eslint-disable-next-line no-useless-escape
            var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
            return new RegExp("(?:^".concat(escapedName, "|;\\s*").concat(escapedName, ")=(.*?)(?:;|$)"), 'g');
          }
        }, {
          key: "check",
          value: function check(name) {
            if (!this.documentIsAccessible) {
              return false;
            }

            var definedName = encodeURIComponent(name);
            var regExp = this.getCookieRegExp(definedName);
            var exists = regExp.test(this.document.cookie);
            return exists;
          }
        }, {
          key: "get",
          value: function get(name) {
            if (this.documentIsAccessible && this.check(name)) {
              var definedName = encodeURIComponent(name);
              var regExp = this.getCookieRegExp(definedName);
              var result = regExp.exec(this.document.cookie);
              return decodeURIComponent(result[1]);
            }

            return '';
          }
        }, {
          key: "put",
          value: function put(name, value, expires, path, domain, secure) {
            if (!this.documentIsAccessible) return;
            var cookieString = "".concat(encodeURIComponent(name), "=").concat(encodeURIComponent(value), ";");

            if (expires) {
              if (typeof expires === 'number') {
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += "expires=".concat(dateExpires.toUTCString(), ";");
              } else cookieString += "expires=".concat(expires.toUTCString(), ";");
            }

            if (path) cookieString += "path=".concat(path, ";");
            if (domain) cookieString += "domain=".concat(domain, ";");
            if (secure) cookieString += 'secure;';
            this.document.cookie = cookieString;
          }
        }, {
          key: "remove",
          value: function remove(name, path, domain) {
            if (!this.documentIsAccessible) {
              return;
            }

            this.put(name, path, -1, path, domain);
          }
        }]);

        return CookieService;
      }();

      CookieService.ɵfac = function CookieService_Factory(t) {
        return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      CookieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CookieService,
        factory: CookieService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/service/cookies-key.constant.ts":
    /*!*********************************************!*\
      !*** ./src/service/cookies-key.constant.ts ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcServiceCookiesKeyConstantTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var CookiesKey;

      (function (CookiesKey) {
        CookiesKey["ACCESS_TOKEN"] = "accessToken";
      })(CookiesKey || (CookiesKey = {}));
      /* harmony default export */


      __webpack_exports__["default"] = CookiesKey;
      /***/
    },

    /***/
    "./src/service/globals.service.ts":
    /*!****************************************!*\
      !*** ./src/service/globals.service.ts ***!
      \****************************************/

    /*! exports provided: GlobalsService */

    /***/
    function srcServiceGlobalsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalsService", function () {
        return GlobalsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var GlobalsService = function GlobalsService() {
        _classCallCheck(this, GlobalsService);

        this.loggedIn = false;
      };

      GlobalsService.ɵfac = function GlobalsService_Factory(t) {
        return new (t || GlobalsService)();
      };

      GlobalsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlobalsService,
        factory: GlobalsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/service/token.service.ts":
    /*!**************************************!*\
      !*** ./src/service/token.service.ts ***!
      \**************************************/

    /*! exports provided: TokenService */

    /***/
    function srcServiceTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenService", function () {
        return TokenService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _cookies_key_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cookies-key.constant */
      "./src/service/cookies-key.constant.ts");
      /* harmony import */


      var _cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cookie.service */
      "./src/service/cookie.service.ts");

      var TokenService = /*#__PURE__*/function () {
        function TokenService(cookieService) {
          _classCallCheck(this, TokenService);

          this.cookieService = cookieService;
        }

        _createClass(TokenService, [{
          key: "putAccessToken",
          value: function putAccessToken(val) {
            return this.cookieService.put(_cookies_key_constant__WEBPACK_IMPORTED_MODULE_1__["default"].ACCESS_TOKEN, val);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.cookieService.get(_cookies_key_constant__WEBPACK_IMPORTED_MODULE_1__["default"].ACCESS_TOKEN);
          } // public getSupportToken(): string {
          //   return this.cookieService.get(CookiesKey.SUPPORT_TOKEN);
          // }
          // public destroySupportToken(): void {
          //   this.cookieService.remove(CookiesKey.SUPPORT_TOKEN);
          // }

        }, {
          key: "destroyToken",
          value: function destroyToken() {
            this.cookieService.remove(_cookies_key_constant__WEBPACK_IMPORTED_MODULE_1__["default"].ACCESS_TOKEN);
          }
        }]);

        return TokenService;
      }();

      TokenService.ɵfac = function TokenService_Factory(t) {
        return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]));
      };

      TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenService,
        factory: TokenService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/svjatoslav/_projects_CODE/S-Group-testTask/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map