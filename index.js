const express = require('express')
const app = express()

const { config } = require('./config/index')

const authApi = require('./routes/auth')
const moviesApi = require('./routes/movies')
const userMoviesApi = require('./routes/userMovies')

const {
	logErrors,
	wrapErrors,
	errorHandler,
} = require('./utils/middleware/errorHandlers')

const notFoundHandler = require('./utils/middleware/notFoundHandler')

//Body parser
app.use(express.json())

//routes
authApi(app)
moviesApi(app)
userMoviesApi(app)

//Catch 404
app.use(notFoundHandler)

//Errors middelware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, () => {
	console.log(`Listening http://localhost:${config.port}`)
})
