"use strict";

{
	////////////////////////////////////////////
	// The behavior ID is how Construct identifies different kinds of behaviors.
	// *** NEVER CHANGE THE BEHAVIOR ID! ***
	// If you change the behavior ID after releasing the behavior, Construct will think it is an entirely different
	// behavior and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE BEHAVIOR.
	// Only the behavior name is displayed in the editor, so to rename your behavior change the name but NOT the ID.
	// If you want to completely replace a behavior, make it deprecated (it will be hidden but old projects keep working),
	// and create an entirely new behavior with a different behavior ID.
	const BEHAVIOR_ID = "Pozzanghera_TurretMenuItem";
	////////////////////////////////////////////
	
	const BEHAVIOR_VERSION = "0.1.0.0";
	const BEHAVIOR_CATEGORY = "other";
	
	const TMI_BEHAVIOR_CLASS = SDK.Behaviors.Pozzanghera_TurretMenuItem = class TurretMenuItemBehavior extends SDK.IBehaviorBase
	{
		constructor()
		{
			super(BEHAVIOR_ID);
			
			SDK.Lang.PushContext("behaviors." + BEHAVIOR_ID.toLowerCase());
			
			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(BEHAVIOR_VERSION);
			this._info.SetCategory(BEHAVIOR_CATEGORY);
			this._info.SetAuthor("Pozzanghera");
			this._info.SetHelpUrl(lang(".help-url"));
			this._info.SetIsOnlyOneAllowed(true);
			
			// Only support the newer C3 runtime
			this._info.SetSupportedRuntimes(["c3"]);
			
			SDK.Lang.PushContext(".properties");
			
			// Define properties 
			this._info.SetProperties([
				new SDK.PluginProperty("integer", "test-property", 0)
			]);
			
			SDK.Lang.PopContext();	// .properties
			
			SDK.Lang.PopContext();
		}
	};
	
	TMI_BEHAVIOR_CLASS.Register(BEHAVIOR_ID, TMI_BEHAVIOR_CLASS);
}