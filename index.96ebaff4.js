const e={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery")};e.form.addEventListener("submit",(function(n){n.preventDefault(),(a=e.form.elements.searchQuery.value,fetch(`https://pixabay.com/api/?key=34712470-649d4f955d7295175d07d13ae&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`).then((e=>e.json()))).then((n=>{0!==n.total?(e.gallery.innerHTML="",function(n){const a=n.hits.map((({webformatURL:e,largeImageURL:n,tags:a,likes:t,views:r,comments:o,downloads:s})=>`<div class="photo-card">\n                <img src="${e}" alt="${a}" loading="lazy" />\n                <div class="info">\n                <p class="info-item">\n                <b>Likes</b></br> ${t}\n                </p>\n                <p class="info-item">\n                <b>Views</b></br> ${r}\n                </p>\n                <p class="info-item">\n                <b>Comments</b></br> ${o}\n                </p>\n                <p class="info-item">\n                <b>Downloads</b></br> ${s}\n                </p>\n            </div>\n            </div>`)).join("");e.gallery.insertAdjacentHTML("beforeend",a)}(n)):alert("Sorry, there are no images matching your search query. Please try again.")}));var a}));
//# sourceMappingURL=index.96ebaff4.js.map