const city = require('../models/city.js');
const {city} = require('../models/index.js');


class cityRepository{

     async createCity({name}){
        try{
           const city = await city.create({name:name});
           return city;
        }catch(error){
           console.log("Something goes wrong in create city ");
           throw {error};
        }
     }

     async deleteCity(cityId){
        try {
            await city.destory({
                where : {
                    id : cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Somethiing goes wrong in delete city");
            throw {error};
        }
     }

     async updateCity(cityId , name){
         try{
            const city = await city.update(name ,{
                where : {
                    id : cityId
                }
            });
         }catch(error){
            console.log("Something goes wrong in update city");
            throw {error};
         }
     }

     async getCity(cityId){
        try {
            const city = await city.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something goes wrong in get city ");
            throw {error};
        }
     }
}

module.exports = cityRepository; 

