![Thumbnail](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_mining.png)

<Badge type="warning" text="Only VORP" />
# esfer_mining - Mining system

Mining system in which more than at least 4 caves are already configured and ready to use for the players. This gives an incredible role-playing experience where many people can mine in the caves and get some minerals and sell them to earn some money, making role-playing an incredible and more realistic experience.

## Showcase video

[![Showcase video](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_mining/watch_video_showcase.png)](https://www.youtube.com/watch?v=Zi9EZTOyVqQ)

## Optional scripts

This resource must be runned with the following scripts:

`pNotify` (Optional, for notification system).

[See here for more.](./Requirements-for-my-scripts.md)

## Configuration

[See the basic configs here.](./Introduction.md#config-lua)

`DistanceText` The max. distance you need to be at the mining point to show the text in the chat or in the prompt to mine.

`MaxDistance` The max. distance you need to be from a mine to load the script. This function will let the script sleep if the player is not close enough to a mine.

**`Keys`**: [(See here some keys usable in RedM)](https://github.com/mja00/redm-shit/blob/master/nuiweaponspawner/config.lua)
  - `StartMineRoute` Key pressed to start working on the cave.
  - `Mine` Key pressed to mine in a checkpoint.
  - `Store` Key pressed to open the store.

**`GeneralSettings`**:
  - `MiniGame` Choose between minigame or progress bar.
  - `Time` 30 seconds to complete the minigame or the progress bar (depending on the "MiniGame" value).
  - `PointsInMinigame` How many points must the player do in the mini-game to exploit the mining zone (every correct click --> Point).
  - `CoolDown` The cooldown set to be abble to start the work again (in minutes).
  - `PickaxeObject` The item spawned on mining.

  - `ItemsRequiredForMining` Items required for mining.

  - `Marker`:
    - `Type` [(See here the types of blips)](https://github.com/femga/rdr3_discoveries/blob/master/graphics/markers/marker_types.lua)
    - `Color` The color of the blip.
    - `Scale` The size of the blip.

  - `CheckpointsSpriteBlip` Sprite of the blip. [(See here some of them)](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips)
 
  - `Animation` Animation done by the player when mining.

### Mines section

This configurations are inside a specific cave, this means that all these configurations are replicated in all existing caves.

`activateBlip` Activate the blip of the mine?

Only if blip is activated:
  - `requiredJob` Required job to work in this mine (leave it blank so that the player doesn't need a specific job to work in this mine)
  - `name` The name of the blip.
  - `sprite` Sprite of the blip. [(See here the sprites in the game)](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips)
  - `modifier` Any modifier of the blip. Leave it "nil" if you don't want a modifier. [(See here the modifiers)](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/blip_modifiers)

  - (The coords of the blip will be `startPoint.coords`)

`startPoint` The NPC to start the job
  - `coords` Where the NPC is set.
  - `model` The model of the NPC. [(See here different models in the game)](https://www.rdr2mods.com/wiki/peds/)

`numCheckpoints` The number of checkpoints aviable to work on over the different checkpoints that a cave has. Example: if this settings is set to 9 and the checkpoints aviable are 12, then, the players will only be given 9 checkpoints over the 12 to work on.

`checkpointsItems` How many checkpoints will give item rewards. Ex: from the previous 9 checkpoints, if this setting is set to 7, then 7 of them will give the reward to the player.

`checkPoints` The coords of the different checkpoints aviable in the cave.

`itemsGiven` The rewards. Items given if you are in the correct checkpoint (relation with: `checkpointsItems`).

`itemsGivenFailure` Items given if the player wans't mining in the correct checkpoint (relation with: `checkpointsItems`). Leave this empty if you don't want to give items if failed or bad luck.

### How to add more caves

To create new caves you will need to do the following:

Take the coordinates at least 10 checkpoints (recommended) inside the cave. Also, get the coords of the start point and get the model of the NPC.
```lua{9-52}
Config.Mines = {
  ...

    itemsGivenFailure = {
      ['rock'] = { min = 1, max = 2 },
    }
  },

  ["Example's Mine"] = {
    activateBlip = true,

    blip = {
      name = "Example's Mine",
      sprite = 1220803671, -- https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips
      modifier = nil,
    },

    startPoint = {
      coords = { x = 1000.0, y = 2000.0, z = 70.0, heading = 90.0 },
      model = 'A_M_M_AsbMiner_03',
    },

    numCheckpoints = 11,
    checkpointsItems = 8,

    checkPoints = {
      { x = 10.01, y = 12.01, z = 70.00 },
      { x = 23.01, y = 11.01, z = 70.00 },
      { x = 31.01, y = 10.01, z = 70.00 },
      { x = 41.01, y = 14.01, z = 70.00 },
      { x = 52.01, y = 16.01, z = 70.00 },
      { x = 12.01, y = 27.01, z = 70.00 },
      { x = 13.01, y = 33.01, z = 70.00 },
      { x = 17.01, y = 44.01, z = 70.00 },
      { x = 15.01, y = 52.01, z = 70.00 },
      { x = 14.01, y = 61.01, z = 70.00 },
      { x = 12.01, y = 12.01, z = 70.00 },
      { x = 61.01, y = 35.01, z = 70.00 },
      { x = 26.01, y = 16.01, z = 70.00 },
      { x = 48.01, y = 26.01, z = 70.00 },
      { x = 69.01, y = 48.01, z = 70.00 },
    },

    itemsGiven = {
      ['iron'] = { min = 2, max = 4 },
      ['rock'] = { min = 4, max = 8 },
    },

    itemsGivenFailure = {
      ['rock'] = { min = 3, max = 7 },
    }
  },
}
```

### Stores section

`Activated` Main configuration to activate the stores or to disable them.

**_Data section_**

`activateBlip` Activate or desactivate the blip of the store.

**`config`**:
  - `name` Name of the store. This will be also the name of the blip if activated.
  - `coords` The coords of the NPC. This will be also the coords of the blip if activated.
  - `model` The model of the NPC. [(See here different models in the game)](https://www.rdr2mods.com/wiki/peds/)

  - (Blip options, only if `activateBlip = true`)
  - `sprite` Sprite of the blip. [(See here the sprites in the game)](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips)
  - `modifier` Any modifier of the blip. Leave it "nil" if you don't want a modifier. [(See here the modifiers)](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/blip_modifiers)

**`items`**:
  - Structure of an **item**: `['`Database name`'] = { label = '`Label of the item`', price = `Price of the item` }`
  - Structure of a **weapon**: `['`Database name`'] = { label = '`Label of the weapon`', price = `Price of the weapon`, weapon = true }` [(See here the different weapons in the game. Asset name = Database name)](https://www.rdr2mods.com/wiki/pages/list-of-rdr2-weapon-models/)

### How to add more stores

To create new caves you will need to do the following:

Take the coordinates of the NPC. Also, choose a price for every item and the model of the NPC. Then, fill the template.
```lua{10-29}
Config.Interiors = {
  ...

    items = {
      ['pickaxe'] = { label = 'Pickaxe', price = 12 },
      ['weapon_melee_davy_lantern'] = { label = 'Lantern', price = 12, weapon = true },
    }
  },

  ["Example's Mine"] = {
    activateBlip = false,

    config = {
      name = "Example's Mine Store",
      coords = { x = 1005.0, y = 2015.0 z = 70.0, heading = 250.0 },

      -- NPC options:
      model = 'A_M_M_AsbMiner_03', -- https://www.rdr2mods.com/wiki/peds/

      -- Blip options:
      sprite = 1220803671,
      modifier = nil, -- https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/blip_modifiers
    },

    items = {
      ['pickaxe'] = { label = 'Pickaxe', price = 15 },
      ['weapon_melee_davy_lantern'] = { label = 'Lantern', price = 18, weapon = true },
    }
  },
}
```
