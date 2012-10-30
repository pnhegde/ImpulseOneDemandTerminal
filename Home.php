<?php
if(!isset($_COOKIE["atn"])){
	header("HTTP/1.0 401 Unauthorized");
	die();
}

?>

<html>
<head>
	<title>ImpulseOne - Advanced Analytics</title>

	<!-- Ext JS Files -->
	<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css">
	<script type="text/javascript" src="extjs/ext-all-debug.js"></script>
	
	<!-- App Files -->
	<link rel="stylesheet" type="text/css" href="extjs/resources/css/array-grid.css" />
	<!-- <script src="extjs/ux/Exporter/Exporter-all.js" type="text/javascript"></script> -->
	<script type="text/javascript" src="app.js"></script>

	
</head>
<body>

</body>
</html>
