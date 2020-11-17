# About the App

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

## Icons

We use custom icons in the app via Fontello. See the [Expo documentation](https://docs.expo.io/guides/icons/) for full details.
TLDR: convert multiple `.svg` icons to a single `.ttf` font file, which we load into the app, and then use via our `CustomIcon` component.

To update icons:

1. Upload new icon set to [Fontello](https://fontello.com/). Ensure that the `Default (css) name` of each glyph is consistent across icon updates (or remember to change the new icon names!).

2. Ensure you have the icons you wish to include in the icon set selected. Click the `Download webfont` button.

3. replace the `assets/icons/fontello.ttf` file, and the `js/components/FireIcon/config.json` with the new `fontello.ttf` and `config.json`, respectively.

4. Update `CUSTOM_ICONS` of `js/components/FireIcon/iconNames.js` with the new icon name.
```diff
export const CUSTOM_ICONS = {
  CAR_DOOR: 'cardoor',
+ NEW_ICON: 'new_icon',
};
```

5. Test out the new icon via the `CustomIcon` component!
```jsx
<CustomIcon name={ICON_NAMES.NEW_ICON} ... />
```

## Team

* Ryan Biette - UX Researcher
* Ki Ki Chan - Mobile & Web Developer
* Shine Cho - Co-Founder, Legal & Partnerships
* Tati Doyle - Web Developer
* Meha Elhence - UX Designer
* Belen Farias - UX Designer
* Jacob Jaffe - Mobile Developer
* Jiachen Jiang - Product
* Chan Kang - UX Researcher
* Austen Keene - Web Developer
* Hannah Kim - Web Developer
* Janine Kim - UX Researcher
* Khaliun Narangerel - Mobile Developer
* Isha Patnaik - UX Researcher
* Jack Rosenberg - Mobile Developer
* Ki Wan Sim - Co-Founder, Product & Mobile
* Jennifer Weng - UX Designer
