# Todo App with React and AspNetCore 6.0

https://localhost:44488/

```bash
    nvm install 17.8.0
    npm install npm@latest -g

    dotnet tool install -g Microsoft.Tye --prerelease

    # "lint": "eslint \"./src/**/*.{js,ts,tsx}\""
    npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

## DotNetCore

### Enable Open Api

[Get started with Swashbuckle and ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio)

```bash
    # open api support
    dotnet add package Swashbuckle.AspNetCore --version 6.1.*
```

`Program.cs`

```csharp
    // Add services to the container.
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }
```

https://localhost:7288/swagger/index.html

```bash
    # open api support
    dotnet add package Swashbuckle.AspNetCore --version 6.1.*


    # ef core libraries
    dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.*
    dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 6.3.*

```

## Testing production deployment

```bash
    dotnet publish -o out
    dotnet TodoAppReactAspNetCore.dll
```

## SpaProxy (In Development only)

`Microsoft.AspNetCore.SpaProxy` is based on [startup assemblies](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/platform-specific-configuration?view=aspnetcore-6.0) and the middleware that:

1. if no webpack server started starts one and redirects
2. redirects to already started webpack webserver

`spa.proxy.json`

```json
{
  // https://github.com/dotnet/aspnetcore/blob/f9ae0f5d30be2de3c0de61b5673bd8873231d70a/src/Middleware/Spa/SpaProxy/src/SpaDevelopmentServerOptions.cs
  "SpaProxyServer": {
    "ServerUrl": "https://localhost:44488"
  }
}
```

http-proxy-middleware ^0.19.1 → ^2.0.6

## NPM Upgrade

```bash
    npm outdated

    npm install -g npm-check-updates
    npx npm-check-updates
    ncu -u

    npm update
    npm install
```

## Tooling

- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
- [winget cli](https://github.com/microsoft/winget-cli/releases)
