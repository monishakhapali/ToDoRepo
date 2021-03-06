import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoURL:string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=5';
  //todoURL:string = 'https://jsonplaceholder.typicode.com/todos/?_limit=5';
  constructor(private http:HttpClient) { }
  
  getTodos():Observable<Todo[]>{
   return this.http.get<Todo[]>(`${this.todoURL}${this.todoLimit}`);
   //return this.http.get<Todo[]>(this.todoURL);
  }

  //Toggle completed
  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.todoURL}/${todo.id}`
    return this.http.put(url, todo, httpOptions);
    
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todoURL}/${todo.id}`
    return this.http.delete<Todo>(url,httpOptions);
  }
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todoURL,todo,httpOptions);
  }
}
