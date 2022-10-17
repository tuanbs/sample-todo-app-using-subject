import { TestBed } from '@angular/core/testing';

import { MyTodoService } from './my-todo.service';

describe('MyTodoService', () => {
  let service: MyTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
