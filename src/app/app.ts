import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInput } from './input/input';
import { List } from './list/list';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { User } from './user/user';
import { Usercards } from './usercards/usercards';

interface taskInterface{
    id:number;
    title:string;
    description:string;

  }

  interface userInterface{
  name:string,
  role:string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,TodoInput,List,User,Usercards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  taskList: taskInterface[] = [];

  updatedTask:taskInterface={
    id:0,
    title:'',
    description:'',
  }

 receiveData(event: taskInterface) {
  const index = this.taskList.findIndex(task => task.id === event.id);
  if (index !== -1) {
    // Update existing task
    this.taskList[index] = {
      ...event,
      description: `Task number: ${event.id}`
    };
  } else {
    // Add new task
    const newTask = {
      ...event,
      id: this.taskList.length + 1,
      description: `Task number: ${this.taskList.length + 1}`
    };
    this.taskList.push(newTask);
  }

  // Clear updatedTask to reset form
  this.updatedTask = { id: 0, title: this.updatedTask.title, description: '' };
}

  // ******************************

 receiveTask(event: taskInterface) {
  this.updatedTask = {
    id: event.id,
    title: event.title,
    description: event.description
  }
 }
allUsers:userInterface[]=[];

receiveUser(event:userInterface){
  this.allUsers.push(event);
console.log(this.allUsers)
}


 
}
