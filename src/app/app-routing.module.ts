import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseDetailsListComponent } from './courses/course-deatails-list/course-details-list.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { EditionAddComponent } from './edition/edition-add/edition-add.component';
import { HomeComponent } from './home/home.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsListComponent } from './student/student-deatails-list/student-details-list.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentModifierComponent } from './student/student-modifier/student-modifier/student-modifier.component';
import { StudentSearchComponent } from './student/student-search/student-search.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent , data: { animationState: 'One' }},

  { path: 'courses', component: CourseListComponent, data: { animationState: 'Three' } },

  { path: 'students', component: StudentListComponent, data: { animationState: 'Two' } },

  { path: 'addcourse/:id', component: CourseAddComponent, data: { animationState: 'Add' } },
  
  { path: 'coursedetails/:id', component: CourseDetailsListComponent, data: { animationState: 'ThreeDetails' }},
 
  { path: 'studentdetails/:id', component: StudentDetailsListComponent, data: { animationState: 'TwoDetails' }},
 
  { path: 'modifystudent/:id', component: StudentModifierComponent, data: { animationState: 'TwoDetails' }},
 
  { path: 'deletestudent/:id', component: StudentDeleteComponent, data: { animationState: 'TwoDetails' }},
 
  { path: 'addstudent/:id', component: StudentAddComponent, data: { animationState: 'TwoDetails' }},

  { path: 'searchstudent/:fullname', component: StudentSearchComponent, data: { animationState: 'TwoDetails' }},

  {path: 'addedition/:id', component: EditionAddComponent, data: { animationState: 'ThreeDetailsAddEdition' }},

  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
