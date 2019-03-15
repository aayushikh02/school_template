import { Component, OnInit, APP_BOOTSTRAP_LISTENER } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../bootstrap.css']
})
export class HomeComponent implements OnInit {

  images=["https://www.libertyspeech.com.au/site/wp-content/uploads/starting-school-301x400.jpg",
"https://www.ambitiousaboutautism.org.uk/sites/default/files/styles/width-684/public/1.1_0.jpg?itok=SLzVALO5",
"https://www.techexplorist.com/wp-content/uploads/2018/09/backpack.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
