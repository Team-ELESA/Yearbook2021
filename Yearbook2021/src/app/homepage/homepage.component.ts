import { Component, OnInit } from '@angular/core';
import { DataService } from '../GoogleSheetsData/data.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  teachers: any[];

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.dataService.getSheetData('teachers').subscribe(res => {
       this.teachers = res
      console.log(this.teachers);
    })
  }

  getSanitized(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
