let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnCleanup = $('#btnCleanup');
let btnSort = $('#btnSort');
let inpNewTask = $('#inpNewTask');

function addTask() {
    if (inpNewTask.val() == '') {
        inpNewTask.focus();
        return;
    }
    let liNewTask = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    });
    liNewTask.click((event) => {
        liNewTask.toggleClass('done');
        toggleInpBtns();
    });
    ulTasks.append(liNewTask);
    inpNewTask.val('').focus();
    toggleInpBtns();
}

function toggleInpBtns() {
    btnReset.prop('disabled', inpNewTask.val() == '');
    btnAdd.prop('disabled', inpNewTask.val() == '');
    btnSort.prop('disabled', $('#ulTasks .done').length < 1);
    btnCleanup.prop('disabled', $('#ulTasks .done').length < 1);
}

inpNewTask.keypress((e) => {
    if (e.which == 13) addTask();
});

inpNewTask.on('input', () => {
    toggleInpBtns();
});

btnAdd.click(addTask);

btnReset.click(() => {
    inpNewTask.val('').focus();
    toggleInpBtns();
});

btnCleanup.click(() => {
    $('#ulTasks .done').remove()
    toggleInpBtns();
});

btnSort.click(() => {
    $('#ulTasks .done').appendTo(ulTasks)
    toggleInpBtns();
});