let inp = ['9', '5', '6', '7']

function toArr(inpt) {
    let result = 0;
    for (let i = 0; i < inpt.length; i++) {
        result = (result + inpt[i] % 10) * 10;

    }
    return result / 10;
}

console.log(toArr(inp));