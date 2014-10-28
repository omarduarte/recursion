// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  var checkNode = function(node) {    
    var results = [];
    var children;
    var i;

    if (node.classList.contains(className)) {
      results.push(node);
    }

    if (node.hasChildNodes()) {

      // Element.classList.contains() only works with ELEMENT_NODE node types (nodeType === 1)
      children = Array.prototype.filter.call(node.childNodes, function(node) { 
        return node.nodeType === 1; 
      });

      for (i = 0; i < children.length; i+=1) {
        results = results.concat(checkNode(children[i]));
      }
    }
    return results;
  }

  return checkNode(document.body);
  
};
