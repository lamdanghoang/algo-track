"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/quick-lru";
exports.ids = ["vendor-chunks/quick-lru"];
exports.modules = {

/***/ "(ssr)/./node_modules/quick-lru/index.js":
/*!*****************************************!*\
  !*** ./node_modules/quick-lru/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nclass QuickLRU {\n\tconstructor(options = {}) {\n\t\tif (!(options.maxSize && options.maxSize > 0)) {\n\t\t\tthrow new TypeError('`maxSize` must be a number greater than 0');\n\t\t}\n\n\t\tthis.maxSize = options.maxSize;\n\t\tthis.onEviction = options.onEviction;\n\t\tthis.cache = new Map();\n\t\tthis.oldCache = new Map();\n\t\tthis._size = 0;\n\t}\n\n\t_set(key, value) {\n\t\tthis.cache.set(key, value);\n\t\tthis._size++;\n\n\t\tif (this._size >= this.maxSize) {\n\t\t\tthis._size = 0;\n\n\t\t\tif (typeof this.onEviction === 'function') {\n\t\t\t\tfor (const [key, value] of this.oldCache.entries()) {\n\t\t\t\t\tthis.onEviction(key, value);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.oldCache = this.cache;\n\t\t\tthis.cache = new Map();\n\t\t}\n\t}\n\n\tget(key) {\n\t\tif (this.cache.has(key)) {\n\t\t\treturn this.cache.get(key);\n\t\t}\n\n\t\tif (this.oldCache.has(key)) {\n\t\t\tconst value = this.oldCache.get(key);\n\t\t\tthis.oldCache.delete(key);\n\t\t\tthis._set(key, value);\n\t\t\treturn value;\n\t\t}\n\t}\n\n\tset(key, value) {\n\t\tif (this.cache.has(key)) {\n\t\t\tthis.cache.set(key, value);\n\t\t} else {\n\t\t\tthis._set(key, value);\n\t\t}\n\n\t\treturn this;\n\t}\n\n\thas(key) {\n\t\treturn this.cache.has(key) || this.oldCache.has(key);\n\t}\n\n\tpeek(key) {\n\t\tif (this.cache.has(key)) {\n\t\t\treturn this.cache.get(key);\n\t\t}\n\n\t\tif (this.oldCache.has(key)) {\n\t\t\treturn this.oldCache.get(key);\n\t\t}\n\t}\n\n\tdelete(key) {\n\t\tconst deleted = this.cache.delete(key);\n\t\tif (deleted) {\n\t\t\tthis._size--;\n\t\t}\n\n\t\treturn this.oldCache.delete(key) || deleted;\n\t}\n\n\tclear() {\n\t\tthis.cache.clear();\n\t\tthis.oldCache.clear();\n\t\tthis._size = 0;\n\t}\n\n\t* keys() {\n\t\tfor (const [key] of this) {\n\t\t\tyield key;\n\t\t}\n\t}\n\n\t* values() {\n\t\tfor (const [, value] of this) {\n\t\t\tyield value;\n\t\t}\n\t}\n\n\t* [Symbol.iterator]() {\n\t\tfor (const item of this.cache) {\n\t\t\tyield item;\n\t\t}\n\n\t\tfor (const item of this.oldCache) {\n\t\t\tconst [key] = item;\n\t\t\tif (!this.cache.has(key)) {\n\t\t\t\tyield item;\n\t\t\t}\n\t\t}\n\t}\n\n\tget size() {\n\t\tlet oldCacheSize = 0;\n\t\tfor (const key of this.oldCache.keys()) {\n\t\t\tif (!this.cache.has(key)) {\n\t\t\t\toldCacheSize++;\n\t\t\t}\n\t\t}\n\n\t\treturn Math.min(this._size + oldCacheSize, this.maxSize);\n\t}\n}\n\nmodule.exports = QuickLRU;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcXVpY2stbHJ1L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhY2tpdF92Mi8uL25vZGVfbW9kdWxlcy9xdWljay1scnUvaW5kZXguanM/OTRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFF1aWNrTFJVIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cdFx0aWYgKCEob3B0aW9ucy5tYXhTaXplICYmIG9wdGlvbnMubWF4U2l6ZSA+IDApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdgbWF4U2l6ZWAgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubWF4U2l6ZSA9IG9wdGlvbnMubWF4U2l6ZTtcblx0XHR0aGlzLm9uRXZpY3Rpb24gPSBvcHRpb25zLm9uRXZpY3Rpb247XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLm9sZENhY2hlID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMuX3NpemUgPSAwO1xuXHR9XG5cblx0X3NldChrZXksIHZhbHVlKSB7XG5cdFx0dGhpcy5jYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0dGhpcy5fc2l6ZSsrO1xuXG5cdFx0aWYgKHRoaXMuX3NpemUgPj0gdGhpcy5tYXhTaXplKSB7XG5cdFx0XHR0aGlzLl9zaXplID0gMDtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm9uRXZpY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5vbGRDYWNoZS5lbnRyaWVzKCkpIHtcblx0XHRcdFx0XHR0aGlzLm9uRXZpY3Rpb24oa2V5LCB2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbGRDYWNoZSA9IHRoaXMuY2FjaGU7XG5cdFx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHRcdH1cblx0fVxuXG5cdGdldChrZXkpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KGtleSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2xkQ2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5vbGRDYWNoZS5nZXQoa2V5KTtcblx0XHRcdHRoaXMub2xkQ2FjaGUuZGVsZXRlKGtleSk7XG5cdFx0XHR0aGlzLl9zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0c2V0KGtleSwgdmFsdWUpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0dGhpcy5jYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NldChrZXksIHZhbHVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhhcyhrZXkpIHtcblx0XHRyZXR1cm4gdGhpcy5jYWNoZS5oYXMoa2V5KSB8fCB0aGlzLm9sZENhY2hlLmhhcyhrZXkpO1xuXHR9XG5cblx0cGVlayhrZXkpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KGtleSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub2xkQ2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLm9sZENhY2hlLmdldChrZXkpO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZShrZXkpIHtcblx0XHRjb25zdCBkZWxldGVkID0gdGhpcy5jYWNoZS5kZWxldGUoa2V5KTtcblx0XHRpZiAoZGVsZXRlZCkge1xuXHRcdFx0dGhpcy5fc2l6ZS0tO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm9sZENhY2hlLmRlbGV0ZShrZXkpIHx8IGRlbGV0ZWQ7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmNhY2hlLmNsZWFyKCk7XG5cdFx0dGhpcy5vbGRDYWNoZS5jbGVhcigpO1xuXHRcdHRoaXMuX3NpemUgPSAwO1xuXHR9XG5cblx0KiBrZXlzKCkge1xuXHRcdGZvciAoY29uc3QgW2tleV0gb2YgdGhpcykge1xuXHRcdFx0eWllbGQga2V5O1xuXHRcdH1cblx0fVxuXG5cdCogdmFsdWVzKCkge1xuXHRcdGZvciAoY29uc3QgWywgdmFsdWVdIG9mIHRoaXMpIHtcblx0XHRcdHlpZWxkIHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdCogW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMuY2FjaGUpIHtcblx0XHRcdHlpZWxkIGl0ZW07XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHRoaXMub2xkQ2FjaGUpIHtcblx0XHRcdGNvbnN0IFtrZXldID0gaXRlbTtcblx0XHRcdGlmICghdGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0XHR5aWVsZCBpdGVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldCBzaXplKCkge1xuXHRcdGxldCBvbGRDYWNoZVNpemUgPSAwO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIHRoaXMub2xkQ2FjaGUua2V5cygpKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdFx0b2xkQ2FjaGVTaXplKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgubWluKHRoaXMuX3NpemUgKyBvbGRDYWNoZVNpemUsIHRoaXMubWF4U2l6ZSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWlja0xSVTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/quick-lru/index.js\n");

/***/ })

};
;