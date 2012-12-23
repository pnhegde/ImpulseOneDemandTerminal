 <?php
 if(!isset($_COOKIE["atn"])){
 	// header("HTTP/1.0 401 Unauthorized");
 	// echo '<script type="text/javascript"> console.log("Session Expired. Login again."); </script> ';
 	header("Location: https://terminal.impulse01.com/");
 	exit;
 }

 ?>

 <html>
 <head>
 	<title>ImpulseOne - Demand Terminal</title>

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
