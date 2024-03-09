/**
 * Write the logic to create the controllers for the idea resources
 */
const ideas=require("../models/ideas.model")
let id=3 //initialize count of id
/**
 * Create the controller for fetching all the ideas
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * Return list of all the ideas
 */
exports.getAllIdeas=(req,res)=>{
      //First read all the ideas from the idea model file
      //Return all those ideas
      res.status(200).send(ideas)//http status code-200
}
/**
 * Controller that fetches idea based on id
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas/2
 */
exports.getIdeasBasedOnId=(req,res)=>{
      //We need to first read the idea id from the req path param
         idea_id=req.params.id
      //Using id,check if the idea with that id is present
      if(ideas[idea_id]){
            res.status(200).send(ideas[idea_id])
      }
      else{
            res.status(404).send({
                  message:"Idea with the given idea id not found"
            })
      }
      //If present return the id
}
/**
 * Controller to create new idea
 */
exports.createIdea=(req,res)=>{

//I need to read the request body
idea_object=req.body
id++
idea_object["id"]=id //setting the id in the newly created idea object
ideas[id]=idea_object
//Add the new object provided in the ideas object

//Return the response
res.status(201).send(idea_object)
}
/**
 * controllers for updating the idea
 */
exports.updateIdea=(req,res)=>{
      //Read the idea id
       idea_id=req.params.id
      //Check if that idea id is present
      if(ideas[idea_id]){
          idea_obj=req.body
          ideas[idea_id]=idea_obj
          res.status(200).send(idea_obj)
      }
      else{
            return res.status(404).send({
             message:"idea id wanted to update doesnot exist"
            })
      }
      //Read the new idea body and replace it
      //Return the updated idea
}
exports.deleteIdea=(req,res)=>{
      //fetch the idea and see if it is present
      idea_id=req.params.id
      if(ideas[idea_id]){
            //DElete it
            delete ideas[idea_id]
            res.status(200).send({
                  message:"Yaay you idea got successfully deleted"
            })
      }
      else{
            return res.status(404).send({
                  message:"idea id you wanted to delete is already not present boss"
            })
      }
}