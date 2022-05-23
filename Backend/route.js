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
    var vehicles = Vehicle.find().select({ "_id": 0, "__v": 0 });

    vehicles.exec(function (err, vehicle) {
        if (err) {
            res.json({
                msg: 'Failed to get vehicles'
            });
        } else {
            res.json(vehicle);
        }
    });
});

//Read a document
router.get('/getVehicle', (req, res, next) => {
    var id = req.query.id;
    var vehicle = Vehicle.find({ "id": id }).select({ "_id": 0, "__v": 0 });

    vehicle.exec(function (err, vehicle) {
        if (err) {
            res.json({
                msg: 'Failed to get vehicle'
            });
        } else {
            res.json(vehicle);
        }
    });
});

//Update a document
router.post('/update', (req, res, next) => {
    var id = req.body.id;
    var vehicle = Vehicle.findOneAndUpdate({ "id": id }, {
        $set: {
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
        }
    }, { new: true });

    vehicle.exec(function (err, vehicle) {
        if (err) {
            res.json({
                msg: 'Failed to update vehicle'
            });
        } else {
            res.json({
                msg: 'Vehicle updated successfully'
            });
        }
    });
});

//Delete a document
router.get('/delete', (req, res, next) => {
    var id = req.query.id;
    var vehicle = Vehicle.findOneAndDelete({ "id": id });

    vehicle.exec(function (err, vehicle) {
        if (err) {
            res.json({
                msg: 'Failed to delete vehicle'
            });
        } else {
            res.json({
                msg: 'Vehicle deleted successfully'
            });
        }
    });
});


module.exports = router;