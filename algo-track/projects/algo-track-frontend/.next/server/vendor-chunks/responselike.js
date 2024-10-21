"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/responselike";
exports.ids = ["vendor-chunks/responselike"];
exports.modules = {

/***/ "(ssr)/./node_modules/responselike/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/responselike/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst Readable = (__webpack_require__(/*! stream */ \"stream\").Readable);\nconst lowercaseKeys = __webpack_require__(/*! lowercase-keys */ \"(ssr)/./node_modules/lowercase-keys/index.js\");\n\nclass Response extends Readable {\n\tconstructor(statusCode, headers, body, url) {\n\t\tif (typeof statusCode !== 'number') {\n\t\t\tthrow new TypeError('Argument `statusCode` should be a number');\n\t\t}\n\t\tif (typeof headers !== 'object') {\n\t\t\tthrow new TypeError('Argument `headers` should be an object');\n\t\t}\n\t\tif (!(body instanceof Buffer)) {\n\t\t\tthrow new TypeError('Argument `body` should be a buffer');\n\t\t}\n\t\tif (typeof url !== 'string') {\n\t\t\tthrow new TypeError('Argument `url` should be a string');\n\t\t}\n\n\t\tsuper();\n\t\tthis.statusCode = statusCode;\n\t\tthis.headers = lowercaseKeys(headers);\n\t\tthis.body = body;\n\t\tthis.url = url;\n\t}\n\n\t_read() {\n\t\tthis.push(this.body);\n\t\tthis.push(null);\n\t}\n}\n\nmodule.exports = Response;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixpQkFBaUIsc0RBQTBCO0FBQzNDLHNCQUFzQixtQkFBTyxDQUFDLG9FQUFnQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYWNraXRfdjIvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL3NyYy9pbmRleC5qcz9mZDZkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhZGFibGUgPSByZXF1aXJlKCdzdHJlYW0nKS5SZWFkYWJsZTtcbmNvbnN0IGxvd2VyY2FzZUtleXMgPSByZXF1aXJlKCdsb3dlcmNhc2Uta2V5cycpO1xuXG5jbGFzcyBSZXNwb25zZSBleHRlbmRzIFJlYWRhYmxlIHtcblx0Y29uc3RydWN0b3Ioc3RhdHVzQ29kZSwgaGVhZGVycywgYm9keSwgdXJsKSB7XG5cdFx0aWYgKHR5cGVvZiBzdGF0dXNDb2RlICE9PSAnbnVtYmVyJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgYHN0YXR1c0NvZGVgIHNob3VsZCBiZSBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGhlYWRlcnMgIT09ICdvYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBgaGVhZGVyc2Agc2hvdWxkIGJlIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIShib2R5IGluc3RhbmNlb2YgQnVmZmVyKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgYGJvZHlgIHNob3VsZCBiZSBhIGJ1ZmZlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IGB1cmxgIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblxuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBsb3dlcmNhc2VLZXlzKGhlYWRlcnMpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdH1cblxuXHRfcmVhZCgpIHtcblx0XHR0aGlzLnB1c2godGhpcy5ib2R5KTtcblx0XHR0aGlzLnB1c2gobnVsbCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/responselike/src/index.js\n");

/***/ })

};
;