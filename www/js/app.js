var logged="ok";
var todos= {};
var todosCall={};
var todosSPTE={};
var userInfo={};
var Profile="[]";
var People="[]";
  var module = ons.bootstrap('my-app', ['onsen']);
$(document).ready(function () {
	
	
	
	
  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('Disponible en breve '+user);
      }, 100);
    };
  });
  
   module.controller('peopleController', function($scope, $dataPeople, $http) {
    $http.get('http://empowerlabs.com/proyectos/helpDesk/getUsers.php').
  success(function(data, status, headers, config) {
  	//$scope.ons.notification.alert({message: ""+data.firstname,title: "intellibanks"});
    $dataPeople=data;
    People=data;
    $scope.data = $dataPeople;
  }).
  error(function(data, status, headers, config) {
  	
  });
  });
   module.factory('$dataPeople', function() {
      var dataPeople;
      		dataPeople=People;
      
      return dataPeople;
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
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
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
    
    $scope.showTicket = function(index) {
      var selectedItem = $dataTickets.items[index];
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
    $scope.items = todosSPTE;  
    $http.get('http://empowerlabs.com/proyectos/helpDesk/todosSPTE.php').
  success(function(data, status, headers, config) {
  	//data= data.sort(function(a,b){return a.id - b.id;});
  	data.reverse();
    $dataSPTE.items=data;
    todosSPTE=data;
    $scope.items = $dataSPTE.items;  
    $scope.showSPTEDetail = function(index) {
      var selectedItem = $dataSPTE.items[index];
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