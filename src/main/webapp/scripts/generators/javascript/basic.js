'use strict';

goog.provide('Blockly.JavaScript.basic');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['show_number'] = function(block) {

    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    if (value_name == null) value_name = '';
    var numeric_value = value_name.toString();
    // TODO: Assemble JavaScript into code variable.
    var code = 'addNumber(' + value_name + ');\n';
    return code;
};

Blockly.JavaScript['show_leds'] = function(block) { /// not finished
    var checkbox_led1_1 = block.getFieldValue('LED1_1') == 'TRUE';
    var checkbox_led1_2 = block.getFieldValue('LED1_2') == 'TRUE';
    var checkbox_led1_3 = block.getFieldValue('LED1_3') == 'TRUE';
    var checkbox_led1_4 = block.getFieldValue('LED1_4') == 'TRUE';
    var checkbox_led1_5 = block.getFieldValue('LED1_5') == 'TRUE';
    var checkbox_led2_1 = block.getFieldValue('LED2_1') == 'TRUE';
    var checkbox_led2_2 = block.getFieldValue('LED2_2') == 'TRUE';
    var checkbox_led2_3 = block.getFieldValue('LED2_3') == 'TRUE';
    var checkbox_led2_4 = block.getFieldValue('LED2_4') == 'TRUE';
    var checkbox_led2_5 = block.getFieldValue('LED2_5') == 'TRUE';
    var checkbox_led3_1 = block.getFieldValue('LED3_1') == 'TRUE';
    var checkbox_led3_2 = block.getFieldValue('LED3_2') == 'TRUE';
    var checkbox_led3_3 = block.getFieldValue('LED3_3') == 'TRUE';
    var checkbox_led3_4 = block.getFieldValue('LED3_4') == 'TRUE';
    var checkbox_led3_5 = block.getFieldValue('LED3_5') == 'TRUE';
    var checkbox_led4_1 = block.getFieldValue('LED4_1') == 'TRUE';
    var checkbox_led4_2 = block.getFieldValue('LED4_2') == 'TRUE';
    var checkbox_led4_3 = block.getFieldValue('LED4_3') == 'TRUE';
    var checkbox_led4_4 = block.getFieldValue('LED4_4') == 'TRUE';
    var checkbox_led4_5 = block.getFieldValue('LED4_5') == 'TRUE';
    var checkbox_led5_1 = block.getFieldValue('LED5_1') == 'TRUE';
    var checkbox_led5_2 = block.getFieldValue('LED5_2') == 'TRUE';
    var checkbox_led5_3 = block.getFieldValue('LED5_3') == 'TRUE';
    var checkbox_led5_4 = block.getFieldValue('LED5_4') == 'TRUE';
    var checkbox_led5_5 = block.getFieldValue('LED5_5') == 'TRUE';

    var leds = [
        [checkbox_led1_1, checkbox_led2_1, checkbox_led3_1, checkbox_led4_1, checkbox_led5_1],
        [checkbox_led1_2, checkbox_led2_2, checkbox_led3_2, checkbox_led4_2, checkbox_led5_2],
        [checkbox_led1_3, checkbox_led2_3, checkbox_led3_3, checkbox_led4_3, checkbox_led5_3],
        [checkbox_led1_4, checkbox_led2_4, checkbox_led3_4, checkbox_led4_4, checkbox_led5_4],
        [checkbox_led1_5, checkbox_led2_5, checkbox_led3_5, checkbox_led4_5, checkbox_led5_5]];

    return "addMatrix(" + JSON.stringify(leds) + "); \n";
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

Blockly.JavaScript['show_icon'] = function(block){

    return "addMatrix(icons." + block.getFieldValue("ICON").toLowerCase() + ");\n";
};