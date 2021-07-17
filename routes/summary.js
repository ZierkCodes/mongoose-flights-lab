import { Router } from 'express'
const router = Router()

/* GET summary page. */
router.get('/', function(req, res, next) {
  res.render('flights/summary')
})

export { 
  router
}
