import { Flight } from '../models/flight.js'
import { Airport } from '../models/airport.js'

export {
    createFlight,
    getFlights,
    getFlight,
    queryOutboundFlights,
    queryReturnFlights,
    getOneWaySummary,
    getRoundTripSummary,
    checkOutTrip,
    checkOutRoundTrip,
    selectOneWaySeats,
    selectRoundTripSeats
 }

 const flight_fields = ['number', 'airline', 'plane', 'origin', 'destination', 'departure', 'duration', 'gate', 'amenities', 'tickets']

/**
 * This create method will automagically create a flight with all the required data at the click of a button! =) 
 */
function createFlight(req, res) {
    for(let i = 0; i < 1400; i++) {
        let airline = randomAirline();
        let origin = randomAirport();
        let destination = randomDestination(origin.code);
        let duration = generateDuration()
        let departure = generateDeparture()
        let departure_date = dateString(departure)
    
        let flight_data = {
            number: generateFlightNumber(airline.code),
            airline: airline.name,
            plane: {
                name: randomPlane()
            },
            origin: origin,
            destination: destination,
            departure: departure,
            departure_date: departure_date,
            duration: duration,
            gate: generateGate(),
            amenities: randomAmenities(duration),
            tickets: []
        }
    
        const flight = new Flight(flight_data);
        let tickets = generateTickets(flight)
        flight.set({
            tickets: tickets
        })
    
        Flight.find({$or:[{number: flight.number}]}, function(error, records) {
            if(records.length) {
                // res.send('A similar flight already exists. Try creating a new one.')
            } else {
                flight.save(function (error, flight) {
                    if(error) {
                        // return res.send(error)
                        console.log(error)
                    } else {
                        // return res.send(flight._id)
                        console.log('OK')
                        console.log(flight._id)
                    }
                })
            }
        })
    }
    
}

function selectOneWaySeats(req, res, next) {
    if(req.query.trip_type === 'round-trip') {
        return next();
    }
    console.log(req.query.outbound_flight)
    let results = Flight.find({
        'number': req.query.outbound_flight
    })

    let promise = results.exec()

    promise.then((data) => {
        res.render('flights/seats', {data: data, query: {
            passengers: req.query.passengers,
            outbound_flight: req.query.outbound_flight,
            outbound_class: req.query.outbound_class,
            trip_type: req.query.trip_type
        }})
    })

}

function selectRoundTripSeats(req, res, next) {
    // Screen 1 - Outbound Flight
    //          - js button to select next passenger
    // Screen 2 - Return Flight

    // for loop index
    // pX seat selection (for each passenger)
    let results = Flight.find({'number': {$in: [req.query.outbound_flight, req.query.return_flight]}})
    let promise = results.exec()

    promise.then((data) => {
        res.render('flights/seats', {data: data.reverse(), query: {
            passengers: req.query.passengers,
            outbound_flight: req.query.outbound_flight,
            outbound_class: req.query.outbound_class,
            return_flight: req.query.return_flight,
            return_class: req.query.return_class,
            trip_type: req.query.trip_type
        }})
    })
}

function checkOutTrip(req, res, next) {
    if(req.query.trip_type === 'round-trip') {
        return next();
    }
 
    let results = Flight.find({
        'number': req.query.outbound_flight
    })

    let promise = results.exec()

    promise.then((data) => {
        res.render('flights/payment', {activePage: 'review-and-pay', data: data, query: {
            passengers: req.query.passengers,
            outbound_flight: req.query.outbound_flight,
            outbound_class: req.query.outbound_class,
            outbound_seats: req.query.outbound_seats,
            trip_type: req.query.trip_type
        }})
    })
}

function checkOutRoundTrip(req, res, next) {
    let results = Flight.find({'number': {$in: [req.query.outbound_flight, req.query.return_flight]}})
    let promise = results.exec()
    promise.then((data) => {
        res.render('flights/payment', {activePage: 'review-and-pay', data: data.reverse(), query: {
            passengers: req.query.passengers,
            outbound_flight: req.query.outbound_flight,
            outbound_class: req.query.outbound_class,
            outbound_seats: req.query.outbound_seats,
            return_flight: req.query.return_flight,
            return_class: req.query.return_class,
            return_seats: req.query.return_seats,
            trip_type: req.query.trip_type
        }})
    })
}

