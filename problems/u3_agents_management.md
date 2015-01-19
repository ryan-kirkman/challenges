## Agents Management

Talkdesk is all about making and receiving calls. Once a User (also known as an Agent) has signed up for Talkdesk and has created an account, he will then buy a new phone number. Using this number, the Agent is able to make and receive phone calls.

Usually accounts have not one, but several Agents and one of the main sections of Talkdesk is the page where the information regarding all the agents is displayed. 

For this challenge we want you to work on the Agents interface for better usability and scalability.

### The Problem

When Talkdesk was created, we were "Call Center Software for SMBs". Our target were small, web companies that could not afford to have a call center. Fortunately, some of those companies grew from less than 10 to more than 100 of agents and the Talkdesk interface is not prepared to deal with this amount of information.  Given that two of our main value prepositions are usability and scalability, the way Agents meta information is managed is very important.

The Agent management page of Talkdesk, which is tipically accessible to Administrators, allows them to create a new agent or edit an existing agent. The information that can be edited is crutial as some of the properties associated with this agent are then associated with the call center behavior.

The focus of this challenge is to access not only interface design skills but the way big data management is considered and the consequent paradigms on interaction design.

In order to understand a bit more context about this problem, you can find the representation of one of user segments through a persona here [link](/problems/assets/agents management/persona.pdf) and some user stories:
		
User Stories	
	
- As the account administrator, I want to be able to scope Agents list in order to view only Agents with the "Sales Enterprise" Role.
- As the account administrator I want to be able to find an Agent by its Name in order to add him to the "New York" Ring Group.  
- As the account administrator, I want to be able to update agents meta information in bulk in order to assign multiple users to a Ring Group in one page.
- As the account administrator, I want to be able to view a list of agents from a preset in order to assign them to a Role based on a previous filter (filter by Ring Group), in one page.

Interface Considerations:

1) Each Agent has:
	- Name (Agent's name and E-mail)
	- Type (Full Agent or Flex Agent)
	- Role (e.g: Sales VIP, Advanced Agent, Support) [Single]
	- Ring Group (e.g: agents, first-line, bugs) [Multiple]

2) The interface renders 25 Agents per page and its paginated

3) After search or filter the interface renders all Agents in one page

Using the background information we provide in the following section and taking into consideration the points mentioned above, please present us with the process and methodology you would follow to solve this challenge. You may want to consider some deliverables like: task-flow analysis diagrams, interactive rapid prototypes, visual translation (hi-fidelity mockups) and the html/css for the interfaces.   

## Background Information

You can use the following credentials to login and explore Talkdesk:

- URL: [https://yourcompany.mytalkdesk.com/](https://yourcompany.mytalkdesk.com/)
- Credentials: please use the hipchat channel and ask for it

*Final note*: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question ;) 

---

[Go back to the Problems README](README.md)
