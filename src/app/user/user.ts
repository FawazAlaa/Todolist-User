import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface userInterface{
  name:string,
  role:string
}
@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {

  newUser:userInterface={
    name:'',
    role:''
  }

  @Output() userEvent=new EventEmitter<userInterface>()

sendUser() {
  const newUserCopy: userInterface = {
    name: this.newUser.name,
    role: this.newUser.role
  };
  this.userEvent.emit(newUserCopy); 
  this.newUser = { name: '', role: '' };
}


}
