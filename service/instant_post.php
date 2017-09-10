<?php 
	
	require("functions.php");
			$array = array();
			$query = "SELECT * FROM post";
			$connection = getConnection();
			if ($result = $connection->query($query)) {
				if($connection->affected_rows){
					while($row = $result->fetch_assoc()){
						
						$array[] = $row;
					}
				}
			}
		$fp = fopen('posts.json', 'w');
		fwrite($fp, json_encode($array));
		fclose($fp);
		echo json_encode($array);	
	
?>