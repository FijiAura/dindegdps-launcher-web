# DindeGDPS - Web Folder
> [!IMPORTANT]  
> Code will be updated, DO NOT TRANSLATE YET

On DindeGDPS' default mode, there is a "browser" that serves as a welcome screen. It contains socials, settings and credits.

On the next DindeGDPS release, other languages will be supported too! The goal of this repo is to let people translate this browser in their own language!

![image](https://github.com/DimisAIO/dindegdps-launcher-web/assets/63162857/84cb3a48-6a0e-4a6e-a9aa-7c5fc0064362)

## Translation

```
-- Notes --
yourlang => your language, must be ISO-639-1 compatible
See https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes

I might make a tool for translating since this is hurrendous

-- Translations --

more.html:
Line 30

index.html:
Line 37 to 45
Line 51

Note: At the settings link, make sure to replace
transitionToPage('settings.html?en')
with
transitionToPage('settings.html?yourlang')

credits.html:
Line 20, 22, 24 (only parenthesis text)
Line 30, 38, 43 and 44

settings.html:
Line 65-67
Line 71, 73, 74 (name="" too), 75-76
Line 81 (name="" too), 82-83
Line 87-89 (name and placeholder too) (add your language on the list)
Line 96-98 (name too)

libdinde-locale.js
copy paste from english (or another language) set your language code and translate!
```
