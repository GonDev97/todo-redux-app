import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from 'src/app/filtro/filtro.actions';


import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: validFilters = 'All';

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      this.todos= state.todos
      this.currentFilter = state.filter;
    })
   }

  ngOnInit(): void {
      
  //   this.store.select('todos')
  //     .subscribe( todos => this.todos = todos);
  // }
  }

}
