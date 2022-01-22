/* eslint-disable no-param-reassign */
export default function sort(arrSort, y) {
  setInterval(() => {
    const trArr = Array.from(document.querySelectorAll('.tr'));
    const container = document.querySelector('.container');
    const trNew = trArr.sort(arrSort[y]);

    y += 1;
    if (y > 8) { y = 0; }
    const tbody = Array.from(container.querySelectorAll('tbody'));
    for (let i = 1; i < tbody.length; i += 1) {
      container.removeChild(tbody[i]);
    }
    for (let i = 0; i < trNew.length; i += 1) {
      container.appendChild(trNew[i]);
    }
    return y;
  }, 5000);
}
