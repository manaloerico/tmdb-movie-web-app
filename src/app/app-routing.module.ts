import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModule } from 'src/app/pages/feature/feature.module';

const routes: Routes = [{
  path:'',
  loadChildren:()=>import('src/app/pages/feature/feature.module').then(m=>FeatureModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
