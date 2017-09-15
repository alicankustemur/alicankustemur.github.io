<?php
function post($parameter) {
    if (isset($_POST[$parameter])) {
        echo trim($_POST[$parameter]);
    }
}

function getConnection() {
    $host = "127.0.0.1";
    $username = "root";
    $pass = "12345";
    $db = "blog";
    $connection = new mysqli($host, $username, $pass, $db);
    
    if (mysqli_connect_errno()) {
        echo (mysqli_connect_error());
        exit();
    } 
    else {
        return $connection;
    }
}

function removeTextFromContent($text,$content){
    return str_replace($text,"",$content);
}


function addPost($title, $content_full, $tags) {
    if ($title != null && $content_full != null && $tags != null) {
        $connection = getConnection();
        $query = $connection->prepare("INSERT INTO post(title,content_full,content_half,tags,link,date) VALUES(?,?,?,?,?,?)");
        $content_half = "<div style='fontSize=15px !important; text-decoration: none !important;'>";
        $content_half .= substr(strip_tags($content_full), 0, 500);
        $content_half .= "... </div>";
        $query->bind_param("ssssss", $title, $content_full, $content_half, $tags ,permalink($title), time());
        $query->execute();
        $connection->close();
    }
}

function updatePost($id , $title , $content_full , $tags){
    if ($id != null) {
        $connection = getConnection();
        $query = $connection->prepare("UPDATE post SET title = ? , content_full = ? , content_half = ? ,tags = ? WHERE id = ?");
        $content_half = "<div style='fontSize=15px !important; text-decoration: none !important;'>";
        $content_half .= substr(strip_tags($content_full), 0, 500);
        $content_half .= "... </div>";
        $query->bind_param("sssss", $title, $content_full, $content_half, $tags ,$id);
        if($query){
            $query->execute();
        }else{
            echo $connection->error;
        }
        $connection->close();
    }
}

function removePost($id) {
    if ($id != null) {
        $connection = getConnection();
        $query = $connection->prepare("DELETE FROM post WHERE id = ?");
        $query->bind_param("s", $id);
        if($query){
            $query->execute();
        }else{
            echo $connection->error;
        }

        $connection->close();

        setAutoIncrement();
    }
}

function setAutoIncrement(){
    $connection = getConnection();
    $query = $connection->query("SELECT MAX(id) as id FROM POST");
    $maxId = $query->fetch_object()->id;
    $sql = "ALTER TABLE post AUTO_INCREMENT = ";
    $sql .= $maxId;
    $query = $connection->query($sql);
    if(!$query){
        echo $connection->error;
    }
    $connection->close();
    
}

function getAllPost() {
    $connection = getConnection();
    $result = $connection->query("SELECT * FROM post ORDER BY date DESC");
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_array()) {
            echo "<div class=\"col-lg-12\">
	                   <p style=\"font-size:13px;\"><span class=\"fa fa-clock-o\"></span> $row[date]</p>
	                   <h4>$row[title]</h4>
	                   <p style=\"font-size:14px;\">$row[content_half]</p>
	                   <button class=\"btn btn-default btn-xs\" name=\"devaminiOku\">devamını oku ..</button>
                       <p class=\"lead\" style=\"font-size:12px;\"></p>
                       <p class=\"pull-right\" style=\"font-size:12px;\"><span class=\"label label-warning\">$row[tags]</span> <span class=\"label label-success\">tag</span> <span class=\"label label-default\">post</span></p>
	                   <hr>
                 </div>";
        }
    }
    $connection->close();
}

function getPostById($id){

    if($id != null){
        $connection = getConnection();
        $query = $connection->prepare("SELECT * FROM post WHERE id = ?");
        $query->bind_param("s",$id);
        if($query){
            $query->execute();
        }else{
            echo $connection->error;
        }
        $result = $query->get_result();
        $row = $result->fetch_assoc();

        return $row;    
    }
}

function getPostList(){
    $connection = getConnection();
    $result = $connection->query("SELECT id,title,content_half FROM post ORDER BY id DESC");
     if ($result->num_rows > 0) {
        while ($row = $result->fetch_array()) {
            echo "<tr class='post-row'  >
                    <td class=\"rowId\" >$row[id]</td>
                    <td class=\"rowTitle\">$row[title]</td>
                    <td><a href='/post_page.php?p=$row[id]/' class=\"btn btn-primary\" style='cursor:pointer' target='_blank'>Git</a></td>
                    <td><button type=\"submit\" class=\"btn btn-success\" style='cursor:pointer'>Güncelle</a></td>
                    <td><button type=\"button\" class=\"btn btn-danger \" style='cursor:pointer' >Sil</button></td>
                </tr>\n";
        }
    }
}

function permalink($string) {
    $find = array('Ç', 'Ş', 'Ğ', 'Ü', 'İ', 'Ö', 'ç', 'ş', 'ğ', 'ü', 'ö', 'ı', '+', '#');
    $replace = array('c', 's', 'g', 'u', 'i', 'o', 'c', 's', 'g', 'u', 'o', 'i', 'plus', 'sharp');
    $string = strtolower(str_replace($find, $replace, $string));
    $string = preg_replace("@[^A-Za-z0-9\-_\.\+]@i", ' ', $string);
    $string = trim(preg_replace('/\s+/', ' ', $string));
    $string = str_replace(' ', '-', $string);
    return $string;
}
?>