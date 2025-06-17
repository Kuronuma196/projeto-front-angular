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


const routes: Routes = [
{
  path: "",
  component:HomeComponent
},
{
  path: "products",
  component:ProductCrudComponent
},
{
  path: "products/create",
  component:ProductCreateComponent
},
{
  path: "products/update/:proId",
  component: ProductUpdateComponent
},
{
  path: "products/delete/:proId",
  component: ProductDeleteComponent
},
{
  path: "formaPagamento",
  component:PagamentoCrudComponent
},
{
  path: "formaPagamento/create",
  component:PagamentoCreateComponent
},
{
  path: "formaPagamento/update/:fpgId",
  component: PagamentoUpdateComponent
},
{
  path: "formaPagamento/delete/:fpgId",
  component: PagamentoDeleteComponent
},
{
  path: "clientes",
  component:ClienteCrudComponent
},
{
  path: "clientes/create",
  component:ClienteCreateComponent
},
{
  path: "clientes/update/:cliId",
  component:ClienteUpdateComponent
},
{
  path: "clientes/delete/:cliId",
  component:ClienteDeleteComponent
},
{
  path: "fornecedores",
  component:FornecedorCrudComponent
},
{
  path: "fornecedores/create",
  component:FornecedorCreateComponent
},
{
  path: "fornecedores/delete/:forId",
  component:FornecedorUpdateComponent
},
{
  path: "fornecedores/delete/:forId",
  component:FornecedorDeleteComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
