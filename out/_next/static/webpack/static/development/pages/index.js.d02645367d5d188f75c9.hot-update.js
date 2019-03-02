webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stars.js":
/*!*****************************!*\
  !*** ./components/Stars.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/chuntley/Sites/product-review/components/Stars.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        ::after{\n        width: ", "px;\n      }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var rating = _ref.rating;
  var stars = [];
  var ratingFloor = Math.floor(rating);
  var starHalfWidth = ((rating - ratingFloor) * 25).toFixed(0);
  var StarHalf = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject(), starHalfWidth);

  var renderStars = function renderStars(rating) {
    if (rating > ratingFloor) {
      for (var i = 0; i < rating - 1; i++) {
        stars.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "star on",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }));
      }

      stars.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StarHalf, {
        className: "star half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    } else {
      for (var _i = 0; _i < rating; _i++) {
        stars.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "star on",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }));
      }
    }

    while (stars.length < 5) {
      stars.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }

    return stars;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "stars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, renderStars(rating));
});

/***/ })

})
//# sourceMappingURL=index.js.d02645367d5d188f75c9.hot-update.js.map