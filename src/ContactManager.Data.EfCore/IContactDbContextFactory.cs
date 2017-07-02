namespace ContactManager.Data.EfCore
{
    public interface IContactDbContextFactory
    {
        ContactDbContext Create();        
    }
}
