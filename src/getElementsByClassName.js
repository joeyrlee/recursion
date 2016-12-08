// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var acc = [];
  var searchNodes = function(node){
  	if(node.classList.contains(className)){
  	  acc.push(node);
  	}
    for(var i = 0; i < node.childNodes.length; i++){
      //only initiates function calls on element nodetypes
      if(node.childNodes[i].classList !== undefined){
  	    searchNodes(node.childNodes[i]);
  	  }
	}
  }
  searchNodes(document.body);

  return acc;
};
