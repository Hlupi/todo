var todoData = [
  // 'Work hard',
  // 'Sleep hard',
  // 'Treat yourself',
  // 'Do the victory dance'
];

// var todoData = document.getElementById("input");

  console.log(todoData);

  var userInput = document.getElementById("newInput");
  // console.log(userInput.value);

  var addButton = document.getElementById('addButton');
  addButton.addEventListener('click', function (event) {
    todoData.push(userInput.value);
    console.log("Added a todo");
    console.log(todoData);
    updateList();
  });

  var todoList = document.getElementById("todoList");
  console.log(todoList);

function updateList () {
    for (var i = 0; i < todoData.length; i++) {
      // console.log(i);
      // console.log(todoData[i]);

      var newListItem = document.createElement("li");
      // console.log(newListItem, "this is newListItem");

      var newContent = document.createTextNode(todoData[i]);
      // console.log(newContent, "this is new content");
      newListItem.appendChild(newContent);
      // add
      todoList.appendChild(newListItem);
    }
  }




  // todoData.forEach(function(todo) {
  //   var listItem = document.createElement("li");
  //   var todoText = document.createTextNode(todo);
  //   listItem.appendChild(todoText);
  // });
