module.exports = (app) => {

    app.get('/prototype/test', function(req, res) {
        res.write("I am a new route")
        res.end();
    });
  
  var version = 'version-22'
   
    app.post('/' + version + '/payments/payment-breakdown', function (req, res) {
  
  
      if (req.body.scheme === "Early Career Framework (ECF)") {
          res.redirect('/' + version + '/payments/ecf-payment-breakdown');
  
      } else  {
          res.redirect('/' + version + '/payments/npq-payment-breakdown');
  
      }
      
        
    });
    
      
      app.post('/' + version + '/providers/trainee-scheme-route', function (req, res) {
  
  
        if (req.body.scheme === "Early Career Framework (ECF)") {
            res.redirect('/' + version + '/providers/ecf-payment-breakdown');
    
        } else  {
            res.redirect('/' + version + '/providers/npq-payment-breakdown');
    
        }
        
    
      
    });

  app.post('/' + version + '/user-flow', function (req, res) {
  
  
    if (req.body.user === "cm") {
        res.redirect('/' + version + '/performance/service-performance');

    } else  {
        res.redirect('/' + version + '/providers/email-notification');

    }
    

  
});
  
  
  
  }
  
   
  
  
  