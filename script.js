const studentAlertSuccess = document.getElementById("student-alert-success-wrapper");
const bsStudentAlertSuccess = new bootstrap.Collapse(studentAlertSuccess, {
  toggle: false,
});
const studentAlertError = document.getElementById("student-alert-error-wrapper");
const bsStudentAlertError = new bootstrap.Collapse(studentAlertError, {
  toggle: false,
});

const saveStudentButton = document.getElementById("save-student-button");
const studentInput = document.getElementById("student-name");
const studentList = document.getElementById("student-list");
const selectStudentButton = document.getElementById("student-select-button");

const students = ["Student 1", "Student 2", "Student 3", "Student 4"];
let selectedStudent = 0;
let isAnimationComplete = true;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

saveStudentButton.onclick = () => {
  if (studentInput.value == "") {
    bsStudentAlertError.show();
    return;
  }

  bsStudentAlertSuccess.show();
  students.push(studentInput.value);

  var listItem = document.createElement("div");
  listItem.innerHTML = studentInput.value;
  listItem.classList.add("card", "py-2", "px-3", "text-center");
  studentList.appendChild(listItem);

  studentInput.value = "";
};

async function printStudentsWithInterval(students, index, maxIndex, scrolls) {
  for (index; index <= maxIndex; index++) {
    studentList.children[index].classList.add("text-white", "bg-primary");

    if (index != 0) {
      studentList.children[index - 1].classList.remove("text-white", "bg-primary");
    }

    await delay(100);
  }
  studentList.children[maxIndex].classList.remove("text-white", "bg-primary");
}

async function printStudents(scrolls, selectedStudent) {
  isAnimationComplete = false;

  for (let index = 0; index < scrolls; index++) {
    await printStudentsWithInterval(students, 0, students.length - 1);
    await delay(0);
  }

  await printStudentsWithInterval(
    students,
    0,
    selectedStudent == 0 ? students.length - 1 : selectedStudent - 1
  );

  studentList.children[selectedStudent].classList.add("text-white", "bg-success");
  isAnimationComplete = true;
}

selectStudentButton.onclick = () => {
  if (!isAnimationComplete) {
    return;
  }

  studentList.children[selectedStudent].classList.remove("text-white", "bg-success");

  const scrolls = getRandomNumber(2, 5);
  selectedStudent = getRandomNumber(0, students.length - 1);

  printStudents(scrolls, selectedStudent);
};

studentAlertSuccess.addEventListener("show.bs.collapse", function () {
  setTimeout(() => {
    bsStudentAlertSuccess.hide();
  }, 1500);
});

studentAlertError.addEventListener("show.bs.collapse", function () {
  setTimeout(() => {
    bsStudentAlertError.hide();
  }, 1500);
});
