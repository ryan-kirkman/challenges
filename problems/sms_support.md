# SMS Support on Talkdesk

Talkdesk is about making and receiving calls. Once a User (also known as an Agent) has signed up for Talkdesk and has created their own account, they will then buy a new phone number. Using this number, a User is able to make & receive phone calls. Some phones are also SMS capable, meaning they are able to receive SMSs. However, we don't support that on Talkdesk at this point.

For this challenge we want you to extend Talkdesk's functionality by making it be able to easily send/receive SMSes.

## The Problem

Example use case: a customer sends an SMS requesting a call. A Talkdesk agent can then read this message, open the associated customer and call them directly from the interface. Now suppose the customer does not answer the call, the agent decides to reply with an SMS saying they will call again later.

- Where do you think this SMS scenario could fit on the Talkdesk interface? Don't worry about the design implementation or required configurations at this point, just assume the system supports this feature and we need to integrate it in the interface.
- Using the background information we provide in the following section and taking into consideration a basic layout/structuring of Talkdesk, please implement the functionality of sending and receiving SMSes.

## Background Information

- The interface makes use of entries which can be calls, voicemails, notes or other interactions that exist in external systems.
- Every interaction is associated to a contact.

You can use the following credentials to login and explore Talkdesk:

- URL: [https://yourcompany.mytalkdesk.com/](https://yourcompany.mytalkdesk.com/)
- Email: problems@talkdesk.com
- Password: please use the [hipchat channel](https://www.hipchat.com/gP8zhqbmd) and ask for it

Here is an example of a voicemail entry:

```
{
  _id: ObjectId("5271079004420e0002000086"),
  _type: "VoicemailEntry",
  account_id: ObjectId("51f2d607fe32170009111111"),
  callsid: "0387a8f4-4166-11e3-b7db-cfc9217a228e",
  customer_id: ObjectId("5271013b63bcc10002111111"),
  customer_phone_number: "+15146300808",
  duration: "38",
  record: "http://s3.amazonaws.com/recordings_2013/123.mp3",
  talkdesk_phone_number: "+16502907793"
}
```

Here is a phone number in use for a Talkdesk account:

```
{
  _id: ObjectId("51f2d607fe32170009111111"),
  iso_country: "US",
  phone_number: "+16502907793",
  phone_type: "local",
  prefix: "+1",
  provider: "twilio",
  rate_center: "PACIFICA",
  region: "US", 
}
```

## Other Requirements

* To start, you can make a simple HTML page that is capable of sending and receiving SMSes.
* As a bonus, integrate that functionality with the Talkdesk layout (considering the solution you proposed).


## Environment

We use Twilio as our telecom infrastructure. You can create a trial account for the challenge, if you have any problem please let us know and we can get you an account.

We use MongoDB as our main database, so please do the same. (We have systems that use Mongoid (ORM) and others that use the MongoDB ruby driver directly, but use whichever you prefer).

*Final note*: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question ;) 