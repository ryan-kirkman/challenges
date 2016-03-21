# Talkdesk iOS voice call client


You iOS challenge at Talkdesk will be to build an app that supports voice calls plus some convenience features as described on the Requirements section below.

The test case will be having two instances of the app talking to each other (ie, on two different devices or on device and simulator). Properly document the test procedure so we are able to actually see it working.

You are free to take the options regarding UI layout and app navigation that you think are the most suited.

The challenge can be solved either in Objective-C or Swift. If you choose Swift *please include also some significant* **Objective-C** *portion of source code*.

## Requirements

* As a user I can make outbound phone calls.
* As a user I can take inbound phone calls.
* As a user I have basic call controls (dial and hang-up).
* As a user I can see a list with all the calls I did through the app.
* As a user I can repeat any past calls by interacting with the roster.
* As the application I record data regarding all calls in a roster.
* As the application I persist the call roster between sessions.

## Assumptions

1. Your app must use **Twilio** for the voice calls. Use their [SDK for iOS](https://www.twilio.com/docs/api/client/ios) to provide integration. 
2. You'll need to set up a server to back up your iOS app. Twilio offers a [ready-made solution](https://github.com/twilio/mobile-quickstart) that you can use. You are advised to host it on a publicly available solution like [Heroku](https://heroku.com/).

    
## Tips

 1. You don't need to spare a dime to do the challenge: you can subscribe to a free trial account on both Twilio and Heroku.
 2. No "HelloMonkey" apps, please! (If you did it right, you know what we mean...)
 3. You'll be developing for a mobile platform so apply the standard industry practices for energy management, security, error handling, etc.
 4. iOS apps are UI-centric but you can target for a simple experience in this case. But feel free to go wild if you want or if you have that "special touch"
 5. Write tests and documentation where appropriate.
 6. New features might be added to the app at a later point. You should prepare the solution for the future.


**Final note**: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question.
Good communication is a plus ;)

---
[Go back to the Problems README](README.md)
