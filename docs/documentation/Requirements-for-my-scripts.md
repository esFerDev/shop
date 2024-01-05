![Thumbnail](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/Requirements.png)

<Badge type="warning" text="All scripts are standalone" />
# Requirements for esFerDev's Shop scripts

These scripts are included in some assets, such as `esfer_rancho`, `esfer_properties` and others.

The scripts that come inside are dependencies for the resources mentioned above, as the dependencies are put in the `README.txt` of each resource.

![Image of the README.txt of esfer_rancho](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/Requirements_readme_rancho.png)

In addition, you can use all these scripts on your server to create your own or insert them into someone else's code to impose the function. Here below we will explain how to use them for your server and their features.

## `lockpick`
<Badge type="warning" text="RedM & FiveM Script" />

[![Video of the lockpick resource](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/Requirements/watch_video.png)](https://www.youtube.com/watch?v=LkhQj8-CP-c)

This script allows to start a mini-game in which the player will have to pick a lock.

### Export the mini-game

```lua
exports['esfer_req_lockpick']:startLockpick(tries, damage)
```

Usage:

```lua{1}
local lockpick = exports['esfer_req_lockpick']:startLockpick()

if lockpick then
  print('The has been lockpicked!')
else
  print('You failed!')
end
```

Or you can adjust the amount of tries and the damage of the lockpick:

```lua{1}
local lockpick = exports['esfer_req_lockpick']:startLockpick(3, 10) -- 3: amount of tries. 10: damage of the lockpick.

if lockpick then
  print('The has been lockpicked!')
else
  print('You failed!')
end
```

> **The amount of tries:** how many times the player can fail the mini-game. `By default: 5`

> **Damage of the lockpick:** how much damage is done to the lock pick every time it is pressed and misses (out of 100). `By default: 8`

Arguments:

| Argument      |   Data type   | Optional | Defualt Value |
| ------------- | ------------- | -------- | ------------- |
| tries | int | No | - |
| damage | int | No | - |

## `pNotify`
<Badge type="warning" text="RedM & FiveM Script" />

![Image of the pNotify resource](https://imgur.com/pLmjJKa.png)

This script is a fully functional notification system with our own scripts, that's why it is not necessary to download it but it is fully compatible.

### Export notifications

```lua
exports['pNotify']:SendNotification({text, type, timeout})
```

Usage:

```lua
RegisterCommand('ping', function()
  exports['pNotify']:SendNotification({text = 'Pong!', type = 'info', timeout = 2000})
  Wait(1000)
  exports['pNotify']:SendNotification({text = 'The message has been exported succesfully!', type = 'success', timeout = 2000})
end)
```

Arguments:

| Argument      |   Data type   | Optional | Defualt Value |
| ------------- | ------------- | -------- | ------------- |
| text | string | No | - |
| type | string | No | - |
| timeout | int | No | - |

Types: `success`, `info`, `error`, `warning`, `phonemessage` and `neutral`.

## `progressbar`
<Badge type="warning" text="Only RedM Script" />

![Image of the progressbar resource](https://imgur.com/s7dnFot.png)

This simple script allows us to add a progress bar for any function. In addition, we have implemented in the script the function of being able to cancel the progress.

### Configuration

`Config.KeyToCancel` They key used in-game to cancel the progress bar [(see the list of keys of RDR2 here)](https://github.com/mja00/redm-shit/blob/master/nuiweaponspawner/config.lua).
`Config.CancelText` Text shown to cancel the progress bar.
`Config.ProgressText` Title of the prompt shown to cancel the progress bar.

### Export the progress bar

```lua
exports['esfer_req_progressbar']:Progressbar(text, timeout, options)
```

Usage:

```lua
RegisterCommand('testProgressbar', function()
  exports['esfer_req_progressbar']:Progressbar('Buscando', 20000)
end)

RegisterCommand('testProgressbar2', function()
  exports['esfer_req_progressbar']:Progressbar('Buscando', 20000, {
    FreezePlayer = true,
    animation = {
      type = "anim",
      dict = "script_re@fundraiser@st_denis",
      lib = "steal_player",
    },
    onFinish = function()
      print('The progress bar has finished')
    end,
    onCancel = function()
      print('The progress bar has been cancelled')
  end})
end)
```

Scenario:

```lua{5,6}
RegisterCommand('testProgressbar2', function()
  exports['esfer_req_progressbar']:Progressbar('Buscando', 20000, {
    FreezePlayer = true,
    animation = {
      type = "scenario",
      scenario = "WORLD_PLAYER_CHORES_FEED_CHICKENS",
    },
    onFinish = function()
      print('The progress bar has finished')
    end,
    onCancel = function()
      print('The progress bar has been cancelled')
  end})
end)
```

Arguments:

| Argument      |   Data type   | Optional | Defualt Value |
| ------------- | ------------- | -------- | ------------- |
| text | string | No | - |
| timeout | int | Yes | 3000 |
| options | table | Yes | - |

## `esfer_safecracking`

This mini-game can be purchased, but in addition, it comes included with the `esfer_properties` resource for a theft functionality.
[See here the documentation of `esfer_safecracking`.](./safe-cracking)
