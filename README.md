# ContactManager.Demo

# App description
Its purpose is to demonstrate simple crud application for managing contacts. User is able to create a new contacts with first name, last name, email, street, city, email and phone fields, assign them to contact groups. Contacts can be edited, deleted and filtered by contact group.

#Implementation
SPA application with ASP.NET Core and MSSQL server on server side and Angular4 on client side. Other libraries/framework worth mentioning:
 - ef core 1.0 as ORM mapper
 - Automapper for mapping objects
 - FluentValidation for model validation
 - material-css for styling ui
 
Projects:
 - ContactManager.Api - server web api 
 - ContactManager.Client - frontend angular SPA application
 - ContactManager.Common - common server stuff
 - ContactManager.Data.EfCore - efcore dbcontext
 - ContactManager.Data.Repository - repository for managing data 
 - ContactManager.Db - database project for managing db structure
 - ContactManager.Entities - server business objects
 - ContactManager.Services - business layer
 
 #Instalation
 Server side
  - change connection string in appsettings.json
  - run db script to create db structure (ContactManager.Db\ContactManager.Db_Create.sql)
  - restore npm packages ... dotnet restore
  - run the app ... dotnet run (run on kestrel on http://localhost:5000/)
  
  Client side
   - install npm packages ... npm install
   - run the app ... npm start (assumes server is running on http://localhost:5000/)
