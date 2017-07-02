class Task {
  done: boolean = false; // Done denotes whether or not task is complete
  // description: string;
  // priority: string; // how urgent the task is

  // Now create a constructor method to instantiate new Tasks

  // Constructor keyword initialies new instance of the class
  // The constructor takes 2 parameters, it does not require info regarding the Done property because all Task objects begin with a default property of false
  constructor(public description: string, public priority: string){}
  //  this.done = false;
    markDone(){
      this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Pet cats.', 'High'));

tasks[0].markDone();

for(var task of tasks){
  console.log(task);
}
