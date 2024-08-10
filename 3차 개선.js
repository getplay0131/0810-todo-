todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() !== "") {
    addTodo(todoInput.value.trim());
    todoInput.value = "";
  }
});
// 정답률: 90% - addTodo 함수에 e 대신 todoInput.value.trim()을 전달해야 합니다.

// 템플릿 리터럴을 사용하여 HTML 문자열을 생성하세요.
// createElement를 사용하여 li 요소를 생성하고, innerHTML로 템플릿 리터럴 내용을 설정하세요.
// querySelector를 사용하여 생성된 li 내부의 요소들을 선택하세요.
// appendChild를 사용하여 li를 todoList에 추가하세요.
// todo.completed 체크는 forEach 루프 내부로 이동하세요

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    `<input type="checkbox" ${todo.completed ? checked : ""}></input>
      <p></p>
      <button type="button"></button>`;
    const inputs = document.querySelector("input");
    todoForm.appendChild(inputs);
    const deleteBtn = document.querySelector("button");
    deleteBtn.appendChild(deleteBtn);
    const createLi = document.createElement("li");
    const li = document.querySelectorAll("li");
    todoList.appendChild(li);
    inputs.innerHTML = "완료 여부";
    deleteBtn.innerHTML = "삭제";
    inputs.addEventListener("change", () => {
      toggleTodo(index);
    });
    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });
    if (todo.completed === true) todoObj.text.classList.add("completed");
  });
}
// 정답률: 60% - DOM 조작 방식에 여전히 오류가 있습니다.
