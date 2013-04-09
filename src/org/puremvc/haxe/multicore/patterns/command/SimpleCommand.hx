/* 
 PureMVC MultiCore haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC MultiCore - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */

package org.puremvc.haxe.multicore.patterns.command;

import org.puremvc.haxe.multicore.interfaces.INotification;
import org.puremvc.haxe.multicore.interfaces.ICommand;
import org.puremvc.haxe.multicore.interfaces.INotifier;
import org.puremvc.haxe.multicore.patterns.observer.Notifier;

/**
 * A base [ICommand] implementation.
 * 
 * <p>Your subclass should override the [execute] 
 * method where your business logic will handle the [INotification].</p>
 */
#if haxe3
class SimpleCommand extends Notifier implements ICommand
#else
class SimpleCommand extends Notifier, implements ICommand
#end
{
	/**
	 * Fulfill the use-case initiated by the given [INotification].
	 * 
	 * <p>In the Command Pattern, an application use-case typically
	 * begins with some user action, which results in an [INotification] being broadcast, which 
	 * is handled by business logic in the [execute] method of an [ICommand].</p>
	 */
	public function execute( notification: INotification ) : Void
	{

	}
								
}