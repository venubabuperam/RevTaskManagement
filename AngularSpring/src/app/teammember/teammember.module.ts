import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeammemberRoutingModule } from './teammember-routing.module';
import { ThomeComponent } from './thome/thome.component';
import { TeammembertasksComponent } from './teammembertasks/teammembertasks.component';
import { ViewalltasksComponent } from './viewalltasks/viewalltasks.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ThomeComponent,
    TeammembertasksComponent,
    ViewalltasksComponent,
    UpdatetaskComponent
  ],
  imports: [
    CommonModule,
    TeammemberRoutingModule,
    FormsModule
  ]
})
export class TeammemberModule { }
