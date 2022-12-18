class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="credit">
                <p>Movie Web API by - Ahdian Mirza Azri</p>
            </div>
        `;
    }
}

customElements.define('footer-section', Footer);