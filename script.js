// // javascript objects

// let data={myname:"anjana",place:"matara",color:"black"};
// console.log(data);
// console.log(data.place);
// console.log(data.myname);
// console.log(data.color);


// // javascript arrays

// let arrayData=["blue","green","orange"];
// console.log(arrayData[0]);
// console.log(arrayData[1]);
// console.log(arrayData[2]);
// console.log(arrayData);

// // array of objects

// let arrayObjects=[
//     {myname:"anjana",place:"matara",color:"black"},
//     {myname:"bla bla",place:"galle",color:"blue"},
//     {myname:"he he",place:"hambantota",color:"green"}
// ]

// console.log(arrayObjects[2].place)

// object of arrays

// let data={
//     place:["blue","green","orange"],
//     myname:"khanam"
// }

// console.log(data.place [2]);


// json syntax

// let jsonData={"myname":"anjana","place":"matara"}

// supported data types

// string,int,objects,array,boolean,null

// not supported data types

// function,date,undefined


// let jsonData={"myname":"anjana","place":"matara","number":10,"color":{"col1":"green","col2":"blue"},"data":["khanam","mumbai","green"],"completed":true,"book":null}

// let data=`{"myname":"anjana","place":"matara"}`;
// console.log(data.myname);
// let objectData=JSON.parse(data);
// console.log(objectData.myname);


//parsing dates

// let text=`{"myname":"riya","dob":"1/25/1999"}`;
// let objData=JSON.parse(text);
// console.log(objData.dob);
// let dateData=new Date(objData.dob);
// console.log(dateData);

// object to json

// let data={myname:"anjana",place:"matara",color:"black"};
// let jsonData=JSON.stringify(data);
// console.log(jsonData);
// console.log(jsonData.place);


// let arrayData = ["blue","green","white"];
// console.log(arrayData[2]);
// let jsonData=JSON.stringify(arrayData);
// console.log(jsonData[2]);


// let data={myname:"anjana",place:"matara",today:new Date()};
// console.log(data);
// let jsonData=JSON.stringify(data);
// console.log(jsonData);

// storing and retrieving data from local server

let data={myname:"anjana",place:"matara",color:"black"};
let jsonData=JSON.stringify(data);
localStorage.setItem("datastored",jsonData);


//retrieving

let text=localStorage.getItem("datastored");
let objectData=JSON.parse(text);
console.log(objectData);