const {Schema,model} = require('mongoose');

const contactSchema = new Schema({
    username:{type:"String",required:true},
    email:{type:"String",require:true},
    message:{type:String,required:true},
});
//create a contactSchema Model
const Contact = new model('Contact',contactSchema);
module.exports = Contact;