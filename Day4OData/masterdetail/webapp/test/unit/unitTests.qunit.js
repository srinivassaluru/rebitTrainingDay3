/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/rebit/ui5/masterdetail/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});