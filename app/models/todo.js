'use strict';

var todos = global.nss.db.collection('todos');
var Mongo = require('mongodb');

class ToDo{
  static create(obj, fn){
    var newTodo = new ToDo();
    newTodo.text = obj.text;
    newTodo.done = false;
    todos.save(newTodo, ()=>fn(newTodo));
  }

  static findAll(fn){
    todos.find({}).toArray((err, todos)=>{
      fn(err, todos);
    });
  }

  static removeById(id, fn){
    id = Mongo.ObjectID(id);
    todos.remove({_id:id}, ()=>fn());
  }
}

module.exports = ToDo;
