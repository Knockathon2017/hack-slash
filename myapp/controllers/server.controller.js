//Add a new user
var User = require('../models/server.model');
exports.create = function(req,res){
    var entry = new User({
        first_name: req.first_name,
        last_name: req.last_name,
        user_name: req.user_name,
        email: req.email,
        address1: req.address1,
        address2: req.address2,
        zipcode:req.zipcode,
        phone:req.phone,
        mobile:req.mobile
        
    });
    
    //save to db
    entry.save(function(err){
        console.log(err);
    });
    
    //redirect to login page
    res.redirect(301, '/login');
};

//get provider by zipcode
exports.ListProvidersByZipCode = function(req, res){
    var query = User.find({zipcode: req.zipcode})
                    .exec(function(err, results){
                        return results;
                    }); 
};

//get single provider
exports.GetProviderById = function(req,res){
    var query = User.find();
    var providerId = req.id;
    query.where({id:req.id});
    query.exec(function(err, results){
        return results;
    });
};

//get user information
exports.GetUserInformation = function(req, res){
    var query = User.findOne({user_name: req.user_name},function(err){
        console.log(err);
    });
    query.exec(function(error, results){
    return  results;
    });
}