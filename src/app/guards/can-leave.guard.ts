import { CanDeactivateFn } from '@angular/router';
import { TodoComponent } from '../todo/todo/todo.component';

export const canLeaveGuard: CanDeactivateFn<TodoComponent> = (component, currentRoute, currentState, nextState) => {

  if(component.todo.content || component.todo.name) {
    return confirm('Are you sure you want to leave');
  }
  return true;
};
