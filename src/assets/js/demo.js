

$(function(){



	$('.roulette').find('img').hover(function(){
		console.log($(this).height());
	});
	var appendLogMsg = function(msg) {
		$('#msg')
	.append('<p class="muted">' + msg + '</p>')
	.scrollTop(100000000);

	}

  //Etat de la roulette start ou slow ou stop
	var p = {
		startCallback : function() {
			appendLogMsg('start');
      $('.numero').text('');
      $('.winner').text('');
			$('#speed, #duration, #maxPlay, #nbreImage').slider('disable');
			$('#stopImageNumber').spinner('disable');
			$('.start').attr('disabled', 'true');
			$('.stop').removeAttr('disabled');
		},
		slowDownCallback : function() {
			appendLogMsg('slowdown');
			$('.stop').attr('disabled', 'true');
		},
		stopCallback : function($stopElm) {
			appendLogMsg('stop');

      //$('.numero').text(this.stopImageNumber)
      $('.numero').append(this.stopImageNumber + ' | ')
      var resultat = $('.numero').text().replace(/\s/g,'')
       resultat = resultat.split('|');


      if (resultat[0] === resultat[1] && resultat[1] === resultat[2] ){

        $('.winner').append('Vous avez gagné !');
        return;
      }
			if (p['maxPlayCount'] == this.playCount){
			  $('.restant').append('Plus de partie disponible')
			  return;
			}

			$('#speed, #duration').slider('enable');
			$('#stopImageNumber').spinner('enable');
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');

		}

	}




	var rouletter = $('div.roulette');
	rouletter.roulette(p);
	$('.stop').click(function(){
		var stopImageNumber = $('.stopImageNumber').val();
		if(stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');
	});
	$('.stop').attr('disabled', 'true');
	$('.start').click(function(){
		rouletter.roulette('start');
	});


  $('#updateParam').click(function () {

    rouletter = $('div.roulette');
    rouletter.roulette(p);
  });


	//Update les parametre
	var updateParamater = function(){
		p['speed'] = Number($('.speed_param').eq(0).text());
		p['duration'] = Number($('.duration_param').eq(0).text());
		p['stopImageNumber'] = Number($('.stop_image_number_param').eq(0).text());
		p['maxPlayCount'] = Number($('.max_param').eq(0).text());
    p['nbreImage'] = Number($('.nbreImage_param').eq(0).text());

		rouletter.roulette('option', p);
	}


  //Update Nombre d'image
  var updateNbreImage = function (nbreImage){
    $('.nbreImage_param').text(nbreImage);

  }
  $('#nbreImage').slider({
    min: 1,
    max: 10,
    value : 3,
    slide: function( event, ui ) {
      updateNbreImage(ui.value);
      updateParamater();
    }
  });
  updateNbreImage($('#nbreImage').slider('value'));

	//Update Max Play
  var updateMaxPlay = function (maxPlay){
    $('.max_param').text(maxPlay);

  }
  $('#maxPlay').slider({
    min: 1,
    max: 10,
    value : 2,
    slide: function( event, ui ) {
      updateMaxPlay(ui.value);
      updateParamater();
    }
  });
  updateMaxPlay($('#maxPlay').slider('value'));



  //Update speed
	var updateSpeed = function(speed){
		$('.speed_param').text(speed);
	}
	$('#speed').slider({
		min: 1,
		max: 30,
		value : 10,
		slide: function( event, ui ) {
			updateSpeed(ui.value);
			updateParamater();
		}
	});
	updateSpeed($('#speed').slider('value'));


	//Update Duration
	var updateDuration = function(duration){
		$('.duration_param').text(duration);
	}
	$('#duration').slider({
		min: 2,
		max: 10,
		value : 3,
		slide: function( event, ui ) {
			updateDuration(ui.value);
			updateParamater();
		}
	});
	updateDuration($('#duration').slider('value'));


	//Update Stop Image Number
	var updateStopImageNumber = function(stopImageNumber) {
		$('.image_sample').children().css('opacity' , 0.2);
		$('.image_sample').children().filter('[data-value="' + stopImageNumber + '"]').css('opacity' , 1);
		$('.stop_image_number_param').text(stopImageNumber)
    console.log($('#stopImageNumber').val());
		updateParamater();
	}

	$('#stopImageNumber').spinner({
		spin: function( event, ui ) {

			var imageNumber = ui.value;
			if ( ui.value > 4 ) {

				$( this ).spinner( "value", -1 );
				imageNumber = 0;
				updateStopImageNumber(-1);
				return false;
			} else if ( ui.value < -1 ) {
				$( this ).spinner( "value", 4 );
				imageNumber = 4;
				updateStopImageNumber(4);
				return false;
			}
			updateStopImageNumber(imageNumber);
		}
	});

	//Id stop image sans changement
	$('#stopImageNumber').spinner('value', -1);
	updateStopImageNumber($('#stopImageNumber').spinner('value'));

	$('.image_sample').children().click(function(){
		var stopImageNumber = $(this).attr('data-value');
		$('#stopImageNumber').spinner('value', stopImageNumber);
		updateStopImageNumber(stopImageNumber);
	});

});

