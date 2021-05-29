import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  strike = false;
  tasks = [];
  todoForm = new FormGroup({
    todoTask: new FormControl('')
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const x = this.todoForm.get('todoTask').value;
    if (x) {
      this.tasks.push(x);
    }
    this.todoForm.get('todoTask').setValue('');
  }

  onDelete(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
