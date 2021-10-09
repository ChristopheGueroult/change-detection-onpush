import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: '/orders', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    console.log(this.router.config);
  }
}
