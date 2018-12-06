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
    <svg version="1.0" viewBox="0 0 500 408" class="sim" x="0px" y="0px" width="100%" height="100%">
        <defs>
            <filter id="ledglow" x="-75%" y="-75%" width="300%" height="300%">
                <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken"></feMorphology>
                <feGaussianBlur stdDeviation="5" in="thicken" result="blurred"></feGaussianBlur>
                <feFlood flood-color="rgb(255, 17, 77)" result="glowColor"></feFlood>
                <feComposite in="glowColor" in2="blurred" operator="in" result="ledglow_colored"></feComposite>
                <feMerge>
                    <feMergeNode in="ledglow_colored"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
            <filter id="filterglow" x="-5%" y="-5%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="5" result="glow"></feGaussianBlur>
                <feMerge>
                    <feMergeNode in="glow"></feMergeNode>
                    <feMergeNode in="glow"></feMergeNode>
                    <feMergeNode in="glow"></feMergeNode>
                </feMerge>
            </filter>
            <linearGradient id="gradient-pin-0" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-5" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-6" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-7" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-8" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-9" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-10" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-11" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-12" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-13" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-14" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-15" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-16" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-17" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-18" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-19" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-20" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-21" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-22" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-23" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
            <linearGradient id="gradient-pin-24" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(212, 175, 55);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
                <stop offset="100%" style="stop-color: rgb(255, 85, 0);"></stop>
            </linearGradient>
        </defs>
        <g>
            <path class="sim-board" d="M498,31.9C498,14.3,483.7,0,466.1,0H31.9C14.3,0,0,14.3,0,31.9v342.2C0,391.7,14.3,406,31.9,406h434.2c17.6,0,31.9-14.3,31.9-31.9V31.9z M14.3,206.7c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8C19.2,204.6,17,206.7,14.3,206.7z M486.2,206.7c-2.7,0-4.8-2.2-4.8-4.8c0-2.72.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8C491,204.6,488.8,206.7,486.2,206.7z"></path>
            <path class="sim-display" d="M333.8,310.3H165.9c-8.3,0-15-6.7-15-15V127.5c0-8.3,6.7-15,15-15h167.8c8.3,0,15,6.7,15,15v167.8C348.8,303.6,342.1,310.3,333.8,310.3z" style="fill: rgb(0, 0, 0);"></path>
            <polygon class="sim-theme" points="115,56.7 173.1,0 115,0" style="fill: rgb(58, 255, 179);"></polygon>
            <path class="sim-theme" d="M114.2,0H25.9C12.1,2.1,0,13.3,0,27.7v83.9L114.2,0z" style="fill: rgb(58, 255, 179);"></path>
            <polygon class="sim-theme" points="173,27.9 202.5,0 173,0" style="fill: rgb(58, 255, 179);"></polygon>
            <polygon class="sim-theme" points="54.1,242.4 54.1,274.1 22.4,274.1" style="fill: rgb(58, 255, 179);"></polygon>
            <polygon class="sim-theme" points="446.2,164.6 446.2,132.8 477.9,132.8" style="fill: rgb(58, 255, 179);"></polygon>
            <rect class="sim-led-back" x="154" y="113" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="152" y="111" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(0,0)</title></rect>
            <rect class="sim-led-back" x="200" y="113" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="198" y="111" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(1,0)</title></rect>
            <rect class="sim-led-back" x="246" y="113" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="244" y="111" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(2,0)</title></rect>
            <rect class="sim-led-back" x="292" y="113" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="290" y="111" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(3,0)</title></rect>
            <rect class="sim-led-back" x="338" y="113" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="336" y="111" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(4,0)</title></rect>
            <rect class="sim-led-back" x="154" y="157" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="152" y="155" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(0,1)</title></rect>
            <rect class="sim-led-back" x="200" y="157" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="198" y="155" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(1,1)</title></rect>
            <rect class="sim-led-back" x="246" y="157" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="244" y="155" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(2,1)</title></rect>
            <rect class="sim-led-back" x="292" y="157" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="290" y="155" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(3,1)</title></rect>
            <rect class="sim-led-back" x="338" y="157" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="336" y="155" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(4,1)</title></rect>
            <rect class="sim-led-back" x="154" y="201" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="152" y="199" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(0,2)</title></rect>
            <rect class="sim-led-back" x="200" y="201" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="198" y="199" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(1,2)</title></rect>
            <rect class="sim-led-back" x="246" y="201" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="244" y="199" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(2,2)</title></rect>
            <rect class="sim-led-back" x="292" y="201" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="290" y="199" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(3,2)</title></rect>
            <rect class="sim-led-back" x="338" y="201" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="336" y="199" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(4,2)</title></rect>
            <rect class="sim-led-back" x="154" y="245" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="152" y="243" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(0,3)</title></rect>
            <rect class="sim-led-back" x="200" y="245" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="198" y="243" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(1,3)</title></rect>
            <rect class="sim-led-back" x="246" y="245" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="244" y="243" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(2,3)</title></rect>
            <rect class="sim-led-back" x="292" y="245" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="290" y="243" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(3,3)</title></rect>
            <rect class="sim-led-back" x="338" y="245" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="336" y="243" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(4,3)</title></rect>
            <rect class="sim-led-back" x="154" y="289" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="152" y="287" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(0,4)</title></rect>
            <rect class="sim-led-back" x="200" y="289" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="198" y="287" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(1,4)</title></rect>
            <rect class="sim-led-back" x="246" y="289" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="244" y="287" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(2,4)</title></rect>
            <rect class="sim-led-back" x="292" y="289" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="290" y="287" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(3,4)</title></rect>
            <rect class="sim-led-back" x="338" y="289" width="10" height="20" rx="2" ry="2" style="fill: rgb(32, 32, 32);"></rect>
            <rect class="sim-led" x="336" y="287" width="14" height="24" rx="3" ry="3" style="filter: url(&quot;#ledglow&quot;); fill: rgb(255, 127, 127); opacity: 0;"><title>(4,4)</title></rect>
            <g class="sim-head no-drag">
                <circle cx="258" cy="75" r="100" fill="transparent"></circle>
                <path class="sim-theme sim-theme-glow" d="M269.9,50.2L269.9,50.2l-39.5,0v0c-14.1,0.1-24.6,10.7-24.6,24.8c0,13.9,10.4,24.4,24.3,24.7v0h39.6c14.2,0,24.8-10.6,24.8-24.7C294.5,61,284,50.3,269.9,50.2 M269.7,89.2L269.7,89.2l-39.3,0c-7.7-0.1-14-6.4-14-14.2c0-7.8,6.4-14.2,14.2-14.2h39.1c7.8,0,14.2,6.4,14.2,14.2C283.9,82.9,277.5,89.2,269.7,89.2" style="fill: rgb(58, 255, 179);"></path>
                <path class="sim-theme sim-theme-glow" d="M230.6,69.7c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3C235.9,72.1,233.5,69.7,230.6,69.7" style="fill: rgb(58, 255, 179);"></path><path class="sim-theme sim-theme-glow" d="M269.7,80.3c2.9,0,5.3-2.4,5.3-5.3c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3C264.4,77.9,266.8,80.3,269.7,80.3" style="fill: rgb(58, 255, 179);"></path>
            </g>
            <text x="310" y="100" class="sim-text"></text>
            <path class="sim-pin sim-pin-touch" d="M16.5,341.2c0,0.4-0.1,0.9-0.1,1.3v60.7c4.1,1.7,8.6,2.7,12.9,2.7h34.4v-64.7h0.3c0,0,0-0.1,0-0.1c0-13-10.6-23.6-23.7-23.6C27.2,317.6,16.5,328.1,16.5,341.2z M21.2,341.6c0-10.7,8.7-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3c0,10.7-8.6,19.3-19.3,19.3C29.9,360.9,21.2,352.2,21.2,341.6z" fill="url(#gradient-pin-0)">
                <title>P0, ANALOG IN</title>
            </path>
            <path class="sim-pin sim-pin-touch" d="M139.1,317.3c-12.8,0-22.1,10.3-23.1,23.1V406h46.2v-65.6C162.2,327.7,151.9,317.3,139.1,317.3zM139.3,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C158.6,351.5,150,360.1,139.3,360.1z" fill="url(#gradient-pin-1)">
                <title>P1, ANALOG IN</title>
            </path>
            <path class="sim-pin sim-pin-touch" d="M249,317.3c-12.8,0-22.1,10.3-23.1,23.1V406h46.2v-65.6C272.1,327.7,261.8,317.3,249,317.3z M249.4,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C268.7,351.5,260.1,360.1,249.4,360.1z" fill="url(#gradient-pin-2)">
                <title>P2, ANALOG IN</title>
            </path>
            <path class="sim-pin" d="M0,357.7v19.2c0,10.8,6.2,20.2,14.4,25.2v-44.4H0z" fill="url(#gradient-pin-3)">
                <title>P3, ANALOG IN, LED Col 1</title>
            </path>
            <rect x="66.7" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-4)">
                <title>P4, ANALOG IN, LED Col 2</title>
            </rect>
            <rect x="79.1" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-5)">
                <title>P5, BUTTON A</title>
            </rect>
            <rect x="91.4" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-6)">
                <title>P6, LED Col 9</title>
            </rect>
            <rect x="103.7" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-7)">
                <title>P7, LED Col 8</title>
            </rect>
            <rect x="164.3" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-8)">
                <title>P8</title>
            </rect>
            <rect x="176.6" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-9)">
                <title>P9, LED Col 7</title>
            </rect>
            <rect x="188.9" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-10)">
                <title>P10, ANALOG IN, LED Col 3</title>
            </rect>
            <rect x="201.3" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-11)">
                <title>P11, BUTTON B</title>
            </rect><rect x="213.6" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-12)">
            <title>P12, RESERVED ACCESSIBILITY</title>
        </rect>
            <rect x="275.2" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-13)">
                <title>P13, SPI - SCK</title>
            </rect>
            <rect x="287.5" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-14)">
                <title>P14, SPI - MISO</title>
            </rect>
            <rect x="299.8" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-15)">
                <title>P15, SPI - MOSI</title>
            </rect>
            <rect x="312.1" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-16)">
                <title>P16, SPI - Chip Select</title>
            </rect>
            <rect x="324.5" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-17)">
                <title>P17, +3v3</title>
            </rect>
            <rect x="385.1" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-18)">
                <title>P18, +3v3</title>
            </rect>
            <rect x="397.4" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-19)">
                <title>P19, I2C - SCL</title>
            </rect>
            <rect x="409.7" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-20)">
                <title>P20, I2C - SDA</title>
            </rect>
            <rect x="422" y="356.7" width="10" height="50" class="sim-pin" fill="url(#gradient-pin-21)">
                <title>GND</title>
            </rect>
            <path class="sim-pin" d="M483.6,402c8.2-5,14.4-14.4,14.4-25.1v-19.2h-14.4V402z" fill="url(#gradient-pin-22)">
                <title>GND</title>
            </path>
            <path class="sim-pin" d="M359.9,317.3c-12.8,0-22.1,10.3-23.1,23.1V406H383v-65.6C383,327.7,372.7,317.3,359.9,317.3z M360,360.1c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C379.3,351.5,370.7,360.1,360,360.1z" fill="url(#gradient-pin-23)">
                <title>+3v3</title>
            </path>
            <path class="sim-pin" d="M458,317.6c-13,0-23.6,10.6-23.6,23.6c0,0,0,0.1,0,0.1h0V406H469c4.3,0,8.4-1,12.6-2.7v-60.7c0-0.4,0-0.9,0-1.3C481.6,328.1,471,317.6,458,317.6z M457.8,360.9c-10.7,0-19.3-8.6-19.3-19.3c0-10.7,8.6-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3C477.1,352.2,468.4,360.9,457.8,360.9z" fill="url(#gradient-pin-24)">
                <title>GND</title>
            </path>
            <text class="sim-text-pin" x="67" y="345"></text>
            <text class="sim-text-pin" x="165" y="345"></text>
            <text class="sim-text-pin" x="275" y="345"></text>
            <g class="sim-button-group" focusable="true" tabindex="0" role="button" aria-label="A" style="fill: rgb(151, 151, 151);">
                <rect class="sim-button-outer" x="25.9" y="176.4" rx="4" ry="4" width="56.2" height="56.2"></rect>
                <circle class="sim-button-nut" cx="35.9" cy="186.4" r="6"></circle>
                <circle class="sim-button-nut" cx="35.9" cy="222.60000000000002" r="6"></circle>
                <circle class="sim-button-nut" cx="72.1" cy="222.60000000000002" r="6"></circle>
                <circle class="sim-button-nut" cx="72.1" cy="186.4" r="6"></circle>
            </g>
            <path class="sim-button" d="M69.7,203.5c0,8.7-7,15.7-15.7,15.7s-15.7-7-15.7-15.7c0-8.7,7-15.7,15.7-15.7S69.7,194.9,69.7,203.5" style="fill: rgb(0, 0, 0);"></path>
            <g class="sim-button-group" focusable="true" tabindex="0" role="button" aria-label="B" style="fill: rgb(151, 151, 151);">
                <rect class="sim-button-outer" x="418.1" y="176.4" rx="4" ry="4" width="56.2" height="56.2"></rect>
                <circle class="sim-button-nut" cx="428.1" cy="186.4" r="6"></circle>
                <circle class="sim-button-nut" cx="428.1" cy="222.60000000000002" r="6"></circle>
                <circle class="sim-button-nut" cx="464.3" cy="222.60000000000002" r="6"></circle>
                <circle class="sim-button-nut" cx="464.3" cy="186.4" r="6"></circle>
            </g>
            <path class="sim-button" d="M461.9,203.5c0,8.7-7,15.7-15.7,15.7c-8.7,0-15.7-7-15.7-15.7c0-8.7,7-15.7,15.7-15.7C454.9,187.8,461.9,194.9,461.9,203.5" style="fill: rgb(0, 0, 0);"></path>
            <g class="sim-button-group" focusable="true" tabindex="0" role="button" aria-label="A+B" style="visibility: hidden; fill: rgb(51, 51, 51);">
                <rect class="sim-button-outer" x="417" y="250" rx="4" ry="4" width="56.2" height="56.2"></rect>
                <circle class="sim-button-nut" cx="427" cy="260" r="6"></circle>
                <circle class="sim-button-nut" cx="427" cy="296.2" r="6"></circle>
                <circle class="sim-button-nut" cx="463.2" cy="296.2" r="6"></circle>
                <circle class="sim-button-nut" cx="463.2" cy="260" r="6"></circle>
            </g>
            <circle class="sim-button" cx="446" cy="278" r="16.5" style="visibility: hidden; fill: rgb(0, 0, 0);"></circle>
            <path class="sim-label" d="M35.7,376.4c0-2.8,2.1-5.1,5.5-5.1c3.3,0,5.5,2.4,5.5,5.1v4.7c0,2.8-2.2,5.1-5.5,5.1c-3.3,0-5.5-2.4-5.5-5.1V376.4zM43.3,376.4c0-1.3-0.8-2.3-2.2-2.3c-1.3,0-2.1,1.1-2.1,2.3v4.7c0,1.2,0.8,2.3,2.1,2.3c1.3,0,2.2-1.1,2.2-2.3V376.4z"></path>
            <path class="sim-label" d="M136.2,374.1c2.8,0,3.4-0.8,3.4-2.5h2.9v14.3h-3.4v-9.5h-3V374.1z"></path><path class="sim-label" d="M248.6,378.5c1.7-1,3-1.7,3-3.1c0-1.1-0.7-1.6-1.6-1.6c-1,0-1.8,0.6-1.8,2.1h-3.3c0-2.6,1.8-4.6,5.1-4.6c2.6,0,4.9,1.3,4.9,4.3c0,2.4-2.3,3.9-3.8,4.7c-2,1.3-2.5,1.8-2.5,2.9h6.1v2.7h-10C244.8,381.2,246.4,379.9,248.6,378.5z"></path>
            <path class="sim-button-label" d="M48.1,270.9l-0.6-1.7h-5.1l-0.6,1.7h-3.5l5.1-14.3h3.1l5.2,14.3H48.1z M45,260.7l-1.8,5.9h3.5L45,260.7z"></path>
            <path class="sim-button-label" d="M449.1,135.8h5.9c3.9,0,4.7,2.4,4.7,3.9c0,1.8-1.4,2.9-2.5,3.2c0.9,0,2.6,1.1,2.6,3.3c0,1.5-0.8,4-4.7,4h-6V135.8zM454.4,141.7c1.6,0,2-1,2-1.7c0-0.6-0.3-1.7-2-1.7h-2v3.4H454.4z M452.4,144.1v3.5h2.1c1.6,0,2-1,2-1.8c0-0.7-0.4-1.8-2-1.8H452.4z"></path>
            <path class="sim-label" d="M352.1,381.1c0,1.6,0.9,2.5,2.2,2.5c1.2,0,1.9-0.9,1.9-1.9c0-1.2-0.6-2-2.1-2h-1.3v-2.6h1.3c1.5,0,1.9-0.7,1.9-1.8c0-1.1-0.7-1.6-1.6-1.6c-1.4,0-1.8,0.8-1.8,2.1h-3.3c0-2.4,1.5-4.6,5.1-4.6c2.6,0,5,1.3,5,4c0,1.6-1,2.8-2.1,3.2c1.3,0.5,2.3,1.6,2.3,3.5c0,2.7-2.4,4.3-5.2,4.3c-3.5,0-5.5-2.1-5.5-5.1H352.1z"></path>
            <path class="sim-label" d="M368.5,385.9h-3.1l-5.1-14.3h3.5l3.1,10.1l3.1-10.1h3.6L368.5,385.9z"></path>
            <path class="sim-label" d="M444.4,378.3h7.4v2.5h-1.5c-0.6,3.3-3,5.5-7.1,5.5c-4.8,0-7.5-3.5-7.5-7.5c0-3.9,2.8-7.5,7.5-7.5c3.8,0,6.4,2.3,6.6,5h-3.5c-0.2-1.1-1.4-2.2-3.1-2.2c-2.7,0-4.1,2.3-4.1,4.7c0,2.5,1.4,4.7,4.4,4.7c2,0,3.2-1.2,3.4-2.7h-2.5V378.3z"></path>
            <path class="sim-label" d="M461.4,380.9v-9.3h3.3v14.3h-3.5l-5.2-9.2v9.2h-3.3v-14.3h3.5L461.4,380.9z"></path>
            <path class="sim-label" d="M472.7,371.6c4.8,0,7.5,3.5,7.5,7.2s-2.7,7.2-7.5,7.2h-5.3v-14.3H472.7z M470.8,374.4v8.6h1.8c2.7,0,4.2-2.1,4.2-4.3s-1.6-4.3-4.2-4.3H470.8z"></path>
        </g>
        <g></g>
        <g></g>
    </svg>
