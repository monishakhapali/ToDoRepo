import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoitem:Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {

  }
  // set dynamic classes
  setClasses(){
    let classes={
      todo: true,
      'is-complete': this.todoitem.completed
    }
    return classes;
  }

  //OnToggle
  OnToggle(todoitem){
    //toggle in UI
    todoitem.completed = !todoitem.completed;
    //toggle on server
    this.todoService.toggleCompleted(todoitem).subscribe(todo => console.log(todoitem));
  }
  onDeleted(todoitem){
    this.deleteTodo.emit(todoitem);
  }

}
