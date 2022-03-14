"use strict";
module.exports = {
  
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
 
  

  
  status: {
    type: String,
    default: "inactive",
    enum: ["active", "inactive"],
  },
  
  
    firstName: {
      type: String,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      lowercase: true,
      trim: true,
    },
    createdAt:{
      type:String
    },
    updatedAt:{
      type:String
    }
    
    
  
  
  
};
