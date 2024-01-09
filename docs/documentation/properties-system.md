![Thumbnail](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_properties.png)

<Badge type="warning" text="Only VORP" />
# esfer_properties - Properties system

Property system in which more than 300 properties are added to the game. This gives an incredible role-playing experience where any structure in the game can become a property for any player which can be modified as the owner or tenants wish thanks to its great furnishing system and graphical interface.

## Preview and showcase videos

[![Preview video](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_properties/watch_video_preview.png)](https://www.youtube.com/watch?v=uRXqS4MRYlY)

[![Showcase video](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_properties/watch_video_showcase.png)](https://www.youtube.com/watch?v=3bfG0h8BSHM)

## Interiors of properties

[See here the interiors.](https://esferdev.github.io/esfer_properties-Interiors/)

## Required scripts

This resource must be runned with the following scripts:

`pNotify` (Optional, for notification system).

`progressbar`

`lockpick`

`esfer_safecracking`

[See here for more.](./Requirements-for-my-scripts.md)

## Configuration

[See the basic configs here.](./Introduction.md#config-lua)

`Config.AntiFallSystem` Activate the crash system for bug occurrences [(see here a preview).](https://youtu.be/3bfG0h8BSHM?t=327)

`Config.AntiFallDistance` How far underground the player must be to return to the natural position.

**`Config.Blips`**:
  - `Activated` Activate or desactivate blips.
  - `ActivateBlipDelay` How long a player must wait for property blips to appear on the map.
  - `UpdateTime` How often the blips are refreshed.
  - `YellowHouseIfOnSale` Paint the blip yellow if the house is for sale.
  - `BlipOnSale` The blip that will come out if the house is for sale [(see here the blips).](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips)
  - `BlipBuyed` The blip that will come out if the house is purchased

`Config.ShowTextOrKey`

**`Keys`**:
  - [See here the different keys.](https://github.com/mja00/redm-shit/blob/master/nuiweaponspawner/config.lua)
  - `Config.KeyToEnterAndExitHouse` The key to be pressed by the player to enter and exit the property.
  - `Config.KeyToKnockHouse` The key to be pressed by the player to knock the door's property.
  - `Config.KeyToUnfreeze` The key to be pressed by the player to unfreeze when the player has entered the house (only if property's option is activated).
  - `Config.ActivateKeyDoor` If enabled, a prompt will appear to press a key to lock and unlock the door of the property in case you are the owner or a tenant.
  - `Config.KeyToLockUnlockDoor` The key to be pressed by the player to lock and unlock the door.

`Config.DistanceText` How far from the gate must you be to enter the property.

`Config.DistanceTextExit` How far from the gate must you be to exit the property.

`Config.DistanceToLoad` How far from the gae must you be to load all data from properties. This will optimize the script resmon usage.

`Config.KnockingSoundVolume` The volume at which the knock sound will be played.

`Config.KnockingWait` How many miliseconds must the script wait to reproduce the knocking sound.

`Config.KnockAnimation` The animation played by the player when knocking the door.

`Config.SellPercent` How much percent they will give to the player who sells the property if he sells it to the state.

`Config.LimitInventory` The limit set to the clan's inventory.

`Config.CooldownFixInterior` How much time has to pass before the interior of the property can be refreshed again.

`Config.SafePrice` How much will the safe cost.

`Config.SafeProp` The prop of the safe that will appear when buying one.

**`Config.BreakInSettings`** Options for the robberies.
  - `LockpickItem` The name of the item in the database in order to be able to force lock a property.
  - `BreakIntoPermission` If this option is activated, the player will have to ask the administrators for permission to steal the property.
  - `AdvertBreakingIntoToAdmins` Alerting managers that theft of property is occurring.
  - `BreakIntoPermissionCooldown` How much time the player has to break into the property (not the same as time for stealing).
  - `BreakingIntoCooldown` How often a player can steal a property.
  - `LockpickDamage` How much damage the lockpick does in the mini-game [(see more here).](./Requirements-for-my-scripts.md#lockpick).
  - `LockpickAttempts` How many attempts a player has to force the door [(see more here).](./Requirements-for-my-scripts.md#lockpick).
  - `LockpickingAnimation` The animation played by the player when lockpicking the door.
  - `SafeCrackerToolNeeded` Is a specific tool needed to open a safe? It is important to remember that the safe will only appear if the property owner has purchased it, otherwise the money will be spread around the property.
  - `SafeCrackerToolItem` (only if `SafeCrackerToolNeeded`'s option is activated) The item that the player needs to have to open a safe.
  - `UseSafeCracker` As soon as the player cracks the safe, the item will be removed from his inventory.
  - **Stealing options**:
      - `KeyHash` The key the player must press to steal items and money [(see here the different keys).](https://github.com/mja00/redm-shit/blob/master/nuiweaponspawner/config.lua)
      - `SearchTime` How much time the player has to steal once he enters the door.
      - `Time` How much time the player has to steal once he enters the door (not the same as `BreakIntoPermission`).
      - `Distance` How far the player must be from the steal zone to be able to steal.
      - `DistanceSafe` How far the player must be from the safe to be able to crack it.
      - `MarkerType` Marker type of the stealing zone [(see marker types here).](https://github.com/femga/rdr3_discoveries/blob/master/graphics/markers/marker_types.lua)
      - `MarkerColor` Marker color of the stealing zone.
      - `MarkerScale` Marker scale of the stealing zone.
      - `MarkerTypeSafe` Marker type of the zone of the safe [(see marker types here).](https://github.com/femga/rdr3_discoveries/blob/master/graphics/markers/marker_types.lua)
      - `MarkerColorSafe` Marker color of the zone of the safe.
      - `MarkerScaleSafe` Marker scale of the zone of the safe.
      - `AnimDict` Anim dict played while stealing.
      - `AnimLib` Anim lib played while stealing.

`Config.Interiors` The list of interiors with their respective door coordinates and their respective coordinates where the locations of burglary zones are assigned.

### How to add more interiors

To create new interiors you will need to do the following:

Take the coordinates of the property's door and its heading. Also, choose a price for said interior. Finally, you must choose at least 4 or 5 areas in which the thieves must search for the player's belongings.
```lua
Config.Interiors = {
  ...
  { x = 1437.724, y = -1366.078, z = 85.849, heading = 241.049, price = 5120, posibleLocationsToSteal = { {x = 1429.18, y = -1361.5, z = 85.84}, {x = 1426.52, y = -1363.19, z = 85.84}, {x = 1439.64, y = -1366.52, z = 85.84}, {x = 1425.23, y = -1365.84, z = 85.84} } },
  { x = 123.45, y = -123.45, z = 12.34, heading = 120.2, price = 4000, posibleLocationsToSteal = { {STEAL ZONE 1}, {STEAL ZONE 2}, {STEAL ZONE 3}, {STEAL ZONE 4}, {STEAL ZONE 5} } }, // [!code ++]
}
```

## Furtnite configurations

This file can be found as `config_furniture.lua`.

`Config.SellPercentFurniture` How much percent the player will be given if he sells a furniture.

`Config.FurnitureLimit` The quantity of furniture a player can have in the property.

`Config.UseLos` To place a piece of furniture the player must have a clear line of sight to the piece of furniture from his position or from the door coordinates.

`Config.EditingModeKeys` The keys the player must press to edit furniture coordinates [(see here the different keys).](https://github.com/mja00/redm-shit/blob/master/nuiweaponspawner/config.lua)

**`Config.Furniture`**:
> You can add some props yourself [(see the list of props here)](http://rdr2.mooshe.tv/). You must use "Model Hash (Signed)".

> The text between brackets `['...']` is the category, to add a new one you just have to copy and paste a category with its respective props and adjust it your way.
> ```lua
> ['Boxes'] = {
>   { name = 'Barrels', id = 'p_boxcar_barrel_09a', price = 10 },
>   { name = 'Crates', id = 'p_boxcar_cratecover09', price = 9 },
>   { name = 'Crates 2', id = 'p_boxcar_crates01x', price = 8 },
>   { name = 'First Aid Kit', id = 'p_boxmedmedical01x', price = 4 },
>   { name = 'Boxes', id = 'p_boxgroup03x', price = 3 },
> },
> 
> ['Custom category'] = { // [!code ++]
>   { name = 'Prop 1', id = 'prop_id1', price = 10 }, // [!code ++]
>   { name = 'Prop 2', id = 'prop_id2', price = 12 }, // [!code ++]
>   { name = 'Prop 3', id = 'prop_id3', price = 14 }, // [!code ++]
>   ... // [!code ++]
> }, // [!code ++]
> ```

> Or you can just add new props in an existing category:
> ```lua
> ['Boxes'] = {
>   { name = 'Barrels', id = 'p_boxcar_barrel_09a', price = 10 },
>   { name = 'Crates', id = 'p_boxcar_cratecover09', price = 9 },
>   { name = 'Crates 2', id = 'p_boxcar_crates01x', price = 8 },
>   { name = 'First Aid Kit', id = 'p_boxmedmedical01x', price = 4 },
>   { name = 'Boxes', id = 'p_boxgroup03x', price = 3 },
>   { name = 'Custom box', id = 'p_custombox_01', price = 5 }, // [!code ++]
> },
> ```

### When a player on my server places a prop, the height coordinate (Z) does not adjust correctly, what is happening?

This error is quite common in RedM, we do not have a way to fix it but we do have a way to solve it, in any case, go down to the bottom of the `config_furniture.lua` file and do the following:

```lua
Config.BugFurnitures = { -- If a furniture is bugged by the game and it doesn't take the Z-coord correctly, then you can adjust the Z-coord error here.
    -- Don't touch anything if you don't have an idea of what are you doing.
    { id = 'w_sp_bowarrow', zBugged = 0.6 },
    { id = PROP ID THAT IS BUGGED, zBugged = HOW MANY HEIGHT IS FIXED }, // [!code ++]
}
```

> `PROP ID THAT IS BUGGED` There you must add the id of the prop that is bugged.
> `HOW MANY HEIGHT IS FIXED` There you must adjust the height that the script must automatically fix. You must try this option for yourself and test until you find the exact value.

## 🔔 Update 1.1: *Theft and security*

![Image of the feature of the update 1.1](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_properties/feature1-1_1.png)

![Image of the feature of the update 1.1](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_properties/feature1-1_2.png)

![Image of the feature of the update 1.1](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_properties/feature1-1_3.png)
