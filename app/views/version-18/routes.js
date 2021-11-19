module.exports = (app) => {

  app.get('/prototype/test', function(req, res) {
      res.write("I am a new route")
      res.end();
  });


 
  app.post('/version-18/payments/payment-breakdown', function (req, res) {


    if (req.body.pn2 === "ecf1") {
        res.redirect('/version-18/payments/ecfBreakdownv8');

    } else  {
        res.redirect('/version-18/payments/npqList');

    }

  
});



}

 


