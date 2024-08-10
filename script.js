document.addEventListener("DOMContentLoaded", () => {
  // 1. 필요한 DOM 요소 선택하기
  // 힌트: querySelector 또는 getElementById를 사용하여 form, input, ul 요소 선택
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // 2. 할 일 목록을 저장할 배열 선언
  // 힌트: localStorage에서 기존 데이터를 불러오거나, 없으면 빈 배열로 초기화
  let todos = [];
  const todosLoad = JSON.parse(localStorage.getItem("todos")) || [];

  // 3. 폼 제출 이벤트 리스너 추가
  // 힌트: addEventListener를 사용하여 'submit' 이벤트 처리
  todoForm.addEventListener("submit", () => {
    localStorage.setItem("todos", JSON.stringify("todos"));
  });

  // 4. 할 일 추가 함수
  function addTodo(text) {
    // 4-1. 새로운 할 일 객체 생성 (텍스트와 완료 상태 포함)
    let todoObj = {
      text: "todosWork",
      completed: "completedStat",
    };
    // 4-2. 배열에 새 할 일 추가
    todos = todoObj.text;

    // 4-3. localStorage에 업데이트된 목록 저장
    // 힌트: JSON.stringify 사용
    localStorage.setItem("todos", JSON.stringify("todos"));
    // 4-4. 목록 렌더링 함수 호출
    renderTodos();
  }

  // 5. 할 일 목록 렌더링 함수
  function renderTodos() {
    // 5-1. ul 요소 내용 초기화
    todoList.value = "";
    // 5-2. 배열의 각 할 일에 대해 li 요소 생성
    // 힌트: forEach 또는 map 메소드 사용
    todos.forEach((element) => {
      const createLi = document.createElement("li");
      todoList.appendChild(createLi);
      // 5-3. 각 li에 텍스트, 완료 표시 체크박스, 삭제 버튼 추가
      const deleteBtn = document.createElement("button");
      const createCheck = document.createElement("input");
      createLi.textContent = `${(createCheck.type = "checkbox")},${
        todos.text
      },${(deleteBtn.textContent = "삭제")}`;
    });

    // 5-4. 체크박스와 삭제 버튼에 이벤트 리스너 추가
    createCheck, deleteBtn.addEventListener("click", addTodo);
  }

  // 6. 할 일 완료 상태 토글 함수
  function toggleTodo(index) {
    // 6-1. 해당 인덱스의 할 일 완료 상태 변경
    todos[index].classList.toggle("completed");
    // 6-2. localStorage 업데이트
    localStorage.setItem("todos", JSON.stringify("todos"));
    // 6-3. 목록 다시 렌더링
    renderTodos();
  }

  // 7. 할 일 삭제 함수
  function deleteTodo(index) {
    // 7-1. 해당 인덱스의 할 일 제거 (힌트: splice 메소드 사용)
    todos.splice(index, 1);
    // 7-2. localStorage 업데이트
    localStorage.setItem("todos", JSON.stringify("todos"));

    // 7-3. 목록 다시 렌더링
    renderTodos();
  }

  // 8. 초기 목록 렌더링
  // 힌트: 페이지 로드 시 renderTodos 함수 호출
  renderTodos();
});
