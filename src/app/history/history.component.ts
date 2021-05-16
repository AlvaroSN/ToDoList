import { Component, OnInit } from '@angular/core';
import { todo } from '../Models/todo.model';
import { ListService } from '../list/shared/list.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  todosArray!: todo[];
  listTodo = this.listService.todos;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.getList().subscribe(
      (res: any) => this.todosArray = res,
    );
  }

  state(todoID: string, state: number) {
    this.listService.editState(todoID,state)
  }

  async delete (todoID: string): Promise<void> {
    await this.listService.deleteTodo(todoID);
}

}
