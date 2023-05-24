const model = require('../model/model')

module.exports = {

    addNote: (data) => {
        return new Promise((resolve, reject) => {
            model.create(data).then((note) => {
                resolve(note)
            }).catch((error) => {
                reject(error)
            })
        })
    },

    getNotes:()=>{
        return new Promise(async(resolve,reject)=>{
           await model.find().then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(error)
            })
        })
    },

    getOneNote: (id) => {
        return new Promise(async(resolve, reject) => {
          await  model.findById(id).then((data) => {
                resolve(data)
            }).catch((error) => {
                reject(error)
            })
        })
    },

    editNote: (id, body) => {
        return new Promise((resolve, reject) => {
            model.findByIdAndUpdate(id, body).then((updated) => {
                resolve(updated)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    
    deleteNote:(id)=>{
        return new Promise((resolve,reject)=>{
            model.findByIdAndDelete(id).then((deleted)=>{
                resolve(deleted)
            }).catch((error)=>{
                reject(error)
            })
        })
    }



}
