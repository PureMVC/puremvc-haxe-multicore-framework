/* 
 PureMVC MultiCore haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC MultiCore - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.multicore.interfaces;

/**
 * The interface definition for a PureMVC Command.
 */
#if haxe3
interface ICommand extends INotifier
#else
interface ICommand implements INotifier
#end
{
	/**
 	 * Execute the [ICommand]'s logic to handle a given [INotification].
 	 */
	function execute( notification: INotification ): Void;
}