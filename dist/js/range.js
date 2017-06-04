(function( $ ){

	$.fn.range = function(opts) {
		if ( methods[opts] ) {
				return methods[ opts ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if (typeof opts === 'object' || ! opts) {
				return methods.init.apply( this, arguments );
		}
	};

	var _defaults = {};
	var touchstart = 'touchstart mousedown';
	var touchmove = 'touchmove mousemove';
	var touch_down = true;

  var methods = {
    init : function(options) {
			options = $.extend(true, {}, _defaults, options);

			$(this).each(function() {
				var currentValue;

				$(this).on(touchstart, function() {
					touch_down = true;
					}).on(touchmove, function(e) {
						if(touch_down) {
							if(currentValue != this.value) {
								currentValue = this.value;

								options.onSlide(this.value);
							}
						}
					});

				touch_down = false;
			});

			return this;
    }
  };

})( jQuery );
