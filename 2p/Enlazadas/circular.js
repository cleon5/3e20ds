class Node{
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class circular{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addtohead(){
        const newNodo= new Node(data, this.head, null)
        if this.head
    }
    print(){
        let current = this.tail;
        let result = "";
        while(current){
            result+=current.data+"<<>>"
            current = current.prev
        }
    }
}