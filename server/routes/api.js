var Customer = require('../models/customer');
module.exports = function(router) {
    router.post('/customer', function(req, res) {
        console.log(req.body);
        var customer = new Customer();
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customer.phone = req.body.phone;
        customer.address.street = req.body.street;
        customer.address.city = req.body.city;
        customer.address.state = req.body.state;
        customer.address.zip = req.body.zip;
        //customer.firstname = "test";
        
        customer.save(function(err, data) {
            if(err) {
                throw err;
            }
            res.json(data);
        });
    });
    
    router.get('/customers', function(req, res){
        Customer.find({}, function(err, data){
            if(err) {
                throw err;
            }
            res.json(data);
        });
    });
    
    router.delete('/customers', function(req, res){
        Customer.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/customers/:id', function(req, res){
        Customer.findOne({_id: req.params.id}, function(err, data){
            if(err) {
                throw err;
            }
            res.json(data);
        });
    });
    
    router.delete('/customers/:id', function(req, res){
        Customer.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.post('/customers/:id', function(req, res){
        Customer.findOne({_id: req.params.id}, function(err, data){
            if(err) {
                throw err;
            }
            var customer = data;
            customer.firstname = req.body.firstname;
            customer.lastname = req.body.lastname;
            customer.phone = req.body.phone;
            if(req.body.address) {
                customer.address.street = req.body.street;
                customer.address.city = req.body.city;
                customer.address.state = req.body.state;
                customer.address.zip = req.body.zip;
            }
            
            customer.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
};