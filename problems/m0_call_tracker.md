# Talkdesk Android Call Tracker

At Talkdesk we want to offer our users the ability to track their outgoing calls and sms messages.

Whenever a user makes an outgoing call or sends an sms, our app should register it and inform the talkdesk server of this occurrence.
The record should include the time, the destination phone number, the current user location (does not need to be very precise) and the network type the user is on.
Please note that the user can be offline (no internet connection) and still make calls or send sms. We would like for the server to be notified of those events when the device comes online.

Visually, the app should have a simple single screen UI where it can turn on/off the call and sms tracking.
In the same screen it should be able to see how many calls/sms were tracked by Talkdesk.

Assume that a user can have the app installed in several phones, and these counters should be an aggregate of all the devices, rather than only the device's local counters.

## Objectives

Build an android application that:

 * Tracks outgoing calls and SMS (with information of the phone number, location and the network type)
 * Syncs this information with a remote server managed by Talkdesk
 * Has a screen where the user can start/stop the tracking and is able to see how many calls are tracked by Talkdesk

## Simplifications

 1. Don't worry about user management. You are the ONLY user on the system. No need to login or create user
 2. To communicate with the server you can use whatever REST interface you want.
    As a guide we have a fake server at the end of this README, but you are free to use whatever "fake" server you want.

## Tips

 1. Android app development is different than standard Java development. Mobile apps have to be careful on battery usage and activity/fragment lifecycle.
 2. Don't worry in making the UI pretty, that's not important for the challenge.
 3. Testing in android is hard, but crucial. Check where it is important to have tests, and where it is simply an overhead.
 4. Finally think that this app can have requirements in the future. Try to do you code in a modular manner.

## Fake REST server

If you want for this challenge, you can use this "fake" rest server:

```python
from flask import Flask
from flask import request
from flask import Response

app = Flask(__name__)

tracked_calls = 0
tracked_smss = 0

@app.route('/call', methods=['GET'])
def list_calls():
    global tracked_calls
    print request.args
    return Response(tracked_calls)

@app.route('/sms', methods=['GET'])
def list_sms():
    global tracked_calls
    print request.args
    return Response(tracked_sms)

@app.route('/call', methods=['POST'])
def add_call():
    global tracked_calls
    tracked_calls += 1
    r = Response("Added calls")
    return r

@app.route('/sms', methods=['POST'])
def add_sms():
    global tracked_sms
    tracked_sms += 1
    r = Response("Added sms")
    return r

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8888, debug=True)
```

As you can see it is a really simple [Flask](http://flask.pocoo.org/) app with the following endpoints:

**Get**
 * **/call** - Returns the number of calls tracked by the server
 * **/sms*** - Returns the number of smss tracked by the server

**Post**
 * **/call** - Uploads a new call metadata to the server (it is ignoring the metadata and just increments call count by one)
 * **/sms** - Uploads a new sms metadata to the server (it is ignoring the metadata and just increments call count by one)

To run the script just do *python filename.py*. It will start the rest server running on port: **8888**.

Feel free to ignore it, change it or use some online test service that allows to quickly "fake" the rest endpoints.

**Final note**: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question.
Good communication is a plus ;)

---
[Go back to the Problems README](README.md)
