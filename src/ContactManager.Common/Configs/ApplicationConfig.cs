namespace ContactManager.Common.Configs
{
    public class ApplicationConfig : IApplicationConfig
    {
        public string SqlDbConnectionString
        {
            get; set;
        }
    }
}
