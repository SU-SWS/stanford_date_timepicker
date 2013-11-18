/**
 * Timepicker plugin & override helper.
 * Adds attach behaviour to drupal settings for timepicker plugin.
 */

(function($){

  Drupal.behaviors.stanford_date_timepicker = {
    attach: function (context, settings) {

      // @todo: Attach the timepicker to configured selector.
      // $(".stanford-timepicker").timepicker({
      //   controlType: 'select',
      //   timeFormat: 'hh:mm tt'
      // });

      // Each time the page changes the field array is rebild as well as
      // Drupal.settings... We need to add the pop up functionality back to
      // those elements.
      $.each(Drupal.settings.stanfordDateTimepicker, function(i, opts) {
        var elem = $('#' + opts.id + ' ' + opts.selector, context).filter(":not(.su-proccessed)");
        elem.timepicker(opts.opt_settings);
        elem.addClass('su-proccessed');
        elem.change(function(e) {
          $(this).highlight();
        });
      });

    }
  };


$.fn.highlight = function() {

  $(this).each(function () {
      var el = $(this);
      $("<div/>")
      .width(el.outerWidth())
      .height(el.outerHeight())
      .css({
          "position": "absolute",
          "left": el.offset().left,
          "top": el.offset().top,
          "background-color": "#ffff99",
          "opacity": ".7",
          "z-index": "9999999"
      }).appendTo('body').fadeOut(1000).queue(function () { $(this).remove(); });
    el.focus();
  });

}


})(jQuery);
