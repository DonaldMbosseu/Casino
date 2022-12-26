# :computer: Functioning
This project was done using Node and the interface using React.

To fully run the application with: api server, build-watch, and browsersync, use the following commands:

Use `docker network create --subnet=172.18.0.0/16 npm-net` to create a user defined network.

To start browsersync on ports 3000 and 3001.
```bash
docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -p 3000:3000 -p 3001:3001 --net npm-net node:16-alpine npm run dev:livereload
```

To start the build-watch loop
```bash
docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app node:16-alpine npm run dev:build-watch
```

To start the api server
```bash
docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -p 8080:8080 --net npm-net --ip 172.18.0.8 node:16-alpine npm run start
```

# :book: Summary
#This project is actually a series of questions which have been all solved in this project just by modifying my components and adapting them to the questions.

Question 1:
Write a function that connects to https://restcountries.eu/ and gets a unique country from a
specific name given using the Node back end and send it to the front end.

Question 2:
Using the same API ( https://restcountries.eu/ ), and from an array of string, write a function
that returns a list of countries where their name matches at least a part of one of these string
use the Node back end and send it to the front end.

Question 3:
Using the same API ( https://restcountries.eu/ ) in the React front end list all the countries
and a field to filter the country by name.

Question 4:
Considering a Slot machine defined like this:
- Reel1: [“cherry”, ”lemon”, “apple”, ”lemon”, “banana”, “banana”, ”lemon”, ”lemon”]
- Reel2: [”lemon”, “apple”, ”lemon”, “lemon”, “cherry”, “apple”, ”banana”, ”lemon”]
- Reel3: [”lemon”, “apple”, ”lemon”, “apple”, “cherry”, “lemon”, ”banana”, ”lemon”]
Coins:
The user start with 20 coins, when the user run the function the user will lose 1 coin,
1 spin = 1 coin
. 3 cherries in a row: won 50 coins
. 2 cherries in a row: won 40 coins
. 3 Apples in a row: won 20 coins
. 2 Apples in a row: won 10 coins
. 3 Bananas in a row: won 15 coins
. 2 Bananas in a row: won 5 coins
. 3 lemons in a row: won 3 coins
Using these data, create a function that, when it’s called by the front end, gives back the
result of a spin and show the result.

#SQL part
Question 1:
Use these sentences to draw a schema of a database you would create to store these
information.
. You are working in a casino.
. A casino has games.
. Each game has a unique type.
. Each game has one or more countries where players are allowed to bet from.
. A player may or may not have a favorite game.
Send the image of the schema and also the sql to create the database and tables
Question 2:
Write based on above, a SQL query to get all players that have games of type “SLOT” as
their favorite games

