import { Router } from 'express'
const router = Router()

/* GET payment page. */
router.get('/', function(req, res, next) {
  res.render('flights/payment')
})

export { 
  router
}
