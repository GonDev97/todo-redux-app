import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { deleteTodo, edit, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo | undefined;
  @ViewChild('inputPhysic')
  txtInputFisico!: ElementRef;

  checkCompleted: FormControl = new FormControl(false) ;
  txtInput: FormControl = new FormControl('', Validators.required);

  editing: boolean = false;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.checkCompleted.setValue(this.todo?.completado)
    this.txtInput.setValue(this.todo?.texto)

    this.checkCompleted.valueChanges.subscribe(value => {
      if(this.todo){
        this.store.dispatch(toggle({id:this.todo.id}))
      }
    })

  }

  public editar(){
    this.editing = true;
    this.txtInput.setValue(this.todo?.texto)
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1)

  }

  public finishEdition(){
    this.editing = false;
    if(this.todo && this.txtInput.valid && this.txtInput.value !== this.todo.texto){
      this.store.dispatch(edit({id:this.todo.id, texto:this.txtInput.value}))
    }
  }

  public deleteTodo(){
    if(this.todo){
      this.store.dispatch(deleteTodo({id: this.todo.id}))
    }
  }

}
