import { Component, EventEmitter, Input, Output, } from '@angular/core';


@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.scss']
})
export class ViewEditComponent {
@Input() isEdit:boolean=true;
@Input() content:string=''; 
@Output() onComplete= new EventEmitter();
todoValue='';
onEnter(){
  console.log(this.todoValue);
  this.onComplete.emit(this.todoValue);
}

}
