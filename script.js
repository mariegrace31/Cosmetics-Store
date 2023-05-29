const bars = document.getElementById('bars');
const closing = document.getElementById('closingIcon');
const links = document.querySelectorAll('.mobileLinks');
const menu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

// menu mobile function

bars.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closing.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// this funcition is for mobile functionality
links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('active');
  });
});

// implimenting the section "our beautician artists"

const beautician = [{
  image: 'images/Esthetician .png',
  name: 'Marleine Tshel',
  description: 'Internatioal esthetician and over 8 years of experience as an esthetician.',
  paragraph: 'Finished her esthetician studies and got her certificate in 2012. She provides services for your skin care needs.',
}, {
  image: 'images/Makeup artist .png',
  name: 'Anabelle Slovy',
  description: 'Part of the DMFA Makeup Academy Tutors at Harvard University.',
  paragraph: 'Anabelle have always been passionate about art and one of the most exquisite expressions of makeup.',
}, {
  image: 'images/eshetician2.png',
  name: 'Virgile Bual',
  description: 'Internatioal esthetician and over 8 years of experience as an esthetician.',
  paragraph: 'Finished her esthetician studies and got her certificate in 2012. She provides services for your skin care needs.',
}, {
  image: 'images/esthetician3.png',
  name: 'Van Glor',
  description: 'Part of the DMFA Makeup Academy Tutors at Harvard University.',
  paragraph: 'Van have always been passionate about art and one of the most exquisite expressions of makeup.',
}, {
  image: 'images/make up artist.png',
  name: 'Elizabeth Beth',
  description: 'Part of the DMFA Makeup Academy Tutors at Harvard University.',
  paragraph: 'Beth have always been passionate about art and one of the most exquisite expressions of makeup.',
}, {
  image: 'images/spa artist.png',
  name: 'Lauraine Abdob',
  description: 'Internatioal esthetician and over 8 years of experience as an esthetician.',
  paragraph: 'Finished her esthetician studies and got her certificate in 2012. She provides services for your skin care needs.',
}];

const beauticianSec = document.querySelector('.artist-wrapper');
beautician.forEach((beautician) => {
  const artistCard = document.createElement('div');
  artistCard.classList.add('artist-card');
  artistCard.innerHTML = `
    <div class="artist-description">
      <div class="artist">
      <div class="imgs">
      <img class="artist-image" src="${beautician.image}" alt="artist"/>
      <img class="back-img" src="images/squre photo.png" alt="background" />
      </div>
  <div class="art-desc">
    <h4>${beautician.name}</h4>
    <figcaption> <em> ${beautician.description}</em></figcaption>
    <hr class="artist-underline">
    <p class="artist-paragraph"> ${beautician.paragraph}</p>
  </div> 
  </div> 
  </div> 
  `;
  beauticianSec.appendChild(artistCard);
});

const button = document.querySelector('.artist-button');
const artistscard = document.querySelectorAll('.artist-card');
let isExpanded = false;
button.addEventListener('click', () => {
  artistscard.forEach((card) => {
    card.classList.toggle('expand');
  });
  isExpanded = !isExpanded;
  if (isExpanded) {
    button.innerHTML = 'LESS <i class="fa fa-chevron-up"></i>';
  } else {
    button.innerHTML = 'MORE <i class="fa fa-chevron-down"></i>';
  }
});