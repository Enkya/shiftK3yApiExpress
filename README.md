# ShiftK3y Express APi
This is an express js implementation for the ShiftK3y API.
It allows for the creation of employees, departments and then adding clientele information. It also allows for the creation of different resources to be used in tracking license compliance

#### Technologies used
- Data Host: Cloud SQL on Google Cloud Platform
- Database Language: Postgres
- Server: Express JS
- Serverside Language: Node JS

#### Installation requirements
- [Node.js](https://nodejs.org/).

#### Testing 
```
npm run test
```
To test the app in watch mode, Run `yarn test:dev`. This listens to changes in your files and runs the tests as soon as there's a change in the files.

## Options

The manuals will show all the flags and options which are available for the respective tasks.
If you find yourself in a situation where you always define certain flags in order to
make the CLI compliant to your project, you can move those definitions also into a file called
`.sequelizerc`. The file will get `require`d if available and can therefore be either a JSON file
or a Node.JS script that exports a hash. You can also use the `--options-path` option to declare a
path to another configuration file.  

### Example for a Node.JS script

```js
var path = require('path')

module.exports = {
  'config':          path.resolve('config', 'database.json'),
  'migrations-path': path.resolve('db', 'migrate')
}
```

This will configure the CLI to always treat `config/database.json` as config file and
`db/migrate` as the directory for migrations.

### Configuration file

By default the CLI will try to use the file `config/config.js` and `config/config.json`. You can modify that path either via the `--config` flag or via the option mentioned earlier. Here is how a configuration file might look like (this is the one that `sequelize init` generates):

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "gcp": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

The properties can also be combined to a `url`:

```json
{
  "development":  {
    "url": "mysql://root:password@mysql_host.com/database_name",
    "dialect": "mysql"
  }
}
```

In case of a JS file it obviously needs to `module.exports` the object.
Optionally, it's possible to put all the configuration to the `url` option. The format is explained in the section below.

### Configuration Connection String

As an alternative to the `--config` option with configuration files defining your database, you can
use the `--url` option to pass in a connection string. For example:

`sequelize db:migrate --url 'mysql://root:password@mysql_host.com/database_name'`

### Configuration for connecting over SSL

Ensure ssl is specified in both `dialectOptions` and in the base config.

```
{
    "production": {
        "use_env_variable":"DB_CONNECTION_STRING",
        "dialect":"postgres",
        "ssl": true,
        "dialectOptions": {
            "ssl": true
        }
    }
}
```

### Storage

There are three types of storage that you can use: `sequelize`, `json`, and `none`.

- `sequelize` : stores migrations and seeds in a table on the sequelize database
- `json` : stores migrations and seeds on a json file
- `none` : does not store any migration/seed


#### Migration

By default the CLI will create a table in your database called `SequelizeMeta` containing an entry
for each executed migration. To change this behavior, there are three options you can add to the
configuration file. Using `migrationStorage`, you can choose the type of storage to be used for
migrations. If you choose `json`, you can specify the path of the file using `migrationStoragePath`
or the CLI will write to the file `sequelize-meta.json`. If you want to keep the information in the
database, using `sequelize`, but want to use a different table, you can change the table name using
`migrationStorageTableName`.

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",

    // Use a different storage type. Default: sequelize
    "migrationStorage": "json",

    // Use a different file name. Default: sequelize-meta.json
    "migrationStoragePath": "sequelizeMeta.json",

    // Use a different table name. Default: SequelizeMeta
    "migrationStorageTableName": "sequelize_meta"
  }
}
```

NOTE: The `none` storage is not recommended as a migration storage. If you decide to use it, be
aware of the implications of having no record of what migrations did or didn't run.


#### Seed

By default the CLI will not save any seed that is executed. If you choose to change this behavior (!),
you can use `seederStorage` in the configuration file to change the storage type. If you choose `json`,
you can specify the path of the file using `seederStoragePath` or the CLI will write to the file
`sequelize-data.json`. If you want to keep the information in the database, using `sequelize`, you can
specify the table name using `seederStorageTableName`, or it will default to `SequelizeData`.

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    // Use a different storage. Default: none
    "seederStorage": "json",
    // Use a different file name. Default: sequelize-data.json
    "seederStoragePath": "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    "seederStorageTableName": "sequelize_data"
  }
}
```