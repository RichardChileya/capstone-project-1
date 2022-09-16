/* Hamburger */
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-list');
const logo = document.querySelector('.logo');
const lists = document.querySelectorAll('.list');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
  logo.classList.toggle('in-active');
});

logo.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
  logo.classList.toggle('in-active');
});

const spreadList = [...lists];
spreadList.forEach((list) => {
  list.addEventListener('click', () => {
    ham.classList.toggle('active');
    menu.classList.toggle('in-active');
    logo.classList.toggle('in-active');
  });
});

const speakers = [{
  speakerName: 'Emmanuel Taonga',
  speakerImage: './images/speaker2.jpg',
  aboutSpeaker: 'AWS specialist',
  about: 'System Security specialist with experience in Amazon Cloud management',
},
{
  speakerName: 'George A.M',
  speakerImage: './images/speaker2.jpg',
  aboutSpeaker: 'System Security specialist',
  about: 'Cyber Security specialist with experience in Oracle Cloud management',
},
{
  speakerName: 'Jae Flames',
  speakerImage: './images/hivos.jpg',
  aboutSpeaker: 'Network Security specialist',
  about: 'Cyber Security specialist with experience in Oracle Cloud management',
},
];

const speakers2 = [{

  speakerName: 'Richard Kayford',
  speakerImage: './images/speaker2.jpg',
  aboutSpeaker: 'Cyber Security specialist',
  about: 'Cyber Security specialist with experience in Oracle Cloud management',
},
{
  speakerName: 'George Alex',
  speakerImage: './images/potrait.jpg',
  aboutSpeaker: 'Oracle Data Specialist',
  about: 'Cyber Security specialist with experience in Oracle Cloud management',
},
{
  speakerName: 'John Lingson',
  speakerImage: './images/speaker2.jpg',
  aboutSpeaker: 'Network Security specialist',
  about: 'Cyber Security specialist with experience in Oracle Cloud management',
},
];

const speakerIn = document.querySelector('.speaker1');
speakers2.forEach((speaker) => {
  const div = document.createElement('div');
  div.innerHTML += `
  
  <div class="speaker">
    <img src="${speaker.speakerImage}" class= "potrait" >
    <div class="speaker-details">
      <h2>${speaker.speakerName}</h2>
      <h3 class="aboutspeaker">${speaker.aboutSpeaker}</h3>
      <p>${speaker.about}</p>
    </div>
  </div>
  `;
  div.classList.add('speaker');
  speakerIn.append(div);
});

const speakerIn2 = document.querySelector('.speaker2');
speakers.forEach((speaker) => {
  const div = document.createElement('div');
  div.innerHTML += `
  
  <div class="speaker">
    <img src="${speaker.speakerImage}" class= "potrait" >
    <div class="speaker-details">
      <h2>${speaker.speakerName}</h2>
      <h3 class="aboutspeaker">${speaker.aboutSpeaker}</h3>
      <p>${speaker.about}</p>
    </div>
  </div>
  `;
  div.classList.add('speaker');
  speakerIn2.append(div);
});