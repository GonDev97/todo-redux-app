import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'todoFilter'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {

    switch(filter){
      case 'Completed':
        return todos.filter(element => element.completado)
      case 'Pending':
        return todos.filter(element => !element.completado)
      default:
        return todos
    }
  }

}
