# Fire

Fire is a multilingual Know-Your-Immigrant-Rights mobile app, launching first in Los Angeles. We seek to educate, defend, and mobilize the immigrant community and its allies.

The immigrant community in Los Angeles is incredibly diverse in age, gender, status, nationality, and English literacy levels. Our goal is to close the information gap in the immigrant communities of Los Angeles, where 1 in 2 people do not speak English fluently.

As our communities are increasingly under attack by duplicitous tactics of ICE and the xenophobic policies of this administration, Fire will help to equip people with defense tools in times of crisis.

## Development

The Fire app follows a managed [Expo workflow](https://docs.expo.io/get-started/installation/)

To run the app:

```bash
yarn install
yarn start
```

and launch the app on your device / simulator / emulator via the expo client.

## Releases

The Fire app is configured for OTA updates via expo. This is managed by a github action against the `release` branch. Versioning is enforced via [standard-version-expo](https://www.npmjs.com/package/standard-version-expo).

To release over the air:

1. Ensure the `master` branch is up to date with the changes you want
2. checkout to a version bump branch (e.g. `jj/vb-0.0.12`) and run `yarn minor-version-bump`
3. PR that change into master (`jj/vb-0.0.12` -> `master`)
4. PR `master` -> `release`, to trigger the workflow.

That should automatically run the `Expo Publish` action workflow. You can validate that on the [`actions` tab](https://github.com/Fire-app/fire-mobile/actions).
