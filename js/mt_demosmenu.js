/*
 * MTDemosMenu scripts
 *  Add any module related script here
 */
(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.mtDemosMenu = {
    attach: function (context, settings) {
      $(context).find('.mt-demosmenu').once('mtDemosMenuInit').each(function() {

      });
    }
  };
})(jQuery, Drupal, drupalSettings);
