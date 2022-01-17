export default function game() {
  const fields = Array.from(document.querySelectorAll('.field'));
  let item = 0;
  setInterval(() => {
    fields[item].classList.remove('img');
    item = Math.floor(Math.random() * 16);
    fields[item].classList.add('img');
  },
  1000);
}
