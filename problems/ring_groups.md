# Ring Groups

Talkdesk is about making and receiving calls. Once a User (also known as an Agent) has signed up for Talkdesk and has created their own account, they will then buy a new phone number. Using this number, an Agent is able to make and receive phone calls. 

Usually accounts have not one, but several Agents and they can be grouped so that each group answers calls from a different phone line. Although the concept of groups exist in Talkdesk since the beginning, this is not obvious to our users so we need a better interface to manage these relations through a new entity called ring groups. 

For this challenge we want you to implement the interface that will allow Talkdesk users to manage ring groups.

## The Problem

In Talkdesk, groups are set through associations between phone numbers and agents. If an agent has the ring group "tier1" and the phone number has the same ring group, when someone calls the phone number, it will ring that agent. The Talkdesk backend also supports routing of calls based on a multi-level chain where the second group will ring if the agents in the first level aren't available. 

Example: One of our accounts uses Talkdesk to provide support to their customers and they have 3 support levels: "tier 1", "tier 2" and "tier 3". "tier 1" is the team that should answer all the calls, however, technical issues are usually escalated to "tier 2" (calls can be transfered between both groups); if none of these groups are able to solve the customer's problem, engineers ("tier 3") are available to help.

For this to be useful to customers, they need to be able to create these ring groups themselves and be able to change them which is not supported at this point.

Using the background information we provide in the following section, please implement the functionality defined [here](/problems/assets/ring groups). We expect you to work on the interface to manage ring groups (the one highlighted in [this screen](/problems/assets/ring groups/challenge_implementation.png)), don't worry with the Talkdesk layout details and the context for the functionality.

Bonus points if you use a JS Framework and many kudos if you add tests to your project.

## Background Information

You can use the following credentials to login and explore Talkdesk:

- URL: [https://yourcompany.mytalkdesk.com/](https://yourcompany.mytalkdesk.com/)
- Credentials: please use the hipchat channel and ask for it

Here is an example of the ring groups definition in the "accounts" collection:

```
{  
  account_id: ObjectId("51f2d607fe32170009111111"),
  name: "talkdeskproblems",
  ring_groups: [
    {
      name: "First Tier",
      groups: [
        "tier1"
      ],
      type: "plain"
    },{
      name: "Second Tier",
      groups: [
        "tier2"
      ],
      type: "plain"
    },{
      name: "Third Tier",
      groups: [
        "tier3"
      ],
      type: "plain"
    },
    {
      name: "Enterprise Support",
      groups: [
        ["tier1"], ["tier2"], ["tier3"]
      ],
      type: "chain"
    }]
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
  ring_group_name: "Enterprise Support",
  ring_groups: [ ["tier1"], ["tier2"], ["tier3"] ]
}
```

Here is the definition for an Agent in use for a Talkdesk account:

```
{
  _id: ObjectId("51f2d607fe32170009111112"),
  name: "Amanda Lewis",
  email: "amanda@talkdesk.com",
  gender: "Female",
  status: "offline",
  alive_at: "2013-09-02T10:04:06+00:00",
  ring_group_name: "Tier 1",
  ring_groups: ["tier1"]
}
```
