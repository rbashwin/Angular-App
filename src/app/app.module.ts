import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FormComponentComponent,
    ButtonComponentComponent,
    ProductComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
