const t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),e={interval:null,currentColor:null,start(){this.change(),this.interval=setInterval(this.change,1e3)},stop(){clearInterval(this.interval)},change(){do{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}while(this.currentColor===document.body.style.backgroundColor);this.currentColor=document.body.style.backgroundColor,console.log(`%c ${document.body.style.backgroundColor}`,`color: ${document.body.style.backgroundColor}`)}};t.addEventListener("click",(t=>{t.target.disabled=!0,e.start()})),o.addEventListener("click",(()=>{t.disabled=!1,e.stop()}));
//# sourceMappingURL=01-color-switcher.d9c3e100.js.map
