(function($){

	$(document).ready(function() {

    $('head').append('<style>.t-form__screen .t-form__screen-wrapper{display:none;}.t-form__screen .t-form__submit{position:relative;}.t-form__screen .t-form__submit::before,.t-form__screen .t-form__submit::after{content:"";display:table;}.t-form__screen .t-form__submit::after{clear: both;}.t-form__screen .t-form__screen-btn-prev td,.t-form__screen .t-form__screen-btn-next td{position:relative;}.t-form__screen .t-form__screen-btn-prev{display:none;float:left;padding-left:45px;}.t-form__screen .t-form__screen-btn-next{float:right;padding-right:45px;}.t-form__screen .t-form__screen-btn-prev td::before{content:"→";position:absolute;left:-23px;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;transform:rotate(180deg);}.t-form__screen .t-form__screen-btn-next td::after{content:" →";position:absolute;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:1;}.t-form__screen .t-submit{float:right;width:auto;height:45px;font-size:14px;padding-left:30px;padding-right:30px;}.t-form__screen .t-form__screen-number{position:absolute;top:50%;left:50%;font-size:12px;color:#333333;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.t-form__screen .t-form__screen-number_opacity{opacity:0.6;}@media screen and (max-width: 480px){.t-form__screen .t-form__screen-btn-prev{padding-left:20px;}.t-form__screen .t-form__screen-btn-next{padding-right:20px;}.t-form__screen .t-form__screen-btn-prev td::before,.t-form__screen .t-form__screen-btn-next td::after{display:none;}}#svg circle{stroke-dashoffset: 0;transition: stroke-dashoffset 1s linear;stroke: #666666;stroke-width: 3px;}#svg #bar{stroke: #FF9F1E;}</style>');

		/* Разбиение формы на экраны через поле */
    t_form_splittingOnStep = function () {

			$('form').each(function() {
				var $this = $(this);
				var splitField = $this.find('.t-input-group_st');
				$this.addClass('t-form__screen');
				$this.removeClass('js-form-proccess');

				if (splitField.length !== 0) {
					var submitWrapper = $this.find('.t-form__submit');
					var buttonsHTML = window.tildaBrowserLang == 'RU' ?
						'<div class="t-form__screen-number t-name"></div><button class="t-btn t-btn_sm t-form__screen-btn-prev" type="button"><table style="width:100%; height:100%;"><tbody><tr><td>Назад</td></tr></tbody></table></button><button class="t-btn t-btn_sm t-form__screen-btn-next" type="button"><table style="width:100%; height:100%;"><tbody><tr><td>Далее</td></tr></tbody></table></button>' :
						'<div class="t-form__screen-number t-name"></div><button class="t-btn t-btn_sm t-form__screen-btn-prev" type="button"><table style="width:100%; height:100%;"><tbody><tr><td>Back</td></tr></tbody></table></button><button class="t-btn t-btn_sm t-form__screen-btn-next" type="button"><table style="width:100%; height:100%;"><tbody><tr><td>Next</td></tr></tbody></table></button>';
					submitWrapper.append(buttonsHTML);

					var submitBtn = $this.find('.t-submit');
					var prevBtn = $this.find('.t-form__screen-btn-prev');
					var nextBtn = $this.find('.t-form__screen-btn-next');
					var btnStyles = submitBtn.attr('style');
					var inputGroup = $this.find('.t-input-group');
					var inputTitle = $this.find('.t-input-title');
					var lastSplitField = splitField.last();
					var lastInputsBeforeSplitField = lastSplitField.nextAll('.t-input-group');
          var numberOfScreen = $this.find('.t-form__screen-number');
					var currentScreen = 0;

					submitBtn.hide();

					if (btnStyles.length != 0) {
						prevBtn.attr('style', btnStyles);
						nextBtn.attr('style', btnStyles);
					}

					t_form_breakOnStep(splitField, lastInputsBeforeSplitField);

					var formScreen = $this.find('.t-form__screen-wrapper');
					$(formScreen[currentScreen]).show();

					t_form_addNumberOfScreen(numberOfScreen, currentScreen, formScreen);

					nextBtn.on('click', function() {
            var $this = $(this);
            var $activeForm = $this.parents('.t-form');
						var errorOnScreen = t_form_checkOnError($activeForm, formScreen, currentScreen);
						t_form_calculateCoverHeight($this.parents('.t-rec'));

						if (!errorOnScreen) {
							currentScreen++;
              t_form_transitionToNextStep($activeForm, formScreen, currentScreen, numberOfScreen, submitBtn, prevBtn, nextBtn);
						}
					});

					prevBtn.on('click', function() {
						if (currentScreen > 0) {
							currentScreen--;
						}
						t_form_transitionToPrevStep(formScreen, currentScreen, numberOfScreen, submitBtn, prevBtn, nextBtn);
            t_form_calculateCoverHeight($(this).parents('.t-rec'));
					});

					formScreen.keypress(function(e) {
            var $this = $(this);
            var $activeForm = $this.parents('.t-form');

				    if (e.keyCode === 13 && !$activeForm.hasClass('js-form-proccess')) {
							var errorOnScreen = t_form_checkOnError($activeForm, formScreen, currentScreen);
							t_form_calculateCoverHeight($this.parents('.t-rec'));

							if (!errorOnScreen) {
								currentScreen++;
                t_form_transitionToNextStep($activeForm, formScreen, currentScreen, numberOfScreen, submitBtn, prevBtn, nextBtn);
							}

							e.preventDefault();
				    }
				  });

				}
			});
    }


    function t_form_breakOnStep(splitField, lastInputsBeforeSplitField) {
      splitField.each(function(i) {
        $(splitField[i]).prevUntil(splitField[i-1]).wrapAll('<div class="t-form__screen-wrapper"></div>');
      });

      if (lastInputsBeforeSplitField.length !== 0) {
        lastInputsBeforeSplitField.wrapAll('<div class="t-form__screen-wrapper"></div>');
      }
    }


    function t_form_checkOnError($activeForm, formScreen, currentScreen) {
      var $activeScreen = $(formScreen[currentScreen]);
      var arErrors = window.tildaForm.validate($activeScreen);
      window.tildaForm.hideErrors($activeForm);
      var errorOnScreen;
      var errorsTypeObj = arErrors[0];

      if (errorsTypeObj != undefined) {
        var errorType = errorsTypeObj.type[0];
        errorOnScreen = errorType == 'emptyfill' ? false : window.tildaForm.showErrors($activeForm, arErrors);
      }

      return errorOnScreen;
    }


    function t_form_transitionToPrevStep(formScreen, currentScreen, numberOfScreen, submitBtn, prevBtn, nextBtn) {
      var $activeForm = $(this).parents('.t-form');
      window.tildaForm.hideErrors($activeForm);
      nextBtn.show();
      submitBtn.hide();
      if (currentScreen == 0) {prevBtn.hide()};
      $(formScreen).hide();
      $(formScreen[currentScreen]).show();
      $activeForm.removeClass('js-form-proccess');
      t_form_addNumberOfScreen(numberOfScreen, currentScreen, formScreen);
    }


    function t_form_transitionToNextStep($activeForm, formScreen, currentScreen, numberOfScreen, submitBtn, prevBtn, nextBtn) {
      formScreen.hide();
      $(formScreen[currentScreen]).show();
      t_form_addNumberOfScreen(numberOfScreen, currentScreen, formScreen);
      prevBtn.show();

      if (currentScreen == formScreen.length - 1) {
        nextBtn.hide();
        submitBtn.show();
        $activeForm.addClass('js-form-proccess');
      }
    }

    function t_form_addNumberOfScreen(numberOfScreen, currentScreen, formScreen) {
      numberOfScreen.html('<span class="t-form__screen-number_opacity">' + (currentScreen + 1) + '</span>' + '<span>/' + (formScreen.length) + '</span><svg id="svg" width="30" height="30" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle r="10" cx="15" cy="15" fill="transparent" stroke-dasharray="62.8319" stroke-dashoffset="0"></circle><circle id="bar" r="10" cx="15" cy="15" fill="transparent" stroke-dasharray="62.8319" stroke-dashoffset="0"></circle></svg>');
    }


		function t_form_calculateCoverHeight(el) {
			/* correct cover height if content more when cover height */
			var hcover = el.find('.t-cover').height();
			var hcontent = el.find('div[data-hook-content]').outerHeight();
			if (hcontent > 300 && hcover < hcontent) {
				var hcontent = hcontent + 120;
				if (hcontent > 1000) {hcontent += 100;}
				console.log('auto correct cover height: ' + hcontent);
				el.find('.t-cover').height(hcontent);
				el.find('.t-cover__filter').height(hcontent);
				el.find('.t-cover__carrier').height(hcontent);
				el.find('.t-cover__wrapper').height(hcontent);
				if ($isMobile == false) {
					setTimeout(function() {
						var divvideo = el.find('.t-cover__carrier');
						if (divvideo.find('iframe').length > 0) {
							console.log('correct video from cover_fixcontentheight');
							setWidthHeightYoutubeVideo(divvideo, hcontent + 'px');
						}
					}, 2000);
				}
			}
		}

		t_form_splittingOnStep();

    /* window.tildaForm.setScreenProgress = function(formScreen, currentScreen) {
			var val = parseInt($(this).val());
			var $circle = $('#svg #bar');

			if (isNaN(val)) {
				val = 100;
			} else {
				var circleRadius = $circle.attr('r');
				var circleLength = Math.PI * (circleRadius * 2);

				if (val < 0) {val = 0;}
				if (val > 100) {val = 100;}

				var pct = ((100 - val) / 100) * circleLength;

				$circle.css({strokeDashoffset: pct});

				$('#cont').attr('data-pct', val);
			}
		} */

	});

})(jQuery);
