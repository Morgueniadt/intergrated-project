let donuts =['chocolate', 'custard', 'jam'];

// for (let i = 0; i < donuts.length; i++) {
//     console.log(donuts)
    
// }
// console.log(donuts)


// let myName = "Morguen";

donuts.forEach((donut, i) => {
    console.log(`donut option: ${i + 1 } is ${donut}`);
});

    let myArr  = ['chocolate','custard','jam'];
    let myStr  = "lemon";
    let myFunc = function(str, arr){
       
    arr.push(str);
    arr.forEach((element) => {
    console.log(element);
    });
    };
    myFunc(myStr, myArr);