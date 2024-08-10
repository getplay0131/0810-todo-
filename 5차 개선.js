function renderTodos() {
  // 나의 개선된 답안
  `li.innerHTML = "할 일 목록"`;
  `<input type="checkbox"></input>
<span></span>
<button></button>`;

  // 정답률: 30% - 템플릿 리터럴 문법이 잘못 사용되었습니다.

  // 5차 개선안
  li.innerHTML = `<input type="checkbox" ${todo.completed ? "completed" : ""}
<span class="${todo.completed ? "completed" : ""}" ${todo.text}></span>
<button>삭제</button>`;

  // 나의 개선된 답안
  // const inputs = li.querySelector("input");
  // const span = li.querySelector("span");
  // const btnInLi = li.querySelector("button");

  // inputs.addEventListener("change", () => {
  //   toggleTodo(index);
  // });
  // btnInLi.addEventListener("click", () => {
  //   deleteTodo(index);
  // });

  // 정답률: 90% - 대체로 잘 구현되었지만, span 요소는 사용되지 않았습니다.
  // function renderTodos() {
  //     todoList.innerHTML = "";
  //     todos.forEach((todo, index) => {
  //       const li = document.createElement("li");
  //       li.innerHTML = `
  //         <input type="checkbox" ${todo.completed ? 'checked' : ''}>
  //         <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
  //         <button>삭제</button>
  //       `;

  //       const checkbox = li.querySelector('input');
  //       checkbox.addEventListener('change', () => toggleTodo(index));

  //       const deleteBtn = li.querySelector('button');
  //       deleteBtn.addEventListener('click', () => deleteTodo(index));

  //       todoList.appendChild(li);
  //     });
  //   }
}
