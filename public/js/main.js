import { DateRangePicker } from '../js/node_modules/vanillajs-datepicker/js/main.js'



const elem = document.getElementById('dates');
if(elem) {
  const rangepicker = new DateRangePicker(elem, {
    format: 'M d'
  }); 
}

let outboundChevron = document.querySelector('#outbound-chevron');
let outboundCard = document.querySelector('#outbound-card');

let returnChevron = document.querySelector('#return-chevron');
let returnCard = document.querySelector('#return-card');

if(outboundCard) {
  outboundCard.addEventListener('click', (e) => {
    if(outboundChevron.getAttribute('uk-icon') === 'icon: chevron-down; ratio: 1.5') {
      outboundChevron.setAttribute('uk-icon', 'icon: chevron-up; ratio: 1.5')
    } else {
      outboundChevron.setAttribute('uk-icon', 'icon: chevron-down; ratio: 1.5')
    }
  })
}

if(returnCard) {
  returnCard.addEventListener('click', (e) => {
    if(returnChevron.getAttribute('uk-icon') === 'icon: chevron-down; ratio: 1.5') {
      returnChevron.setAttribute('uk-icon', 'icon: chevron-up; ratio: 1.5')
    } else {
      returnChevron.setAttribute('uk-icon', 'icon: chevron-down; ratio: 1.5')
    }
  })
}
