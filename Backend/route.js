var express = require('express');
var router = express.Router();

//Importing Vehicle Schema
var Vehicle = require('./models/vehicle');

//Create a document
router.post('/add', (req, res, next) => {
    var newVehicle = new Vehicle({
        id: req.body.id,
        title: req.body.title,
        image: req.body.image,
        city: req.body.city,
        price: req.body.price,
        dateAdded: req.body.dateAdded,
        rating: req.body.rating,
        make: req.body.make,
        year: req.body.year,
        mileage: req.body.mileage,
        color: req.body.color,
        engine: req.body.engine,
        type: req.body.type
    });

    newVehicle.save((err, vehicle) => {
        if (err) {
            res.json({
                msg: 'Failed to add vehicle'
            });
        } else {
            res.json({
                msg: 'Vehicle added successfully'
            });
        }
    });
});

//Read all documents
router.get('/getVehicles', (req, res, next) => {
    Vehicle.find((err, vehicles) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(vehicles);
        }
    });
});

//Read a document
router.get('/getVehicle/:id', (req, res, next) => {
    res.send('Get a vehicle');
});

//Update a document
router.post('/update', (req, res, next) => {
    res.send('Update a vehicle');
});

//Delete a document
router.post('/delete', (req, res, next) => {
    res.send('Delete a vehicle');
});


module.exports = router;