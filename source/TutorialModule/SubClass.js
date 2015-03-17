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