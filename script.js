const projects = [
  {
    image: './images/proj-1.jpg',
    title: 'Multi-Post Stories Gain+Glory',
    languages: ['Ruby', 'HTML', 'CSS'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-2.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-3.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-4.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-5.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
  {
    image: './images/proj-6.jpg',
    title: 'Multi-Post Stories Gain + Glory',
    languages: ['Ruby', 'HTML', 'CSS', 'PHP'],
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
    liveVersion: 'https://ehmaddd.github.io',
    linkSource: 'https://github.com/ehmaddd/ehmaddd.github.io',
  },
];

let worksUl;
const modalUl = document.querySelector('#myModal ul');

// Populating Portfolio

const works = document.querySelectorAll('.work-sample');
for (let a = 0; a < works.length; a += 1) {
  document.querySelectorAll('.work-sample img')[a].src = projects[a].image;
  document.querySelectorAll('.work-sample h4')[a].innerHTML = projects[a].title;
  worksUl = document.querySelectorAll('.work-sample ul');

  for (let b = 0; b < projects[a].languages.length; b += 1) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(projects[a].languages[b]));
    li.setAttribute('id', 'element4');
    worksUl[a].appendChild(li);
  }
}

// Populting Modal
const modal = document.getElementById('myModal');
const btn = document.getElementsByClassName('see-project-btn');
const span = document.getElementsByClassName('close')[0];

for (let a = 0; a < btn.length; a += 1) {
  btn[a].addEventListener('click', () => {
    modal.style.display = 'block';

    document.querySelector('#myModal img').src = projects[a].image;
    document.querySelector('#myModal p').innerHTML = projects[a].details;
    document.querySelector('#myModal h4').innerHTML = projects[a].title;

    while (modalUl.firstChild) {
      modalUl.removeChild(modalUl.firstChild);
    }

    for (let b = 0; b < projects[a].languages.length; b += 1) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(projects[a].languages[b]));
      // li.setAttribute("id", "element4");
      modalUl.appendChild(li);
    }

    document.querySelector('#see-live').href = projects[a].liveVersion;
    document.querySelector('#see-source').href = projects[a].linkSource;
  });
}

span.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});