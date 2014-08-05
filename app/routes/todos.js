/* jshint unused:false */
'use strict';

var traceur = require('traceur');
var ToDo = traceur.require(__dirname + '/../models/ToDo.js');

exports.index = (req, res)=>{
  ToDo.findAll((e, todos)=>{
    if(e){
      res.send(e);
    }else{
      res.json(todos);
    }
  });
};

exports.create = (req, res)=>{
  ToDo.create(req.body, todo=>{
    ToDo.findAll((e, todos)=>{
      if(e){
        res.send(e);
      }else{
        res.json(todos);
      }
    });
  });
};

exports.destroy = (req, res)=>{
  ToDo.removeById(req.params.id, todo=>{
    ToDo.findAll((e, todos)=>{
      if(e){
        res.send(e);
      }else{
        res.json(todos);
      }
    });
  });
};
