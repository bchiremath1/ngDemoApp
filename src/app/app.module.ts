import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxEchartsModule } from "ngx-echarts";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts")
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
