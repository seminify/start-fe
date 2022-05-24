export function avg() {
    let total = 0;
    let iArguments = arguments;
    if (typeof arguments[0] == "object") iArguments = arguments[0];
    let length = iArguments.length;
    for (let i = 0; i < iArguments.length; i++) {
        if (typeof iArguments[i] != "number") {
            length--;
            continue;
        }
        total += iArguments[i];
    }
    return total / length;
}