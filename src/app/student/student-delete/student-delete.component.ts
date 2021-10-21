import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DidactisService } from 'src/app/courses/didactis.service';
import { Student } from 'src/app/DTOs/student';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  public student: Student = new Student();

  constructor(private service:DidactisService, private router:Router, private route:ActivatedRoute) { console.log('StudentDeleteConstructor'); }

  ngOnInit(): void {
    console.log('ngOnInit StudentDeleteComponent');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(confirm("Cancellare lo studente selezionato?")){
      let obsStudent = this.service.deleteStudent(id);
      obsStudent.subscribe({
        next: s => this.student = s,
        error: err => console.log(err)
      });
    }
    this.router.navigate(['/students']);
    setTimeout(() => window.location.reload(), 100);
  }
}
