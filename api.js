const axios = require (`axios`);
require(`dotenv`).config()
const api = {
    getUser(username){
        return axios
        .get(`https://api.github.com/users/${username}?client_id=${
            process.env.CLIENT_ID
          }&client_secret=${process.env.CLIENT_SECRET}`)
        .catch (err=>{
            console.log(err);
            process.exit(1) // exit out the app
        })

    },
    getTotalStars(username){
        return axios
        .get(`https://api.github.com/users/${username}/repos?client_id=${
            process.env.CLIENT_ID
          }&client_secret=${process.env.CLIENT_SECRET}&per_page=100`)
        .then(res =>{
            return res.data.reduce((acc,curr)=>{
                acc += curr.stargazers_count
                return acc
            },0)                                                   

        })
    }
 }

 module.exports = api;