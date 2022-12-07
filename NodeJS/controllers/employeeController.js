const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Student } = require('../models/employee');




// => localhost:3000/employees/
router.get('/', (req, res) => {
    console.log("get reached")
    Student.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log(JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`${req.params.id}`);

    Student.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log(JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    console.log("reched back")
    var emp = new Student({
        id: req.body.id,
        gmail: req.body.gmail,
        personalNumber: req.body.personalNumber,
        name: req.body.name,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        category: req.body.category,
        isactive: req.body.isactive,
    });
   
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log( JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    console.log("update")
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`${req.params.id}`);

 var emp = new Student({
        id: req.body.id,
        gmail: req.body.gmail,
        personalNumber: req.body.personalNumber,
        name: req.body.name,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        category: req.body.category,
        isactive: req.body.isactive,
    });
    Student.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log(JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`${req.params.id}`);

    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log(JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;