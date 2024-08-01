const validate = (schema)=>async(req,res,next)=>{
    try{
        const parseBody = await schema.parse(req.body);
        req.body = parseBody;
        next();
    }catch(err){
        const status = 422;
        let extraDetails="";
       
        // res.status(400).json({msg:err});
        const message = "Fill the input properly";

        if(err.errors && err.errors.length>0 && err.errors[0].message){
            extraDetails = err.errors[0].message;

        }
        const error = {
            status,
            message,
            extraDetails,
        }
        next(error); // passing the error to the error handling middleware
    }


}
module.exports = validate;