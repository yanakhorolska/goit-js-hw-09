!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));t.body.style.backgroundColor=e,1,t.startBtn.setAttribute("disabled","")}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.191ed059.js.map