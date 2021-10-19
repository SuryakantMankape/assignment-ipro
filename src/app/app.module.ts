import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './app.service';
import { TableComponent } from './table/table.component';
import { PhotoCompareComponent } from './photo-compare/photo-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PhotoCompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
