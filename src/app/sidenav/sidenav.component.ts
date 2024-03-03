import { Component,Output,EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
  }
  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
  }
}
