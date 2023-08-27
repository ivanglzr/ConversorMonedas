import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public GithubUrl: string;

  constructor() {
    this.GithubUrl = "https://github.com/ivanglzr/ConversorMonedas"
  }
}
