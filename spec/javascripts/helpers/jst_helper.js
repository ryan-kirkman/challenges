(function(){
  var c = {};
  if (!window.JST) window.JST = {};
  JST["backbone/index"] = function() {
    if (!c["backbone/index"]) c["backbone/index"] = (_.template("<div class=\"page-header\">\n  <h1 id=\"instructions\">Instructions</h1>\n</div>\n\n<p>Welcome to the Talkdesk Challenge! </p>\n<p>What we have here is a very small application \xE2\x80\x94 if we can even call it that \xE2\x80\x94 that uses the Backbone framework to help control the frontend logic.</p>\n<p>One of the views has a table with several elements: phone numbers, call types and so on. The goal is to provide a user controls that allow:</p>\n<ul>\n  <li>Ordering the table according to various fields</li>\n  <li>Filtering the table entries by: phone number or call type</li>\n  <li>Exporting the end result in any format</li>\n</ul>\n<p>You shouldn't really need to worry about the sinatra app, but you may do whatever you please with it if you think it'll help, or if you just want to show off your skills.</p>\n<p>Anywho, there's one endpoint available that will get you the JSON data you need to populate the table:</p>\n<pre>\n  /phones.json\n</pre>\n<p>Sounds simple, hey?</p>\n<p>I&#39;ll let you in a little secret: we actually use Backbone in our production environment. But you&#39;re absolutely free to scrap the whole boilerplate and use Ember or Angular or CoffeeScript or ClojureScript, if you find that it gets the job done while keeping the code clean and maintainable \xE2\x80\x94 *<em>wink</em>*.</p>\n<p>If you have any problems or questions, just open an issue in your repository, someone will get back to you about it, or just use <a href=\"http://www.hipchat.com/gP8zhqbmd\">this HipChat channel</a>.</p>\n<p>Once you have something more substatial to show, make sure you have a pull request open so that a code review can be performed within it.</p>\n"));
    return c["backbone/index"].apply(this, arguments);
  };
  JST["backbone/phones"] = function() {
    if (!c["backbone/phones"]) c["backbone/phones"] = (_.template("<p>Change me! ;)</p>\n"));
    return c["backbone/phones"].apply(this, arguments);
  };
})();
