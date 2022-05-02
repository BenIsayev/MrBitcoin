import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  isSideNavOpen: boolean = false
  @Output() toggleDarkMode = new EventEmitter
  backgroundUrls = ['../../../assets/img/0.png', '../../../assets/img/1.jpeg']
  currImgIdx = 0



  ngOnInit(): void {
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen
  }

  switchBg() {
    this.currImgIdx === (this.backgroundUrls.length - 1) ? this.currImgIdx = 0 : this.currImgIdx++
    document.body.style.backgroundImage = 'url(' + this.backgroundUrls[this.currImgIdx] + ')'
  }

}
