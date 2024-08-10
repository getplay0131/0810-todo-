// 나의 개선된 답안
// let todos = JSON.parse(localStorage.getItem(todos)) || [];
// 정답률: 80% - 'todos'를 문자열로 감싸야 합니다: localStorage.getItem("todos")
//  2차 개선 답안
let todos = JSON.parse(localStorage.getItem("todos")) || [];
//  2차 개선 답안

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() !== "") {
    addTodo(e);
    todoInput.value = "";
  }
});
// 정답률: 70% - 조건문 로직에 오류가 있으며, addTodo 함수에 인자를 전달해야 합니다.

// function addTodo(text) {
//   let todoObj = {
//     id: new Date().getTime(),
//     text: text,
//     completed: false,
//   };
//   todos.push(todoObj);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
// 정답률: 90% - 거의 완벽하나, renderTodos() 호출이 누락되었습니다.
//  2차 개선 답안
function addTodo(text) {
  let todoObj = {
    id: new Date().getTime(),
    text: text,
    completed: false,
  };
  todos.push(todoObj);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// function renderTodos() {
//   todoList.innerHTML = "";
//   todos.forEach((todo, index) => {
//     `<input type="checkbox" id="inputCheck">완료 여부</input>
//     <p id="textDisplay"></p>
//     <button id="deleteBtn">삭제</button>`;
//     inputCheck.addEventListener("change", toggleTodo(index));
//     deleteBtn.addEventListener("click", deleteTodo(index));
//     if (todo.completed === true) todoObj.text.classList.add("completed");
//   });
// }
// 정답률: 50% - DOM 요소 생성 및 이벤트 리스너 추가 방식에 오류가 있습니다.
// document.createElement()를 사용하여 요소를 생성하고, textContent로 내용을 설정하세요.
// appendChild()를 사용하여 생성된 요소를 추가하세요.
// 이벤트 리스너에는 함수 참조를 전달해야 합니다 (괄호 없이).
//  2차 개선 답안
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    `<input type="checkbox" ${todo.completed ? checked : ""}></input>
      <p></p>
      <button type="button">삭제</button>`;
    const inputs = document.querySelector("input");
    todoForm.appendChild(inputs);
    const deleteBtn = document.querySelector("button");
    deleteBtn.appendChild(deleteBtn);
    inputs.addEventListener("change", () => {
      toggleTodo(index);
    });
    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });
  });
  if (todo.completed === true) todoObj.text.classList.add("completed");
}

// 정답률: 80% - 조건문이 불필요하며, renderTodos() 호출이 누락되었습니다.

// function toggleTodo(index) {
//     if ((todos[index].completed = !todos[index].completed))
//       localStorage.setItem("todos", JSON.stringify(todos));
//   }
// 정답률: 80% - 조건문이 불필요하며, renderTodos() 호출이 누락되었습니다
//   2차 개선 코드
function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// function deleteTodo(index) {
//   todos.splice(index, 1);
//   localStorage.setItem("todos", JSON.stringify(todos));
//   renderTodos();
// }
// 2차 개선 코드
function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
// 정답률: 100% - 완벽한 구현입니다.
