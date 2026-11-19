import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe } from '@angular/common';
import { TitleColorPipe } from '../pipes/title-color-pipe';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, TitleColorPipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  tasks: { id: number; title: string; date: string }[] = [
    { id: 11, title: 'apprendre angular', date: '2026-11-14' },
    { id: 5, title: 'créer taskflow', date: '2026-11-15' }
  ];
}