var logged="ok";
var todos= {};
var todosCall={};
var todosSPTE={};
var userInfo={};
  var module = ons.bootstrap('my-app', ['onsen']);
$(document).ready(function () {
	
	
	
	
  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('Disponible en breve '+user);
      }, 100);
    };
  });
  
  module.controller('profileController', function($scope, $data, $http) {
    $http.post('http://empowerlabs.com/proyectos/helpDesk/getUserData.php', { "user" : 'JoseRojas'}).
  success(function(data, status, headers, config) {
  	$scope.ons.notification.alert({message: ""+data.firstname,title: "intellibanks"});
    $data=data;
    $scope.data = $data;
  }).
  error(function(data, status, headers, config) {
  	
  });
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