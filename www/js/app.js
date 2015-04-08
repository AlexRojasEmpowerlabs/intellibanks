var logged="ok";
var todos= {};
var todosCall={};
var todosSPTE={};
var userInfo={};
var Profile="[]";
var People="[]";
var selectedUser="";
var fecha="no";
var misDatos;
  var module = ons.bootstrap('my-app', ['onsen']);
$(document).ready(function () {
	
	
	
	
  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('Disponible en breve '+user);
      }, 100);
    };
  });
  
  module.controller('VideoController', function($scope) {
    //$scope.ons.notification.alert({message: ""+misDatos.url,title: "intellibanks"});
    $scope.url = misDatos.url;
  });

  module.controller('MicroController', function($scope, $dataMicro,$http) {
    $scope.item = $dataMicro.item;  
    $http.get('http://empowerlabs.com/proyectos/trackersAPI/mblocs/todos.php').
    success(function(data, status, headers, config) {
  	//$scope.ons.notification.alert({message: ""+data.url,title: "intellibanks"});
   misDatos=data;
   $scope.item=misDatos;
    $scope.video=function(item){
    	//$scope.ons.notification.alert({message: ""+item.url,title: "intellibanks"});
    	$scope.ons.navigator.pushPage('video.html', {title : "1"});
    	}; 
    $scope.audio=function(){
    	//$scope.ons.navigator.pushPage('video.html', {title : "1"});
    	}; 
    $scope.texto=function(){
    	//$scope.ons.navigator.pushPage('page4.html', {title : "1"});
    	};
    $scope.presentacion=function(){
    	//$scope.ons.navigator.pushPage('page5.html', {title : "1"});
    	};
  }).
  error(function(data, status, headers, config) {
  	
  });
    
  });

  module.factory('$dataMicro', function() {
      var data = {};
      
      data.item = [misDatos];
      
      return data;
  });
  
   module.controller('peopleController', function($scope, $dataPeople, $http) {
    $http.get('http://empowerlabs.com/proyectos/helpDesk/getUsers.php').
  success(function(data, status, headers, config) {
  	//$scope.ons.notification.alert({message: ""+data.firstname,title: "intellibanks"});
    $dataPeople=data;
    People=data;
    $scope.data = $dataPeople;
    $scope.newMessage=function(i){
    	selectedUser=i;
    	$scope.ons.navigator.pushPage('mensajes.html', {title : i});
    	};
  }).
  error(function(data, status, headers, config) {
  	
  });
  });
   module.factory('$dataPeople', function() {
      var dataPeople;
      		dataPeople=People;
      
      return dataPeople;
  });
  module.controller('newMessageController', function($scope) {
    $scope.seleccion=selectedUser;
  });
  
  module.controller('profileController', function($scope, $dataProfile, $http) {
    $http.get('http://empowerlabs.com/proyectos/helpDesk/getUserData.php?user='+user).
  success(function(data, status, headers, config) {
  	//$scope.ons.notification.alert({message: ""+data.firstname,title: "intellibanks"});
    $dataProfile=data;
    Profile=data;
    $scope.data = $dataProfile;
  }).
  error(function(data, status, headers, config) {
  	
  });
  });
   module.factory('$dataProfile', function() {
      var dataProfile;
      		dataProfile=Profile;
      
      return dataProfile;
  });
  
  module.controller('CalendarController', function($scope, $data) {
  	 createMonth();
    $scope.verFecha=function(){
      $scope.ons.navigator.pushPage('dia.html');
    //$scope.ons.notification.alert({message: ""+fecha,title: "intellibanks"});
      };
    
  });
  
  module.controller('SelectedFechaController', function($scope, $data) {
    $scope.fecha=fecha;
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });
  
  module.controller('SPTEDetailController', function($scope, $dataSPTE) {
    $scope.item = $dataSPTE.selectedItem;
  });
  
   module.controller('NewTicketController', function($scope, $data) {
    $scope.newTicket=function(){
      $scope.ons.navigator.pushPage('newTicket.html');
      };
      });

  module.controller('MasterController', function($scope, $data, $http) {
  	//getTodos();
    $scope.items = todosCall;  
    $http.get('http://empowerlabs.com/proyectos/helpDesk/todosCall.php').
  success(function(data, status, headers, config) {
  	data.reverse();
    $data.items=data;
    todosCall=data;
    $scope.items = $data.items;  
    $scope.showDetail = function(item) {
      var selectedItem = item;
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  }).
  error(function(data, status, headers, config) {
  	
  });
  });

  module.factory('$data', function() {
      var data = {};
      		data.items=todos;
      
      return data;
  });
  
  module.controller('TicketOneController', function($scope, $dataTickets) {
    $scope.item = $dataTickets.selectedItem;
  });
  module.controller('TicketController', function($scope, $dataTickets,$http) {
  	$scope.items=todos;
  	$http.get('http://empowerlabs.com/proyectos/helpDesk/todos.php').
  success(function(data, status, headers, config) {
  	data.reverse();
    $dataTickets.items=data;
    todos=data;
    $scope.items = $dataTickets.items;  
    
    $scope.showTicket = function(item) {
      var selectedItem = item;
      $dataTickets.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('ticketOne.html', {title : selectedItem.id});
    };
  }).
  error(function(data, status, headers, config) {
  	//errores
  });
  });

  module.factory('$dataTickets', function() {
      var dataTickets = {};
      		dataTickets.items=todos;
      
      return dataTickets;
  });
  
  
  module.controller('SPTEMasterController', function($scope, $dataSPTE, $http) {
  	//getTodos();
  	
			if (user === "nouser") {
			//alert(""+user);
						//window.location = "login.html";
						//ons.notification.alert({message: ''+data.response, title:"App HelpDesk"});
						logged="no"; menu.setMainPage('login2.html');
					}
					else{
					}
					$scope.fecha=fecha;
					$scope.finalFecha=fecha.year+'-'+fecha.indice+'-'+fecha.dia;
    $scope.items = todosSPTE;  
    $http.get('http://empowerlabs.com/proyectos/helpDesk/todosSPTE.php').
  success(function(data, status, headers, config) {
  	//data= data.sort(function(a,b){return a.id - b.id;});
  	data.reverse();
    $dataSPTE.items=data;
    todosSPTE=data;
    $scope.items = $dataSPTE.items;  
    $scope.showSPTEDetail = function(item) {
      var selectedItem = item;
      $dataSPTE.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detailSPTE.html', {title : selectedItem.id});
    };
  }).
  error(function(data, status, headers, config) {
  	
  });
  });

  module.factory('$dataSPTE', function() {
      var dataSPTE = {};
      		dataSPTE.items=todosSPTE;
      
      return dataSPTE;
  });


   });