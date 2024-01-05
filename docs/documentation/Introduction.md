# Introduction

![Introduction image](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/Photo%202.%20DALL-E%20Generated.png)

<img src="https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/dark_logo.png" style="border: 1px solid #ddd; border-radius: 4px; padding: 5px; float: right;
 margin: 0 0 0 15px; width: 150px;" atl="esFerDev's Shop logo" /> Welcome to the official documentation of [esFerDev's Shop](https://esferdev.tebex.io). Here you can find information about the different scripts and their different configurations as well.

## Support
On our [Discord server](https://discord.gg/invite/c3ZscGYpZH) you can find a ticketing system to request help or support with configuration or problems with our scripts. In addition, we have implemented another category to ask about the scripts and ask different questions.

> This channel is called `#tickets`.
![Image of the tickets channel on Discord](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/Introduction_support.png)

## Secure instalation
To install the script, you must go to the Keymaster panel and download the asset there. [See a guide here.](../FiveM-Escrow-System/1.-Using-the-keymaster.md)

::: tip 💡 TIP
If you are trying to download a script to a server via FTP, make sure that your FTP client can load all files, even hidden ones; the .fxap file of a protected resource must be included. Some FTP programs omit these files. If you are having this problem, we recommend using [WinSCP](https://winscp.net/eng/download.php).
:::

After downloading, move your resource to the server and start it in the `server.cfg` file like any other script.
❗ Make sure to start it after the Framework base scripts, running it on the last lines will do.

Now you will need to install the `.sql` file that is included in the script, but if your script comes without this file then you can skip this step.

## `config.lua` and `locales.lua` files
### `config.lua`
In the config.lua file are all the options and configurations of the script fully modifiable, in each script there are different configurations, which are commented in this way:
```lua
Config.ExecuteWhileDead = true, -- This configuration will allow the player to execute the script while dead.
```

After this guide you have the different scripts called by their names, in which you can find the different configurations explained in detail.

In addition, here are the basic settings that come in all our scripts:

```lua
Config.SystemNotifications = 'pNotify'

Config.SQLMode = 'ghmattimysql' -- ghmattimysql or oxmysql

Config.Locale = 'en' -- "ES" for Spanish, "EN" for English language

Config.Commands = {
    ['adminranchmenu'] = {'adminrancho'},
    ['userranchmenu'] = {'rancho'}
}

Config.AdminPermissions = { -- Specify which ranks have access to the admin menu.
    'admin',
    'superadmin',
    'owner'
}

Config.MenuAlign = 'bottom-right' -- The align of the VORP menu.
Config.VorpNotification = 'vorp:TipRight' -- The type of the notification of VORP system.

Config.Exports = {
    ['pNotify'] = 'pNotify', -- The name of the script of pNotify (progressbar script in the esfer_requirements)
    ['Progress Bar'] = 'esfer_req_progressbar', -- The name of the script of esfer_req_progressbar (progressbar script in the esfer_requirements)
}
```

**`Config.SystemNotifications`** The system of notifications that the script will use.
> Two types by the moment: [`vorp`](https://github.com/VORPCORE/vorp-core-lua/blob/main/client/notifications.lua) and [`pNotify`](./Requirements-for-my-scripts.md#pNotify)

`Config.SQLMode` Which script your server uses to execute SQL commands. In most cases you don't need to change this option, but in older versions you need to change this setting and apply your resource that handles the execution of SQL commands on your server.

`Config.Locale` What language the script will be in. By default there will always be two: Spanish (`es`) and English (`en`).

**`Config.Commands`** The commands provided by the script. In any case, all commands can be named in different ways.
> The text in square brackets ['...'] is never changed.

> The different texts between braces are the same command but named in different ways. Example: to open the admin menu we name it in different ways `{'adminmenu', 'menuadmin', 'madmin'}`.

`Config.AdminPermissions` The groups that will have access to the administrator commands of that script.

**`Config.MenuAlign`** Where will the VORP menu appear
> Types: `left`, `top-left`, `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left` and `center`.

**`Config.VorpNotification`** Only if `Config.SystemNotifications = 'vorp'`. Where will the VORP notification appear.
> Types: `vorp:Tip`, `vorp:TipRight`, `vorp:TipBottom`, `vorp:ShowBasicTopNotification`, `vorp:ShowSimpleCenterText` and `vorp:ShowBottomRight`.

`Config.Exports` The name of the scripts of the esfer_requirements. This means that the script will try to use "export" function to call the script by their name, so put the exact name as here.

### `locales.lua`
This file contains all messages, notifications and translations into the different languages. By default there will always be two: English and Spanish, which are chosen in the `config.lua` file in the `Config.Locale` option at the top of the file.

You are free to add your own language to the file and run it on your own for your server. To translate everything into your language you will need to do the following:

1. Copy the English translations, from `Locals['en'] = {` to the last character of the file: `}`.
   ```lua{6-9} [locales.lua]
   Locales['es'] = {
    ['presssafe'] = 'Presiona ~e~[G]~q~ para abrir la caja fuerte',
    ...
   }

   Locales['en'] = {
    ['presssafe'] = 'Press ~e~[G]~q~ to open the safe',
    ...
   }
   ```
1. Paste the English translations just below and change the name between the brackets to whatever you want.
   ```lua{11-14} [locales.lua]
   Locales['es'] = {
    ['presssafe'] = 'Presiona ~e~[G]~q~ para abrir la caja fuerte',
    ...
   }

   Locales['en'] = {
    ['presssafe'] = 'Press ~e~[G]~q~ to open the safe',
    ...
   }

   Locales['fr'] = {
    ['presssafe'] = 'Press ~e~[G]~q~ to open the safe',
    ...
   }
   ```
1. Translate all the code into your language without changing the words in the square brackets.
   ```lua [locales.lua]
   Locales['fr'] = {
    ['presssafe'] = 'Press ~e~[G]~q~ to open the safe', // [!code --]
    ['presssafe'] = 'Appuyez sur ~e~[G]~q~ pour ouvrir le coffre-fort', // [!code ++]
    ...
   }
   ```
1. Change the language in the `config.lua` file in the `Config.Locale` option.
   ::: code-group

   ```lua [config.lua]
   Config.Locale = 'en' // [!code --]
   Config.Locale = 'fr' // [!code ++]
   ```

   ```lua{1} [locales.lua]
   Locales['fr'] = {
    ['presssafe'] = 'Appuyez sur ~e~[G]~q~ pour ouvrir le coffre-fort',
    ...
   }
   ```
