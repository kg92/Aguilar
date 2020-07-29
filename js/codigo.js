<script>
     $(document).ready(function () {
         $('.icon-plus[href*="youtube"]').venobox();
     });

     (function (i, s, o, g, r, a, m) {
         i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
             (i[r].q = i[r].q || []).push(arguments)
         }, i[r].l = 1 * new Date(); a = s.createElement(o),
             m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
     })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

     ga('create', 'UA-102429938-1', 'auto');
     ga('send', 'pageview');

     $('[data-vbtype="youtube"]').click(function (e) {
         ga('send', 'event', 'Videos', 'Play video');
     });

     $("a[href*='cision']").click(function (e) {
         ga('send', 'event', 'Cision', 'Download file');
     })

     $('#share-facebook').click(function (e) { ga('send', 'event', 'Share', 'Facebook share') });
     $('#share-twitter').click(function (e) { ga('send', 'event', 'Share', 'Twitter share') });
     $('#share-google').click(function (e) { ga('send', 'event', 'Share', 'Twitter share') });

     $("a[href*='/media/']").click(function (e) { ga('send', 'event', 'Download', 'File:' + e.target.title) });
 </script>
