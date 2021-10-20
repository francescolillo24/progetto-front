import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DidactisService } from 'src/app/courses/didactis.service';
import { Student } from 'src/app/DTOs/student';

@Component({
    selector: 'app-student-details-list',
    templateUrl: './student-details-list.component.html',
    styleUrls: ['./student-details-list.component.css']
  })

  export class StudentDetailsListComponent implements OnInit{

    //public studentsDetails: Student[] = [];
    public singleStudentsDetails: Student = new Student();

    constructor(private studentsDetailsService:DidactisService, private router:Router, private route:ActivatedRoute) { console.log('StudentsDetailsListConstructor'); }

    ngOnInit(): void{
      console.log('ngOnInit StudentsDetailsComponent');
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(id);
      let obsStudentsDetails = this.studentsDetailsService.getStudentsDetails(id);
      obsStudentsDetails.subscribe({
        next: sd => {this.singleStudentsDetails = sd},
        error: err => console.log(err)
      });
    }
  }