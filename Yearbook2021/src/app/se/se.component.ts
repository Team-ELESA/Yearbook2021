import { Component, OnInit } from '@angular/core';
import { DataService } from '../GoogleSheetsData/data.service';
import { StudentResponse } from '../interfaces';

@Component({
  selector: 'app-se',
  templateUrl: './se.component.html',
  styleUrls: ['./se.component.scss']
})
export class SEComponent implements OnInit {

  tempStudents: StudentResponse[] = []
  SE_students: StudentResponse[] = []

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getSheetData('students').subscribe((res: StudentResponse[]) => {
      this.tempStudents = res
      this.tempStudents.forEach((student, index) => {
        if (!student.tf && student['yearfortheacademicyear2020-21'] === 'SE') {
          const ConstUrl = 'https://drive.google.com/thumbnail?id='
          const id = student.uploadyourphotograph.split('=')[1]

          student.uploadyourphotograph = ConstUrl + id

          this.SE_students.push(student)
        }
      });
      // console.log(this.TE_students)
    })
  }
}
