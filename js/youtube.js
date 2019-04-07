
$('.coverimageforplayer').on('click', function() {
        var element = $(this); // reuse variables to best pratice. http://code.tutsplus.com/tutorials/quick-tip-jquery-newbs-stop-jumping-in-the-pool--net-22142
        var videoSRC = element.attr('data-videoSRC');
        var iframe = '<iframe width="100%" height="400" src="'+videoSRC+'" frameborder="0" allowfullscreen></iframe>';
        element.html(iframe);
    });