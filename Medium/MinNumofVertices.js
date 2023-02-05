var findSmallestSetOfVertices = function(n, edges) {
    let hasFrom = {};
    let arr = [];

    for(const path of edges) hasFrom[path[1]] = true;

    console.log(hasFrom);

    for(let i = 0; i < n; i++) if(!(i in hasFrom)) arr.push(i);

    return arr;

};

edges1 = [[0,1],[0,2],[2,5],[3,4],[4,2]]
edges2 = [[1,2],[1,0],[0,2]]

console.log(findSmallestSetOfVertices(6, edges1));
console.log(findSmallestSetOfVertices(3,edges2));
