function iniciarApp(){mostrarServicios()}async function mostrarServicios(){try{const o=await fetch("./servicios.json"),n=await o.json();console.log(n);const{servicios:t}=n;t.forEach(o=>{const{id:n,nombre:t,precio:c}=o;document.createElement("P").textContent=t})}catch(o){console.log(o)}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=bundle.js.map
