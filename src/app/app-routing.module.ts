import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './components/todos/todos.component';
import { Todo } from './models/Todo';

const routes: Routes = [
  {
    path:'',component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
