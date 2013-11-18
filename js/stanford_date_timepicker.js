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
      });


    }
  };

})(jQuery);
