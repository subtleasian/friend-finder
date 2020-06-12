var friendData = require("../app/data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res) {

    let matchProfile = {};

    for (let index = 0; index < friendData.length; index++) {
        // take each user profile's score, compare absolute difference with req.body
        // save the lowest difference one into matchProfile
    }

    friendData.push(req.body);
    res.json(matchProfile);
  });

};
