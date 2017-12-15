var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req,res){
    db.burgers.findAll({}).then(function(data) {
      var hbsObject = {
       burgers: data
     }
     res.render("index", hbsObject);
   });
  });
  app.post('/burgers', function(req, res) {
    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: 0
    }).then(function(data){
      res.redirect('/');
    });
  });
  app.put('/burgers/:id',function(req, res) {
    db.burgers.update({
      devoured:1
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.redirect('/');
    });
  });
  app.delete('/burgers/:id',function(req, res) {
    db.burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.redirect('/');
    });
  });
}
