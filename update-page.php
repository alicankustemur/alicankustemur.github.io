<?php  

	require_once("fragments/header.php");
 	require_once("fragments/left-sidebar.php"); 
 	require_once("fragments/navbar.php");
 	require_once("service/functions.php");


 	$id = $_POST["updateId"];
 	$post = getPostById($id);

 	if(isset($_POST["title"]) && isset($_POST["content_full"]) && isset($_POST["tags"]) && isset($_POST["post_image"])){
 		updatePost($_POST["updateId"],$_POST["title"],$_POST["content_full"],$_POST["tags"]);
 		echo "<script> location.href = '/post-panel.php'</script>";
 	}
 ?>

 	<div class="col-lg-9">
 		
 		<form  action=""  role="form" id="update-page" class="form-horizontal" method="POST">
		  <fieldset>
		    <legend>birşeyler karala</legend>

		    <div class="form-group">
		      <label for="postTitle" class="col-lg-1 control-label">başlık</label>
		      <div class="col-lg-11">
		        <input type="text" class="form-control" id="postTitle" placeholder="bir başlık gir" name="title" value="<?=$post['title'];?>"  required>
		      </div>
		    </div>

		    <div class="form-group">
		      <label for="postContent" class="col-lg-1 control-label">içerik</label>
		      <div class="col-lg-11">
		        <textarea class="form-control"  id="content_full" placeholder="ilk satırı yaz , gerisi gelir." name="content_full" required>
					<?=$post['content_full'];?>		        	
		        </textarea>
		        <span class="help-block">aklına güzel bir fikir gelmiş olabilir , bunu bir düşün.</span>
		      </div>
		    </div>

		    <div class="form-group">
		      <label for="postTags" class="col-lg-1 control-label">etiketler</label>
		      <div class="col-lg-11">
		        <input type="text" class="form-control" id="postTags" placeholder="etiketleri , (virgül) ile ayır" name="tags" required value="<?=$post['tags'];?>" >
		      </div>
		    </div>

		    <div class="form-group">
		      <div class="col-lg-3 col-lg-push-5">
		        <button type="submit" class="btn btn-primary sendPost">yolla</button>
		        <a href="/post-panel.php" class="btn btn-default" >vazgeçtim </a>
		      </div>
		    </div>
		  </fieldset>
		  <input type="hidden" name="updateId" value="<?=$_POST['updateId']?>" >
		</form>

 	</div>


<?php  require_once("fragments/footer.php") ?>