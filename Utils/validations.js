
const convertToUnixTime = (date) => {

    let regExp = /[a-z]+/ig;
    if (regExp.test(date)) {
        return false;
    }
    if(date == parseInt(date)){
        return new Date(parseInt(date)).getTime();
    }
    else{
        return new Date(date).getTime();
    }

}


exports.convertToUnixTime = convertToUnixTime;