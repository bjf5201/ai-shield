# ai-shield

Generates various config files to keep bots/data crawlers from stealing your content without your permission

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ai-shield.svg)](https://npmjs.org/package/ai-shield)
[![Downloads/week](https://img.shields.io/npm/dw/ai-shield.svg)](https://npmjs.org/package/ai-shield)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
INSTALLATION:
$ npm install -D ai-shield
should be installed as a dev dependency

INFO:
$ shield --version
ai-shield/0.0.0 linux-x64 node-v20.16.0

$ shield --help [COMMAND]

USAGE:
  $ shield [COMMAND] --path <path> --sitemap <bool> --sitemap-path <url> --blocklist <name...>
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`shield hello PERSON`](#shield-hello-person)
- [`shield hello world`](#shield-hello-world)
- [`shield help [COMMAND]`](#shield-help-command)
- [`shield plugins`](#shield-plugins)
- [`shield plugins add PLUGIN`](#shield-plugins-add-plugin)
- [`shield plugins:inspect PLUGIN...`](#shield-pluginsinspect-plugin)
- [`shield plugins install PLUGIN`](#shield-plugins-install-plugin)
- [`shield plugins link PATH`](#shield-plugins-link-path)
- [`shield plugins remove [PLUGIN]`](#shield-plugins-remove-plugin)
- [`shield plugins reset`](#shield-plugins-reset)
- [`shield plugins uninstall [PLUGIN]`](#shield-plugins-uninstall-plugin)
- [`shield plugins unlink [PLUGIN]`](#shield-plugins-unlink-plugin)
- [`shield plugins update`](#shield-plugins-update)

## `shield hello PERSON`

Say hello

```
USAGE
  $ shield hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ shield hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/bjf5201/ai-shield/blob/v0.0.0/src/commands/hello/index.ts)_

## `shield hello world`

Say hello world

```
USAGE
  $ shield hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ shield hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/bjf5201/ai-shield/blob/v0.0.0/src/commands/hello/world.ts)_

## `shield help [COMMAND]`

Display help for shield.

```
USAGE
  $ shield help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for shield.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.10/src/commands/help.ts)_

## `shield plugins`

List installed plugins.

```
USAGE
  $ shield plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ shield plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/index.ts)_

## `shield plugins add PLUGIN`

Installs a plugin into shield.

```
USAGE
  $ shield plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into shield.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SHIELD_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SHIELD_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ shield plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ shield plugins add myplugin

  Install a plugin from a github url.

    $ shield plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ shield plugins add someuser/someplugin
```

## `shield plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ shield plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ shield plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/inspect.ts)_

## `shield plugins install PLUGIN`

Installs a plugin into shield.

```
USAGE
  $ shield plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into shield.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SHIELD_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SHIELD_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ shield plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ shield plugins install myplugin

  Install a plugin from a github url.

    $ shield plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ shield plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/install.ts)_

## `shield plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ shield plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ shield plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/link.ts)_

## `shield plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ shield plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ shield plugins unlink
  $ shield plugins remove

EXAMPLES
  $ shield plugins remove myplugin
```

## `shield plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ shield plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/reset.ts)_

## `shield plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ shield plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ shield plugins unlink
  $ shield plugins remove

EXAMPLES
  $ shield plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/uninstall.ts)_

## `shield plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ shield plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ shield plugins unlink
  $ shield plugins remove

EXAMPLES
  $ shield plugins unlink myplugin
```

## `shield plugins update`

Update installed plugins.

```
USAGE
  $ shield plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.6/src/commands/plugins/update.ts)_

<!-- commandsstop -->
