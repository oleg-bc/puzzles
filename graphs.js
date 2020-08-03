// let vertices = {1,2,3,4,5,6},
//     edges = {{1,2},{1,5},{1,3},{2,5},{4.6},{4,5},{4,6}}

// let graphAdj;
// const initGrpah = (maxVertex) => {
//     graphAdj = new Array(maxVertex);

// for (let i=0;i<graphAdj.length;i++){
//     graphAdj[i] = new Array(maxVert)
//     }

//     for (let i=0;i<graphAdj.length;i++){

//         for(letj=0;j<graphAdj[i].length;j++){

//             graphAdj[i][j]=0;    
//             }
//         }
// }

const printGraph = () => {
    let graphline = " ";
    let i, j;
    for (i = 0; i < graphAdj.length; i++) {
        for (j = 0; j < graphAdj[i][j].length; j++) {
            graphline += graphAdj[i][j];
            graphline += " ";
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




///tracking visits to vertices
///Declare array that indexes the vertices and initialize all ///cells to false
///So we will adjust our initGrpah and add the visited array


let graphAdj;
let visited;
let stack;

const initGraph = (maxVertice) => {
    visited = new Array(maxVertice);
    stack = new Stack();
    queue = new Queue();

    for (let i = 0; i < visited.length; i++) {
        visited[i] = false;
    }
    graphAdj = new Array(maxVertice);
    for (let i = 0; i < graphAdj.length; i++) {
        graphAdj[i] = new Array(maxVert);
    }

    for (let i = 0; i < graphAdj.length; i++) {
        for (let j = 0; j < graphAdj[i].length; i++) {

            graphAdj[i][j] = 0;
        }
    }
}



const dfs = (node) => {
    stack.push(node);
    while (!stack.isEmpty()) {
        node = stack.pop();
        if (visited[node] == false) {
            visited[node] = true;
            console.log(`we visited ${node}`);
            for (let j = 0; j < graphAjd[node].length; j++) {
                if (graphAdj[node][j] === 1) {
                    stack.push(j);
                }
            }
        }
    }
}

const bfs = (node) => {

    visited[] = true;
    queue.equeue(node);
    visited[node] = true;
    while (!queue.isEmpty()) {
        let visiting = queue.dequeue();

        console.log(`we visited ${visiting}`);

        for (let j = 0; j < graphAdj[visiting].length; j++) {


            if ((graphAdj[visiting][j] === 1) && (visited[j] === false)) {

                visited[j] = true;
                queue.equeue(j);

            }
        }
    }
}