// DOM 요소 선택
const todoForm = document.getElementById("todo-form");
//변수선언 변수명 = 문서의 투두폼의 아이디를 가진 요소를 참조

const todoInput = document.getElementById("todo-input");
//변수선언 변수명 = 문서의 투두인풋의 아이디를 가진 요소를 참조

const todoList = document.getElementById("todo-list");
//변수선언 변수명 = 문서의 투두리스트의 아이디를 가진 요소를 참조

let todos = JSON.parse(localStorage.getItem("todos")) || [];
// 올바른 해석: localStorage에서 "todos" 키의 값을 가져와 JSON 형식으로 파싱하고, 값이 없으면 빈 배열로 초기화

// 폼 제출 이벤트 리스너
todoForm.addEventListener("submit", (e) => {
  //투두폼의 전송 이벤트가 발생하면, 파라미터로 e를 사용하며,
  e.preventDefault();
  //해당 매개변수의 기본 제출 동작 방지
  const todoText = todoInput.value.trim();
  //변수선언 변수명 = 입력값의 값의 공백을 지우고
  if (todoText) {
    //조건문(공백제거된 입력값이면)
    addTodo(todoText);
    //할일 추가하는 함수의 인자로 공백제거 입력값을 인자로 사용
    todoInput.value = "";
    //입력값의 값을 초기화한다.
  }
});

// 할 일 추가 함수
function addTodo(text) {
  //함수선언 할일 추가 함수(매개변수)
  const todo = {
    //변수선언 변수명은 객체로 저장하며
    id: Date.now(),
    //아이디 는 현재 시간을 값으로 가지며
    // 올바른 해석: 현재 시간을 밀리초 단위로 변환한 값을 id로 사용
    text: text,
    //내용은 매개변수를 사용하며
    completed: false,
    //완료여부는 기본적으로 부정을 기본값으로 한다.
  };
  todos.push(todo);
  //배열에 객체를 값으로 추가한다.
  saveTodos();
  //할일 저장하는 함수 호출
  renderTodos();
  //할일 표시하는 함수 호출
}

// localStorage에 todos 저장
function saveTodos() {
  //함수선언 함수명
  localStorage.setItem("todos", JSON.stringify(todos));
  //로컬스토리지에 값을 저장하는데, 값은 투두스를 사용하며, 객체에서 json 문자열로 변환하며 저장하며, 키로 투두스를 사용한다.
}

// 할 일 목록 렌더링 함수
function renderTodos() {
  //함수선언 함수명
  todoList.innerHTML = "";
  //할일 목록의 내용을 초기화하며
  todos.forEach((todo, index) => {
    //할일 목록 배열의 요소에 대해 순회작업을 하는데, 매개변수로 투두와 인덱스를 사용하며
    const li = document.createElement("li");
    //변수 선언 변수명 = 문서의 li요소를 만든다.
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? "checked" : ""}>
      <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
      <button>삭제</button>
    `;
    //li의 내용으로 타입이 체크박스인 인풋을 만드는데 완료 여부가 참이면 체크하고, 아니면 공백으로 둔다. 또 스팬 요소를 만드는데, 클래스로 파라미터의 완료여부가 참이면, 완료로 하고, 거짓이면 공백으로 하며 다음 내용으로 파라미터의 내용을 내용으로 지정하고, 버튼 요소를 생성하는데, 내용은 삭제로 지정한다.
    const checkbox = li.querySelector("input");
    //변수선언 변수명 = li요소 내의 인풋 태그를 참조하며
    checkbox.addEventListener("change", () => toggleTodo(index));
    //체크 박스의 변경 이벤트가 감지되면, 할일을 전환하는 함수의 인자로 인덱스 파라미터로 전달한다.
    const deleteBtn = li.querySelector("button");
    //변수선언 변수명 = li요소 내의 버튼을 참조한다.
    deleteBtn.addEventListener("click", () => deleteTodo(index));
    //삭제버튼의 클릭이 감지되면, 할일을 제거하는 함수의 인자로 인덱스 파라미터를 전달한다.
    todoList.appendChild(li);
    //할일 목록에 li요소를 추가한다.
  });
}

// 할 일 완료 상태 토글 함수
function toggleTodo(index) {
  //함수선언 할일전환기능의 함수며, 파라미터로 인덱스를 사용한다.
  todos[index].completed = !todos[index].completed;
  // 올바른 해석: 해당 인덱스의 할 일 항목의 완료 상태를 반전시킨다 (true면 false로, false면 true로)
  saveTodos();
  //할일 목록을 저장하는 함수 호출
  renderTodos();
  //할일 목록을 표시하는 함수 호출
}

// 할 일 삭제 함수
function deleteTodo(index) {
  //함수선언 할일 삭제 함수 파라미터로 인덱스 사용
  todos.splice(index, 1);
  // 올바른 해석: todos 배열에서 해당 인덱스의 항목을 1개 제거한다.
  saveTodos();
  //할일 목록 저장 함수 호출
  renderTodos();
  //할일 목록 표시 기능의 함수 호출
}

// 초기 렌더링
renderTodos();
// 올바른 해석: 페이지 로드 시 초기 todos 목록을 화면에 표시하는 함수 호출
