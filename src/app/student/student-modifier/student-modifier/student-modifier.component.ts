import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DidactisService } from 'src/app/courses/didactis.service';
import { Student } from 'src/app/DTOs/student';

@Component({
  selector: 'app-student-modifier',
  templateUrl: './student-modifier.component.html',
  styleUrls: ['./student-modifier.component.css']
})
export class StudentModifierComponent implements OnInit {

  public student: Student = new Student();

  constructor(private service:DidactisService, private router:Router, private route:ActivatedRoute) { console.log('StudentListConstructor'); }

  ngOnInit(): void {
    console.log('ngOnInit StudentModifierComponent');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    let obsStudentDetails = this.service.getStudentsDetails(id);
    obsStudentDetails.subscribe({
      next: sd => this.student = sd,
      error: err => console.log(err)
    });
  }
  save(form: NgForm){
    console.log("save()");
    let obsStudent: Observable<Student> = this.service.updateStudent(this.student);
    obsStudent.subscribe({
      next: s => this.student = s,
      error: err => console.log(err)
    });
    this.router.navigate(["/students"]);
  }
}
