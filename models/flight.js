import mongoose from 'mongoose'

export { Flight }

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    confirmation_number: {
        type: String,
        default: ''
    },
    tracking_number: {
        type: String,
        default: ''
    },
    data: {
        type: String,
        default: ''
    },
    options: {
        type: String,
        default: ''
    },
    flight_class: {
        type: String
    },
    seat: {
        isle: {
            type: String,
        },
        number: {
            type: Number,
        }
    },
    boarding_zone: {
        type: String
    },
    price: {
        type: Number
    },
    passenger: {
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        }
    }
})


// ! UPDATE ORIGIN AND DESTINATION WITH AIRPORT REFERENCES!!!
const flightSchema = new Schema({
    number: {
        type: String
    },
    airline: {
        type: String,
        enum: ['Southwest Airlines', 'Delta', 'American Airlines', 'United Airlines']
    },
    plane: {
        name: {
            type: String,
            enum: ['Boeing B737', 'Airbus A319', 'Airbus A320', 'Embraer EMB']
        },
        sections: {
            first_class: {
                total_rows: {
                    type: Number,
                    default: 2
                },
                keys: {
                    type: Array,
                    default: ['A', 'C', 'isle', 'D', 'F']
                },
                rows: {
                    type: Array,
                    default: [
                        [{
                            letter: 'A',
                            available: false,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
        
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
        
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: false,
                            exit: false
        
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }]
                    ]
                }
            },
            preferred_class: {
                total_rows: {
                    type: Number,
                    default: 6
                },
                keys: {
                    type: Array,
                    default: ['A', 'B', 'C', 'isle', 'D', 'E', 'F']
                },
                rows: {
                    type: Array,
                    default: [
                        [{
                            letter: 'A',
                            available: true,
                            exit: true
                        }, {
                            letter: 'B',
                            available: false,
                            exit: true
                        }, {
                            letter: 'C',
                            available: false,
                            exit: true
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: true
                        }, {
                            letter: 'E',
                            available: true,
                            exit: true
                        }, {
                            letter: 'F',
                            available: true,
                            exit: true
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: false,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: true
                        }, {
                            letter: 'B',
                            available: true,
                            exit: true
                        }, {
                            letter: 'C',
                            available: true,
                            exit: true
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: true
                        }, {
                            letter: 'E',
                            available: true,
                            exit: true
                        }, {
                            letter: 'F',
                            available: true,
                            exit: true
                        }]
                    ]
                }
            },
            economy_class: {
                total_rows: {
                    type: Number,
                    default: 14
                },
                keys: {
                    type: Array,
                    default: ['A', 'B', 'C', 'isle', 'D', 'E', 'F']
                },
                rows: {
                    type: Array,
                    default: [
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: false,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: false,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: false
                        }, {
                            letter: 'B',
                            available: true,
                            exit: false
                        }, {
                            letter: 'C',
                            available: true,
                            exit: false
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: false
                        }, {
                            letter: 'E',
                            available: true,
                            exit: false
                        }, {
                            letter: 'F',
                            available: true,
                            exit: false
                        }],
                        [{
                            letter: 'A',
                            available: true,
                            exit: true
                        }, {
                            letter: 'B',
                            available: true,
                            exit: true
                        }, {
                            letter: 'C',
                            available: true,
                            exit: true
                        }, {
                            isle: true
                        }, {
                            letter: 'D',
                            available: true,
                            exit: true
                        }, {
                            letter: 'E',
                            available: true,
                            exit: true
                        }, {
                            letter: 'F',
                            available: true,
                            exit: true
                        }]
                    ]
                }
            }
        }
    },
    origin: {
        code: {
            type: String
        },
        city: {
            type: String
        }
    },
    destination: {
        code: {
            type: String
        },
        city: {
            type: String
        }
    },
    departure: {
        type: Date
    },
    departure_date: {
        type: String
    },
    duration: {
        hours: {
            type: Number
        },
        minutes: {
            type: Number
        }
    },
    gate: {
        type: String
    },
    amenities: {
        technology: {
            type: Boolean
        },
        entertainment: {
            type: Boolean
        },
        meals: {
            type: Boolean
        }
    },
    tickets: [ticketSchema]
})

const Flight = mongoose.model('Flight', flightSchema)

