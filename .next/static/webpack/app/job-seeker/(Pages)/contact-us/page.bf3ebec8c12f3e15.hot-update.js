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

/***/ "(app-pages-browser)/./src/components/ContactUs/Job-Seeker/ChatBox/chatboxInput.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/ContactUs/Job-Seeker/ChatBox/chatboxInput.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.scss */ \"(app-pages-browser)/./src/components/ContactUs/Job-Seeker/ChatBox/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_Chatbox_sendMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/Chatbox/sendMessage */ \"(app-pages-browser)/./src/assets/Chatbox/sendMessage.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ChatboxInput = (param)=>{\n    let { sendANewMessage } = param;\n    _s();\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const doSendMessage = (e)=>{\n        e.preventDefault();\n        if (newMessage && newMessage.length > 0) {\n            const newMessagePayload = {\n                sentAt: new Date(),\n                sentBy: \"Me\",\n                isChatOwner: true,\n                text: newMessage\n            };\n            sendANewMessage(newMessagePayload);\n            setNewMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            component: \"form\",\n            sx: {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                position: \"relative\",\n                zIndex: 20,\n                mx: \"0.75rem\",\n                my: \"0.75rem\",\n                border: \"1px solid black\",\n                overflow: \"hidden\",\n                borderRadius: \"999px\",\n                bgcolor: \"#cecece\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: newMessage,\n                    onChange: (e)=>setNewMessage(e.target.value),\n                    placeholder: \"Write your Message Here\",\n                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formInput)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\chatboxInput.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        width: \"3rem\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onClick: (e)=>doSendMessage(e),\n                        onSubmit: (e)=>doSendMessage(e),\n                        disableRipple: true,\n                        sx: {\n                            \"&:hover\": {\n                                bgcolor: \"inherit\",\n                                boxShadow: \"none\"\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_Chatbox_sendMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\chatboxInput.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\chatboxInput.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\chatboxInput.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hasna\\\\Downloads\\\\Map Dashboard MUI\\\\src\\\\components\\\\ContactUs\\\\Job-Seeker\\\\ChatBox\\\\chatboxInput.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ChatboxInput, \"XKYF7c9cy2B2z7IihwwqYiWFJSA=\");\n_c = ChatboxInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatboxInput);\nvar _c;\n$RefreshReg$(_c, \"ChatboxInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RVcy9Kb2ItU2Vla2VyL0NoYXRCb3gvY2hhdGJveElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUVJO0FBQ0g7QUFDaUI7QUFNMUQsTUFBTU0sZUFBZTtRQUFDLEVBQUVDLGVBQWUsRUFBcUI7O0lBQzFELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNUyxnQkFBZ0IsQ0FBQ0M7UUFDckJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSUosY0FBY0EsV0FBV0ssTUFBTSxHQUFHLEdBQUc7WUFDdkMsTUFBTUMsb0JBQW9CO2dCQUN4QkMsUUFBUSxJQUFJQztnQkFDWkMsUUFBUTtnQkFDUkMsYUFBYTtnQkFDYkMsTUFBTVg7WUFDUjtZQUNBRCxnQkFBZ0JPO1lBQ2hCTCxjQUFjO1FBQ2hCO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ1Asc0ZBQUdBO1lBQ0ZrQixXQUFVO1lBQ1ZDLElBQUk7Z0JBQ0ZDLFNBQVM7Z0JBQ1RDLGdCQUFnQjtnQkFDaEJDLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZDLFFBQVE7Z0JBQ1JDLElBQUk7Z0JBQ0pDLElBQUk7Z0JBQ0pDLFFBQVE7Z0JBQ1JDLFVBQVU7Z0JBQ1ZDLGNBQWM7Z0JBQ2RDLFNBQVM7WUFDWDs7OEJBRUEsOERBQUNDO29CQUNDQyxNQUFLO29CQUNMQyxPQUFPM0I7b0JBQ1A0QixVQUFVLENBQUN6QixJQUFNRixjQUFjRSxFQUFFMEIsTUFBTSxDQUFDRixLQUFLO29CQUM3Q0csYUFBWTtvQkFDWkMsV0FBV25DLHFFQUFnQjs7Ozs7OzhCQUU3Qiw4REFBQ0Ysc0ZBQUdBO29CQUFDbUIsSUFBSTt3QkFBRUMsU0FBUzt3QkFBUUUsWUFBWTt3QkFBVWlCLE9BQU87b0JBQU87OEJBQzlELDRFQUFDdEMsc0ZBQU1BO3dCQUNMdUMsU0FBUyxDQUFDL0IsSUFBTUQsY0FBY0M7d0JBQzlCZ0MsVUFBVSxDQUFDaEMsSUFBTUQsY0FBY0M7d0JBQy9CaUMsYUFBYTt3QkFDYnZCLElBQUk7NEJBQ0YsV0FBVztnQ0FDVFcsU0FBUztnQ0FDVGEsV0FBVzs0QkFDYjt3QkFDRjtrQ0FFQSw0RUFBQ3hDLG1FQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQjtHQTFETUM7S0FBQUE7QUE0RE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdFVzL0pvYi1TZWVrZXIvQ2hhdEJveC9jaGF0Ym94SW5wdXQudHN4PzI2YmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIkAvdXRpbHMvbWVzc2FnZXNcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBTZW5kTWVzc2FnZVNWRyBmcm9tIFwiQC9hc3NldHMvQ2hhdGJveC9zZW5kTWVzc2FnZVwiO1xyXG5cclxuaW50ZXJmYWNlIENoYXRib3hJbnB1dFByb3BzIHtcclxuICBzZW5kQU5ld01lc3NhZ2U6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDaGF0Ym94SW5wdXQgPSAoeyBzZW5kQU5ld01lc3NhZ2UgfTogQ2hhdGJveElucHV0UHJvcHMpID0+IHtcclxuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBkb1NlbmRNZXNzYWdlID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobmV3TWVzc2FnZSAmJiBuZXdNZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgbmV3TWVzc2FnZVBheWxvYWQgPSB7XHJcbiAgICAgICAgc2VudEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHNlbnRCeTogXCJNZVwiLFxyXG4gICAgICAgIGlzQ2hhdE93bmVyOiB0cnVlLFxyXG4gICAgICAgIHRleHQ6IG5ld01lc3NhZ2UsXHJcbiAgICAgIH07XHJcbiAgICAgIHNlbmRBTmV3TWVzc2FnZShuZXdNZXNzYWdlUGF5bG9hZCk7XHJcbiAgICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgekluZGV4OiAyMCxcclxuICAgICAgICAgIG14OiBcIjAuNzVyZW1cIixcclxuICAgICAgICAgIG15OiBcIjAuNzVyZW1cIixcclxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjk5OXB4XCIsXHJcbiAgICAgICAgICBiZ2NvbG9yOiBcIiNjZWNlY2VcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17bmV3TWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgTWVzc2FnZSBIZXJlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHdpZHRoOiBcIjNyZW1cIiB9fT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRvU2VuZE1lc3NhZ2UoZSl9XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4gZG9TZW5kTWVzc2FnZShlKX1cclxuICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNlbmRNZXNzYWdlU1ZHIC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdGJveElucHV0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkJ1dHRvbiIsInN0eWxlcyIsIlNlbmRNZXNzYWdlU1ZHIiwiQ2hhdGJveElucHV0Iiwic2VuZEFOZXdNZXNzYWdlIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJkb1NlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibmV3TWVzc2FnZVBheWxvYWQiLCJzZW50QXQiLCJEYXRlIiwic2VudEJ5IiwiaXNDaGF0T3duZXIiLCJ0ZXh0IiwiY29tcG9uZW50Iiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJteCIsIm15IiwiYm9yZGVyIiwib3ZlcmZsb3ciLCJib3JkZXJSYWRpdXMiLCJiZ2NvbG9yIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwiZm9ybUlucHV0Iiwid2lkdGgiLCJvbkNsaWNrIiwib25TdWJtaXQiLCJkaXNhYmxlUmlwcGxlIiwiYm94U2hhZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContactUs/Job-Seeker/ChatBox/chatboxInput.tsx\n"));

/***/ })

});