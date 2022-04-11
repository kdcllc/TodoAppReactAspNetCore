# docker build --pull --rm -f "./src/TodoAppReactAspNetCore/Dockerfile" -t easykeysacr.azurecr.io/todoappreactaspnetcore:latest "."
# See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.
# test

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

WORKDIR /src
COPY ["src/TodoAppReactAspNetCore/TodoAppReactAspNetCore.csproj", "src/TodoAppReactAspNetCore/"]
RUN dotnet restore "src/TodoAppReactAspNetCore/TodoAppReactAspNetCore.csproj"
COPY . .
WORKDIR "/src/src/TodoAppReactAspNetCore"
RUN dotnet build "TodoAppReactAspNetCore.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TodoAppReactAspNetCore.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TodoAppReactAspNetCore.dll"]