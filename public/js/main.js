import { DateRangePicker } from '../js/node_modules/vanillajs-datepicker/js/main.js'

const dates = document.getElementById('dates');
if(dates) {
  const rangepicker = new DateRangePicker(dates, {
    format: 'M d'
  }); 
}

/* Search */
const searchFlightsBtn = document.querySelector('#search-flights')
if(searchFlightsBtn) {
  searchFlightsBtn.addEventListener('click', (e) => {
    let origin_elem = document.querySelector('#origin')
    let destination_elem = document.querySelector('#destination')
    let passengers_elem = document.querySelector('#passengers')
    let departure_date_elem = document.querySelector('#departure_date')
    let return_date_elem = document.querySelector('#return_date')
    let trip_type_elem = document.querySelector('#trip_type')

    if(!origin_elem.value || !destination_elem.value || !passengers_elem.value || !departure_date_elem.value || !trip_type_elem.value) {
      let error_elem = document.querySelector('#error-container')

      let alert = document.createElement('div')
      alert.classList.add('uk-alert-danger')
      alert.setAttribute('uk-alert', '')
      
      let closeBtn = document.createElement('a')
      closeBtn.classList.add('uk-alert-close')
      closeBtn.setAttribute('uk-close', '')

      let error = document.createElement('p')
      error.innerHTML = '<b>ERROR:</b> Please enter all fields.'

      alert.appendChild(closeBtn)
      alert.appendChild(error)
      error_elem.appendChild(alert)
      
      error_elem.removeAttribute('hidden')
    } else {
      // Create the Query String... fml
      let url = `/flights?origin=${origin_elem.value}&destination=${destination_elem.value}&passengers=${passengers_elem.value}&trip_type=${trip_type_elem.value}&departure_date=${departure_date_elem.value}&return_date=${return_date_elem.value}`;
      return window.location.href = url;
    }
  })
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
