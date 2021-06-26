let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let inpNewTask = $('#inpNewTask');

btnAdd.click(() => {
    let liNewTask = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    });
    liNewTask.click((event) => {
        liNewTask.toggleClass('done');
    });
    ulTasks.append(liNewTask);
    inpNewTask.val('');
});

btnClear.click(() => inpNewTask.val(''));