//Comparing 2 JSONS with same properties without order

var isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}

let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

console.log(isEqualsJson(obj1,obj2));