import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidnavliste',
  templateUrl: './sidnavliste.component.html',
  styleUrls: ['./sidnavliste.component.scss']
})
export class SidnavlisteComponent implements OnInit {
  panelOpenState = false;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
