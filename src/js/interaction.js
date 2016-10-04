'use strict';

//set namespace if it doesn't exist
this["GOLDSTEIN"] = this["GOLDSTEIN"] || {};

//function to set up our interaction
GOLDSTEIN.interaction = function (){

    // cache selectors we're going to call more than once
    var $oDLink = $('#detail-image-link');
    var $oDImg = $('#detail-image-link img');
    var $home = $('.home');
    var $advSearchLink = $('#advanced-search-link');
    var $advSearchInputs = {
        onlyImages: $('#only-images'),
        searchFields: $('input:radio[name=search-fields]:checked')
    };

    var queryMap = {
        'catalog-number':   'N',
        'designer':         'a',
        'object-title':     'O',
        'date':             'd',
        'place':            'P',
        'medium':           'm',
        'credit-line':      'Q',
    };

    function toggleAdvanceSearch (){
        $('.advanced-search-wrap').removeClass('hidden');
        $advSearchLink.replaceWith('<h3>' + $advSearchLink.text() + '</h3>');
    }

    //swap images on click/tap
    $('.detail-images').find('.detail-images-list a').click(function (e){
        var $this = $(this);
        var medUrl = $this.data('med-url') ? $this.data('med-url') : $this.attr('href');
        e.preventDefault();
        //console.log(e, this);
        $oDLink.attr('href', $this.attr('href'));
        $oDImg.addClass('loading').one('load', function () {
            $(this).removeClass('loading');
        }).attr('src', medUrl);
    });

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
            pS:                 $('#search-field').val(),
            sletter:            '',
            db:                 'objects',
            dir:                'GOLDSTEIN',

        };
        var advSearchParam = $($advSearchInputs.searchFields.selector).val();
        var onlyImages = $advSearchInputs.onlyImages.prop('checked');

        // if any of the advanced search radio buttons are checked and match the fields we know about
        if (advSearchParam && queryMap.hasOwnProperty(advSearchParam)){
            query.sletter = queryMap[advSearchParam];
        }

        // only if images is checked
        if (onlyImages){
            query.onlyIfImages = true;
        }

        e.preventDefault();

        window.location = 'JResults.aspx' + '?' + $.param(query);

    });

    // replace broken images with a grey placeholder
    $('.object-list img, .detail-images img').error(function (){
        $(this).attr('src', 'assets/img/noimage.png');
    });

};

//do our interaction
GOLDSTEIN.interaction();
