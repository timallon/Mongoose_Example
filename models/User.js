// require mongoose and destructor Schema and model from it

//Create a viking schema here

const {Schema, model} = require("mongoose");

//<================Schema=====================>

const vikingSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        required: true,
    },
    strength: {
        type: Number,
    },
    weapon: {
        type: String,
    },
});

//create a model with two arguments ====> (the name of the collection, schema or shape of data)
//always make sure you export you model to use in other files

const VikingModel = model("vikings", vikingSchema);
module.exports = VikingModel;

console.log("hello")