/*
This file is part of classjs-tutorial. It is subject to the licence terms in the COPYRIGHT file found in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs-tutorial/master/COPYRIGHT. No part of classjs-tutorial, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the COPYRIGHT file.
Copyright © 2015 The developers of classjs-tutorial. See the COPYRIGHT file in the top-level directory of this distribution and at https://raw.githubusercontent.com/KisanHub/classjs-tutorial/master/COPYRIGHT.
*/


ClassModule.Object.extend
(
	module,
	
	function BaseClass(message, int)
	{
		this.super(BaseClass)
		this.message = message
		this.int = int
	},
	
	function getName(arg)
	{
		return getName.className + ':' + arg
	},
	
	function getSomething()
	{
		return 10
	}
)