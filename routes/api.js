const express = require("express");
const router = express.Router();
const Exercice = require("../models/Exercice");
const Session = require("../models/Session");
const AdminPassword = require("../models/AdminPassword");

// GET //////////////////////////////////////////////////
router.get("/exercises", (req, res) => {
    Exercice.find({})
        .then(data => {
            console.log("Data found");
            res.json(data);
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

router.get("/sessions", (req, res) => {
    Session.find({})
        .then(data => {
            console.log("Data found");
            res.json(data);
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

router.get("/admin-verification", (req, res) => {
    AdminPassword.find({})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

// POST //////////////////////////////////////////////////
router.post("/exercises/delete", (req, res) => {
    const data = req.body;
    const queryToFind = Object.keys(data);

    Exercice.findOneAndDelete({ _id: queryToFind })
        .then(result => {
            console.log("Exercise successfully deleted");
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

router.post("/sessions/delete", (req, res) => {
    const data = req.body;
    const queryToFind = Object.keys(data);

    console.log(queryToFind);

    Session.findOneAndDelete({ _id: queryToFind })
        .then(result => {
            console.log("Session successfully deleted");
        })
        .catch(error => {
            console.log("error: ", error);
        });
});

router.post("/exercises/save", (req, res) => {
    const data = req.body;
    const newExercice = new Exercice(data);

    newExercice.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Sorry, internal server errors" });
        } else {
            res.json({
                msg: "Your data has been saved !"
            });
        }
    });
});

router.post("/sessions/save", (req, res) => {
    const data = req.body;
    console.log(data);
    const newSession = new Session(data);

    newSession.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Sorry, internal server errors" });
        } else {
            res.json({
                msg: "Your data has been saved !"
            });
        }
    });
});

module.exports = router;