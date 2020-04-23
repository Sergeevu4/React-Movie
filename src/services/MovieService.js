// export const API_URL = 'https://api.themoviedb.org/3';
// export const API_KEY = '3f4ca4f3a9750da53450646ced312397';
// export const SORT_BY = {
// 	popularity: 'popularity.desc',
// 	revenue: 'revenue.desc',
// 	voteAverage: 'vote_average.desc'
// };

export class MovieService {
  _apiUrl = 'https://api.themoviedb.org/3';
  _apiKey = '3f4ca4f3a9750da53450646ced312397';

  // Свойства серверной сортировки
  _apiSort = {
    // Сортировка по Популярности
    popularity: 'popularity.desc',
    // Сортировка по Доходности
    revenue: 'revenue.desc',
    // Сортировка по среднемним показателям
    voteAverage: 'vote_average.desc',
    // Дефолт сортировка
    default: 'popularity.desc',
  };

  // Основная функция получения данных
  getResource = async (sortType, page) => {
    // По какому значению будет отфильтрован запрос
    const sort = this.getSortTypes(sortType);

    const response = await fetch(
      `${this._apiUrl}/discover/movie?api_key=${this._apiKey}&sort_by=${sort}&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch ${this._apiUrl}, received ${response.status}`);
    }

    // Чистые данные с сервера
    const data = await response.json();

    // Преобразования данных в необходимый формат для Redux
    return this.cleanData(data);
  };

  // Переименовываю  данные и добавляю значение свойство в willwatch в массив фильмов
  cleanData({ total_pages, results, total_results, ...otherDataProperty }) {
    return {
      movies: this.addPropertyWillWatch(results),
      totalPages: total_pages,
      totalResults: total_results,
      ...otherDataProperty,
    };
  }

  addPropertyWillWatch(results) {
    return results.map((movie) => ({
      ...movie,
      willWatch: false,
    }));
  }

  // Сортировка запроса, по ключу объекта
  getSortTypes(sortType) {
    return this._apiSort[sortType] || this._apiSort['default'];
  }
}
