import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CoursesDialogComponent } from './courses-dialog/courses-dialog.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { ModelComponent } from './model/model.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [AppComponent, HomeComponent, CoursesCardListComponent, CoursesDialogComponent, AboutComponent, CourseComponent, ModelComponent, CreateCourseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,MatMenuModule,MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
