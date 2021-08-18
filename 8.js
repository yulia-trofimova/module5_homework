let newTask = new Map();
newTask.set('key1', 'value1');
newTask.set('key2', 'value2');
newTask.set('key3', 'value3');
newTask.set('key4', 'value4');
newTask.set('key5', 'value5');


function bothName (newTask) {

    newTask.forEach((value,key) => {
        console.log(`Ключ - ${key}, Значение - ${value}`)
    });

}