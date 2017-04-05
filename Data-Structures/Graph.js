class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = {};
  }

  /**
   * Define color
   * white 未被访问
   * grey 已访问未探索
   * black 已访问且已探索
   */

  static initializeColor(vertices) {
    let color = [];
    vertices.map(v => color[v] = 'white');
    return color;
  }

  static dfsVisited(v, cb, color, adjList) {
    color[v] = 'grey';
    cb && cb(v);
    adjList[v].forEach(n => {
      if(color[n] === 'white') {
        Graph.dfsVisited(n, cb, color, adjList)
      }
    });
    color[v] = 'black';
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList[v] = [];
  }

  addEdge(v, w) {
    // edge case check
    this.adjList[v].push(w);
    this.adjList[w].push(v);
  }

  bfs(v, cb) {
    let color = Graph.initializeColor(this.vertices);
    let queue = [];

    queue.push(v);
    while(queue.length > 0) {
      const u = queue.shift();
      const neighbors = this.adjList[u];
      color[u] = 'grey';
      neighbors.forEach(n => {
        if(color[n] === 'white') {
          color[n] = 'grey';
          queue.push(n);
        }
      });
      color[u] = 'black';
      cb && cb(u);
    }
  }

  dfs(cb) {
    let color = Graph.initializeColor(this.vertices);
    this.vertices.forEach(n => {
      if(color[n] === 'white') {
        Graph.dfsVisited(n, cb, color, this.adjList);
      }
    });
  }

  print() {
    const str = this.vertices.reduce((ac, cv) => {
      const adjList = this.adjList[cv].reduce((a, c) => `${a} ${c}`, '');
      return `${ac} ${cv} -> ${adjList}\n`;
    }, '');
    console.log(str);
  }
}


// TODO: add Topology and shortest path

// test 
const graph = new Graph();
const myVertices = ['A','B','C','D','E','F','G','H','I'];
for(let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
function printNode(value) {
    console.log('Visited vertex: ' + value);
}
graph.dfs(printNode);