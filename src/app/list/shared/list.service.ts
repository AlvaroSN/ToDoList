import { Injectable } from '@angular/core';
import { todo } from '../../Models/todo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private list: AngularFirestoreCollection<todo>;
  todos!: Observable<todo[]>;
  

  constructor( private db: AngularFirestore) {
    this.list = db.collection<todo>('todos');
    this.getList();
    /*this.todos = this.list.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as todo))
      );*/
  }

  ngOnInit(): void { }

  getList() {
    return this.todos = this.list.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as todo))
      );
  }

  addTodo (task: todo, todoId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const id = todoId || this.db.createId();
      const data = { id, ...task };
      const result = this.list.doc(id).set(data);
      resolve(result);
  });
}

  async deleteTodo(id: string): Promise<void> {
    return new Promise(async (resolve) => {
        const result = await this.list.doc(id).delete();
        resolve(result);
    });
  }

  editState (todoID: string, todoState: number) {
    return this.db
      .collection("todos")
      .doc(todoID)
      .update({
        state: todoState
      });
  }

  edit (todoID: string, todoTittle: string, todoPriority: number){
    return this.db
      .collection("todos")
      .doc(todoID)
      .update({
        tittle: todoTittle,
        priority: todoPriority
      });
  }
}