function getOneWaySummary(req, res, next) {
    if(req.query.trip_type === 'round-trip') {
        return next();
    }
 
    let results = Flight.find({
        'number': req.query.flight
    })

    let promise = results.exec()

    promise.then((data) => {
        res.render('flights/summary', {activePage: 'trip-summary', data: data, query: {
            passengers: req.query.passengers,
            outbound_flight: req.query.flight,
            outbound_class: req.query.class,
            trip_type: req.query.trip_type
        }})
    })
}

function getRoundTripSummary(req, res, next) {
    let results = Flight.find({'number': {$in: [req.query.outbound_flight, req.query.return_flight]}})
    let promise = results.exec()
    promise.then((data) => {
        res.render('flights/summary', {activePage: 'trip-summary', data: data.reverse(), query: {
            passengers: req.query.passengers,
            outbound_flight: req.query.outbound_flight,
            outbound_class: req.query.outbound_class,
            return_flight: req.query.return_flight,
            return_class: req.query.return_class,
            trip_type: req.query.trip_type
        }})
    })

}

function queryReturnFlights(req, res) {
    let year = new Date().getFullYear();
        let req_date = req.query.return_date + ' ' + year
        let departure = new Date(req_date)
        let departure_string = dateString(departure)
        console.log("DEP STR")
        console.log(departure_string)
        
    let results = Flight.find({
        'departure_date': departure_string,
        'origin.code': req.query.return_origin, 
        'destination.code': req.query.return_destination
    })

    let promise = results.exec();
    
    promise.then((data) => {
        return res.render('flights/flights', {data: data, query: {
            flight_type: 'Return',
            trip_type: req.query.trip_type,
            origin: req.query.return_origin,
            destination: req.query.return_destination,
            outbound_flight: req.query.flight,
            outbound_class: req.query.outbound_class,
            passengers: req.query.passengers
        }})
    })
}

function queryOutboundFlights(req, res, next) {
  
        if(req.query.flight_type) {
            return next();
        }

        console.log(req.query.departure_date)
        let year = new Date().getFullYear();
        let req_date = req.query.departure_date + ' ' + year
        let departure = new Date(req_date)
        let departure_string = dateString(departure)
        console.log("DEP STR")
        console.log(departure_string)

        /**
         *             'origin.code': req.query.origin, 
            'destination.code': req.query.destination,
         */

        let results = Flight.find({
            'departure_date': departure_string,
            'origin.code': req.query.origin,
            'destination.code': req.query.destination
        })

        let promise = results.exec();
        
        promise.then((data) => {
            // Sort the flights
            data.sort((a, b) => { a.departure - b.departure })
            return res.render('flights/flights', {data, query: {
                flight_type: 'Outbound',
                origin: req.query.origin,
                destination: req.query.destination,
                departure: req.query.departure_date,
                return_date: req.query.return_date,
                passengers: req.query.passengers,
                trip_type: req.query.trip_type
            }})
        })
}

function getFlights(req, res) {
    Flight.find({}, function (error, flights) {
        if(error) {
            res.send(error)
        } else {
            res.send(flights)
        }
    })
}

function getFlight(req, res) {
    Flight.find({_id: req.params.id}, function(error, flight) {
        if(error) {
            res.send(error)
        } else {
            res.send(flight)
        }
    });
}

/* AUTO GENERATOR FUNCTIONS */
function randomAirline() {
    // UPDATE THIS TO GET AIRLINES FROM DB
    let airlines = [
        {
            name: 'Southwest Airlines',
            code: 'SW'
        }, {
            name: 'Delta',
            code: 'DL'
        }, {
            name: 'American Airlines',
            code: 'AA'
        }, {
            name: 'United Airlines',
            code: 'UA'
        }
    ]

    return airlines[Math.floor((Math.random() * airlines.length))];
}

function randomPlane() {
    let planes = ['Boeing B737', 'Airbus A319', 'Airbus A320', 'Embraer EMB']

    return planes[Math.floor((Math.random() * planes.length))];
}

function randomAirport() {
    // UPDATE THIS TO GET AIRPORTS FROM DB
    let airports = [{
        code: 'AUS',
        city: 'Austin, TX'
    }, {
        code: 'ATL',
        city: 'Atlanta, GA'
    }, {
        code: 'DFW',
        city: 'Dallas / Fort Worth, TX'
    }, {
        code: 'DEN',
        city: 'Denver, CO'
    }, {
        code: 'LAX',
        city: 'Los Angeles, CA'
    }, {
        code: 'SAN',
        city: 'San Francisco, CA'
    }]

    return airports[Math.floor((Math.random() * airports.length))]
}

