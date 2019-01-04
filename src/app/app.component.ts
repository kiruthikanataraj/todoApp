import { Component } from '@angular/core';
import { AppService, TodoItem } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'todo-app';
  public todoItem: TodoItem[];
  public completedItem: TodoItem[];
  public itemName: string;
  constructor(private appService: AppService) {
    this.todoItem = this.appService.todoItem;
    this.completedItem = this.appService.completedItem;
  }

  public addItem(): void {
    this.appService.addItem(this.itemName);
    this.itemName = '';
  }

  public deleteItem(item: TodoItem): void {
    this.appService.deleteItem(item);
  }

  public editItem(item: TodoItem): void {
    item.editable ? item.editable = false : item.editable = true;
  }

  public filterChange(item: TodoItem): void {
    this.completedItem.push(item);
    this.deleteItem(item);
  }

  public deleteCompletedItem(item: TodoItem): void {
    this.appService.deleteCompletedItem(item);
  }

  public addTodoItem(item: TodoItem): void {
    this.deleteCompletedItem(item);
    this.todoItem.push(item);

  }

}
