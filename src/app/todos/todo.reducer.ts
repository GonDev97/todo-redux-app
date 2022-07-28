import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, deleteCompleted, deleteTodo, edit, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Save the world'),
    new Todo('Beat Thanos'),
    new Todo('But Ironman suit'),
    new Todo('Steal Captain America shield'),
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, props) => [...state, new Todo(props.texto)]),

  on(toggle, (state, {id}) => {
    console.log('he');
    return state.map(todo => {
        return {
            ...todo,
            completado: todo.id === id ? !todo.completado : todo.completado
        }
    } );
  }),

  on(edit, (state, {id, texto}) => {
    return state.map(todo => {
        if(todo.id === id){
            return {
                ...todo,
                texto
            }
        }
        else return todo
        
    } );
  }),

  on(deleteTodo, (state, {id}) => {return state.filter(todo => todo.id !== id) }),

  on(toggleAll, (state, {toggle}) => {
    return state.map(todo => {
        return {
            ...todo,
            completado: toggle
        }
        
    })
  }),

  on(deleteCompleted, (state) => {
    return state.filter(todo => !todo.completado)
  })

);