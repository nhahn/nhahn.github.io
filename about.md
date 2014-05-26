---
layout: default
title: About 
---

Who am I?
=========

<div class="row">
    <div class="small-9 columns">
    <p>
I am currently a senior in the Information Systems and Human Computer Interaction departments at Carnegie Mellon University. I like making computers help people by doing things they couldn't. This includes:

<ul>
    <li>Helping people work together from far away</li>
    <li>Leveraging how fast computers can process data</li>
    <li>Augmenting daily activities with computers</li>
<ul>
    </p>
    </div>
    <div class="small-3 columns">
        <img class="round-image" src="/assets/img/profile.jpg">
    </div>
</div>

<div class="row">
    <div class="large-12 columns" id="collaborators">
        <h4>Collaborators</h4>
        <p>Here is a list of all the wonderful people I have had the opportunity to work with as both an undergraduate and graduate student:</p>
        <br/>
        <ul class="small-block-grid-5">
            {% for post in site.posts %}
                {% for collab_hash in post.collaborators %}
                    {% for collab in collab_hash %}
                        <li><a href="mailto:{{ collab[1] | remove: ' ' | strip_newlines | downcase }}">
                            
                            <div>
                                {{ collab[0] | strip_newlines }} 
                            </div>
                        </a></li>
                    {% endfor %}
                {% endfor %}
             {% endfor %}
        </ul>
    </div>
</div>
<script type="application/javascript">
    var exists = [];
    $('#collaborators a').each(function(index,elem) {
        var email = elem.getAttribute("href").substring(7);
        if(exists.indexOf(email) < 0) {
            $(elem).prepend($('<div>').append($('<img>').attr({src: 'http://www.gravatar.com/avatar/' + md5(email) + '?d=identicon'}))); 
        } else {
            $(elem).parent().remove();
        }
        exists.push(email);
    });
</script>




