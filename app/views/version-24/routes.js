const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'choose-provider-answer'
router.post('/choose-provider-answer', function (req, res) {

  // Make a variable and give it the value from 'choose-provider'
  var chooseProvider = req.session.data['choose-provider']

  // Check whether the variable matches a condition
  if (chooseProvider == "ambition institute"){
    // Send user to next page
    res.redirect('/financial-statement-NPQ-v9')
  } else {
    // Send user to ineligible page
    res.redirect('/financial-statement-NPQ-v9-page-unavailable')
  }

})

// Run this code when a form is submitted to 'choose-programme-answer'
router.post('/choose-programme-answer', function (req, res) {

  // Make a variable and give it the value from 'ecf-or-npq'
  var chooseProgramme = req.session.data['ecf-or-npq']

  // Check whether the variable matches a condition
  if (chooseProgramme == "ecf payments"){
    // Send user to next page
    res.redirect('/version-24/choose-provider-ecf')
  } else {
    // Send user to ineligible page
    res.redirect('/version-24/choose-provider-npq')
  }

})

// Run this code when a form is submitted to 'add-adjustment-answer'
router.post('/add-adjustment-answer', function (req, res) {

  // Make a variable and give it the value from 'add-another'
  var needAnotherAdjustment = req.session.data['add-another']

  // Check whether the variable matches a condition
  if (needAnotherAdjustment == "no"){
    // Send user to next page
    res.redirect('/index')
  } else {
    // Send user to ineligible page
    res.redirect('/add-adjustment-type')
  }

})

// Run this code when a form is submitted to 'remove-adjustment-answer'
router.post('/remove-adjustment-answer', function (req, res) {

  // Make a variable and give it the value from 'remove-adjustment'
  var removeAdjustment = req.session.data['remove-adjustment']

  // Check whether the variable matches a condition
  if (removeAdjustment == "no"){
    // Send user to next page
    res.redirect('/adjustments-add-to-a-list')
  } else {
    // Send user to ineligible page
    res.redirect('/index')
  }

})
module.exports = router
