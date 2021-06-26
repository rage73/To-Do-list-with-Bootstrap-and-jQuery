let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let inpNewTask = $('#inpNewTask');

function addTask() {
    if(inpNewTask.val() == ''){
        return;
    }
    let liNewTask = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    });
    liNewTask.click((event) => {
        liNewTask.toggleClass('done');
    });
    ulTasks.append(liNewTask);
    inpNewTask.val('');
}

inpNewTask.keypress((e) => {
    if (e.which == 13) addTask();
});

btnAdd.click(addTask);

btnClear.click(() => inpNewTask.val(''));