<?php
/**
 * @file
 * Administration and configuration forms.
 */

/**
 * Default settings configuration form.
 * url: admin/config/stanford-datetimepicker
 * @param  array $form see form api
 * @param  array $form_state see form api
 * @return array the form array.
 */
function stanford_date_timepicker_config_form($form, &$form_state) {
  $form = array();

  $form['stanford_date_timepicker_activation_class'] = array(
    '#type' => t('textfield'),
    '#title' => t('The class used to attach timepickers'),
    '#description' => t('by default "timepicker" is always used, extra classes can be added here (separated by comma, no leading or trailing comma).'),
    '#default_value' => variable_get('stanford_date_timepicker_activation_class', ''),
  );
  $form['stanford_date_timepicker_default_date_format'] = array(
    '#type' => t('textfield'),
    '#title' => t('The default date format used by the timepicker'),
    '#description' => t('warning: <a href="http://docs.jquery.com/UI/Datepicker#option-dateFormat">date formats used by jquery!!</a>'),
    '#default_value' => variable_get('stanford_date_timepicker_default_date_format', 'yy-mm-dd'),
  );
  $form['stanford_date_timepicker_default_time_format'] = array(
    '#type' => t('textfield'),
    '#title' => t('The default time format used by the timepicker'),
    '#description' => t('warning: <a href="http://docs.jquery.com/UI/Datepicker#option-dateFormat">date formats used by jquery!!</a>'),
    '#default_value' => variable_get('stanford_date_timepicker_default_time_format', 'hh:mm'),
  );
  $form['stanford_date_timepicker_default_separator'] = array(
    '#type' => t('textfield'),
    '#title' => t('The default separator used between date/time. eg: | or -'),
    '#description' => t('A space is used by default.'),
    '#default_value' => variable_get('stanford_date_timepicker_default_separator', ' '),
  );

  return system_settings_form($form);
}

