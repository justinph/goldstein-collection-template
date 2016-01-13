'use strict';

(function (){

    var $object_detail = $('.object-detail');
    var $oDLink = $('#object-detail-image-link');
    var $oDImg = $('#object-detail-image-link img');
    var $advSearchLink = $('#advanced-search-link');
    var $home = $('.home');

    function toggleAdvanceSearch (){
        $('.advanced-search-wrap').removeClass('hidden');
        $advSearchLink.replaceWith('<h3>' + $advSearchLink.text() + '</h3>');
    }


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

    //advanced search clicking
    $advSearchLink.click(function (e){
        e.preventDefault();
        toggleAdvanceSearch();
    });

    //open advanced search if there is anything out of the default in it
    if ($('#only-images').prop('checked') ||  $('input:radio[name=search-fields]:checked').val() !== 'all'){
        toggleAdvanceSearch();
    }

})();
