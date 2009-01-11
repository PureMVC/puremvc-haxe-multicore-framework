/* 
 PureMVC MultiCore haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC MultiCore - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.multicore.patterns.observer;

import org.puremvc.haxe.multicore.interfaces.IFacade;
import org.puremvc.haxe.multicore.interfaces.INotifier;
import org.puremvc.haxe.multicore.patterns.observer.Notification;
import org.puremvc.haxe.multicore.patterns.facade.Facade;
	
/**
 * A Base [INotifier] implementation.
 * 
 * <p>[MacroCommand, Command, Mediator] and [Proxy] 
 * all have a need to send [Notifications].</p>
 *
 * <p>The [INotifier] interface provides a common method called
 * [sendNotification] that relieves implementation code of 
 * the necessity to actually construct [Notifications].</p>
 * 
 * <p>The [Notifier] class, which all of the above mentioned classes
 * extend, provides an initialized reference to the [Facade]
 * Singleton, which is required for the convienience method
 * for sending [Notifications], but also eases implementation as these
 * classes have frequent [Facade] interactions and usually require
 * access to the facade anyway.</p>
 */
class Notifier implements INotifier
{
	public function new()
	{
	}

	/**
	 * Send an [INotification]s.
	 * 
	 * <p>Keeps us from having to construct new notification 
	 * instances in our implementation code.</p>
	 */ 
	public function sendNotification( notificationName: String, ?body: Dynamic = null, ?type: String = null ): Void 
	{
		facade.sendNotification( notificationName, body, type );
	}

	/**
	 * Initialize this INotifier instance.
	 *
	 * <p>This is how a Notifier gets its multitonKey. 
	 * Calls to sendNotification or to access the
	 * facade will fail until after this method 
	 * has been called.</p>
	 * 
	 * <p>Mediators, Commands or Proxies may override 
	 * this method in order to send notifications
	 * or access the Multiton Facade instance as
	 * soon as possible. They CANNOT access the facade
	 * in their constructors, since this method will not
	 * yet have been called.</p> 
	 */
	public function initializeNotifier( key: String ): Void
	{
		multitonKey = key;
	}

	public var facade( getFacade, null ): IFacade;

	// Return the Multiton Facade instance 
	private function getFacade(): IFacade
	{
		if ( multitonKey == null ) throw MULTITON_MSG;
		return Facade.getInstance( multitonKey );
	}
	
	// The Multiton Key for this app
	private var multitonKey : String;

	// Message Constants
	private static inline var MULTITON_MSG: String = "multitonKey for this Notifier not yet initialized!";
	
}