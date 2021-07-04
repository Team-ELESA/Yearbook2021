import { Component, OnInit } from '@angular/core';
import { DataService } from '../GoogleSheetsData/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TeacherResponse } from '../interfaces';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  tempTeachers: TeacherResponse[];
  teachers: Array<TeacherResponse> = [];
  image_url: string;
  receivedUrl: string;

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.dataService.getSheetData('teachers').subscribe((res: TeacherResponse[]) => {
      this.tempTeachers = res
      this.tempTeachers.forEach((teacher, index)=> {
        if (!teacher.tf) {
          const ConstUrl = 'https://drive.google.com/thumbnail?id='
          const id = teacher.uploadyourphotograph.split('=')[1]
  
          teacher.uploadyourphotograph = ConstUrl + id

          this.teachers.push(teacher)
        }
      });
      // console.log(this.teachers)
    })
  }
}
