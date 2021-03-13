import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  nagivateBack() {
    this.location.back();
  }


}