function randomDestination(origin_code) {
    let destination = randomAirport();
    if(destination.code === origin_code) {
        return randomDestination(origin_code);
    } else {
        return destination
    }
}

function generateFlightNumber(airline_code) {
    let min = 10
    let max = 9999
    return airline_code + Math.floor(Math.random() * (max - min + 1) + min)
}

function generateDeparture() {
    // When Creating Flights, randomize the date 
    // created from 1 month to 1 year from the 
    // date created
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()

    let startDate = new Date()
    let endDate = new Date(currentYear, currentMonth + 1, 30);
    let startHour = 0;
    let endHour = 24;

    let date = new Date(+startDate + Math.random() * (endDate - startDate))
    let hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}

function dateString(date) {
    var d = date,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let date_string = [year, month, day].join('-')
    console.log(date_string)
    return date_string;
}

function generateDuration() {
    let duration = {
        hours: Math.floor((Math.random() * (6 - 2)) + 1),
        minutes: Math.floor(Math.random() * 60)
    }

    return duration
}

function generateGate() {
    let letters = "ABCDEFG";
    let number = Math.floor((Math.random() * 38) + 1)
    let gate = letters[Math.floor(Math.random() * letters.length)] + number;
    return gate;
}

function randomAmenities(duration) {
    let amenities = {
        technology: false,
        entertainment: false,
        meals: false
    }

    if(duration.hours > 3) {
        amenities.meals = true
    }

    if(Math.random() < 0.5) {
        amenities.technology = true
    }

    if(Math.random() < 0.5) {
        amenities.entertainment = true
    }

    return amenities
}

function generateTickets(flight) {
    let tickets = []
    let prices = generatePrice()
    // Create All First Class Tickets
    flight.plane.sections.first_class.rows.forEach((row, index) => {
        row.forEach((seat) => {
            // Create Ticket and push to tickets array
            if(!seat.isle) {
                let ticket = {
                    confirmation_number: generateConfirmationNumber(),
                    tracking_number: generateTrackingNumber(),
                    data: generateDataNumber(),
                    options: '1ST CL',
                    flight_class: 'first',
                    seat: {
                        isle: seat.letter,
                        number: index + 1
                    },
                    boarding_zone: generateBoardingZone(),
                    price: prices.first,
                    passenger: generatePassenger()
                }
    
                tickets.push(ticket);
            } 
        })
    })

    flight.plane.sections.preferred_class.rows.forEach((row, index) => {
        row.forEach((seat) => {
            // Create Ticket and push to tickets array
            if(!seat.isle) {
                let ticket = {
                    confirmation_number: generateConfirmationNumber(),
                    tracking_number: generateTrackingNumber(),
                    data: generateDataNumber(),
                    options: 'PREF PLS',
                    flight_class: 'preferred',
                    seat: {
                        isle: seat.letter,
                        number: index + flight.plane.sections.first_class.total_rows + 1
                    },
                    boarding_zone: generateBoardingZone(),
                    price: prices.preferred,
                    passenger: generatePassenger()
                }
    
                tickets.push(ticket);
            }
        })
    })

    flight.plane.sections.economy_class.rows.forEach((row, index) => {
        row.forEach((seat) => {
            if(!seat.isle) {
                let ticket = {
                    confirmation_number: generateConfirmationNumber(),
                    tracking_number: generateTrackingNumber(),
                    data: generateDataNumber(),
                    options: 'ECON',
                    flight_class: 'economy',
                    seat: {
                        isle: seat.letter,
                        number: index + flight.plane.sections.first_class.total_rows + flight.plane.sections.preferred_class.total_rows + 1
                    },
                    boarding_zone: generateBoardingZone(),
                    price: prices.economy,
                    passenger: generatePassenger()
                }
    
                tickets.push(ticket);
            }
        })
    })

    return tickets
}

function generateConfirmationNumber() {
    let letters = 'ABCDEFGHJKLMNPRSTUVWXYZ'
    let number = Math.floor(Math.random() * 10000)
    let confirmation = letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)] + number
    return confirmation
}

function generateTrackingNumber() {
    let number_part_1 = Math.floor(100000000 + Math.random() * 999999999);
    let number_part_2 = Math.floor(100000000 + Math.random() * 999999999);
    let number = String(number_part_1) + String(number_part_2);
    
    let tracking_num = `${number.substring(0, 1)} ${number.substring(1, 4)} ${number.substring(4, 7)} ${number.substring(7, 11)} ${number.substring(11, 15)} ${number.substring(15, 16)}`
    return tracking_num
}

