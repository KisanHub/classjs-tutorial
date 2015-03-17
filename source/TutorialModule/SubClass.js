/*
This file is part of classjs-tutorial. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs-tutorial/master/COPYRIGHT. No part of classjs-tutorial, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs-tutorial. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs-tutorial/master/COPYRIGHT.
*/


module.BaseClass.extend
(
	module,
	
	function SubClass(message)
	{
		this.super(SubClass, message, 45)
		// or BaseClass.$.constructor.call(this, message, 45)
		console.log("SubClass ctor:" + message)
	},
	
	function getName()
	{
		var supercallResult = this.supercall(getName, 'hello')
		// or getName.$.getName.call(this, 'hello')  - this syntax allows access to any method, not just getName, eg the super class's
		// getSomething is accessible via getName.$.getSomething.call(this) 
		return "SubClass(" + this.getSomething() + ") extends " + this.supercall(getName)
	},

	function getSomething()
	{
		return 2;
	}
)