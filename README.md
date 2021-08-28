vsc_profiler
============

Create and manage vs code profiles

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/vsc_profiler.svg)](https://npmjs.org/package/vsc_profiler)
[![Downloads/week](https://img.shields.io/npm/dw/vsc_profiler.svg)](https://npmjs.org/package/vsc_profiler)
[![License](https://img.shields.io/npm/l/vsc_profiler.svg)](https://github.com/oillescas/vsc_profiler/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g vsc_profiler
$ vscp COMMAND
running command...
$ vscp (-v|--version|version)
vsc_profiler/0.0.0 darwin-x64 node-v12.21.0
$ vscp --help [COMMAND]
USAGE
  $ vscp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vscp delete [FILE]`](#vscp-delete-file)
* [`vscp extensions PROFILE`](#vscp-extensions-profile)
* [`vscp help [COMMAND]`](#vscp-help-command)
* [`vscp list`](#vscp-list)
* [`vscp new PROFILE`](#vscp-new-profile)

## `vscp delete [FILE]`

describe the command here

```
USAGE
  $ vscp delete [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/delete.ts](https://github.com/oillescas/vsc_profiler/blob/v0.0.0/src/commands/delete.ts)_

## `vscp extensions PROFILE`

Install extension in your vscode profile

```
USAGE
  $ vscp extensions PROFILE

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLES
  $ vscp extensions <profile name>
  $ vscp extensions jscode
```

_See code: [src/commands/extensions.ts](https://github.com/oillescas/vsc_profiler/blob/v0.0.0/src/commands/extensions.ts)_

## `vscp help [COMMAND]`

display help for vscp

```
USAGE
  $ vscp help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `vscp list`

List your vscode profiles

```
USAGE
  $ vscp list

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ vscp list
```

_See code: [src/commands/list.ts](https://github.com/oillescas/vsc_profiler/blob/v0.0.0/src/commands/list.ts)_

## `vscp new PROFILE`

create new profile of vs code

```
USAGE
  $ vscp new PROFILE

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLES
  $ vscp new <profile name>
  $ vscp new jscode
```

_See code: [src/commands/new.ts](https://github.com/oillescas/vsc_profiler/blob/v0.0.0/src/commands/new.ts)_
<!-- commandsstop -->
