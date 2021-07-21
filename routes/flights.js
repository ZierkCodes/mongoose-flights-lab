import { Router } from 'express'
const router = Router()

import * as flightController from '../controllers/flight.js'

router.get('/', flightController.queryOutboundFlights, flightController.queryReturnFlights)
router.post('/create', flightController.createFlight)
router.put('/purchase', flightController.purchaseTickets)
router.get('/summary', flightController.getOneWaySummary, flightController.getRoundTripSummary)
router.get('/checkout', flightController.checkOutTrip, flightController.checkOutRoundTrip)
router.get('/seats', flightController.selectOneWaySeats, flightController.selectRoundTripSeats)
router.get('/confirmation/:confirmation_number', flightController.getConfirmation)
router.get('/all', flightController.getFlights)
router.get('/:id', flightController.getFlight)


export { 
  router
}
