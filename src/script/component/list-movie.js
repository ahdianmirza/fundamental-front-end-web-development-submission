class ListMovie extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class"card-movie"> 
                <img src="${IMAGE_URL+poster_path}" alt="${title}">
                <div class="movie-card-info">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('list-movie', ListMovie);