const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:'Name Required'
    },
    DOB:{
        type:String,
        required:'DOB Required'
    },
    sex:{
        type:String,
        required:'Required'
    },
    Mobile:{
        type: String,
        required:'Mobile Required'
    },
    idtype:{
        type: String,
        required:'idtype Required'
    } ,
    idno:{
        type: String,
        required:'id no Required'
    } ,
    guardian:{
        type: String
    } ,
    guardianName:{
        type: String
    } ,
    email:{
        type: String,
        required:'email Required'
    },
    emergencyNumber:{
        type: String,
        required:'Emergency number Required'
    },
    address:{
        type: String
    },
    state:{
        type: String
    },
    city:{
        type: String
    },
    country:{
        type: String
    },
    pincode:{
        type: String
    },
    occupation:{
        type: String
    },
    religion:{
        type: String
    },
    marital:{
        type: String
    },
    Bloodgroup:{
        type: String
    },
    Nationality:{
        type:String
    }
})

const UserSchema = new mongoose.model('Userschema',schema)
module.exports=UserSchema;