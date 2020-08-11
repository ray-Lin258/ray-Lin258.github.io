var input = document.getElementById("text");
var button = document.getElementById("send");
var list = document.getElementById("list");

button.addEventListener("click", addData);

var todolist = [];

function addData () {
  todolist.push(input.value);
  render()
}

function delData (index) {
  var temp = [];
  for (var i = 0; i < todolist.length; i++) {
    if (i!=index) temp.push(todolist[i])
  }
  todolist = temp;
  render();
}

function render() {
  var listcontent = "";
  for (var i = 0; i < todolist.length; i++) {
    listcontent = listcontent + "<div><button onclick='delData(" + i + ")'>刪除</button>" + todolist[i] + "</div>";
  }
  list.innerHTML = listcontent;
}