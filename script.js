let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let inpNewTask = $('#inpNewTask');

btnAdd.click(() => {
    let liTask = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    });
    ulTasks.append(liTask);
    inpNewTask.val('');
});

btnClear.click(() => inpNewTask.val(''));