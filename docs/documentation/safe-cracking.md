![Thumbnail](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_safecracking.png)

<Badge type="warning" text="Standalone script" />
# esfer_safecracking - Crack the safe mini-game (HTML based)

This chat gives the server a classic HeavyRP style to the player-to-player communication system. In addition, it features custom and incredible commands to enhance the text-based roleplay experience, including some new features such as a masking system to hide the real name of the game chat.

Apart from this wonderful chat system, it includes a command created by us to save the chat logs in order to view them, save them, send them...

## Preview video

[![Preview video](https://raw.githubusercontent.com/esFerDev/shop/main/docs/public/resources/esfer_safecracking/watch_video.png)](https://www.youtube.com/watch?v=fnYLB0uj-k0)

## Configuration

The configuration file is located at `html/config.js`.

**soundConfig**

`audioVolume` The volume at which the audios will be played.

`audioFile` The audio file which will play each time the dial is turned.

`audioFile2` The audio file which will play every time the digit is between 3 and 1 box before.

`audioFile3` The audio file which will play when you move to the correct digit.

`finishedAudioFile` The audio file which will be played when the box is opened.

**wheelConfig**

`rotationStep` How many degrees the dial will move each time you press a key.. We recommend to leave this at 3.6.

**timeouts**

`closeGame` The time it will take for the mini-game to close when you complete the challenge.. We recommend to leave this at 1000 to let the game close fading out the HTML page.

**translations**

`instructions` The text that will appear below the mini-game to indicate the instructions and keys to be pressed.

## Export the mini-game

```lua
exports['esfer_safecracking']:start(options)
```

Usage:

```lua
RegisterCommand('testSafecracking', function()
  local safecracking = exports['esfer_safecracking']:start()
  print('Has won?: ', safecracking)
end)

RegisterCommand('testSafecracking2', function()
  local safecracking = exports['esfer_safecracking']:start({
    FreezePlayer = true,
    animation = {
      type = "anim",
      dict = "script_re@fundraiser@st_denis",
      lib = "steal_player",
    },
    onFinish = function()
      print('The mini-game has finished')
    end,
    onCancel = function()
      print('The mini-game has been cancelled')
  end})

  if safecracking then
    print('You have won. Congratulations!')
  else
    print('You haven't win. Try again.')
  end
end)
```

Scenario:

```lua{5,6}
RegisterCommand('testSafecracking2', function()
  local safecracking = exports['esfer_safecracking']:start({
    FreezePlayer = true,
    animation = {
      type = "scenario",
      scenario = "WORLD_PLAYER_CHORES_FEED_CHICKENS",
    },
    onFinish = function()
      print('The mini-game has finished')
    end,
    onCancel = function()
      print('The mini-game has been cancelled')
  end})

  if safecracking then
    print('You have won. Congratulations!')
  else
    print('You haven't win. Try again.')
  end
end)
```

Arguments:

| Argument      |   Data type   | Optional | Defualt Value |
| ------------- | ------------- | -------- | ------------- |
| options | table | Yes | - |
