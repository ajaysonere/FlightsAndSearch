const {city} = require('../models/index.js');


class cityRepository{
     async createCity(name){
        try{
           const city = await city.create(name);
           return city;
        }catch(error){
            throw {error};
        }
     }

     async deleteCity(cityId){
        try {
            await city.destory({
                where: {
                    id : cityId
                }
            })
        } catch (error) {
            throw {error};
        }
     }
}

module.exports = cityRepository; 

