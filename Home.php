 <?php
 if(!isset($_COOKIE["atn"])){
 	// header("HTTP/1.0 401 Unauthorized");
 } else {
 	$atn = $_COOKIE["atn"];
 	$con = mysql_connect("localhost", "root", "appyfizz")or die("cannot connect"); 
 	mysql_select_db("impulsedb" , $con)or die("cannot select DB");
 	$res=mysql_fetch_array(mysql_query("SELECT * FROM sessions WHERE access_token='$atn'"));
 	$accountId=$res['accountId'];
 	$res=mysql_fetch_array(mysql_query("SELECT * FROM accounts WHERE accountId='$accountId'"));
 	$accountName=$res['accountName'];
 }
 ?>

 <html>
 <head>
 	<title>Impulse Demand Terminal</title>

 	<!-- Ext JS Files -->
 	<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all-gray.css">
 	<script type="text/javascript" src="extjs/ext-all-debug.js"></script>
 	<!-- App Files -->
 	<link rel="stylesheet" type="text/css" href="extjs/resources/css/array-grid.css" />
 	<link rel="stylesheet" type="text/css" href="extjs/resources/css/splashscreen.css" />
 	<link rel="stylesheet" type="text/css" href="extjs/example.css" />

 	<script type="text/javascript" src="js/AnyChart.js"></script>
 	<script type="text/javascript" src="js/AnyChartHTML5.js"></script>	
 	<script type="text/javascript" src="extjs/examples.js"> </script>
 	<script type="text/javascript">
 	var accountName="<?php echo $accountName ?>";
 	</script>
 	<!--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
 	<script type="text/javascript" src="https://code.highcharts.com/highcharts.js"></script>
 	<script type="text/javascript" src="https://code.highcharts.com/highcharts-more.js"></script>
 	<script type="text/javascript" src="https://code.highcharts.com/modules/exporting.js"></script>
 	<script type="text/javascript" src="/Chart/ux/HighChart.js"></script>
 -->
 <!-- <script src="extjs/ux/Exporter/Exporter-all.js" type="text/javascript"></script> -->
 <script type="text/javascript" src="app.js"></script>



</head>
<body>

</body>
</html>
