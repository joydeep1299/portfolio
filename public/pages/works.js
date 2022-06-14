let navMenuToggler=document.querySelector(".menu-icon");navMenuToggler.addEventListener("click",()=>{let e=document.querySelector("#topbar .navigation");e.classList.toggle("navigation--active");let n=e.children;for(let t=0;t<n.length;t++)n[t].addEventListener("click",()=>{e.classList.remove("navigation--active")})});let msgMeBtn=document.querySelector(".navigation .message");msgMeBtn.addEventListener("click",e=>{e.preventDefault();let n=document.querySelector(".modal"),t=document.querySelector("body"),a=document.querySelector(".modal .cross");n.style.display="block",t.style.overflow="hidden",a.addEventListener("click",()=>{t.style.overflow="unset",n.style.display="none"})});let fixedOnScreenBtn=document.querySelector(".fixed-on-screen .icon");fixedOnScreenBtn.addEventListener("click",()=>{document.querySelector(" .fixed-on-screen .body").classList.toggle("body--active")});let jsonUrl="../works.json";async function getWorkData(e){let n=await fetch(e);return await n.json()}function addWorkToHtml(e){let n=document.querySelector(".works-container");for(let t=0;t<e.works.length;t++)n.innerHTML+=`\n        <div class="card" data-filter="${e.works[t].dataFilter}">\n                            <div class="body">\n                                <div class="topbar">\n                                    <div class="dots">\n                                        <div></div>\n                                        <div></div>\n                                        <div></div>\n                                    </div>\n                                    \x3c!-- Project name --\x3e\n                                    <div class="project-name">\n                                        <h5>${e.works[t].title}</h5>\n                                    </div>\n                                </div>\n                                \x3c!-- Project image --\x3e\n                                <img src=".${e.works[t].image}" alt="" loading="lazy">\n                                <div class="footer">\n                                    <a href="${e.works[t].liveLink}" class="see-live" target="_blank">\n                                        <div class="red-dot"></div>\n                                        <p>See Live</p>\n                                    </a>\n                                    <a href=".${e.works[t].codeLink}" class="code" target="_blank">&lt;/&gt; ${e.works[t].btn[0]}</a>\n                                </div>\n                            </div>\n                            \x3c!-- Project Tags --\x3e\n                        </div>\n        `}async function addWorkDataToScreen(){addWorkToHtml(await getWorkData(jsonUrl))}addWorkDataToScreen();let filterSelect=document.querySelector("#works-filter");filterSelect.addEventListener("change",()=>{let e=filterSelect.value.toLowerCase().replace(/\s/g,"");if(document.querySelector(".works-container").innerHTML="","all"==e)addWorkDataToScreen();else{!async function(){let n=await getWorkData(jsonUrl);for(let t=0;t<n.works.length;t++){let a=document.querySelector(".works-container");n.works[t].dataFilter==e&&(a.innerHTML+=`\n                        <div class="card" data-filter="${n.works[t].dataFilter}">\n                                            <div class="body">\n                                                <div class="topbar">\n                                                    <div class="dots">\n                                                        <div></div>\n                                                        <div></div>\n                                                        <div></div>\n                                                    </div>\n                                                    \x3c!-- Project name --\x3e\n                                                    <div class="project-name">\n                                                        <h5>${n.works[t].title}</h5>\n                                                    </div>\n                                                </div>\n                                                \x3c!-- Project image --\x3e\n                                                <img src=".${n.works[t].image}" alt="" loading="lazy">\n                                                <div class="footer">\n                                                    <a href="${n.works[t].liveLink}" class="see-live" target="_blank">\n                                                        <div class="red-dot"></div>\n                                                        <p>See Live</p>\n                                                    </a>\n                                                    <a href="${n.works[t].codeLink}" class="code" target="_blank">&lt;/&gt; ${n.works[t].btn[0]}</a>\n                                            </div>\n                                            \x3c!-- Project Tags --\x3e\n                                        </div>\n                        `)}}()}});