import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IotModulesComponent } from "./iot-modules/iot-modules.component";

const routes: Routes = [
  { path: 'modules', component: IotModulesComponent },
  { path: '', redirectTo: '/modules', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
