'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var todos = traceur.require(__dirname + '/../routes/todos.js');

  app.get('/', dbg, home.index);

  app.get('/todos', dbg, todos.index);
  app.post('/todos', dbg, todos.create);
  app.delete('/todos/:id', dbg, todos.destroy);
  
  console.log('Routes Loaded');
  fn();
}
