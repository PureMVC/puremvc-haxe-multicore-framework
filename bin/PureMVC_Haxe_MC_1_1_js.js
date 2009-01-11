$estr = function() { return js.Boot.__string_rec(this,''); }
org = {}
org.puremvc = {}
org.puremvc.haxe = {}
org.puremvc.haxe.multicore = {}
org.puremvc.haxe.multicore.interfaces = {}
org.puremvc.haxe.multicore.interfaces.INotifier = function() { }
org.puremvc.haxe.multicore.interfaces.INotifier.__name__ = ["org","puremvc","haxe","multicore","interfaces","INotifier"];
org.puremvc.haxe.multicore.interfaces.INotifier.prototype.initializeNotifier = null;
org.puremvc.haxe.multicore.interfaces.INotifier.prototype.sendNotification = null;
org.puremvc.haxe.multicore.interfaces.INotifier.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.INotifier;
org.puremvc.haxe.multicore.interfaces.IFacade = function() { }
org.puremvc.haxe.multicore.interfaces.IFacade.__name__ = ["org","puremvc","haxe","multicore","interfaces","IFacade"];
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.hasCommand = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.hasMediator = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.hasProxy = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.notifyObservers = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.registerCommand = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.registerMediator = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.registerProxy = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.removeCommand = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.removeCore = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.removeMediator = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.removeProxy = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.retrieveMediator = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.retrieveProxy = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.sendNotification = null;
org.puremvc.haxe.multicore.interfaces.IFacade.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IFacade;
org.puremvc.haxe.multicore.interfaces.IFacade.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
org.puremvc.haxe.multicore.interfaces.IModel = function() { }
org.puremvc.haxe.multicore.interfaces.IModel.__name__ = ["org","puremvc","haxe","multicore","interfaces","IModel"];
org.puremvc.haxe.multicore.interfaces.IModel.prototype.hasProxy = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.registerProxy = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.removeModel = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.removeProxy = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.retrieveProxy = null;
org.puremvc.haxe.multicore.interfaces.IModel.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IModel;
org.puremvc.haxe.multicore.interfaces.INotification = function() { }
org.puremvc.haxe.multicore.interfaces.INotification.__name__ = ["org","puremvc","haxe","multicore","interfaces","INotification"];
org.puremvc.haxe.multicore.interfaces.INotification.prototype.getBody = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.getName = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.getType = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.setBody = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.setType = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.toString = null;
org.puremvc.haxe.multicore.interfaces.INotification.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.INotification;
org.puremvc.haxe.multicore.patterns = {}
org.puremvc.haxe.multicore.patterns.observer = {}
org.puremvc.haxe.multicore.patterns.observer.Notification = function(name,body,type) { if( name === $_ ) return; {
	this.name = name;
	this.body = body;
	this.type = type;
}}
org.puremvc.haxe.multicore.patterns.observer.Notification.__name__ = ["org","puremvc","haxe","multicore","patterns","observer","Notification"];
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.body = null;
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.getBody = function() {
	return this.body;
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.getName = function() {
	return this.name;
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.getType = function() {
	return this.type;
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.name = null;
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.setBody = function(body) {
	this.body = body;
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.setType = function(type) {
	this.type = type;
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.toString = function() {
	var msg = "Notification Name: " + this.getName();
	msg += "\nBody:" + (this.body == null?"null":this.body.toString());
	msg += "\nType:" + (this.type == null?"null":this.type);
	return msg;
}
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.type = null;
org.puremvc.haxe.multicore.patterns.observer.Notification.prototype.__class__ = org.puremvc.haxe.multicore.patterns.observer.Notification;
org.puremvc.haxe.multicore.patterns.observer.Notification.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotification];
org.puremvc.haxe.multicore.interfaces.IMediator = function() { }
org.puremvc.haxe.multicore.interfaces.IMediator.__name__ = ["org","puremvc","haxe","multicore","interfaces","IMediator"];
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.getMediatorName = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.getViewComponent = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.handleNotification = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.listNotificationInterests = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.onRegister = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.onRemove = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.setViewComponent = null;
org.puremvc.haxe.multicore.interfaces.IMediator.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IMediator;
org.puremvc.haxe.multicore.interfaces.IMediator.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e1 ) {
		{
			var e = $e1;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
					for(var i in o)
						if( o.hasOwnProperty(i) )
							a.push(i);
				;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e2 ) {
			{
				var e = $e2;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
					for(var i in o)
						if( i != "__proto__" )
							a.push(i);
				;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return ((a == b)?0:((((a) > (b))?1:-1)));
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return (t == "string" || (t == "object" && !v.__enum__) || (t == "function" && v.__name__ != null));
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { }
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
org.puremvc.haxe.multicore.interfaces.IObserver = function() { }
org.puremvc.haxe.multicore.interfaces.IObserver.__name__ = ["org","puremvc","haxe","multicore","interfaces","IObserver"];
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.compareNotifyContext = null;
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.notifyObserver = null;
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.setNotifyContext = null;
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.setNotifyMethod = null;
org.puremvc.haxe.multicore.interfaces.IObserver.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IObserver;
org.puremvc.haxe.multicore.patterns.observer.Notifier = function(p) { if( p === $_ ) return; {
	null;
}}
org.puremvc.haxe.multicore.patterns.observer.Notifier.__name__ = ["org","puremvc","haxe","multicore","patterns","observer","Notifier"];
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.facade = null;
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.getFacade = function() {
	if(this.multitonKey == null) throw "multitonKey for this Notifier not yet initialized!";
	return org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance(this.multitonKey);
}
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.initializeNotifier = function(key) {
	this.multitonKey = key;
}
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.multitonKey = null;
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.sendNotification = function(notificationName,body,type) {
	this.getFacade().sendNotification(notificationName,body,type);
}
org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype.__class__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
org.puremvc.haxe.multicore.patterns.observer.Notifier.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = "";
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b += x;
}
StringBuf.prototype.addChar = function(c) {
	this.b += String.fromCharCode(c);
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b += s.substr(pos,len);
}
StringBuf.prototype.b = null;
StringBuf.prototype.toString = function() {
	return this.b;
}
StringBuf.prototype.__class__ = StringBuf;
org.puremvc.haxe.multicore.patterns.observer.Observer = function(notifyMethod,notifyContext) { if( notifyMethod === $_ ) return; {
	this.setNotifyMethod(notifyMethod);
	this.setNotifyContext(notifyContext);
}}
org.puremvc.haxe.multicore.patterns.observer.Observer.__name__ = ["org","puremvc","haxe","multicore","patterns","observer","Observer"];
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.compareNotifyContext = function(object) {
	return object == this.context;
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.context = null;
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.getNotifyContext = function() {
	return this.context;
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.getNotifyMethod = function() {
	return $closure(this,"notify");
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.notify = null;
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.notifyObserver = function(notification) {
	(this.getNotifyMethod())(notification);
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.setNotifyContext = function(notifyContext) {
	this.context = notifyContext;
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.setNotifyMethod = function(notifyMethod) {
	this.notify = notifyMethod;
}
org.puremvc.haxe.multicore.patterns.observer.Observer.prototype.__class__ = org.puremvc.haxe.multicore.patterns.observer.Observer;
org.puremvc.haxe.multicore.patterns.observer.Observer.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IObserver];
org.puremvc.haxe.multicore.interfaces.IView = function() { }
org.puremvc.haxe.multicore.interfaces.IView.__name__ = ["org","puremvc","haxe","multicore","interfaces","IView"];
org.puremvc.haxe.multicore.interfaces.IView.prototype.hasMediator = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.notifyObservers = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.registerMediator = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.registerObserver = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.removeMediator = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.removeObserver = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.removeView = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.retrieveMediator = null;
org.puremvc.haxe.multicore.interfaces.IView.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IView;
org.puremvc.haxe.multicore.core = {}
org.puremvc.haxe.multicore.core.View = function(key) { if( key === $_ ) return; {
	this.multitonKey = key;
	org.puremvc.haxe.multicore.core.View.instanceMap.set(this.multitonKey,this);
	this.mediatorMap = new Hash();
	this.observerMap = new Hash();
	this.initializeView();
}}
org.puremvc.haxe.multicore.core.View.__name__ = ["org","puremvc","haxe","multicore","core","View"];
org.puremvc.haxe.multicore.core.View.getInstance = function(key) {
	if(org.puremvc.haxe.multicore.core.View.instanceMap == null) org.puremvc.haxe.multicore.core.View.instanceMap = new Hash();
	if(!org.puremvc.haxe.multicore.core.View.instanceMap.exists(key)) org.puremvc.haxe.multicore.core.View.instanceMap.set(key,new org.puremvc.haxe.multicore.core.View(key));
	return org.puremvc.haxe.multicore.core.View.instanceMap.get(key);
}
org.puremvc.haxe.multicore.core.View.instanceMap = null;
org.puremvc.haxe.multicore.core.View.prototype.hasMediator = function(mediatorName) {
	return this.mediatorMap.exists(mediatorName);
}
org.puremvc.haxe.multicore.core.View.prototype.initializeView = function() {
	null;
}
org.puremvc.haxe.multicore.core.View.prototype.mediatorMap = null;
org.puremvc.haxe.multicore.core.View.prototype.multitonKey = null;
org.puremvc.haxe.multicore.core.View.prototype.notifyObservers = function(notification) {
	if(this.observerMap.exists(notification.getName())) {
		var iterator = this.observerMap.get(notification.getName()).iterator();
		{ var $it3 = iterator;
		while( $it3.hasNext() ) { var observer = $it3.next();
		observer.notifyObserver(notification);
		}}
	}
}
org.puremvc.haxe.multicore.core.View.prototype.observerMap = null;
org.puremvc.haxe.multicore.core.View.prototype.registerMediator = function(mediator) {
	mediator.initializeNotifier(this.multitonKey);
	this.mediatorMap.set(mediator.getMediatorName(),mediator);
	var interests = mediator.listNotificationInterests();
	if(interests.length > 0) {
		var observer = new org.puremvc.haxe.multicore.patterns.observer.Observer($closure(mediator,"handleNotification"),mediator);
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.registerObserver(interests[i],observer);
			}
		}
	}
	mediator.onRegister();
}
org.puremvc.haxe.multicore.core.View.prototype.registerObserver = function(notificationName,observer) {
	if(!this.observerMap.exists(notificationName)) this.observerMap.set(notificationName,new List());
	this.observerMap.get(notificationName).add(observer);
}
org.puremvc.haxe.multicore.core.View.prototype.removeMediator = function(mediatorName) {
	var mediator = this.mediatorMap.get(mediatorName);
	if(mediator != null) {
		var interests = mediator.listNotificationInterests();
		{
			var _g1 = 0, _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.removeObserver(interests[i],mediator);
			}
		}
		this.mediatorMap.remove(mediatorName);
		mediator.onRemove();
	}
	return mediator;
}
org.puremvc.haxe.multicore.core.View.prototype.removeObserver = function(notificationName,notifyContext) {
	var observers = this.observerMap.get(notificationName);
	{ var $it4 = observers.iterator();
	while( $it4.hasNext() ) { var observer = $it4.next();
	{
		if(observer.compareNotifyContext(notifyContext) == true) {
			observers.remove(observer);
			break;
		}
	}
	}}
	if(observers.isEmpty()) {
		this.observerMap.remove(notificationName);
	}
}
org.puremvc.haxe.multicore.core.View.prototype.removeView = function(key) {
	org.puremvc.haxe.multicore.core.View.instanceMap.remove(key);
}
org.puremvc.haxe.multicore.core.View.prototype.retrieveMediator = function(mediatorName) {
	return this.mediatorMap.get(mediatorName);
}
org.puremvc.haxe.multicore.core.View.prototype.__class__ = org.puremvc.haxe.multicore.core.View;
org.puremvc.haxe.multicore.core.View.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IView];
org.puremvc.haxe.multicore.interfaces.IProxy = function() { }
org.puremvc.haxe.multicore.interfaces.IProxy.__name__ = ["org","puremvc","haxe","multicore","interfaces","IProxy"];
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.getData = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.getProxyName = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.onRegister = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.onRemove = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.setData = null;
org.puremvc.haxe.multicore.interfaces.IProxy.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IProxy;
org.puremvc.haxe.multicore.interfaces.IProxy.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
org.puremvc.haxe.multicore.interfaces.ICommand = function() { }
org.puremvc.haxe.multicore.interfaces.ICommand.__name__ = ["org","puremvc","haxe","multicore","interfaces","ICommand"];
org.puremvc.haxe.multicore.interfaces.ICommand.prototype.execute = null;
org.puremvc.haxe.multicore.interfaces.ICommand.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.ICommand;
org.puremvc.haxe.multicore.interfaces.ICommand.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.INotifier];
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.max = null;
IntIter.prototype.min = null;
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
org.puremvc.haxe.multicore.interfaces.IController = function() { }
org.puremvc.haxe.multicore.interfaces.IController.__name__ = ["org","puremvc","haxe","multicore","interfaces","IController"];
org.puremvc.haxe.multicore.interfaces.IController.prototype.executeCommand = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.hasCommand = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.registerCommand = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.removeCommand = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.removeController = null;
org.puremvc.haxe.multicore.interfaces.IController.prototype.__class__ = org.puremvc.haxe.multicore.interfaces.IController;
org.puremvc.haxe.multicore.core.Controller = function(key) { if( key === $_ ) return; {
	this.multitonKey = key;
	org.puremvc.haxe.multicore.core.Controller.instanceMap.set(this.multitonKey,this);
	this.commandMap = new Hash();
	this.initializeController();
}}
org.puremvc.haxe.multicore.core.Controller.__name__ = ["org","puremvc","haxe","multicore","core","Controller"];
org.puremvc.haxe.multicore.core.Controller.getInstance = function(key) {
	if(org.puremvc.haxe.multicore.core.Controller.instanceMap == null) org.puremvc.haxe.multicore.core.Controller.instanceMap = new Hash();
	if(!org.puremvc.haxe.multicore.core.Controller.instanceMap.exists(key)) org.puremvc.haxe.multicore.core.Controller.instanceMap.set(key,new org.puremvc.haxe.multicore.core.Controller(key));
	return org.puremvc.haxe.multicore.core.Controller.instanceMap.get(key);
}
org.puremvc.haxe.multicore.core.Controller.instanceMap = null;
org.puremvc.haxe.multicore.core.Controller.prototype.commandMap = null;
org.puremvc.haxe.multicore.core.Controller.prototype.executeCommand = function(note) {
	var commandClassRef = this.commandMap.get(note.getName());
	if(commandClassRef == null) return;
	var commandInstance = Type.createInstance(commandClassRef,[]);
	commandInstance.initializeNotifier(this.multitonKey);
	commandInstance.execute(note);
}
org.puremvc.haxe.multicore.core.Controller.prototype.hasCommand = function(notificationName) {
	return this.commandMap.exists(notificationName);
}
org.puremvc.haxe.multicore.core.Controller.prototype.initializeController = function() {
	this.view = org.puremvc.haxe.multicore.core.View.getInstance(this.multitonKey);
}
org.puremvc.haxe.multicore.core.Controller.prototype.multitonKey = null;
org.puremvc.haxe.multicore.core.Controller.prototype.registerCommand = function(notificationName,commandClassRef) {
	if(!this.commandMap.exists(notificationName)) this.view.registerObserver(notificationName,new org.puremvc.haxe.multicore.patterns.observer.Observer($closure(this,"executeCommand"),this));
	this.commandMap.set(notificationName,commandClassRef);
}
org.puremvc.haxe.multicore.core.Controller.prototype.removeCommand = function(notificationName) {
	if(this.hasCommand(notificationName)) {
		this.view.removeObserver(notificationName,this);
		this.commandMap.remove(notificationName);
	}
}
org.puremvc.haxe.multicore.core.Controller.prototype.removeController = function(key) {
	org.puremvc.haxe.multicore.core.Controller.instanceMap.remove(key);
}
org.puremvc.haxe.multicore.core.Controller.prototype.view = null;
org.puremvc.haxe.multicore.core.Controller.prototype.__class__ = org.puremvc.haxe.multicore.core.Controller;
org.puremvc.haxe.multicore.core.Controller.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IController];
org.puremvc.haxe.multicore.patterns.command = {}
org.puremvc.haxe.multicore.patterns.command.SimpleCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.multicore.patterns.observer.Notifier.apply(this,[]);
}}
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.__name__ = ["org","puremvc","haxe","multicore","patterns","command","SimpleCommand"];
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype ) org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype.execute = function(notification) {
	null;
}
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.SimpleCommand;
org.puremvc.haxe.multicore.patterns.command.SimpleCommand.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.ICommand];
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x);
	if(Math.isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
org.puremvc.haxe.multicore.patterns.command.MacroCommand = function(p) { if( p === $_ ) return; {
	org.puremvc.haxe.multicore.patterns.observer.Notifier.apply(this,[]);
	this.subCommands = new List();
	this.initializeMacroCommand();
}}
org.puremvc.haxe.multicore.patterns.command.MacroCommand.__name__ = ["org","puremvc","haxe","multicore","patterns","command","MacroCommand"];
org.puremvc.haxe.multicore.patterns.command.MacroCommand.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype ) org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.addSubCommand = function(commandClassRef) {
	this.subCommands.add(commandClassRef);
}
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.execute = function(notification) {
	while(!this.subCommands.isEmpty()) {
		var commandClassRef = this.subCommands.pop();
		var commandInstance = Type.createInstance(commandClassRef,[]);
		commandInstance.initializeNotifier(this.multitonKey);
		commandInstance.execute(notification);
	}
}
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.initializeMacroCommand = function() {
	null;
}
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.subCommands = null;
org.puremvc.haxe.multicore.patterns.command.MacroCommand.prototype.__class__ = org.puremvc.haxe.multicore.patterns.command.MacroCommand;
org.puremvc.haxe.multicore.patterns.command.MacroCommand.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.ICommand];
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.clear = function() {
	this.h = null;
	this.length = 0;
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.first = function() {
	return (this.h == null?null:this.h[0]);
}
List.prototype.h = null;
List.prototype.isEmpty = function() {
	return (this.h == null);
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return (this.h != null);
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}}
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b += sep;
		s.b += l[0];
		l = l[1];
	}
	return s.b;
}
List.prototype.last = function() {
	return (this.q == null?null:this.q[0]);
}
List.prototype.length = null;
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.q = null;
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b += "{";
	while(l != null) {
		if(first) first = false;
		else s.b += ", ";
		s.b += l[0];
		l = l[1];
	}
	s.b += "}";
	return s.b;
}
List.prototype.__class__ = List;
org.puremvc.haxe.multicore.patterns.proxy = {}
org.puremvc.haxe.multicore.patterns.proxy.Proxy = function(proxyName,data) { if( proxyName === $_ ) return; {
	org.puremvc.haxe.multicore.patterns.observer.Notifier.apply(this,[]);
	this.proxyName = (proxyName != null?proxyName:org.puremvc.haxe.multicore.patterns.proxy.Proxy.NAME);
	if(data != null) this.setData(data);
}}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.__name__ = ["org","puremvc","haxe","multicore","patterns","proxy","Proxy"];
org.puremvc.haxe.multicore.patterns.proxy.Proxy.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype ) org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.data = null;
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.getData = function() {
	return this.data;
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.getProxyName = function() {
	return this.proxyName;
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.onRegister = function() {
	null;
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.onRemove = function() {
	null;
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.proxyName = null;
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.setData = function(data) {
	this.data = data;
}
org.puremvc.haxe.multicore.patterns.proxy.Proxy.prototype.__class__ = org.puremvc.haxe.multicore.patterns.proxy.Proxy;
org.puremvc.haxe.multicore.patterns.proxy.Proxy.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IProxy];
js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	if(c == null) return null;
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e5 ) {
		{
			var e = $e5;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e6 ) {
		{
			var err = $e6;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	c = c.__super__;
	while(c != null) {
		a = a.concat(Reflect.fields(c.prototype));
		c = c.__super__;
	}
	while(a.remove("__class__")) null;
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(v + 1 == v) return ValueType.TFloat;
		if(Math.ceil(v) == v) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	if(a[0] != b[0]) return false;
	{
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
	}
	var e = a.__enum__;
	if(e != b.__enum__ || e == null) return false;
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = (i != null?i.fileName + ":" + i.lineNumber + ": ":"");
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += ((i1 > 0?",":"")) + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e7 ) {
			{
				var e = $e7;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = (o.hasOwnProperty != null);
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return (o.__enum__ == null);
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e8 ) {
		{
			var e = $e8;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o) === o && isFinite(o);
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || (cl == Class && o.__name__ != null) || (cl == Enum && o.__ename__ != null);
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = (document.all != null && window.opera == null);
	js.Lib.isOpera = (window.opera != null);
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}}
	}
	var cca = String.prototype.charCodeAt;
	String.prototype.cca = cca;
	String.prototype.charCodeAt = function(i) {
		var x = cca.call(this,i);
		if(isNaN(x)) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
org.puremvc.haxe.multicore.core.Model = function(key) { if( key === $_ ) return; {
	this.multitonKey = key;
	org.puremvc.haxe.multicore.core.Model.instanceMap.set(this.multitonKey,this);
	this.proxyMap = new Hash();
	this.initializeModel();
}}
org.puremvc.haxe.multicore.core.Model.__name__ = ["org","puremvc","haxe","multicore","core","Model"];
org.puremvc.haxe.multicore.core.Model.getInstance = function(key) {
	if(org.puremvc.haxe.multicore.core.Model.instanceMap == null) org.puremvc.haxe.multicore.core.Model.instanceMap = new Hash();
	if(!org.puremvc.haxe.multicore.core.Model.instanceMap.exists(key)) org.puremvc.haxe.multicore.core.Model.instanceMap.set(key,new org.puremvc.haxe.multicore.core.Model(key));
	return org.puremvc.haxe.multicore.core.Model.instanceMap.get(key);
}
org.puremvc.haxe.multicore.core.Model.instanceMap = null;
org.puremvc.haxe.multicore.core.Model.prototype.hasProxy = function(proxyName) {
	return this.proxyMap.exists(proxyName);
}
org.puremvc.haxe.multicore.core.Model.prototype.initializeModel = function() {
	null;
}
org.puremvc.haxe.multicore.core.Model.prototype.multitonKey = null;
org.puremvc.haxe.multicore.core.Model.prototype.proxyMap = null;
org.puremvc.haxe.multicore.core.Model.prototype.registerProxy = function(proxy) {
	proxy.initializeNotifier(this.multitonKey);
	this.proxyMap.set(proxy.getProxyName(),proxy);
	proxy.onRegister();
}
org.puremvc.haxe.multicore.core.Model.prototype.removeModel = function(key) {
	org.puremvc.haxe.multicore.core.Model.instanceMap.remove(key);
}
org.puremvc.haxe.multicore.core.Model.prototype.removeProxy = function(proxyName) {
	var proxy = this.proxyMap.get(proxyName);
	if(proxy != null) {
		this.proxyMap.remove(proxyName);
		proxy.onRemove();
	}
	return proxy;
}
org.puremvc.haxe.multicore.core.Model.prototype.retrieveProxy = function(proxyName) {
	return this.proxyMap.get(proxyName);
}
org.puremvc.haxe.multicore.core.Model.prototype.__class__ = org.puremvc.haxe.multicore.core.Model;
org.puremvc.haxe.multicore.core.Model.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IModel];
org.puremvc.haxe.multicore.patterns.facade = {}
org.puremvc.haxe.multicore.patterns.facade.Facade = function(key) { if( key === $_ ) return; {
	this.initializeNotifier(key);
	org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.set(this.multitonKey,this);
	this.initializeFacade();
}}
org.puremvc.haxe.multicore.patterns.facade.Facade.__name__ = ["org","puremvc","haxe","multicore","patterns","facade","Facade"];
org.puremvc.haxe.multicore.patterns.facade.Facade.getInstance = function(key) {
	if(org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap == null) org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap = new Hash();
	if(!org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.exists(key)) org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.set(key,new org.puremvc.haxe.multicore.patterns.facade.Facade(key));
	return org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.get(key);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.controller = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.hasCommand = function(notificationName) {
	return this.controller.hasCommand(notificationName);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.hasMediator = function(mediatorName) {
	return this.view.hasMediator(mediatorName);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.hasProxy = function(proxyName) {
	return this.model.hasProxy(proxyName);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeController = function() {
	if(this.controller != null) return;
	this.controller = org.puremvc.haxe.multicore.core.Controller.getInstance(this.multitonKey);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeFacade = function() {
	this.initializeModel();
	this.initializeController();
	this.initializeView();
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeModel = function() {
	if(this.model != null) return;
	this.model = org.puremvc.haxe.multicore.core.Model.getInstance(this.multitonKey);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeNotifier = function(key) {
	this.multitonKey = key;
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.initializeView = function() {
	if(this.view != null) return;
	this.view = org.puremvc.haxe.multicore.core.View.getInstance(this.multitonKey);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.model = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.multitonKey = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.notifyObservers = function(notification) {
	if(this.view != null) this.view.notifyObservers(notification);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.registerCommand = function(notificationName,commandClassRef) {
	this.controller.registerCommand(notificationName,commandClassRef);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.registerMediator = function(mediator) {
	if(this.view != null) this.view.registerMediator(mediator);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.registerProxy = function(proxy) {
	this.model.registerProxy(proxy);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.removeCommand = function(notificationName) {
	this.controller.removeCommand(notificationName);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.removeCore = function(key) {
	this.model.removeModel(key);
	this.view.removeView(key);
	this.controller.removeController(key);
	org.puremvc.haxe.multicore.patterns.facade.Facade.instanceMap.remove(key);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.removeMediator = function(mediatorName) {
	var mediator = null;
	if(this.view != null) mediator = this.view.removeMediator(mediatorName);
	return mediator;
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.removeProxy = function(proxyName) {
	var proxy = null;
	if(this.model != null) proxy = this.model.removeProxy(proxyName);
	return proxy;
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.retrieveMediator = function(mediatorName) {
	return this.view.retrieveMediator(mediatorName);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.retrieveProxy = function(proxyName) {
	return this.model.retrieveProxy(proxyName);
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.sendNotification = function(notificationName,body,type) {
	this.notifyObservers(new org.puremvc.haxe.multicore.patterns.observer.Notification(notificationName,body,type));
}
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.view = null;
org.puremvc.haxe.multicore.patterns.facade.Facade.prototype.__class__ = org.puremvc.haxe.multicore.patterns.facade.Facade;
org.puremvc.haxe.multicore.patterns.facade.Facade.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IFacade];
org.puremvc.haxe.multicore.patterns.mediator = {}
org.puremvc.haxe.multicore.patterns.mediator.Mediator = function(mediatorName,viewComponent) { if( mediatorName === $_ ) return; {
	org.puremvc.haxe.multicore.patterns.observer.Notifier.apply(this,[]);
	this.mediatorName = (mediatorName != null?mediatorName:org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME);
	this.viewComponent = viewComponent;
}}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.__name__ = ["org","puremvc","haxe","multicore","patterns","mediator","Mediator"];
org.puremvc.haxe.multicore.patterns.mediator.Mediator.__super__ = org.puremvc.haxe.multicore.patterns.observer.Notifier;
for(var k in org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype ) org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype[k] = org.puremvc.haxe.multicore.patterns.observer.Notifier.prototype[k];
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.getMediatorName = function() {
	return this.mediatorName;
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.getViewComponent = function() {
	return this.viewComponent;
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.handleNotification = function(notification) {
	null;
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.listNotificationInterests = function() {
	return [];
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.mediatorName = null;
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.onRegister = function() {
	null;
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.onRemove = function() {
	null;
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.setViewComponent = function(viewComponent) {
	this.viewComponent = viewComponent;
}
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.viewComponent = null;
org.puremvc.haxe.multicore.patterns.mediator.Mediator.prototype.__class__ = org.puremvc.haxe.multicore.patterns.mediator.Mediator;
org.puremvc.haxe.multicore.patterns.mediator.Mediator.__interfaces__ = [org.puremvc.haxe.multicore.interfaces.IMediator];
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e9 ) {
		{
			var e = $e9;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.h = null;
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}}
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b += "{";
	var it = this.keys();
	{ var $it10 = it;
	while( $it10.hasNext() ) { var i = $it10.next();
	{
		s.b += i;
		s.b += " => ";
		s.b += Std.string(this.get(i));
		if(it.hasNext()) s.b += ", ";
	}
	}}
	s.b += "}";
	return s.b;
}
Hash.prototype.__class__ = Hash;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]}
	Dynamic = { __name__ : ["Dynamic"]}
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]}
	Class = { __name__ : ["Class"]}
	Enum = { }
	Void = { __ename__ : ["Void"]}
}
{
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
	Math.__name__ = ["Math"];
}
{
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
org.puremvc.haxe.multicore.patterns.observer.Notifier.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
org.puremvc.haxe.multicore.patterns.proxy.Proxy.NAME = "Proxy";
js.Lib.document = document;
js.Lib.window = window;
js.Lib.onerror = null;
org.puremvc.haxe.multicore.patterns.mediator.Mediator.NAME = "Mediator";
