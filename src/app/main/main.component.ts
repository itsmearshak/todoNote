import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  todoList:string[]=new Array()
isAdd:boolean=false;
 onAdd():void{
  this.isAdd=true;
 }
 cancelAdd(){
  this.isAdd=false;

 }
 complete(value:string):void{
  console.log(value);

  if(value!=''){
  console.log(value);
    this.todoList.push(value);
  }

    this.cancelAdd();

 }
}
