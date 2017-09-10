<?php  

	require_once("fragments/header.php");
 	require_once("fragments/left-sidebar.php"); 
 	require_once("fragments/navbar.php");
 	require_once("service/functions.php");



 	if(isset($_POST["id"])){
 		removePost($_POST["id"]);
 	}
 ?>

 	<div class="col-lg-9">
 		
 		<form  action="update-page.php"  role="form" id="post-listesi" class="form-horizontal" method="POST">
		  <fieldset>
		    <legend>post listesi</legend>
		  </fieldset>
		  <div class="table-responsive" style="overflow-x:auto;">
					<table class="table">
						<thead>
							<tr>
								<th>id</th>
								<th>başlık</th>
								<th>güncelle</th>
                                <th>post'a git</th>
                                <th>sil</th>
							</tr>
						</thead>
						<tbody>
							<?php getPostList();  ?>
						</tbody>
					</table>
			</div>
			<input type="hidden" name="id">
			<input type="hidden" name="updateId">
		</form>

 	</div>


<?php  require_once("fragments/footer.php") ?>


