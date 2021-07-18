import { DateRangePicker } from '../js/node_modules/vanillajs-datepicker/js/main.js'

const dates = document.getElementById('dates');
if(dates) {
  const rangepicker = new DateRangePicker(dates, {
    format: 'M d'
  }); 
}



/* Select Seats */
const seats = document.querySelectorAll('.mf-seat');
if(seats) {
  const expressData = document.querySelector('#express-data');
  let selectedSeat = null;
  let seatIcon = document.querySelector('.mf-seat-selection');
  seats.forEach((seat) => {
    seat.addEventListener('click', function(e) {
      if(e.currentTarget.dataset.available === 'true' && e.currentTarget.dataset.class === expressData.innerText.trim()) {
        if(!selectedSeat) {
          e.currentTarget.classList.add('selected');
          e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
          selectedSeat = e.currentTarget;
        } else {
          selectedSeat.classList.remove('selected');
          selectedSeat.innerHTML = "";
          e.currentTarget.classList.add('selected');
          e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
          selectedSeat = e.currentTarget;
        }
        seatIcon.classList.add('selected');
        seatIcon.innerHTML = `<p class="uk-margin-remove uk-text-bold">${e.currentTarget.dataset.seat}</p>`
      }
    });

    if(seat.dataset.class !== expressData.innerText.trim()) {
      if(seat.dataset.available === 'true') {
        seat.classList.add('unavailable');
        seat.innerHTML = '<span uk-icon="icon: close; ratio: 1.3"></span>'
      }
    }
  });
}

/* Summary Stuff */
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
