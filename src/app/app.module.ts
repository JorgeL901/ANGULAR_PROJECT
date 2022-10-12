import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EgresoIngresoCompComponent } from './components/egreso-ingreso-comp/egreso-ingreso-comp.component';
import { FormsModule } from '@angular/forms';
import { GraficasComponent } from './components/graficas/graficas.component'

@NgModule({
  declarations: [
    AppComponent,
    EgresoIngresoCompComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
