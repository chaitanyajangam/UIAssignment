const Person = require ('../models/person.model');


module.exports = (router) => {

    router.post('/createperson', (req, res, next) =>{
        console.log("hi");
        console.log(req.body.age);
        if(!req.body.name1){
            console.log(req.body.name1);
            res.json({success:false,message:'you have to provide Name'});
        }else{
            if(!req.body.gender){
            res.json({success:false,message:'you have to provide Gender'});
        }else{
            if(!req.body.age){
            res.json({success:false,message:'you have to provide Age'});
        }else{
            if(!req.body.phoneNumber){
            res.json({success:false,message:'you have to provide PhoneNuumber'});
        }else{
            let person = new Person({
                name1: req.body.name1,
                gender: req.body.gender,
                age: req.body.age,
                phoneNumber: req.body.phoneNumber,
            }); 
            console.log("person"+person);
            console.log("hi1");
            person.save((err) => {
                if (err){
                     res.json({success:false,message:'could not save Person,', err
                    });
                }else{
                    res.json({success: true, message: 'Hello chaithanya'});
                }
            });
       
    }}}}
    });
    return router;
}









/*var express = require('express');
var router = express.Router();
var config =require('../config/database');
var Model = require('../models/person.model');


router.get('/apples1',function(req,res, next){
Model.find({},function(err,apples){
    if(err){
        return res.status(404).json({
            code:404,
            message:'no',
            err: err
        })
    }else{
        res.status(200).json({
            message:'success',
            apples: apples
        })
    }
});
});

router.delete('/apple/:id',function(req,res, next){
var id = req.params.id;
Model.remove({_id: id},function(err,resource){
    if(err){
        return res.status(401).json({
            code:404,
            message:'no',
            err: err
        })
}else{
    res.status(202).json({
            message:'success',
            
    
})
}
})
})




router.post('/apple',function(req,res,next){
var apple=new Model(req.body);
console.log(apple);
apple.save(function(err,result){
    if(err){
       return  res.status(501).json({
           title:'there was',
           error: {message: 'the mail'}
       });
    }
        return res.status(201).json({
            message: 'su',
            obj: result
        })
    
});
});
module.exports = router;*/