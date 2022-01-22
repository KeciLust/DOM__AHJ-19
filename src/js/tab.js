/* eslint-disable no-plusplus */
export default function tab(arr) {
  const container = document.querySelector('.container');

  for (let i = 0; i < arr.length; i++) {
    container.insertAdjacentHTML('beforeend', `<tr class='tr' data-id='${arr[i].id}' data-title='${arr[i].title}' data-year='${arr[i].year}' data-imdb='${arr[i].imdb}'>
     <td>${arr[i].id}</td>
     <td>${arr[i].title}</td>
     <td>${arr[i].year}</td>
     <td>${arr[i].imdb}</td>
   </tr>
   `);
  }
}
