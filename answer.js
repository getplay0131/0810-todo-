// DOM 요소 선택
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// localStorage에서 todos 가져오기 또는 빈 배열로 초기화
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 폼 제출 이벤트 리스너
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText) {
    addTodo(todoText);
    todoInput.value = "";
  }
});

// 할 일 추가 함수
function addTodo(text) {
  const todo = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  todos.push(todo);
  saveTodos();
  renderTodos();
}

// localStorage에 todos 저장
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 할 일 목록 렌더링 함수
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? "checked" : ""}>
      <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
      <button>삭제</button>
    `;

    const checkbox = li.querySelector("input");
    checkbox.addEventListener("change", () => toggleTodo(index));

    const deleteBtn = li.querySelector("button");
    deleteBtn.addEventListener("click", () => deleteTodo(index));

    todoList.appendChild(li);
  });
}

// 할 일 완료 상태 토글 함수
function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

// 할 일 삭제 함수
function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

// 초기 렌더링
renderTodos();
