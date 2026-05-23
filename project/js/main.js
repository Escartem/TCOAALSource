//=============================================================================
// main.js
//=============================================================================

const GAME_VERSION = "3.0.12";

PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};