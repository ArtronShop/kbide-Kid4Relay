Blockly.JavaScript['kid4relay_set'] = function(block) {
  var value_ch = Blockly.JavaScript.valueToCode(block, 'ch', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  
  var WIRE_OBJ = 'Wire';
	var SDA_PIN = 21, SCL_PIN = 22; 

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino' || board_name == 'openkb') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
	code += '#EXTINC #include <Kid4Relay.h> #END\n';
	code += '#EXTINC #include <Wire.h> #END\n';
	code += `#EXTINC Kid4Relay relay(&${WIRE_OBJ}); #END\n`;
	code += `#SETUP ${WIRE_OBJ}.begin(${SDA_PIN}, ${SCL_PIN}); #END\n`;
	code += '#SETUP relay.init(); #END\n';
	code += `relay.set(${value_ch}, ${value_value});\n`;
	return code;
};
