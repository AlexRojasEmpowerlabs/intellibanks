
		function send(){
			url= "http://empowerlabs.com/proyectos/helpDesk/login.php";
  	$.ajax({
      	type: 'POST',
      	url: url,
      	data: $( "#logueo" ).serialize(),
      	success: function(data){
      		if(data.response=="ok"){
      			user= $('#user').val();
      		//ons.notification.alert({message: ''+user, title:"Intellibanks"});
      			//window.location = "index.html";
      			menu.setMainPage('page1.html');
      		}
      		else{
      		ons.notification.alert({message: ''+data.response, title:"Intellibanks"});
      		}
      	}
      });
		}