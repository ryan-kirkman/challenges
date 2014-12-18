<div class="page-header">
  <h1 id="instructions">Instructions</h1>
</div>

<p>Welcome to the Talkdesk Challenge! </p>
<p>What we have here is a very small application — if we can even call it that — that uses the Backbone framework to help control the frontend logic.</p>
<p>One of the views has a table with several elements: phone numbers, call types and so on. The goal is to provide a user controls that allow:</p>
<ul>
  <li>Ordering the table according to various fields</li>
  <li>Filtering the table entries by: phone number or call type</li>
  <li>Exporting the end result in any format</li>
</ul>
<p>You shouldn't really need to worry about the sinatra app, but you may do whatever you please with it if you think it'll help, or if you just want to show off your skills.</p>
<p>Anywho, there's one endpoint available that will get you the JSON data you need to populate the table:</p>
<pre>
  /phones.json
</pre>
<p>Sounds simple, hey?</p>
<p>I&#39;ll let you in a little secret: we actually use Backbone in our production environment. But you&#39;re absolutely free to scrap the whole boilerplate and use Ember or Angular or CoffeeScript or ClojureScript, if you find that it gets the job done while keeping the code clean and maintainable — *<em>wink</em>*.</p>
<p>If you have any problems or questions, just open an issue in your repository, someone will get back to you about it, or just use <a href="http://www.hipchat.com/gP8zhqbmd">this HipChat channel</a>.</p>
<p>Once you have something more substatial to show, make sure you have a pull request open so that a code review can be performed within it.</p>
