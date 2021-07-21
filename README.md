# mongoose-flights-lab

To push myself and gain real-world experience, I modeled Delta Airlines to create this lab.
This led to a few changes by the end of the project. Overall, I feel this was incredibly challenging, and a bit over my head.

### Creating New Flights
Instead of having a form, I created an asynchronous function with generators to achieve a desired result.
There is a link that shows up on the page to generate 100 Flights at the click of a button. When the flights are done being generated, it redirects you back to the home page to retry your search.

### Searching Flights
Instead of a table to view all flights, I created a form that allows for input of:
* Origin
* Destination
* Trip Type (Round Trip / One Way)
* Departure / Return Dates
* Number of Passengers

(Note: I ran out of time to switch out the departure/return dates based on the trip type. If your trip is one-way, it just ignores the return date.)

### Flights Created 1 Year in the Future
Because of the use case and matching flights to the exact date query the user inputs (as expected when searching for a flight) creating the flights up to 1 year in advance basically makes it so that you will never find a flight. So I created the flights only up to one month in advance, and populated it with around 2000 records to get something showing up on any given day.

### Flights Not Found
If there are no flights matching your search then it will show a message that will ask you if you want to generate 100 flights. I did this so the server doesn't get overloaded

### Required Fields on Payment / Checkout
Note: You only need to enter the passengers first and last name fields. Everything else is optional.

## Backlog Items
In the future, I want to add better error handling, and clean this up. This was really difficult and I didn't have much time to go back and clean up everything.
I would also like to add the ability to only have one date on the search if the flight is a one way. I would also like to expand the flights to more areas.

