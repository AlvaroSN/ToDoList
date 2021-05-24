import { Component, OnInit } from '@angular/core';
import { todo } from '../Models/todo.model';
import { ListService } from '../shared/list.service';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(private listService: ListService, 
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: todo) { }

  todoTittle = this.data.tittle;
  todoPriority = this.data.priority.toString();
  todoID = this.data.id;

  ngOnInit(): void { }

  submit(){
    var x: number = +this.todoPriority;
    this.listService.edit(this.todoID!,this.todoTittle.toString(),x);
    this.dialogRef.close();
  }

  onKey(event: any) {
    this.todoTittle = event.target.value;
  }

}
