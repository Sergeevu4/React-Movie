// Переключатель свойства у выбранного фильма
export const togglePropertyWillWatch = (movie) => ({
  ...movie,
  willWatch: !movie.willWatch,
});

export const checkPropertyWillWatch = (movies, movieWillWatch) => {
  // Если список фильмов для просмотра пуст
  if (!movieWillWatch.length) {
    return movies;
  }

  // id всех фильмов добавленных в список для просмотра
  const idMoviesWillWatch = movieWillWatch.map((item) => item.id);

  // Новый массив movies с включенными свойством willWatch
  return movies.reduce(
    (newMovies, item) =>
      idMoviesWillWatch.includes(item.id)
        ? newMovies.concat({ ...item, willWatch: true })
        : newMovies.concat(item),
    []
  );
};
