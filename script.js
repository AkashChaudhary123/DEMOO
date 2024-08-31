function searchFunction() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const title = movie.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
}
