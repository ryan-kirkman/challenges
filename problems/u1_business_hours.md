# More Flexible Business Hours - UI

Talkdesk is about making and receiving calls. Business hours are a key concept for Talkdesk customers as the define if the call is routed to agents or not, as well as the messages that play.

For example if you call during normal business hours you may hear:

- "Welcome to Company X, please hold while we connect you to the next available agent".

Outside of business hours the message is a bit different, something like:

- "Please leave a message after the beep, or contact us during business hours Monday through Friday between 9am and 5pm Eastern Standard Time. Thank you!".

Currently in Talkdesk, you can configure business hours for the entire deployment or by phone number. You can choose start and end times and select to apply business hours by days of the week.

While this implementation works for simple use cases, it does not support common scenarios like defining a lunch period for your business or business hours which extend to the following day.

![business hours](https://s3.amazonaws.com/f.cl.ly/items/0w2k3Q28093M2m1A2x38/Screenshot%202015-08-28%2020.33.26.png)

- You can specify the days of the week that you are open
- You can set the working period that will apply to every selected day

For this challenge we want you to extend Talkdesk's functionality to meet the request of some customers that have asked for a more flexible business hour solution.

## Personas
- Administrator - owns configuration of the entire Talkdesk deployment
- Director/Supervisor - owns configuration of a particular segment of Talkdesk users
- Agent - daily user of Talkdesk
- End Customer/Caller

## Customer Use Cases

Yamsafer’s business hours are from 8am to 2am the following day. The administrator would like to schedule business hours in Talkdesk so customers calling inside of business hours will be routed to agents accordingly and customers calling outside of business hours will hear an out of office message.

Selectra’s administrator would like to schedule business hours to include a one-hour lunch break from noon to 1pm so that all agents are free to go on break at that time.

Anki’s administrator (based in the U.S.) would like to schedule business hours for their three call centers based in Florida, the Philippines, and Guatemala. 

Ziprecruiter admins would like to schedule holiday hours in advance. This includes both reduced hours due as well as business closures depending on the holiday.

Using the background information we provide in the following section and taking into consideration the layout/structuring of Talkdesk, please present us with a solution that will allow customers to specify more flexible business hours.

## Background Information

You can use the following credentials to login and explore Talkdesk:

- URL: [https://yourcompany.mytalkdesk.com/](https://yourcompany.mytalkdesk.com/)
- Credentials: please use the hipchat channel and ask for it

*Final note*: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question ;) 

---

[Go back to the Problems README](../README.md)
