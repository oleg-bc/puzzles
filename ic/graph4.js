/**
 *  @class Queue implement using Object
 *  FIFO (first in - first out)
 */

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    equeue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    /* remove the element which was insert first */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }

    isEmpty() {
        return this.count - this.lowestCount == 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];

    }
    clear() {
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
        return this.items;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let string = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`;
        }
        return string;
    }

}


//module.exports = { Queue };

// Get the queue from  https://github.com/swarup260/Learning_Algorithms/blob/master/data_structure/Queue.js
//const { Queue } = require('./queue.js')

let graphAdj;
var visited;
let queue;

const initGraph = (maxVertice) => {

    visited = new Array(maxVertice);
    queue = new Queue();

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




const bfs = (node) => {
    visited[node] = true;
    queue.equeue(node);
    while (!queue.isEmpty()) {
        let visiting = queue.dequeue();
        console.log(`we visited ${visiting}`)
        for (let j = 0; j < graphAdj[visiting].length; j++) {

            if ((graphAdj[visiting][j] === 1) && (visited[j] === false)) {

                visited[j] = true;
                queue.equeue(j);
            }
        }
    }
}


initGraph(7);
// E = {{1, 2}, {1, 5}, {2, 3}, {2, 5}, {3, 4}, {4, 5}, {4, 6}}.
insertGraph(1, 2);
insertGraph(1, 5);
insertGraph(2, 3);
insertGraph(2, 5);
insertGraph(3, 4);
insertGraph(4, 5);
insertGraph(4, 6);
printGraph();

bfs(1);