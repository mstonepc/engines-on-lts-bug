# engines-on-lts-bug
Reproduce live-reload bug

Error this repo is reproducing:

```sh
You specified a `"srcDir": /` which does not exist and did not specify `"allowEmpty": true`.
```

It happens anytime a change occurs during the development and ember-cli tries to rebuild.

- Out of the box LTS ember app
- Out of the box Addon w/ engines setup as described in [ember-engines.com/docs](https://ember-engines.com/docs/quickstart)https://ember-engines.com/docs/quickstart
