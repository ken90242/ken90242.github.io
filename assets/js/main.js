'use strict';

$(function() {
  // Each <article> with image links gets its own lightbox gallery.
  $('article').each(function() {
    var $article = $(this);
    if ($article.find('a.image').length === 0) {
      return;
    }
    $article.poptrox({
      caption: function($a) { return $a.find($('img'))[0].getAttribute('alt'); },
      overlayColor: '#2c2c2c',
      overlayOpacity: 0.85,
      popupCloserText: '',
      popupLoaderText: '',
      selector: 'a.image',
      usePopupCaption: true,
      usePopupDefaultStyling: false,
      usePopupEasyClose: false,
      usePopupNav: true
    });
  });
});
