
function pickRandom() {
    return Math.floor(Math.random()*21);
}


function randomNote() {
let notes = [
    "C",
    "C#/Db",
    "D",
    "D#/Db",
    "E",
    "F",
    "F#/Gb",
    "G",
    "G#/Ab",
    "A",
    "A#/Bb",
    "B"
];
    let index = Math.floor(Math.random()*(notes.length))
    return notes[index];
};



function mod60 (val) {
    if (val > 60) {
        return val % 60;
    }
    else if (val < 0 && val < -59) {
        return (val % 60) * -1;
    }
    else if (val < 0) {
        return val + 60;
    }
    else {
        return val;
    }
}




function timeMath(minutes) {
    if (minutes > 60) {
        return (minutes / 60) + ":" + mod60(minutes)
    }
}



function getRI() {
    let tR = [];
    for (let i = 0; i < 12; i++) {
        let index = Math.floor(Math.random()*12)
        tR[i] = index;
    }
return tR;
}

function ascOrder(arr) {
arr.sort();
return arr;
}

function rotate(arr) {
    modified = [];
    let remo = arr.pop()
    return modified.unshift(remo);
    
}

console.log(rotate([2,4,5,6]));