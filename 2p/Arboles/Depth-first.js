class Node{
    constructor(data) {
        this.data = data;
        this.children = []
    }
}
class Arbol{
    constructor() {
        this.root = null;
    }
    add(data, toNodeData){
        let node = new Node(data)
        let parent = toNodeData ? this.find(toNodeData):null;
        if (parent){
            parent.children.push(node);
        }
        else{
            if (!this.root){
                this.root=node;
            }
            else{
                return "Raiz Asignada"
            }
        }
    }
    remove(data){
        if(this.root.data===data){
            this.root=null
        }
        let cola=[this.root];
        while(cola.length){
            let node = cola.shift();
            for(let i=0; 0<node.children.length; i++){
                if(node.children[i].data===data){
                    node.children.splice(i,1)
                }
                else{
                    cola.push(node.children[i])
                }
            }
        }
    }
    contains(data){
        return this.find(data) ? true:false;
    }
    find(data){
        let cola= this.root;
        while (cola.length){
            let node =cola.shift();
            if (node.data===data){
                return node;
            }
            for(let i=0; i<node.children.length;i++){
                cola.push(node.children[i])
            }
        }
        return null
    }
    preorde(node, fn){
        if(node){
            if (fn){
                fn(node);
            }
            for(let i=0; i<node.children.length;i++){
                this.preorde(node.children[i],fn)
            }
        }
    }
    posorden(node, fn){
        if(node) {
            for(var i = 0; i < node.children.length; i++) {
                this.posorden(node.children[i], fn);
            }
            if(fn) {
                fn(node);
            }
        }
    }
    imprimir(){
        if(!this.root) {
            return console.log('No encontrado');
        }
        let newline = new Node('|');
        let cola = [this.root, newline];
        let string = '';
        while(cola.length) {
            let node = cola.shift();
            string += node.data.toString() + ' ';
            if(node === newline && cola.length) {
                cola.push(newline);
            }
            for(let i = 0; i < node.children.length; i++) {
                cola.push(node.children[i]);
            }
        }
        console.log(string.slice(0, -2).trim());
    }
}
let tree= new Arbol();
tree.add('ceo');
tree.add('cto', 'ceo');
tree.add('dev1', 'cto');
tree.add('dev2', 'cto');
tree.add('dev3', 'cto');
tree.add('cfo', 'ceo');
tree.add('accountant', 'cfo');
tree.add('cmo', 'ceo');
tree.imprimir()