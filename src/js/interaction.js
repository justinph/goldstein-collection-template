'use strict';

//set namespace if it doesn't exist
this["GOLDSTEIN"] = this["GOLDSTEIN"] || {};

//function to set up our interaction
GOLDSTEIN.interaction = function (){

    // cache selectors we're going to call more than once
    var $object_detail = $('.object-detail');
    var $oDLink = $('#object-detail-image-link');
    var $oDImg = $('#object-detail-image-link img');
    var $home = $('.home');
    var $advSearchLink = $('#advanced-search-link');
    var $advSearchInputs = {
        onlyImages: $('#only-images'),
        searchFields: $('input:radio[name=search-fields]:checked')
    };

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
    if ($advSearchInputs.onlyImages.prop('checked') ||  $advSearchInputs.searchFields.val() !== 'all'){
        toggleAdvanceSearch();
    }

    //make search form do something with our input fields
    $('#search-panel-submit').click(function (e){
        var $form = $(this).parents('form');
        var query = {
            q:                  $('#search-field').val(),
            'search-fields':    $($advSearchInputs.searchFields.selector).val(),
            'only-images':      $advSearchInputs.onlyImages.prop('checked')
        };

        e.preventDefault();

        console.log('Submit to:', $form.prop('action'));
        console.log('Query:', query);
    });


};

//do our interaction
GOLDSTEIN.interaction();
