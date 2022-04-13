function mod12(PC) {    //This function takes a number and converts it to Modulo 12.//
    if (PC > 11) {
        return PC % 12
    }
    else if(PC < 0 && PC < -11) {
        return (PC % 12)*-1
    }
    else if(PC < 0) {
        return PC +12
    }
    else {
        return PC
    }};

// console.log(mod12(-30));

    function arrMod12(arr) {                    //This function takes an array and converts its contents to Modulo 12.//
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 11) {
                xSet.push(arr[i] % 12)
            }
            else if (arr[i] < 0 && arr[i] < -11) {
                xSet.push((arr[i] % 12) * -1)
            }
            else if (arr[i] < 0) {
                xSet.push(arr[i] + 12)
            }
            else {
                xSet.push(arr[i]);
            }
        }
        return xSet;
    };


var aSet = [];
var bSet = [];
var cSet = [];

 
var xSet =[];

var zSet = [];


function retro(arr) {     
    let rSet = [];              //This function allows an array to be spelled backwards//
for (let i = 0; i < arr.length; i++) {
    rSet.unshift(arr[i]);
    }
    let updateSet = arrMod12(rSet);
    return updateSet;
};

function transpose(arr,num) {
    let tArr = arr.map( i => i + num);
    return arrMod12(tArr);
}; 



function getComplements(arr) {
    let ySet = [];          //This function gets the Mod12 complement of an array//
    for (let i = 0; i < arr.length; i++) {
        let invCard = 12;
        ySet.push(invCard - arr[i])
    }
    let updateSet = arrMod12(ySet);
    return updateSet;
}

function midIterate(arr,index) {
    let newSet = [];
    for (let i = index; i < arr.length; i++) {
        newSet.push(arr[i]);
        }
    return newSet;
};



function invert(input,num) {
    let redFact = (input.length *3);
    phase1 = getComplements(input);
    phase2 = retro(phase1);
    phase3 = transpose(phase2,num);
    return midIterate(phase3,redFact);
    
}

function rotate (arr) {
    let i = 0; 
    let perms = [];
    if (i == arr.length) {
    return perms;
}
    else {
        rotate(perms)
        let removed = arr.pop();
        arr.unshift(removed);
        perms.push(i);
        }
    }
    


    console.log(rotate([0,2,4,5,7,9]));


