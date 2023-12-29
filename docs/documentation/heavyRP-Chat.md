![Thumbnail](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_chat.png)

Chat: <Badge type="warning" text="Standalone script" />

Commands: <Badge type="warning" text="VORP, RSG, RedEM-RP, ESX, QBCore, VRP" />

> ❗ You can add your own framework in a specific file [(see here)](#how-to-add-your-own-framework).

# esfer_chat - Chat system with HeavyRP style

This chat gives the server a classic HeavyRP style to the player-to-player communication system. In addition, it features custom and incredible commands to enhance the text-based roleplay experience, including some new features such as a masking system to hide the real name of the game chat.

Apart from this wonderful chat system, it includes a command created by us to save the chat logs in order to view them, save them, send them...

## FiveM preview video

[![Preview video of FiveM](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_chat/watch_video_fivem.png)](https://www.youtube.com/watch?v=aRG5HfF6ugQ)

## RedM preview video

[![Preview video of RedM](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_chat/watch_video_redm.png)](https://www.youtube.com/watch?v=x7n6OVR_4TA)

## Configuration

### Chat script

`Config.DisableIniciatedPrint` When the script has started, the console will print a message notifying that the chat has iniciated succesfully.

`Config.SaveChatLogsCommand` The name of the command to copy the logs of the whole chat.

`Config.SolidChatCommand` The name of the command to display a black screen to facilitate screenshot capture of the chat.

`Config.PrintMessages` All messages displaying in the chat will print in the F8 in-game console.

`Config.ShowWritingSymbol` Turn on or off the typing indicator function.

`Config.ShowOwnWritingSymbol` Only if `Config.ShowWritingSymbol` is true. Show your own typing indicator in the game.

`Config.WritingSymbol` Only if `Config.ShowWritingSymbol` is true. The text shown to indicate that a player is typing a command.

`Config.ToggleVisibilityWritingSymbolCommand` Only if `Config.ShowWritingSymbol` is true. Toggle the visibility of the typing indicator.

`Config.ZTextOffsetWritingSymbol` The height were the typing indicator will be at.

`Config.CommandChatFontSize` The name of the command to change the size of the font.

`Config.CommandChatFont` The name of the command to open the menu to change the font of the chat.

`Config.LicenseType` What license type will the script use to save all data.

### Chat commands script

`Config.Framework` Select the type of framework that your server has.

**`Config.Commands`**

In this list are all the available commands, it is important to note that **you cannot add or remove them**, so if you want to add a new one, you can suggest it on the [Discord server.](https://discord.gg/invite/c3ZscGYpZH)

![Image of the list of commands](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_chat/commands.png)

Each command comes with its respective options. Here we will explain each one:
  - `defaultChat` This option is only available for the `/say` command. This will cause the command to run automatically when you type in the chat without running any other commands. Example when this option is set to true: "Hello, my name is Fernando". --> Then the server will execute the command for you, in case it is set to false, the command will return nothing and nothing will be executed in the chat by the script.
  - `commands` These are the different ways of calling this command.
  - `color` The colour of the command for the player who writes it and for the player who hears it if he is within 5 metres.
  - `color10` The colour of the command for players who are listening to it between 5 and 10 metres from the player speaking.
  - `color15` The colour of the command for players who are listening to it between 10 metres or more from the player speaking.
  - `radius` How loud the player speaks, i.e. people within that radius will receive the message.
  - `discordWebhook` The webhook for messages to be recorded in a Discord channel or a third-party application.
  - `discordMessage` The message this webhook will receive.
  - `radiustotalk` The minimum radius in which the player must be in order to be mentioned.

In addition, it is important to remember that you cannot add more options to the commands, you can only edit the existing ones.

### How to fade automatically the chat

To make the chat fade out over a period of time, you will need to go to the `chat/html/config.js` file and change the `hideChat` option to true. Also, if you want to change the time period in which the chat fades out, you should change the amount of `fadeTimeout` to the desired amount, keeping in mind that the amount should always be in milliseconds.

```js{3}
window.CONFIG = {
  hideChat: false, // [!code --]
  hideChat: true, // [!code ++]
  fadeTimeout: 25000,
  suggestionLimit: 5,
  ...
};
```

### How to add your own framework

To add support for the chat commands to your own framework or another framework that is not supported by the script by default, you will need to go to the `esfer_rpchat/sv_frameworks.lua` file and make your settings there.

Depending on the framework, it can be inserted into the code in one way or another. You will have to check the documentation of that framework.

```lua
if Config.Framework == 'esx' then
    ESX = exports["es_extended"]:getSharedObject()
    ...
elseif Config.Framework == 'customFramework' then // [!code ++]
    customFramework = exports['framework_core']:getMainCode() -- Here you trigger your framework (normally they say how to do that in their documentation web). // [!code ++]
end
```

Getting character name:

```lua
function GetRealPlayerName(src)
    ...
    elseif Config.Framework == 'customFramework' then // [!code ++]
        local firstname = customFramework.firstName // [!code ++]
        local lastname = customFramework.lastName // [!code ++]
        return firstname .. ' ' .. lastname // [!code ++]
    end
end
```

And then, change `Config.Framework`:

```lua [config.lua]
Config.Framework = 'vorp' // [!code --]
Config.Framework = 'customFramework' // [!code ++]
```

## 🔔 Update 1.1: *Custom the chat*

![Image of the feature of the update 1.1](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_chat/feature1-1.png)

![Image of the feature of the update 1.1](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_chat/feature1-1_2.png)
