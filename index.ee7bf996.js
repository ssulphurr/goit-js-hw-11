const e={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery")};e.form.addEventListener("submit",(function(n){n.preventDefault(),(a=e.form.elements.searchQuery.value,fetch(`https://pixabay.com/api/?key=34712470-649d4f955d7295175d07d13ae&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`).then((e=>e.json()))).then((n=>{0===n.total&&alert("Sorry, there are no images matching your search query. Please try again."),function(n){const a=n.hits.map((({webformatURL:e,largeImageURL:n,tags:a,likes:o,views:t,comments:s,downloads:r})=>`<div class="photo-card">\n                <img src="${e}" alt="${a}" loading="lazy" />\n                <div class="info">\n                <p class="info-item">\n                <b>Likes</b> ${o}\n                </p>\n                <p class="info-item">\n                <b>Views</b> ${t}\n                </p>\n                <p class="info-item">\n                <b>Comments</b> ${s}\n                </p>\n                <p class="info-item">\n                <b>Downloads</b> ${r}\n                </p>\n            </div>\n            </div>`)).join("");e.gallery.insertAdjacentHTML("beforeend",a),console.log(5)}(n)}));var a}));
//# sourceMappingURL=index.ee7bf996.js.map
