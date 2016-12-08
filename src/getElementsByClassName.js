// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //document.body, element.childNodes, element.classList
   //.hasChildNodes, node.classList.contains(className)
  
  var elements = [];
  var domRecursion = function(element){
  	if(element.classList.contains(className)){
  	  elements.push(element);
  	}
    for(var i = 0; i < element.childNodes.length; i++){
   	  
   	  if(element.childNode[i].classList.contains(className)){
   	  	elements.push()
   	  }
      //check each childNode for the className using element.classList
      //and then delve into each childNode for the className using element.classList
      //and each childNode's childNode using element.classList
	}
  }

  domRecursion(document.body);

  return elements.length >= 1 || null;
};
