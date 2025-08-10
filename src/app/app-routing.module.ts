import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { PagamentoCreateComponent } from './component/Pagamento/pagamento-create/pagamento-create.component';
import { PagamentoUpdateComponent } from './component/Pagamento/pagamento-update/pagamento-update.component';
import { PagamentoCrudComponent } from './views/pagamento-crud/pagamento-crud.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { PagamentoDeleteComponent } from './component/Pagamento/pagamento-delete/pagamento-delete.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { FornecedorDeleteComponent } from './component/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from './component/fornecedor/fornecedor-update/fornecedor-update.component';

import { AppInicialComponent } from './views/app-inicial/app-inicial.component';
import { LoginComponent } from './component/auth/login/login.component';
import { CadastroComponent } from './component/auth/cadastro/cadastro.component';

import { AuthGuard } from './component/auth/auth.guard';
import { ChatComponent } from './component/chat/chat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'contatos', component: ChatComponent },
  // rota padrão ou fallback
  { path: '', redirectTo: '/contatos', pathMatch: 'full' },

  {
    path: 'inicial',
    component: AppInicialComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    component: ProductCrudComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/create',
    component: ProductCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/update/:proId',
    component: ProductUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/delete/:proId',
    component: ProductDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'formaPagamento',
    component: PagamentoCrudComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'formaPagamento/create',
    component: PagamentoCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'formaPagamento/update/:fpgId',
    component: PagamentoUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'formaPagamento/delete/:fpgId',
    component: PagamentoDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes',
    component: ClienteCrudComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes/create',
    component: ClienteCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes/update/:cliId',
    component: ClienteUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes/delete/:cliId',
    component: ClienteDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fornecedores',
    component: FornecedorCrudComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fornecedores/create',
    component: FornecedorCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fornecedores/update/:forId',
    component: FornecedorUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fornecedores/delete/:forId',
    component: FornecedorDeleteComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
