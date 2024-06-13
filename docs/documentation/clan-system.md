![Thumbnail](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_clansystem.png)

<Badge type="warning" text="Only VORP" />
# esfer_clansystem - Clan system

This clan system gives players on the server the possibility to have their own groups and clans hosted in different areas of the map, as well as having a cache of weapons and money.

## Preview video

[![Preview video](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_clansystem/watch_video.png)](https://www.youtube.com/watch?v=VD0jd1m9IiQ)

## Required scripts

This resource must be runned with the following scripts:

`pNotify` (Optional, for notification system).

[See here for more.](./Requirements-for-my-scripts.md)

## Configuration

[See the basic configs here.](./Introduction.md#config-lua)

**`Config.Blip`** If the script show the clan's blip, select which blip will appear.
> [See the list of blips here.](https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures/blips)

**`Config.LimitInventory`** The limit set to the clan's inventory.

## Export functions

<Badge type="warning" text="Client Side" />

`getCurrentClanName` Gets the name of the clan the player is currently in.
> Example use:
> ```lua
> print('Name of the clan: ' .. exports['esfer_clansystem']:getCurrentClanName())
> ```
> (Returns `nil` if the player isn't in a clan)

`getCurrentClanId` Takes the ID of the clan the player is currently in.
> Example use:
> ```lua
> print('ID of the clan: ' .. exports['esfer_clansystem']:getCurrentClanId())
> ```
> (Returns `nil` if the player isn't in a clan)

`isLeaderFromClan` Returns whether the player is a clan leader or not.
> Example use:
> ```lua
> print('Is the player leader of the clan?: ' .. tostring(exports['esfer_clansystem']:isLeaderFromClan()))
> ```

<Badge type="warning" text="Server Side" />

`getCurrentClanName` Gets the name of the clan the player is currently in.
> Example use:
> ```lua
> print('Name of the clan: ' .. exports['esfer_clansystem']:getCurrentClanName(source))
> ```

`getCurrentClanId` Takes the ID of the clan the player is currently in.
> Example use:
> ```lua
> print('ID of the clan: ' .. exports['esfer_clansystem']:getCurrentClanId(source))
> ```

`isLeaderFromClan` Returns whether the player is a clan leader or not.
> Example use:
> ```lua
> print('Is the player leader of the clan?: ' .. tostring(exports['esfer_clansystem']:isLeaderFromClan(source)))
> ```
