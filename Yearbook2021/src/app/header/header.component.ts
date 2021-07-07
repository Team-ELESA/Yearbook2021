import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url: string = environment.baseDomain

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    $('.navTrigger').click(function () {
      $(this).toggleClass('active');
      console.log("Clicked menu");
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });
  }

}
