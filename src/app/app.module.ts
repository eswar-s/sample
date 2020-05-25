import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductFilterPipe } from './product.pipe';
import { CartMetaInfoComponent } from './cart-meta-info/cart-meta-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    CartMetaInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
