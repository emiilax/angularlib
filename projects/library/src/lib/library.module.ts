import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';


import { CounterButtonComponent } from './components/counter-button/counter-button.component';

@NgModule({
  declarations: [CounterButtonComponent],
  imports: [CommonModule, MatButtonModule, MatBadgeModule],
  exports: [CounterButtonComponent]
})
export class LibraryModule { }
