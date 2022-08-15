# e-commerce-backend
This is a ORM challenge using the backend for an ecommerce website using the database and servers. Sequelize is used to crate, drop and populate the tables in ecommerce database.

## Built with 
* Node,
* MySQL 2
* javaScript
* Insomnia 
  
## Installation 
* You must be sure to have installed MySql before being able to use this application!
* https://dev.mysql.com/downloads/mysql/

To install: From your terminal run 
git clone git@github.com:KyleAxley/employee-tracker.git

After you have cloned the repo, open the application with VScode and run "npm i" in terminal to install the required packages associated with this application.
* it is important to change the DB_USER and DB_PW in the .env file to match your username and password when you created your mysql account. 
  
Once the packages are installed you will then run "mysql -u root -p" in the command line and input your mysql password when prompted. after connecting to mysql you will then need to create the database. Run "source db/schema.sql" to create the database and tables. To populate the database you will need to "quit" out of mysql and then run the command "npm run seed". After it has comepleted you can then start the server with "node server" or "nodemon" in the command line. 


## Demo 
https://youtu.be/OfAscuBu4RY

https://drive.google.com/file/d/1pi9JVBWqf-Xa-Eymw1hVo0VlnV7xBDLg/view

## Lesson 
This challenge was relatively on the easier side. This challenge though did give me more practice with using Insomnia which was something that I was still uncomfortable with.