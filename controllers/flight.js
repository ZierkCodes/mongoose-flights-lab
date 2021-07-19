import { Flight } from '../models/flight.js'
import { Airport } from '../models/airport.js'

export {
    createFlight,
    getFlights,
    getFlight,
    queryFlights
 }

/**
 * This create method will automagically create a flight with all the required data at the click of a button! =) 
 */
function createFlight(req, res) {
    let airline = randomAirline();
    let origin = randomAirport();
    let destination = randomDestination(origin.code);
    let duration = generateDuration()

    let flight_data = {
        number: generateFlightNumber(airline.code),
        airline: airline.name,
        plane: {
            name: randomPlane()
        },
        origin: origin,
        destination: destination,
        departure: generateDeparture(),
        duration: duration,
        gate: generateGate(),
        amenities: randomAmenities(duration),
        tickets: []
    }
    console.log(flight_data)

    const flight = new Flight(flight_data);

    Flight.find({$or:[{number: flight.number}, {depature: flight.departure}]}, function(error, records) {
        if(records.length) {
            res.send('A similar flight already exists. Try creating a new one.')
        } else {
            flight.save(function (error) {
                if(error) {
                    return res.send(error)
                } else {
                    return res.send(flight._id)
                }
            })
        }
    })
}

function queryFlights(req, res) {

    let origin = req.body.origin
    let destination = req.body.destination
    let passengers = req.body.passengers
    let trip_type = req.body.trip_type
    let departure_date = req.body.departure_date
    let return_date = null

    if(trip_type === 'round-trip') {
        return_date = req.body.return_date
    }

    res.send(origin, destination, passengers, trip_type, depature_date, return_date)
    // Origin Airport - OR - City
    // Destination Airport - OR - City
    // Passenger Count
    // Trip Type - Round Trip / One-Way
    // Date Start
    // Date End - IF ROUND TRIP
    
    // QUERY FLIGHTS
    // Query Flight Date Start
    // IF ROUND TRIP
    // Query Flights Date End
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
    let currentMonth = currentDate.getMonth() + 1

    let startDate = new Date(currentYear, currentMonth, 1)
    let endDate = new Date();
    let startHour = 0;
    let endHour = 24;

    let date = new Date(+startDate + Math.random() * (endDate - startDate))
    let hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
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