function generateDataNumber() {
    let letters = 'ABCDEFGHJKLMNPRSTUVWXYZ'
    let number = Math.floor(10 + Math.random() * 99)
    
    let first_letter = letters[Math.floor(Math.random() * letters.length)]
    let second_letter = letters[Math.floor(Math.random() * letters.length)]

    let data_string = `00 ${first_letter}${number} ${second_letter}`

    return data_string;
}

function generateBoardingZone() {
    let letters = 'ABCD'
    let number = Math.floor(1 + Math.random() * 4)

    return letters[Math.floor(Math.random() * letters.length)] + number
}

function generatePrice() {
    let price = 0;
    price = Math.floor((75 + Math.random() * 205))
    let e = price
    let p = price += Math.floor((100 + Math.random() * 215))
    let f = price += Math.floor((350 + Math.random() * 510))

    let prices = {
        economy: e,
        preferred: p,
        first: f
    }

    return prices
}

function generatePassenger() {
    let random_names = [
        'Eilene Raya',
        'Elia Bologna',
        'Joie Brauer',
        'Lynnette Pridgeon',
        'Valorie Lytch',
        'Jack Kilmer',
        'Adria Backus',
        'Ian Rainville',
        'Rodolfo Beachum',
        'Gaynelle Meek',
        'Jen Davalos',
        'Miyoko Pompa',
        'Chang Murdock',
        'Tennille Grundy',
        'Tanner Cerrone',
        'Spring Shahan',
        'Talia Narvaez',
        'Al Sheller',
        'Pierre Nicklas',
        'Margherita Kluck',
        'Tressa Grider',
        'Cira Dustin',
        'Otilia Oyer',
        'Consuelo Cooks',
        'Cheri Newhard',
        'Shawnna Caya',
        'Vincenza Passman',
        'Mercedes Barry',
        'Kandy Fahnestock',
        'Corey Heckler',
        'Lia Tiggs',
        'Randell Ney ', 
        'Herschel Holter ', 
        'Ela Strassburg',  
        'Shonda Niemiec', 
        'Quinn Sandage',  
        'Georgann Worrall',
        'Latosha Finkbeiner',
        'Samantha Wilkinson',
        'Mica Enger',
        'Esmeralda Dominquez',
        'Yuonne Coppa',
        'Carlee Dolson',
        'Sarah Knaack',
        'Ismael Brimmer',
        'Rolland Hosler',
        'Sondra Witman',
        'Cherie Beringer',
        'Shawanda Ballweg',
        'Lashawnda Tester',
        'Gil Lollis',
        'Noma Gillock',
        'Marianne Cunningham',
        'Jerilyn Pon',
        'Ami Festa',
        'Timothy Moffett',
        'Xochitl Wirt',
        'Lyndsay Helmers',
        'Aracely Helzer',
        'Jettie Samples',
        'Lakeesha Klingman',
        'Mickie Letourneau',
        'Burl Sutter',
        'Tajuana Mckie',
        'Beatrice Vines',
        'Tonya Petro',
        'Trudie Schuette',
        'Charlotte Kissel',
        'Eboni Purser',
        'Edward Mcduffie',
        'Delisa Boateng',
        'Nettie Mynatt',
        'Omar Renner',
        'Chantelle Holderman',
        'Sage Cosper',
        'Joellen Emrick',
        'Darin Cuffie',
        'Daina Laning',
        'Stefan Benes',
        'Yukiko Jacinto',
        'Adalberto Stahl',
        'Jada Bruce',
        'Stewart Southwell',
        'Cicely Mccalley',
        'Sharolyn Theriot',
        'Annita Mcbay',
        'Blanch Mire',
        'Demetrice Marquez',
        'Spring Traver',
        'Hester Landgraf',
        'Mildred Schuler',
        'Adria Carini',
        'Tammi Weatherman',
        'Joel Lengyel',
        'Annabell Conkle',
        'Shameka Cray',
        'Julianna Siewert',
        'Ettie Enders',
        'Caleb Angstadt',
        'Carey Celentano',

    ]
    let random_first = random_names.map(name => name.split(" ")[0])
    let random_last = random_names.map(name => name.split(" ")[1])

    if(Math.random() > 0.4) {
        // Random Person
        return {
            first_name: random_first[Math.floor(Math.random() * random_first.length)],
            last_name: random_last[Math.floor(Math.random() * random_last.length)]
        }
    } else {
        return {first_name: '', last_name: ''}
    }
}