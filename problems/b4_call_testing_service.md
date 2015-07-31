# Call Testing Service

Have you ever used Skype? You likely have, hence you also likely tried its call testing service.

For those of you (you aliens) who have never used Skype, a call testing service is a number you dial, are asked to leave a message, and that message will be repeated to you, allowing you to check if your microphone and speakers are properly setup. In other words, it's an echo service.

For this challenge we want you to implement a call testing service that will allow Talkdesk users to test their sound setup.

## The Problem

At Talkdesk, we use [Twilio](http://twilio.com) as one of our telecommunications provider. Twilio enables developers to interact with typical telecommunications systems - such as voice, SMS and MMS - controlling interactions through something that is known to all of us: the HTTP protocol. You can learn about how to use Twilio by following [this tutorial](https://www.twilio.com/docs/quickstart/ruby/twiml).

Twilio provides a sandbox account when you sign up, but if for some reason you're not able to test something, let us know and we can provide you with a test account.

## Objective

Build a service so that we can dial a Twilio phone number, speak to the system, and have it play it back to us.

### Additional Notes

You can take this as far as you like. Some crazy cool ideas include localization (e.g., greet with 'Olá!' if the caller has Portuguese phone number), doing a whitelist filter so you only accepting calls from Talkdesk numbers, track how many calls were made and if there were success full or not by prompting the caller to "Press 1" if everything is OK, etc.

*Final note*: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question ;) 

---

[Go back to the Problems README](README.md)
