(self["webpackChunkreport_app"] = self["webpackChunkreport_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/patient-overview/patient-overview.component */ 3193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'patient-overview/:patientId',
        component: _components_patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_0__.PatientOverviewComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
                useHash: true,
                anchorScrolling: 'enabled',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent),
/* harmony export */   "browserRefresh": () => (/* binding */ browserRefresh)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/loader.service */ 8555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/progressspinner */ 6062);






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-progressSpinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
let browserRefresh = false;
class AppComponent {
    /**
     * Constructor
     * @param router
     */
    constructor(router, loaderService) {
        this.router = router;
        this.loaderService = loaderService;
        this.title = 'report-app';
        this.isUserLoggedin = false;
        this.isMonitorPlanOrSurveyResponse = false;
        this.show = false;
        this.subscription = router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
                browserRefresh = !router.navigated;
            }
        });
    }
    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state) => {
            this.show = state.show;
        });
    }
    /**
 * Cleans the component
 */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 3, consts: [["class", "appLoader", 4, "ngIf"], [1, "container"], [1, "doNotPrint"], ["href", "javascript:void(0)"], ["src", "assets/painscript-logo.svg", "alt", "Pain Script Admin", 1, "headerLogo"], [1, "content"], [1, "appLoader"], ["styleClass", "custom-spinner", "strokeWidth", "8", "fill", "#EEEEEE", "animationDuration", ".5s"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "header", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_4__.ProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".headerLogo[_ngcontent-%COMP%] {\n  width: auto;\n  height: 30px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  padding: 15px 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #fff;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2;\n}\n\nheader[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  float: left;\n  height: 31px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VDd0NBLGFBQUE7RUFHQSw4QkFBQTtFRHhDQSxtQkFBQTtFQUNBLGdCQ2JNO0VBdUROLE1BQUE7RUFDQSxPQUFBO0VEekNBLFdBQUE7RUFDQSxVQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIvc3JjL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhlYWRlckxvZ28ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gIEBpbmNsdWRlIHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgQGluY2x1ZGUgdG9wLWxlZnQtMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogMzFweDtcclxuICB9XHJcbn0iLCIkY2dCbHVlQkc6ICMzNWI3ZTk7XHJcbiRhZEJsdWVCRzogIzBkNzdjMDtcclxuJGNnR3JheUJHOiAjZjFmMWYxO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRsaXRHcmF5OiAjYWFhO1xyXG4kbGl0R3JheTI6ICM5OTk7XHJcbiRsaXRHcmF5MzogI2NjYztcclxuJG1pZEdyYXk6ICM1MDUwNTA7XHJcbiRtaWRHcmF5MTogIzcwNzA3MDtcclxuJG1pZEdyYXkyOiAjNjA2MDYwO1xyXG4kcmVkOiAjZmY2NDdjO1xyXG4kZ3JleTogZ3JleTtcclxuJGxpZ2h0R3JleTogICNEQ0RDREM7XHJcbiRkZWZhdWx0Rm9udENvbG9yOiAjMzAzMDMwO1xyXG4kcGFnZUJnQ29sb3I6ICNmMmY1ZmE7XHJcbiRoZWFkVHh0Q29sb3I6ICMyMDIwMjA7XHJcbiRhbmNob3JCbHVlQ29sb3I6ICMxYzc1YmM7XHJcbiRhbmNob3JCbHVlQ29sb3IyOiAjMTI1ODkyO1xyXG4kZGFya0dyYXk6ICM0MDQwNDA7XHJcbiRpbmZvQmx1ZTogIzZiN2I5YztcclxuJHJlZEJnOiAjZmY0YzRjO1xyXG4kbGltZUdyZWVuOiAjNmVjNzczO1xyXG4kbGVhZkdyZWVuOiAjMjRiMTVjO1xyXG4kdkxpdEdyYXk6ICNkZGQ7XHJcbiRibGFjazogIzAwMDtcclxuJGFjdEJveDE6ICNhNDk5YzA7XHJcbiRhY3RCb3gyOiAjZDg4MDgxO1xyXG4kYWN0Qm94MzogIzk2ODE1ZTtcclxuJHN0YXR1c0JveDE6ICNiYjYwNjA7XHJcbiRzdGF0dXNCb3gyOiAjYTU3N2MyO1xyXG4kc3RhdHVzQm94MzogI2E5YmFlZTtcclxuJHZ5bGV0R3JheTogI2QwYzlkNjtcclxuJHRoaWNrQmx1ZTogIzQzNDI1ZDtcclxuJGxpdFdoaXRlOiAjZTllOWYwO1xyXG4kc2xpZGVyQmx1ZTogIzIxOTZmMztcclxuJGFjdHVhbEdyZWVuOiBncmVlbjtcclxuJGFjdHVhbFJlZDogcmVkO1xyXG4kZXJyUmVkOiAjZWEzYTNhO1xyXG4kYW1iZXJDb2xvcjogI2ZmYmYwMDtcclxuJHNvbGlkR3JheTogIzRkNGQ0ZDtcclxuJGNoYXJ0TGluZUNvbG9yOiAjZWNlZWYwO1xyXG4kY2hhcnRHcmF5VHh0OiAjNjY2O1xyXG4kY2hhcnRSZWRUeHQ6ICNkYzM2NDQ7XHJcbiRlc2NhbGF0ZUNvbG9yOiAjY2Y3ZjNkO1xyXG4kZXNjYWxhdGVDb2xvckRhcms6ICNiYjYzMWI7XHJcbiR0b21hdG86ICNmZTU3NTk7XHJcblxyXG5AbWl4aW4gbWFyLXBhZC0wIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuQG1peGluIGQtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5AbWl4aW4gc3BhY2UtYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbkBtaXhpbiB0b3AtbGVmdC0wIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5AbWl4aW4gaWNvbi1yZWQtZ3JlZW4ge1xyXG4gIC5waSB7XHJcbiAgICAvLyBwYWRkaW5nOiAzcHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDBweCAzcHg7XHJcblxyXG4gICAgJi5yZWQge1xyXG4gICAgICBjb2xvcjogJHJlZEJnO1xyXG4gICAgfVxyXG4gICAgJi5ncmVlbiB7XHJcbiAgICAgIGNvbG9yOiAkYWN0dWFsR3JlZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtaXhpbiByZWQtZ3JlZW4tZ3JleSB7XHJcbiAgJi5yZWQge1xyXG4gICAgYmFja2dyb3VuZDogJHJlZEJnO1xyXG4gIH1cclxuICAmLmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQ6ICRhY3R1YWxHcmVlbjtcclxuICB9XHJcbiAgJi5ncmV5IHtcclxuICAgIGJhY2tncm91bmQ6ICRsaWdodEdyZXk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/progressspinner */ 6062);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 3808);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 3423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/patient-overview/patient-overview.component */ 3193);
/* harmony import */ var _components_patient_overview_response_analytics_response_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/patient-overview/response-analytics/response-analytics.component */ 9669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__.ProgressSpinnerModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_patient_overview_patient_overview_component__WEBPACK_IMPORTED_MODULE_2__.PatientOverviewComponent,
        _components_patient_overview_response_analytics_response_analytics_component__WEBPACK_IMPORTED_MODULE_3__.ResponseAnalyticsComponent], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_9__.ProgressSpinnerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_11__.ChartsModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule] }); })();


/***/ }),

/***/ 3193:
/*!***************************************************************************!*\
  !*** ./src/app/components/patient-overview/patient-overview.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientOverviewComponent": () => (/* binding */ PatientOverviewComponent)
/* harmony export */ });
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-annotation */ 2057);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _response_analytics_response_analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response-analytics/response-analytics.component */ 9669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loader.service */ 8555);
/* harmony import */ var _services_patient_overview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient-overview.service */ 5662);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 3423);











function PatientOverviewComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const diagnosis_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pTooltip", diagnosis_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](diagnosis_r6 == null ? null : diagnosis_r6.name);
} }
function PatientOverviewComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Diagnoses:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PatientOverviewComponent_div_11_div_3_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.patientHeadingData == null ? null : ctx_r0.patientHeadingData.diagnoses);
} }
function PatientOverviewComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const comorbidity_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pTooltip", comorbidity_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](comorbidity_r8 == null ? null : comorbidity_r8.name);
} }
function PatientOverviewComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Comorbidities:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PatientOverviewComponent_div_12_div_3_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.patientHeadingData == null ? null : ctx_r1.patientHeadingData.comorbidities);
} }
const _c0 = function (a0, a1, a2) { return [a0, a1, a2]; };
function PatientOverviewComponent_div_41_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cycleHistory_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](2, _c0, cycleHistory_r10.color == "Red" ? "day red" : "day", cycleHistory_r10.color == "Green" ? "day green" : "day", cycleHistory_r10.color == "Grey" ? "day grey" : "day"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cycleHistory_r10.cycle, " ");
} }
function PatientOverviewComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PatientOverviewComponent_div_41_span_1_Template, 2, 6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.patientHeadingData == null ? null : ctx_r2.patientHeadingData.cycleHistory);
} }
function PatientOverviewComponent_div_42_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-response-analytics", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chartData_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("chartItem", chartData_r13);
} }
function PatientOverviewComponent_div_42_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "h3")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " No Chart Data to Display. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
function PatientOverviewComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PatientOverviewComponent_div_42_div_3_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PatientOverviewComponent_div_42_div_4_Template, 6, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.chartsdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r3.patientResponseSummaryData == null ? null : ctx_r3.patientResponseSummaryData.questions) == null);
} }
function PatientOverviewComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "h3")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " No Data found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
class PatientOverviewComponent {
    constructor(fb, loaderService, patientOverviewService, route, location) {
        this.fb = fb;
        this.loaderService = loaderService;
        this.patientOverviewService = patientOverviewService;
        this.route = route;
        this.location = location;
        this.routeParam = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.chartsdata = [];
        this.msgsForClinician = [];
        this.surveyId = 259;
        this.patientDisorders = [];
        this.patientComorbidities = [];
        this.charts = [];
        this.error = '';
        this.showErrorDialog = false;
        this.questionHistoryFlag = false;
        this.month = '0';
        this.year = '0';
        this.patientHistoryData = [];
        this.isMsgs = [];
        this.displayManualTimeEntry = false;
        this.view = false;
        this.startDate = '';
        this.endDate = '';
        this.addReviewTimeDates = [];
        this.addReviewTimeDatesArr = [];
        this.addReviewTimeEntries = [];
        this.addReviewTimeEntry = [];
        /**
         * Pain Score response chart properties
         */
        this.painScoreLabels = [];
        this.painScoreType = 'line';
        this.painScoreLegend = false;
        this.painScorePlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__];
        this.painScoreData = [
            {
                data: [],
            },
        ];
        /**
         * Craving Score response chart properties
         */
        this.cravingsScoreLabels = [];
        this.cravingsScoreType = 'line';
        this.cravingsScoreLegend = false;
        this.cravingsScorePlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__];
        this.cravingsScoreData = [
            {
                data: [],
            },
        ];
        this.loaderService.show();
        this.routeParam = this.route.params.subscribe((params) => {
            this.patientId = params['patientId'];
        }, (error) => {
            console.log(error);
            this.location.back();
        });
    }
    /**
     *  Gets the patient summary
     */
    getPatientResponse() {
        this.chartsdata = [];
        this.isMsgs = [];
        this.loaderService.show();
        this.patientOverviewService.combinedResponse().subscribe((res) => {
            var _a, _b, _c, _d, _e, _f;
            if (res != null) {
                this.loaderService.hide();
                this.patientHeadingData = res.headerData;
                this.patientResponseSummaryData = res.summaryData;
                if (((_a = this.patientResponseSummaryData) === null || _a === void 0 ? void 0 : _a.questions) != null) {
                    const allQuestions = (_b = this.patientResponseSummaryData) === null || _b === void 0 ? void 0 : _b.questions;
                    for (let i = 0; i < allQuestions.length; i++) {
                        this.chartsdata.push({ question: allQuestions[i] });
                    }
                }
                this.chartsdata = this.chartsdata.filter((o) => o.question.questionLabel != 'Message for Clinician' ||
                    o.question.history.length != 0);
                if (((_d = (_c = this.surveyDataReview) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.questions) != null) {
                    this.responseQuestions = (_f = (_e = this.surveyDataReview) === null || _e === void 0 ? void 0 : _e.response) === null || _f === void 0 ? void 0 : _f.questions;
                    const painScoreQuestionObj = this.responseQuestions.filter((o) => o.id === 1);
                }
                this.painDetails = {
                    Options: this.painScoreOptions,
                    Labels: this.painScoreLabels,
                    Type: 'line',
                    Legend: false,
                    Annotation: [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__],
                    Data: [
                        {
                            data: this.painScoreData[0].data,
                        },
                    ],
                };
                if (this.painDetails != null) {
                    this.charts.push(this.painDetails);
                }
            }
        }, (err) => {
            console.log(err);
            this.loaderService.hide();
        });
    }
    /**
     * On component load
     */
    ngOnInit() {
        window.scrollTo({ top: 0 });
        this.getPatientResponse();
    }
}
PatientOverviewComponent.ɵfac = function PatientOverviewComponent_Factory(t) { return new (t || PatientOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_patient_overview_service__WEBPACK_IMPORTED_MODULE_3__.PatientOverviewService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location)); };
PatientOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PatientOverviewComponent, selectors: [["app-patient-overview"]], viewQuery: function PatientOverviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_response_analytics_response_analytics_component__WEBPACK_IMPORTED_MODULE_1__.ResponseAnalyticsComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chartItem = _t.first);
    } }, decls: 44, vars: 11, consts: [[1, "mainContent", "fullWidth"], [1, "patientOverview"], [1, "patientDetails"], [1, "nameSection"], [1, "psid-block"], [1, "font"], [1, "details"], [1, "diag"], ["class", "detailsItem", 4, "ngIf"], [1, "basics"], [1, "detailsItem"], [1, "value"], [1, "label", "patientDetails"], [1, "detailsItem", "cycleHisContainer"], ["class", "cycleHis", 4, "ngIf"], ["class", "bottomSection", 4, "ngIf"], ["class", "ifNoData bottomContainer", 4, "ngIf"], [1, "label"], ["class", "value", 4, "ngFor", "ngForOf"], ["tooltipPosition", "top", 1, "diagValues", 3, "pTooltip"], [1, "cycleHis"], ["class", "day", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "day", 3, "ngClass"], [1, "bottomSection"], [1, "dailyStats"], [1, "chartsContainer"], ["class", "chartItem", 4, "ngFor", "ngForOf"], ["class", "chatContainer", 4, "ngIf"], [1, "chartItem"], [3, "chartItem"], [1, "chatContainer"], [1, "ifNoData"], [1, "pi", "pi-info-circle"], [1, "ifNoData", "bottomContainer"]], template: function PatientOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "PSID: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PatientOverviewComponent_div_11_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PatientOverviewComponent_div_12_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "div", 9)(15, "div", 10)(16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Enrolled:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10)(21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Cycle:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 10)(26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Day:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 10)(31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Completed:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 10)(36, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Percent:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, PatientOverviewComponent_div_41_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, PatientOverviewComponent_div_42_Template, 5, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, PatientOverviewComponent_div_43_Template, 5, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.patientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.patientHeadingData == null ? null : ctx.patientHeadingData.diagnoses == null ? null : ctx.patientHeadingData.diagnoses.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.patientHeadingData == null ? null : ctx.patientHeadingData.comorbidities == null ? null : ctx.patientHeadingData.comorbidities.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.patientHeadingData == null ? null : ctx.patientHeadingData.enrolled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.patientHeadingData == null ? null : ctx.patientHeadingData.cycle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.patientHeadingData == null ? null : ctx.patientHeadingData.day);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.patientHeadingData == null ? null : ctx.patientHeadingData.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.patientHeadingData == null ? null : ctx.patientHeadingData.percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.patientHeadingData == null ? null : ctx.patientHeadingData.cycleHistory == null ? null : ctx.patientHeadingData.cycleHistory.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.patientResponseSummaryData == null ? null : ctx.patientResponseSummaryData.questions) != null && (ctx.patientResponseSummaryData == null ? null : ctx.patientResponseSummaryData.patientId) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.patientResponseSummaryData == null ? null : ctx.patientResponseSummaryData.patientId) == 0 && (ctx.patientResponseSummaryData == null ? null : ctx.patientResponseSummaryData.messageCount) == 0 && (ctx.patientResponseSummaryData == null ? null : ctx.patientResponseSummaryData.responseCount) == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _response_analytics_response_analytics_component__WEBPACK_IMPORTED_MODULE_1__.ResponseAnalyticsComponent], styles: [".patientOverview .nameSection {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.patientOverview .nameSection h2 {\n  float: left;\n}\n.patientOverview .nameSection p-button {\n  float: right;\n}\n.patientOverview .basics {\n  display: flex;\n  flex: 1;\n  padding-right: 30px;\n}\n.patientOverview .viewDropdown {\n  display: flex;\n  align-items: center;\n}\n.patientOverview .viewDropdown .p-dropdown {\n  height: 31px;\n}\n.patientOverview .viewDropdown .p-inputtext {\n  padding: 0 0.5rem;\n}\n.patientOverview .cycleHis .day {\n  padding: 2px 4px;\n  text-align: center;\n  background: #aaa;\n  margin-left: 5px;\n  color: #fff;\n  border-radius: 4px;\n  min-width: 20px;\n  float: left;\n}\n.patientOverview .cycleHis .day.red {\n  background: #ff647c;\n}\n.patientOverview .cycleHis .day.green {\n  background: green;\n}\n.patientOverview .details {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #aaa;\n}\n.patientOverview .details .basicDetails {\n  flex: 3;\n}\n.patientOverview .details .phone {\n  flex: 1;\n}\n.patientOverview .details .diag {\n  display: flex;\n  justify-content: flex-end;\n}\n.patientOverview .details .detailsItem {\n  display: flex;\n  float: left;\n  margin-right: 20px;\n}\n.patientOverview .details .detailsItem:last-child {\n  margin-right: 0;\n}\n.patientOverview .details .detailsItem .label {\n  color: #606060;\n  font-size: 15px;\n  margin-right: 10px;\n}\n.patientOverview .details .detailsItem .value .diagValues {\n  background: #606060;\n  color: #fff;\n  padding: 2px 8px;\n  font-size: 12px;\n  line-height: 20px;\n  float: left;\n  margin-right: 5px;\n  border-radius: 4px;\n}\n.patientOverview .details .patientResp {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  border-left: 1px solid #aaa;\n  padding: 0 0 0 30px;\n}\n.patientOverview .subTitle {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 0 10px 0;\n  border-bottom: 1px solid #aaa;\n}\n.patientOverview .subTitle .checkInSection {\n  display: flex;\n}\n.patientOverview .subTitle .checkInSection .item {\n  margin: 0 30px 0 0;\n}\n.patientOverview .patientBar {\n  display: flex;\n  border-right: 1px solid #000;\n  height: 25px;\n}\n.patientOverview .patientBarView {\n  display: flex;\n  border-right: 1px solid #000;\n  height: 500px;\n}\n.patientOverview .bottomSection {\n  padding: 30px 0;\n  min-height: calc(100vh - 240px);\n  display: flex;\n  float: left;\n  width: 100%;\n}\n.patientOverview .bottomSection .dailyStats {\n  flex: 1;\n}\n.patientOverview .bottomSection .dailyStats .chartsContainer {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.patientOverview .bottomSection .dailyStats .chartsContainer .chartItem {\n  width: 30%;\n  min-height: 202px;\n  margin-bottom: 30px;\n  overflow: hidden;\n  background: #fff;\n  padding: 10px;\n  border: 1px solid #999;\n  margin-right: 3.3%;\n}\n.patientOverview .bottomSection .dailyStats .chartsContainer .chartItem:hover {\n  cursor: pointer;\n}\n.patientOverview .bottomSection .dailyStats .msgForClinician {\n  width: 80%;\n}\n.patientOverview .bottomSection .dailyStats .msgForClinician h2 {\n  font-weight: 700;\n  color: #606060;\n}\n.patientOverview .bottomSection .dailyStats .msgForClinician p {\n  color: #6d81a0;\n}\n.patientOverview .bottomSection .dailyStats .statsContent {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 30px;\n}\n.patientOverview .bottomSection .dailyStats .statsContent > * {\n  width: 24%;\n  margin-right: 1.3%;\n}\n.patientOverview .bottomSection .dailyStats .statsContent > *:last-child {\n  margin-right: 0;\n}\n.patientOverview .bottomSection .dailyStats .statsContent > * .chartBox {\n  width: 100%;\n  border: 1px solid #aaa;\n  border-radius: 8px;\n  margin-top: 10px;\n  overflow: hidden;\n}\n.patientOverview .bottomSection .dailyStats .statsContent > * .chartBox img {\n  width: 100%;\n}\n.patientOverview .bottomSection .dailyStats .msgFromPatient {\n  width: 50%;\n}\n.patientOverview .bottomSection .histories {\n  width: 100%;\n  max-width: 400px;\n}\n.patientOverview .bottomSection .histories .revHistory,\n.patientOverview .bottomSection .histories .patientHistory {\n  width: 100%;\n  background: #fff;\n  border-radius: 8px;\n  margin-bottom: 30px;\n  padding: 10px;\n  float: left;\n  color: #707070;\n}\n.patientOverview .bottomSection .histories .revHistory h2,\n.patientOverview .bottomSection .histories .patientHistory h2 {\n  border-bottom: 1px solid #aaa;\n  padding-bottom: 5px;\n  margin-bottom: 10px;\n  color: #303030;\n}\n.patientOverview .bottomSection .histories .revHistory h2 span,\n.patientOverview .bottomSection .histories .patientHistory h2 span {\n  float: right;\n  font-size: 14px;\n  color: #999;\n  font-weight: 400;\n  margin-top: 5px;\n}\n.patientOverview .bottomSection .histories .revHistory h2 span strong,\n.patientOverview .bottomSection .histories .patientHistory h2 span strong {\n  color: #606060;\n}\n.patientOverview .bottomSection .histories .revLogs {\n  list-style: none;\n  font-size: 12px;\n}\n.patientOverview .bottomSection .histories .revLogs li {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n}\n.patientOverview .bottomSection .histories .revLogs li:last-child {\n  border-bottom: 0;\n}\n.patientOverview .bottomSection .histories .revLogs li .labelsSection {\n  font-weight: 700;\n}\n.patientOverview .bottomSection .histories .revLogs li .labelsSection span:nth-child(2) {\n  width: 110px;\n  display: inline-block;\n}\n.patientOverview .bottomSection .histories .revLogs li .labelsSection .escTo {\n  text-transform: capitalize;\n}\n.patientOverview .bottomSection .histories .revLogs li .labelsSection span {\n  margin-right: 30px;\n}\n.patientOverview .bottomSection .histories .revLogs li .labelsSection span:nth-child(3) i {\n  margin-right: 5px;\n  color: red;\n}\n.patientOverview .bottomSection .histories .revLogs li .description {\n  color: #707070;\n  line-height: 1.5;\n  font-size: 14px;\n}\n.patientOverview .bottomSection .histories .patientLogs {\n  list-style: none;\n  font-size: 12px;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow {\n  display: flex;\n  justify-content: space-between;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow div {\n  display: inline-block;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow div span {\n  font-weight: 700;\n  color: #303030;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow div:last-child {\n  margin: 0;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycle {\n  flex: 1;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .day {\n  flex: 1;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .progBar {\n  flex: 3;\n  margin-right: 20px;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .endDate {\n  flex: 2;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyCycleTitle {\n  flex: 1.3;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyCycle {\n  flex: 1;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyPer {\n  flex: 1;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyTar {\n  flex: 1;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyTar .pi {\n  margin: 0px 3px;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyTar .pi.red {\n  color: #ff4c4c;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyTar .pi.green {\n  color: green;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyOverallTitle {\n  flex: 1.3;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .surveyOverall {\n  flex: 1;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cyclePer {\n  flex: 1;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleTar {\n  flex: 1;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleTar .pi {\n  margin: 0px 3px;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleTar .pi.red {\n  color: #ff4c4c;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleTar .pi.green {\n  color: green;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleHisTitle {\n  width: 80px;\n  display: inline-block;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleHis {\n  flex: 0px;\n  display: inline-block;\n  justify-content: space-between;\n  align-items: left;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleHis .day {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  color: #fff;\n  margin: 0 5px 3px 0;\n  text-align: center;\n  float: left;\n  padding: 0 0 3px 0;\n  line-height: 20px;\n  font-size: 12px;\n  font-weight: 300;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleHis .day.red {\n  background: #ff4c4c;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleHis .day.green {\n  background: green;\n}\n.patientOverview .bottomSection .histories .patientLogs .cycleRow .cycleHis .day.grey {\n  background: #DCDCDC;\n}\n.patientOverview .bottomSection .histories .patientLogs li {\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n}\n.patientOverview .bottomSection .histories .patientLogs li div {\n  flex: 1;\n  display: flex;\n  padding-right: 10px;\n}\n.patientOverview .bottomSection .histories .patientLogs li div span {\n  flex: 1;\n  float: left;\n  line-height: 1.5;\n}\n.patientOverview .bottomSection .histories .patientLogs li div span:nth-child(2) {\n  font-weight: 700;\n  color: #303030;\n}\n.patientOverview .bottomSection .histories .patientLogs li div.progBar {\n  width: 200px;\n}\n.patientOverview .rightSide {\n  display: flex;\n  margin-left: 277px;\n  justify-content: space-between;\n}\n.patientOverview .rightSide .viewButton {\n  margin-left: 100px;\n}\n.detailsItemRight {\n  display: flex;\n  float: left;\n}\n.detailsItemRight .label {\n  color: #606060;\n  font-size: 12px;\n  margin-right: 5px;\n  width: max-content;\n  margin-left: 25px;\n}\n.detailsItemRight .value .diagValues {\n  background: #606060;\n  color: #fff;\n  padding: 2px 8px;\n  font-size: 12px;\n  line-height: 20px;\n  float: left;\n  margin-right: 5px;\n  border-radius: 4px;\n}\n.textBox {\n  background-image: none;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(#eceef0 1px, transparent 1px), linear-gradient(to right, #eceef0 1px, #fff 1px);\n  background-size: 18px 18px;\n}\n.textBox .textContent {\n  font-size: 25px;\n  line-height: 1.25;\n  font-weight: 700;\n  color: #505050;\n  text-align: center;\n}\n.chatConv {\n  width: 100%;\n  max-width: 400px;\n  border-left: 1px solid #aaa;\n  padding-left: 30px;\n}\n.chatContainer {\n  width: 100%;\n  max-width: 500px;\n}\n.pi-info-circle {\n  font-size: 50px;\n  color: #ccc;\n  margin-bottom: 10px;\n}\n.bottomContainer {\n  margin-top: 120px;\n}\n.patientDetails {\n  margin-left: 5px;\n}\n.psid-block {\n  margin-right: 5%;\n}\n.psid-block .font {\n  color: #aaa;\n  margin-right: 5px;\n}\n.rightSideOptions {\n  margin-left: auto;\n  margin-right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 350px;\n}\n.backButton {\n  width: 20%;\n}\n.reviewTimeGroup {\n  border-top: 1px solid #aaa;\n  display: inline-flex;\n}\n.reviewTimeGroup .formGroup {\n  margin-top: 30px;\n}\n.reviewTimeGroup .formContent .content {\n  margin-top: 25px;\n  justify-content: space-between;\n  margin-left: 250px;\n}\n.popBtn-container {\n  width: 100%;\n  float: left;\n  margin-top: 20px;\n  padding-top: 15px;\n  display: flex;\n}\n.popBtn-container button {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUNpREEsYUFBQTtFQUdBLDhCQUFBO0VEakRFLG1CQUFBO0FBRko7QUFHSTtFQUNFLFdBQUE7QUFETjtBQUdJO0VBQ0UsWUFBQTtBQUROO0FBS0U7RUFDRSxhQUFBO0VBRUEsT0FBQTtFQUNBLG1CQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUxKO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFNSTtFQUNFLGlCQUFBO0FBSk47QUFTSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFQTjtBQVFNO0VBQ0UsbUJDbENGO0FENEJOO0FBUU07RUFDRSxpQkNaTTtBRE1kO0FBV0U7RUFDRSxXQUFBO0VDREYsYUFBQTtFQUdBLDhCQUFBO0VEQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFUSjtBQVVJO0VBQ0UsT0FBQTtBQVJOO0FBVUk7RUFDRSxPQUFBO0FBUk47QUFVSTtFQUVFLGFBQUE7RUFDQSx5QkFBQTtBQVROO0FBV0k7RUNsQkYsYUFBQTtFRG9CSSxXQUFBO0VBQ0Esa0JBQUE7QUFUTjtBQVVNO0VBRUUsZUFBQTtBQVRSO0FBV007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVFI7QUFZUTtFQUNFLG1CQzVFQztFRDZFRCxXQ25GRjtFRG9GRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVlY7QUFlSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQWJOO0FBZ0JFO0VDdkRBLGFBQUE7RUFHQSw4QkFBQTtFRHVERSxzQkFBQTtFQUNBLDZCQUFBO0FBZEo7QUFlSTtFQzVERixhQUFBO0FEZ0RGO0FBY007RUFDRSxrQkFBQTtBQVpSO0FBaUJFO0VDcEVBLGFBQUE7RURzRUUsNEJBQUE7RUFDQSxZQUFBO0FBZko7QUFrQkU7RUMxRUEsYUFBQTtFRDRFRSw0QkFBQTtFQUNBLGFBQUE7QUFoQko7QUFtQkU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUNsRkYsYUFBQTtFRG9GRSxXQUFBO0VBQ0EsV0FBQTtBQWpCSjtBQWtCSTtFQUNFLE9BQUE7QUFoQk47QUFpQk07RUN4RkosYUFBQTtFRDBGTSxlQUFBO0VBQ0EsV0FBQTtBQWZSO0FBZ0JRO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFkVjtBQWVVO0VBQ0UsZUFBQTtBQWJaO0FBaUJNO0VBQ0UsVUFBQTtBQWZSO0FBZ0JRO0VBQ0UsZ0JBQUE7RUFDQSxjQ3pKQztBRDJJWDtBQWdCUTtFQUNFLGNBQUE7QUFkVjtBQWlCTTtFQ3BISixhQUFBO0VEc0hNLG1CQUFBO0VBQ0EsbUJBQUE7QUFmUjtBQWdCUTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQWRWO0FBZVU7RUFDRSxlQUFBO0FBYlo7QUFlVTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWJaO0FBY1k7RUFDRSxXQUFBO0FBWmQ7QUFrQk07RUFDRSxVQUFBO0FBaEJSO0FBbUJJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBakJOO0FBb0JNOztFQUVFLFdBQUE7RUFDQSxnQkN4TUE7RUR5TUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0N4TUc7QURzTFg7QUFtQlE7O0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0N4TVM7QUR3TG5CO0FBa0JVOztFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0NyTkQ7RURzTkMsZ0JBQUE7RUFDQSxlQUFBO0FBZlo7QUFnQlk7O0VBQ0UsY0NyTkg7QUR3TVg7QUFtQk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFqQlI7QUFrQlE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoQlY7QUFpQlU7RUFDRSxnQkFBQTtBQWZaO0FBaUJVO0VBQ0UsZ0JBQUE7QUFmWjtBQWlCWTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQWZkO0FBaUJZO0VBQ0UsMEJBQUE7QUFmZDtBQWlCWTtFQUNFLGtCQUFBO0FBZmQ7QUFpQmdCO0VBQ0UsaUJBQUE7RUFDQSxVQ3pOTjtBRDBNWjtBQW9CVTtFQUNFLGNDM1BEO0VENFBDLGdCQUFBO0VBQ0EsZUFBQTtBQWxCWjtBQXVCTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQXJCUjtBQXNCUTtFQ3pOTixhQUFBO0VBR0EsOEJBQUE7QURvTUY7QUFxQlU7RUFDRSxxQkFBQTtBQW5CWjtBQW9CWTtFQUNFLGdCQUFBO0VBQ0EsY0N2UUs7QURxUG5CO0FBb0JZO0VBQ0UsU0FBQTtBQWxCZDtBQXFCVTtFQUNFLE9BQUE7QUFuQlo7QUFxQlU7RUFDRSxPQUFBO0FBbkJaO0FBcUJVO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FBbkJaO0FBcUJVO0VBQ0UsT0FBQTtBQW5CWjtBQXFCVTtFQUNFLFNBQUE7QUFuQlo7QUFxQlU7RUFDRSxPQUFBO0FBbkJaO0FBcUJVO0VBQ0UsT0FBQTtBQW5CWjtBQXFCVTtFQUNFLE9BQUE7QUFuQlo7QUNoT0U7RUFJRSxlQUFBO0FEK05KO0FDN05JO0VBQ0UsY0FqREU7QURnUlI7QUM3Tkk7RUFDRSxZQXJDUTtBRG9RZDtBQWFVO0VBQ0UsU0FBQTtBQVhaO0FBYVU7RUFDRSxPQUFBO0FBWFo7QUFhVTtFQUNFLE9BQUE7QUFYWjtBQWFVO0VBQ0UsT0FBQTtBQVhaO0FDclBFO0VBSUUsZUFBQTtBRG9QSjtBQ2xQSTtFQUNFLGNBakRFO0FEcVNSO0FDbFBJO0VBQ0UsWUFyQ1E7QUR5UmQ7QUFLVTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUhaO0FBS1U7RUFDRSxTQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFJWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQzNVTjtFRDRVTSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGZDtBQ3RRRTtFQUNFLG1CQTFESTtBRGtVUjtBQ3RRRTtFQUNFLGlCQTlDVTtBRHNUZDtBQ3RRRTtFQUNFLG1CQXhFUztBRGdWYjtBQUZRO0VBQ0UsbUJBQUE7RUN2U1IsYUFBQTtFRHlTUSxtQkFBQTtBQUlWO0FBSFU7RUFDRSxPQUFBO0VDM1NWLGFBQUE7RUQ2U1UsbUJBQUE7QUFLWjtBQUpZO0VBQ0UsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU1kO0FBTGM7RUFDRSxnQkFBQTtFQUNBLGNDM1ZHO0FEa1duQjtBQUpZO0VBQ0UsWUFBQTtBQU1kO0FBRUU7RUNoVUEsYUFBQTtFRGtVRSxrQkFBQTtFQy9URiw4QkFBQTtBRGdVRjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUtBO0VDM1VFLGFBQUE7RUQ2VUEsV0FBQTtBQUZGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0k7RUFDRSxtQkNuWUs7RURvWUwsV0MxWUU7RUQyWUYsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhOO0FBUUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlIQUFBO0VBQ0EsMEJBQUE7QUFMRjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQVNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQU5GO0FBWUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFURjtBQVlBO0VBQ0UsZUFBQTtFQUNBLFdDcmJTO0VEc2JULG1CQUFBO0FBVEY7QUFZQTtFQUNFLGlCQUFBO0FBVEY7QUFZQTtFQUNFLGdCQUFBO0FBVEY7QUFhQTtFQUNHLGdCQUFBO0FBVkg7QUFZRTtFQUNFLFdDeGNNO0VEeWNOLGlCQUFBO0FBVko7QUFjQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBWEY7QUFjQTtFQUNFLFVBQUE7QUFYRjtBQWVBO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtBQVpGO0FBYUU7RUFDRSxnQkFBQTtBQVhKO0FBY0k7RUFDRSxnQkFBQTtFQ2piSiw4QkFBQTtFRG1iSSxrQkFBQTtBQVpOO0FBaUJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtBQWZGO0FBZ0JFO0VBQ0UsaUJBQUE7QUFkSiIsImZpbGUiOiJwYXRpZW50LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi9zcmMvdmFyaWFibGVzXCI7XHJcblxyXG4ucGF0aWVudE92ZXJ2aWV3IHtcclxuICAubmFtZVNlY3Rpb24ge1xyXG4gICAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gICAgQGluY2x1ZGUgc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgcC1idXR0b24ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFzaWNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIC52aWV3RHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAucC1kcm9wZG93biB7XHJcbiAgICAgIGhlaWdodDogMzFweDtcclxuICAgIH1cclxuICAgIC5wLWlucHV0dGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN5Y2xlSGlzIHtcclxuICAgIC5kYXkge1xyXG4gICAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICYucmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcmVkO1xyXG4gICAgICB9XHJcbiAgICAgICYuZ3JlZW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRhY3R1YWxHcmVlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBAaW5jbHVkZSBkLWZsZXg7XHJcbiAgICBAaW5jbHVkZSBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGl0R3JheTtcclxuICAgIC5iYXNpY0RldGFpbHMge1xyXG4gICAgICBmbGV4OiAzO1xyXG4gICAgfVxyXG4gICAgLnBob25lIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICAgIC5kaWFnIHtcclxuICAgICAvLyBmbGV4OiAyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHNJdGVtIHtcclxuICAgICAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIC8vbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICM2MDYwNjA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAudmFsdWUge1xyXG4gICAgICAgIC5kaWFnVmFsdWVzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRtaWRHcmF5MjtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYXRpZW50UmVzcCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGxpdEdyYXk7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdWJUaXRsZSB7XHJcbiAgICBAaW5jbHVkZSBkLWZsZXg7XHJcbiAgICBAaW5jbHVkZSBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDEwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGl0R3JheTtcclxuICAgIC5jaGVja0luU2VjdGlvbiB7XHJcbiAgICAgIEBpbmNsdWRlIGQtZmxleDtcclxuICAgICAgLml0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMCAzMHB4IDAgMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhdGllbnRCYXIge1xyXG4gICAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhdGllbnRCYXJWaWV3IHtcclxuICAgIEBpbmNsdWRlIGQtZmxleDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRibGFjaztcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tU2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpO1xyXG4gICAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5kYWlseVN0YXRzIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgLmNoYXJ0c0NvbnRhaW5lciB7XHJcbiAgICAgICAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuY2hhcnRJdGVtIHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyMDJweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjMlO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm1zZ0ZvckNsaW5pY2lhbiB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6ICRtaWRHcmF5MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogIzZkODFhMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnN0YXRzQ29udGVudCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAmID4gKiB7XHJcbiAgICAgICAgICB3aWR0aDogMjQlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjMlO1xyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoYXJ0Qm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaXRHcmF5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tc2dGcm9tUGF0aWVudCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhpc3RvcmllcyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICRsaXRHcmF5O1xyXG5cclxuICAgICAgLnJldkhpc3RvcnksXHJcbiAgICAgIC5wYXRpZW50SGlzdG9yeSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6ICRtaWRHcmF5MTtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpdEdyYXk7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdEZvbnRDb2xvcjtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbGl0R3JheTI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJG1pZEdyYXkyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmV2TG9ncyB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR2TGl0R3JheTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxhYmVsc1NlY3Rpb24ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICAgICAgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmVzY1RvIHtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGFjdHVhbFJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbWlkR3JheTE7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXRpZW50TG9ncyB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgLmN5Y2xlUm93IHtcclxuICAgICAgICAgIEBpbmNsdWRlIGQtZmxleDtcclxuICAgICAgICAgIEBpbmNsdWRlIHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRkZWZhdWx0Rm9udENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3ljbGUge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRheSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ0JhciB7XHJcbiAgICAgICAgICAgIGZsZXg6IDM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbmREYXRlIHtcclxuICAgICAgICAgICAgZmxleDogMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdXJ2ZXlDeWNsZVRpdGxlIHtcclxuICAgICAgICAgICAgZmxleDogMS4zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1cnZleUN5Y2xlIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdXJ2ZXlQZXIge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1cnZleVRhciB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGljb24tcmVkLWdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1cnZleU92ZXJhbGxUaXRsZSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEuMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdXJ2ZXlPdmVyYWxsIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jeWNsZVBlciB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3ljbGVUYXIge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBpY29uLXJlZC1ncmVlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jeWNsZUhpc1RpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jeWNsZUhpcyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgICAgICAgICAuZGF5IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAzcHggMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDNweCAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIHJlZC1ncmVlbi1ncmV5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBAaW5jbHVkZSBkLWZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdEZvbnRDb2xvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5wcm9nQmFyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yaWdodFNpZGUge1xyXG4gICAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3N3B4O1xyXG4gICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBAaW5jbHVkZSBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLnZpZXdCdXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0YWlsc0l0ZW1SaWdodCB7XHJcbiAgQGluY2x1ZGUgZC1mbGV4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAubGFiZWwge1xyXG4gICAgY29sb3I6ICM2MDYwNjA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIH1cclxuICAudmFsdWUge1xyXG4gICAgLmRpYWdWYWx1ZXMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkbWlkR3JheTI7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRleHRCb3gge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2VjZWVmMCAxcHgsIHRyYW5zcGFyZW50IDFweCksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VjZWVmMCAxcHgsICNmZmYgMXB4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweDtcclxuXHJcbiAgLnRleHRDb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjNTA1MDUwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXRDb252IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGxpdEdyYXk7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoYXRDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5waS1pbmZvLWNpcmNsZSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGNvbG9yOiAkbGl0R3JheTM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJvdHRvbUNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5wYXRpZW50RGV0YWlscyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAvLyBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuLnBzaWQtYmxvY2sge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAuZm9udHtcclxuICAgIGNvbG9yOiAkbGl0R3JheTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJpZ2h0U2lkZU9wdGlvbnN7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLmJhY2tCdXR0b24ge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiB9XHJcblxyXG5cclxuLnJldmlld1RpbWVHcm91cCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgLmZvcm1Hcm91cCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICAuZm9ybUNvbnRlbnQge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICBAaW5jbHVkZSBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucG9wQnRuLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59IiwiJGNnQmx1ZUJHOiAjMzViN2U5O1xyXG4kYWRCbHVlQkc6ICMwZDc3YzA7XHJcbiRjZ0dyYXlCRzogI2YxZjFmMTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kbGl0R3JheTogI2FhYTtcclxuJGxpdEdyYXkyOiAjOTk5O1xyXG4kbGl0R3JheTM6ICNjY2M7XHJcbiRtaWRHcmF5OiAjNTA1MDUwO1xyXG4kbWlkR3JheTE6ICM3MDcwNzA7XHJcbiRtaWRHcmF5MjogIzYwNjA2MDtcclxuJHJlZDogI2ZmNjQ3YztcclxuJGdyZXk6IGdyZXk7XHJcbiRsaWdodEdyZXk6ICAjRENEQ0RDO1xyXG4kZGVmYXVsdEZvbnRDb2xvcjogIzMwMzAzMDtcclxuJHBhZ2VCZ0NvbG9yOiAjZjJmNWZhO1xyXG4kaGVhZFR4dENvbG9yOiAjMjAyMDIwO1xyXG4kYW5jaG9yQmx1ZUNvbG9yOiAjMWM3NWJjO1xyXG4kYW5jaG9yQmx1ZUNvbG9yMjogIzEyNTg5MjtcclxuJGRhcmtHcmF5OiAjNDA0MDQwO1xyXG4kaW5mb0JsdWU6ICM2YjdiOWM7XHJcbiRyZWRCZzogI2ZmNGM0YztcclxuJGxpbWVHcmVlbjogIzZlYzc3MztcclxuJGxlYWZHcmVlbjogIzI0YjE1YztcclxuJHZMaXRHcmF5OiAjZGRkO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRhY3RCb3gxOiAjYTQ5OWMwO1xyXG4kYWN0Qm94MjogI2Q4ODA4MTtcclxuJGFjdEJveDM6ICM5NjgxNWU7XHJcbiRzdGF0dXNCb3gxOiAjYmI2MDYwO1xyXG4kc3RhdHVzQm94MjogI2E1NzdjMjtcclxuJHN0YXR1c0JveDM6ICNhOWJhZWU7XHJcbiR2eWxldEdyYXk6ICNkMGM5ZDY7XHJcbiR0aGlja0JsdWU6ICM0MzQyNWQ7XHJcbiRsaXRXaGl0ZTogI2U5ZTlmMDtcclxuJHNsaWRlckJsdWU6ICMyMTk2ZjM7XHJcbiRhY3R1YWxHcmVlbjogZ3JlZW47XHJcbiRhY3R1YWxSZWQ6IHJlZDtcclxuJGVyclJlZDogI2VhM2EzYTtcclxuJGFtYmVyQ29sb3I6ICNmZmJmMDA7XHJcbiRzb2xpZEdyYXk6ICM0ZDRkNGQ7XHJcbiRjaGFydExpbmVDb2xvcjogI2VjZWVmMDtcclxuJGNoYXJ0R3JheVR4dDogIzY2NjtcclxuJGNoYXJ0UmVkVHh0OiAjZGMzNjQ0O1xyXG4kZXNjYWxhdGVDb2xvcjogI2NmN2YzZDtcclxuJGVzY2FsYXRlQ29sb3JEYXJrOiAjYmI2MzFiO1xyXG4kdG9tYXRvOiAjZmU1NzU5O1xyXG5cclxuQG1peGluIG1hci1wYWQtMCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbkBtaXhpbiBkLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuQG1peGluIHNwYWNlLWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5AbWl4aW4gdG9wLWxlZnQtMCB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuQG1peGluIGljb24tcmVkLWdyZWVuIHtcclxuICAucGkge1xyXG4gICAgLy8gcGFkZGluZzogM3B4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG5cclxuICAgICYucmVkIHtcclxuICAgICAgY29sb3I6ICRyZWRCZztcclxuICAgIH1cclxuICAgICYuZ3JlZW4ge1xyXG4gICAgICBjb2xvcjogJGFjdHVhbEdyZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWl4aW4gcmVkLWdyZWVuLWdyZXkge1xyXG4gICYucmVkIHtcclxuICAgIGJhY2tncm91bmQ6ICRyZWRCZztcclxuICB9XHJcbiAgJi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYWN0dWFsR3JlZW47XHJcbiAgfVxyXG4gICYuZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHRHcmV5O1xyXG4gIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 9669:
/*!************************************************************************************************!*\
  !*** ./src/app/components/patient-overview/response-analytics/response-analytics.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseAnalyticsComponent": () => (/* binding */ ResponseAnalyticsComponent)
/* harmony export */ });
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-annotation */ 2057);
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tooltip */ 3423);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 3808);





function ResponseAnalyticsComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResponseAnalyticsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r1.lineChartData)("labels", ctx_r1.lineChartLabels)("options", ctx_r1.lineChartOptions)("plugins", ctx_r1.lineChartPlugins)("legend", ctx_r1.lineChartLegend)("chartType", ctx_r1.lineChartType);
} }
const _c0 = function (a0, a1, a2) { return [a0, a1, a2]; };
function ResponseAnalyticsComponent_div_5_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const history_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, (history_r9 == null ? null : history_r9.response) != ctx_r8.defaultBound ? "ballIcon green" : "ballIcon", (history_r9 == null ? null : history_r9.response) == ctx_r8.defaultBound ? "ballIcon red" : "ballIcon", (history_r9 == null ? null : history_r9.response) == "Unsure" ? "ballIcon yellow" : "ballIcon"))("pTooltip", ctx_r8.gettoottipValue(history_r9));
} }
function ResponseAnalyticsComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResponseAnalyticsComponent_div_5_div_4_div_1_Template, 1, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.iconTypeHistories);
} }
function ResponseAnalyticsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ResponseAnalyticsComponent_div_5_div_4_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "canvas", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.matchedWithBound ? "bound red" : "bound gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedOptionofTypeIcons, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.iconTypeHistories.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx_r2.lineChartData)("labels", ctx_r2.lineChartLabels)("options", ctx_r2.lineChartOptions)("plugins", ctx_r2.lineChartPlugins)("legend", ctx_r2.lineChartLegend)("chartType", ctx_r2.lineChartType);
} }
function ResponseAnalyticsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (ctx_r3.chartItem == null ? null : ctx_r3.chartItem.question == null ? null : ctx_r3.chartItem.question.alarming) && ctx_r3.filteredArr ? "boundRed" : "bound");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.dbtEmptyAnswer);
} }
function ResponseAnalyticsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.completeAnswer, " ");
} }
class ResponseAnalyticsComponent {
    /**
     * Constructor
     */
    constructor() {
        this.isDashboardTypeTrend = false;
        this.isDashboardTypeIcons = false;
        this.isDashboardTypeText = false;
        this.isDashboardTypeEmpty = false;
        this.matchedWithBound = false;
        this.selectedBoundValue = '';
        this.selectedOptionofTypeIcons = '';
        this.questionOptions = [];
        this.iconTypeHistories = [];
        this.dashboardTrendArr = [];
        // questionList: Question[];
        this.filteredArr = false;
        this.lineChartLabels = [];
        this.lineChartType = 'line';
        this.lineChartLegend = false;
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_0__];
        this.lineChartData = [
            {
                data: [],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.2,
            },
        ];
    }
    /**
     * sets chart options
     */
    setupChartOptions() {
        this.lineChartOptions = {
            responsive: true,
            layout: {
                padding: 10,
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            suggestedMax: this.dashboardTrendYAxisValue,
                            stepSize: 0,
                            beginAtZero: true,
                        },
                    },
                ],
                xAxes: [
                    {
                        display: true,
                        ticks: {
                            suggestedMin: 0,
                            display: false,
                        },
                    },
                ],
            },
            annotation: {
                drawTime: 'afterDatasetsDraw',
                annotations: [
                    {
                        type: 'box',
                        xMin: 1,
                        xMax: 0,
                        yMin: 0,
                        yMax: 100,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: 0,
                    },
                    {
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: this.setThresholdPosition(),
                        borderColor: this.gatSelectedBoundValueColor(),
                        borderWidth: 2,
                        borderDash: [5, 3],
                    },
                    {
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: this.setThresholdPosition(),
                        borderColor: 'transparent',
                        label: {
                            backgroundColor: 'transparent',
                            xPadding: 5,
                            yPadding: 5,
                            fontSize: 30,
                            content: this.gatSelectedBoundValue(),
                            fontColor: this.gatSelectedBoundValueColor(),
                            enabled: true,
                        },
                    },
                ],
            },
        };
    }
    /**
     * on component load
     */
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        this.questionLabel = (_b = (_a = this.chartItem) === null || _a === void 0 ? void 0 : _a.question) === null || _b === void 0 ? void 0 : _b.questionLabel;
        this.questionText = (_d = (_c = this.chartItem) === null || _c === void 0 ? void 0 : _c.question) === null || _d === void 0 ? void 0 : _d.questionText;
        if (this.chartItem.question.dashboardType == 'Trend') {
            this.defaultBound =
                ((_e = this.chartItem) === null || _e === void 0 ? void 0 : _e.bound) == undefined
                    ? (_g = (_f = this.chartItem) === null || _f === void 0 ? void 0 : _f.question) === null || _g === void 0 ? void 0 : _g.bound
                    : (_h = this.chartItem) === null || _h === void 0 ? void 0 : _h.bound;
            this.isDashboardTypeTrend = true;
            this.setupChartForDashboardTypeTrend();
            this.setDashboardTrendYAxisValues();
            this.setupChartOptions();
        }
        else {
            this.isDashboardTypeTrend = false;
        }
        if (this.chartItem.question.dashboardType == 'Icons') {
            this.defaultBound =
                ((_j = this.chartItem) === null || _j === void 0 ? void 0 : _j.bound) == undefined
                    ? (_l = (_k = this.chartItem) === null || _k === void 0 ? void 0 : _k.question) === null || _l === void 0 ? void 0 : _l.bound
                    : (_m = this.chartItem) === null || _m === void 0 ? void 0 : _m.bound;
            this.isDashboardTypeIcons = true;
            this.setupChartForDashboardTypeIcons();
            this.setupChartOptions();
        }
        else {
            this.isDashboardTypeIcons = false;
        }
        if (this.chartItem.question.dashboardType == 'Text') {
            this.defaultBound =
                ((_o = this.chartItem) === null || _o === void 0 ? void 0 : _o.bound) == undefined
                    ? (_q = (_p = this.chartItem) === null || _p === void 0 ? void 0 : _p.question) === null || _q === void 0 ? void 0 : _q.bound
                    : (_r = this.chartItem) === null || _r === void 0 ? void 0 : _r.bound;
            this.isDashboardTypeText =
                this.chartItem.question.questionLabel == 'Message for Clinician'
                    ? ((_t = (_s = this.chartItem) === null || _s === void 0 ? void 0 : _s.question) === null || _t === void 0 ? void 0 : _t.history.length)
                        ? true
                        : false
                    : true;
            this.completeAnswer =
                this.chartItem.question.questionLabel == 'Message for Clinician'
                    ? (_w = (_v = (_u = this.chartItem) === null || _u === void 0 ? void 0 : _u.question) === null || _v === void 0 ? void 0 : _v.history[0]) === null || _w === void 0 ? void 0 : _w.response
                    : (_y = (_x = this.chartItem) === null || _x === void 0 ? void 0 : _x.question) === null || _y === void 0 ? void 0 : _y.value;
        }
        else {
            this.isDashboardTypeText = false;
        }
        if (this.chartItem.question.dashboardType == '' || '') {
            this.defaultBound =
                ((_z = this.chartItem) === null || _z === void 0 ? void 0 : _z.bound) == undefined
                    ? (_1 = (_0 = this.chartItem) === null || _0 === void 0 ? void 0 : _0.question) === null || _1 === void 0 ? void 0 : _1.bound
                    : (_2 = this.chartItem) === null || _2 === void 0 ? void 0 : _2.bound;
            this.isDashboardTypeEmpty = true;
            this.dbtEmptyAnswer = this.gatSelectedBoundValue();
        }
        else {
            this.isDashboardTypeEmpty = false;
        }
    }
    /**
     * set-up tend type chart options dynamically.
     */
    setDashboardTrendYAxisValues() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.dashboardTrendArr = [];
        this.defaultBound =
            ((_a = this.chartItem) === null || _a === void 0 ? void 0 : _a.bound) == undefined
                ? (_c = (_b = this.chartItem) === null || _b === void 0 ? void 0 : _b.question) === null || _c === void 0 ? void 0 : _c.bound
                : (_d = this.chartItem) === null || _d === void 0 ? void 0 : _d.bound;
        if (((_f = (_e = this.chartItem) === null || _e === void 0 ? void 0 : _e.question) === null || _f === void 0 ? void 0 : _f.history) != null) {
            const newHist = (_h = (_g = this.chartItem) === null || _g === void 0 ? void 0 : _g.question) === null || _h === void 0 ? void 0 : _h.history;
            newHist === null || newHist === void 0 ? void 0 : newHist.forEach((o) => {
                this.dashboardTrendArr.push(o === null || o === void 0 ? void 0 : o.response);
                this.dashboardTrendArr.sort();
            });
        }
        else {
            const newHist = (_k = (_j = this.chartItem) === null || _j === void 0 ? void 0 : _j.question) === null || _k === void 0 ? void 0 : _k.options;
            newHist === null || newHist === void 0 ? void 0 : newHist.forEach((o) => {
                o.selected == true ? this.dashboardTrendArr.push(o.label) : '';
            });
        }
        this.maxValue = this.dashboardTrendArr[this.dashboardTrendArr.length - 1];
        if (Number(this.defaultBound) > parseInt(this.maxValue)) {
            if (Number(this.defaultBound) < 10) {
                this.dashboardTrendYAxisValue = 10;
            }
            else {
                this.dashboardTrendYAxisValue = Number(this.defaultBound) + 5;
            }
        }
        else {
            if (parseInt(this.maxValue) < 10) {
                this.dashboardTrendYAxisValue = 10;
            }
            else {
                this.dashboardTrendYAxisValue = parseInt(this.maxValue) + 5;
            }
        }
    }
    /**
     * setsup chart for dashboard type trend
     */
    setupChartForDashboardTypeTrend() {
        if (this.chartItem.question.history != null) {
            const history = this.chartItem.question.history.slice().reverse();
            this.lineChartLabels = history.reduce((a, o) => (o.responseDate && a.push(o.responseDate), a), []);
            this.lineChartData[0].data = history.reduce((a, o) => (o.response && a.push(o.response), a), []);
        }
    }
    /**
     * setting up chart fot dashboard type icons
     */
    setupChartForDashboardTypeIcons() {
        var _a;
        if (this.chartItem.question.history != null) {
            this.iconTypeHistories = this.chartItem.question.history
                .slice()
                .reverse();
        }
        this.selectedOptionofTypeIcons = this.gatSelectedBoundValue();
        if ((_a = this.defaultBound) === null || _a === void 0 ? void 0 : _a.includes(this.selectedOptionofTypeIcons)) {
            this.matchedWithBound = true;
        }
    }
    /**
     * sets bound value as threshold
     * @returns
     */
    setThresholdPosition() {
        return Number(this.defaultBound);
    }
    /**
     * gets selected bound value
     * @returns
     */
    gatSelectedBoundValue() {
        var _a, _b, _c, _d, _e, _f;
        if (((_b = (_a = this.chartItem) === null || _a === void 0 ? void 0 : _a.question) === null || _b === void 0 ? void 0 : _b.options) != null) {
            this.questionOptions = (_d = (_c = this.chartItem) === null || _c === void 0 ? void 0 : _c.question) === null || _d === void 0 ? void 0 : _d.options;
            this.filteredArr = this.questionOptions.some((o) => o.alarming && o.selected);
            for (let i = 0; i < this.questionOptions.length; i++) {
                if (this.questionOptions[i].selected) {
                    this.selectedBoundValue = this.questionOptions[i].label;
                }
            }
        }
        else {
            this.selectedBoundValue = String((_f = (_e = this.chartItem) === null || _e === void 0 ? void 0 : _e.question) === null || _f === void 0 ? void 0 : _f.history[0].response);
        }
        return this.selectedBoundValue;
    }
    /**
     * gets selected bound value color
     * @returns
     */
    gatSelectedBoundValueColor() {
        const bound = Number(this.defaultBound);
        const selectedBound = Number(this.selectedBoundValue);
        if (selectedBound >= bound) {
            return '#dc3644'; // Red Color
        }
        else {
            return '#666'; // Gray Color
        }
    }
    /**
     * gets tool tip value
     * @param history
     * @returns
     */
    gettoottipValue(history) {
        let label = history.questionLabel == undefined
            ? this.chartItem.question.questionLabel
            : history.questionLabel;
        return `${label} \n ${history.responseDate} : ${history.response}`;
    }
}
ResponseAnalyticsComponent.ɵfac = function ResponseAnalyticsComponent_Factory(t) { return new (t || ResponseAnalyticsComponent)(); };
ResponseAnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResponseAnalyticsComponent, selectors: [["app-response-analytics"]], inputs: { chartItem: "chartItem" }, decls: 8, vars: 7, consts: [[1, "chartName"], [4, "ngIf"], ["tooltipPosition", "top", 1, "chartName", 3, "pTooltip"], ["class", "chartBox", 4, "ngIf"], ["class", "chartBox chartIconBox", 4, "ngIf"], ["class", "textBox", 4, "ngIf"], ["pTooltip", "PRIORITY ALERT", "tooltipPosition", "top", 1, "icon-patient-in-high-red"], [1, "chartBox"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"], ["panelA", "base-chart"], [1, "chartBox", "chartIconBox"], [1, "iconBox"], [1, "bound", 3, "ngClass"], ["class", "iconContainer", 4, "ngIf"], [1, "iconContainer"], ["class", "ballIcon", "tooltipPosition", "top", 3, "ngClass", "pTooltip", 4, "ngFor", "ngForOf"], ["tooltipPosition", "top", 1, "ballIcon", 3, "ngClass", "pTooltip"], [1, "textBox"], [1, "textContent"], [3, "ngClass"]], template: function ResponseAnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ResponseAnalyticsComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ResponseAnalyticsComponent_div_4_Template, 3, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ResponseAnalyticsComponent_div_5_Template, 7, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ResponseAnalyticsComponent_div_6_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ResponseAnalyticsComponent_div_7_Template, 3, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.chartItem == null ? null : ctx.chartItem.question == null ? null : ctx.chartItem.question.alarming) && ctx.filteredArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTooltip", ctx.questionText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.questionLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDashboardTypeTrend);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDashboardTypeIcons);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDashboardTypeEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDashboardTypeText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".chartName[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 300;\n  color: #999;\n  justify-content: center;\n  display: flex;\n}\n\n.icon-patient-in-high-red[_ngcontent-%COMP%] {\n  margin-left: -47px;\n}\n\n.chartBox[_ngcontent-%COMP%] {\n  margin: 0 0 -11px -8px;\n}\n\n.chartIconBox[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 100%;\n  height: auto;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  margin: 0 0 0 8px;\n  background-image: linear-gradient(#eceef0 1px, transparent 1px), linear-gradient(to right, #eceef0 1px, #fff 1px);\n  background-size: 18px 18px;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .bound[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  font-size: 34px;\n  width: 100%;\n  top: 25%;\n  font-weight: 700;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .bound.gray[_ngcontent-%COMP%] {\n  color: #666;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .bound.red[_ngcontent-%COMP%] {\n  color: #dc3644 !important;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .iconContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 60%;\n  left: 10px;\n  overflow: hidden;\n  height: 15px;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .iconContainer[_ngcontent-%COMP%]   .ballIcon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin: 0 0px 0 2px;\n  float: left;\n  cursor: pointer;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .iconContainer[_ngcontent-%COMP%]   .ballIcon[_ngcontent-%COMP%]:nth-child(2n) {\n  margin-right: 22px;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .iconContainer[_ngcontent-%COMP%]   .ballIcon.green[_ngcontent-%COMP%] {\n  background: #24b15c;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .iconContainer[_ngcontent-%COMP%]   .ballIcon.yellow[_ngcontent-%COMP%] {\n  background: #ffbf00;\n}\n\n.chartIconBox[_ngcontent-%COMP%]   .iconBox[_ngcontent-%COMP%]   .iconContainer[_ngcontent-%COMP%]   .ballIcon.red[_ngcontent-%COMP%] {\n  background: #ff4c4c;\n}\n\n.textBox[_ngcontent-%COMP%] {\n  background-image: none;\n  height: calc(100% - 27px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(#eceef0 1px, transparent 1px), linear-gradient(to right, #eceef0 1px, #fff 1px);\n  background-size: 18px 18px;\n}\n\n.textBox[_ngcontent-%COMP%]   .textContent[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 1.25;\n  font-weight: 700;\n  color: #505050;\n  text-align: center;\n}\n\n.textBox[_ngcontent-%COMP%]   .boundRed[_ngcontent-%COMP%] {\n  color: #fe5759 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbnNlLWFuYWx5dGljcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdDWFM7RURZVCx1QkFBQTtFQUNBLGFBQUE7QUFYRjs7QUFjQTtFQUVFLGtCQUFBO0FBWkY7O0FBZUE7RUFDRSxzQkFBQTtBQVpGOztBQWNBO0VBQ0Usa0JBQUE7QUFYRjs7QUFZRTtFQUNFLGdCQzdCSTtFRDhCSixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpSEFBQTtFQUVBLDBCQUFBO0FBWEo7O0FBYUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFYTjs7QUFhTTtFQUNFLFdDWk87QURDZjs7QUFhTTtFQUNFLHlCQUFBO0FBWFI7O0FBZUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWJOOztBQWVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFiUjs7QUFlUTtFQUNFLGtCQUFBO0FBYlY7O0FBZ0JRO0VBQ0UsbUJDM0RFO0FENkNaOztBQWdCUTtFQUNFLG1CQzlDRztBRGdDYjs7QUFnQlE7RUFDRSxtQkNuRUY7QURxRFI7O0FBb0JBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUhBQUE7RUFFQSwwQkFBQTtBQWxCRjs7QUFvQkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWxCSjs7QUFvQkU7RUFDRSx5QkFBQTtBQWxCSiIsImZpbGUiOiJyZXNwb25zZS1hbmFseXRpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiL3NyYy92YXJpYWJsZXNcIjtcclxuXHJcbi8vIC5jaGFydE5hbWUge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuLy8gICBjb2xvcjogJGxpdEdyYXkyO1xyXG4vLyAgICYuaWNvbiB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi5jaGFydE5hbWUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjokbGl0R3JheTIgO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pY29uLXBhdGllbnQtaW4taGlnaC1yZWQge1xyXG4gIC8vIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogLTQ3cHg7XHJcbn1cclxuXHJcbi5jaGFydEJveCB7XHJcbiAgbWFyZ2luOiAwIDAgLTExcHggLThweDtcclxufVxyXG4uY2hhcnRJY29uQm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmljb25Cb3gge1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGNoYXJ0TGluZUNvbG9yIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY2hhcnRMaW5lQ29sb3IgMXB4LCAkd2hpdGUgMXB4KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xyXG5cclxuICAgIC5ib3VuZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0b3A6IDI1JTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAgICYuZ3JheSB7XHJcbiAgICAgICAgY29sb3I6ICRjaGFydEdyYXlUeHQ7XHJcbiAgICAgIH1cclxuICAgICAgJi5yZWQge1xyXG4gICAgICAgIGNvbG9yOiAkY2hhcnRSZWRUeHQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pY29uQ29udGFpbmVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdG9wOiA2MCU7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuXHJcbiAgICAgIC5iYWxsSWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW46IDAgMHB4IDAgMnB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZ3JlZW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGxlYWZHcmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi55ZWxsb3cge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGFtYmVyQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucmVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRyZWRCZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRleHRCb3gge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyN3B4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNlY2VlZjAgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWNlZWYwIDFweCwgI2ZmZiAxcHgpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xyXG5cclxuICAudGV4dENvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICM1MDUwNTA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ib3VuZFJlZCB7XHJcbiAgICBjb2xvcjogJHRvbWF0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgXHJcbn1cclxuIiwiJGNnQmx1ZUJHOiAjMzViN2U5O1xyXG4kYWRCbHVlQkc6ICMwZDc3YzA7XHJcbiRjZ0dyYXlCRzogI2YxZjFmMTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kbGl0R3JheTogI2FhYTtcclxuJGxpdEdyYXkyOiAjOTk5O1xyXG4kbGl0R3JheTM6ICNjY2M7XHJcbiRtaWRHcmF5OiAjNTA1MDUwO1xyXG4kbWlkR3JheTE6ICM3MDcwNzA7XHJcbiRtaWRHcmF5MjogIzYwNjA2MDtcclxuJHJlZDogI2ZmNjQ3YztcclxuJGdyZXk6IGdyZXk7XHJcbiRsaWdodEdyZXk6ICAjRENEQ0RDO1xyXG4kZGVmYXVsdEZvbnRDb2xvcjogIzMwMzAzMDtcclxuJHBhZ2VCZ0NvbG9yOiAjZjJmNWZhO1xyXG4kaGVhZFR4dENvbG9yOiAjMjAyMDIwO1xyXG4kYW5jaG9yQmx1ZUNvbG9yOiAjMWM3NWJjO1xyXG4kYW5jaG9yQmx1ZUNvbG9yMjogIzEyNTg5MjtcclxuJGRhcmtHcmF5OiAjNDA0MDQwO1xyXG4kaW5mb0JsdWU6ICM2YjdiOWM7XHJcbiRyZWRCZzogI2ZmNGM0YztcclxuJGxpbWVHcmVlbjogIzZlYzc3MztcclxuJGxlYWZHcmVlbjogIzI0YjE1YztcclxuJHZMaXRHcmF5OiAjZGRkO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRhY3RCb3gxOiAjYTQ5OWMwO1xyXG4kYWN0Qm94MjogI2Q4ODA4MTtcclxuJGFjdEJveDM6ICM5NjgxNWU7XHJcbiRzdGF0dXNCb3gxOiAjYmI2MDYwO1xyXG4kc3RhdHVzQm94MjogI2E1NzdjMjtcclxuJHN0YXR1c0JveDM6ICNhOWJhZWU7XHJcbiR2eWxldEdyYXk6ICNkMGM5ZDY7XHJcbiR0aGlja0JsdWU6ICM0MzQyNWQ7XHJcbiRsaXRXaGl0ZTogI2U5ZTlmMDtcclxuJHNsaWRlckJsdWU6ICMyMTk2ZjM7XHJcbiRhY3R1YWxHcmVlbjogZ3JlZW47XHJcbiRhY3R1YWxSZWQ6IHJlZDtcclxuJGVyclJlZDogI2VhM2EzYTtcclxuJGFtYmVyQ29sb3I6ICNmZmJmMDA7XHJcbiRzb2xpZEdyYXk6ICM0ZDRkNGQ7XHJcbiRjaGFydExpbmVDb2xvcjogI2VjZWVmMDtcclxuJGNoYXJ0R3JheVR4dDogIzY2NjtcclxuJGNoYXJ0UmVkVHh0OiAjZGMzNjQ0O1xyXG4kZXNjYWxhdGVDb2xvcjogI2NmN2YzZDtcclxuJGVzY2FsYXRlQ29sb3JEYXJrOiAjYmI2MzFiO1xyXG4kdG9tYXRvOiAjZmU1NzU5O1xyXG5cclxuQG1peGluIG1hci1wYWQtMCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbkBtaXhpbiBkLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuQG1peGluIHNwYWNlLWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5AbWl4aW4gdG9wLWxlZnQtMCB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuQG1peGluIGljb24tcmVkLWdyZWVuIHtcclxuICAucGkge1xyXG4gICAgLy8gcGFkZGluZzogM3B4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwcHggM3B4O1xyXG5cclxuICAgICYucmVkIHtcclxuICAgICAgY29sb3I6ICRyZWRCZztcclxuICAgIH1cclxuICAgICYuZ3JlZW4ge1xyXG4gICAgICBjb2xvcjogJGFjdHVhbEdyZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWl4aW4gcmVkLWdyZWVuLWdyZXkge1xyXG4gICYucmVkIHtcclxuICAgIGJhY2tncm91bmQ6ICRyZWRCZztcclxuICB9XHJcbiAgJi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYWN0dWFsR3JlZW47XHJcbiAgfVxyXG4gICYuZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHRHcmV5O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8555:
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class LoaderService {
    /**
     * Constructor
     */
    constructor() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.loaderState = this.loaderSubject.asObservable();
    }
    /**
     * Shows the loader
     */
    show() {
        this.loaderSubject.next({ show: true });
    }
    /**
     * Hides the loader
     */
    hide() {
        this.loaderSubject.next({ show: false });
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5662:
/*!******************************************************!*\
  !*** ./src/app/services/patient-overview.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientOverviewService": () => (/* binding */ PatientOverviewService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9019);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);



//import Response from 'src/assets/patientOverviewResponse.json';
class PatientOverviewService {
    constructor(http) {
        this.http = http;
    }
    combinedResponse() {
        return this.http.get("/api/get-report-json?id=31")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.timeout)(65000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => {
            return res;
        }));
    }
}
PatientOverviewService.ɵfac = function PatientOverviewService_Factory(t) { return new (t || PatientOverviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PatientOverviewService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PatientOverviewService, factory: PatientOverviewService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map