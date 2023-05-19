const mongoose = require('mongoose');


    mongoose.connect( process.env.MONGO_URL , { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Database Connected Successfully');
        }).catch((error)=>{
            console.log(error);
        })


module.exports = mongoose;