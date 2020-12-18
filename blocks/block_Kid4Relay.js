Blockly.Blocks['kid4relay_set'] = {
	init: function() {
		this.jsonInit({
			"type": "kid4relay_set",
			"message0": "Kid4Relay set channel %1 to %2",
			"args0": [{
				"type": "input_value",
				"name": "ch",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "value",
				"check": [
					"Number",
					"Boolean"
				]
			  }
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 225,
			"tooltip": "set relay on channel 1 - 4 to on (1) or off (0)",
			"helpUrl": "https://www.ioxhop.com/p/1130"
		});
	}
};
