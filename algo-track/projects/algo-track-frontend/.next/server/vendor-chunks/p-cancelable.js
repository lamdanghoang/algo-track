"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-cancelable";
exports.ids = ["vendor-chunks/p-cancelable"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-cancelable/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-cancelable/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nclass CancelError extends Error {\n\tconstructor(reason) {\n\t\tsuper(reason || 'Promise was canceled');\n\t\tthis.name = 'CancelError';\n\t}\n\n\tget isCanceled() {\n\t\treturn true;\n\t}\n}\n\nclass PCancelable {\n\tstatic fn(userFn) {\n\t\treturn (...arguments_) => {\n\t\t\treturn new PCancelable((resolve, reject, onCancel) => {\n\t\t\t\targuments_.push(onCancel);\n\t\t\t\t// eslint-disable-next-line promise/prefer-await-to-then\n\t\t\t\tuserFn(...arguments_).then(resolve, reject);\n\t\t\t});\n\t\t};\n\t}\n\n\tconstructor(executor) {\n\t\tthis._cancelHandlers = [];\n\t\tthis._isPending = true;\n\t\tthis._isCanceled = false;\n\t\tthis._rejectOnCancel = true;\n\n\t\tthis._promise = new Promise((resolve, reject) => {\n\t\t\tthis._reject = reject;\n\n\t\t\tconst onResolve = value => {\n\t\t\t\tif (!this._isCanceled || !onCancel.shouldReject) {\n\t\t\t\t\tthis._isPending = false;\n\t\t\t\t\tresolve(value);\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tconst onReject = error => {\n\t\t\t\tthis._isPending = false;\n\t\t\t\treject(error);\n\t\t\t};\n\n\t\t\tconst onCancel = handler => {\n\t\t\t\tif (!this._isPending) {\n\t\t\t\t\tthrow new Error('The `onCancel` handler was attached after the promise settled.');\n\t\t\t\t}\n\n\t\t\t\tthis._cancelHandlers.push(handler);\n\t\t\t};\n\n\t\t\tObject.defineProperties(onCancel, {\n\t\t\t\tshouldReject: {\n\t\t\t\t\tget: () => this._rejectOnCancel,\n\t\t\t\t\tset: boolean => {\n\t\t\t\t\t\tthis._rejectOnCancel = boolean;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\n\t\t\treturn executor(onResolve, onReject, onCancel);\n\t\t});\n\t}\n\n\tthen(onFulfilled, onRejected) {\n\t\t// eslint-disable-next-line promise/prefer-await-to-then\n\t\treturn this._promise.then(onFulfilled, onRejected);\n\t}\n\n\tcatch(onRejected) {\n\t\treturn this._promise.catch(onRejected);\n\t}\n\n\tfinally(onFinally) {\n\t\treturn this._promise.finally(onFinally);\n\t}\n\n\tcancel(reason) {\n\t\tif (!this._isPending || this._isCanceled) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis._isCanceled = true;\n\n\t\tif (this._cancelHandlers.length > 0) {\n\t\t\ttry {\n\t\t\t\tfor (const handler of this._cancelHandlers) {\n\t\t\t\t\thandler();\n\t\t\t\t}\n\t\t\t} catch (error) {\n\t\t\t\tthis._reject(error);\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\n\t\tif (this._rejectOnCancel) {\n\t\t\tthis._reject(new CancelError(reason));\n\t\t}\n\t}\n\n\tget isCanceled() {\n\t\treturn this._isCanceled;\n\t}\n}\n\nObject.setPrototypeOf(PCancelable.prototype, Promise.prototype);\n\nmodule.exports = PCancelable;\nmodule.exports.CancelError = CancelError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1jYW5jZWxhYmxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYWNraXRfdjIvLi9ub2RlX21vZHVsZXMvcC1jYW5jZWxhYmxlL2luZGV4LmpzPzBhNTQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDYW5jZWxFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IocmVhc29uKSB7XG5cdFx0c3VwZXIocmVhc29uIHx8ICdQcm9taXNlIHdhcyBjYW5jZWxlZCcpO1xuXHRcdHRoaXMubmFtZSA9ICdDYW5jZWxFcnJvcic7XG5cdH1cblxuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5jbGFzcyBQQ2FuY2VsYWJsZSB7XG5cdHN0YXRpYyBmbih1c2VyRm4pIHtcblx0XHRyZXR1cm4gKC4uLmFyZ3VtZW50c18pID0+IHtcblx0XHRcdHJldHVybiBuZXcgUENhbmNlbGFibGUoKHJlc29sdmUsIHJlamVjdCwgb25DYW5jZWwpID0+IHtcblx0XHRcdFx0YXJndW1lbnRzXy5wdXNoKG9uQ2FuY2VsKTtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb21pc2UvcHJlZmVyLWF3YWl0LXRvLXRoZW5cblx0XHRcdFx0dXNlckZuKC4uLmFyZ3VtZW50c18pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuXHRcdHRoaXMuX2NhbmNlbEhhbmRsZXJzID0gW107XG5cdFx0dGhpcy5faXNQZW5kaW5nID0gdHJ1ZTtcblx0XHR0aGlzLl9pc0NhbmNlbGVkID0gZmFsc2U7XG5cdFx0dGhpcy5fcmVqZWN0T25DYW5jZWwgPSB0cnVlO1xuXG5cdFx0dGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuX3JlamVjdCA9IHJlamVjdDtcblxuXHRcdFx0Y29uc3Qgb25SZXNvbHZlID0gdmFsdWUgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuX2lzQ2FuY2VsZWQgfHwgIW9uQ2FuY2VsLnNob3VsZFJlamVjdCkge1xuXHRcdFx0XHRcdHRoaXMuX2lzUGVuZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHJlc29sdmUodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBvblJlamVjdCA9IGVycm9yID0+IHtcblx0XHRcdFx0dGhpcy5faXNQZW5kaW5nID0gZmFsc2U7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBvbkNhbmNlbCA9IGhhbmRsZXIgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuX2lzUGVuZGluZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBvbkNhbmNlbGAgaGFuZGxlciB3YXMgYXR0YWNoZWQgYWZ0ZXIgdGhlIHByb21pc2Ugc2V0dGxlZC4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2NhbmNlbEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHR9O1xuXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvbkNhbmNlbCwge1xuXHRcdFx0XHRzaG91bGRSZWplY3Q6IHtcblx0XHRcdFx0XHRnZXQ6ICgpID0+IHRoaXMuX3JlamVjdE9uQ2FuY2VsLFxuXHRcdFx0XHRcdHNldDogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9yZWplY3RPbkNhbmNlbCA9IGJvb2xlYW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGV4ZWN1dG9yKG9uUmVzb2x2ZSwgb25SZWplY3QsIG9uQ2FuY2VsKTtcblx0XHR9KTtcblx0fVxuXG5cdHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvbWlzZS9wcmVmZXItYXdhaXQtdG8tdGhlblxuXHRcdHJldHVybiB0aGlzLl9wcm9taXNlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuXHR9XG5cblx0Y2F0Y2gob25SZWplY3RlZCkge1xuXHRcdHJldHVybiB0aGlzLl9wcm9taXNlLmNhdGNoKG9uUmVqZWN0ZWQpO1xuXHR9XG5cblx0ZmluYWxseShvbkZpbmFsbHkpIHtcblx0XHRyZXR1cm4gdGhpcy5fcHJvbWlzZS5maW5hbGx5KG9uRmluYWxseSk7XG5cdH1cblxuXHRjYW5jZWwocmVhc29uKSB7XG5cdFx0aWYgKCF0aGlzLl9pc1BlbmRpbmcgfHwgdGhpcy5faXNDYW5jZWxlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2lzQ2FuY2VsZWQgPSB0cnVlO1xuXG5cdFx0aWYgKHRoaXMuX2NhbmNlbEhhbmRsZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLl9jYW5jZWxIYW5kbGVycykge1xuXHRcdFx0XHRcdGhhbmRsZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhpcy5fcmVqZWN0KGVycm9yKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9yZWplY3RPbkNhbmNlbCkge1xuXHRcdFx0dGhpcy5fcmVqZWN0KG5ldyBDYW5jZWxFcnJvcihyZWFzb24pKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNDYW5jZWxlZDtcblx0fVxufVxuXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoUENhbmNlbGFibGUucHJvdG90eXBlLCBQcm9taXNlLnByb3RvdHlwZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUENhbmNlbGFibGU7XG5tb2R1bGUuZXhwb3J0cy5DYW5jZWxFcnJvciA9IENhbmNlbEVycm9yO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-cancelable/index.js\n");

/***/ })

};
;