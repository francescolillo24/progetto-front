import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DidactisService } from '../courses/didactis.service';
import { Student } from '../DTOs/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  public student: Student;
  public id: Number = 0;

  constructor(private service:DidactisService, private router: Router, private route:ActivatedRoute) { 
    console.log('StudentAdd constructor');
    this.student = new Student();
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id != 0){
      this.service.getStudentById(this.id).subscribe({
        next: s => this.student = s,
        error: err => console.log(err)
      });
    }
  }

  calculateDateDiff(date: any): string | undefined{
    let currentDate = new Date();
    const minDays = 6570; //giorni contenuti in 18 anni
    date = new Date(date);
    let days = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - 
            Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))) / (1000 * 60 * 60 * 24); //returns day between currentDate and date parameter
    if(days < minDays) return "Lo studente deve essere maggiorenne.";
    return;
  }

  save(form: NgForm){
    console.log(this.student);
    if(this.id == 0){
      this.service.createStudent(this.student).subscribe({
        next: s => {
          this.student = s;
          this.router.navigate(["/students"]);
          setTimeout(() => window.location.reload(), 100)
        },
        error: err => console.log(err)
      });
    }
    else alert("URL non valido!");
  }

}
