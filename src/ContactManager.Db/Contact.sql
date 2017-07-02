CREATE TABLE [dbo].[Contact]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [FirstName] NVARCHAR(50) NULL, 
    [LastName] NVARCHAR(100) NOT NULL, 
    [Street] NCHAR(100) NULL, 
    [City] NVARCHAR(100) NULL, 
    [ZipCode] NVARCHAR(50) NULL, 
    [PhoneNumber] NVARCHAR(10) NULL, 
    [Email] NVARCHAR(100) NULL
)
