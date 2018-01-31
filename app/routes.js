var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})





// Branching

router.get('/pharma-details', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaDetails

  if (compare === 'false') {
    // redirect to the relevant page
    res.redirect('/edit-pharma-details')
  } else {
    // if function is any other value (or is missing) render the page requested
    res.render('review-pharma-hours')
  }
})



router.get('/pharma-hours', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaHours

  if (compare === 'false') {
    // redirect to the relevant page
    res.redirect('/edit-pharma-hours')
  } else {
    // if function is any other value (or is missing) render the page requested
    res.render('review-pharma-holidays')
  }
})




router.get('/pharma-hols', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaHols

  if (compare === 'false') {
    // redirect to the relevant page
    res.redirect('/edit-pharma-holidays')
  } else {
    // if function is any other value (or is missing) render the page requested
    //
    // The next step after reviewing/editing the pharmacy details, hours, holidays
    // could be the hours of the services, but could equally be a service search, select
    // review, edit or other next step that best fulfils the user needs at this point
    res.render('review-service-hours')
  }
})


router.get('/pharma-servicehours', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaServiceHours

  if (compare === 'false') {
    // redirect to the relevant page
    res.redirect('/edit-pharma-service-hours')
  } else {
    // if function is any other value (or is missing) render the page requested
    res.render('review-pharma-service-holidays')
  }
})


module.exports = router
