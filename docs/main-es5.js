function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
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
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"vui-example\">\r\n    <h1>Sign In\r\n        <div style=\"\r\n                display: flex;\r\n                justify-content: center;\r\n                padding: 0px 0;\r\n        \">\r\n            <!-- <a href=\"https://www.npmjs.com/package/ng-voice-inputs\">\r\n                <img src=\"https://img.shields.io/npm/v/ng-voice-inputs.svg\" />\r\n            </a> -->\r\n        </div>\r\n    </h1>\r\n\r\n    <div class=\"main-container container\">\r\n        <form class=\"section left-section\" #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\">\r\n            <ng-voice-input (onValueChange)=\"onResponse($event)\" [style]=\"styleOpts\"></ng-voice-input>\r\n            <!-- <div class=\"row\">\r\n                <mat-form-field class=\"col-6\">\r\n                    <mat-label>Choose from date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" [vuiInput]=\"optionsDate\" name=\"fromDate\" ngModel>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker ></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Choose to date</mat-label>\r\n                    <input matInput [matDatepicker]=\"pickerT\" [vuiInput]=\"optionsDate\" name=\"toDate\" ngModel>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerT\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerT ></mat-datepicker>\r\n                </mat-form-field>\r\n            </div> -->\r\n            <div class=\"row\">\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Identification</mat-label>\r\n                    <input matInput type=\"text\" [vuiInput]=\"optionsText\" name=\"firstName\" ngModel>\r\n                </mat-form-field>\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input matInput type=\"text\" [vuiInput]=\"optionsText\" name=\"lastName\" ngModel>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <!-- <div class=\"row\">\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Age</mat-label>\r\n                    <input matInput type=\"text\" [vuiInput]=\"optionsNumber\" name=\"age\" ngModel>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field  class=\"col-6\">\r\n                    <mat-label>Occupation</mat-label>\r\n                    <input matInput type=\"text\" [vuiInput]=\"optionsText\" name=\"occupation\" ngModel>\r\n                </mat-form-field>\r\n                \r\n            </div> -->\r\n            <!-- <div class=\"row\">\r\n                <mat-form-field class=\"col-6\">\r\n                    <mat-label>Address line 1</mat-label>\r\n                    <textarea matInput type=\"text\" [vuiInput]=\"optionsAddress\" name=\"address-line1\"></textarea>\r\n                </mat-form-field>  \r\n                <mat-form-field class=\"col-6\">\r\n                    <mat-label>Address line 2</mat-label>\r\n                    <textarea matInput type=\"text\" [vuiInput]=\"optionsAddress\" name=\"address-line2\"></textarea>\r\n                </mat-form-field>    \r\n            </div> -->\r\n            <button mat-raised-button [vuiInput]=\"\" class=\"submit\">Submit</button>\r\n\r\n            <a href=\"https://sorimachi-tech.github.io/signup\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"signup\">Sign up</a>\r\n\r\n\r\n            <div class=\"container form-submit-data col-md-20\" *ngIf=\"formData\">\r\n                <h5>Form Submit Details</h5>\r\n                <div class=\"row\">\r\n                    <div class=\"col-10\">\r\n                        <label>Identification:</label>\r\n                        <span> {{formData?.firstName}}</span>\r\n                    </div>\r\n                    <!-- <div class=\"col-6\">\r\n                        <label>End Date</label>\r\n                        <span>{{formData?.endDate}}</span>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-10\">\r\n                        <label>Password:</label>\r\n                        <span> {{formData?.lastName}}</span>\r\n                    </div>\r\n                    <!-- <div class=\"col-6\">\r\n                        <label>Last Name</label>\r\n                        <span>{{formData?.lastName}}</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            \r\n        </form>\r\n\r\n        <div class=\"section right-section\">\r\n            <h3>Cách sử dụng</h3>\r\n            <ul>\r\n                <li>Nhấp vào <b>Mic (<i class=\"icon icon-small icon-mic-blue\"></i>)</b> nút, để bắt đầu nhận dạng giọng nói</li>\r\n                <!-- <li>Nói gì đó như\r\n                    <ul>\r\n                        <li>'January 21st 2021'</li>\r\n                        <li>'August 15th 1947'</li>\r\n                        <li>'November 27 2021'</li>\r\n                    </ul>\r\n                </li> -->\r\n                <li>Bạn có thể điều hướng tiêu điểm đến trường nhập tiếp theo bằng cách nói <b>'go to next'</b> hoặc <b>'next'</b></li>\r\n                <li>Và quay lại trường nhập liệu trước đó bằng cách nói <b>'go to previous'</b></li>\r\n                <li>Sau khi nhập xong tất cả các trường, hãy điều hướng đến nút <b>Submit</b> bằng cách nói <b>'go to last'</b> và nói <b>'submit' hoặc 'click'</b> để gửi biểu mẫu</li>\r\n                <!-- <li><b>Page Scroll Feature</b>: \r\n                <li>Say <b>Scroll Down</b> to scroll page downwards. And <b>Scroll Up</b> to scroll upwards. Also supports <b>Left</b> & <b>Right</b></li>\r\n                <li>Say <b>Continue Scrolling</b> to scroll continuously downwards / upwards.</li> -->\r\n                \r\n                <li>Bạn có thể DỪNG nhận dạng giọng nói bằng cách nói <b>'stop'</b> hoặc nhấp lại vào biểu tượng micrô.</li>\r\n            </ul>\r\n\r\n            <!-- <div><i>NOTE:</i> For the input type <b>'address'</b>, please use prefixes like <b>'go'</b> or <b>'goto'</b> or <b>'switch to'</b> without fail</div> -->\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vui-example h1 {\n  font-size: 26px;\n  text-align: center;\n  padding: 20px;\n  color: #ffffff;\n  margin-bottom: 50px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background: #343535;\n  border-bottom: 3px solid #636363;\n}\n.vui-example h5 {\n  text-align: center;\n  padding: 20px;\n  margin-bottom: 30px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  border-bottom: 1px solid #636363;\n}\n.vui-example h3 {\n  font-size: 26px;\n  text-align: center;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.vui-example .main-container {\n  display: flex;\n  justify-content: space-between;\n}\n.vui-example .main-container .left-section {\n  width: 80%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-right: 50px;\n  padding: 0 30px;\n  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 10px;\n  border: 1px solid #ebebeb;\n  padding: 30px 30px 30px 30px;\n  border-right: 3px solid #4b4b4b;\n}\n.vui-example .main-container .right-section {\n  background: #fdffdc;\n  padding: 20px;\n  border-radius: 10px;\n}\n.vui-example .form-submit-data {\n  background: #ecfff9;\n  padding: 20px;\n  margin-top: 35px;\n  border-radius: 10px;\n}\n.vui-example .signup {\n  margin-left: 22px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-decoration: none;\n}\n.vui-example .row {\n  margin-top: 5px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.vui-example .submit {\n  margin-top: 10px;\n}\n.vui-example .speech-recognition-info {\n  padding: 30px 0;\n}\n.vui-example .speech-recognition-info h3 {\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .vui-example .main-container {\n    flex-direction: column;\n  }\n  .vui-example .main-container .left-section {\n    width: 100%;\n    margin: 0 0 20px 0;\n    border: 0;\n  }\n}\n:host ::ng-deep .icon.parse-green::after {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #05c54f;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n:host ::ng-deep .icon.parse-green::before {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #00722c;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n:host ::ng-deep .icon.listen-green::after {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #05c54f;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxucGhhdFxcTXVzaWNcXHNpZ25pbi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDQUo7QURHRTtFQUVFLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQ0EscURBQUE7RUFFQSxnQ0FBQTtBQ0pKO0FET0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFJQSxxREFBQTtBQ1JKO0FEYUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNYSjtBRGFJO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNYTjtBRDBCSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDeEJOO0FENEJFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzFCSjtBRDZCRTtFQUNFLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxxQkFBQTtBQzNCSjtBRDhCRTtFQUNFLGVBQUE7RUFDQSw0REFBQTtBQzVCSjtBRCtCRTtFQUNFLGdCQUFBO0FDN0JKO0FEZ0NFO0VBQ0UsZUFBQTtBQzlCSjtBRGdDSTtFQUNFLGtCQUFBO0FDOUJOO0FEbUNBO0VBRUk7SUFDRSxzQkFBQTtFQ2pDSjtFRGtDSTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7RUNoQ047QUFDRjtBRHlESTtFQW5CRixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0NBVW1CO1VBVm5CLHdCQVVtQjtFQVRuQiwyQkFTeUI7VUFUekIsbUJBU3lCO0VBUnpCLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxpRUFBQTtVQUFBLHlEQUFBO0VBQ0EsV0FBQTtBQ25DRjtBRDJDSTtFQXRCRixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBYW1CO1VBYm5CLHNCQWFtQjtFQVpuQiw2QkFZdUI7VUFadkIscUJBWXVCO0VBWHZCLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxpRUFBQTtVQUFBLHlEQUFBO0VBQ0EsV0FBQTtBQ2xCRjtBRGdDSTtFQTVCRixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBbUJtQjtVQW5CbkIsc0JBbUJtQjtFQWxCbkIsMkJBa0J1QjtVQWxCdkIsbUJBa0J1QjtFQWpCdkIsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7RUFDQSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudnVpLWV4YW1wbGUge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogIzM0MzUzNTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNjM2MzYzO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgLy8gZm9udC1zaXplOiAyNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIC8vIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMzQzNTM1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MzYzNjM7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLy8gY29sb3I6ICNmZmZmZmY7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMzNDM1MzU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYzNjM2MztcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5sZWZ0LXNlY3Rpb24ge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM0YjRiNGI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmxlZnQtc2VjdGlvbiB7XHJcbiAgICAvLyAgICAgd2lkdGg6IDYwJTtcclxuICAgIC8vICAgICAvLyBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAvLyAgICAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcclxuICAgIC8vICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xyXG4gICAgLy8gICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xyXG4gICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8vICAgICBib3gtc2hhZG93OiAwIDEwcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIC8vICAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUJFQkVCO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLnJpZ2h0LXNlY3Rpb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmRmZmRjO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0tc3VibWl0LWRhdGEge1xyXG4gICAgYmFja2dyb3VuZDogI2VjZmZmOTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5zaWdudXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuc3VibWl0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc3BlZWNoLXJlY29nbml0aW9uLWluZm8ge1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnZ1aS1leGFtcGxlIHtcclxuICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5sZWZ0LXNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiByaW5ncygkZHVyYXRpb24sICRkZWxheSwgJGNvbG9yKSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIGxlZnQ6IC01cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJGNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJpcHBsZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcclxuICBhbmltYXRpb24tZGVsYXk6ICRkZWxheTtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNCwgMSk7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaWNvbiB7XHJcbiAgJi5wYXJzZS1ncmVlbiB7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIEBpbmNsdWRlIHJpbmdzKDAuNXMsIDBzLCAjMDVjNTRmKTtcclxuICAgIH1cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIEBpbmNsdWRlIHJpbmdzKDFzLCAwLjNzLCAjMDA3MjJjKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubGlzdGVuLWdyZWVuIHtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgQGluY2x1ZGUgcmluZ3MoNXMsIDBzLCAjMDVjNTRmKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnZ1aS1leGFtcGxlIGgxIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjMzQzNTM1O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzYzNjM2Mztcbn1cbi52dWktZXhhbXBsZSBoNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MzYzNjM7XG59XG4udnVpLWV4YW1wbGUgaDMge1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cbi52dWktZXhhbXBsZSAubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udnVpLWV4YW1wbGUgLm1haW4tY29udGFpbmVyIC5sZWZ0LXNlY3Rpb24ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDMwcHg7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM0YjRiNGI7XG59XG4udnVpLWV4YW1wbGUgLm1haW4tY29udGFpbmVyIC5yaWdodC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZkZmZkYztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi52dWktZXhhbXBsZSAuZm9ybS1zdWJtaXQtZGF0YSB7XG4gIGJhY2tncm91bmQ6ICNlY2ZmZjk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udnVpLWV4YW1wbGUgLnNpZ251cCB7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udnVpLWV4YW1wbGUgLnJvdyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG4udnVpLWV4YW1wbGUgLnN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udnVpLWV4YW1wbGUgLnNwZWVjaC1yZWNvZ25pdGlvbi1pbmZvIHtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuLnZ1aS1leGFtcGxlIC5zcGVlY2gtcmVjb2duaXRpb24taW5mbyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52dWktZXhhbXBsZSAubWFpbi1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnZ1aS1leGFtcGxlIC5tYWluLWNvbnRhaW5lciAubGVmdC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLmljb24ucGFyc2UtZ3JlZW46OmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGxlZnQ6IC01cHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwNWM1NGY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGFuaW1hdGlvbi1uYW1lOiByaXBwbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY1LCAwLCAwLjM0LCAxKTtcbiAgei1pbmRleDogLTE7XG59XG46aG9zdCA6Om5nLWRlZXAgLmljb24ucGFyc2UtZ3JlZW46OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDA3MjJjO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBhbmltYXRpb24tbmFtZTogcmlwcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNCwgMSk7XG4gIHotaW5kZXg6IC0xO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY29uLmxpc3Rlbi1ncmVlbjo6YWZ0ZXIge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogLTVweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzA1YzU0ZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYW5pbWF0aW9uLW5hbWU6IHJpcHBsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY1LCAwLCAwLjM0LCAxKTtcbiAgei1pbmRleDogLTE7XG59Il19 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(ref) {
        _classCallCheck(this, AppComponent);

        this.ref = ref;
        this.title = 'AngularStarterProject';
        this.optionsText = {
          type: 'text'
        };
        this.optionsDate = {
          type: 'date'
        };
        this.optionsNumber = {
          type: 'number'
        };
        this.optionsAddress = {
          type: 'address'
        };
        this.optionsSelect = {
          type: 'select'
        };
        this.styleOpts = {
          iconParse: 'icon icon-mic-green',
          animationParse: 'parse-green'
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onResponse",
        value: function onResponse(evt) {
          console.log(evt);
        }
      }, {
        key: "submitForm",
        value: function submitForm(form) {
          console.table(form.value);
          this.formData = form.value;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/paginator */
    "./node_modules/primeng/fesm2015/primeng-paginator.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var _ng_voice_inputs_vui_input_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-voice-inputs/vui-input.directive */
    "./src/app/ng-voice-inputs/vui-input.directive.ts");
    /* harmony import */


    var _app_ng_voice_inputs_ng_voice_inputs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../app/ng-voice-inputs/ng-voice-inputs.component */
    "./src/app/ng-voice-inputs/ng-voice-inputs.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _ng_voice_inputs_vui_input_directive__WEBPACK_IMPORTED_MODULE_15__["VuiInputDirective"], _app_ng_voice_inputs_ng_voice_inputs_component__WEBPACK_IMPORTED_MODULE_16__["NgVoiceInputsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_13__["PaginatorModule"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"],
        deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"]]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"],
        useValue: {
          parse: {
            dateInput: ['DD/MM/YYYY']
          },
          display: {
            dateInput: 'DD/MM/YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY'
          }
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/ng-voice-inputs/ng-voice-inputs.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/ng-voice-inputs/ng-voice-inputs.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNgVoiceInputsNgVoiceInputsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centered {\n  margin: auto;\n  text-align: center;\n}\n\n.listening {\n  color: red;\n}\n\n.parsing {\n  color: green;\n}\n\n.icon {\n  position: relative;\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n  background-size: 26px 26px;\n  background-position: 7px 7px;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.icon.parsing::after {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #42c0fb;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n\n.icon.parsing::before {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #42c0fb;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n\n.icon.listening::after {\n  opacity: 0;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border: 3px solid #42c0fb44;\n  border-radius: 100%;\n  -webkit-animation-name: ripple;\n          animation-name: ripple;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n          animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);\n  z-index: -1;\n}\n\n.icon-small {\n  width: 25px;\n  height: 25px;\n  background-size: 15px 15px;\n  background-position: 5px 10px;\n}\n\n.icon-mic {\n  background-image: url(\"data:image/svg+xml;utf8,<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='853.000000pt' height='1280.000000pt' viewBox='0 0 853.000000 1280.000000' preserveAspectRatio='xMidYMid meet'> <metadata> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata> <g transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)' fill='rgb(66,192,251)' > <path d='M4060 12789 c-194 -22 -402 -81 -577 -164 -472 -224 -789 -626 -894 -1135 l-24 -115 0 -2575 c0 -2452 1 -2579 18 -2665 145 -710 755 -1260 1492 -1345 327 -37 671 21 975 166 473 226 789 629 892 1137 l23 112 0 2575 c0 2448 -1 2579 -18 2665 -116 576 -556 1066 -1134 1264 -227 78 -508 108 -753 80z'/><path d='M301 8004 c-158 -42 -262 -156 -292 -319 -7 -38 -9 -312 -6 -839 3 -648 7 -805 21 -921 64 -538 177 -928 391 -1350 184 -361 380 -630 670 -920 529 -528 1216 -906 2020 -1110 116 -29 231 -56 258 -60 l47 -7 0 -854 0 -854 -657 0 c-717 0 -743 -2 -851 -57 -69 -35 -155 -127 -176 -189 -53 -155 36 -357 203 -463 103 -66 -69 -61 2341 -61 2377 0 2235 -3 2349 54 64 33 144 122 173 194 19 49 23 75 23 182 0 120 -1 128 -32 192 -36 76 -100 146 -165 179 -95 48 -100 49 -820 49 l-678 0 0 854 c0 805 1 855 18 860 9 2 33 7 52 11 406 77 934 271 1313 484 1088 609 1778 1567 1971 2736 48 288 51 352 51 1150 l0 760 -23 58 c-63 155 -190 243 -367 254 -147 10 -260 -32 -350 -129 -32 -34 -63 -80 -76 -115 l-24 -58 -6 -785 c-6 -737 -11 -850 -39 -1050 -100 -705 -417 -1330 -913 -1794 -538 -505 -1229 -810 -2052 -908 -146 -17 -674 -17 -820 0 -663 79 -1253 297 -1735 642 -683 489 -1111 1202 -1230 2050 -28 194 -33 327 -39 1060 l-6 785 -24 58 c-44 111 -161 208 -282 236 -62 15 -175 12 -238 -5z'/></g> </svg>\");\n}\n\n.icon-mic-blue {\n  background-image: url('mic-blue-solid.png');\n}\n\n.icon-mic-red {\n  background-image: url('mic-red-solid.png');\n}\n\n.icon-mic-green {\n  background-image: url('mic-green-solid.png');\n}\n\n@-webkit-keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale3d(0.75, 0.75, 1);\n  }\n  to {\n    opacity: 0;\n    transform: scale3d(1.5, 1.5, 1);\n  }\n}\n\n@keyframes ripple {\n  from {\n    opacity: 1;\n    transform: scale3d(0.75, 0.75, 1);\n  }\n  to {\n    opacity: 0;\n    transform: scale3d(1.5, 1.5, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctdm9pY2UtaW5wdXRzL0M6XFxVc2Vyc1xcbnBoYXRcXE11c2ljXFxzaWduaW4vc3JjXFxhcHBcXG5nLXZvaWNlLWlucHV0c1xcbmctdm9pY2UtaW5wdXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZy12b2ljZS1pbnB1dHMvbmctdm9pY2UtaW5wdXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ2pCSjs7QURvQkE7RUFDSSxVQUFBO0FDakJKOztBRG9CQTtFQUNJLFlBQUE7QUNqQko7O0FEb0JBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ2pCSjs7QURvQlE7RUF6Q0osVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDhCQWdDdUI7VUFoQ3ZCLHNCQWdDdUI7RUEvQnZCLDJCQStCMkI7VUEvQjNCLG1CQStCMkI7RUE5QjNCLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxpRUFBQTtVQUFBLHlEQUFBO0VBQ0EsV0FBQTtBQ3dCSjs7QURPUTtFQTdDSixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsOEJBb0N1QjtVQXBDdkIsc0JBb0N1QjtFQW5DdkIsNkJBbUMyQjtVQW5DM0IscUJBbUMyQjtFQWxDM0IsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7RUFDQSxXQUFBO0FDeUNKOztBREpRO0VBbkRKLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw4QkEwQ3VCO1VBMUN2QixzQkEwQ3VCO0VBekN2QiwyQkF5QzJCO1VBekMzQixtQkF5QzJCO0VBeEMzQiwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsaUVBQUE7VUFBQSx5REFBQTtFQUNBLFdBQUE7QUMwREo7O0FEZEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNpQko7O0FEWEE7RUFGSSxxcERBQUE7QUNpQko7O0FEVkE7RUFDSSwyQ0FBQTtBQ2FKOztBRFZBO0VBQ0ksMENBQUE7QUNhSjs7QURWQTtFQUNJLDRDQUFBO0FDYUo7O0FEUkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxpQ0FBQTtFQ1dGO0VEUkE7SUFDRSxVQUFBO0lBQ0EsK0JBQUE7RUNVRjtBQUNGOztBRG5CQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGlDQUFBO0VDV0Y7RURSQTtJQUNFLFVBQUE7SUFDQSwrQkFBQTtFQ1VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uZy12b2ljZS1pbnB1dHMvbmctdm9pY2UtaW5wdXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHJpbmdzKCRkdXJhdGlvbiwgJGRlbGF5LCAkY29sb3IpIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICRjb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcmlwcGxlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XHJcbiAgICBhbmltYXRpb24tZGVsYXk6ICRkZWxheTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC42NSwwLC4zNCwxKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdGVuaW5nIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5wYXJzaW5nIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI2cHggMjZweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYucGFyc2luZyB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSByaW5ncygxcywgMHMsICM0MmMwZmIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSByaW5ncygxcywgMC4zcywgIzQyYzBmYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubGlzdGVuaW5nIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHJpbmdzKDJzLCAwcywgIzQyYzBmYjQ0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uaWNvbi1zbWFsbCB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBpY29uLW1pYygkY29sb3IpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgdmVyc2lvbj0nMS4wJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4NTMuMDAwMDAwcHQnIGhlaWdodD0nMTI4MC4wMDAwMDBwdCcgdmlld0JveD0nMCAwIDg1My4wMDAwMDAgMTI4MC4wMDAwMDAnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkIG1lZXQnPiA8bWV0YWRhdGE+IENyZWF0ZWQgYnkgcG90cmFjZSAxLjE1LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNyA8L21ldGFkYXRhPiA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjAwMDAwMCwxMjgwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKScgZmlsbD0nXCIgKyAkY29sb3IgKyBcIicgPiA8cGF0aCBkPSdNNDA2MCAxMjc4OSBjLTE5NCAtMjIgLTQwMiAtODEgLTU3NyAtMTY0IC00NzIgLTIyNCAtNzg5IC02MjYgLTg5NCAtMTEzNSBsLTI0IC0xMTUgMCAtMjU3NSBjMCAtMjQ1MiAxIC0yNTc5IDE4IC0yNjY1IDE0NSAtNzEwIDc1NSAtMTI2MCAxNDkyIC0xMzQ1IDMyNyAtMzcgNjcxIDIxIDk3NSAxNjYgNDczIDIyNiA3ODkgNjI5IDg5MiAxMTM3IGwyMyAxMTIgMCAyNTc1IGMwIDI0NDggLTEgMjU3OSAtMTggMjY2NSAtMTE2IDU3NiAtNTU2IDEwNjYgLTExMzQgMTI2NCAtMjI3IDc4IC01MDggMTA4IC03NTMgODB6Jy8+PHBhdGggZD0nTTMwMSA4MDA0IGMtMTU4IC00MiAtMjYyIC0xNTYgLTI5MiAtMzE5IC03IC0zOCAtOSAtMzEyIC02IC04MzkgMyAtNjQ4IDcgLTgwNSAyMSAtOTIxIDY0IC01MzggMTc3IC05MjggMzkxIC0xMzUwIDE4NCAtMzYxIDM4MCAtNjMwIDY3MCAtOTIwIDUyOSAtNTI4IDEyMTYgLTkwNiAyMDIwIC0xMTEwIDExNiAtMjkgMjMxIC01NiAyNTggLTYwIGw0NyAtNyAwIC04NTQgMCAtODU0IC02NTcgMCBjLTcxNyAwIC03NDMgLTIgLTg1MSAtNTcgLTY5IC0zNSAtMTU1IC0xMjcgLTE3NiAtMTg5IC01MyAtMTU1IDM2IC0zNTcgMjAzIC00NjMgMTAzIC02NiAtNjkgLTYxIDIzNDEgLTYxIDIzNzcgMCAyMjM1IC0zIDIzNDkgNTQgNjQgMzMgMTQ0IDEyMiAxNzMgMTk0IDE5IDQ5IDIzIDc1IDIzIDE4MiAwIDEyMCAtMSAxMjggLTMyIDE5MiAtMzYgNzYgLTEwMCAxNDYgLTE2NSAxNzkgLTk1IDQ4IC0xMDAgNDkgLTgyMCA0OSBsLTY3OCAwIDAgODU0IGMwIDgwNSAxIDg1NSAxOCA4NjAgOSAyIDMzIDcgNTIgMTEgNDA2IDc3IDkzNCAyNzEgMTMxMyA0ODQgMTA4OCA2MDkgMTc3OCAxNTY3IDE5NzEgMjczNiA0OCAyODggNTEgMzUyIDUxIDExNTAgbDAgNzYwIC0yMyA1OCBjLTYzIDE1NSAtMTkwIDI0MyAtMzY3IDI1NCAtMTQ3IDEwIC0yNjAgLTMyIC0zNTAgLTEyOSAtMzIgLTM0IC02MyAtODAgLTc2IC0xMTUgbC0yNCAtNTggLTYgLTc4NSBjLTYgLTczNyAtMTEgLTg1MCAtMzkgLTEwNTAgLTEwMCAtNzA1IC00MTcgLTEzMzAgLTkxMyAtMTc5NCAtNTM4IC01MDUgLTEyMjkgLTgxMCAtMjA1MiAtOTA4IC0xNDYgLTE3IC02NzQgLTE3IC04MjAgMCAtNjYzIDc5IC0xMjUzIDI5NyAtMTczNSA2NDIgLTY4MyA0ODkgLTExMTEgMTIwMiAtMTIzMCAyMDUwIC0yOCAxOTQgLTMzIDMyNyAtMzkgMTA2MCBsLTYgNzg1IC0yNCA1OCBjLTQ0IDExMSAtMTYxIDIwOCAtMjgyIDIzNiAtNjIgMTUgLTE3NSAxMiAtMjM4IC01eicvPjwvZz4gPC9zdmc+XCIpO1xyXG59XHJcbi5pY29uLW1pYyB7XHJcbiAgICBAaW5jbHVkZSBpY29uLW1pYygncmdiKDY2LDE5MiwyNTEpJyk7XHJcbn1cclxuXHJcblxyXG4uaWNvbi1taWMtYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29ucy9taWMtYmx1ZS1zb2xpZC5wbmcnKTtcclxufVxyXG5cclxuLmljb24tbWljLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pY29ucy9taWMtcmVkLXNvbGlkLnBuZycpO1xyXG59XHJcblxyXG4uaWNvbi1taWMtZ3JlZW4geyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb25zL21pYy1ncmVlbi1zb2xpZC5wbmcnKTtcclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsMC43NSwxKTtcclxuICB9XHJcbiAgXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjUsMS41LDEpO1xyXG4gIH1cclxufSIsIi5jZW50ZXJlZCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGlzdGVuaW5nIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhcnNpbmcge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogMjZweCAyNnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3cHggN3B4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbi5wYXJzaW5nOjphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDNweCBzb2xpZCAjNDJjMGZiO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBhbmltYXRpb24tbmFtZTogcmlwcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzQsIDEpO1xuICB6LWluZGV4OiAtMTtcbn1cbi5pY29uLnBhcnNpbmc6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDNweCBzb2xpZCAjNDJjMGZiO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBhbmltYXRpb24tbmFtZTogcmlwcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNCwgMSk7XG4gIHotaW5kZXg6IC0xO1xufVxuLmljb24ubGlzdGVuaW5nOjphZnRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDNweCBzb2xpZCAjNDJjMGZiNDQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGFuaW1hdGlvbi1uYW1lOiByaXBwbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNCwgMSk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaWNvbi1zbWFsbCB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggMTBweDtcbn1cblxuLmljb24tbWljIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB2ZXJzaW9uPScxLjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9Jzg1My4wMDAwMDBwdCcgaGVpZ2h0PScxMjgwLjAwMDAwMHB0JyB2aWV3Qm94PScwIDAgODUzLjAwMDAwMCAxMjgwLjAwMDAwMCcgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pZFlNaWQgbWVldCc+IDxtZXRhZGF0YT4gQ3JlYXRlZCBieSBwb3RyYWNlIDEuMTUsIHdyaXR0ZW4gYnkgUGV0ZXIgU2VsaW5nZXIgMjAwMS0yMDE3IDwvbWV0YWRhdGE+IDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLDEyODAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApJyBmaWxsPSdyZ2IoNjYsMTkyLDI1MSknID4gPHBhdGggZD0nTTQwNjAgMTI3ODkgYy0xOTQgLTIyIC00MDIgLTgxIC01NzcgLTE2NCAtNDcyIC0yMjQgLTc4OSAtNjI2IC04OTQgLTExMzUgbC0yNCAtMTE1IDAgLTI1NzUgYzAgLTI0NTIgMSAtMjU3OSAxOCAtMjY2NSAxNDUgLTcxMCA3NTUgLTEyNjAgMTQ5MiAtMTM0NSAzMjcgLTM3IDY3MSAyMSA5NzUgMTY2IDQ3MyAyMjYgNzg5IDYyOSA4OTIgMTEzNyBsMjMgMTEyIDAgMjU3NSBjMCAyNDQ4IC0xIDI1NzkgLTE4IDI2NjUgLTExNiA1NzYgLTU1NiAxMDY2IC0xMTM0IDEyNjQgLTIyNyA3OCAtNTA4IDEwOCAtNzUzIDgweicvPjxwYXRoIGQ9J00zMDEgODAwNCBjLTE1OCAtNDIgLTI2MiAtMTU2IC0yOTIgLTMxOSAtNyAtMzggLTkgLTMxMiAtNiAtODM5IDMgLTY0OCA3IC04MDUgMjEgLTkyMSA2NCAtNTM4IDE3NyAtOTI4IDM5MSAtMTM1MCAxODQgLTM2MSAzODAgLTYzMCA2NzAgLTkyMCA1MjkgLTUyOCAxMjE2IC05MDYgMjAyMCAtMTExMCAxMTYgLTI5IDIzMSAtNTYgMjU4IC02MCBsNDcgLTcgMCAtODU0IDAgLTg1NCAtNjU3IDAgYy03MTcgMCAtNzQzIC0yIC04NTEgLTU3IC02OSAtMzUgLTE1NSAtMTI3IC0xNzYgLTE4OSAtNTMgLTE1NSAzNiAtMzU3IDIwMyAtNDYzIDEwMyAtNjYgLTY5IC02MSAyMzQxIC02MSAyMzc3IDAgMjIzNSAtMyAyMzQ5IDU0IDY0IDMzIDE0NCAxMjIgMTczIDE5NCAxOSA0OSAyMyA3NSAyMyAxODIgMCAxMjAgLTEgMTI4IC0zMiAxOTIgLTM2IDc2IC0xMDAgMTQ2IC0xNjUgMTc5IC05NSA0OCAtMTAwIDQ5IC04MjAgNDkgbC02NzggMCAwIDg1NCBjMCA4MDUgMSA4NTUgMTggODYwIDkgMiAzMyA3IDUyIDExIDQwNiA3NyA5MzQgMjcxIDEzMTMgNDg0IDEwODggNjA5IDE3NzggMTU2NyAxOTcxIDI3MzYgNDggMjg4IDUxIDM1MiA1MSAxMTUwIGwwIDc2MCAtMjMgNTggYy02MyAxNTUgLTE5MCAyNDMgLTM2NyAyNTQgLTE0NyAxMCAtMjYwIC0zMiAtMzUwIC0xMjkgLTMyIC0zNCAtNjMgLTgwIC03NiAtMTE1IGwtMjQgLTU4IC02IC03ODUgYy02IC03MzcgLTExIC04NTAgLTM5IC0xMDUwIC0xMDAgLTcwNSAtNDE3IC0xMzMwIC05MTMgLTE3OTQgLTUzOCAtNTA1IC0xMjI5IC04MTAgLTIwNTIgLTkwOCAtMTQ2IC0xNyAtNjc0IC0xNyAtODIwIDAgLTY2MyA3OSAtMTI1MyAyOTcgLTE3MzUgNjQyIC02ODMgNDg5IC0xMTExIDEyMDIgLTEyMzAgMjA1MCAtMjggMTk0IC0zMyAzMjcgLTM5IDEwNjAgbC02IDc4NSAtMjQgNTggYy00NCAxMTEgLTE2MSAyMDggLTI4MiAyMzYgLTYyIDE1IC0xNzUgMTIgLTIzOCAtNXonLz48L2c+IDwvc3ZnPlwiKTtcbn1cblxuLmljb24tbWljLWJsdWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbnMvbWljLWJsdWUtc29saWQucG5nXCIpO1xufVxuXG4uaWNvbi1taWMtcmVkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb25zL21pYy1yZWQtc29saWQucG5nXCIpO1xufVxuXG4uaWNvbi1taWMtZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbnMvbWljLWdyZWVuLXNvbGlkLnBuZ1wiKTtcbn1cblxuQGtleWZyYW1lcyByaXBwbGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAwLjc1LCAxKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS41LCAxLjUsIDEpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ng-voice-inputs/ng-voice-inputs.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ng-voice-inputs/ng-voice-inputs.component.ts ***!
    \**************************************************************/

  /*! exports provided: NgVoiceInputsComponent */

  /***/
  function srcAppNgVoiceInputsNgVoiceInputsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgVoiceInputsComponent", function () {
      return NgVoiceInputsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ng-voice-inputs.service */
    "./src/app/ng-voice-inputs/ng-voice-inputs.service.ts");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment/moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _vui_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./vui-response */
    "./src/app/ng-voice-inputs/vui-response.ts");

    var moment = moment_moment__WEBPACK_IMPORTED_MODULE_3__;
    var DEFAULT_STYLE = {
      containerClass: 'centered',
      iconStart: 'icon icon-mic',
      iconParse: 'icon icon-mic',
      iconStop: 'icon icon-mic',
      animationParse: 'parsing',
      animationListen: 'listening'
    };
    var DEFAULT_SCROLL_OFFSET = 200;
    var DEFAULT_SCROLL_DURATION = 300;
    var DEFAULT_SCROLL_DIRECTION = 'vertical';

    var NgVoiceInputsComponent = /*#__PURE__*/function () {
      function NgVoiceInputsComponent(vuiService, ref) {
        var _this = this;

        _classCallCheck(this, NgVoiceInputsComponent);

        this.vuiService = vuiService;
        this.ref = ref;
        this.onValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Decides direction of scroll movement ( Up or Down ) or ( Left or Right)
         * +ve value indicates Down/Right and -ve value idicates Up/Left
         */

        this.activeDirection = +1;
        /**
         * Decides direction of Scroll ( Vertical or Horizontal )
         */

        this.scrollDirection = DEFAULT_SCROLL_DIRECTION;

        this.scrollToTop = function (duration) {
          var interval = setInterval(function () {
            var pos = Math.abs(Math.round(window.pageYOffset / (duration / 100)));

            if (pos > 0) {
              window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
              clearInterval(interval);
            }
          }, 100);
        };

        this.scrollBy = function (offset, duration, direction) {
          _this.activeDirection = offset / offset;
          _this.scrollDirection = direction || DEFAULT_SCROLL_DIRECTION;

          if (offset == 1) {
            offset = window.outerHeight;
          }

          var val = Math.abs(Math.round(offset / (duration / 100)));
          var totalOffset = 0;
          var interval = setInterval(function () {
            if (totalOffset >= Math.abs(offset)) {
              clearInterval(interval);
            } else {
              var opt = {
                top: offset < 0 ? -1 * val : val,
                left: 0
              };

              if (direction == 'horizontal') {
                opt = {
                  top: 0,
                  left: offset < 0 ? -1 * val : val
                };
              }

              window.scrollBy(Object.assign({}, opt, {
                behavior: 'smooth'
              }));
              totalOffset = totalOffset + val;
            }
          }, 100);
        };

        this.scroll = {
          SCROLLDOWN: function SCROLLDOWN() {
            _this.scrollBy(_this.scrollOffset, _this.scrollDuration);
          },
          SCROLLUP: function SCROLLUP() {
            _this.scrollBy(-1 * _this.scrollOffset, _this.scrollDuration);
          },
          SCROLLRIGHT: function SCROLLRIGHT() {
            _this.scrollBy(_this.scrollOffset, _this.scrollDuration, 'horizontal');
          },
          SCROLLLEFT: function SCROLLLEFT() {
            _this.scrollBy(-1 * _this.scrollOffset, _this.scrollDuration, 'horizontal');
          },
          SCROLLBOTTOM: function SCROLLBOTTOM() {
            _this.scrollBy(1, _this.scrollDuration);
          },
          SCROLLTOP: function SCROLLTOP() {
            _this.scrollToTop(_this.scrollDuration);
          },
          SCROLLCONTINUE: function SCROLLCONTINUE() {
            var factor = Math.ceil(window.outerHeight / _this.scrollDuration);
            console.log(factor * _this.scrollDuration, factor);

            _this.scrollBy(window.outerHeight, factor * 1000);
          }
        };
      }

      _createClass(NgVoiceInputsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.style = Object.assign({}, DEFAULT_STYLE, this.style);
          this.scrollOffset = this.scrollOffset || DEFAULT_SCROLL_OFFSET;
          this.scrollDuration = this.scrollDuration || DEFAULT_SCROLL_DURATION;

          try {
            this.initVoiceRecognition();
          } catch (e) {
            console.error('Failed to initialize or parse');
            this.stopRecognition();
          }

          this.vuiService.response.subscribe(this.vuiResponseSubscription.bind(this));
        }
      }, {
        key: "vuiResponseSubscription",
        value: function vuiResponseSubscription(data) {
          this.transcript = '';
          var currentRef = this.vuiService.currentRef;

          if (data.type == 'COMMAND_NEXT') {
            currentRef = ++this.vuiService.currentRef;
          } else if (data.type == 'COMMAND_PREVIOUS') {
            currentRef = --this.vuiService.currentRef;
          } else if (data.type == 'COMMAND_FIRST') {
            currentRef = 0;
          } else if (data.type == 'COMMAND_LAST') {
            currentRef = this.vuiService.inputRefs.length - 1;
          } else if (data.type == 'COMMAND_CLEAR') {
            this.vuiService.inputRefs[currentRef].nativeElement.value = '';
          } else if (data.type == 'COMMAND_CLICK') {
            this.vuiService.inputRefs[currentRef].nativeElement.click();
          } else if (data.type.includes('COMMAND_SCROLL')) {
            this.scroll[data.type.replace('COMMAND_', '')].call();
          } else if (data.type == 'COMMAND_STOP') {
            this.stopRecognition();
          } else {
            var currentInputObj = this.vuiService.inputRefs[currentRef];
            var currentEl = currentInputObj.nativeElement;
            var opts = currentInputObj['options'];

            if (data.value && data.value[0] instanceof Date) {
              if (currentEl.type == 'date' || currentEl.type == 'datetime') {
                currentEl.value = this.formatDate(data.value[0], 'YYYY-MM-DD');
              } else {
                currentEl.value = this.formatDate(data.value[0], opts && opts.format);
              }
            } else {
              currentEl.value = data.value;
            }

            currentEl.dispatchEvent(new Event('input'));
            this.onValueChange.emit(data);
          }

          this.vuiService.inputRefs[currentRef].nativeElement.focus();
          this.setProcess('listening');
        }
      }, {
        key: "setProcess",
        value: function setProcess(processType) {
          this.process = processType;
          this.ref.detectChanges();
        }
      }, {
        key: "formatDate",
        value: function formatDate(date, format) {
          return moment(date).format(format || 'DD/MM/YYYY');
        }
      }, {
        key: "initVoiceRecognition",
        value: function initVoiceRecognition() {
          var _this2 = this;

          this.recognition = new window['webkitSpeechRecognition']();
          this.recognition.continuous = true;
          this.recognition.interimResults = true;

          this.recognition.onstart = function (event) {
            _this2.setProcess('listening');
          };

          this.recognition.onresult = function (event) {
            var currentInputObj = _this2.vuiService.inputRefs[_this2.vuiService.currentRef];
            var opts = currentInputObj['options'];

            _this2.setProcess('parsing');

            for (var i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                _this2.transcript += event.results[i][0].transcript;

                var data = _this2.vuiService.interpretSpeech(_this2.transcript, opts && opts.type);

                var resp = new _vui_response__WEBPACK_IMPORTED_MODULE_4__["default"]('invalid', data);

                if (data) {
                  resp = new _vui_response__WEBPACK_IMPORTED_MODULE_4__["default"]('date-range', data);

                  if (typeof data == 'string') {
                    resp = new _vui_response__WEBPACK_IMPORTED_MODULE_4__["default"](data, data.includes('_') ? '' : data);
                  }
                }

                _this2.vuiService.response.next(resp);
              }
            }
          };

          this.recognition.onerror = function () {
            _this2.setProcess(null);
          };

          this.recognition.onend = function () {
            _this2.setProcess(null);
          };
        }
      }, {
        key: "startRecognition",
        value: function startRecognition() {
          this.transcript = '';
          this.recognition.start();
        }
      }, {
        key: "stopRecognition",
        value: function stopRecognition() {
          this.transcript = '';
          this.recognition.stop();
          this.setProcess(null);
        }
      }]);

      return NgVoiceInputsComponent;
    }();

    NgVoiceInputsComponent.ctorParameters = function () {
      return [{
        type: _ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_2__["VuiVoiceRecognitionService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NgVoiceInputsComponent.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NgVoiceInputsComponent.prototype, "scrollOffset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NgVoiceInputsComponent.prototype, "scrollDuration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], NgVoiceInputsComponent.prototype, "onValueChange", void 0);
    NgVoiceInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng-voice-input',
      template: "\n              <div [class]=\"style.containerClass\">\n                <i [class]=\"style.iconStart\" mat-raised-button (click)=\"startRecognition()\" *ngIf=\"!process\"></i>\n                <i [ngClass]=\"process == 'parsing' ? style.iconParse + ' ' + style.animationParse : style.iconStop + ' ' + style.animationListen\" (click)=\"stopRecognition()\" *ngIf=\"process\"></i>\n              </div>\n            ",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ng-voice-inputs.component.scss */
      "./src/app/ng-voice-inputs/ng-voice-inputs.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_2__["VuiVoiceRecognitionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], NgVoiceInputsComponent);

    Date.prototype['isValid'] = function () {
      // If the date object is invalid it 
      // will return 'NaN' on getTime()   
      // and NaN is never equal to itself.   
      return this.getTime() === this.getTime();
    };
    /***/

  },

  /***/
  "./src/app/ng-voice-inputs/ng-voice-inputs.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/ng-voice-inputs/ng-voice-inputs.service.ts ***!
    \************************************************************/

  /*! exports provided: VuiVoiceRecognitionService */

  /***/
  function srcAppNgVoiceInputsNgVoiceInputsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VuiVoiceRecognitionService", function () {
      return VuiVoiceRecognitionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment/moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var moment = moment_moment__WEBPACK_IMPORTED_MODULE_2__;
    var UNIT = {
      zero: 0,
      first: 1,
      one: 1,
      second: 2,
      two: 2,
      third: 3,
      thirteenth: 13,
      thirteen: 13,
      three: 3,
      fourth: 4,
      fourteenth: 14,
      fourteen: 14,
      four: 4,
      fifteenth: 15,
      fifteen: 15,
      fifth: 5,
      five: 5,
      sixth: 6,
      sixteenth: 16,
      sixteen: 16,
      six: 6,
      seventeenth: 17,
      seventeen: 17,
      seventh: 7,
      seven: 7,
      eighteenth: 18,
      eighteen: 18,
      eighth: 8,
      eight: 8,
      nineteenth: 19,
      nineteen: 19,
      ninth: 9,
      nine: 9,
      tenth: 10,
      ten: 10,
      eleventh: 11,
      eleven: 11,
      twelfth: 12,
      twelve: 12,
      a: 1
    };
    var TWOS = {
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19
    };
    var TEN = {
      twenty: 20,
      twentieth: 20,
      thirty: 30,
      thirtieth: 30,
      forty: 40,
      fortieth: 40,
      fifty: 50,
      fiftieth: 50,
      sixty: 60,
      sixtieth: 60,
      seventy: 70,
      seventieth: 70,
      eighty: 80,
      eightieth: 80,
      ninety: 90,
      ninetieth: 90
    };
    var MAGNITUDE = {
      hundred: 100,
      hundredth: 100,
      thousand: 1000,
      million: 1000000,
      billion: 1000000000,
      trillion: 1000000000000,
      quadrillion: 1000000000000000,
      quintillion: 1000000000000000000,
      sextillion: 1000000000000000000000,
      septillion: 1000000000000000000000000,
      octillion: 1000000000000000000000000000,
      nonillion: 1000000000000000000000000000000,
      decillion: 1000000000000000000000000000000000
    };
    var NUMBER = Object.assign({}, UNIT, TEN, MAGNITUDE);
    var SUFFIXES = ['st', 'nd', 'rd', 'th'];
    var MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    var KEY_WORDS_FWD_NAV = ['forward', 'next'];
    var KEY_WORDS_BCK_NAV = ['back', 'backward', 'previous'];
    var KEY_WORDS_CLEAR = ['clear', 'clean', 'delete', 'remove'];
    var KEY_WORDS_CLICK = ['click', 'submit', 'expand', 'open', 'show'];
    var KEY_WORDS_STOP = ['stop', 'end', 'done'];
    var KEY_WORDS_SCROLL_UP = ['scroll up', 'go up', 'up'];
    var KEY_WORDS_SCROLL_DOWN = ['scroll down', 'go down', 'down'];
    var KEY_WORDS_SCROLL_RIGHT = ['scroll right', 'go right', 'right'];
    var KEY_WORDS_SCROLL_LEFT = ['scroll left', 'go left', 'left'];
    var KEY_WORDS_SCROLL_TOP = ['scroll top', 'go top', 'top'];
    var KEY_WORDS_SCROLL_BOTTOM = ['scroll bottom', 'go bottom', 'bottom'];
    var KEY_WORDS_SCROLL_CONTINUE = ['keep scrolling', 'scroll', 'scrolling', 'continue scrolling'];
    var KEY_WORDS_SCROLL = [].concat(KEY_WORDS_SCROLL_UP, KEY_WORDS_SCROLL_DOWN, KEY_WORDS_SCROLL_RIGHT, KEY_WORDS_SCROLL_LEFT, KEY_WORDS_SCROLL_TOP, KEY_WORDS_SCROLL_BOTTOM, KEY_WORDS_SCROLL_CONTINUE);
    var KEY_WORDS_INST = ['goto', 'switch', 'go'].concat(KEY_WORDS_CLEAR, KEY_WORDS_CLICK, _toConsumableArray(KEY_WORDS_SCROLL)); // Instruction types

    var KEY_WORDS_NAV = [].concat(KEY_WORDS_FWD_NAV, KEY_WORDS_BCK_NAV, KEY_WORDS_STOP, _toConsumableArray(KEY_WORDS_SCROLL), ['first', 'last']); // Navigation types

    var KEY_WORDS = [].concat(_toConsumableArray(KEY_WORDS_INST), _toConsumableArray(KEY_WORDS_NAV));
    var INST_MAPPINGS = {
      next: KEY_WORDS_FWD_NAV,
      previous: KEY_WORDS_BCK_NAV,
      first: ['first'],
      last: ['last'],
      clear: KEY_WORDS_CLEAR,
      click: KEY_WORDS_CLICK,
      stop: KEY_WORDS_STOP,
      scrollUp: KEY_WORDS_SCROLL_UP,
      scrollDown: KEY_WORDS_SCROLL_DOWN,
      scrollLeft: KEY_WORDS_SCROLL_LEFT,
      scrollRight: KEY_WORDS_SCROLL_RIGHT,
      scrollTop: KEY_WORDS_SCROLL_TOP,
      scrollBottom: KEY_WORDS_SCROLL_BOTTOM,
      scrollContinue: KEY_WORDS_SCROLL_CONTINUE
    };

    var VuiVoiceRecognitionService = /*#__PURE__*/function () {
      function VuiVoiceRecognitionService() {
        _classCallCheck(this, VuiVoiceRecognitionService);

        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.inputRefs = [];
        this.currentRef = 0;
      }

      _createClass(VuiVoiceRecognitionService, [{
        key: "isInputSwitch",
        value: function isInputSwitch(speechKeys, inputType) {
          if (inputType == 'address' && !speechKeys.some(function (key) {
            return KEY_WORDS_INST.includes(key);
          })) {
            return false;
          }

          if (speechKeys.some(function (key) {
            return KEY_WORDS.includes(key);
          })) {
            return true;
          }

          return false;
        }
      }, {
        key: "findInstructionType",
        value: function findInstructionType(speechText, inputType) {
          var type = '';
          speechText = speechText.trim().toLocaleLowerCase();
          var speechKeys = speechText.trim().toLocaleLowerCase().split(' ');

          if (this.isInputSwitch(speechKeys, inputType)) {
            var foundKey = Object.keys(INST_MAPPINGS).find(function (instType) {
              return speechKeys.some(function (key) {
                return INST_MAPPINGS[instType].includes(key);
              });
            });
            type = foundKey ? "COMMAND_".concat(foundKey.toUpperCase()) : '';
          } else {
            type = 'INPUT';
          }

          return type;
        }
      }, {
        key: "playAudio",
        value: function playAudio(text) {
          var synth = window.speechSynthesis;

          if (synth.speaking) {
            console.error('SpeechSynthesis.speaking');
            return;
          }

          if (text !== '') {
            var utterThis = new SpeechSynthesisUtterance(text);

            utterThis.onend = function () {
              console.log('SpeechSynthesisUtterance finished speaking.');
            };

            utterThis.onerror = function (event) {
              console.error('SpeechSynthesisUtterance.onerror', event);
            }; // Optional: Set voice and properties (e.g., language, pitch, rate)


            utterThis.lang = 'vi-VN'; // Change language if necessary

            utterThis.pitch = 1; // Default pitch

            utterThis.rate = 1; // Default speed

            synth.speak(utterThis);
          }
        }
      }, {
        key: "interpretSpeech",
        value: function interpretSpeech(speechText, inputType) {
          var _this3 = this;

          var instType = this.findInstructionType(speechText, inputType);

          if (instType != 'INPUT') {
            this.playAudio(instType); // Phát âm thanh loại lệnh

            return instType;
          }

          if (inputType == 'text' || inputType == 'address') {
            this.playAudio(speechText); // Phát âm thanh văn bản

            return speechText;
          }

          if (inputType == 'number') {
            var result = this.wordsToNumber(speechText);
            this.playAudio(result.toString()); // Phát âm thanh số

            return result;
          }

          if (inputType == 'date') {
            speechText = speechText.replace('from', '');
            var dates = speechText.trim().split('to ');
            var parsedDates = [];
            dates.forEach(function (dateStr) {
              parsedDates.push(_this3.dateParser(dateStr));
            });

            if (parsedDates[0].isValid()) {
              this.playAudio(parsedDates.join(' to ')); // Phát âm thanh ngày

              return parsedDates;
            }
          }

          return null;
        } // interpretSpeech(speechText: string, inputType: string) {
        //   let instType = this.findInstructionType(speechText, inputType);
        //   if (instType != 'INPUT') {
        //     return instType;
        //   }
        //   if (inputType == 'text' || inputType == 'address') {
        //     return speechText;
        //   }
        //   if (inputType == 'number') {
        //     return this.wordsToNumber(speechText);
        //   }
        //   if (inputType == 'date') {
        //     speechText = speechText.replace('from', '');
        //     let dates =  speechText.trim().split('to ');
        //     let parsedDates: Array<any> = [];
        //     dates.forEach((dateStr: string) => {
        //       parsedDates.push(this.dateParser(dateStr));
        //     });
        //     if (parsedDates[0].isValid()) {
        //       return parsedDates;
        //     }
        //   }
        //   return null;
        // }

      }, {
        key: "dateParser",
        value: function dateParser(dateStr) {
          var _this4 = this;

          var parsedDate;
          var cleanDateStr = dateStr;
          var dateParts = dateStr.trim().split(' ');
          var datePartObj = {};
          var isPureNumber = false;
          var cleanDateParts = [];

          if (dateParts.length == 3) {
            cleanDateParts = dateParts.map(function (dateStr) {
              return _this4.eliminateString(dateStr);
            });
            isPureNumber = cleanDateParts.every(function (dateStr) {
              return Number.isInteger(dateStr);
            });
          }

          if (isPureNumber) {
            cleanDateStr = cleanDateParts.join('-');
          } else {
            var currentDate = moment();
            dateParts.forEach(function (dateStr) {
              datePartObj = _this4.parseDatePart(dateStr, datePartObj);
            });
            var availableKeys = Object.keys(datePartObj).join('-');

            switch (availableKeys) {
              case 'date':
                datePartObj.month = currentDate.format('MM');

              case 'date-month':
                datePartObj.year = currentDate.format('YYYY');
                break;

              case 'year':
                datePartObj.month = '01';

              case 'month-year':
                datePartObj.date = '01';
                break;

              case 'month':
                datePartObj.year = currentDate.format('YYYY');
                datePartObj.date = '01';
            }

            cleanDateStr = this.dateBuilder(datePartObj);
          }

          parsedDate = moment(cleanDateStr).toDate();
          return parsedDate;
        }
      }, {
        key: "dateBuilder",
        value: function dateBuilder(datePartObj) {
          var dateStr = '';
          dateStr = "".concat(datePartObj.year, "-").concat(datePartObj.month, "-").concat(datePartObj.date);
          return dateStr;
        }
        /**
         *
         * @param datePart Incomplete date part eg, '21st' is the date part for the date '21st July 2020'
         * @param datePartObj // Inherited from caller & updated with parsed object. Can be year, month or date
         */

      }, {
        key: "parseDatePart",
        value: function parseDatePart(datePart, datePartObj) {
          if (this.isYearType(datePart)) {
            var year = this.wordsToNumber(datePart);
            datePartObj.year = year;
          } else if (this.isDateType(datePart)) {
            var date = this.wordsToNumber(datePart);
            datePartObj.date = date;
          } else if (this.isMonthType(datePart)) {
            var month = MONTHS.indexOf(datePart.toUpperCase()) + 1;
            datePartObj.month = month < 10 ? '0' + month : month;
          }

          return datePartObj;
        }
      }, {
        key: "isDateType",
        value: function isDateType(datePart) {
          var isDatePart = false;
          isDatePart = /\d/.test(datePart) && SUFFIXES.includes(datePart.substr(datePart.length - 2));

          if (!isDatePart) {
            var number = this.wordsToNumber(datePart);

            if (number > 0 && number <= 31) {
              isDatePart = true;
            }
          }

          return isDatePart;
        }
      }, {
        key: "parseDateVal",
        value: function parseDateVal(datePart, datePartObj) {
          var isDatePart = false;
          var convertedNum = 0;
          isDatePart = SUFFIXES.some(function (key) {
            return datePart.includes(key);
          });

          if (!isDatePart) {
            convertedNum = this.wordsToNumber(datePart);

            if (convertedNum > 0 && convertedNum <= 31) {
              isDatePart = true;
            }
          }

          if (isDatePart) {
            datePartObj.date = convertedNum;
          }
        }
      }, {
        key: "isMonthType",
        value: function isMonthType(datePart) {
          var month = MONTHS.indexOf(datePart.toUpperCase());
          return month > -1;
        }
      }, {
        key: "parseMonthVal",
        value: function parseMonthVal(datePart, datePartObj) {
          var month = MONTHS.indexOf(datePart.toUpperCase());

          if (month > -1) {
            datePartObj.month = month < 10 ? '0' + month : month;
          }
        }
      }, {
        key: "isYearType",
        value: function isYearType(datePart) {
          var year = this.wordsToNumber(datePart);
          return year > 1000;
        }
      }, {
        key: "parseYearVal",
        value: function parseYearVal(datePart, datePartObj) {
          var year = this.wordsToNumber(datePart);

          if (year > 1000) {
            datePartObj.year = year;
          }
        }
      }, {
        key: "wordsToNumber",
        value: function wordsToNumber(word) {
          var _this5 = this;

          // Returning integer if it is not actual word
          if (!Number.isNaN(parseInt(word))) {
            return parseInt(word);
          }

          word = word.replace(/and/g, ''); // Replace joiners

          var words = word.toLowerCase().trim().split(' ');
          var num = 0;
          var numStr = '';
          var tens = 0;
          words = this.parseColloquialWords(words);
          words.forEach(function (wordStr) {
            wordStr = _this5.eliminateString(wordStr);

            if (typeof wordStr == 'number') {
              num = wordStr;
            } else {
              if (UNIT[wordStr]) {
                num = num + NUMBER[wordStr];
              } else if (TEN[wordStr]) {
                num = num + TEN[wordStr];
              } else if (MAGNITUDE[wordStr]) {
                num = num * MAGNITUDE[wordStr];
              }
            }
          });
          return num;
        }
      }, {
        key: "parseColloquialWords",
        value: function parseColloquialWords(wordsArr) {
          if (wordsArr.length == 2) {
            if (TEN[wordsArr[0]] && (TEN[wordsArr[1]] || TWOS[wordsArr[1]])) {
              wordsArr.splice(1, 0, 'hundred');
            }
          }

          if (MAGNITUDE[wordsArr[0]]) {
            wordsArr.splice(0, 0, 'one');
          }

          return wordsArr;
        }
      }, {
        key: "eliminateString",
        value: function eliminateString(word) {
          if (/\d/.test(word) && SUFFIXES.includes(word.substr(word.length - 2))) {
            word = word.substr(0, word.length - 2); // Remove last suffixes such as 'st', 'th' from 1st, 10th

            word = parseInt(word);
          }

          return word;
        }
      }]);

      return VuiVoiceRecognitionService;
    }();

    VuiVoiceRecognitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VuiVoiceRecognitionService);
    /***/
  },

  /***/
  "./src/app/ng-voice-inputs/vui-input.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/ng-voice-inputs/vui-input.directive.ts ***!
    \********************************************************/

  /*! exports provided: VuiInputDirective */

  /***/
  function srcAppNgVoiceInputsVuiInputDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VuiInputDirective", function () {
      return VuiInputDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment/moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ng-voice-inputs.service */
    "./src/app/ng-voice-inputs/ng-voice-inputs.service.ts");

    var moment = moment_moment__WEBPACK_IMPORTED_MODULE_2__;
    var DEFAULT_OPTS = {
      type: 'text',
      format: 'DD/MM/YYYY'
    };
    /**
     * Options for VuiInput directive
     * @param type Data type for input. Possible values are: 'text', 'address', 'date', 'number'. Default: 'text'
     * @param format (Optional) Date format for datepicker input. eg, 'MM/DD/YYYY'. Default: 'DD/MM/YYYY'.
     */

    var Options = function Options() {
      _classCallCheck(this, Options);
    };

    var VuiInputDirective = /*#__PURE__*/function () {
      function VuiInputDirective(vuiService, el) {
        var _this6 = this;

        _classCallCheck(this, VuiInputDirective);

        this.vuiService = vuiService;
        this.el = el;
        this.el.nativeElement.setAttribute('vui-ref', this.vuiService.inputRefs.length);
        this.vuiService.inputRefs.push(this.el);
        this.el.nativeElement.addEventListener('focus', function (evt) {
          _this6.vuiService.currentRef = parseInt(evt.target.getAttribute('vui-ref'));
        });
      }

      _createClass(VuiInputDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.options = Object.assign({}, DEFAULT_OPTS, this.options);
          this.el['options'] = this.options;
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return moment(date).format(this.options.format);
        }
      }]);

      return VuiInputDirective;
    }();

    VuiInputDirective.ctorParameters = function () {
      return [{
        type: _ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_3__["VuiVoiceRecognitionService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vuiInput'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Options)], VuiInputDirective.prototype, "options", void 0);
    VuiInputDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vuiInput]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_voice_inputs_service__WEBPACK_IMPORTED_MODULE_3__["VuiVoiceRecognitionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], VuiInputDirective);
    /***/
  },

  /***/
  "./src/app/ng-voice-inputs/vui-response.ts":
  /*!*************************************************!*\
    !*** ./src/app/ng-voice-inputs/vui-response.ts ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNgVoiceInputsVuiResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return VuiResponse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * @param type Type of response
     * Possible values for type are:
     * 'date-range', 'date', 'text', 'number'
     * @param value Response value which can be text, number, date
     *
     */


    var VuiResponse = function VuiResponse(type, value) {
      _classCallCheck(this, VuiResponse);

      this.type = type || 'text';
      this.value = value;
    };
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
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      endPoint: 'http://localhost:8080/api/v1',
      idleTime: 10 * 60
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var src_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(src_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\Users\nphat\Music\signin\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map