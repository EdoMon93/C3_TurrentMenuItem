"use strict";

{
	const TMI_BEHAVIOR_CLASS = SDK.Behaviors.Pozzanghera_TurretMenuItem;
	
	TMI_BEHAVIOR_CLASS.Instance = class TurretMenuItemInstance extends SDK.IBehaviorInstanceBase
	{
		constructor(sdkBehType, behInst)
		{
			super(sdkBehType, behInst);
		}
		
		Release()
		{
		}
		
		OnCreate()
		{
		}
		
		OnPropertyChanged(id, value)
		{
		}
		
		LoadC2Property(name, valueString)
		{
			return false;		// not handled
		}
	};
}