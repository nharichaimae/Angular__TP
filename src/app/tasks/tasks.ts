import { UpperCasePipe, LowerCasePipe } from '@angular/common';
import { TitleColorPipe } from '../pipes/title-color-pipe';
import { Component, signal, computed, effect } from '@angular/core';
import { Task } from './tasks-module';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleColorPipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  tasks = signal<Task[]>([
    { id: 11, title: 'apprendre angular', bought: true },
    { id: 5, title: 'créer taskflow', bought: false }
  ]);

  new = signal('');

  count = computed(() =>
    this.tasks().filter(task => !task.bought).length
  );

  emptyStock = computed(() => this.tasks().length === 0);

  constructor() {
    effect(() => {
      console.log(`Il reste ${this.count()} tâche(s) à faire`);
    });
  }

  add(task: Task) {
    this.tasks.update(items => [...items, task]);
  }

  clear() {
    this.tasks.set([]);
  }
}