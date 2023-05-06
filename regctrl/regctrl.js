const Structure = require('../model/Userschema');

const regctrl={
    add:async(req,res)=>{
        const data = req.body;

        const{name,DOB,sex,Mobile,idtype,idno,guardian,guardianName,email,emergencyNumber,address,state,city,country,pincode,occupation,religion,marital,Bloodgroup,Nationality}=data;

        const newdata = await Structure({name:name,DOB:DOB,sex:sex,Mobile:Mobile,idtype:idtype,idno:idno,guardian:guardian,guardianName:guardianName,email:email,emergencyNumber:emergencyNumber,address:address,state:state,city:city,country:country,pincode:pincode,occupation:occupation,religion:religion,marital:marital,Bloodgroup:Bloodgroup,Nationality:Nationality})

        const result = await newdata.save()
        console.log(result);
            

    },
    get:async(req,res)=>{
        const regdata = await Structure.find();
        console.log(regdata);
        res.status(200).json(regdata)
    }

}

module.exports = regctrl;