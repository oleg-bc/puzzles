let vertices = { 1, 2, 3, 4, 5, 6 },
    edges = {
        { 1, 2 }, { 1, 5 }, { 1, 3 }, { 2, 5 }, { 4.6 }, { 4, 5 }, { 4, 6 } }

let graphAdj;
const initGrpah = (maxVertex) => {
    graphAdj = new Array(maxVertex);

    for (let i = 0; i < graphAdj.length; i++) {
        graphAdj[i] = new Array(maxVert)
    }

    for (let i = 0; i < graphAdj.length; i++) {

        for (letj = 0; j < graphAdj[i].length; j++) {

            graphAdj[i][j] = 0;
        }
    }
}

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