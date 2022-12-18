const main = () => {
    const API_KEY = 'api_key=040ae6244c953cf97e0d576355da8f2f';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const TRENDING_API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    const movieSection = document.querySelector('list-movie');

    const getMovie = async (url) => {
        try {
            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllMovies(responseJson.results);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    }

    const renderAllMovies = (data) => {
        movieSection.innerHTML = '';

        data.forEach(movie => {
            const {title, poster_path, overview} = movie;
            const movieElement = document.createElement('div');
            movieElement.classList.add('card-movie');
            movieElement.innerHTML = `
                <img src="${IMAGE_URL+poster_path}" alt="${title}">
                <div class="movie-card-info">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                </div>
            `;

            movieSection.appendChild(movieElement);
        });
    };

    const showResponseMessage = (message = 'Something wrong') => {
        alert(message);
    };

    const menuBar = document.querySelector('.toggle-menu');
    const menuNav = document.querySelector('.menu-nav');
    
    menuBar.addEventListener('click', () => {
        menuNav.classList.toggle('menu-active');
    });

    getMovie(TRENDING_API_URL);
}

export default main;