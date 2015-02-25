# Offline Phone Number Geolocation

A Talkdesk customer may have multiple phone numbers associated with their account.
When placing an outbound call, and if the Talkdesk user does not explicitly select a number to use, the Talkdesk call central automatically picks a number to use as a caller id based on multiple criteria.

One of those criteria is geographic matching: If you have numbers from San Francisco (CA) and another in New York (NY), and you are calling a number from Los Angeles (CA), then it will pick the number from San Francisco, as both cities belong to the state of California.

# The Problem

We would like to extend the state matching system to incorporate geographical proximity.
For instance, if the customer has a number from California and a number from New York, and is calling a number from Washington, we would like to select the number from the closest state.

Or, if the customer has a US and a UK number, and is calling France, we would like to pick the UK number.

Additionally, as number matching is done very often (on every outbound call), we would like the solution to work without relying on external services, that is, we require a solution that could even be used **offline**, **without internet access**.

# Objectives

Build a command line app that is able to take a phone number to call, and a list of the customer's available numbers, and that returns the closest geographic match to the number being called. This program should also accept an option to only select matches belonging to the same country, even if numbers on neighboring countries are closer.

	$ phone_number_geo_match [--same-country-only] <target number> <customer numbers...>

Sample outputs:

	# Call to New Jersey: +12018840000
	# Available numbers:
	# - Montreal: +15148710000
	# - San Francisco: +14159690000

	$ phone_number_geo_match +12018840000 +15148710000 +14159690000
	# Expected output: +15148710000 (Montreal)

	$ phone_number_geo_match --same-country-only +12018840000 +15148710000 +14159690000
	# Expected output: +14159690000 (San Francisco)

	# Call to Setúbal: +351265120000
	# Available numbers:
	# - Lisbon: +351211230000
	# - Oporto: +351222220000

	$ phone_number_geo_match +351265120000 +351222220000 +351211230000
	# Expected output: +351211230000 (Lisbon)

	# Call to France: +33975180000
	# Available numbers:
	# - UK: +441732600000
	# - San Francisco (USA): +14159690000

	$ phone_number_geo_match +33975180000 +441732600000 +14159690000
	# Expected output: +441732600000 (UK)

	$ phone_number_geo_match --same-country-only +33975180000 +441732600000 +14159690000
	# Expected output: no match found

Note that some numbers may not have a specific location other than belonging to a country. This happens, for instance, with toll free numbers and cellphone numbers. In that case, try to match a closer country (e.g. selecting a UK toll-free instead of a US toll-free to call Portugal):

	# Call to Portugal: +351211230000
	# Available numbers:
	# - US toll-free: +18009970000
	# - UK toll-free: +448008080000

	$ phone_number_geo_match +351211230000 +18009970000 +448008080000
	# Expected output: +448008080000 (UK toll-free)

The definition of "closer country", in cases when no city/state can be found from a number, is left to you ;)

# Tips

Google's [libphonenumber](https://github.com/googlei18n/libphonenumber) includes geocoding tables for most of the world based on number prefixes. It also knows how to identify to which country a number belongs.

We suggest you prepare your own tables by pairing libphonenumber or its tables (or one of its many ports and clones), with one of the many available geocoding libraries.

Note that it is OK for a pre-processing step to use online services to build the needed geocoding database to be used offline... We just don't want to rely on external services when performing lookups ;)

*Final note*: If there's anything you don't understand or is ambiguous, open an issue in your repository with the question ;)

---

[Go back to the Problems README](README.md)
