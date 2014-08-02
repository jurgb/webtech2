
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'IMD WKApp' });
};

exports.newuser = function(req, res){
  res.render('newuser', { title: 'Add new user'});
};

exports.admin = function(req, res){
  res.render('admin', { title: 'Admin control panel'});
};

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
                "userpassword" : password
            });

    	}
    }
}
exports.savechange = function(db) {
    return function(req, res) {
        var land1 = req.body.ploeg1;
        var land2 = req.body.ploeg2;
        var land1score = req.body.scoreploeg1;
        var land2score = req.body.scoreploeg2;

        

            // Collection aanmaken
            var collection = db.get('matches');

            // Submit to the DB
            collection.update({
                "_id" : "54dd45818131d0b94fd2eb8c"},{
                "land1" : land1,
                "land2" : land2,
                "scoreland1" : land1score,
                "scoreland2" : land2score
                });

        
    }
}
        	
