var Task = (function () {
    // description: string;
    // priority: string; // how urgent the task is
    // Now create a constructor method to instantiate new Tasks
    // Constructor keyword initialies new instance of the class
    // The constructor takes 2 parameters, it does not require info regarding the Done property because all Task objects begin with a default property of false
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false; // Done denotes whether or not task is complete
    }
    //  this.done = false;
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Pet cats.', 'High'));
tasks[0].markDone();
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
