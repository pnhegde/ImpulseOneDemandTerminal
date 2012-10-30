<? php
$loginUsername = isset($_POST["loginUsername"]) ? $_POST["loginUsername"] : "";
 
if($loginUsername == "f"){
    $result["success"] = true;
} else {
    $result["success"] = false;
    $result["errors"]["reason"] = "Login failed. Try again.";
}
echo json_encode($result);
?>;