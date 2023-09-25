class ArancioService{
    static getAranci(){
        return fetch('https://restcountries.com/v3.1/region/europe')
        .then(res=>res.json())
    }
    }