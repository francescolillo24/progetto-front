import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DidactisService } from 'src/app/courses/didactis.service';
import { Student } from 'src/app/DTOs/student';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  public filteredStudents: Student[] = [];
  public ricerca = this.route.snapshot.paramMap.get('lastname');

  constructor(private service:DidactisService, private router:Router, private route:ActivatedRoute) { console.log('StudentSearchConstructor'); }

  ngOnInit(): void{
      console.log('StudentSearchComponent ngOnInit')
      let obsStudents: Observable<Student[]> = this.service.getStudentsByLastname(this.ricerca);
      obsStudents.subscribe({
        next: s => this.filteredStudents = s,
        error: err => console.log(err)
      });
  }

}
