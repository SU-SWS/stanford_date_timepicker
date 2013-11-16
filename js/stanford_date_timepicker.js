/**
 * Timepicker plugin & override helper
 */

(function($){

  Drupal.behaviors.stanford_date_timepicker = {
    attach: function (context, settings) {

      // $(".stanford-timepicker").timepicker({
      //   controlType: 'select',
      //   timeFormat: 'hh:mm tt'
      // });

      $.each(Drupal.settings.stanfordDateTimepicker, function(i, opts) {
        $('#' + opts.id + ' ' + opts.selector, context).timepicker(opts.opt_settings);
        $('#' + opts.id + ' ' + opts.selector, context).addClass('su-proccessed');
      });

      // var newFields = $('.stanford-timepicker', context);

      // if(newFields.length === 0) {
      //   return;
      // }

      // $.each(newFields, function(i, v) {
      //   var oneField = newFields.eq(i);
      //   var fieldName = oneField.attr('rel');
      //   var fieldSettings = Drupal.settings.stanfordDateTimepicker[fieldName];
      //   oneField.timepicker(fieldSettings.opt_settings);
      // });




    }
  };

})(jQuery);
