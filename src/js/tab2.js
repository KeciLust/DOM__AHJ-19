/* eslint-disable no-plusplus */
export default function tab2(arr) {
  const container = document.querySelector('.container2');

  for (let i = 0; i < arr.length; i++) {
    container.insertAdjacentHTML('beforeend', `<tr class='tr2' data-id='${arr[i].id}' data-title='${arr[i].title}' data-year='${arr[i].year}' data-imdb='${arr[i].imdb}'>
       <td>${arr[i].id}</td>
       <td>${arr[i].title}</td>
       <td>${arr[i].year}</td>
       <td>${arr[i].imdb}</td>
     </tr>
     `);
  }
}
