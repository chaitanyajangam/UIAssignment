var express = require('express');
var router = express.Router();
var config = require('../config/database');
var Model = require('../models/user.model');
 passwordHash = require('password-hash'),
  jwt = require('jsonwebtoken'),
  fs = require('fs'),
  path = require('path'),
  crypto = require("crypto")

router.get('/userprofile/:userId', function (req, res, next) {
    //var id= req.params.id;
    Model.findOne({_id: req.params.userId}, function (err, users) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                users: users
            })
        }
    });
});

module.exports = router;