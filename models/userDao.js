const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');

let usersCollection; 

module.exports = class UserDAO {
    static async injectDB(conn) {
        if(usersCollection) {
            return;
        }
        try {
            usersCollection = await conn.db("users").collection("details");
            console.log("Connected to Database..");
        }catch(e) {
            console.error("Unable to establish collection handles in userDAO: " + e);
        }
    }

    static async registerUser(username, password) {
        try{
            const newUser = {
                username: username,
                saved_places: []
            }
            // Hashing Password
            const saltRounds = 10;
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if(err)
                    throw err;
                newUser.password = hash;
                usersCollection.insertOne(newUser);
            })
        }catch(e) {
            console.error("Unable to register user");
            return {error: e};
        }
    }
    static async findUser(username) {
        try {
            return usersCollection.findOne({username: username});
        }catch(e) {
            console.error(e);
        }
    }
    static async updateUserSavedPlaces(user, newSavedPlace) {
        try { 
            usersCollection.updateOne({username: user.username}, {$push: newSavedPlace});
        }catch(e) {
            console.error(e);
        }
    }
}

