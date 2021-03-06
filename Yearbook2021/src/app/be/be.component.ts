import { Component, OnInit } from '@angular/core';
import { DataService } from '../GoogleSheetsData/data.service';
import { CoreResponse, StudentResponse } from '../interfaces';

@Component({
  selector: 'app-be',
  templateUrl: './be.component.html',
  styleUrls: ['./be.component.scss']
})
export class BEComponent implements OnInit {

  tempStudents: StudentResponse[] = []
  BE_students: StudentResponse[] = []
  tempCore: CoreResponse[] = []
  core: CoreResponse[] = []

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getSheetData('students').subscribe((res: StudentResponse[]) => {
      this.tempStudents = res
      this.tempStudents.forEach((student, index) => {
        if (!student.tf && student['yearfortheacademicyear2020-21'] === 'BE') {
          const ConstUrl = 'https://drive.google.com/thumbnail?id='
          const id = student.uploadyourphotograph.split('=')[1]

          student.uploadyourphotograph = ConstUrl + id

          this.BE_students.push(student)
        }
      });
      // console.log(this.BE_students)
    })

    this.dataService.getSheetData('core').subscribe((res: CoreResponse[]) => {
      this.tempCore = res
      this.tempCore.forEach((student, index) => {
          const ConstUrl = 'https://drive.google.com/thumbnail?id='
          const id = student.uploadyourphotograph.split('=')[1]

          student.uploadyourphotograph = ConstUrl + id

          this.core.push(student)
      });
      console.log(this.core)
    })
  }
}
