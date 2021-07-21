import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {active: 'search-flights'})
})

router.get('/itinerary', function(req, res, next) {
  res.render('itinerary', {active: 'find-itinerary'})
})

export { 
  router
}
