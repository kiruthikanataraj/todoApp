import { Injectable } from '@angular/core';

export class TodoItem {
    itemName: string;
    completed: boolean;
    editable: boolean;
}

@Injectable()
export class AppService {
    public todoItem: TodoItem[] = [];
    public completedItem: TodoItem[] = [];

    public addItem(itemName: string): void {
        if (itemName) {
            this.todoItem.push({ itemName: itemName, completed: false, editable: false });
          }
    }

    public deleteItem(item: TodoItem): void {
        const index: number = this.todoItem.indexOf(item);
        if (index !== -1) {
          this.todoItem.splice(index, 1);
        }
      }

      public deleteCompletedItem(item: TodoItem): void {
        const index: number = this.completedItem.indexOf(item);
        if (index !== -1) {
          this.completedItem.splice(index, 1);
        }
      }

}
