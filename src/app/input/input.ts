import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
interface taskInterface{
    id:number;
    title:string;
    description:string;

  }
@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})


export class TodoInput {
  // binding variable with input value
 newTask :taskInterface={
  id:0,
  title:'',
  description:''
 }

  // sending it to parent by EventEmitter
  @Output() dataEvent = new EventEmitter<taskInterface>();
  // method to send task
  sendData(){
    const newTaskCopy: taskInterface = {
    id: this.newTask.id,
    title: this.newTask.title,
    description: this.newTask.description,
  };
  this.dataEvent.emit(newTaskCopy);

  // Clear only if it's not an update
  if (!this.taskToUpdate) {
    this.newTask = { id: 0, title: '', description: '' };
  }
  }


 @Input() set taskToUpdate(value: taskInterface | undefined) {
  if (value) {
    // Copy to avoid binding issues
    this.newTask = { ...value };
  }
}

}
