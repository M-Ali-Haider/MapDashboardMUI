"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/job-seeker/(Pages)/contact-us/page",{

/***/ "(app-pages-browser)/./src/components/ContactUs/Job-Seeker/ChatBox/content.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/ContactUs/Job-Seeker/ChatBox/content.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Stack!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatBoxContent = (param)=>{\n    let { chatContentRef, messages } = param;\n    _s();\n    const isSidebarOpen = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.sidebar.isSidebarOpen);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            sx: {\n                mt: \"80px\",\n                px: \"1.5rem\",\n                maxHeight: \"422.4px\",\n                overflowY: \"scroll\",\n                pt: \"2.25rem\",\n                \"&::-webkit-scrollbar\": {\n                    display: \"none\"\n                },\n                scrollbarWidth: \"none\"\n            },\n            children: messages.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        width: \"100%\",\n                        justifyContent: item.isChatOwner ? \"end\" : \"start\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            alignItems: item.isChatOwner ? \"end\" : \"start\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            sx: {\n                                bgcolor: item.isChatOwner ? \"#89a0ff\" : \"#ffffff\",\n                                color: item.isChatOwner ? \"black\" : \"white\",\n                                maxWidth: isSidebarOpen ? \"24rem\" : \"550px\",\n                                p: \"0.75rem\",\n                                borderRadius: \"20px\",\n                                border: \"2px solid black\",\n                                position: \"relative\",\n                                zIndex: 10,\n                                transition: \"all 0.3s cubic-bezier(0.76,0,0.24,1)\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sx: {\n                                    lineHeight: \"24px\",\n                                    fontWeight: 500,\n                                    mb: \"0.25rem\"\n                                },\n                                children: item.sentBy\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\content.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\content.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\content.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\content.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\content.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ChatBoxContent, \"wUJs0aspU7ROrskSBXl9ZwZJKqQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = ChatBoxContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBoxContent);\nvar _c;\n$RefreshReg$(_c, \"ChatBoxContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RVcy9Kb2ItU2Vla2VyL0NoYXRCb3gvY29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzJDO0FBQ2pCO0FBQ2dCO0FBRTFDLE1BQU1JLGlCQUFpQjtRQUFDLEVBQ3RCQyxjQUFjLEVBQ2RDLFFBQVEsRUFJVDs7SUFDQyxNQUFNQyxnQkFBZ0JKLHdEQUFXQSxDQUMvQixDQUFDSyxRQUFlQSxNQUFNQyxPQUFPLENBQUNGLGFBQWE7SUFFN0MscUJBQ0U7a0JBQ0UsNEVBQUNQLHFGQUFHQTtZQUNGVSxJQUFJO2dCQUNGQyxJQUFJO2dCQUNKQyxJQUFJO2dCQUNKQyxXQUFXO2dCQUNYQyxXQUFXO2dCQUNYQyxJQUFJO2dCQUNKLHdCQUF3QjtvQkFDdEJDLFNBQVM7Z0JBQ1g7Z0JBQ0FDLGdCQUFnQjtZQUNsQjtzQkFFQ1gsU0FBU1ksR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ3BCLHFGQUFHQTtvQkFFRlUsSUFBSTt3QkFDRk0sU0FBUzt3QkFDVEssT0FBTzt3QkFDUEMsZ0JBQWdCSCxLQUFLSSxXQUFXLEdBQUcsUUFBUTtvQkFDN0M7OEJBRUEsNEVBQUN0QixxRkFBS0E7d0JBQUNTLElBQUk7NEJBQUVjLFlBQVlMLEtBQUtJLFdBQVcsR0FBRyxRQUFRO3dCQUFRO2tDQUMxRCw0RUFBQ3ZCLHFGQUFHQTs0QkFDRlUsSUFBSTtnQ0FDRmUsU0FBU04sS0FBS0ksV0FBVyxHQUFHLFlBQVk7Z0NBQ3hDRyxPQUFPUCxLQUFLSSxXQUFXLEdBQUcsVUFBVTtnQ0FDcENJLFVBQVVwQixnQkFBZ0IsVUFBVTtnQ0FDcENxQixHQUFHO2dDQUNIQyxjQUFjO2dDQUNkQyxRQUFRO2dDQUNSQyxVQUFVO2dDQUNWQyxRQUFRO2dDQUNSQyxZQUFZOzRCQUNkO3NDQUVBLDRFQUFDakMscUZBQUdBO2dDQUNGVSxJQUFJO29DQUFFd0IsWUFBWTtvQ0FBUUMsWUFBWTtvQ0FBS0MsSUFBSTtnQ0FBVTswQ0FFeERqQixLQUFLa0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OzttQkF4QmJqQjs7Ozs7Ozs7Ozs7QUFpQ2pCO0dBNURNaEI7O1FBT2tCRCxvREFBV0E7OztLQVA3QkM7QUE4RE4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdFVzL0pvYi1TZWVrZXIvQ2hhdEJveC9jb250ZW50LnRzeD83ZWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiQC91dGlscy9tZXNzYWdlc1wiO1xyXG5pbXBvcnQgeyBCb3gsIFN0YWNrIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgQ2hhdEJveENvbnRlbnQgPSAoe1xyXG4gIGNoYXRDb250ZW50UmVmLFxyXG4gIG1lc3NhZ2VzLFxyXG59OiB7XHJcbiAgY2hhdENvbnRlbnRSZWY6IGFueTtcclxuICBtZXNzYWdlczogTWVzc2FnZVtdO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgaXNTaWRlYmFyT3BlbiA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNpZGViYXIuaXNTaWRlYmFyT3BlblxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgbXQ6IFwiODBweFwiLFxyXG4gICAgICAgICAgcHg6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICBtYXhIZWlnaHQ6IFwiNDIyLjRweFwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgcHQ6IFwiMi4yNXJlbVwiLFxyXG4gICAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiBcIm5vbmVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge21lc3NhZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IGl0ZW0uaXNDaGF0T3duZXIgPyBcImVuZFwiIDogXCJzdGFydFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U3RhY2sgc3g9e3sgYWxpZ25JdGVtczogaXRlbS5pc0NoYXRPd25lciA/IFwiZW5kXCIgOiBcInN0YXJ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgYmdjb2xvcjogaXRlbS5pc0NoYXRPd25lciA/IFwiIzg5YTBmZlwiIDogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpdGVtLmlzQ2hhdE93bmVyID8gXCJibGFja1wiIDogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogaXNTaWRlYmFyT3BlbiA/IFwiMjRyZW1cIiA6IFwiNTUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgcDogXCIwLjc1cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgekluZGV4OiAxMCxcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43NiwwLDAuMjQsMSlcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICBzeD17eyBsaW5lSGVpZ2h0OiBcIjI0cHhcIiwgZm9udFdlaWdodDogNTAwLCBtYjogXCIwLjI1cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uc2VudEJ5fVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveENvbnRlbnQ7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJTdGFjayIsIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJDaGF0Qm94Q29udGVudCIsImNoYXRDb250ZW50UmVmIiwibWVzc2FnZXMiLCJpc1NpZGViYXJPcGVuIiwic3RhdGUiLCJzaWRlYmFyIiwic3giLCJtdCIsInB4IiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwicHQiLCJkaXNwbGF5Iiwic2Nyb2xsYmFyV2lkdGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiaXNDaGF0T3duZXIiLCJhbGlnbkl0ZW1zIiwiYmdjb2xvciIsImNvbG9yIiwibWF4V2lkdGgiLCJwIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2l0aW9uIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJtYiIsInNlbnRCeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContactUs/Job-Seeker/ChatBox/content.tsx\n"));

/***/ })

});