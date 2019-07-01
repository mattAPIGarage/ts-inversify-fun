# Inversify test playground

## Note:
The line `"types": ["reflect-metadata"]` caused [grief](https://github.com/inversify/InversifyJS/issues/667), and seems this solves the issue: `"types": ["reflect-metadata", "jest", "node"]`. 

If the warning *Experimental support for decorators is a feature that is subject to change in a future release. Set the ‘experimentalDecorators’ option to remove this warning.* shows in yur VS Code even after you have the proper setting in `tsconfig.json` (i.e. `experimentalDecorators: true`), add the following to your vscode `setting.json`.

```
"javascript.implicitProjectConfig.experimentalDecorators": true
```

# Reference:
- [TypeDI](https://github.com/typestack/typedi)
- [Dependency Injection in TypeScript](https://nehalist.io/dependency-injection-in-typescript/)
- [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Decorators & metadata reflection in TypeScript: From Novice to Expert (Part IV)](http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-4)