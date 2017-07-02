using System;
using System.Diagnostics;
using System.Linq;
using Microsoft.Extensions.Logging;

namespace ContactManager.Data.Repository.Logging
{
    public class EfCoreFilteredLoggerProvider : ILoggerProvider
    {
        private static readonly string[] categories =
        {
            typeof(Microsoft.EntityFrameworkCore.Storage.Internal.RelationalCommandBuilderFactory).FullName,
            typeof(Microsoft.EntityFrameworkCore.Storage.Internal.SqlServerConnection).FullName,
            typeof(Microsoft.EntityFrameworkCore.Storage.Internal.RawSqlCommandBuilder).FullName,
            typeof(Microsoft.EntityFrameworkCore.Internal.RelationalModelValidator).FullName,
            typeof(Microsoft.EntityFrameworkCore.DbContext).FullName,
            typeof(Microsoft.EntityFrameworkCore.Query.Internal.SqlServerQueryCompilationContextFactory).FullName,            
            typeof(Microsoft.EntityFrameworkCore.Query.ExpressionTranslators.Internal.SqlServerCompositeMethodCallTranslator).FullName,
            typeof(Microsoft.EntityFrameworkCore.Storage.IExecutionStrategy).FullName
        };

        private readonly bool enableDebugging;
        public EfCoreFilteredLoggerProvider(bool enableDebugging)
        {
            this.enableDebugging = enableDebugging;
        }

        public ILogger CreateLogger(string categoryName)
        {
            if (categories.Contains(categoryName))
            {
                return new MyLogger(enableDebugging);
            }            
            return new NullLogger();            
        }

        public void Dispose()
        { }

        private class MyLogger : ILogger
        {
            private readonly bool enableDebugging;
            public MyLogger(bool enableDebugging)
            {
                this.enableDebugging = enableDebugging;
            }

            public bool IsEnabled(LogLevel logLevel)
            {
                return enableDebugging || (logLevel == LogLevel.Error || logLevel == LogLevel.Critical);
            }

            public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
            {
                Debug.WriteLine(formatter(state, exception));
            }

            public IDisposable BeginScope<TState>(TState state)
            {
                return null;
            }
        }

        private class NullLogger : ILogger
        {
            public bool IsEnabled(LogLevel logLevel)
            {
                return false;
            }

            public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
            { }

            public IDisposable BeginScope<TState>(TState state)
            {
                return null;
            }
        }
    }
}