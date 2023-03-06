const lnk = document.getElementsByClassName('drop-link');
const logo = document.getElementById('logo');
const panel = document.getElementById('panel');
const cross = document.getElementById('accordion');
let i;

for (i = 0; i < lnk.length; i += 1) {
  lnk[i].addEventListener('click', () => {
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      logo.style.visibility = 'visible';
      cross.classList.toggle('change');
    } else {
      panel.style.display = 'block';
      logo.style.visibility = 'hidden';
      cross.classList.toggle('change');
    }
  });
}

cross.addEventListener('click', () => {
  cross.classList.toggle('change');

  if (panel.style.display === 'block') {
    panel.style.display = 'none';
    logo.style.visibility = 'visible';
  } else {
    panel.style.display = 'block';
    logo.style.visibility = 'hidden';
  }
});