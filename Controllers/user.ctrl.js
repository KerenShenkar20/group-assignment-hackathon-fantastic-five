
const User = require('../Models/user');

exports.userController = {
    getUsers(req, res) {
        if(Object.keys(query).length !== 0){
            let query = {}

            if (req.query.gender){
                query.gender = req.query.gender
            }
            if (req.query.age){
                query.age = req.query.age
            }
            if (req.query.interest){
                query.interest = req.query.interest
            }
    
            console.log("req.query.gender");
            User.find(query)
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }
        User.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    getUser(req, res) {
        User.findOne({ id: req.params.id  })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

<<<<<<< HEAD
=======
    filterUsers(req, res) {
        // let query = {}

        // if (req.query.gender){
        //     query.gender = req.query.gender
        // }

        console.log(`${req.query.gender}`);
        // User.find(query)
        //     .then(docs => { res.json(docs) })
        //     .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
>>>>>>> 74e6311632f6b12114c360e9a9c85581821332d8

    addUser(req, res) {
        const { body } = req;
        const newUser = new User(body);
        const result = newUser.save();
        if (result) {
            res.json(newUser)
        } else {
            res.status(404).send("Error saving a restaurant");
        }
    },
    updateUser(req, res) {
        const { body } = req;
        User.updateOne({ id: req.params.id }, body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error updating restaurant from db: ${err}`));
    },
    deleteUser(req, res) {
        User.deleteOne({ id: req.params.id })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error deleting user from db: ${err}`));
    }
};