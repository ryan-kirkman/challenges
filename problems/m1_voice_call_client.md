# Talkdesk iOS voice call client


Your iOS challenge at Talkdesk will be to build an app that supports voice calls plus some convenience features as described on the Requirements section below.

The test case will be having two instances of the app talking to each other (ie, on two different devices or on device and simulator). For this challenge you don't need to roll your own CTI or PBX. You can use simple capability token management (have a look on the Assumptions section). Properly document the build and test procedures so we are able to actually see it working.

You are free to take the options regarding UI layout and app navigation that you think are the most suited.

## Requirements

* As a user I can make outbound phone calls.
* As a user I can take inbound phone calls.
* As a user I have basic call controls (dial and hang-up).
* As a user I can see a list with all the calls I did through the app.
* As a user I can repeat any past calls by interacting with the roster.
* As the application I record data regarding all calls in a roster.
* As the application I persist the call roster between sessions.

## Assumptions

* Your app must use **Twilio** for the voice calls. Use their [SDK for iOS](https://www.twilio.com/docs/api/client/ios) to provide integration. 
* Suppose that only two users are involved and that their calls are originated from fixed Twilio client names (no PSTN numbers).
   
## Tips

 1. You don't need to spare a dime to do the challenge: you can subscribe to a free trial account on Twilio.
 2. No "HelloMonkey" apps, please! (If you did it right, you know what we mean...)
 3. You'll be developing for a mobile platform so apply the standard industry practices for energy management, security, error handling, etc.
 4. iOS apps are UI-centric but you can target for a simple experience in this case. If you want or you have that "special touch" feel free to go wild.
 5. New features might be added to the app at a later point. You should prepare the solution for the future.


**Final note**: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question.
Good communication is a plus ;)

---
[Go back to the Problems README](README.md)
