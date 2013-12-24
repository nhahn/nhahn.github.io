---
layout: post
title:  Greenlight
date:   2013-11-26 21:46:56
summary: Greenlight is a system created for my Information Systems capstone project. It harnesses this idea of daylight harvesting -- adjusting artificial lighting in accordance with natural lighting -- wirelessly. By connecting together 3 components - a dimmer, a sensor, and a backend server - we created a system that has a potential for saving up to 70% of lighting costs. 
image: /assets/img/greenlight.png
categories: portfolio
code: http://greenlightbeta.com
collaborators: 
    - Mike Ferraco: ferraco.mike@gmail.com
    - Dillon Grove: dillongrove@gmail.com
    - Jonathan Miller: jmill1030@gmail.com
---

<div data-magellan-expedition="fixed">
    <dl class="sub-nav">
        <dd data-magellan-arrival="intro"><a href="#intro">Introduction</a></dd>
        <dd data-magellan-arrival="hardware"><a href="#hardware">Hardware</a></dd>
        <dd data-magellan-arrival="dashboard"><a href="#dashboard">Dashboard</a></dd>
        <dd data-magellan-arrival="back"><a href="#back">Backend</a></dd>
        <dd data-magellan-arrival="discuss"><a href="#discuss">Value Calculations</a></dd>
    </dl>
</div>

 
<a name="intro"></a>
<h3 data-magellan-destination="intro">Introduction</h3>

The use of natural light in commercial settings is undervalued. Most large industrial parks and university campuses rely solely on artificial sources to provide light for their rooms. Artificial light at these locations is often emitted in excess of what is necessary in an indoor space. This excess represents an entirely preventable waste of energy. Windows in these rooms offer an abundance of natural light during the day and this can help brighten a room. However, the artificial lights are usually on at full power whether the sun is shining bright or hiding behind the clouds. 

<ul class="small-block-grid-3">
    <li><img class="th" src="/assets/img/greenlight/intro_1.png"></li>
    <li><img class="th" src="/assets/img/greenlight/intro_2.png"></li>
    <li><img class="th" src="/assets/img/greenlight/intro_3.png"></li>
</ul>

<div class="row">
    <div class="medium-8 columns">
        <img class="th" src="/assets/img/greenlight/greenlight_intro.jpg">
    </div>
    <div class="medium-4 columns">
    <p>Our group has set out to solve this problem by developing an information system that automates artificial light sources to enhance comfort and reduce energy consumption. This system will dim the artificial lights when the sunlight entering the room is brighter. As the sunlight in the room decreases, the artificial lights in the room will brighten, compensating for this loss of natural light. This system can save energy due to the decrease in artificial light when sunlight is present. </p>
    </div>
</div>

<a name="hardware"></a>
<h3 data-magellan-destination="hardware">Hardware</h3>

#####Light Sensor
The light sensor records the amount of sunlight that is entering the room from outside. This sensor is responsible for sending this reading to the server so that a calculation can be made to determine how much the lights in the room need to be dimmed or brightened.

#####Dimmer
The dimmer is responsible for controlling the amount of electricity that is sent to the lights in the room. It is placed in the wall, bridging the gap between the light switch and the lights in the room. Depending on the amount of sunlight entering the room, this dimmer increases or decreases the amount of electricity that flows to the lights.


#####Electric Imp
The Electric Imp is a Wi-Fi chip that is connected to both the light sensor and the dimmer. The Imp connected to the light sensor is responsible for transferring the natural light reading to the server over the Wi-Fi network. The Imp connected to the dimmer is responsible for receiving the reading from the server that tells the dimmer how much it should alter the electricity transfer to the lights. In addition, this Imp responds to the server with the amount of energy transferred to the lights through the dimmer so that this reading can be depicted in the web interface.

<ul class="small-block-grid-3">
    <li><img class="th" src="/assets/img/greenlight/dimmer_v1_2.jpg"></li>
    <li><img class="th" src="/assets/img/greenlight/dimmer_v2_layout.png"></li>
    <li><img class="th" src="/assets/img/greenlight/dimmer_v2_picture.jpg"></li>
</ul>

<a name="dashboard"></a>
<h3 data-magellan-destination="dashboard">Dashboard</h3>

<ul class="small-block-grid-2">
    <li><img class="th" src="/assets/img/greenlight/dash_v1.png"></li>
    <li><img class="th" src="/assets/img/greenlight/dash_v2.png"></li>
</ul>

<a name="back"></a>
<h3 data-magellan-destination="back">Backend</h3>

<img class="th" src="/assets/img/greenlight/sensor_reading_workflow.jpg">

The above workflow is how the Greenlight system works from the sensor, bot the backend server, and back out to the dimmer. 

<div class="row">
    <div class="medium-4 columns"> <p>
