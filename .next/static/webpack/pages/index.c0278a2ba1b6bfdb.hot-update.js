"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nvar __N_SSG = true;\nfunction HomePage(props) {\n    /* const [meetups, setMeetups] = useState([])\n  useEffect(() => {\n    Send request and data fetched, but initially is empty. So when HTML Page is pre=generated, it doesn't wait for second render cycle. \n    Means page pre-rendered is snapshot after first component render cycle as its content. So, it may miss crucial data. After HTML page is received, React will take over, page is hydrated (React will turn it into SPA, useEffect() executed, data fetched and pages updated in browser) \n    Pre-render page with data, so initially return HTML code already contains data, built-in pre-rendering process has to be configured\n    So, we have two options - static generation and server - side rendering \n    setMeetups(DUMMY_MEETUPS)\n  }, []) \n  return <MeetupList meetups={meetups} /> */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Vidhi Mathur\\\\ReactJS (Udemy)\\\\meetup-next-js\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n /*Regenerate for every incoming request, so dynamically after deployment\nconst DUMMY_MEETUPS = [\n  {\n    id: 'm1',\n    title: 'A First Meetup',\n    image:\n      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',\n    address: 'Some address 5, 12345 Some City',\n    description: 'This is a first meetup.',\n  },\n  {\n    id: 'm2',\n    title: 'A Second Meetup',\n    image:\n      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',\n    address: 'Some address 10, 12345 Some City',\n    description: 'This is a second meetup.',\n  },\n];\nexport async function getServerSideProps(context){\n  const req = context.req\n  const res = context.res\n  return {\n    props: {\n      meetups: DUMMY_MEETUPS\n    }\n  }\n} */ \n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUVjOztBQUUzQyxTQUFTRyxTQUFTQyxLQUFLO0lBQ3BDOzs7Ozs7OzswQ0FRd0MsR0FDeEMscUJBQU8sOERBQUNGLHNFQUFVQTtRQUFDRyxTQUFTRCxNQUFNQyxPQUFPOzs7Ozs7QUFDM0M7S0FYd0JGOzs7Q0FtQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpe1xuICAvKiBjb25zdCBbbWVldHVwcywgc2V0TWVldHVwc10gPSB1c2VTdGF0ZShbXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBTZW5kIHJlcXVlc3QgYW5kIGRhdGEgZmV0Y2hlZCwgYnV0IGluaXRpYWxseSBpcyBlbXB0eS4gU28gd2hlbiBIVE1MIFBhZ2UgaXMgcHJlPWdlbmVyYXRlZCwgaXQgZG9lc24ndCB3YWl0IGZvciBzZWNvbmQgcmVuZGVyIGN5Y2xlLiBcbiAgICBNZWFucyBwYWdlIHByZS1yZW5kZXJlZCBpcyBzbmFwc2hvdCBhZnRlciBmaXJzdCBjb21wb25lbnQgcmVuZGVyIGN5Y2xlIGFzIGl0cyBjb250ZW50LiBTbywgaXQgbWF5IG1pc3MgY3J1Y2lhbCBkYXRhLiBBZnRlciBIVE1MIHBhZ2UgaXMgcmVjZWl2ZWQsIFJlYWN0IHdpbGwgdGFrZSBvdmVyLCBwYWdlIGlzIGh5ZHJhdGVkIChSZWFjdCB3aWxsIHR1cm4gaXQgaW50byBTUEEsIHVzZUVmZmVjdCgpIGV4ZWN1dGVkLCBkYXRhIGZldGNoZWQgYW5kIHBhZ2VzIHVwZGF0ZWQgaW4gYnJvd3NlcikgXG4gICAgUHJlLXJlbmRlciBwYWdlIHdpdGggZGF0YSwgc28gaW5pdGlhbGx5IHJldHVybiBIVE1MIGNvZGUgYWxyZWFkeSBjb250YWlucyBkYXRhLCBidWlsdC1pbiBwcmUtcmVuZGVyaW5nIHByb2Nlc3MgaGFzIHRvIGJlIGNvbmZpZ3VyZWRcbiAgICBTbywgd2UgaGF2ZSB0d28gb3B0aW9ucyAtIHN0YXRpYyBnZW5lcmF0aW9uIGFuZCBzZXJ2ZXIgLSBzaWRlIHJlbmRlcmluZyBcbiAgICBzZXRNZWV0dXBzKERVTU1ZX01FRVRVUFMpXG4gIH0sIFtdKSBcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e21lZXR1cHN9IC8+ICovXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxufSBcblxuLy9QcmUtcmVuZGVyZWQgZHVyaW5nIHByb2R1Y3Rpb24uIFJlc2VydmVkKCkgZm9yIHBhZ2UgY29tcG9uZW50IG9ubHkuIEZpcnN0IGNhbGxzIHRoaXMgYmVmb3JlIEhvbWVQYWdlIGNvbXBvbmVudCgpLiBTU0cgKFNlcnZlci1zaWRlIGdlbmVyYXRpb24pLCBhdXRvbWF0aWNhbGx5IHByZXJlbmRlcmVkIGFzIHN0YXRpYyBIVE1MICsgSlNPTih1c2VzIGdldFN0YXRpY1Byb3BzKS4gL25ldy1tZWV0dXAgcGFnZSAoTmV3TWVldHVwRm9ybSBjb21wb25lbnQoKSkgaXMgc3RhdGljIGFzIG5vIGRhdGEgZmV0Y2hlZCBmcm9tIHNlcnZlciwgc28gcHJlcmVuZGVyZWQgYXMgc3RhdGljIGNvbnRlbnQvIEhUTUwuIFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHByb3BzKXtcbiAgLy9GZXRjaCBkYXRhIGZyb20gQVBJXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vbWF0aHVydmlkaGkyNTA1OiUyNFZpZGhpTSU0MDI1QGNsdXN0ZXIwLm1qb2R3YzYubW9uZ29kYi5uZXQvbWVldHVwcz9hdXRoU291cmNlPWFkbWluJnJlYWRQcmVmZXJlbmNlPXByaW1hcnknKVxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpXG4gIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKVxuICBjbGllbnQuY2xvc2UoKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcbiAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxuICAgICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxuICAgICAgICB9KSlcbiAgICAgIH0sXG4gICAgICAvL1Byb2JsZW0gaXMgdGhhdCBkYXRhIG1heSBiZSBvdXRkYXRlZCBpZiBhZGRlZCBkYXRhIGFmdGVyIGRlcGxveW1lbnQuIEVuYWJsZXMgaW5jcmVtZW50YWwgc3RhdGljIGdlbmVyYXRpb24sIG1lYW5zIHVwZGF0ZWQgYWZ0ZXIgYSBjb3VwbGUgb2Ygc2Vjb25kcyBhcyBzcGVjaWZpZWQgXG4gICAgICByZXZhbGlkYXRlOiAxXG4gICAgfVxufVxuXG4vKlJlZ2VuZXJhdGUgZm9yIGV2ZXJ5IGluY29taW5nIHJlcXVlc3QsIHNvIGR5bmFtaWNhbGx5IGFmdGVyIGRlcGxveW1lbnRcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gIHtcbiAgICBpZDogJ20xJyxcbiAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnbTInLFxuICAgIHRpdGxlOiAnQSBTZWNvbmQgTWVldHVwJyxcbiAgICBpbWFnZTpcbiAgICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxuICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgMTAsIDEyMzQ1IFNvbWUgQ2l0eScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cC4nLFxuICB9LFxuXTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxXG4gIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFNcbiAgICB9XG4gIH1cbn0gKi9cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1lZXR1cExpc3QiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});