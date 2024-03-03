import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidenavComponent} from './sidenav/sidenav.component'
import {BodyComponent} from './body/body.component'
import { AppRoutingModule } from './app-routing.module';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidenavComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChienseMinistry';
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
