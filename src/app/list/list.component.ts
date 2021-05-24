import { Component, OnInit } from '@angular/core';
import { todo } from '../Models/todo.model';
import { ListService } from '../shared/list.service';
import {MatDialog} from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {

  public newTodo= "";
  todosArray: todo[] = [];
  isChecked: boolean = true;
  ;

  constructor(private listService: ListService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.listService.getList().subscribe((x) => {
      this.todosArray = x;
      this.sort("state");
      console.log(this.todosArray);
      }
    );

  }
  
  add (): void {
    if (this.newTodo != "") {
      const currentTodo = new todo(this.newTodo);
      const todoId = currentTodo?.id || null;
      this.listService.addTodo(currentTodo,todoId!);
      this.newTodo = '';
    }
  }

  async delete (todoID: string): Promise<void> {
      await this.listService.deleteTodo(todoID);
  }

  state(todoID: string, state: number) {
    this.listService.editState(todoID,state)
  }

  edit(task: todo): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '500px',
      data: {tittle: task.tittle, priority: task.priority, id: task.id}
    });
  }

  sort(param: String){
    switch(param){
      case "state":
        this.todosArray.sort((a, b) => a.state - b.state);
        break;
      case "priority":
        this.todosArray.sort((a, b) => a.priority - b.priority);
        break;
      case "date":
        this.todosArray.sort((a, b) => (a.now > b.now) ? 1 : -1 );
        break;
      case "tittle":
        this.todosArray.sort((a, b) => a.tittle.localeCompare(b.tittle.toString()));
        break;
    }
  }

}

