// Get the stack from https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Stack.js

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    toString() {
        return this.items.toString();
    }


}

/**
 * @class Stack implement using Object
 */
class StackObject {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.count - 1];
        this.count--;
        delete this.items[this.count];

        return result;
    }

    isEmpty() {
        return this.count == 0;
    }

    peek() {
        return this.items[this.count - 1];
    }

    size() {
        return this.count;
    }

    clear() {
        /* while (!this.isEmpty()) {
            this.pop()
        } */
        this.items = {};
        this.count = 0;
        return this.items;
    }

    toString() {
        let string = `${this.items[0]}`;
        for (let index = 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`
        }
        return string;
    }

}


//module.exports = { Stack, StackObject };

let graphAdj;
let visited;
let stack;

const initGraph = (maxVertice) => {

    visited = new Array(maxVertice);
    stack = new Stack();

    for (let i = 0; i < visited.length; i++) {
        visited[i] = false;
    }

    graphAdj = new Array(maxVertice);
    for (let i = 0; i < graphAdj.length; i++) {
        graphAdj[i] = new Array(maxVertice);
    }

    for (let i = 0; i < graphAdj.length; i++) {
        for (let j = 0; j < graphAdj[i].length; j++) {
            graphAdj[i][j] = 0;
        }
    }

}

const printGraph = () => {
    let graphline = " ";
    let i, j;
    for (i = 0; i < graphAdj.length; i++) {
        for (j = 0; j < graphAdj[i].length; j++) {
            graphline += graphAdj[i][j];
            graphline += " "

            if (j == graphAdj.length - 1) {
                console.log(graphline);
                graphline = ' ';
            }
        }
    }
}


const insertGraph = (a, b) => {
    for (let i = 0; i < graphAdj.length; i++) {
        for (let j = 0; j < graphAdj[i].length; j++) {
            if (i === a && j === b) {
                graphAdj[i][j] = 1;
                graphAdj[j][i] = 1;
            }

        }
    }

}


const dfs = (node) => {

    stack.push(node);

    while (!stack.isEmpty()) {

        node = stack.pop();

        if (visited[node] == false) {
            visited[node] = true;

            console.log(`we visited ${node}`)
            for (let j = 0; j < graphAdj[node].length; j++) {
                if (graphAdj[node][j] === 1) {
                    stack.push(j);
                }

            }
        }

    }

}


initGraph(4);
insertGraph(0, 1);
insertGraph(0, 2);
insertGraph(1, 2);
insertGraph(2, 0);
insertGraph(2, 3);
insertGraph(3, 3);

printGraph();

dfs(2);