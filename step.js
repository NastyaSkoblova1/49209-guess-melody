(function($){

	$(document).ready(function() {

		$('head').append('<style>.t-form__screen .t-form__screen-wrapper{display:none;}.t-form__screen .t-form__submit{position:relative;}.t-form__screen .t-form__submit::before,.t-form__screen .t-form__submit::after{content:"";display:table;}.t-form__screen .t-form__submit::after{clear: both;}.t-form__screen .t-form__screen-btn-prev td,.t-form__screen .t-form__screen-btn-next td{position:relative;}.t-form__screen .t-form__screen-btn-prev{display:none;float:left;padding-left:45px;}.t-form__screen .t-form__screen-btn-next{float:right;padding-right:45px;}.t-form__screen .t-form__screen-btn-prev td::before{content:"→";position:absolute;left:-23px;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:1.3;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.t-form__screen .t-form__screen-btn-next td::after{content:" →";position:absolute;margin-left:5px;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:1;}.t-form__screen .t-submit{float:right;width:auto;height:45px;font-size:14px;padding-left:30px;padding-right:30px;}.t-form__screen .t-form__screen-number-container{display:inline-block;vertical-align:middle;margin-right:5px;}.t-form__screen .t-form__screen-current-view{position:absolute;top:50%;left:50%;font-size:12px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.t-form__screen .t-form__screen-number-container{color:#000000}.t-form__screen .t-form__screen-number_opacity{opacity:0.3;}.t-form__screen .t-form__screen-progress{display:inline-block;vertical-align:middle;}.t-form__screen .t-form__screen-progress circle{stroke-dashoffset:62.8319;-webkit-transition:stroke-dashoffset 0.5s linear;-o-transition:stroke-dashoffset 0.5s linear;transition:stroke-dashoffset 0.5s linear;stroke-width: 3px;}.t-form__screen .t-form__screen-progress-circle{stroke:#000000;opacity:0.3;}.t-form__screen .t-form__screen-progress-bar{stroke:#003cff;stroke-width:4px;}@media screen and (max-width: 480px){.t-form__screen .t-form__submit{text-align:center;}.t-form__screen .t-form__screen-btn-prev,.t-form__screen .t-form__screen-btn-next,.t-form__screen .t-submit{float:none;vertical-align:middle;}.t-form__screen .t-form__screen-btn-prev{margin-right:10px;padding-left:20px;}.t-form__screen .t-form__screen-btn-next{padding-right:20px;}.t-form__screen .t-form__screen-btn-prev td::before,.t-form__screen .t-form__screen-btn-next td::after{display:none;}.t-form__screen .t-form__screen-current-view{position:relative;top:0;-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);margin-top:15px;}.t-form__screen .t-form__screen-number-container{margin-left:15px;}}</style>');

		t_form_splittingOnStep = function () {

			$('form').each(function() {
				var $this = $(this);
				var splitField = $this.find('.t-input-group_st');
				console.log('Split: ' + splitField);

				if (splitField.length !== 0) {
					$this.addClass('t-form__screen');
					$this.removeClass('js-form-proccess');
					t_form_addBtns($this);

					console.log('Hello!');
					console.log(splitField);
					console.log($this);

					var submitBtn = $this.find('.t-submit');
					var prevBtn = $this.find('.t-form__screen-btn-prev');
					var nextBtn = $this.find('.t-form__screen-btn-next');
					var inputGroup = $this.find('.t-input-group');
					var inputTitle = $this.find('.t-input-title');
					var lastSplitField = splitField.last();
					var lastInputsBeforeSplitField = lastSplitField.nextAll('.t-input-group');
					var numberContainer = $this.find('.t-form__screen-current-view');
					var currentScreen = 0;
					var coverHeight = $this.parents('.t-rec').find('.t-cover').height();

					if (submitBtn.length !== 0) {
						submitBtn.hide();
					}

					t_form_breakOnStep(splitField, lastInputsBeforeSplitField);

					var formScreen = $this.find('.t-form__screen-wrapper');
					$(formScreen[currentScreen]).show();

					t_form_addAllNumberAndProgress(numberContainer, formScreen);
					t_form_setCurrentNumber($this, currentScreen);

					nextBtn.on('click', function(e) {
						var $this = $(this);
						var $activeForm = $this.parents('.t-form');
						var errorOnScreen = t_form_checkOnError($activeForm, formScreen, currentScreen);
						t_form_calculateCoverHeight($this.parents('.t-rec'), coverHeight);
						if (!errorOnScreen) {
							currentScreen++;
							t_form_transitionToNextStep($activeForm, formScreen, currentScreen, numberContainer, submitBtn, prevBtn, nextBtn);
						}
						t_form_lazyLoad();
						e.preventDefault();
					});

					prevBtn.on('click', function(e) {
						var $this = $(this);
						var $activeForm = $this.parents('.t-form');
						if (currentScreen > 0) {
							currentScreen--;
						}
						t_form_transitionToPrevStep($activeForm, formScreen, currentScreen, numberContainer, submitBtn, prevBtn, nextBtn);
						t_form_calculateCoverHeight($(this).parents('.t-rec'), coverHeight);
						e.preventDefault();
					});

					formScreen.keypress(function(e) {
						var $this = $(this);
						var $activeForm = $this.parents('.t-form');
						if (e.keyCode === 13 && !$activeForm.hasClass('js-form-proccess')) {
							var errorOnScreen = t_form_checkOnError($activeForm, formScreen, currentScreen);
							t_form_calculateCoverHeight($this.parents('.t-rec'), coverHeight);
							if (!errorOnScreen) {
								currentScreen++;
								t_form_transitionToNextStep($activeForm, formScreen, currentScreen, numberContainer, submitBtn, prevBtn, nextBtn);
							}
							t_form_lazyLoad();
							e.preventDefault();
						}
					});

					$(window).on('resize', function() {
						t_form_calculateCoverHeight(splitField.parents('.t-rec'), coverHeight);
					});

					$this.on('submit', function() {
				    prevBtn.hide();

				    if ($(this).hasClass('js-send-form-success')) {
				      prevBtn.hide();
				    }
				  });

				}
			});
		}


		function t_form_lazyLoad() {
			if (typeof $(".t-records").attr("data-tilda-mode")=="undefined") {
					if(window.lazy=='y'){t_lazyload_update();}
			}
		}


		function t_form_addBtns($this) {
			var submitWrapper = $this.find('.t-form__submit');
			var buttonsHTML = window.tildaBrowserLang == 'RU' ?
			'<button class="t-btn t-btn_sm t-form__screen-btn-prev" type="button"><table style="width:100%; height:100%;"><tbody><tr><td>Назад</td></tr></tbody></table></button><button class="t-btn t-btn_sm t-form__screen-btn-next" type="button"><table style="width:100%; height:100%;"><tbody><tr><td>Далее</td></tr></tbody></table></button>' :
			'<button class="t-btn t-btn_sm t-form__screen-btn-prev" type="button"><table style="width:100%; height:100%;"><tbody><tr><td>Back</td></tr></tbody></table></button><button class="t-btn t-btn_sm t-form__screen-btn-next" type="button"><table style="width:100%; height:100%;"><tbody><tr><td>Next</td></tr></tbody></table></button>';
			var progressHTML = '<div class="t-form__screen-current-view t-name"></div>';
			submitWrapper.prepend(buttonsHTML);
			submitWrapper.append(progressHTML);
		}


		function t_form_addAllNumberAndProgress(numberContainer, formScreen) {
			numberContainer.html('<div class="t-form__screen-number-container"><span class="t-form__screen-number_opacity"></span><span>/' + (formScreen.length) + '</span></div><svg class="t-form__screen-progress" style="-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);" width="30" height="30" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="t-form__screen-progress-circle" r="10" cx="15" cy="15" fill="transparent" stroke-dasharray="0" stroke-dashoffset="0"></circle><circle class="t-form__screen-progress-bar" r="10" cx="15" cy="15" fill="transparent" stroke-dasharray="62.8319" stroke-dashoffset="62.8319"></circle></svg>');
		}


		function t_form_setCurrentNumber($this, currentScreen) {
			var numberCurrentContainer = $this.find('.t-form__screen-number_opacity');
			numberCurrentContainer.html(currentScreen + 1);
		}


		function t_form_setProgressbar($activeForm, formScreen, direction) {
			var progressBar = $activeForm.find('.t-form__screen-progress-bar');
			var progressCircleLength = +progressBar.attr('stroke-dasharray');
			// var progressBarLength = +(progressBar.attr('stroke-dashoffset')).toFixed(6);
			// var progressStep = progressCircleLength / (formScreen.length - 1);
			// var newProgressLength = +(progressBarLength - direction * progressStep).toFixed(6);

			console.log('Circle: ' + progressCircleLength);
			// console.log('Progressbar: ' + progressBarLength);
			// console.log('Step: ' + progressStep);
			// console.log('Progress length: ' + newProgressLength);

			// progressBar.css('stroke-dashoffset', newProgressLength);
			// progressBar.attr('stroke-dashoffset', newProgressLength);
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


		function t_form_transitionToPrevStep($activeForm, formScreen, currentScreen, numberContainer, submitBtn, prevBtn, nextBtn) {
			window.tildaForm.hideErrors($activeForm);
			nextBtn.show();
			submitBtn.hide();
			t_form_setProgressbar($activeForm, formScreen, -1);
			if (currentScreen == 0) {prevBtn.hide()};
			$(formScreen).hide();
			$(formScreen[currentScreen]).show();
			$activeForm.removeClass('js-form-proccess');
			t_form_setCurrentNumber($activeForm, currentScreen);
		}


		function t_form_transitionToNextStep($activeForm, formScreen, currentScreen, numberContainer, submitBtn, prevBtn, nextBtn) {
			formScreen.hide();
			$(formScreen[currentScreen]).show();
			prevBtn.show();
			t_form_setProgressbar($activeForm, formScreen, 1);
			if (currentScreen == formScreen.length - 1) {
				nextBtn.hide();
				submitBtn.show();
				$activeForm.addClass('js-form-proccess');
			}
			t_form_setCurrentNumber($activeForm, currentScreen);
		}


		function t_form_calculateCoverHeight(el, coverHeight) {
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

			if (hcontent < hcover) {
				el.find('.t-cover').height(coverHeight);
				el.find('.t-cover__filter').height(coverHeight);
				el.find('.t-cover__carrier').height(coverHeight);
				el.find('.t-cover__wrapper').height(coverHeight);
			}
		}

		t_form_splittingOnStep();

	});

})(jQuery);
