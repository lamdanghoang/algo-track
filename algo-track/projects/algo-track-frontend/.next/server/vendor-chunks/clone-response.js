"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/clone-response";
exports.ids = ["vendor-chunks/clone-response"];
exports.modules = {

/***/ "(ssr)/./node_modules/clone-response/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/clone-response/src/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst PassThrough = (__webpack_require__(/*! stream */ \"stream\").PassThrough);\nconst mimicResponse = __webpack_require__(/*! mimic-response */ \"(ssr)/./node_modules/mimic-response/index.js\");\n\nconst cloneResponse = response => {\n\tif (!(response && response.pipe)) {\n\t\tthrow new TypeError('Parameter `response` must be a response stream.');\n\t}\n\n\tconst clone = new PassThrough();\n\tmimicResponse(response, clone);\n\n\treturn response.pipe(clone);\n};\n\nmodule.exports = cloneResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2xvbmUtcmVzcG9uc2Uvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLG9CQUFvQix5REFBNkI7QUFDakQsc0JBQXNCLG1CQUFPLENBQUMsb0VBQWdCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFja2l0X3YyLy4vbm9kZV9tb2R1bGVzL2Nsb25lLXJlc3BvbnNlL3NyYy9pbmRleC5qcz9jNjM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFzc1Rocm91Z2ggPSByZXF1aXJlKCdzdHJlYW0nKS5QYXNzVGhyb3VnaDtcbmNvbnN0IG1pbWljUmVzcG9uc2UgPSByZXF1aXJlKCdtaW1pYy1yZXNwb25zZScpO1xuXG5jb25zdCBjbG9uZVJlc3BvbnNlID0gcmVzcG9uc2UgPT4ge1xuXHRpZiAoIShyZXNwb25zZSAmJiByZXNwb25zZS5waXBlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1BhcmFtZXRlciBgcmVzcG9uc2VgIG11c3QgYmUgYSByZXNwb25zZSBzdHJlYW0uJyk7XG5cdH1cblxuXHRjb25zdCBjbG9uZSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuXHRtaW1pY1Jlc3BvbnNlKHJlc3BvbnNlLCBjbG9uZSk7XG5cblx0cmV0dXJuIHJlc3BvbnNlLnBpcGUoY2xvbmUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlc3BvbnNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/clone-response/src/index.js\n");

/***/ })

};
;