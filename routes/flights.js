import { Router } from 'express'
const router = Router()

import * as flightController from '../controllers/flight.js'

// res.render('flights/flights.ejs')


// router.get('/summary', function(req, res, next) {
//     res.render('flights/summary', {activePage: 'trip-summary'})
// })

router.get('/summary', flightController.getOneWaySummary, flightController.getRoundTripSummary)

router.get('/checkout', function(req, res, next) {
    res.render('flights/payment', {activePage: 'review-and-pay'})
})

router.get('/confirmation', function(req, res, next) {
    res.render('flights/confirmation', {activePage: 'confirmation'})
})

router.get('/', flightController.queryOutboundFlights, flightController.queryReturnFlights)
router.post('/create', flightController.createFlight)
router.get('/all', flightController.getFlights)
router.get('/:id', flightController.getFlight)


// router.get('/outbound', flightController.queryFlights)

// router.get()

// GET Seating chart
router.get('/select-seats', function(req, res) {
console.log(req.params.class);
let classSelected = req.query.class;

let plane_chart = {
    sections: {
        first_class: {
            total_rows: 2,
            keys: ['A', 'C', 'isle', 'D', 'F'],
            rows: [
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
        },
        preferred_class: {
            total_rows: 6,
            keys: ['A', 'B', 'C', 'isle', 'D', 'E', 'F'],
            rows: [
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
        },
        economy_class: {
            total_rows: 14,
            keys: ['A', 'B', 'C', 'isle', 'D', 'E', 'F'],
            rows: [
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
 
  res.render('flights/seats.ejs', {plane_chart, classSelected})
})

export { 
  router
}
