#Some context

Sliding Panel is a lightweight, unobtrusive, yet extremely useful and effective jQuery plugin.

Its goal is to provide a simple way to turn any DOM element into a retractable, sliding panel. It was created to fulfill the need of showing examples on unoome (in french only for the moment), a service aimed at small/medium enterprises/associations with no IT skill to easily create websites. So a really easy and intuitive help was needed, and that's how Sliding Panel was born.

Hopefully, it was designed with extensibility in mind, so you can use it not only to display help or examples, but also to display anything you want : an options panel for example. Just call :

    $(your_DOM_element).slidingPanel();

And you're ready to go. The flexibility given by the settings should allow you to tune the plugin the way you like. Of course, it comes with a default CSS, but you can customize it to make it fit your needs.

#Usage

##JS

Just call:

    $('#example').slidingPanel(options);

##HTML

Just any valid HTML element:

    <div id="example">A nice looking example...</div>

##CSS

A CSS file is included in the downloadable package. But you might want to add some custom CSS to make the integration more seamless. The CSS looks like this:

    .slidingpanel_tab {
        background-color: #eee  ;
        color: #aaa  ;
        text-align: center;
        font-size: 18px;
        line-height: 22px;
        cursor: pointer;
        padding: 2px;
    }

You can edit it the way you want, all the important CSS is set by the plugin itself, so there is no risk that you break something. However, to facilitate the updates, I would highly recommend you to leave this file untouched and create another one which contain all your custom CSS rules, possibly overriding the default ones.

##Options

There are a few options to make Sliding Panel more flexible. Here they are, with their default values:

* __position__: ['top', _'right'_, 'bottom', 'left']
    * Defines where to put the sliding panel on the webpage.
* __offset__: {}
    * Allows to finely tune position, relatively to top, right, bottom or left side of the positioned container, or combination of two (top and right for example: {top: '150px', right: '-10px'})
* __speed__: 250
    * Sets the speed of the sliding effect on opening and closing
* __timeout__: 500
    * Will wait "timeout" ms before closing the panel after the mouse has left the panel
* __event__: [_'hover'_, 'click']
    * Allows to control the panel either by hover or by click
* __hideTriggerClass__: 'slidingpanel_hide_trigger'
    * A class to define which element(s) will close the panel (useful only with openByDefault: true)
* __wrapperClass__: 'slidingpanel_wrapper'
    * The CSS class applied to the sliding panel wrapper
* __slidingElementClass__: 'slidingpanel_element'
    * The CSS class applied to the sliding panel
* __tabClass__: 'slidingpanel_tab'
    * The CSS class applied to the tab allowing mouseover
* __wrapperTemplate__: '&lt;div&gt;&lt;/div&gt;'
    * The template used as a wrapper
* __tabTemplate__: '&lt;div&gt;&lt;/div&gt;'
    * The template used as a tab
* __tabText__: 'E&lt;br/&gt;X&lt;br/&gt;A&lt;br/&gt;M&lt;br/&gt;P&lt;br/&gt;L&lt;br/&gt;E'
    * The tab text
* __openByDefault__: [_true_, false]
    * Defines whether the panel should be open by default or closed
