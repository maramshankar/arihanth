import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MyformsComponent } from './myforms/myforms.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReactformComponent } from './reactform/reactform.component';
import { MycalComponent } from './mycal/mycal.component';
import { ModelformsComponent } from './modelforms/modelforms.component';
import { MydirectiveDirective } from './mydirective.directive';
import { ReversePipe } from './reverse.pipe';
import { DellComponent } from './dell/dell.component';
import { MyempComponent } from './myemp/myemp.component';
import { MycolorDirective } from './mycolor.directive';
import { MysortPipe } from './mysort.pipe';
import { SearchPipe } from './search.pipe';
import { MaramComponent } from './maram/maram.component';
import { MaramPipe } from './maram.pipe';
import { MaramsearchPipe } from './maramsearch.pipe';
import { MaramcolorDirective } from './maramcolor.directive';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { One1Component } from './one1/one1.component';
import { Two2Component } from './two2/two2.component';
import { Ricky1Component } from './ricky1/ricky1.component';
import { Ricky2Component } from './ricky2/ricky2.component';
import { TdformComponent } from './tdform/tdform.component';
import { MaramformComponent } from './maramform/maramform.component';
import { ReactiveformsComponent } from './mdforms/reactiveforms.component';
import { CoronaComponent } from './corona/corona.component';
import { LoginformComponent } from './loginform/loginform.component';
import { JsonDataComponent } from './json-data/json-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RestoComponent } from './resto/resto.component';
import { HomeComponent } from './home/home.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp11Component } from './comp11/comp11.component';
import { Comp22Component } from './comp22/comp22.component';
import { Comp33Component } from './comp33/comp33.component';
import { HomeOneComponent } from './home-one/home-one.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResisterComponent } from './components/resister/resister.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FooterOneComponent } from './component-one/shared-one/footer-one/footer-one.component';
import { HeaderOneComponent } from './component-one/shared-one/header-one/header-one.component';
import { NavOneComponent } from './component-one/shared-one/nav-one/nav-one.component';
import { ShappingCart1Component } from './component-one/shapping-cart1/shapping-cart1.component';
import { FilterComponent } from './component-one/shapping-cart1/filter/filter.component';
import { ProductListComponent } from './component-one/shapping-cart1/product-list/product-list.component';
import { CartComponent } from './component-one/shapping-cart1/cart/cart.component';
import { CartItemComponent } from './component-one/shapping-cart1/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './component-one/shapping-cart1/product-list/product-item/product-item.component';
import { LoginComponent } from './component-one/login/login.component';
import { RegisterOneComponent } from './component-one/register-one/register-one.component';
import { PageNotFound1Component } from './component-one/shared-one/page-not-found1/page-not-found1.component';

@NgModule({
  declarations: [
    AppComponent,
    MyformsComponent,
    CalculatorComponent,
    ReactformComponent,
    MycalComponent,
    ModelformsComponent,
    MydirectiveDirective,
    ReversePipe,
    DellComponent,
    MyempComponent,
    MycolorDirective,
    MysortPipe,
    SearchPipe,
    MaramComponent,
    MaramPipe,
    MaramsearchPipe,
    MaramcolorDirective,
    EmployeeComponent,
    ParentComponent,
    ChildComponent,
    One1Component,
    Two2Component,
    Ricky1Component,
    Ricky2Component,
    TdformComponent,
    MaramformComponent,
    ReactiveformsComponent,
    CoronaComponent,
    LoginformComponent,
    JsonDataComponent,
    PostDataComponent,
    PageNotFoundComponent,
    HomepageComponent,
    RestoComponent,
    HomeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp11Component,
    Comp22Component,
    Comp33Component,
    HomeOneComponent,
    SignupComponent,
    ResisterComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FooterOneComponent,
    HeaderOneComponent,
    NavOneComponent,
    ShappingCart1Component,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterOneComponent,
    PageNotFound1Component
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
