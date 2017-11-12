# danger-plugin-complete-pr

[![Build Status](https://travis-ci.org/nylo-andry/danger-plugin-complete-pr.svg?branch=master)](https://travis-ci.org/nylo-andry/danger-plugin-complete-pr)
[![npm version](https://badge.fury.io/js/danger-plugin-complete-pr.svg)](https://badge.fury.io/js/danger-plugin-complete-pr)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> A Danger plugin to verify the completion of a pull request on GitHub.

## Usage

Install:

```sh
yarn add danger-plugin-complete-pr --dev
```

At a glance:

_dangerfile.js_
```js
import * as completePr from 'danger-plugin-complete-pr'

completePr.checkAssignees();
completePr.checkDescription(10);
completePr.checkTitle(/^\[[A-Za-z]+-\d+\]/);
```

## API

### checkAssignees([reporter])
Checks is the current pull request has any assignees.

Arguments:

- [`reporter`] (_Function_): The reporter (`message`, `warn` or `fail`) to call if the pull request has no assignees. 
  - Default value: `fail`

### checkDescription(minimumLength, [reporter])
Checks if the description of the pull request is long enough.

Arguments:

- `minimumLength` (_Number_): The minimum length for a description to be valid.
- [`reporter`] (_Function_): The reporter (`message`, `warn` or `fail`) to call if the pull request's description is too short. 
  - Default value: `fail`

### checkTitle(pattern, [reporter])
Checks if the title of the pull request matches a given pattern.

Arguments:

- `pattern` (_RegExp_): The pattern to test the title with.
- [`reporter`] (_Function_): The reporter (`message`, `warn` or `fail`) to call if the pull request's title is invalid. 
  - Default value: `fail`

## Changelog

See the GitHub [release history](https://github.com/nylo-andry/danger-plugin-complete-pr/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
