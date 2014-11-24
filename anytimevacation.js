var AnytimeVacation_Stian = {};

(function()
{
	AnytimeVacation_Stian.modPath = GDT.getRelativePath();	

	var ready = function()
	{
		AnytimeVacation.init();
	};

	var error = function()
	{
		alert("Failed to initialize AnytimeVacation by Darkly/Stian");
	};
	
	var fs = require("fs");
	var filestoload = ["/inside/anytimevacation.js"];
	var langfile = "/lang/" + GameManager.getPreferredLanguage() + ".js";
	
	if (fs.existsSync(langfile))
		filestoload.push(langfile);
	
	GDT.loadJs(filestoload, ready, error);
})();
