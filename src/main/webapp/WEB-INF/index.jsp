<%-- Created by IntelliJ IDEA.
  User: patrick
  Date: 20/11/2018
  Time: 14:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Apprend à programmer!</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
    <link rel='stylesheet' href='css/style.css'/>
    <script src="scripts/blockly_compressed.js"></script>
    <script src="scripts/python_compressed.js"></script>
    <script src="scripts/javascript_compressed.js"></script>
    <script src="scripts/blocks_compressed.js"></script>
    <script src="scripts/msg/js/fr.js"></script>

</head>
<body>
<div class="margin-bottom">
    <p>Bonjour ${user.fname} ${user.lname} !<br/>
    Identifiant à mémoriser : <span id="userId">${user.userid}</span></p>
    <select id="exerciselist" onchange="changeExercise(this)">
        <%--<c:forEach items="${exercises}" var="element">--%>
            <%--<option>${element.title}</option>--%>
        <%--</c:forEach>--%>
    </select>
    <p id="exerciseStatement"></p>
</div>

<div id="main" class="margin-bottom">
    <div id="blocklyDiv"></div>
    <textarea id="pythonArea" disabled></textarea>
</div>

<!-- TODO: Change the following line to manage simulation and tangible object -->
<button onclick="startDownload()">Lancer le programme</button>
<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
    <category name="Affichage" colour="#6d5ba5">
        <block type="show_number"></block>
        <block type="show_leds"></block>
        <block type="pause"></block>
        <block type="show_icon"></block>
    </category>
    <category name="Math" colour="#5C68A6">
        <block type="math_number"></block>
        <block type="math_arithmetic"></block>
        <block type="math_single"></block>
        <block type="math_number_property"></block>
        <block type="math_modulo"></block>
        <block type="math_random_int"></block>
        <block type="math_random_float"></block>
    </category>
    <sep></sep>
    <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>
    <category name="Logique" colour="#5C81A6">
        <block type="logic_boolean"></block>
        <block type="controls_if"></block>
        <block type="controls_ifelse"></block>
        <block type="logic_negate"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
    </category>
    <category name="Boucle" colour="#5CA65C">
        <block type="controls_repeat_ext"></block>
        <block type="controls_while"></block>
    </category>

</xml>


