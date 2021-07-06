import { Component, OnInit } from '@angular/core';
import { DataService } from '../GoogleSheetsData/data.service';
import { StudentResponse } from '../interfaces';

@Component({
  selector: 'app-te',
  templateUrl: './te.component.html',
  styleUrls: ['./te.component.scss']
})
export class TEComponent implements OnInit {

  tempStudents: StudentResponse[] = []
  TE_students: StudentResponse[] = []

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getSheetData('students').subscribe((res: StudentResponse[]) => {
      this.tempStudents = res
      this.tempStudents.forEach((student, index) => {
        if (!student.tf && student['yearfortheacademicyear2020-21'] === 'TE') {
          const ConstUrl = 'https://drive.google.com/thumbnail?id='
          const id = student.uploadyourphotograph.split('=')[1]

          student.uploadyourphotograph = ConstUrl + id

          this.TE_students.push(student)
        }
      });
      // console.log(this.TE_students)
    })
  }
}
