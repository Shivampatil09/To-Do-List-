document.addEventListener('DOMContentLoaded', function() {
                    const taskInput = document.getElementById('task');
                    const addBtn = document.getElementById('add');
                    const taskList = document.getElementById('taskList');
                    
                    addBtn.addEventListener('click', function() {
                    const taskText = taskInput.value;
                    if (taskText.trim() !== '') {
                    const taskItem = document.createElement('li');
                    taskItem.textContent = taskText;
                    
                    taskItem.addEventListener('click', function() {
                    taskItem.classList.toggle('completed');
                    });
                    
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', function() {
                    taskList.removeChild(taskItem);
                    });
                    
                    taskItem.appendChild(deleteButton);
                    taskList.appendChild(taskItem);
                    taskInput.value = '';
                    }
                    });
                    });
                    