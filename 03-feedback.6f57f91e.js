function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(S,t),l?b(e):a}function x(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function S(){var e=v();if(x(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function T(e){return f=void 0,p&&r?b(e):(r=o=void 0,a)}function h(){var e=v(),n=x(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(d)return f=setTimeout(S,t),b(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?a:T(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")},j={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(b.textarea.value=t.message||"",b.email.value=t.email||"")}(),b.form.addEventListener("submit",(function(e){for(key in e.preventDefault(),console.log("Значение объекта с данными",j),e.currentTarget.reset(),j)delete j[key];localStorage.removeItem("feedback-form-state")})),b.form.addEventListener("input",(e=>{j[e.target.name]=e.target.value})),b.form.addEventListener("input",e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500));
//# sourceMappingURL=03-feedback.6f57f91e.js.map
