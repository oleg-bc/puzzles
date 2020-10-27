let graphAdj;
let visited;
let queue;
const initGraph = (maxVertice) => {

    visited = new Array(maxVertice);
    queue = [];

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
            graphline += "  ";

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
    queue.push(node);
    while (queue.length > 0) {
        let visiting = queue.pop();

        console.log(`we visisted ${visiting}`)
        for (let j = 0; j < graphAdj[visiting].length; j++) {
            if ((graphAdj[visiting][j] === 1) && (visited[j] === false)) {
                visited[j] = true;
                queue.pop(j)
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