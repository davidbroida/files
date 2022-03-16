<!-- Bug #1- When an incorrect username or password is given the app crashes.
- Not sure how to fix. Tried using "try" and "catch" and "next"to prevent the app from crashing but the app still crashes.

Bug #2- GET users/:username - if user cannot be found, it returns an empty object rather than a 404 err. if (!user) returns an empty array whereas if (!result.rows[0]) catches a user not being found.

Remaining bugs I belive are in the PATCH and DELETE routes... 
But I cannot access the PATCH route or figure out how to navigate the app as an authorized user.


Questions for Don (My Mentor):
1. How to create a dummy token to test Bug #2
2. How to register as an admin/ navigate the app as an admin
3. Why isn't the PATCH route working when it should be?


Notes:

{
	"username": "davidbroida4",
	"password": "password",
	"first_name": "david",
	"last_name": "broida",
	"email":"david@gmail.com",
	"phone":"888-888-8888"
}

"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkYnJvaWRhNCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjQ3NDAxNTYyfQ.DzVgImNrG_Z5-03OZNkgT14SiAuBZ1C0ZCstFz4Y2x8" -->