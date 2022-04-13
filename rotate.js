
const rotate = (arr) => {
    let rotation = Object.assign([], arr);
    let lastPitch = rotation.pop();
    rotation.unshift(lastPitch);
    return rotation;
}

const findRotations = (pitches) => {
    let rotations = [];
    let rotation = pitches;
    let newRotation;
    for (let i = 0; i < pitches.length; i++) {
        let newRotation = []; 
        newRotation = rotate(rotation);
        rotations.push(newRotation);
        rotation = newRotation;
    }
    return rotations;
}

const result2 = findRotations([0,1,2,3,4,5,6]);

console.log(result2);
