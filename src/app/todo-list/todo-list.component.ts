import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="todo-list">
      <h1>My Todo List</h1>
      <div class="add-todo">
        <input [(ngModel)]="newTodoText" placeholder="New task" />
        <button (click)="addTodo()">Add</button>
      </div>
      <ul>
        <li *ngFor="let todo of todoService.getTodos()" [ngClass]="{ completed: todo.completed }">
          <span [class.completed]="todo.completed">{{ todo.text }}</span>
          <div class="actions">
            <button (click)="toggleCompletion(todo.id)">✔</button>
            <button (click)="deleteTodo(todo.id)">❌</button>
          </div>
        </li>
      </ul>
      <div *ngIf="todoService.getTodos().length === 0">No tasks</div>
      <div *ngIf="todoService.getTodos().length > 0">
        {{ getTodosStatus() }}
      </div>
    </div>
  `,
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTodoText = '';

  constructor(public todoService: TodoService) {}

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todoService.addTodo(this.newTodoText);
      this.newTodoText = '';
    }
  }

  toggleCompletion(id: number) {
    this.todoService.toggleTodoCompletion(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  getTodosStatus() {
    return this.todoService.getTodos().length === 0
      ? 'No tasks'
      : `${this.todoService.getTodos().filter((t) => !t.completed).length} tasks remaining`;
  }
}
