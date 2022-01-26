module.exports = (app) => {

    app.get('/prototype/test', function(req, res) {
        res.write("I am a new route")
        res.end();
    });
  
  var version = 'version-21'
   
    app.post('/' + version + '/payments/payment-breakdown', function (req, res) {
  
  
      if (req.body.scheme === "Early Career Framework") {
          res.redirect('/' + version + '/payments/ecf-payment-breakdown');
  
      } else  {
          res.redirect('/' + version + '/payments/npq-payment-breakdown');
  
      }
  
    
  });
  
  
  
  }
  
   
  
  
  