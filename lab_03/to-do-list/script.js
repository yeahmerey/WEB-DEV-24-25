const inputBox = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please firstly write"); 
    } else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add();
        checkbox.addEventListener("change", function() {
            li.classList.toggle("checked", checkbox.checked);
        });
                    
        let taskText = document.createElement("span");
        taskText.textContent = inputBox.value;

        let deleteBtn = document.createElement("img");
        deleteBtn.src = "img/delete.png";
        deleteBtn.classList.add("delete-box");
        deleteBtn.onclick = function() {
            li.remove();
        };                    
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
    inputBox.value = ''; 
}