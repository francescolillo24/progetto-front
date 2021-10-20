import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DidactisService } from 'src/app/courses/didactis.service';
import { Student } from 'src/app/DTOs/student';


@Component({
  selector: 'app-root',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})



export class StudentListComponent implements OnInit {

  public students: Student[] = [];
  // public student: Student = new Student();

  constructor(private service:DidactisService, private router:Router, private route:ActivatedRoute) { console.log('StudentListConstructor'); }

  ngOnInit(): void {
    console.log('ngOnInit StudentListComponent');
    let obsStudents: Observable<Student[]> = this.service.getStudents();
    obsStudents.subscribe({
      next: sts => {
        this.students = sts;
      },
      error: err => console.log(err)
    });
  }
/*   students = [
    {
      id: 1,
      firstname: 'Franco',
      lastname:'Bellavilla',
      email:'francobellavilla@gmail.com'
    },
    {
      id: 2,
      firstname: 'Carla',
      lastname:'Verdi',
      email:'carlaverdi@gmail.com'
    },
    {
      id: 3,
      firstname: 'Gianfrancioschio',
      lastname:'bello',
      email:'Gianfrancioschiobello@gmail.com'
    },
    {
      id: 4,
      firstname: 'Mario',
      lastname:'Rossi',
      email:'mariorossi@gmail.com'
    }
  ]; */
}

