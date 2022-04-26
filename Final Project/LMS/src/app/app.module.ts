import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LaundaryAdminService } from './admin/admin.service';
import { AppComponent } from './app.component';
import { ServiceComponent} from './service/service.component';
import { LaundaryUserService } from './service/user.services';
import { TrackComponent } from './track/track.component';
import {DetailComponent} from './admin/admin-detail.component'
import { TrackFilterpipe } from './track/track.pipe';
import { AuthgGuard } from './authg.guard';
 
@NgModule({
  declarations: [
    AppComponent,ServiceComponent,AdminComponent,TrackComponent,DetailComponent,TrackFilterpipe
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule.forRoot([
      {path:"service",component:ServiceComponent},
      {path:"admin",component:AdminComponent},
      {path:"track",component:TrackComponent},
      {path:"admin-detail",component:DetailComponent,canActivate:[AuthgGuard]}
    ])
  ],
  providers: [LaundaryUserService,LaundaryAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
