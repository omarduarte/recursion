// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];

  var checkNode = function(node) {
    var children;
    var i;

    if (node.classList.contains(className)) {
      result.push(node);
    } 
    
    if (node.hasChildNodes()) {
      children = Array.prototype.filter.call(node.childNodes, function(node) { 
        return node.nodeType === 1; 
      });

      for (i = 0; i < children.length; i+=1) {
        checkNode(children[i]);
      }
    }
  }

  checkNode(document.body);

  return result;
  
};
