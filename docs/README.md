wdio-mocha-js-documentation

# wdio-mocha-js-documentation

## Table of contents

### Variables

- [USER\_NAME](README.md#user_name)

### Functions

- [loadConfig](README.md#loadconfig)

## Variables

### USER\_NAME

• `Const` **USER\_NAME**: `string`

#### Defined in

[config-helper.ts:30](https://github.com/BhaskarMantralaHub/wdio-mocha-js/blob/a932e05/src/config/config-helper.ts#L30)

## Functions

### loadConfig

▸ **loadConfig**(): `void`

Loads configuration from .env file when wdio.conf file loads and validates required properties from .env.example file

**`File`**

.env.example - Has all required properties to support the project

**`File`**

.env - local file - should have all property values set as per .env.example

#### Returns

`void`

void

#### Defined in

[config-helper.ts:11](https://github.com/BhaskarMantralaHub/wdio-mocha-js/blob/a932e05/src/config/config-helper.ts#L11)
