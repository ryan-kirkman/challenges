# Call List Filtering

Talkdesk is all about making and receiving calls. Once a User (also known as an Agent) has signed up for Talkdesk and has created their own account, they will then buy a new phone number. Using this number, the Agent is able to make and receive phone calls. The first screen someone sees after logging in to Talkdesk is the **Recent Calls** section. This section contains the history of previous calls that have been made, received and missed. 

For this challenge we want you to extend Talkdesk's functionality by improving the Related Calls to increase functionality and user-friendlyness.

## The Problem

One of the most common requests from our customers is the ability to filter calls by a given criterion: agent, call type, phone number, and more. It's your job to implement a solution for this problem. Bonus points if solve this challenge creatively.

As you might have already noticed, we value beautiful code, be it Ruby, Javascript, HTML or CSS. Show us your skills! Bonus points if you use a Javascript Framework and many kudos if you add tests to your project.

## Background Information

- Talkdesk's interface makes use of entries which can be inbound calls, outbound calls or missed calls.

You can use the following credentials to login and explore Talkdesk:

- URL: [https://yourcompany.mytalkdesk.com/](https://yourcompany.mytalkdesk.com/)
- Credentials: please use our hipchat channel to ask for them

Here is an example of an inbound call entry:

```
{
  _id: ObjectId("5271079004420e0002000086"),
  _type: "InCallEntry",
  account_id: ObjectId("51f2d607fe32170009111111"),
  callsid: "0387a8f4-4166-11e3-b7db-cfc9217a228e",
  customer_id: ObjectId("5271013b63bcc10002111111"),
  customer_phone_number: "+15146300808",
  duration: "38",
  record: "http://s3.amazonaws.com/recordings_2013/123.mp3",
  talkdesk_phone_number: "+16502907793",
  user_id : ObjectId("5271013b63bcc10002111112"),
  ring_groups: ["support"]
}
```

*Final note*: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question ;) 

---

[Go back to the Problems README](README.md)
