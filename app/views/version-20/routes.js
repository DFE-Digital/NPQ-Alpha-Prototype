module.exports = (app) => {

    app.get('/prototype/test', function(req, res) {
        res.write("I am a new route")
        res.end();
    });
  
  var version = 'version-20'
   
    app.post('/' + version + '/payments/payment-breakdown', function (req, res) {
  
  
      if (req.body.pn2 === "ecf1") {
          res.redirect('/' + version + '/payments/ecf-payment-breakdown');
  
      } else  {
          res.redirect('/' + version + '/payments/npq-payment-breakdown');
  
      }
  
    
  });
  
  
  
  }
  
   
  
  
  