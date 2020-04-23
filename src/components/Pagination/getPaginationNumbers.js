// https://www.cronj.com/blog/reactjs-pagination/

export function getPaginationNumbers(page, totalPages, maxPages = 10) {
  // Пример если страница 7
  // Она больше чем больше чем половины размера страниц (10)
  // Отсчет начинается с выбранной страницы (7) - (10 / 2) = 2
  // Отсчет заканчивается с выбранной страницы (7) + ((10 / 2) - 1) = 11

  let startPage;
  let endPage;

  const middle = Math.floor(maxPages / 2);

  const right = middle + 1;
  const left = middle - 1;

  // Если выбранная страница меньше или равно максимальному размеру страниц
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    // Если выбранная страница меньше чем серидина + 1
    if (page <= right) {
      startPage = 1;
      endPage = maxPages;

      // Если выбранная страница + середина - 1 меньше или равна количеству всех страниц
      // 7 + (10 / 2 = 5 - 1 = 4) >= 500
    } else if (page + left >= totalPages) {
      startPage = totalPages - (maxPages - 1);
      endPage = totalPages;

      // Если выбранная страница больше чем серидина + 1
    } else {
      // Необходимо для правильно колличества страниц при четных числах и нечетных
      const compensationEnd = maxPages % 2 !== 0 ? middle : left;

      startPage = page - middle;
      endPage = page + compensationEnd;
    }
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
}

/*
	 else {
			// Необходимо для правильно колличества страниц при четных числах и нечетных
			const compensation = maxPages % 2 === 0 ? middle : right;

			startPage = page - compensation;
			// startPage = page - right;
			// 7 + 4 = 11
			endPage = page + left;
		}

*/
