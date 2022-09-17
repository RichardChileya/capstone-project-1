/* Hamburger */
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-list');

ham.addEventListener('click', () => {
  ham.classList.toggle('action');
  menu.classList.toggle('action');
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
  class: 'hide',
},
{
  speakerName: 'Jae Flames',
  speakerImage: './images/hivos.jpg',
  aboutSpeaker: 'Network Security specialist',
  about: 'Cyber Security specialist with experience in Oracle Cloud management',
  class: 'hide',
},
{
  speakerName: 'Jae Flames',
  speakerImage: './images/hivos.jpg',
  aboutSpeaker: 'Network Security specialist',
  about: 'Cyber Security specialist with experience in Oracle Cloud management',
  class: 'hide',
},
{
  speakerName: 'Jae Flames',
  speakerImage: './images/hivos.jpg',
  aboutSpeaker: 'Network Security specialist',
  about: 'Cyber Security specialist with experience in Oracle Cloud management',
  class: 'hide',
},
];

const speakerIn = document.querySelector('.speaker1');
speakers.forEach((speaker) => {
  const div = document.createElement('div');
  div.innerHTML += `
  
  <div class="speaker ${speaker.class}">
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

const more = document.querySelector('.more');
const hide = document.querySelectorAll('.hide');

more.addEventListener('click', () => {
  more.classList.toggle('active');
  const spread = [...hide];
  spread.forEach((list) => {
    list.classList.toggle('bactive');
  });
});