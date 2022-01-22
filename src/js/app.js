import game from './game';
import sort from './sort';
import tab from './tab';
import tab2 from './tab2';

const arrSort = [
  (a, b) => a.dataset.id - b.dataset.id,
  (a, b) => b.dataset.id - a.dataset.id,
  (a, b) => {
    if (a.dataset.title > b.dataset.title) { return 1; }
    if (a.dataset.title < b.dataset.title) { return -1; }
    return 0;
  },
  (a, b) => {
    if (a.dataset.title < b.dataset.title) { return 1; }
    if (a.dataset.title > b.dataset.title) { return -1; }
    return 0;
  },
  (a, b) => a.dataset.year - b.dataset.year,
  (a, b) => b.dataset.year - a.dataset.year,
  (a, b) => a.dataset.imdb - b.dataset.imdb,
  (a, b) => b.dataset.imdb - a.dataset.imdb,

];
const arr = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];
game();
tab(arr);
const y = 0;
sort(arrSort, y);
tab2(arr);
