
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
 }

var isSameTree = function(p, q) {

  let pQueue = [p];
  let qQueue = [q];
  //p = [1, null, 3]
  //q = [1,null,3]

  while(pQueue.length || qQueue.length){
    let currP = pQueue.shift();
    let currQ = qQueue.shift();

    if(!(currP && currQ) && currP !== currQ) return false;

    if(currP && currQ) {
      if(currP.val !== currQ.val)
      return false

      if(currP.left && currQ.left){
        pQueue.push(currP.left);
        qQueue.push(currQ.left);
      }
      else if (currP.left !== currQ.left)
        return false;

      if(currP.right && currQ.right){
        pQueue.push(currP.right);
        qQueue.push(currQ.right);
      }
      else if (currP.right !== currQ.right)
        return false;
    }
  }

  return true;
};
