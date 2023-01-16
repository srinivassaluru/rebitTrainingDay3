/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comrebitui5/s4hanatrainingodata/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