The image to the right details how our backend server is configured and deployed. We utilize a hot-deploy setup with Passenger and NGINX so we can easily push out new updates. Additionally, we use capistrano to deploy it all, so any of our team members can push out new versions to the server whenever we have a new release. 
    </p>
    </div>
    <div class="medium-8 columns">
        <img class="th" src="/assets/img/greenlight/server_setup.png">
    </div>
</div>

<a name="discuss"></a>
<h3 data-magellan-destination="discuss">Value Calculations</h3>

<table >
 <tr >
  <td >
  <p class=MsoNormal><b>Equal Probability</b></p>
  </td>
  <td >
  <p class=MsoNormal><b>Low</b></p>
  </td>
  <td >
  <p class=MsoNormal><b>Normal</b></p>
  </td>
  <td >
  <p class=MsoNormal><b>High</b></p>
  </td>
  <td ></td>
  <td ></td>
 </tr>
 <tr >
  <td >
  <p class=MsoNormal>33.00%</p>
  </td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td></td>
  <td ></td>
 </tr>
 <tr >
  <td >
  <p class=MsoNormal>Installation</p>
  </td>
  <td >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(200,000.00)</p>
  </td>
  <td >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(274,720.65)</p>
  </td>
  <td >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(325,000.00)</p>
  </td>
  <td ></td>
  <td ></td>
 </tr>
 <tr >
  <td >
  <p class=MsoNormal>Savings</p>
  </td>
  <td >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$200,000.00 </p>
  </td>
  <td >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$548,891.64 </p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$600,000.00 </p>
  </td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal><span class=SpellE>Maintence</span></p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(50,000.00)</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(20,000.00)</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(10,000.00)</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal>Average Return </p>
  </td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal><b>Totals</b></p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal>$0.00</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal>$90,476.43</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal>$90,750.00</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><b>$181,226.43</b></p>
  </td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   ></td>
  <td width=99 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   ></td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal>2013</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal>2014</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal>2015</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal>2016</p>
  </td>
  <td width=90 valign=bottom  
   >
  <p class=MsoNormal>2017</p>
  </td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal><b>Installation</b></p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(266,573.55)</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$<span
  class=GramE>-<span style="mso-spacerun:yes">&nbsp;&nbsp; </span></span></p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$<span
  class=GramE>-<span style="mso-spacerun:yes">&nbsp;&nbsp; </span></span></p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$<span
  class=GramE>-<span style="mso-spacerun:yes">&nbsp;&nbsp; </span></span></p>
  </td>
  <td width=90 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$<span
  class=GramE>-<span style="mso-spacerun:yes">&nbsp;&nbsp; </span></span></p>
  </td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal><span class=SpellE>Maintence</span></p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$<span
  class=GramE>-<span style="mso-spacerun:yes">&nbsp;&nbsp; </span></span></p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(26,666.67)</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(26,666.67)</p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(26,666.67)</p>
  </td>
  <td width=90 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$(26,666.67)</p>
  </td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal>Savings</p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$449,630.55 </p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$449,630.55 </p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$449,630.55 </p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$449,630.55 </p>
  </td>
  <td width=90 valign=bottom  
   >
  <p class=MsoNormal><span style="mso-spacerun:yes">&nbsp;</span>$449,630.55 </p>
  </td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal>Return</p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal><b><span style="mso-spacerun:yes">&nbsp;</span>$181,226.43
  </b></p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><b><span style="mso-spacerun:yes">&nbsp;</span>$380,979.90
  </b></p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><b><span style="mso-spacerun:yes">&nbsp;</span>$343,163.30
  </b></p>
  </td>
  <td width=108 valign=bottom  
   >
  <p class=MsoNormal><b><span style="mso-spacerun:yes">&nbsp;</span>$278,418.69
  </b></p>
  </td>
  <td width=90 valign=bottom  
   >
  <p class=MsoNormal><b><span style="mso-spacerun:yes">&nbsp;</span>$250,782.46
  </b></p>
  </td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   ></td>
  <td width=99 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal><b>Cost of Capital</b></p>
  </td>
  <td width=99 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal>Green Tech</p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal>Interest</p>
  </td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal>8.76%</p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal>2.26%</p>
  </td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal>Bond Rate</p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal>Inflation</p>
  </td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   >
  <p class=MsoNormal>0.76%</p>
  </td>
  <td width=99 valign=bottom  
   >
  <p class=MsoNormal>1.50%</p>
  </td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
 <tr >
  <td width=125 valign=bottom  
   ></td>
  <td width=99 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=108 valign=bottom  
   ></td>
  <td width=90 valign=bottom  
   ></td>
 </tr>
</table>

**NPV** is estimated to be **$1,434,570.78** after 5 years
