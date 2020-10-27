class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
        this.count = 0;
    }

}

class BST {
    constructor() {
        this.root = null;
    }
    create(val) { //creates a new node in the BST
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;

        const addSide = side => {
            if (!current[side]) {
                current[side] = newNode;
                return this;
            }
            current = current[side];
        }
        while (true) {
            if (val === current.val) {
                current.count++;
                return this;
            }
            if (val < current.val) addSide('left');
            else addSide('right');
        }
    }
    find(val) {
        if (!this.root) return undefined;
        let current = this.root;
        found = false;

        while (current && !found) {
            if (val < current.val) current = current.left;
            else if (val > current.val) current = current.right;
            else found = true;
        }
        if (!found) return 'Nothing found';
        return current;
    }

    BFS(start) {
        let data = [],
            queue = [],
            current = start ? this.find(start) : this.root;
        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            data.push(current.val);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return data;
    }
}