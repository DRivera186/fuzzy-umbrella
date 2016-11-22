var mongoose = require('mongoose');
var User = mongoose.model('user');//change example to what you desire
var Question = mongoose.model('question')
module.exports = {
  index: function(req,res){
    res.render('index')
  },
  new: function(req, res){
    console.log('<--------------I just made you a NEW user =) -------------------->'.yellow);
    console.log(req.body)
    var newuser = new User(req.body);
    newuser.save(function(err){
      if(err){
        console.log(err);
      }else{
        req.session.user = newuser;
        console.log('successfully added user')
        res.redirect('/main')
      }
    })
  },
  login: function(req,res){
    console.log('<--------------I got to LogIn-------------------->'.red);
    User.findOne({email:req.body.name}, function(err, user){
      if(req.body.password == user.password){
        req.session.user = user;
        res.redirect('/main')
      }else{
        res.status(401).send("Login failed");
      }
    })
  },
  logout: function(req,res){
    console.log('<--------------I am OUTA HERE!!!!-------------------->'.red);
    req.session.user = null;
    res.status(401).send('logged out')
  },
  getthemUsers: function(req,res){
    console.log('<--------------Getting Users for you Bro-------------------->'.red);
    if(req.session.user){
      res.json(req.session.user.name)
    }else{
      res.status(401).send('user not logged in')
    }
  },
  main: function(req,res){
    console.log('<--------------My Main Main AKA Home!!!-------------------->'.yellow);
    if(req.session.user){
      Question.find({}, function(err, questions){
        res.json(questions);
      })
    }else{
      res.status(401).send('Login')
    }
  },
  newQuest: function(req,res){
    console.log('<--------------I got to Questions You have Answers!!!-------------------->'.red);
    var newQuestion = new Question(req.body);
    console.log('got to backend')
    newQuestion.save(function(err){
      if(err){
        res.status(500).send('Error')
      }else{
        res.status(200).send('success!')
      }
    })
  },
  getQuest:function(req,res){
    console.log('<--------------I Get Questions all the Time!!!-------------------->'.red);
    Question.findOne({_id:req.params.id}, function(err, question){
      if(err){
        res.status(500).send('could not find')
      }else{
        res.json(question);
      }
    })
  },
  newAns:function(req,res){
    console.log('<--------------I got to Answers You have all day long!!!-------------------->'.red);
    var answer = req.body;
    Question.findOne({_id:req.params.id}, function(err,question){
      if(err){
        res.status(500).send('could not find')
      }else{
        question.answers.push(answer);
        question.save(function(err){
          if(err){
            res.status(500).send('could not add answer')
          }else{
            res.status(200).send('added answer!')
          }
        })
      }
    })
  },
  likes:function(req,res){
    console.log('<--------------THANKS FOR THE LIKE!!!-------------------->'.blue);
    Question.findOne({_id:req.params.question_id}, function(err, question){
      if(err){
        res.status(400).send('couldnt find data')
      }else{
        for(var i=0; i<question.answers.length;i++){
          if(question.answers[i]._id==req.params.answer_id){
            question.answers[i].likes+=1;
          }
        }
        question.save(function(err){
          if(err){
            res.status(500).send('couldnt like answer')
          }else{
            res.status(200).send('liked answer!')
          }
        })
      }

    })
  }

}









