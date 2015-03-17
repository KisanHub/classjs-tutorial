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