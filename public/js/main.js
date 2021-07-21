import { DateRangePicker } from '../js/node_modules/vanillajs-datepicker/js/main.js'

if(window.location.href.indexOf('/itinerary') > -1) {
  let submit = document.querySelector('#lookup-itinerary')
  let form = document.querySelector('#itinerary')
  let confirmation_number = document.querySelector('#confirmation_number')
  
  submit.addEventListener('click', () => {
    console.log(confirmation_number.value)
    if(confirmation_number.value.length > 3) {
      form.action = `/flights/confirmation/${confirmation_number.value}`
      form.submit()
    } else {
      let error_elem = document.querySelector('#error-container')

      let alert = document.createElement('div')
      alert.classList.add('uk-alert-danger')
      alert.setAttribute('uk-alert', '')
      
      let closeBtn = document.createElement('a')
      closeBtn.classList.add('uk-alert-close')
      closeBtn.setAttribute('uk-close', '')

      let error = document.createElement('p')
      error.innerHTML = '<b>ERROR:</b> Please enter your confirmation number. (XYZ1234)'

      alert.appendChild(closeBtn)
      alert.appendChild(error)
      error_elem.appendChild(alert)
      
      error_elem.removeAttribute('hidden')
    }
  })
}

const dates = document.getElementById('dates');
if(dates) {
  const rangepicker = new DateRangePicker(dates, {
    format: 'M d'
  }); 
}

/* Origin / Destination Functionality */
const create_flights_link = document.querySelector('#create-flights-link')
if(create_flights_link) {
  const form = document.querySelector('#create-flights-form')
  create_flights_link.addEventListener('click', () => {
    form.submit()
    UIkit.modal.dialog('<div class="uk-padding uk-flex uk-flex-column uk-flex-center uk-text-center"><span uk-spinner="ratio: 4.5"></span><h3 class="uk-text-primary">We are creating your flights!</h3><p class="uk-margin-remove uk-text-muted">When finished, you will be redirected back to the home page.</p></div>');
  })
}

