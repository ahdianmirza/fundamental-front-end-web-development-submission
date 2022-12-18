class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <h1>Welcome</h1>

            <div class="header-text">
                <h1>Let’s Watch The Movie<br>You Want</h1>
                <p>Choose your favorite movie and get a fun<br>movie
                watching experience.</p>
            </div>

            <div class="col-button">
                <button class="button-show-list" type="button" name="show-list">Show List</button>
            </div>
        `;
    }
}

customElements.define('hero-section', Hero);