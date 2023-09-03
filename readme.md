# What GM are ya?

What GM are ya? is a game in which a random chess GM is chosen and you
have to guess who it is solely based on your previous guesses. For example,
If the chosen master is of the same country as the GM you guessed, the game 
will inform you.

This game is 100% free and open-source. If you want to try out this challenge, 
<a href="">you can find the game here</a>

## Contributing

Since this project is completely free and open-source, any help to keep this 
site updated and improving is extremely welcome. This project is still up thanks solely 
to kind contributors who devote even if just a little of their time to help.

If you are willing to contribute to this project, you can:

* [Help updating or extending our database](#help-updating-or-extending-our-database)
* [Contribute to open issues](https://github.com/vidacalura/what-GM-are-ya/issues)
* [Add to the documentation](https://github.com/vidacalura/what-GM-are-ya/blob/main/readme.md)


## Help updating or extending our database

If you want to add a GM that's not on our database yet, or change some outdated
info on an existing one, run on your terminal:

```bash
git clone https://github.com/vidacalura/what-GM-are-ya
cd what-GM-are-ya/dist/JS
ls
```

After doing so, you should see a `db.js` file. That's where all the GMs data is stored.

After opening this file, you will see all GMs data saved on a `map` called `GMsMap`. 
If you want to add a new GM to this map, all you have to do is copy the code below 
replacing the example to your own GM.

```javascript
GMsMap.set("magnus carlsen", new ChessPlayer( // First and last names of the GM, all in lowercase
    "Magnus Carlsen",                         // First and last name of the GM with the initials in uppercase
    "NO",                                     // GM's country abbreviated
    2835,                                     // GM's rating
    1,                                        // GM's world rank
    "M",                                      // GM's gender M or F
    calculateAge(new Date("11/30/1990"))      // Call to calculate the GM's age based on his/her birthday
));
```

If you want to change outdated info on a GM, just find where he/she is inserted into 
the map, and replace the old info

#

Special thanks to <a href="https://github.com/TulioTheGreat">TulioTheGreat</a> for helping with the design