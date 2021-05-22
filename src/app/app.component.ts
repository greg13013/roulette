import { Component } from '@angular/core';
declare var roulette: any;
declare var demo: any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roulette';
  nbreFoisImage = Array;
  nbreImage = 3;
  image = [
    "../assets/img/star.png",
    "../assets/img/flower.png",
    "../assets/img/coin.png",
    "../assets/img/mshroom.png",
    "../assets/img/chomp.png",
    "../assets/img/random.png",
    "../assets/img/baseline_business.png",
    "../assets/img/baseline_school.png"
  ];

constructor(
) {
    //this.nbreImage = document.getElementById('nbreImage_param');

}

updateNbre(){
  console.log(document.getElementById('nbreImage_param').innerHTML);
  this.nbreImage = Number(document.getElementById('nbreImage_param').innerHTML);
  console.log('nbreImage: ', this.nbreImage);
}


}