/* Search */
const searchFlightsBtn = document.querySelector('#search-flights')
if(searchFlightsBtn) {
  let origin_elem = document.querySelector('#origin')
  let destination_elem = document.querySelector('#destination')
  let passengers_elem = document.querySelector('#passengers')
  let departure_date_elem = document.querySelector('#departure_date')
  let return_date_elem = document.querySelector('#return_date')
  let trip_type_elem = document.querySelector('#trip_type')
  let origin_text = document.querySelector('#origin-text')
  let destination_text = document.querySelector('#destination-text')

  origin_elem.addEventListener('keyup', (e) => {
    origin_text.innerText = origin_elem.value
    if(origin_elem.value === '') {
      origin_text.innerText = 'From'
    }
  })

  destination_elem.addEventListener('keyup', (e) => {
    destination_text.innerText = destination_elem.value
    if(destination_elem.value === '') {
      destination_text.innerText = 'To'
    }
  })



  searchFlightsBtn.addEventListener('click', (e) => {
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

if(window.location.href.indexOf('/seats') > -1) {
  console.log("You're on the seats page!")

  const trip_type_el = document.querySelector('#trip-type-data')
  const passenger_el = document.querySelector('#passenger-data')

  const outbound_class_el = document.querySelector('#outbound-class-data')
  const outbound_flight_el = document.querySelector('#outbound-flight-data')
  const select_outbound_seats_el = document.querySelector('#select-outbound-seats')

  let return_class_el
  let return_flight_el
  let select_return_seats_el

  const save_btn = document.querySelector('#save-btn')
  const next_flight_btn = document.querySelector('#next-flight-btn');
  const next_passenger_btn = document.querySelector('#next-passenger-btn')

  const seats = document.querySelectorAll('.mf-seat:not(.unavailable)');
  let seat_icon_el = document.querySelector('.mf-seat-selection')
  let passenger_text_el = document.querySelector('#passenger-count')
  let selected_seat
  let current_passenger = 1
  let current_selection = 'outbound'
  let selected_outbound_seats = []
  let selected_return_seats = []

  /* Convert Inner Text to Data */
  const trip_type = trip_type_el.innerText.trim()
  const passenger = Number(passenger_el.innerText.trim())
  
  const outbound_class = outbound_class_el.innerText.trim()
  const outbound_flight = outbound_flight_el.innerText.trim()

  let return_class
  let return_flight

  passenger_text_el.innerText = current_passenger

  if(trip_type === 'round-trip') {
    /* Setup Return Data */
    return_class_el = document.querySelector('#return-class-data')
    return_flight_el = document.querySelector('#return-flight-data')
    select_return_seats_el = document.querySelector('#select-return-seats')

    return_class = return_class_el.innerText.trim()
    return_flight = return_flight_el.innerText.trim()
  }

  /* Setup Buttons */
  if(passenger > 1) {
    next_passenger_btn.removeAttribute('hidden')
  } else {
    if(trip_type === 'round-trip') {
      next_flight_btn.removeAttribute('hidden')
    } else {
      // 1 Passenger on a 1-Way-Flight
      save_btn.removeAttribute('hidden')
    }
  }

  /* Add Event Listeners */
  save_btn.addEventListener('click', () => {
    let selected_seats = document.querySelectorAll(".mf-seat.selected")
    selected_seats.forEach((seat) => {
      if(current_selection === 'outbound') {
        selected_outbound_seats.push(seat.dataset.seat)
      } else {
        selected_return_seats.push(seat.dataset.seat)
      }
    })
    
    let url 
    if(current_selection === 'outbound') {
      url = `/flights/checkout?trip_type=${trip_type}&passengers=${passenger}&outbound_flight=${outbound_flight}&outbound_class=${outbound_class}&outbound_seats=${selected_outbound_seats.toString()}`
    } else {
      url = `/flights/checkout?trip_type=${trip_type}&passengers=${passenger}&outbound_flight=${outbound_flight}&outbound_class=${outbound_class}&outbound_seats=${selected_outbound_seats.toString()}&return_flight=${return_flight}&return_class=${return_class}&return_seats=${selected_return_seats.toString()}`
    }
    return window.location.href = url
  })

  next_passenger_btn.addEventListener('click', () => {
    current_passenger++
    passenger_text_el.innerText = current_passenger

    selected_seat.dataset.available = 'false'
    selected_seat = null
    seat_icon_el.classList.remove('selected')
    seat_icon_el.innerHTML = '<p class="uk-margin-remove uk-text-bold">–</p>'

    if(current_passenger === passenger) {
      if(trip_type === 'one-way') {
        next_passenger_btn.setAttribute('hidden', '')
        save_btn.removeAttribute('hidden')
      } else {
        // It's a round trip.
        if(current_selection === 'return') {
          next_passenger_btn.setAttribute('hidden', '')
          save_btn.removeAttribute('hidden')
        } else {
          // Finished with Outgoing Flight - Move on to Return Flight
          next_passenger_btn.setAttribute('hidden', '')
          next_flight_btn.removeAttribute('hidden')
        }
      }
    }
  })

  next_flight_btn.addEventListener('click', () => {
    // Get the selected seats for the current flight
    let selected_seats = document.querySelectorAll(".mf-seat.selected")
    selected_seats.forEach((seat) => {
      selected_outbound_seats.push(seat.dataset.seat)
      seat.classList.remove('selected')
      seat.innerText = ''
    })

    // Moving on to next flight
    current_selection = 'return'
    current_passenger = 1
    seat_icon_el.classList.remove('selected')
    seat_icon_el.innerHTML = '<p class="uk-margin-remove uk-text-bold">–</p>'

    select_outbound_seats_el.setAttribute('hidden', '')
    select_return_seats_el.removeAttribute('hidden')

    next_flight_btn.setAttribute('hidden', '')

    if(passenger > 1) {
      next_passenger_btn.removeAttribute('hidden')
    } else {
      save_btn.removeAttribute('hidden')
    }
    
  })

  seats.forEach((seat) => {
    seat.addEventListener('click', function(e) {
      console.log("avail?" + e.currentTarget.dataset.available)
      console.log(e.currentTarget.dataset.seat)
      console.log(e.currentTarget.dataset.class)
      console.log(outbound_class)
      console.log(return_class)
      if(e.currentTarget.dataset.available === false) {
        return;
      }
      if(e.currentTarget.dataset.class === outbound_class || e.currentTarget.dataset.class === return_class) {
        
        if(e.currentTarget.dataset.available === 'true') {
          
          if(!selected_seat) {
            // No seat previously selected
            e.currentTarget.classList.add('selected')
            e.currentTarget.innerHTML = `P${current_passenger}`
            selected_seat = e.currentTarget
          } else {
            // They changed their selection, so update
            selected_seat.classList.remove('selected')
            selected_seat.innerHTML = ""
            
            e.currentTarget.classList.add('selected')
            e.currentTarget.innerHTML = `P${current_passenger}`
            selected_seat = e.currentTarget
          }
  
          seat_icon_el.classList.add('selected')
          seat_icon_el.innerHTML = `<p class="uk-margin-remove uk-text-bold">${e.currentTarget.dataset.seat}</p>`
        }
      }
    })
  })
}




//   seats.forEach((seat) => {
//     seat.addEventListener('click', function(e) {
//       console.log("CLICK");
//       console.log(e.currentTarget.dataset.class);
//       console.log(outboundClassData)
//       // return Class Data//currentSelection

//       if(currentSelection === 'outbound') {
//         if(e.currentTarget.dataset.available === 'true' && e.currentTarget.dataset.class === outboundClassData) {
//           console.log(selectedSeat);
//           if(!selectedSeat) {
//             e.currentTarget.classList.add('selected');
//             e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
//             selectedSeat = e.currentTarget;
//           } else {
//             selectedSeat.classList.remove('selected');
//             selectedSeat.innerHTML = "";
//             e.currentTarget.classList.add('selected');
//             e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
//             selectedSeat = e.currentTarget;
//           }
//           seatIcon.classList.add('selected');
//           seatIcon.innerHTML = `<p class="uk-margin-remove uk-text-bold">${e.currentTarget.dataset.seat}</p>`
//         }
//       } else {
//         if(e.currentTarget.dataset.available === 'true' && e.currentTarget.dataset.class === returnClassData) {
//           console.log(selectedSeat);
//           if(!selectedSeat) {
//             e.currentTarget.classList.add('selected');
//             e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
//             selectedSeat = e.currentTarget;
//           } else {
//             selectedSeat.classList.remove('selected');
//             selectedSeat.innerHTML = "";
//             e.currentTarget.classList.add('selected');
//             e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
//             selectedSeat = e.currentTarget;
//           }
//           seatIcon.classList.add('selected');
//           seatIcon.innerHTML = `<p class="uk-margin-remove uk-text-bold">${e.currentTarget.dataset.seat}</p>`
//         }
//       }
//     });
// if(seats) {
//   const selectOutboundSeatsEl = document.querySelector('#select-outbound-seats')
//   const selectReturnSeatsEl = document.querySelector('#select-return-seats')

//   const outboundClassDataEl = document.querySelector('#outbound-class-data')
//   const outboundFlightDataEl = document.querySelector('#outbound-flight-data')
//   const passengerDataEl = document.querySelector('#passenger-data')
//   const tripTypeDataEl = document.querySelector('#trip-type-data')

//   const outboundClassData = outboundClassDataEl.innerText.trim()
//   const outboundFlightData = outboundFlightDataEl.innerText.trim()
//   const passengerData = Number(passengerDataEl.innerText.trim())
//   const tripTypeData = tripTypeDataEl.innerText.trim()

//   let returnClassDataEl;
//   let returnFlightDataEl;
//   let returnClassData;
//   let returnFlightData;

//   if(tripTypeData === 'round-trip') {
//     returnClassDataEl = document.querySelector('#return-class-data')
//     returnFlightDataEl = document.querySelector('#return-flight-data')
//     returnClassData = returnClassDataEl.innerText.trim()
//     returnFlightData = returnFlightDataEl.innerText.trim()
//   }

//   const exitBtn = document.querySelector('#exit-btn')
//   const nextPassengerBtn = document.querySelector('#next-passenger-btn')
//   const nextFlightBtn = document.querySelector('#next-flight-btn');
//   const saveBtn = document.querySelector('#save-btn')

//   let selectedSeat = null
//   let currentPassenger = 1
//   let currentSelection = 'outbound'
//   let selectedOutboundSeats = []
//   let selectedReturnSeats = []

//   let seatIcon = document.querySelector('.mf-seat-selection')
//   let passengerText = document.querySelector('#passenger-count')

//   passengerText.innerText = currentPassenger;

//   if(passengerData > 1) {
//     // There is more than 1 passenger, show next passenger button
//     nextPassengerBtn.removeAttribute('hidden')
//   } else {
//     if(tripTypeData === 'round-trip') {
//       // There is only 1 passenger, and trip is round trip, so show next flight btn
//       nextFlightBtn.removeAttribute('hidden')
//     } else {
//       // There is only 1 passenger, and trip is one way. Show save btn
//       saveBtn.removeAttribute('hidden')
//     }
//   }

//   // Need to add error handling for btns.
//   nextPassengerBtn.addEventListener('click', () => {
//     currentPassenger++
//     passengerText.innerText = currentPassenger;
//     selectedSeat = null;
//     seatIcon.classList.remove('selected');
//     seatIcon.innerHTML = `<p class="uk-margin-remove uk-text-bold">–</p>`
//     if(currentPassenger === passengerData) {
//       // We are at the last passenger - update the button
//       if(currentSelection === 'return') {
//         // We are on the last flight, show the save button
//         nextPassengerBtn.setAttribute('hidden', '')
//         if(tripTypeData === 'round-trip') {
//           saveBtn.removeAttribute('hidden')
//         }
//       } else {
//         nextPassengerBtn.setAttribute('hidden', '')
//         if(tripTypeData === 'round-trip') {
//           nextFlightBtn.removeAttribute('hidden')
//         } else {
//           // This is a one-way and passenger is done selecting seats, show save btn
//           saveBtn.removeAttribute('hidden')
//         }
//       }
      
//     }
//   });

//   saveBtn.addEventListener('click', () => {
//     let selectedSeats = document.querySelectorAll(".mf-seat.selected")
    
//     selectedSeats.forEach((seat) => {
//       if(currentSelection === 'outbound') {
//         selectedOutboundSeats.push(seat.dataset.seat)
//       } else {
//         selectedReturnSeats.push(seat.dataset.seat)
//       }
//     })

//     // BUILD THE QUERY
//     // - Trip Type
//     // - Passengers
//     // - Outbound Flight #
//     // - Outbound Flight Class
//     // - Outbound Seats
//     // - IF RETURN FLIGHT
//     // - Return Flight #
//     // - Return Flight Class
//     // - Return Seats

//     let url = `/flights/checkout?trip_type=${tripTypeData}&passengers=${passengerData}&outbound_flight=${outboundFlightData}&outbound_class=${outboundClassData}&outbound_seats=${selectedOutboundSeats.toString()}&return_flight=${returnFlightData}&return_class=${returnClassData}&return_seats=${selectedReturnSeats}`;
//     return window.location.href = url;
//   })

//   nextFlightBtn.addEventListener('click', () => {
//     // Get Selected Seats
//     let selectedSeats = document.querySelectorAll(".mf-seat.selected")
//     selectedSeats.forEach((seat) => {
//       selectedOutboundSeats.push(seat.dataset.seat);
//       seat.classList.remove('selected')
//       seat.innerText = ''
//     })

//     currentSelection = 'return';
//     seatIcon.classList.remove('selected');
//     seatIcon.innerHTML = `<p class="uk-margin-remove uk-text-bold">–</p>`
//     currentPassenger = 1;

//     selectOutboundSeatsEl.setAttribute('hidden', '')
//     selectReturnSeatsEl.removeAttribute('hidden')

//     nextFlightBtn.setAttribute('hidden', '')
//     nextPassengerBtn.removeAttribute('hidden')
//   })

//   seats.forEach((seat) => {
//     seat.addEventListener('click', function(e) {
//       console.log("CLICK");
//       console.log(e.currentTarget.dataset.class);
//       console.log(outboundClassData)
//       // return Class Data//currentSelection

//       if(currentSelection === 'outbound') {
//         if(e.currentTarget.dataset.available === 'true' && e.currentTarget.dataset.class === outboundClassData) {
//           console.log(selectedSeat);
//           if(!selectedSeat) {
//             e.currentTarget.classList.add('selected');
//             e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
//             selectedSeat = e.currentTarget;
//           } else {
//             selectedSeat.classList.remove('selected');
//             selectedSeat.innerHTML = "";
//             e.currentTarget.classList.add('selected');
//             e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
//             selectedSeat = e.currentTarget;
//           }
//           seatIcon.classList.add('selected');
//           seatIcon.innerHTML = `<p class="uk-margin-remove uk-text-bold">${e.currentTarget.dataset.seat}</p>`
//         }
//       } else {
//         if(e.currentTarget.dataset.available === 'true' && e.currentTarget.dataset.class === returnClassData) {
//           console.log(selectedSeat);
//           if(!selectedSeat) {
//             e.currentTarget.classList.add('selected');
//             e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
//             selectedSeat = e.currentTarget;
//           } else {
//             selectedSeat.classList.remove('selected');
//             selectedSeat.innerHTML = "";
//             e.currentTarget.classList.add('selected');
//             e.currentTarget.innerHTML = `<span>${e.currentTarget.dataset.seat}</span>`;
//             selectedSeat = e.currentTarget;
//           }
//           seatIcon.classList.add('selected');
//           seatIcon.innerHTML = `<p class="uk-margin-remove uk-text-bold">${e.currentTarget.dataset.seat}</p>`
//         }
//       }
//     });

//     // if(seat.dataset.class !== outboundClassData) {
//     //   if(seat.dataset.available === 'true') {
//     //     seat.classList.add('unavailable');
//     //     seat.innerHTML = '<span uk-icon="icon: close; ratio: 1.3"></span>'
//     //   }
//     // }
//   });
// }

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
