import { inject, TestBed } from '@angular/core/testing';
import { AppService, TodoItem } from './app-service';


describe('Machine Files Service', () => {
  let service: AppService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  beforeEach(inject([AppService], (injectedService: AppService) => {
    service = injectedService;
  }));

  it('creates the service using injection', () => {
    expect(service).toBeTruthy();
  });
  const item: TodoItem = { itemName: 'Complete Assignment', completed: false, editable: false };
  const item1: TodoItem = { itemName: 'Go to hospital', completed: false, editable: false };

  describe('check Add todoItem', () => {
    it('should return zero', () => {
      expect(service.todoItem.length).toBe(0);
    });
    it('should return one', () => {

      service.todoItem.push(item);
      expect(service.todoItem.length).toBe(1);

    });

  });

  describe('check delete todoItem', () => {


    it('should return zero', () => {
      service.deleteItem(item);
      expect(service.todoItem.length).toBe(0);

    });
    it('should return one', () => {

      service.todoItem.push(item);
      expect(service.todoItem.length).toBe(1);

    });

  });


});

