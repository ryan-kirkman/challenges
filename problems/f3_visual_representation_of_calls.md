# Visual Representation of In Progress Calls

We deal with a lot of calls. Once a User has signed up for Talkdesk and have created their own account, they will then buy a new phone number. Using this number, a User is able to make and receive phone calls.

## The Problem

At the moment there is a considerable amount of calls happening at the same time. We would like to have a visual representation of the calls that are currently in progress, including origin and destination. Here is a visual tool that can be used: http://www.chromeexperiments.com/globe and a video that shows the idea: http://cl.ly/3t1Y3s271g2Q

## Background Information

There are various events that occur during the lifetime of a call. The way this is actually done in Talkdesk is by using RabbitMQ to send events. Other systems can subscribe to receive those events and process them to make, for example, billing operations (bill the call that just finished) or update the number of unread voicemails in the interface in real time.

Some of events that are emitted for calls are:

* call_initiated - When a Customer starts a call to a Talkdesk, before it actually starts to ring
* call_answered - When an Agent picks up a call
* call_finished - When an answered call finishes, either by the Agent closing the call or the Customer hanging up

Here's an example of the data the event has (they come in JSON):

```
{
  "event":"call_finished",
  "type":"in",
  "duration":"91",
  "account_id":"4f4a37a201c642014200000c",
  "contact_id":"505de7e5f857d94a3d000001",
  "call_id":"9d036a18-0986-11e2-b2c6-3d435d81b7fd",
  "talkdesk_phone_number":"+14845348611",
  "customer_phone_number":"+351961918192",
  "forwarded_phone_number":null,
  "agent_id":"4f78ded32b0ac00001000001",
  "previous_agent_id":"5054d89ec7573f082a000c9e",
  "customer_id":"505de7e5f857d94a3d000001",
  "customer":null,
  "timestamp":"2012-09-28T16:09:07Z"
}
```

## Other Requirements

To start, you can make a command-line program that can simulate the beginning and end of several phone calls, by emitting events.


*Final note*: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question ;)

---

[Go back to the Problems README](README.md)