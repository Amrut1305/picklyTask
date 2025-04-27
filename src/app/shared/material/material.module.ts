import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

const material = [
  MatIconModule,
  CommonModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    ...material
  ],
  exports: [
    ...material
  ]
})
export class MaterialModule { }
