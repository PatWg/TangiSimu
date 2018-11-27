'use strict';

goog.provide('Blockly.JavaScript.basic');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['show_number'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'basic.showNumber(' + value_name + ');\n';
    return code;
};

Blockly.JavaScript['show_leds'] = function(block) { /// not finished



    return "";
};

Blockly.JavaScript['pause'] = function(block) {
    if (block.getField('VALUE')) {
        var num = Number(block.getFieldValue('VALUE'));
    }
    else{
        var num = 0;
    }

    var code = "pause("+num.toString()+");\n";

    return code;
};