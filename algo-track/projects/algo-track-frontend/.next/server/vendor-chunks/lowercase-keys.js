"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/lowercase-keys";
exports.ids = ["vendor-chunks/lowercase-keys"];
exports.modules = {

/***/ "(ssr)/./node_modules/lowercase-keys/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lowercase-keys/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\nmodule.exports = object => {\n\tconst result = {};\n\n\tfor (const [key, value] of Object.entries(object)) {\n\t\tresult[key.toLowerCase()] = value;\n\t}\n\n\treturn result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbG93ZXJjYXNlLWtleXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhY2tpdF92Mi8uL25vZGVfbW9kdWxlcy9sb3dlcmNhc2Uta2V5cy9pbmRleC5qcz85YzBlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0ID0+IHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuXHRcdHJlc3VsdFtrZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/lowercase-keys/index.js\n");

/***/ })

};
;