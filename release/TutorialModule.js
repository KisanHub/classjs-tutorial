/*
@license Format: http://www.debian.org/doc/packaging-manuals/copyright-format/1.0/
Comment: Distribution Compilation Copyright and License
Copyright: Copyright © 2015, KisanHub <sachin@kisanhub.com>
           Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
License: MIT
 The MIT License (MIT)
 .
 Copyright © 2015, KisanHub <sachin@kisanhub.com>
 Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
 .
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 .
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 .
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

Files: *
Copyright: Copyright © 2015, KisanHub <sachin@kisanhub.com>
           Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
License: MIT
 The MIT License (MIT)
 .
 Copyright © 2015, KisanHub <sachin@kisanhub.com>
 Copyright © 2015, Raphael Cohn <raphael.cohn@stormmq.com>
 .
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 .
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 .
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

*/


var TutorialModule = (function(module)
{
return module;
}(TutorialModule || {}));

// /TutorialModule/BaseClass.js 

"use strict";
TutorialModule = (function(module){
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
return module;
}(TutorialModule || {}));
// /TutorialModule/SubClass.js 

"use strict";
TutorialModule = (function(module){
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
		return "SubClass(" + this.getId() + ") extends " + this.supercall(getName)
	},

	function getSomething()
	{
		return 2;
	}
)
return module;
}(TutorialModule || {}));
