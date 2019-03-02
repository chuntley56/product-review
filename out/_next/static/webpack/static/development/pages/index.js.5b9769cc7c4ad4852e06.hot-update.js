webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/chuntley/Sites/product-review/components/Pagination.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var page = _ref.page,
      lastPage = _ref.lastPage,
      changePage = _ref.changePage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    value: "prev",
    className: "arrow prev ".concat(page === 1 ? 'hide' : ''),
    onClick: changePage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Page ", page, " of ", lastPage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    value: "next",
    className: "arrow next ".concat(page === lastPage ? 'hide' : ''),
    onClick: changePage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.5b9769cc7c4ad4852e06.hot-update.js.map