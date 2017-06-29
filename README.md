# ngx-query
[![Build Status](https://travis-ci.org/xuemingfeng/ngx-query.svg?branch=master)](https://travis-ci.org/xuemingfeng/ngx-query)
[![codecov](https://codecov.io/gh/xuemingfeng/ngx-query/branch/master/graph/badge.svg)](https://codecov.io/gh/xuemingfeng/ngx-query)
[![npm version](https://badge.fury.io/js/ngx-query.svg)](http://badge.fury.io/js/ngx-query)
[![devDependency Status](https://david-dm.org/xuemingfeng/ngx-query/dev-status.svg)](https://david-dm.org/xuemingfeng/ngx-query?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/xuemingfeng/ngx-query.svg)](https://github.com/xuemingfeng/ngx-query/issues)
[![GitHub stars](https://img.shields.io/github/stars/xuemingfeng/ngx-query.svg)](https://github.com/xuemingfeng/ngx-query/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/xuemingfeng/ngx-query/master/LICENSE)

## Demo
https://xuemingfeng.github.io/ngx-query/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

ngx-query is a component for Angular 4+.
A person searches data easily through ngx-query.

### Features
- Quck search panel
- Advanced search panel
- Query templates
- Custom value input box
- Custom Toolbar
- Multi-language


## Installation

Install through npm:
```
npm install --save ngx-query
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxQueryModule } from 'ngx-query';

@NgModule({
  imports: [
    NgxQueryModule.forRoot({
      labels:{
        buttons: {
          'quick': 'Quick',
          ...
        },
        ...
      },
      ...
    })
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<ng-query #ngxQuery [title]="queryTitle" [fields]="fields" [queryTemplates]="queryTemplates" (query)="search($event)"></ng-query>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/xuemingfeng/ngx-query/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-query/bundles/ngx-query.umd.js"></script>
<script>
    // everything is exported ngxQuery namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://xuemingfeng.github.io/ngx-query/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
