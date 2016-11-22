var controller = require('../controllers/controller.js');
module.exports = function(app){
  app.get('/', 
    controller.index);

  app.post('/new', 
    controller.new);

  app.post('/login', 
    controller.login);

  app.get('/logout', 
    controller.logout);

// <---------------from this point on we must have Authentication--------------->


  app.use(loginAuthentication);

  app.get('/main', 
    controller.main);

  app.get('/getuser', 
    controller.getthemUsers);

  app.post('/newquestion', 
    controller.newQuest);

  app.get('/getquestion/:id', 
    controller.getQuest);

  app.post('/newanswer/:id', 
    controller.newAns);

  app.get('/like/:question_id/answer/:answer_id', 
    controller.likes);

}
function loginAuthentication(req,res,next){
  if(req.session.user){
    next();
  }else{
    res.status(401).send('user not logged in')
  }
}
