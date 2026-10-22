var $ = jQuery.noConflict();
(function($) {
    "use strict";
    $(document).ready(function() {
        /**
         * To avoid a href="#" reload
         */
        $(document).on('click', '.vlp-disabled-link', function(event) {
            event.preventDefault();
        });

        /**
         * Blog : Load More Category
         */
        $("a.vl-tpl-load-more-cat").on("click", function(e) {
            e.preventDefault();
            $(this).toggleClass("vl-blog-load-more-cats-toggle");

            var $wrap = $(".vl-blog-load-more-cats-wrap");
            if ($wrap.length) {
                $wrap.toggleClass("vl-blog-load-more-cats-wrap-toggle");
            }
        });
    });
})(jQuery);