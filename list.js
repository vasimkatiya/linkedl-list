class Node{
    constructor(value)
    {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{
    constructor()
    {
        this.head = null;
    }

    append(value)
    {
        let nextNode = new Node(value);
        if(this.head == null)
        {
            this.head = nextNode;
            return;
        }
        
        let current = this.head;
        while(current.nextNode !== null)
        {
            current = current.nextNode;
        }

        current.nextNode = nextNode;

    }

    find(value)
    {
        let current = this.head;
        let count = 0;
        while(current !== null)
        {
            if(current.value == value)
            {
                return console.log(`index of ${value} : ${count}`);
                ;
            }
            count++;
            current = current.nextNode;
        }
    }

    size()
    {
        if(this.head == null)
        {
            return console.log("list is empty");
        }
        let current = this.head;
        let count = 0;
        while(current !== null)
        {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    headP()
    {
        return console.log(`head : ${this.head.value}`);
        
    }

    tail()
    {
        if(this.head == null)
        {
            return null;
        }
        let current = this.head;
        while(current.nextNode !== null)
        {
            current = current.nextNode;
        }
        return console.log(`tail : ${current.value}`);
        
    }


    At(index)
    {
        if(index >=0 && index <=this.size()){
            let current = this.head;
            let count = 0;
            while(current !== null)
            {
                if(count == index)
                {
                    return current.value;
                }else{

                    current = current.nextNode;
                    count++;
                }
            }
            
        }
        return "index is invalid !"

    }

    contains(value)
    {
        if(this.head == null)return;
        let current = this.head;
        while(current !== null)
        {
            if(current.value == value)
            {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    prepend(value)
    {
        let nextNode = new Node(value);
        nextNode.nextNode = this.head;
        this.head = nextNode;
    }

    print()
    {
        if(this.head == null) return;
        let current = this.head;
        let result = [];
        while(current !== null)
        {
            result.push(current.value);
            current = current.nextNode
        }

        return console.log(result.join("->"));
    }

    pop()
    {
        if(this.head == null) return;
        if(this.head.nextNode == null)
        {
            let value = this.head.value;
            this.head = null;
            return value;
        }

        let current = this.head;
        
        while(current.nextNode.nextNode !== null)
        {
            current = current.nextNode;
        }

        let value = current.nextNode.value;
        current.nextNode = null;
        console.log("popped value :",value);
        
        return current;
    }

    insertAt(value,index)
    {
        let nextNode = new Node(value)
        if(this.head==null) return ;
        let current = this.head;
        let count = 0;
        while(current !== null && count <index-1)
        {
            current = current.nextNode;
            count++;
        }
        if(current == null)
        {
            console.log("index out of range !");
            return;
        }

        nextNode.nextNode = current.nextNode;
        current.nextNode = nextNode;

        
    }

    removeAt(index)
   {
    if(this.head == null)
    {
        console.log("list is empty!");
        return
    }
    if(this.head.nextNode == null)
    {
        let val = this.head.value;
        this.head = this.head.nextNode;
        console.log(`popped item ${val} at index : ${index}`);
        return val;
        
    }

    let current = this.head;
    let count = 0;
     while (current !== null && count < index - 1) {
        current = current.nextNode;
        count++;
    }

    if(current == null || current.nextNode == null)
    {
        console.log("index out of range !");
        return;
    }

    let value = current.nextNode.value;
    current.nextNode = current.nextNode.nextNode;
    console.log(`popped item : ${value} & index : ${index}`);
    return value;
    

   }

}

const list = new LinkedList;

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.prepend(8);
list.insertAt(2,3)
list.find(8);
list.headP();
list.tail();
console.log("val of index :"+list.At(2));
console.log("value is contain or not :" + list.contains(100));
list.insertAt(100,2);
list.print();
list.pop();
list.pop();
list.print();
list.removeAt(2);
list.print();
console.log("size :" + list.size());
