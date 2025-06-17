import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {NavComponent} from './component/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import {FooterComponent } from './component/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductReadComponent } from './component/product/product-read/product-read.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FornecedorReadComponent } from './component/fornecedor/fornecedor-read/fornecedor-read.component';
import { PagamentoReadComponent } from './component/Pagamento/pagamento-read/pagamento-read.component';
import { MatTableModule } from '@angular/material/table';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteReadComponent } from './component/cliente/cliente-read/cliente-read.component';
import { PagamentoCrudComponent } from './views/pagamento-crud/pagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorUpdateComponent } from './component/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './component/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { PagamentoCreateComponent } from './component/Pagamento/pagamento-create/pagamento-create.component';
import { PagamentoUpdateComponent } from './component/Pagamento/pagamento-update/pagamento-update.component';
import { PagamentoDeleteComponent } from './component/Pagamento/pagamento-delete/pagamento-delete.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { MatSelectModule } from '@angular/material/select';
import { AppInicialComponent } from './views/app-inicial/app-inicial.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductReadComponent,
    FornecedorReadComponent,
    PagamentoReadComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ClienteCrudComponent,
    ClienteReadComponent,
    PagamentoCrudComponent,
    FornecedorCrudComponent,
    FornecedorCreateComponent,
    FornecedorUpdateComponent,
    FornecedorDeleteComponent,
    PagamentoCreateComponent,
    PagamentoUpdateComponent,
    PagamentoDeleteComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    AppInicialComponent,
  ],
  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
