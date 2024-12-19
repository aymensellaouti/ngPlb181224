import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],

})
export class TodoComponent {

  /**
   * Le Todo qui représente notre formulaire
   */
  todo: Todo = new Todo();

  /**
   * La liste des todos
   */
  todos: Todo[] = [];

  todoService = inject(TodoService);

  constructor() {
    this.todos = this.todoService.getTodos();
  }

  /**
   * Permet d'ajouter un todo
   */
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
