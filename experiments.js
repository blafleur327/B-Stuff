const rhythms = {
"32nd": .125,
"16th": .25,
"8th" : .5,
"Quarter": 1,
"Half": 2,
"Whole": 4
};

function addDot(val) {
return val + (val/2);
};

function fitInBar(arr, beats) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    if (total == beats) {
        return "Measure is full."
    }
    else if (total > beats) {
        return "Measure has " + (total - beats) + " too many beats!"
    }
    else if (total < beats) {
        return "Meausre needs " + (beats - total) + " beats to be filled!"
    }
}


