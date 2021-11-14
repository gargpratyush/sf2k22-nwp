import {HTTP} from "./config.js";

export const getCollegeList = () => 
    HTTP.get('api/get_colleges', {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        console.log(err);
        return null;
    });