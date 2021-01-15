class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        for (var i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
        }
    }
    Vertex(label) {
        this.label = label;
        console.log(this.label)
    }
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    showGraph() {
        let a = "";
        for (var i = 0; i < this.vertices; ++i) {
            a = (i + " -> ");
            for (var j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined)
                    a = a + (this.adj[i][j] + '  ');
            }
            console.log(a)
        }
    }
}
let grafo = new Graph(5);
grafo.addEdge(0,1);
grafo.addEdge(0,2);
grafo.addEdge(1,3);
grafo.addEdge(2,4);
grafo.showGraph();
grafo.Vertex(0)