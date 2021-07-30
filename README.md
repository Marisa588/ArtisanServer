![Rad-Records-Beta-Logo](https://github.com/Marisa588/ArtisanClient/blob/main/Random%20Assets/radrecords_v0.1_small.png)

https://radradclient.herokuapp.com

# What is this?
This is the server-side application for Rad Records. With it, you can push record data to a table via the Rad Records client.

# Dependencies
`npm install bcrypt dotenv express jsonwebtoken pg pg-hstore sequelize multer multer-s3 aws-sdk cors`

## ❗ Important
Server listens on 3001, so please direct all get requests accordingly. This port was chosen to free port 3000 for React testing.
