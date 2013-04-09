/* 
 PureMVC MultiCore haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC MultiCore - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.multicore.patterns.mediator;

import org.puremvc.haxe.multicore.interfaces.INotification;
import org.puremvc.haxe.multicore.interfaces.INotifier;
import org.puremvc.haxe.multicore.interfaces.IMediator;
import org.puremvc.haxe.multicore.patterns.observer.Notifier;
	
/**
 * A base [IMediator] implementation. 
 */
#if haxe3
class Mediator extends Notifier implements IMediator
#else
class Mediator extends Notifier, implements IMediator
#end
{

	/**
	 * The name of the [Mediator]. 
	 * 
	 * <p>Typically, a [Mediator] will be written to serve
	 * one specific control or group controls and so,
	 * will not have a need to be dynamically named.</p>
	 */
	public static var NAME: String = 'Mediator';
		
	/**
	 * Constructor.
	 */
	public function new( ?mediatorName: String = null, ?viewComponent: Dynamic = null )
	{
		super();
		this.mediatorName = if( mediatorName != null ) mediatorName else NAME;
		this.viewComponent = viewComponent;	
	}

	/**
	 * Get the name of the [Mediator].
	 * <p>Override in subclass!</p>
	 */		
	public function getMediatorName(): String 
	{	
		return mediatorName;
	}

	/**
	 * Set the [IMediator]'s view component.
	 */
	public function setViewComponent( viewComponent: Dynamic ): Void 
	{
		this.viewComponent = viewComponent;
	}

	/**
	 * Get the [Mediator]'s view component.
	 */		
	public function getViewComponent(): Dynamic
	{	
		return viewComponent;
	}

	/**
	 * List the [INotification] names this
	 * [Mediator] is interested in being notified of.
	 */
	public function listNotificationInterests(): Array<String>
	{
		return [];
	}

	/**
	 * Handle [INotification]s.
	 * 
	 * <P>Typically this will be handled in a switch statement,
	 * with one 'case' entry per [INotification]
	 * the [Mediator] is interested in.
	 */ 
	public function handleNotification( notification: INotification ): Void
	{

	}

	/**
	 * Called by the View when the Mediator is registered
	 */ 
	public function onRegister(): Void
	{
	}

	/**
	 * Called by the View when the Mediator is removed
	 */ 
	public function onRemove( ): Void
	{
		
	}

	// the mediator name
	private var mediatorName: String;
		
	// The view component
	private var viewComponent: Dynamic;
}