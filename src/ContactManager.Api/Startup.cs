using System.Reflection;
using AutoMapper;
using ContactManager.Api.Filters;
using ContactManager.Common.Configs;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Microsoft.Extensions.PlatformAbstractions;
using Swashbuckle.AspNetCore.Swagger;


namespace ContactManager.Api
{
    public class Startup
    {
        private readonly IHostingEnvironment hostingEnv;
        private readonly ILoggerFactory loggerFactory;

        public Startup(IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            hostingEnv = env;
            this.loggerFactory = loggerFactory;
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // application config load            
            var dbConnectionString = Configuration.GetConnectionString("DefaultConnection");            
            services.Configure<ApplicationConfig>(config => config.SqlDbConnectionString = dbConnectionString);
            
            Data.EfCore.Bootstrapper.Init(services);
            Data.Repository.Bootstrapper.Init(services);
            Services.Bootstrapper.Init(services);

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });


            services.AddMvc()
                .AddJsonOptions(
                    opts =>
                    {
                        opts.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    })
                .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>())
                .AddMvcOptions(o => { o.Filters.Add(new GlobalExceptionFilter(loggerFactory, hostingEnv.IsProduction())); });

            services.AddAutoMapper(typeof(MappingProfile).GetTypeInfo().Assembly, typeof(Data.Repository.MappingProfile).GetTypeInfo().Assembly);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1",
                    new Info
                    {
                        Title = "My API - V1",
                        Version = "v1"
                    }
                );

                c.DescribeAllEnumsAsStrings();

                var filePath = System.IO.Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, $"{hostingEnv.ApplicationName}.xml");
                c.IncludeXmlComments(filePath);
            });
        }    

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));

            if (!env.IsProduction())
            {
                loggerFactory.AddDebug();
                app.UseDeveloperExceptionPage();
            }
            
            app.UseCors("CorsPolicy");
            
            app.UseMvc();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
        }
    }
}
