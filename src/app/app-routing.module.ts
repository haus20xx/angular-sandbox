import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmulatedImageComponent } from './emulated-image/emulated-image.component';
const routes: Routes = [
  { path: 'form1', component: ReactiveFormComponent },
  { path: 'css-gif', component: EmulatedImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
