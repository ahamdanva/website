import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { DecryptComponent } from './decrypt/decrypt.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { IdentifyComponent } from './identify/identify.component';

const routes: Routes = [
  {path:'encrypt',component:EncryptComponent},
  {path:'',component:ContainerComponent},
  {path:'identify',component:IdentifyComponent},
  {path:'decrypt',component:DecryptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
