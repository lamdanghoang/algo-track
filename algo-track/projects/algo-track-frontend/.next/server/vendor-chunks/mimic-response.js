"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mimic-response";
exports.ids = ["vendor-chunks/mimic-response"];
exports.modules = {

/***/ "(ssr)/./node_modules/mimic-response/index.js":
/*!**********************************************!*\
  !*** ./node_modules/mimic-response/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\n// We define these manually to ensure they're always copied\n// even if they would move up the prototype chain\n// https://nodejs.org/api/http.html#http_class_http_incomingmessage\nconst knownProps = [\n\t'destroy',\n\t'setTimeout',\n\t'socket',\n\t'headers',\n\t'trailers',\n\t'rawHeaders',\n\t'statusCode',\n\t'httpVersion',\n\t'httpVersionMinor',\n\t'httpVersionMajor',\n\t'rawTrailers',\n\t'statusMessage'\n];\n\nmodule.exports = (fromStream, toStream) => {\n\tconst fromProps = new Set(Object.keys(fromStream).concat(knownProps));\n\n\tfor (const prop of fromProps) {\n\t\t// Don't overwrite existing properties\n\t\tif (prop in toStream) {\n\t\t\tcontinue;\n\t\t}\n\n\t\ttoStream[prop] = typeof fromStream[prop] === 'function' ? fromStream[prop].bind(fromStream) : fromStream[prop];\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWltaWMtcmVzcG9uc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhY2tpdF92Mi8uL25vZGVfbW9kdWxlcy9taW1pYy1yZXNwb25zZS9pbmRleC5qcz9iZGI5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gV2UgZGVmaW5lIHRoZXNlIG1hbnVhbGx5IHRvIGVuc3VyZSB0aGV5J3JlIGFsd2F5cyBjb3BpZWRcbi8vIGV2ZW4gaWYgdGhleSB3b3VsZCBtb3ZlIHVwIHRoZSBwcm90b3R5cGUgY2hhaW5cbi8vIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfY2xhc3NfaHR0cF9pbmNvbWluZ21lc3NhZ2VcbmNvbnN0IGtub3duUHJvcHMgPSBbXG5cdCdkZXN0cm95Jyxcblx0J3NldFRpbWVvdXQnLFxuXHQnc29ja2V0Jyxcblx0J2hlYWRlcnMnLFxuXHQndHJhaWxlcnMnLFxuXHQncmF3SGVhZGVycycsXG5cdCdzdGF0dXNDb2RlJyxcblx0J2h0dHBWZXJzaW9uJyxcblx0J2h0dHBWZXJzaW9uTWlub3InLFxuXHQnaHR0cFZlcnNpb25NYWpvcicsXG5cdCdyYXdUcmFpbGVycycsXG5cdCdzdGF0dXNNZXNzYWdlJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnJvbVN0cmVhbSwgdG9TdHJlYW0pID0+IHtcblx0Y29uc3QgZnJvbVByb3BzID0gbmV3IFNldChPYmplY3Qua2V5cyhmcm9tU3RyZWFtKS5jb25jYXQoa25vd25Qcm9wcykpO1xuXG5cdGZvciAoY29uc3QgcHJvcCBvZiBmcm9tUHJvcHMpIHtcblx0XHQvLyBEb24ndCBvdmVyd3JpdGUgZXhpc3RpbmcgcHJvcGVydGllc1xuXHRcdGlmIChwcm9wIGluIHRvU3RyZWFtKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0b1N0cmVhbVtwcm9wXSA9IHR5cGVvZiBmcm9tU3RyZWFtW3Byb3BdID09PSAnZnVuY3Rpb24nID8gZnJvbVN0cmVhbVtwcm9wXS5iaW5kKGZyb21TdHJlYW0pIDogZnJvbVN0cmVhbVtwcm9wXTtcblx0fVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mimic-response/index.js\n");

/***/ })

};
;