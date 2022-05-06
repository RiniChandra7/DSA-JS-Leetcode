/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let vis = [];
    let q = [];

    let g = [];

    for (let i = 0; i < arr.length; i++) {
      let l = i - arr[i];
      let r = i + arr[i];
      let adj = [];

      if (l >= 0 && l < arr.length && i != l) {
        adj.push(l);
      }

      if (r >= 0 && r < arr.length && i != r) {
        adj.push(r);
      }

      g.push(adj);
    }

    //console.log(g);

    let ind = start;
    //let target = arr.indexOf(0);

    do {
      vis.push(ind);
      if (arr[ind] === 0) {
        return true;
      }

      //console.log(ind);
      let adj = [...g[ind]];
      for (let i = 0; i < adj.length; i++) {
        if (vis.indexOf(adj[i]) === -1)
            q.push(adj[i]);
      }

      ind = q.shift();
      if (vis.indexOf(ind) != -1 && q.length == 0) {
          return true;
      }
    }
    while (ind >= 0 && ind < arr.length);

    return false;
};
