<?php
/**
 * @file
 * Administration and configuration forms
 */

function stanford_date_timepicker_config_form($form, &$form_state) {
  $form = array();

  return system_settings_form($form);
}