</div>

<button onclick="runProgram()">Lancer le programme</button>
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
    var isDev = false;
    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox')
    });

    icons = {
        heart: [
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0]],
        heart_small: [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]],
        happy: [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]],
        sad: [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1]],
        confused: [
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1]],
        angry: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1]],
        asleep: [
            [0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0]],
        surprised: [
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0]],
        silly: [
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1]],
        fabulous: [
            [1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0]],
        meh: [
            [1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0]],
        yes: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [0, 1, 0, 0, 0]],
        no: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1]],
        triangle: [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]],
        triangle_left: [
            [1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0],
            [1, 1, 1, 1, 1]],
        chessboard: [
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0]],
        diamond: [
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0]],
        diamond_small: [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]],
        square: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1]],
        square_small: [
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0]],
        scissors: [
            [1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1]],
        tshirt: [
            [1, 1, 0, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0]],
        rollerskate: [
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 0, 1, 0]],
        duck: [
            [0, 1, 1, 0, 0],
            [1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0]],
        house: [
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0]],
        tortoise: [
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0]],
        butterfly: [
            [1, 1, 0, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1]],
        stickfigure: [
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1]],
        ghost: [
            [0, 1, 1, 1, 0],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1]],
        sword: [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0]],
        giraffe: [
            [1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0]],
        skull: [
            [0, 1, 1, 1, 0],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0]],
        umbrella: [
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [1, 0, 1, 0, 0],
            [1, 1, 1, 0, 0]],
        snake: [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 1, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0]],
        rabbit: [
            [1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 1, 1, 0]],
        cow: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0]],
        music_crotchet: [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 0, 0],
            [1, 1, 1, 0, 0]],
        music_quaver: [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1],
            [1, 1, 1, 0, 0],
            [1, 1, 1, 0, 0]],
        pitchfork: [
            [1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0]],
        target: [
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 1, 0, 1, 1],
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0]]
    }

    Blockly.ContextMenu= false; /// provoque une erreur dans la console pour chaques cliq droit, ignorer?

    var blockEvent = 0; // used to prevent the logging when changing workspace from javascript
    var currentGroup = null;
    var currentEx = 1;
    var hexFileHeader = '${runtime}';

    workspace.addChangeListener(mirrorEvent);
    var workspaceState = '${workspace}';
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

        blockEvent+=1;
        workspace.clear();
        document.querySelector("#exerciseStatement").innerHTML = exerciseList[(obj[obj.selectedIndex].value)-1]["content"];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                loadXmlToWorkspace(xhttp.responseText);
            }
        };
        xhttp.open("POST", "${pageContext.request.contextPath}/currentExercise", json, true);
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.send(JSON.stringify(json));
        <%--var url = "${pageContext.request.contextPath}/pageChange/?currentExerciseID="+ obj[obj.selectedIndex].value;--%>
        // xhttp.open("GET",url, true);
        // xhttp.send();

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
                startSimulation();
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
            a.setAttribute('download','download.hex');
            a.click();
        }
    }


    var ledMatrix = getLedMatrix();
    if (isDev) console.log(ledMatrix);
    function getLedMatrix(){
        var led =[];
        var temp;
        for (var i=0;i<5;i++){
            temp =[]
            for (var j=0;j<5;j++){
                temp.push(document.querySelectorAll('.sim-led')[i*5+j]);
            }
            led.push(temp);
        }
        return led;
    }

    // ALL the following code is for the simulation - May not be used
    var SET_INTERVAL = 200;
    var led = [];
    showNumber();
    function showNumber(){
        if (!led[0])
        {
            setTimeout(showNumber,SET_INTERVAL*5);
            if (isDev) console.log(null);
            return null;
        }
        if ((typeof led[0]) == (typeof 3))
        {
            var temp = led[0];
            console.log("here",temp);
            led.shift();
            show(emptyLed);
            setTimeout(showNumber,temp);
            return temp;
        }
        if (led[0][0].length == 5)
        {

            var temp = led[0];
            led.shift();
            show(temp);
            setTimeout(showNumber,SET_INTERVAL*5);
            return temp;
        }
        var temp = [];
        for (var i=0;i<5;i++)
        {
            temp.push(led[0][i].slice(0,5));
            led[0][i].shift();
        }

        //console.log(temp);
        show(temp);
        setTimeout(showNumber,SET_INTERVAL);
        return temp;
    }

    function show(tab){ /// test if not number or if number is infinity
        if (isDev) console.log("show");
        if (isDev) console.log("show",tab);
        for (var i=0;i<tab.length;i++){
            for (var j=0;j<tab.length;j++){
                if (tab[i][j] == 1)
                {
                    ledMatrix[i][j].style.opacity = 1+"";
                    ledMatrix[i][j].style.transformBox ='fill-box';
                    ledMatrix[i][j].style.transformOrigin =' 50% 50%';
                    ledMatrix[i][j].style.transform = "scale("+1+")";
                }
                else
                {
                    ledMatrix[i][j].style.opacity = 0+"";
                }
            }

        }
    }

    function addNumber(i){
        if (led.length != 0)
            led.push(300);
        led.push(intToArray(i));
    }

    function addMatrix(arr){
        if (led.length != 0)
            led.push(300);
        led.push(arr);
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

    var negativeToLed = [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]];
    var dotToLed = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0]];
    var emptyLed = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];


    function intToArray(val){
        var temp;
        var array =[[],[],[],[],[]];
        // return an empty array if the val is not defined, can be changed to something else if needed
        console.log(val);
        if (val == null)
            return emptyLed;
        console.log("2",val);
        var str = val.toString();
        for (var i=0;i<str.length;i++){
            if (str.charAt(i) == "-"){
                temp = negativeToLed;
            }
            else if ((str.charAt(i) == ",") || (str.charAt(i) == ".")){
                temp = dotToLed;
            }
            else{
                temp = intToLed[parseInt(str.charAt(i))];
            }
            for (var j=0;j<5;j++){
                array[j] = array[j].concat(temp[j]);
            }
        }
        return array;
    }

    function stopSimulation(){
        led = [];
        show(emptyLed);
    }

    function startSimulation() {
        window.LoopTrap = 100000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if((--window.LoopTrap == 0) || (led.length >10000)) throw "Infinite loop.";\n';
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        console.log(code);
        stopSimulation();
        try {
            eval(code);
        } catch (e) {
            if (e != "Infinite loop.")
                alert(e);
        }
    }

</script>
</body>
</html>
