var todoData = [
  'Work hard',
  'Sleep hard',
  'Treat yourself',
  'Do the victory dance'];

  console.log(todoData);

  var newUl = document.createElement("ul");

  for (var i = 0; i < todoData.length; i++) {
    // console.log(i);
    // console.log(todoData[i]);

    var newListItem = document.createElement("li");
    // console.log(newListItem, "this is newListItem");

    var newContent = document.createTextNode(todoData[i]);
    console.log(newContent, "this is new content");
    newListItem.appendChild(newContent);
  }

  // todoData.forEach(function(todo) {
  //   var listItem = document.createElement("li");
  //   var todoText = document.createTextNode(todo);
  //   listItem.appendChild(todoText);
  // });
