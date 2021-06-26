let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnCleanup = $('#btnCleanup');
let btnSort = $('#btnSort');
let inpNewTask = $('#inpNewTask');

function addTask() {
    if(inpNewTask.val() == ''){
        inpNewTask.focus();
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
    inpNewTask.val('').focus();
}

inpNewTask.keypress((e) => {
    if (e.which == 13) addTask();
});

btnAdd.click(addTask);

btnReset.click(() => inpNewTask.val('').focus());

btnCleanup.click(() => $('#ulTasks .done').remove());

btnSort.click(() => $('#ulTasks .done').appendTo(ulTasks));