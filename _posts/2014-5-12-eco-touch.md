---
layout: post
title:  EcoTouch
date:   2014-5-12 16:29:56
summary: EcoTouch was developed for the Stony Brooke Watershed Association as part of my undergraduate HCI Capstone project. EcoTouch is a game that helps individuals understand the impact of using sustainable systems in their home. It uses a multitouch table with augmented reality markers to create a physical and digital experience, where users complete simulations of attempting to make a more sustainable home. 
image: /assets/img/eco_touch.png
categories: portfolio
code: https://github.com/ChiTheHotDogGuy11/WatershedExhibit
collaborators:
    - Cole Heiner: cheiner@andrew.cmu.edu
    - Shan Huang: yemount@gmail.com
    - Justin Greet: justin.greet10@gmail.com
    - Emily Tsai: cetsai@andrew.cmu.edu
---


<div data-magellan-expedition="fixed">
    <dl class="sub-nav">
        <dd data-magellan-arrival="background"><a href="#background">Background</a></dd>
        <dd data-magellan-arrival="research"><a href="#research">Research</a></dd>
        <dd data-magellan-arrival="ideas"><a href="#ideas">Ideation</a></dd>   
        <dd data-magellan-arrival="product"><a href="#product">Product</a></dd>  
        <dd data-magellan-arrival="presentation"><a href="#presentation">Presentation</a></dd>
    </dl>
</div>
<a name="background"></a>
<h3 data-magellan-destination="background">Background</h3>

The Stony Brook Millstone Watershed Association is constructing a new environmental center, which will integrate an array of sustainability features as part of its pursuit of LEED Platinum status, with net-zero energy consumption. For more than 60 years the organization has worked to protect central New Jersey’s water and environment through conservation, advocacy, science, and education. The new center will incorporate exhibits, classrooms, and a laboratory that focus on helping people to understand environmental issues and take the proper steps for a better future. The center’s many green systems, which include geothermal hvac, diurnal ducting, wetlands-based wastewater treatment, a green roof,
solar arrays, and more, will all serve to reduce the impact the center has on the environment. However, to fully achieve their mission statement, the association seeks to install an interactive exhibit that draws on data and educates visitors on sustainable building practices.

Our goal for this project is to design an exhibit that can appeal to children, homeowners, contractors/building officials, and policy makers to enhance their understanding of human systems and encourage environmental sustainability in specific real-world contexts.

<a name="research"></a>
<h3 data-magellan-destination="research">Research</h3>

In order to gain a basic understanding of how individual interact with museum exhibits, we spent several hours in a few museums noting the interactions and movements of individuals. We spent approximately 30 minutes in each of the exhibit spaces recording notable interactions and break-downs that users had with each particular exhibit. In order to capture the largest number of interactions, we split up into two teams and rotated between the different museums.

From this research, we discovered numerous factors that influence a visitor’s museum journey from start to finish. The critical points to consider in this journey are the surprise or the event trigger, the interaction and knowledge acquired from such interaction and finally the transfer of such knowledge beyond the exhibit tour. In order to achieve this, we should create a novel and/or well- guided experience, facilitate collaboration between visitors, cater to the physical constraints of a visitor, understand what is important or unimportant to the visitor and last but not least provide a memorable experience that one can apply in context of the real world.
<br/>
<br/>

<img class="th" src="/assets/img/ecotouch/museum_model.png">
Our model that we used to explain an individual's exhibit experience.

<a name="ideas"></a>
<h3 data-magellan-destination="ideas">Ideation</h3>

We began brainstorming with an independent idea generation process. We sat in a room and, working alone, came up with as many exhibit ideas as possible in 15 minutes. There were no restrictions on scope, cost, or absurdity. At the conclusion of our time, we had a total of 40 concepts ranging from the very practical informational wall display to the slightly-less-conventional sculpture to simulate the water process through the movement of metal balls. 

The low-fi design that we settled on is a tabletop game to allow for the comparison of features and simulation of data. We envision a touch sensitive table top, upon which users move physical pieces representing each of the different features of the Environmental Center. Users would be able to pick up and move these pieces (like chess pieces), the goal being to move the correct physical pieces into the center of the table, where they would effectively be added to a digital representation of the building.

Regarding gameplay, we wanted to give users tasks that would challenge them to learn about environmental features, and understand how they fit into an overall system. As a way to encourage deeper learning of the concepts, we wanted to be able to present different contexts for users to apply their knowledge. We also envisioned this as providing motivation for users to engage with the game, and to continue exploring content. For example, upon starting the game, users might be given the task to add features that would be relevant to a building in a desert environment. Users would then need to find out what features might be best suited in such an environment. They would be given the ability to see (through simulation) what the effectiveness and impact is of the features that they add.

<div class="row">
    <div class="medium-4 columns">
        <img class="th" src="/assets/img/ecotouch/tabletop_idea.png">
    </div>
    <div class="medium-4 columns">
        <img class="th" src="/assets/img/ecotouch/energy_flow_idea.png">
    </div>
    <div class="medium-4 columns">
        <img class="th" src="/assets/img/ecotouch/augmented_reality_idea.png">
    </div>
</div>
Some concepts from ideation.

<a name="product"></a>
<h3 data-magellan-destination="product">Product</h3>

The concept for the game is to have players build their own environmentally sustainable building while learning about the various features that go into it. Players can choose from a number of different features, such as solar panels, geothermal heating and cooling, and rain barrels, which can be incorporated into their building. The game also allows for players to change the size of their building and the environmental region it is located in. All of these variables impact the overall energy consumption and savings of a player’s building, so players are challenged to make informed decisions about the features they add. Furthermore, players are restricted by a budget that reflects real world costs, giving players incentive to weigh the up-front costs against long term benefits. At the end of the game, players are presented with a graph of their building’s projected energy consumption.

The game itself is both digital and physical. We use a touch screen as the game tabletop, which displays the interfaces, screens, animations, and content that players encounter. The player’s building is represented digitally and occupies the center of the screen. The game’s physical components are the environmental features, which are unique 3D printed pieces. We track the position of these 3D pieces using a camera positioned above the gameboard. A key mechanic of the game is that when a player moves a 3D piece onto the touch screen, that feature is added to the player’s building. To remove a feature, players simply take the corresponding 3D piece off of the touch screen. While a piece is on the screen, players can see important information about that feature, and click on surrounding icons to learn more.

Customization is a component we would like to emphasize in our game, and we want to give players control over how their building ultimately turns out. We believe that this will add to the open-endedness of the game, making it more fun to play and replay, while also enhancing learning. Since our game is ultimately an educational one, our primary educational objective is to provide players with a general knowledge of environmentally sustainable practices. Our hope is that the knowledge and insights acquired within the game can transfer to real world situations for users.

In the following section, we revisit each iteration of the prototype and explain the process as we improve on and test with each version, from start to finish.

<a name="presentation"></a>
<h3 data-magellan-destination="presentation">Presentation</h3>

<iframe src="http://www.slideshare.net/slideshow/embed_code/34585436" width="100%" height="700" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
