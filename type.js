"use strict";

{
	const TMI_BEHAVIOR_CLASS = SDK.Behaviors.Pozzanghera_TurretMenuItem;
	
	TMI_BEHAVIOR_CLASS.Type = class TurretMenuItemType extends SDK.IBehaviorTypeBase
	{
		constructor(sdkPlugin, iBehaviorType)
		{
			super(sdkPlugin, iBehaviorType);
		}
	};
}