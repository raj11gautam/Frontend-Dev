
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let access = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside
             ? "Secure" 
             : "Unsafe";

console.log(access);

isOwnerInside = false;
console.log(isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside ? "Secure" : "Unsafe");

