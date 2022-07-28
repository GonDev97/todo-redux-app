import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filtro/filtro.actions';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: validFilters = 'All'
  filters: validFilters[] = ['All','Completed','Pending'];
  pendingCounter: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => {
      this.currentFilter = filter;
    })

    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingCounter = state.todos.filter(element => !element.completado).length;
    })
  }

  changeFilter(filter: validFilters){
    this.store.dispatch(setFilter({filter}))
  }

  public clearCompleted(){
    this.store.dispatch(deleteCompleted());
  }

}
