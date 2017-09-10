<?php  

	require_once("fragments/header.php");
 	require_once("fragments/left-sidebar.php"); 
 	require_once("fragments/navbar.php");
 	require_once("service/functions.php");

 	if(isset($_POST["title"]) && isset($_POST["content_full"]) && isset($_POST["tags"])){
 		addPost($_POST["title"],$_POST["content_full"],$_POST["tags"]);
 		echo "<script>location.href='/post-panel.php'</script>";
 	}

 ?>

 	<div class="col-lg-9">
 		
 		<form  action=""  role="form" id="birseyler-karala" class="form-horizontal" method="POST">
		  <fieldset>
		    <legend>birşeyler karala</legend>

		    <div class="form-group">
		      <label for="postTitle" class="col-lg-1 control-label">başlık</label>
		      <div class="col-lg-11">
		        <input type="text" class="form-control" id="postTitle" placeholder="bir başlık gir" name="title" required>
		      </div>
		    </div>

		    <div class="form-group">
		      <label for="postContent" class="col-lg-1 control-label">içerik</label>
		      <div class="col-lg-11">
		        <textarea class="form-control ckeditor" cols="10"  id="content_full" placeholder="ilk satırı yaz , gerisi gelir." name="content_full" required></textarea>
		        <span class="help-block">aklına güzel bir fikir gelmiş olabilir , bunu bir düşün.</span>
		      </div>
		    </div>

		    <div class="form-group">
		      <label for="postTags" class="col-lg-1 control-label">etiketler</label>
		      <div class="col-lg-11">
		        <input type="text" class="form-control" id="postTags" placeholder="etiketleri , (virgül) ile ayır" name="tags" required>
		      </div>
		    </div>

		    <div class="form-group">
		      <div class="col-lg-3 col-lg-push-5">
		        <button type="submit" class="btn btn-primary" class="sendPost">yolla</button>
		        <button type="reset" class="btn btn-default">vazgeçtim</button>
		      </div>
		    </div>
		  </fieldset>
		</form>

 	</div>


<?php  require_once("fragments/footer.php") ?>