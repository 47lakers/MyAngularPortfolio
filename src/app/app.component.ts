import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IrasWebPortfolio';
  isMenuCollapsed = true;
  public isCollapsed = false;
  faGithub = faGithub
  faLinkedin = faLinkedin;

  navBarLink = 'Welcome'

  changeNavBarText (value: string) {
    this.navBarLink = value;
  }

}
