$(document).ready(function(){
	$("#ob_data").click(function(){
	$("#ob_data_menu").slideToggle();
	});

$("#ob_data_menu a").click(function(event){
  event.preventDefault(); //prevent synchronous loading
  $("#ob_data").html($(this).text());
  $("#ob_data_menu").slideUp();
});
	//ob_real
	$("#ob_real").click(function(){
	$("#ob_real_menu").slideToggle();
	});

$("#ob_real_menu a").click(function(event){
  event.preventDefault(); //prevent synchronous loading
  $("#ob_real").html($(this).text());
  $("#ob_real_menu").slideUp();
});
//ob_service
$("#ob_service").click(function(){
	$("#ob_service_menu").slideToggle();
	});

$("#ob_service_menu a").click(function(event){
  event.preventDefault(); //prevent synchronous loading
  $("#ob_service").html($(this).text());
  $("#ob_service_menu").slideUp();
});
//ob_clients
$("#ob_clients").click(function(){
	$("#ob_clients_menu").slideToggle();
	});

$("#ob_clients_menu a").click(function(event){
  event.preventDefault(); //prevent synchronous loading
  $("#ob_clients").html($(this).text());
  $("#ob_clients_menu").slideUp();
});
});