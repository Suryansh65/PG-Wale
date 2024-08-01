const {Schema,model} = require("mongoose");

const serviceSchema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    location:{type:{type:String,enum:['Point'],required:true},coordinates:{type:[Number],required:true}},
    
    contact:{type:String,required:true},
    email:{type:String,required:true},
    facilities:{type:[String],required:true},
    price_per_month:{type:String,required:true},
    room_types:{type:[String],required:true},
    images:{type:[String]},
    description:{type:String,required:true},
});
serviceSchema.index({location:'2dsphere'});
const Service = new model("Service",serviceSchema);
module.exports = Service;