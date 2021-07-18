import dotenv from 'dotenv'
import connectDB from './config/database.js' // DB connection
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import('./config/database.js')
import methodOverride from 'method-override'

import { router as indexRouter } from './routes/index.js'
import { router as usersRouter } from './routes/users.js'
import { router as flightsRouter } from './routes/flights.js'
import { router as summaryRouter } from './routes/summary.js'
import { router as checkoutRouter } from './routes/checkout.js'

dotenv.config()
const PORT = process.env.PORT || 5000
const mode = process.env.NODE_ENV

const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)


app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/flights', flightsRouter)
app.use('/summary', summaryRouter)
app.use('/checkout', checkoutRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export { app }
