import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SemiHeadComponent } from './list-view/semi-head/semi-head.component';
import { TableComponent } from './list-view/table/table.component';
import { NavigationComponent } from './list-view/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormViewComponent } from './form-view/form-view.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    SemiHeadComponent,
    TableComponent,
    NavigationComponent,
    FormViewComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
