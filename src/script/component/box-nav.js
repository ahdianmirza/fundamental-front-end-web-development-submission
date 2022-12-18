class BoxNav extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="brand">
                <a href="#" class="brand-name">Nanya<span>Film</span></a>
            </div>
            <nav class="menu-nav">
                <ul>
                    <li>
                        <i class="fa-regular fa-arrow-trend-up"></i>
                        <a href="#trending">Trending</a>
                    </li>
                    <li>
                        <i class="fa-regular fa-play"></i>
                        <a href="#now-playing">Now Playing</a>
                    </li>
                    <li>
                        <i class="fa-regular fa-clock"></i>
                        <a href="#upcoming">Upcoming</a>
                    </li>
                </ul>
            </nav>
            <div class="toggle-menu">
                <i class="ri-menu-fill"></i>
            </div>
        `;
    }
}

customElements.define('box-nav', BoxNav);