# wp-graphql-jwt-authentication-wp-cli
wp-cli command for retrieving auth and refresh tokens from wpGrapQL

## Requires
The following plugins must be installed and active in order for this wp-cli command to work,
- [wp-graphql](https://github.com/wp-graphql/wp-graphql)
- [wp-graphql-jwt-authentication](https://github.com/wp-graphql/wp-graphql-jwt-authentication)

## Installation
```shell
# Installing the package using an HTTPS link
$ wp package install https://github.com/gilzow/wp-graphql-jwt-authentication-wp-cli.git

# Installing the package using an SSH link
$ wp package install git@github.com:gilzow/wp-graphql-jwt-authentication-wp-cli.git
```

## Usage
```shell
# See all options and parameters
$ wp help graphql_auth get-graphql-token

# Get a refreshToken and return only the token value
$ wp graphql_auth get-graphql-token admin password123 --porcelain

# Supports the alias `token` and output of json format
$ wp graphql_auth token admin password123 --return=authToken --format=json

```
