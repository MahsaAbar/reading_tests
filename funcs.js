const isFive = num =>{
    if (num === 5){
        return true
    }
    return false
};

const isOdd = number =>{
    if(typeof(number) == 'number'){
        if(number % 2 !== 0){
            return true
        }
        return false
    }
    return "Error";
};
console.log(isOdd ({ i: "am", an: "object" }))
console.log(isOdd (["i", "am", "an", "array"]))
console.log(isOdd("i am a string"))
console.log(isOdd(2953))
console.log(isOdd(2952))
console.log(isOdd("hello"))

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
// console.log(myRange(10, 5, 1))
// console.log(isOdd(2953))
// console.log(isOdd(2952))
// console.log(isOdd("hello"))
/************************/
module.exports = {
    isFive,
    isOdd,
    myRange
};