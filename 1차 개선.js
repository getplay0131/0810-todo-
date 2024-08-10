// 총 정답률: 약 70%

// JavaScript 부분:
// 정답률: 약 55%
// 틀린 점 및 부족한 부분:

// localStorage 사용 방법 일부 개선 필요
// 이벤트 리스너 내 로직 개선 필요
// renderTodos 함수 내 DOM 조작 최적화 필요
// 코드 구조 및 변수명 일관성 개선 필요
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
// 기존 코드
// 2. 할 일 목록을 저장할 배열 선언
// 힌트: localStorage에서 기존 데이터를 불러오거나, 없으면 빈 배열로 초기화
// let todos = [];
// const todosLoad = JSON.parse(localStorage.getItem("todos")) || [];

// 개선 코드 작성
/*
1. todos 배열 초기화 시 직접 localStorage에서 데이터 불러오기
2. || 연산자를 사용하여 데이터가 없을 경우 빈 배열로 초기화
3. todosLoad 변수 제거
*/ let todos = JSON.parse(localStorage.getItem(todos)) || [];

// 기존 코드
// 3. 폼 제출 이벤트 리스너 추가
// 힌트: addEventListener를 사용하여 'submit' 이벤트 처리
todoForm.addEventListener("submit", () => {
  localStorage.setItem("todos", JSON.stringify("todos"));
});

// 개선 코드 작성
/*
1. 이벤트 객체 e를 매개변수로 받고 e.preventDefault() 호출
2. todoInput.value.trim()을 사용하여 입력값 가져오기
3. 입력값이 있을 경우에만 addTodo 함수 호출
4. 입력 필드 초기화 (todoInput.value = '')
*/
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!todoInput.value.trim() === null) {
    addTodo();
    todoInput.value = "";
  }
});

// 기존 코드
// 4. 할 일 추가 함수
// function addTodo(text) {
//   // 4-1. 새로운 할 일 객체 생성 (텍스트와 완료 상태 포함)
//   let todoObj = {
//     text: "todosWork",
//     completed: "completedStat",
//   };
//   // 4-2. 배열에 새 할 일 추가
//   todos = todoObj.text;

//   // 4-3. localStorage에 업데이트된 목록 저장
//   // 힌트: JSON.stringify 사용
//   localStorage.setItem("todos", JSON.stringify("todos"));
//   // 4-4. 목록 렌더링 함수 호출
//   renderTodos();
// }

// 개선 코드 작성
/*
1. todoObj에 id 속성 추가 (Date.now() 사용)
2. text 속성에 매개변수로 받은 text 할당
3. completed 속성을 boolean 값(false)으로 설정
4. todos 배열에 새로운 todoObj를 push 메서드로 추가
5. localStorage에 todos 배열 전체를 JSON.stringify하여 저장
*/
function addTodo(text) {
  let todoObj = {
    id: new Date().getTime(),
    text: text,
    completed: false,
  };
  todos.push(todoObj);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 기존 코드
// 5. 할 일 목록 렌더링 함수
// function renderTodos() {
//   // 5-1. ul 요소 내용 초기화
//   todoList.value = "";
//   // 5-2. 배열의 각 할 일에 대해 li 요소 생성
//   // 힌트: forEach 또는 map 메소드 사용
//   todos.forEach((element) => {
//     const createLi = document.createElement("li");
//     todoList.appendChild(createLi);
//     // 5-3. 각 li에 텍스트, 완료 표시 체크박스, 삭제 버튼 추가
//     const deleteBtn = document.createElement("button");
//     const createCheck = document.createElement("input");
//     createLi.textContent = `${(createCheck.type = "checkbox")},${
//       todos.text
//     },${(deleteBtn.textContent = "삭제")}`;
//   });

// 5-4. 체크박스와 삭제 버튼에 이벤트 리스너 추가
createCheck, deleteBtn.addEventListener("click", addTodo);

// 개선 코드 작성
/*
1. todoList.innerHTML = ""; 사용하여 목록 초기화
2. todos.forEach((todo, index) => {...}) 사용하여 각 할 일 항목 처리
3. 체크박스, 텍스트, 삭제 버튼을 포함하는 리스트 아이템 구조 생성
4. 체크박스에 toggleTodo(index) 이벤트 리스너 추가
5. 삭제 버튼에 deleteTodo(index) 이벤트 리스너 추가
6. todo.completed가 true일 경우 텍스트에 'completed' 클래스 추가
*/
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    `<input type="checkbox" id="inputCheck">완료 여부</input>
    <p id="textDisplay"></p>
    <button id="deleteBtn">삭제</button>`;
    inputCheck.addEventListener("change", toggleTodo(index));
    deleteBtn.addEventListener("click", deleteTodo(index));
    if (todo.completed === true) todoObj.text.classList.add("completed");
  });
}

// 기존 코드
// 6. 할 일 완료 상태 토글 함수
// function toggleTodo(index) {
//   // 6-1. 해당 인덱스의 할 일 완료 상태 변경
//   todos[index].classList.toggle("completed");
//   // 6-2. localStorage 업데이트
//   localStorage.setItem("todos", JSON.stringify("todos"));
//   // 6-3. 목록 다시 렌더링
//   renderTodos();
// }

// 개선 코드 작성
/*
1. todos[index].completed = !todos[index].completed; 사용하여 완료 상태 토글
2. localStorage.setItem("todos", JSON.stringify(todos)); 로 전체 배열 저장
*/
function toggleTodo(index) {
  if ((todos[index].completed = !todos[index].completed))
    localStorage.setItem("todos", JSON.stringify(todos));
}

// 기존 코드
// 7. 할 일 삭제 함수
// function deleteTodo(index) {
//   // 7-1. 해당 인덱스의 할 일 제거 (힌트: splice 메소드 사용)
//   todos.splice(index, 1);
//   // 7-2. localStorage 업데이트
//   localStorage.setItem("todos", JSON.stringify("todos"));

//   // 7-3. 목록 다시 렌더링
//   renderTodos();
// }

// 개선 코드 작성
/*
1. todos.splice(index, 1); 부분은 정확함
2. localStorage.setItem("todos", JSON.stringify(todos)); 로 전체 배열 저장
*/
function deleteTodo(index) {
  // 7-1. 해당 인덱스의 할 일 제거 (힌트: splice 메소드 사용)
  todos.splice(index, 1);
  // 7-2. localStorage 업데이트
  localStorage.setItem("todos", JSON.stringify(todos));

  // 7-3. 목록 다시 렌더링
  renderTodos();
}

// 8. 초기 목록 렌더링
// 힌트: 페이지 로드 시 renderTodos 함수 호출
renderTodos();
