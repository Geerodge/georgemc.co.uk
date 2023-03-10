// © Manuel Matuzović: https://web.dev/website-navigation/

const nav = document.querySelector('nav');
const list = nav.querySelector('ul');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const svg = nav.querySelector('svg');

const button = burgerClone.querySelector('button');
button.addEventListener('click', e => {
  const isOpen = button.getAttribute('aria-expanded') === 'false';
  button.setAttribute('aria-expanded', isOpen);
});

// avoid DRY: disabling menu
const disableMenu = () => {
  button.setAttribute('aria-expanded', false);
};

//  close on escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener('click', e => {
  const isClickInsideElement = nav.contains(e.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

nav.insertBefore(burgerClone, list);

// Sends newsletter subscription to netlify function that then sends to Klayvio account via API.
const axios = require('axios');

async function handleFormSubmit(event) {

  event.preventDefault();
  const email = event.currentTarget.email.value;

  try {
      const payload = {
          email: email
      };

  await axios.post("/.netlify/functions/add-email-subscriber", payload);
      alert("Success! Check your email to confirm your subscription.");
      // Sends successful newsletter signup event to Google Tag Manager
      dataLayer.push({
        'event' : 'newsletter_success',
        'emailAddress' : email
      });  
  } catch (error) {
      alert(error.message);
  }
};

const newsletter = document.getElementById("newsletter");

if (typeof(newsletter) != 'undefined' && newsletter != null) {
  newsletter.addEventListener("submit", handleFormSubmit);
}

