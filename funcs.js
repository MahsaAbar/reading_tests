const isFive = num =>{
    return (num === 5)
};

const isOdd = number =>{
    if (typeof number !== "number") {
        return number
      }else{
        if(number % 2 !== 0){
            return true
        }
        return false
    }
};

const myRange = (min, max, step) =>{
    let newrange = [];
    if(min > max){
        return newrange
    }else{
        while(min <= max){
            if(step === undefined){
                newrange.push(min)
                min += 1
            }else{
                newrange.push(min)
                min = min + step
            }
        }
    }
    return newrange
};

/************************/
module.exports = {
    isFive,
    isOdd,
    myRange
};