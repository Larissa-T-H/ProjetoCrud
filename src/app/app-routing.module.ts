import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './component/produtos/produtos.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  {path: 'produtos', component: ProdutosComponent},
  {path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