<script>
    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox')
    });

    Blockly.ContextMenu= false; /// provoque une erreur dans la console pour chaques cliq droit, ignorer?

    var blockEvent = 0; // used to prevent the logging when changing workspace from javascript
    var currentGroup = null;
    var currentEx = 1;
    var hexFileHeader = '${runtime}';

    workspace.addChangeListener(mirrorEvent);
    var workspaceState = '${workspace}';
    console.log(workspaceState)
    loadXmlToWorkspace(workspaceState);
    var exerciseList = ${exercises};
    loadExerciseList(exerciseList);

    function loadExerciseList(exerciseList) {
        var exerciseSelector = document.querySelector("#exerciselist");
        for (var i = 0; i < exerciseList.length; i++) {
            var option = document.createElement('option');
            option.value = exerciseList[i]["exerciseid"].toString();
            option.text = exerciseList[i]["title"];
            exerciseSelector.appendChild(option);
        }
        document.querySelector("#exerciseStatement").innerHTML = exerciseList[0]["content"];
    }

    // Load the workspace from xml code
    function loadXmlToWorkspace(wholexml){
        <%--var test = new XMLSerializer().serializeToString(${workspace});--%>
        <%--console.log(test);--%>
        if (wholexml == null)
            return;
        blockEvent +=1;
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(wholexml),workspace);
    }

    // Send an xmlhttprequest to the server when the exercise is changed
    function changeExercise(obj){ /// a fixer

        var json = {};
        json.workspacexml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
        json.userID = document.getElementById("userId").innerHTML;
        json.currentExerciseID = currentEx;
        var e = document.getElementById("exerciselist");
        currentEx =  e.options[e.selectedIndex].value;
        json.time =new Date().toISOString().slice(0, 19).replace('T',' ');
        json.action= "exerciseChangement";
        json.newExerciseID = obj[obj.selectedIndex].value;
        console.log("CHANGE EXERCISE: " , json);
        blockEvent+=1;
        workspace.clear();
        console.log(exerciseList[0]);
        document.querySelector("#exerciseStatement").innerHTML = exerciseList[(obj[obj.selectedIndex].value)-1]["content"];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                loadXmlToWorkspace(xhttp.responseText);
            }
        };
        xhttp.open("POST", "${pageContext.request.contextPath}/currentExercise", json, true);
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.send(JSON.stringify(json));
        <%--var url = "${pageContext.request.contextPath}/pageChange/?currentExerciseID="+ obj[obj.selectedIndex].value;--%>
        // xhttp.open("GET",url, true);
        // xhttp.send();
        console.log(json.workspacexml);
        // Save the state of the previous exercise (before switching exercise)
        <%--postrequest("${pageContext.request.contextPath}/currentExercise",json);--%>
    }

    var mousePosition = {};
    var previousPosition = {};
    document.onmousemove = getMousePos;
    setTimeout(sendMousePos,100);

    function getMousePos(e){
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
        mousePosition.time = new Date().toISOString().slice(0, 19).replace('T',' ');
    }

    function sendMousePos(){
        if ((mousePosition.x != previousPosition.x) && (mousePosition.y != previousPosition.y)){

            previousPosition.x = mousePosition.x;
            previousPosition.y = mousePosition.y;

            mousePosition.userID = document.getElementById("userId").innerHTML;
            var e = document.getElementById("exerciselist");
            mousePosition.currentExerciseID = e.options[e.selectedIndex].value;
            //console.log(mousePosition);
            postrequest("${pageContext.request.contextPath}/mousePosition", mousePosition);
        }
        setTimeout(sendMousePos,100);
    }

    // Called for each event on block, and sent to the server to be logged
    function mirrorEvent(primaryEvent) {
        var url;
        var json;
        json = primaryEvent.toJson();
        console.log(json);
        var url;

        document.getElementById("pythonArea").value = Blockly.Python.workspaceToCode(workspace);

        switch(primaryEvent.type){
            // ui event : category, click and select
            case "ui":
                url = "${pageContext.request.contextPath}/categoryEvent";
                json.group = (json.group || null);
                json.type += json.element;
                json.newValue = ((json.newValue || json.blockId) || null );
                break;
            // create event : when a block is created
            case "create":
                url = "${pageContext.request.contextPath}/createBlock";
                console.log(url);
                json.xml = json.xml.split('type="')[1].split('"')[0];
                break;
            // move event : when a block is moved
            // combine event : when a block has a new parent
            case "move":
                url = "${pageContext.request.contextPath}/moveBlock";
                if (primaryEvent.newParentId != null){
                    json.type = "combine";
                    json.newInputName = (json.newInputName || null);
                    url = "${pageContext.request.contextPath}/combineBlock";
                    console.log(url);
                }
                break;
            // change event : when a block is changed
            case "change":
                url = "${pageContext.request.contextPath}/changeBlock";
                break;
            // delete event : when a block is deleted
            case "delete":
                url = "${pageContext.request.contextPath}/deleteBlock";
                break;
            // when a new variable is created
            case "var_create":
                url = "${pageContext.request.contextPath}/varEvent";
                json.group = null;
                break;
            // when a variable is removed
            case "var_delete":
                url = "${pageContext.request.contextPath}/varEvent";
                break;
            // when a variable is renamed
            case "var_rename":
                url = "${pageContext.request.contextPath}/varEvent";
                json.varName = json.newName;
                console.log("var_rename");
                break;
            // default event, for the event not used
            default:
                console.log("ERROR : UNKNOW EVENT ", primaryEvent.type);
                return;
        }

        json.userID = document.getElementById("userId").innerHTML;
        var e = document.getElementById("exerciselist");
        json.currentExerciseID = e.options[e.selectedIndex].value; //exerciselist work but i don't know why? need to redefine it?
        json.time= new Date().toISOString().slice(0, 19).replace('T',' ');
        console.log("This is the JSON request: " + json);

        console.log(json,url);
        postrequest(url,json);
    }


    const postrequest = async function(url,content){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST",url,true);
        xmlhttp.setRequestHeader("Content-Type","application/json");
        xmlhttp.send(JSON.stringify(content));
    }


    // download python code as hex file
    const startDownload = async function(){
       logExerciseRun();
       var json = {}
       var script = Blockly.Python.workspaceToCode(workspace);
       json.script = script;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                download(xhttp.responseText);
            }
        };
        xhttp.open("POST", "${pageContext.request.contextPath}/hexlify", json, true);
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.send(JSON.stringify(json));

       // var data = hexFileHeader.substr(0,hexFileHeader.length-31) + pythonToHex() + hexFileHeader.substr(-31);
       // download(data);

       function logExerciseRun() {
           var json = {};
           json.workspacexml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
           json.userID = document.getElementById("userId").innerHTML;
           json.currentExerciseID = currentEx;
           json.time = new Date().toISOString().slice(0, 19).replace('T', ' ');
           json.action = "exerciseRun";
           var url = "${pageContext.request.contextPath}/runExercise";
           postrequest(url, json);
       }

        function download(data){
            const blob = new Blob([data],{type:'application/octet-stream'});
            const url = window.URL.createObjectURL(blob);
            const a= document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download','download.hex');
            a.click();
        }
    }


    /* // ALL the following code is for the simulation - May not be used
    var led = [];
    //showNumber();
    function showNumber(){
        if (!led[0])
        {
            setTimeout(showNumber,5000);
            console.log(null);
            return null;
        }
        if (led[0][0].length == 5)
        {
            var temp = led[0];
            led.shift();
            console.log(temp);
            setTimeout(showNumber,5000);
            return temp;
        }
        var temp = [];
        for (var i=0;i<5;i++)
        {
            temp.push(led[0][i].slice(0,5));
            led[0][i].shift();
        }
        console.log(temp);
        setTimeout(showNumber,1000);
        return temp;
    }

    function addNumber(i){
        led.push(intToArray(i));
    }
    var intToLed=[[[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0],[0,1,1,0,0]], //0
              [[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0]], //1
              [[1,1,1,0,0],[0,0,0,1,0],[0,1,1,0,0],[1,0,0,0,0],[1,1,1,1,0]], //2
              [[1,1,1,1,0],[0,0,0,1,0],[0,0,1,0,0],[1,0,0,1,0],[0,1,1,0,0]], //3
              [[0,0,1,1,0],[0,1,0,1,0],[1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0]], //4
              [[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]], //5
              [[0,0,0,1,0],[0,0,1,0,0],[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0]], //6
              [[1,1,1,1,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]], //7
              [[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0]], //8
              [[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0],[0,0,1,0,0],[0,1,0,0,0]]]; //9
    function intToArray(val){
        var temp;
        var array =[[],[],[],[],[]];
        for (var i=0;i<val.toString().length;i++){
            temp = parseInt(val.toString().charAt(i));
            for (var j=0;j<5;j++){
                array[j] = array[j].concat(intToLed[temp][j]);
            }
        }
        return array;
    }
    */
</script>
</body>
</html>
