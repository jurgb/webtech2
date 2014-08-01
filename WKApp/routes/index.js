
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
        	
