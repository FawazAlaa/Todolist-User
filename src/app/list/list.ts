import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInput } from '../input/input';
import { FormsModule } from '@angular/forms';
interface taskInterface{
    id:number;
    title:string;
    description:string;

  }
@Component({
  selector: 'app-list',
  imports: [TodoInput,FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  // getting task from parent 
  @Input ()  taskarr?:taskInterface[];

  

// Send task to parent
  @Output() taskEvent=new EventEmitter<taskInterface>()
  updateTask(currentTask:taskInterface){
    this.taskEvent.emit(currentTask)
    
  }

}
