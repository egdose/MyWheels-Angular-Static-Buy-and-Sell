var express = require('express');
var router = express.Router();

//Importing Vehicle Schema
var Vehicle = require('./models/vehicle');

//Create a document
router.post('/add', (req, res, next) => {
    console.log("[] Add request received");
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
    console.log("[] Get all vehicle request received");
    var vehicles = Vehicle.find().select({ "_id": 0, "__v": 0 });

    vehicles.exec(function (err, vehicle) {
        if (err) {
            res.json({
                msg: 'Failed to get vehicles'
            });
        } else {
            res.send(JSON.stringify(vehicle));
        }
    });
});

//Read a document
router.get('/getVehicle', (req, res, next) => {
    console.log("[] Get vehicle by id request received");
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
    console.log("[] Update vehicle request received");
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
    console.log("[] Delete vehicle request received");
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

//Testing API
router.get('/getCheck', (req, res, next) => {
    console.log("[] Test API request received");
    res.json([{
        id: 1000,
        title: 'Test Vehicle',
    },
    {
        id: 1001,
        title: 'Test Vehicle',
    }
    ]);
});


module.exports = router;