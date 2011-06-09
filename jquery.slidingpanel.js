/*
 * jQuery Sliding Panel
 * version: 1.3.0 (2010-11-05)
 * @requires jQuery v1.3.2 or later
 * @requires jQueryUI v1.7.2 or later
 *
 * Examples and documentation at: http://blog.pierrejeanparra.com/jquery-plugins/sliding-panel/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {
	
	$.fn.slidingPanel = function(options) {
		var params, bindHover;
		
		if (!this.length) {
			return this;
		}
			
		$.slidingPanel = {
			defaults: {
				position: 'right',
				offset: {},
				speed: 250,
				timeout: 500,
				event: 'hover',
				hideTriggerClass: 'slidingpanel_hide_trigger',
				wrapperClass: 'slidingpanel_wrapper',
				slidingElementClass: 'slidingpanel_element',
				tabClass: 'slidingpanel_tab',
				wrapperTemplate: '<div></div>',
				tabTemplate: '<div></div>',
				tabText: 'E<br/>X<br/>A<br/>M<br/>P<br/>L<br/>E',
				openByDefault: true
			},
			defaultHorizontalTabText: 'E&nbsp;&nbsp;X&nbsp;&nbsp;A&nbsp;&nbsp;M&nbsp;&nbsp;P&nbsp;&nbsp;L&nbsp;&nbsp;E',
			effectDirection: 'right',
			show: function(slidingElement) {
				var eventToBind = (params.event == 'hover')?'mouseleave':'click';
				$.data(slidingElement, 'cancelHide', true);
				$(slidingElement).show('slide', {direction: $.slidingPanel.effectDirection}, params.speed);
				
				$(slidingElement).closest('.' + params.wrapperClass).one(eventToBind, function() {
					$.slidingPanel.hide(slidingElement);
				});
			},
			hide: function(slidingElement) {
				var eventToBind = (params.event == 'hover')?'mouseenter':'click';
				$.data(slidingElement, 'cancelHide', false);
				setTimeout(function() {
					if (!$.data(slidingElement, 'cancelHide')) {
						$(slidingElement).hide('slide', {direction: $.slidingPanel.effectDirection}, params.speed);
					}
				}, params.timeout);
				$(slidingElement).closest('.' + params.wrapperClass).one(eventToBind, function() {
					$.slidingPanel.show(slidingElement);
				});
			}
		};
		
		bindHover = function(slidingElement) {
			var eventToBind = (params.event == 'hover')?'mouseenter':'click';
			$(slidingElement).closest('.' + params.wrapperClass).one(eventToBind, function() {
				$.slidingPanel.show(slidingElement);
			});
		};
		
		params = $.extend($.slidingPanel.defaults, options || {});
		
		return this.each(function() {
			var slidingElement = this,
				slidingElementCSS,
				wrapperCSS,
				tabCSS;
			
			// According to the desired position and offset, apply CSS rules to allow proper positioning and behaviour
			switch (params.position) {
				case 'top':
					slidingElementCSS = {};
					wrapperCSS = $.extend({position: 'absolute'}, {top: '0px'}, params.offset);
					tabCSS = {minWidth: $(slidingElement).outerWidth()};
					$.slidingPanel.effectDirection = 'up';
					if (!options.tabText) {
						params.tabText = $.slidingPanel.defaultHorizontalTabText;
					}
					$(slidingElement).addClass(params.slidingElementClass).css(slidingElementCSS).wrap($(params.wrapperTemplate).clone().addClass(params.wrapperClass))
						.closest('.slidingpanel_wrapper').css(wrapperCSS)
						.prepend($(params.tabTemplate).clone().addClass(params.tabClass).css(tabCSS).append(params.tabText));
					break;
				case 'right':
					slidingElementCSS = {'float': 'right'};
					wrapperCSS = $.extend({position: 'absolute'}, {right: '0px'}, params.offset);
					tabCSS = {'float': 'right'};
					$.slidingPanel.effectDirection = 'right';
					$(slidingElement).addClass(params.slidingElementClass).css(slidingElementCSS).wrap($(params.wrapperTemplate).clone().addClass(params.wrapperClass))
						.closest('.slidingpanel_wrapper').css(wrapperCSS)
						.prepend($(params.tabTemplate).clone().addClass(params.tabClass).css(tabCSS).append(params.tabText));
					break;
				case 'bottom':
					slidingElementCSS = {};
					wrapperCSS = $.extend({position: 'absolute'}, {bottom: '0px'}, params.offset);
					tabCSS = {minWidth: $(slidingElement).outerWidth()};
					$.slidingPanel.effectDirection = 'down';
					if (!options.tabText) {
						params.tabText = $.slidingPanel.defaultHorizontalTabText;
					}
					$(slidingElement).addClass(params.slidingElementClass).css(slidingElementCSS).wrap($(params.wrapperTemplate).clone().addClass(params.wrapperClass))
						.closest('.slidingpanel_wrapper').css(wrapperCSS)
						.append($(params.tabTemplate).clone().addClass(params.tabClass).css(tabCSS).append(params.tabText));
					break;
				case 'left':
					slidingElementCSS = {'float': 'left'};
					wrapperCSS = $.extend({position: 'absolute'}, {left: '0px'}, params.offset);
					tabCSS = {'float': 'left'};
					$.slidingPanel.effectDirection = 'left';
					$(slidingElement).addClass(params.slidingElementClass).css(slidingElementCSS).wrap($(params.wrapperTemplate).clone().addClass(params.wrapperClass))
						.closest('.slidingpanel_wrapper').css(wrapperCSS)
						.prepend($(params.tabTemplate).clone().addClass(params.tabClass).css(tabCSS).append(params.tabText));
					break;
			}
			
			if (params.openByDefault) {
				// If there is no trigger to hide the panel, then the tab is going to assume that role
				if ($('.' + params.hideTriggerClass).length == 0) {
					$('.' + params.tabClass).addClass(params.hideTriggerClass);
				}
				
				$('.' + params.hideTriggerClass).one('click', function() {
					$(slidingElement).hide('slide', {direction: $.slidingPanel.effectDirection}, params.speed, function() {
						bindHover(slidingElement);
					});
				});
			}
			else {
				$(slidingElement).hide();
				bindHover(slidingElement);
			}
		});
	};

})(jQuery);