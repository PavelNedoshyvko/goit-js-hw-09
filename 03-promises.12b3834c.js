!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("h6c0i"),i={form:document.querySelector(".form"),createPromisesBtn:document.querySelector(".form > button")};function s(e,t){var o=Math.random()>.3;return new Promise((function(n,r){o?setTimeout((function(){n({position:e,delay:t})}),t):setTimeout((function(){r({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();var t=i.form.elements.delay.valueAsNumber,o=i.form.elements.step.valueAsNumber,n=i.form.elements.amount.valueAsNumber;i.createPromisesBtn.disabled=!0,setTimeout((function(){i.createPromisesBtn.disabled=!1}),t+o*n);for(var a=1;a<=n;a+=1)s(a,t).then((function(e){var t=e.position,o=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(e){var t=e.position,o=e.delay;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=o})),i.createPromisesBtn.disabled=!1}();
//# sourceMappingURL=03-promises.12b3834c.js.map
