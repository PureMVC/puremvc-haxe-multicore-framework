/* 
 PureMVC MultiCore haXe Port by Marco Secchi <marco.secchi@puremvc.org>
 PureMVC MultiCore - Copyright(c) 2006-08 Futurescale, Inc., Some rights reserved. 
 Your reuse is governed by the Creative Commons Attribution 3.0 License 
 */
package org.puremvc.haxe.multicore.core;

import org.puremvc.haxe.multicore.interfaces.IModel;
import org.puremvc.haxe.multicore.interfaces.IProxy;

#if haxe3
import haxe.ds.StringMap;
#else
private typedef StringMap<T> = Hash<T>;
#end
	
/**
 * A Singleton [IModel] implementation.
 * 
 * <p>In PureMVC, the [Model] class provides access to model objects (Proxies) by named lookup.</p> 
 * 
 * <p>The [Model] assumes these responsibilities:</p>
 * <ul>
 * <li>Maintain a cache of [IProxy] instances.</li>
 * <li>Provide methods for registering, retrieving, and removing [IProxy] instances.</li>
 * </ul>
 * 
 * <p>Your application must register [IProxy] instances with the [Model]. Typically, you use an 
 * [ICommand] to create and register [IProxy] instances once the [Facade] has initialized the Core 
 * actors.</p>
 */
class Model implements IModel
{
	/**
	 * Constructor. 
	 * 
	 * <p>This [IModel] implementation is a Multiton,
	 * so you should not call the constructor 
	 * directly, but instead call the static Multiton
	 * Factory method [Model.getInstance( multitonKey )]</p>
	 */
	private function new( key: String )
	{
		multitonKey = key;
		instanceMap.set( multitonKey, this );
		proxyMap = new StringMap();	
		initializeModel();
	}
		
	/**
	 * Initialize the Singleton [Model] instance.
	 * 
	 * <p>Called automatically by the constructor, this is your opportunity to initialize the Singleton
	 * instance in your subclass without overriding the constructor.</p>
	 */
	private function initializeModel(): Void 
	{
	}
				
	/**
	 * [Model] Multiton Factory method.
	 */
	public static function getInstance( key: String ): IModel 
	{
		if ( instanceMap == null ) instanceMap = new StringMap();
		if ( !instanceMap.exists( key ) ) instanceMap.set( key, new Model( key ) );
		return instanceMap.get( key );
	}

	/**
	 * Register an [IProxy] with the [Model].
	 */
	public function registerProxy( proxy: IProxy ): Void
	{
		proxy.initializeNotifier( multitonKey );
		proxyMap.set( proxy.getProxyName(), proxy );
		proxy.onRegister();
	}

	/**
	 * Retrieve an [IProxy] from the [Model].
	 */
	public function retrieveProxy( proxyName: String ): IProxy
	{
		return proxyMap.get( proxyName );
	}

	/**
	 * Check if a [Proxy] is registered
	 */
	public function hasProxy( proxyName:String ) : Bool
	{
		return proxyMap.exists( proxyName );
	}

	/**
	 * Remove an [IProxy] from the [Model].
	 */
	public function removeProxy( proxyName: String ): IProxy
	{
		var proxy: IProxy = proxyMap.get( proxyName );
		if ( proxy != null )
		{
			proxyMap.remove( proxyName );
			proxy.onRemove();			
		}
		return proxy;
	}

	/**
	 * Remove an IModel instance
	 */
	public function removeModel( key: String ): Void
	{
		instanceMap.remove( key );
	}

	// Mapping of proxyNames to [IProxy] instances
	private var proxyMap: StringMap<IProxy>;

	// Singleton instance
	private static var instanceMap: StringMap<IModel>;
	
	// The Multiton Key for this Core
	private var multitonKey: String;

		
}