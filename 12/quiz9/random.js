export function random(min, max) {
    if (arguments.length == 1) {
        max = min;
        min = 0;
    }
    if (isNaN(min) || isNaN(max)) {
        return -1
    } else {
        return Math.round(Math.random() * (max - min) + min);
    }
}