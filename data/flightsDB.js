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
];

let ticket = {
    flight: 'XX1234',
    airline: 'Southwest Airlines',
    origin: 'ATL', // Airport Code
    destination: 'AUS', // Airport Code
    passenger: {
        first_name: 'Garnett',
        last_name: 'Steiner'
    },
    departure: new Date('Thur Aug 14 2021 08:15:00'), // This Date Object will come from elsewhere, just a string placeholder for now.
    gate: 'A22',
    boarding_zone: 'D3',
    seat: '3C', // Taken from the selected seats
    options: '1st cl',
    tracking: '2 207 365 3958 3309 0',
    data: '00 U78 D'
}

let passenger = {
    first_name: 'Garnett',
    middle_name: '',
    last_name: 'Steiner',
    date_of_birth: 'MM/DD/YYYY', // This will be a date object that is made from their input
    gender: 'female',
    known_traveler_number: ''
}

let transaction = {
    contact_info: {
        country_code: '+1',
        phone_number: '123-456-7890',
        email_address: 'blah@blah.com'
    },
    credit_card: {
        number: 'XXXX XXXX XXXX 1234', // JUST INSERT LAST 4 OF NUMBER
        expiration_date: 'MM/YY',
        cvv: '123',
        name_on_card: 'Garnett Steiner'
    },
    total_amount: '2,313.80',
    passengers: ['customerID1', 'customerID2'], // ARRAY OF PASSENGER IDs
    flight_data: [{
        flight: 'XX1234',
        passengers: 2,
        ticket_price: '578.45',
        seats: ['2C, 3C'],
        class: 'first'
    }, {
        flight: 'XX1234',
        passengers: 2,
        ticket_price: '578.45',
        seats: ['2C, 3C'],
        class: 'first'
    }]
}

let airport = {
    code: 'AUS',
    city: 'Austin, TX'
}
// Need for AUS, ATL, DFW, DEN, LAX, SAN

let planes = ['Boeing B737', 'Airbus A319', 'Airbus A320', 'Embraer EMB']

let search_object = {
    origin: 'ATL', // AIRPORT CODE
    destination: 'AUS', // AIRPORT CODE
    trip_type: 'round-trip', // Round-Trip or One Way?
    dates: {
        departure: 'Aug 1', // This will be a more refined Date
        return: 'Aug 7', // This will be a more refined Date
    },
    passengers: 1
}

let flight = {
    code: 'AA1234', // RANDOM GENERATED
    airline: 'American Airlines', // FROM AIRLINES
    plane: 'Airbus A319', // FROM PLANES
    origin: 'ATL', // FROM AIRPORTS
    destination: 'AUS', // FROM AIRPORTS
    departure: {
        date: 'Date', // This will either be entered from the admin panel or randomly populated
        duration: '2h 18m' // How long the flight will take. Will be randomly generated on creation of flight
        // Arrival time is calculated from Date + duration
    },
    price: {
        economy: 107, // Randomy Generated between 75 - 205
        preferred: 327, // Randomly add 100 - 215
        first: 568, // randomly add 350 - 510
    },
    amenities: {
        technology: true, // random
        entertainment: true, // random
        meals: false // random
    },
    seats: { // an array of all your seats for each section.
        first: [{
            seat: 'A1',
            passenger: null //otherwise passenger id
        }],
        preferred: [{
            seat: 'C7',
            passenger: null // otherwise passenger id
        }],
        economy: [{
            seat: 'D1',
            passenger: null // otherwise passenger id
        }]
    }
}



// Flights = 2 Digit Abbreviation
// American Airlines = AA1234
// Delta = DL1234
// Southwest = SW1234
// United Airlines = UA1234
// We'll just randomize digits between 10 and 9999 - PART OF THE FLIGHT OBJECT, JUST REFERENCED IN TICKET

// Gate: Random Letter A-G, Random Number 1-38 - PART OF THE FLIGHT OBJECT, JUST REFERENCED IN TICKET
// Boarding Zones: Random Letter A-D, Random Number 1-4 - PART OF THE FLIGHT OBJECT, JUST REFERENCED IN TICKET

// OPTIONS
// First Class = 1st cl
// Preferred Plus = pref+
// Economy = econ

// TRACKING
// Random 16 digit number
// splice a space at indexes: 1,5,9,14,18

// DATA
// Always Start with 00
// Random letter A-Z
// Random number 10-99
// Random letter A-Z

// When Creating Flights, randomize the date created from 1 month to 1 year from the date created