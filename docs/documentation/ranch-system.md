![Thumbnail](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_rancho.png)

<Badge type="warning" text="Only VORP" />
# esfer_rancho - Ranch system

A ranch system that allows players to have their own ranches and manage them as they wish. In addition to having an animal and livestock system where you will have to feed, care for and graze the different animals on the farm. It has a stash of items, weapons and money within the farm itself.

In addition, another interesting function is the ability to kill animals from other farms in a symbolic way and have the script detect it and remove it from the database.

## Preview video

[![Preview video](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_rancho/watch_video.png)](https://www.youtube.com/watch?v=0RLvfug7G3Y)

## Required scripts

This resource must be runned with the following scripts:

`pNotify` (Optional, for notification system).

`progressbar`

[See here for more.](./Requirements-for-my-scripts.md)

## Configuration

[See the basic configs here.](./Introduction.md#config-lua)

`Config.NeedJob` Activate this option so that the player needs a specific job to interact with the ranch system. If disabled, any player inside a ranch will be able to interact with the system.

`Config.JobNames` The list of jobs that will be able to access the ranch system.

`Config.ItemMilk` The name of the item in the database that will give the cows to the player every time he milks them.

`Config.ItemChickenFeed` The name of the item in the database that the player will need to feed the chickens.

`Config.CowsPrice` The amount of money the player will have to pay to buy 5 cows.

`Config.ChickensPrice` The amount of money the player will have to pay to buy 5 chickens.

`Config.DistanceCowToOrderToFollow` The radius in which a cow will follow the player while he is grazing

**`Config.Blip`** The blip that will appear on the map for each ranch.
> [See the list of blips here.](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips)

`Config.LimitInventory` The limit set to the clan's inventory.

**`Config.Timeouts`**
> `feeding`, `milking` and `herding`: How much time has to pass before the player can repeat the action.
> `deadHens` and `buyCows`: How long does it take for such animals not to be fed before they die?

`Config.WaitingTime` How long the player will have to feed the different animals.

`Config.PriceForLevelsCows` The selling price per cow at each level.

`Config.PriceForLevelsChicken` The selling price per chicken at each level.

`Config.DataRanchos` This configuration should not be touched unless it is to create new ranch areas [(see here).](#how-to-create-new-ranch-zones)

`Config.PuntosDePasto` How far the player will have to graze the cows to complete the journey.

`Config.Gallinas` Position where chickens will spawn, DO NOT TOUCH.

`Config.Vacas` Position where cows will spawn, DO NOT TOUCH.

# How to create new ranch zones

To create new ranch zones you will need to do the following:

1. Choose a name and add it in the `Config.DataRanchos` configuration like this:
   ```lua
   Config.DataRanchos = {
      ["Little Greek River"]  = {},
      ["Great Plains"]        = {},
      ["Hennigan Stead"]      = {},
      ["Lake Don Julio"]      = {},
      ["Cholla Springs"]      = {},
      ["Benedict point"]      = {},
      ["New ranch zone"]      = {}, // [!code ++]
   }
   ```

1. Choose a point where the players will have to take the cows and copy its coordinates:
   ```lua
   Config.PuntosDePasto = {
      ...
      ["Benedict point"] = {
          x = -5602.88, y = -3496.04, z = -21.15
      },
      
      ["New ranch zone"] = { -- MAKE SURE YOU NAME THEM THE SAME AS IN Config.DataRanchos // [!code ++]
          x = 123.45, y = -123.45, z = 12.32 // [!code ++]
      }, // [!code ++]
   }
   ```
