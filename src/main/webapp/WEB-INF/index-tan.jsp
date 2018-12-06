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
    </select>
    <p id="exerciseStatement"></p>
</div>

<div id="main" class="margin-bottom">
    <div id="blocklyDiv"></div>
    <div id="instructions">
        <p>Instructions pour lancer le programme sur votre carte:</p>
        <ol>
            <li>Une fois que vous souhaitez tester votre programme, cliquez sur le bouton "Lancer le programme"</li>
            <li>Cela va faire télécharger un fichier intitulé "programme.hex"</li>
            <li>Avec ce fichier téléchargé, vous devez glisser-déposer le fichier "programme.hex" dans l'espace de stockage intitulé "MICROBIT"</li>
            <li>Une lumière orange doit clignoter pendant le chargement du programme.</li>
            <li>Lorsque le programme est chargé, vous pourrez voir le résultat de votre programme sur la carte.</li>
        </ol>
    </div>
</div>

<button onclick="runProgram()">Lancer le programme</button>
<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
    <category name="Affichage" colour="#6d5ba5">
        <block type="show_number"></block>
        <block type="show_leds"></block>
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
    var isDev = true;
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
    if (isDev) console.log(workspaceState)
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
        <%--if (isDev) console.log(test);--%>
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
        if (isDev) console.log("CHANGE EXERCISE: " , json);
        blockEvent+=1;
        workspace.clear();
        if (isDev) console.log(exerciseList[0]);
        document.querySelector("#exerciseStatement").innerHTML = exerciseList[(obj[obj.selectedIndex].value)-1]["content"];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                if (isDev) console.log(xhttp.responseText);
                loadXmlToWorkspace(xhttp.responseText);
            }
        };
        xhttp.open("POST", "${pageContext.request.contextPath}/currentExercise", json, true);
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.send(JSON.stringify(json));
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
            //if (isDev) console.log(mousePosition);
            postrequest("${pageContext.request.contextPath}/mousePosition", mousePosition);
        }
        setTimeout(sendMousePos,100);
    }

    // Called for each event on block, and sent to the server to be logged
    function mirrorEvent(primaryEvent) {
        var url;
        var json;
        json = primaryEvent.toJson();
        if (isDev) console.log(json);
        var url;

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
                if (isDev) console.log(url);
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
                    if (isDev) console.log(url);
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
                if (isDev) console.log("var_rename");
                break;
            // default event, for the event not used
            default:
                if (isDev) console.log("ERROR : UNKNOW EVENT ", primaryEvent.type);
                return;
        }

        json.userID = document.getElementById("userId").innerHTML;
        var e = document.getElementById("exerciselist");
        json.currentExerciseID = e.options[e.selectedIndex].value; //exerciselist work but i don't know why? need to redefine it?
        json.time= new Date().toISOString().slice(0, 19).replace('T',' ');
        if (isDev) console.log("This is the JSON request: " + json);

        if (isDev) console.log(json,url);
        postrequest(url,json);
    }


    const postrequest = async function(url,content){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST",url,true);
        xmlhttp.setRequestHeader("Content-Type","application/json");
        xmlhttp.send(JSON.stringify(content));
    }


    // download python code as hex file
    const runProgram = async function(){
       logExerciseRun();
       var json = {}
       var script = Blockly.Python.workspaceToCode(workspace);
       json.script = script;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                if (isDev) console.log(xhttp.responseText);
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
            blob = new Blob([data],{type:'application/octet-stream'});
            url = window.URL.createObjectURL(blob);
            a= document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download','programme.hex');
            a.click();
        }
    }
</script>
</body>
</html>
