## DATA

# Data layer

- user:

  - isLogged
  - username
  - token
  - id

- ui:

  - isLoading (boolean)

- usersProfiles

# Data modifications

- user:

  - login
  - logout

- set isLoading
- unset isLoading

- loadUsersProfiles
- add a user to enemies
- add a user to friends

## COMPONENTS

# App

- shows layout component

# Layout

- shows the header with heading title "Social"
- Shows the buttons to "Sign in", "Log in" or "Log out" depending if user isLogged
- shows the outlet

# Loader

- shows the loader spinner when isLoading is set to true

# RegisterForm

- Shows an input for the "username"
- Shows an input for the "password"
- Shows an input for the "confirm password"
- Shows an input for the "email"
- Shows an input for the "location"
- Shows an input for the "age"
- Shows an input for the "avatar" image
- Show a button to sign up
- On submit calls the action assigned

# LoginForm

- Shows an input for the "username"
- Shows an input for the "password"
- Shows a button to log in
- On submit calls the action assigned

# List of users

- Receives the list of usersProfiles
- Shows the list of users
- Sends a user to UserCar component for each user of the list

# UserCard

- Receives a user
- Receives the action to send to friends
- Receives the action to send to enemies
- Shows a user data:
  - image
  - username
  - age
  - email
