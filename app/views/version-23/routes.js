module.exports = (app) => {

    app.get('/prototype/test', function(req, res) {
        res.write("I am a new route")
        res.end();
    });
  
  var version = 'version-23'
   
    app.post('/' + version + '/payments/payment-breakdown', function (req, res) {
  
  
      if (req.body.scheme === "Early career framework (ECF)" && req.body.test === "test 1") {
          res.redirect('/' + version + '/payments/ecf-payment-breakdown');
  
      } else  {
          res.redirect('/' + version + '/payments/npq-payment-breakdown');
  
      }
      
        
    });
    app.post('/' + version + '/access-management/signin', function (req, res) {
  
  
      if (req.body.user['email']  === "delivery-partner@example.com") {
          res.redirect('/' + version + '/access-management/already-user');
  
      } else  {
          res.redirect('/' + version + '/access-management/signin-as-sit?noaccess=false');
  
      }
      
  
    
  });

  app.post('/' + version + '/access-management/access', function (req, res) {
  
  
    if (req.body.accessotherrole  === "yes") {
        res.redirect('/' + version + '/access-management/access-management1');

    } else  {
        res.redirect('/' + version + '/access-management/delivery-partners-2');

    }
    

  
});
      
      app.post('/' + version + '/providers/trainee-scheme-route', function (req, res) {
  
  
        if (req.body.scheme === "Early career framework (ECF)") {
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
  
   
  
  
  