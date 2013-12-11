---
layout: post
title:  Greenlight - Mobile 
date:   2013-12-1 21:46:56
summary: As an additional part to the Greenlight project, I worked on creating a mobile component that would detect when you were in a room with the Greenlight system in it. Developed for Android, this application worked with a Bluetooth Low Energy beacon to detect if you were close to a Greelight-enabled room and alert you appropriately. 
image: /assets/img/greenlight-mobile.png
categories: portfolio
code: https://github.com/nhahn/GreenLight_Android
---


<div data-magellan-expedition="fixed">
    <dl class="sub-nav">
        <dd data-magellan-arrival="background"><a href="#background">Overview</a></dd>
        <dd data-magellan-arrival="architecture"><a href="#architecture">Architecture</a></dd>
        <dd data-magellan-arrival="bluetooth"><a href="#bluetooth">Proximity Sensor</a></dd>
    </dl>
</div>


<a name="background"></a>
<h3 data-magellan-destination="background">Overview</h3>

[Greenlight][3] is a daylight harvesting system my IS team created (you can read more about it by following the link). The Android application I created is an extension of this, as it allows you to view any information you normally see through the web application on your phone. It does this by connecting to our Ruby on Rails server through an API I created to pairs with the Android application. Using Devise token authentication, users can view information about a room, including power consumption and sensor graphs, as well as control the room's lights. As an extra feature, the application can detect with a user is in a room by using a Bluetooth LE beacon. 

<img class="th" src="/assets/img/greenlight_mobile/Greenlight_Mobile.002.png">

<a name="architecture"></a>
<h3 data-magellan-destination="architecture">Architecture</h3>

<img class="th" src="/assets/img/greenlight_mobile/Greenlight_Mobile.004.png">

The app utilizes two core components of the Android framework to manage its connection to the Ruby on Rails application. For authentication, Android's AbstactAccountAuthenticator class was implemented to allow for a more structured authentication process. This allows a user's
[Greenlight][3] account to appear in the general settings screen, and allow for background Bluetooth scanning preferences to be adjusted. 

For actually transmitting and receiving data, a custom content provider and cursor were created. The content provider utilizes a local caching SQLite database to prevent erroneous requests to the database. The content provider accepts rails-esque queries - so you can send, for example: 

`where('id = 5').order_by(:updated_at)`

Additionally the content provider allows you to follow rails associations, so most of the requeries are done for you. 

<a name="bluetooth"></a>
<h3 data-magellan-destination="bluetooth">Proximity Sensor</h3>

<img class="th" src="/assets/img/greenlight_mobile/Greenlight_Mobile.005.png">

The proximity detection portion of the application was created using a Bluetooth LE beacon. I used the [ReadBearLabs BLE Mini][1], and flashed a custom firmware image onto it. The firmware image implemented the Apple iBeacon protocol. This has 4 parts to it: 

* A Proximity ID - used to identify the [Greenlight][3] Beacon
* Major Version - used to identify the room
* Minor Version - used to identify the dimmer in the room
* RSSI - the signal strength information

The Android application uses the [RadiusNetworks iBeacon library][2] to scan for the iBeacon. On bootup of the phone, a background service is started that attached to the library and scans for broadcasts in the background. Once a broadcast is received, the phone creates a notification, informing the user that a greenlight system is nearby, and when selected, takes them to the appropriate room screen within the application.

On average, the background scanning only reduced battery life by about 1 hour, and it is inspected to improve with time. The low energy scanning implemented in Android is, at this point, only supposed to happen at discrete times, rather than constantly, however this constant scanning should hopefully become core in the future. 

[1]: http://redbearlab.com/blemini/
[2]: http://developer.radiusnetworks.com/ibeacon/android/
[3]: /portfolio/greenlight.html