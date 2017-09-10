<a class="to-top">Yukarı &uarr;</a>
<footer class="footer-distributed col-lg-12">
    <div class="footer-right">
        <!--
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
        -->
        <a href=""><img src="images/photo.png" class="img-responsive"></a>
    </div>
    <div class="footer-left">
        <p class="footer-links">
            ·
            <a href="#skills">yetenekler</a>
            ·
            <a href="#about">hakkımda</a>
            ·
            <a href="#contact">iletişim</a>
        </p>
        <p>ali can kuştemur    ~ while( !© ){ hiçbir hakkı saklı değildir,bilgi paylaştıkça çoğalır. }</p>
    </div>  
</footer>
<!-- JavaScripts -->
<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="plugins/bootstrap-3.3.6/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/mega-dropdown-menu.js"></script>
<script type="text/javascript" src="plugins/jquery-simplyscroll-2.0.X/jquery.simplyscroll.min.js"></script>
<script type="text/javascript" src="plugins/jquery-simplyscroll-2.0.X/random-scroll.js"></script>
<script type="text/javascript" src="js/jquery.bootpag.min.js"></script>
<script type="text/javascript" src="plugins/ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="http://cdn.jsdelivr.net/jquery.validation/1.14.0/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/jquery.form.validation.js"></script>
<script type="text/javascript" src="js/functions.js"></script>
<script type="text/javascript" src="js/pagejump.js"></script>
<script type="text/javascript" src="js/back-to-top.js"></script>
<script type="text/javascript" src="plugins/animsition/dist/js/animsition.min.js"></script>
<script type="text/javascript" src="plugins/lightbox2-master/dist/js/lightbox.min.js"></script>
<script type="text/javascript" src="plugins/syntaxhighlighter_3.0.83/scripts/shCore.js"></script>
<script type="text/javascript" src="plugins/syntaxhighlighter_3.0.83/scripts/shBrushJava.js"></script>
<script type="text/javascript" src="plugins/syntaxhighlighter_3.0.83/scripts/shBrushSql.js"></script>
<script type="text/javascript" src="plugins/jquery-easy-ticker-master/jquery.easy-ticker.min.js"></script>
<script type="text/javascript" src="plugins/jquery-easy-ticker-master/test/jquery.easing.min.js"></script>
<script type="text/javascript">
    (function($) {
        $(function() {
            $("#scroller").simplyScroll();
        });
    })(jQuery);
</script>
<script type="text/javascript">

     $('.post-pagination').bootpag({
        total: 3,
        wrapClass: "pagination"
        //,href: "#page={{number}}"
    }).on("page", function(event, num) {
        getPagination(num);

    });

     callFunctions();

     $(document).ready(function () {
        $("tr.post-row").mouseenter(function () {
            $(this).css("background-color","#e6e6e6");
        }).mouseleave(function () {
            $(this).css("background-color","#ffffff");
        });
     });

</script>
</body>
</html>
