
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'IMD WKApp' });
};

exports.newuser = function(req, res){
  res.render('newuser', { title: 'Add new user'});
};

/*exports.admin = function(req, res){
  res.render('admin', { title: 'Admin control panel'});
};*/
exports.adduser = function(db) {
    return function(req, res) {
    	var username = req.body.username;
    	var password = req.body.userpassword;
    	var checkpassword = req.body.userconfirmpassword;

    	if (password === checkpassword) {

    		// Collection aanmaken
            var collection = db.get('usercollection');

            // Submit to the DB
            collection.insert({
                "username" : username,
                "userpassword" : password,
                "admin" : "no"
            });

    	}
    }
}
exports.savechange = function(db) {
    return function(req, res) {
        var land1 = req.body.ploeg1;
        var land1score = req.body.scoreploeg1;
        var land1fouls = req.body.foulsploeg1;
        var land1shots = req.body.shotsploeg1;
        var land1shotsongoal = req.body.shotsongoalploeg1;
        var land1pass = req.body.passpercentploeg1;
        var land1posession = req.body.posessionploeg1;
        var land1yellow = req.body.yellowcardploeg1;
        var land1red = req.body.redcardploeg1;

        var land2 = req.body.ploeg2;
        var land2score = req.body.scoreploeg2;
        var land2fouls = req.body.foulsploeg2;
        var land2shots = req.body.shotsploeg2;
        var land2shotsongoal = req.body.shotsongoalploeg2;
        var land2pass = req.body.passpercentploeg2;
        var land2posession = req.body.posessionploeg2;
        var land2yellow = req.body.yellowcardploeg2;
        var land2red = req.body.redcardploeg2;
        

            // Collection aanmaken
            var collection = db.get('matches');

            // Submit to the DB
            collection.update({
                "_id" : "54dd45818131d0b94fd2eb8c"},{
                "land1" : land1,
                "land1score" : land1score,
                "land1fouls" : land1fouls,
                "land1shots" : land1shots,
                "land1shotsongoal" : land1shotsongoal,
                "land1pass" : land1pass,
                "land1posession" : land1posession,
                "land1yellow" : land1yellow,
                "land1red" : land1red,
                "land2" : land2,
                "land2score" : land2score,
                "land2fouls" : land2fouls,
                "land2shots" : land2shots,
                "land2shotsongoal" : land2shotsongoal,
                "land2pass" : land2pass,
                "land2posession" : land2posession,
                "land2yellow" : land2yellow,
                "land2red" : land2red
                });
    }
}
exports.update = function(db) {
    return function(req, res) {
        var type = req.body.type;
        var speler = req.body.speler;
        var min = req.body.minuut
            // Collection aanmaken
            var collection = db.get('updates');

            // Submit to the DB
            collection.insert({
                "type": type,
                "speler": speler,
                "min": min
                });
    }
}
exports.scoreboard = function(db){
    return function(req, res) {
        var collection = db.get('matches');
        collection.findOne({_id: "54dd45818131d0b94fd2eb8c"},function(err, doc) {
        res.render('scoreboard', {
            "overzicht" : doc, 
            title: ''
        });

    });
    };
};
exports.admin = function(db){
    return function(req, res) {
        var collection = db.get('matches');
        collection.findOne({_id: "54dd45818131d0b94fd2eb8c"},function(err, doc) {
        res.render('admin', {
            "overzicht" : doc, 
            title: 'Admin control panel'
        });

    });
    };
};

        	
