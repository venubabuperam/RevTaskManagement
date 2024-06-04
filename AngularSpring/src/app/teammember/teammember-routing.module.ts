import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThomeComponent } from './thome/thome.component';
import { TeammembertasksComponent } from './teammembertasks/teammembertasks.component';
import { ViewalltasksComponent } from './viewalltasks/viewalltasks.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
const routes: Routes = [
  {
    path:'thome',
    component:ThomeComponent
  },
  {
    path:'teammembertasks',
    component:TeammembertasksComponent
  },
  {
    path:'viewalltasks',
    component:ViewalltasksComponent
  },
  {
    path:'updatetasks/:id',
    component:UpdatetaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeammemberRoutingModule { }
