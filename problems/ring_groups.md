# Ring Groups

Talkdesk is all about making and receiving calls. Once a User (also known as an Agent) has signed up for Talkdesk and has created an account, he will then buy a new phone number. Using this number, the Agent is able to make and receive phone calls.

Usually accounts have not one, but several Agents and they can be grouped so that each group answers calls from a different phone line. Although the concept of groups has existed since Talkdesk was created, this feature is not obvious to our users.
Thus, we propose to tackle this challenge by creating a better interface which will be used to manage these group relations through a new entity called **ring groups**. 

For this challenge we want you to implement the interface that will allow Talkdesk users to manage ring groups.

## The Problem

In Talkdesk, groups are set through associations between phone numbers and agents. If a phone number belongs to the ring group `tier1`, then, when a phone call comes in through that number, all agents that belong to the ring group `tier1` will receive the call. The Talkdesk backend also supports routing of calls based on a multi-level chain where a second group will be rung if none of the agents from the first level is available, and a third if none of those from the second, and so on.

**Example**: One of our accounts uses Talkdesk's multi-level chained routing to provide support to their customers. The account has three support levels: `tier 1`, `tier 2` and `tier 3`. `tier 1` is the team that should answer all the calls, however, technical issues are usually escalated to `tier 2` (calls can be transfered between groups); if none of these groups are able to solve the customer's problem, engineers (`tier 3`) are available to help.

For the ring groups feature to be useful to Talkdesk's customers, they need to be able to create and configure these ring groups themselves, which is currently not supported.

Using the background information we provide in the following section, please implement the functionality defined [here](/problems/assets/ring groups). We expect you to work on the interface to manage ring groups (the one highlighted in [this screen](/problems/assets/ring groups/challenge_implementation.png)), so don't worry with Talkdesk's layout details nor the context for the functionality.

Bonus points if you use a javascript framework and many kudos if you add tests to your project.

## Background Information

You can use the following credentials to login and explore Talkdesk:

- URL: [https://yourcompany.mytalkdesk.com/](https://yourcompany.mytalkdesk.com/)
- Credentials: please use our hipchat channel to ask for them

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

*Final note*: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question ;) 
