class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
     this.head = null;
     this.size =0;
}
     isEmpty(){
        return this.size == 0;
    }
    insert(value){ 
        if(this.head === null){this.head = new Node(value)}
        
        else{
            var temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;}
        this.size++
    }
    
    // remove(value){
    //     var prevNode = this.findP
    // }
    delete(value){
        var curHead = this.head;
        if (curHead.value == value){
            this.head = curHead.next;
            this.size--;
        }else{
            var prev = curHead;
            while(curHead.next){
                if(curHead.data == value){
                    prev.next = curHead.next;
                    prev = curHead;
                    curHead = curHead.next;
                    break;
                }
                prev = curHead;
                curHead = curHead.next;
            }
            if(curHead.value == value){
                prev.next = null;
            }
            this.size--;
        }
    }
    contains(value){
        var curNode = this.head;
        while(curNode.value != value){
            curNode = curNode.next;
        }
        return curNode;
    }
    display(){
        var curNode = this.head;
        while(!(curNode.next == null)){
            console.log(curNode.next.value);
            curNode = curNode.next;
        }
    }
}
var sll1 = new LinkedList();
sll1.insert(1);

sll1.insert(1); // linked list is now:  1 -> null 29   
sll1.insert(12); // linked list is now: 12 -> 1 -> null 30   
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null 31   
sll1.delete(12); // linked list is now: 20 -> 1 -> null 32   
sll1.delete(20); // linked list is now: 1 -> null
console.log(sll1);

var cities = new LinkedList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle"); 
cities.display(); 
console.log(); 
cities.delete("Carlisle"); 
cities.display(); 