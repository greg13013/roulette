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
constructor() {

}
  demo(){
    var option = {
      speed : '<span class="speed_param"></span>',
      duration : '<span class="duration_param"></span>',
      stopImageNumber : '<span class="stop_image_number_param"></span>',
      startCallback : function() {
        console.log('start');
      },
      slowDownCallback : function() {
        console.log('slowDown');
      },
      stopCallback : function($stopElm) {
        console.log('stop');
      }
    }
    $('div.roulette').roulette(option);
  }
}
