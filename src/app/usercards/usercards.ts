import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user/user';
import { NgForOf, NgClass } from '@angular/common';

interface userInterface {
  name: string,
  role: string
}
@Component({
  selector: 'app-usercards',
  standalone: true,
  imports: [FormsModule,User,NgForOf,NgClass],
  templateUrl: './usercards.html',
  styleUrl: './usercards.scss'
})
export class Usercards {
  @Input() users?: userInterface[];


}
