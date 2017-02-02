# meteor-vue2-example
Meteor &amp; Vue 2.0 example

To create a meteor + vue app:

```
meteor remove blaze-html-templates jquery
meteor add static-html akryum:vue-component
meteor npm i -S babel-runtime vue vue-meteor-tracker vue-router
meteor update
meteor update --all-packages
meteor npm i
meteor
```

Want some less in `.vue` files?

```
meteor add akryum:vue-less
```

Exists for sass, stylus, pug...

App structure example:

```
src
- client.js
- index.html
- server.js
- imports
  - client
    - client.js
    - components
      - App.vue
  - server
    - server.js
    - publications.js
  - lib
    - collections.js
    - methods.js
```

ESLint?

```
meteor npm i -SD babel-eslint eslint eslint-config-standard eslint-plugin-html eslint-plugin-promise eslint-plugin-standard
```
