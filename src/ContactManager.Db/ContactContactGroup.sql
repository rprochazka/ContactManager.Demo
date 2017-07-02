CREATE TABLE [dbo].[ContactsContactGroups]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ContactId] INT NOT NULL, 
    [ContactGroupId] INT NOT NULL, 
    CONSTRAINT [FK_ContactContactGroup_Contact] FOREIGN KEY ([ContactId]) REFERENCES [Contact]([Id]), 
    CONSTRAINT [FK_ContactContactGroup_ContactGroup] FOREIGN KEY ([ContactGroupId]) REFERENCES [ContactGroup]([Id]) 
)
