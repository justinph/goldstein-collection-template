'use strict';

(function (){

    var $object_detail = $('.object-detail');
    var $oDLink = $('#object-detail-image-link');
    var $oDImg = $('#object-detail-image-link img');

    var $home = $('.home');

    //object detail page
    if ($object_detail.length > 0){
        //swap images on click/tap
        $('.object-detail').find('.object-images-list a').click(function (e){
            var $this = $(this);
            var medUrl = $this.data('med-url') ? $this.data('med-url') : $this.attr('href');
            e.preventDefault();
            $oDLink.attr('href', $this.attr('href'));
            $oDImg.addClass('loading').one('load', function () {
                $(this).removeClass('loading');
            }).attr('src', medUrl);
        });
    }

    //home page
    if ($home.length > 0){
        $home.find('.nav-tabs').tabCollapse();
    }



})();
