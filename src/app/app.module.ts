import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChangeTextDirective } from "./change-text.directive";
import { ToastModule } from "@syncfusion/ej2-angular-notifications";
import { UserFormComponent } from "./user-form/user-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { DemoMaterialModule } from "./user-form/material-module";
import { ReversePipe } from "./reverse.pipe";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    UserFormComponent,
    ReversePipe
  ],
  imports: [
    DemoMaterialModule,
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
