document.querySelector('#addtask').onclick=function(){
    if(document.querySelector('#newtask input').value == 0){
        alert("Please Enter a Task");
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <li class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button type="button" class="delete btn-info">Delete</button>
            </li>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('done');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}