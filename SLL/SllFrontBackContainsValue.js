class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// var x = new ListNode("Disnyland");
// console.log(x); 

// var y = new ListNode("Las Vegas");
// x.next = y;
// console.log(x);

// var z = new ListNode("Yellowstone");
// y.next = z;
// console.log(x);



class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
        
    addToFront(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    addToBack(value) {
        var new_node = new ListNode(value);
        
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else  {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
        
    contains(target) {
        var runner = this.head;

        while(runner != null){

            if (runner.value == target ){
                return true;
            }
            runner = runner.next;
        }
        return false
    }
        
    display() {
        if (this.head == null) {
            return null;
        }
        var values = this.head.value;
        var runner = this.head.next;
            
        while (runner != null) {
            values += " - " + runner.value;
            runner = runner.next;
        }
            
        return values;
            
    }
}

var new_sll = new SinglyLinkedList();

new_sll.addToFront("Disneyland");
console.log(new_sll.display());

new_sll.addToFront("Las Vegas");
console.log(new_sll.display());

new_sll.addToBack("Gateway Arch");
console.log(new_sll.display());

new_sll.addToBack("Coca Cola Museum");
console.log(new_sll.display());

console.log(new_sll.contains("Las Vegas"));
console.log(new_sll.contains("Mout Rushmore"));
console.log(new_sll.contains("Statue of Liberty"));
console.log(new_sll.contains("Disney World"));

