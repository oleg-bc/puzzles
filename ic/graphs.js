class Node {
    constructor(value) {
        this.value = value;
        this.adjacents = [];
    }

    addAdjacent(node) {
        this.adjacents.push(node); //push this node into array
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node); //find the index of node with this value?
        if (index > -1) { //if exists
            this.adjacents.splice(index, 1); //splice it
            return node; //return the value passed in?
        }
    }

    getAdjacents() {
        return this.adjacents; //returns array
    }
    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}


//graph constructor

class Graph {
    constructor(edgeDirection = Graph.DIRECTED) {
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }
    addEdge(source, destination) {
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);
        sourceNode.addAdjacent(destinationNode);

        if (this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode);
        }
        return [sourceNode, destinationNode];
    }
    addVertex(value) {
        if (this.nodes.has(value)) {
            return this.nodes.get(value);
        } else {
            const vertex = new Node(value);
            this.nodes.set(value, vertex);
            return vertex;
        }
    }

    removeEdges(source, destinatoin) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);
        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(sourceNode);


            if (this.edgeDirection === Graph.UNIDRECTED) {
                destinationNode.removeAdjacent(sourceNode);
            }

        }
        return [source, destinationNode];
    }

    *
    bfs(first) {
        const visited = new Map();
        const visitList = new Queue();

        visitList.add(first);

        while (!visitList.isEmpty()) {
            const node = visitList.remove();
            if (node && !visited.has(node)) {
                yield node;
                visited.set(node);
                node.getAdjacents().forEach(adj => visitList.add(adj));
            }
        }
    }



}




Graph.UNIDRECTED = Symbol('directed graph'); //2way edges
Graph.DIRECTED = Symbol('unidrected graph'); //1way edges


const graph = new Graph(Graph.UNDIRECTED);

const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

bfsFromFirst = graph.bfs(first);

bfsFromFirst.next().value.value; // 1
bfsFromFirst.next().value.value; // 2
bfsFromFirst.next().value.value; // 3
bfsFromFirst.next().value.value; // 4