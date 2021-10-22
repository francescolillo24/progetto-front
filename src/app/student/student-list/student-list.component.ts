import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DidactisService } from 'src/app/courses/didactis.service';
import { Student } from 'src/app/DTOs/student';
import { StudentSearchComponent } from '../student-search/student-search.component';


@Component({
  selector: 'app-root',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})


export class StudentListComponent implements OnInit {

  public firstname: string = "";
  public lastname: string = "";
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

  search(): void{
    let fullname: string = "";
    if(this.firstname == "") {
      fullname = this.lastname;
      console.log(`${this.firstname}\t${fullname}`);
    }
    if(this.lastname == "") {
      fullname = this.firstname;
      console.log(`${this.firstname}\t${fullname}`);
    }
    else if (this.firstname != "" && this.lastname != "") {
      fullname = this.firstname + "%20" + this.lastname;
      console.log(`${this.firstname}\t${this.lastname}\t${fullname}`);
    }
    this.router.navigate(['/searchstudent/', fullname]);
  }
}

