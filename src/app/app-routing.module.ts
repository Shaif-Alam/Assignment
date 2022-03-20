import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "employee-list",
    component: EmployeeListComponent
  },
  {
    path: "viewDetails",
    component: ItemComponent
  },
  {
    path: "login",
    component: LoginpageComponent
  },
  {
    path: "signup",
    component: TemplateFormComponent

  },
  {
    path: "register",
    component: ReactiveFormComponent
  },
  {
    path: "**",
    component: PagenotfoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
