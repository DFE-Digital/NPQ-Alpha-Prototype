module.exports = (app) => {

  app.get('/prototype/test', function(req, res) {
      res.write("I am a new route")
      res.end();
  });

var version = 'version-18'
 
  app.post('/' + version + '/payments/payment-breakdown', function (req, res) {


    if (req.body.pn2 === "ecf1") {
        res.redirect('/' + version + '/payments/ecfBreakdownv8');

    } else  {
        res.redirect('/' + version + '/payments/npqList');

    }

  
});



}

 


