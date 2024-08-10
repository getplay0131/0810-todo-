function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    // 여기에 템플릿 리터럴을 사용하여 li의 innerHTML 설정
    `li.innerHTML = "할 일 목록"`;
    // checkbox, todo.text를 표시할 span, 삭제 버튼을 포함하는 구조 생성

    `<input type="checkbox"></input>
    <span></span>
    <button></button>`;

    // li.querySelector를 사용하여 생성된 요소들 선택
    const inputs = li.querySelector("input");
    const span = li.querySelector("span");
    const btnInLi = li.querySelector("button");
    // todoList.appendChild(li)를 사용하여 생성된 li를 추가하세요.
    todoList.appendChild(li);

    // 선택된 요소들에 이벤트 리스너 추가
    inputs.addEventListener("change", () => {
      toggleTodo(index);
    });
    btnInLi.addEventListener("click", () => {
      deleteTodo(index);
    });
  });
}
