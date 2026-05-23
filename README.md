# TCOAALSource
As request to me in dm, here's The Coffin of Andy and Leyley working RPG Maker project

![img](https://bin.escartem.moe/2026/05/22/jUfrsh4jrD.png)

![img](https://bin.escartem.moe/2026/05/22/jTSJwaUxWN.png)

# Infos

This was tested on RPG Maker MV, probably works on other versions. Game code is located in `js/plugins/game.js`. It was slightly modified to work locally, you can see the unmodified one in `js/plugins/game_original.js`.

Due to said modifications, stuff like third party language loading is probably broken, I had to hijack their system to force load the english package, this may also result in broken text elements. 

The compiled game does not work, but it does if you run it from the editor, so please do that.

I only tested the game around the intro sequence, if you find anything broken feel free to report it.

If you encounter an error of a file failing to load (eg: `img/system/Loading.png not found !`) here's how to fix it
* take the path of the file, example : `img/system/Loading.png`
* hash it with sha256 -> `e5230bf37c4fabb013cf780410cdc41f2f6d13e5a0ab78465b0e878b9d9c9b83`
* cut it to keep the first 16 chars -> `e5230bf37c4fabb0`
* find in orignal folder the file with that name -> `img/system/e5230bf37c4fabb0.png`
* rename it to the actual name -> `Loading.png`
* also, in some rare cases the game may except you to have both version (hashed and unhashed), so keep track of names just in case

Have fun <3
