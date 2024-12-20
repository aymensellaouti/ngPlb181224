import { TodoDto } from "./todo.dto";

export interface TodoResponse {
  todos: TodoDto[];
  total: number;
  skip: number;
  limit: number;
}
