const t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),e={interval:null,currentColor:null,start(){this.change(),this.interval=setInterval(this.change.bind(this),1e3)},stop(){clearInterval(this.interval),t.disabled=!1},change(){t.disabled=!0;do{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}while(this.currentColor===document.body.style.backgroundColor);this.currentColor=document.body.style.backgroundColor,console.log(`%c ${document.body.style.backgroundColor}`,`color: ${document.body.style.backgroundColor}`)}};t.addEventListener("click",(t=>{t.target.disabled=!0,e.start()})),o.addEventListener("click",(()=>{e.stop()}));
//# sourceMappingURL=01-color-switcher.ba72da0d.js.map
