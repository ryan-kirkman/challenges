# Development Practices

Here are some practices that we should all use throughout Talkdesk's codebase to keep things consistent and keep up the quality.

* [Ship, ship, ship][5] but [we will not ship shit][11]
* BDD is the way. Red > Green > Refactor > Profit!
* Follow the [Four Simple Design Rules][12]:
  * 1 - Runs all tests
  * 2 - Contains no duplication
  * 3 - Expresses the intent of the programmers
  * 4 - Minimizes the number of classes and methods
* Follow the [S.O.L.I.D][6] principles
* Comment classes describing their responsibilities. Methods that accept options can also be commented, but other than that, no comments should be necessary, the code should be clean (read Chapter 4: Comments of Clean Code book).
  * If a comment is needed, explain *why?* and not *what* or *how*, unless it's an optimization, then it should be explained what's going on. But if code isn't clear enough to be understood, rewrite it.
* Use [T.R.U.E.][7] to evaluate your design
* Use Github Flow: [Github Flow][1] and [How Github uses Github to make Github][2]
  * Avoid committing to master
  * Create topic branch for each feature
  * Use Pull Requests for comments, code reviews, help, etc.
* Take into Account [these][3] good practice tips
* Thinking is just as important as DOing
* Always aim to leave the codebase in a better condition that it was when implementing a feature/fixing a bug. Stay away from ugly hacks and "martelanços"
* Follow the [Code Style Guidelines](style_guidelines.md)
* Don't stop [learning](learning_resources.md)

Must reads:

* [Practical Object-Oriented Design in Ruby][10]

Very highly recommended reads:

* [Clean Code][8]
* [The Art of Unit Testing][9] (at the *very least* chapter 7)
* [The Pragmatic Programmer][4]

---

[Go back to the README](../README.md)

[1]:http://scottchacon.com/2011/08/31/github-flow.html
[2]:http://zachholman.com/talk/how-github-uses-github-to-build-github
[3]:http://www.slideshare.net/NetPonto/como-ser-programador-durante-o-dia-e-mesmo-assim-dormir-bem-noite
[4]:http://pragprog.com/the-pragmatic-programmer
[5]:http://startupboy.com/2012/04/27/build-a-team-that-ships/
[6]:http://confreaks.com/videos/240-goruco2009-solid-object-oriented-design
[7]:http://vimeo.com/26330100
[8]:http://books.google.pt/books/about/Clean_Code.html?id=dwSfGQAACAAJ&redir_esc=y
[9]:http://www.manning.com/osherove/
[10]:http://www.informit.com/articles/article.aspx?p=1834700
[11]:http://blog.8thlight.com/uncle-bob/2012/09/06/I-am-Your-New-CTO.html
[12]:http://theholyjava.wordpress.com/2011/02/14/clean-code-four-simple-design-rules/
