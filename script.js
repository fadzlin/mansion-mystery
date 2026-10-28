// The Mansion: classroom restrictions.
// Runs in every player's browser on every map of the mansion.
// It hides the map-editor tools, the invite button and the room list, and
// turns off camera and microphone (text chat only). Kick/ban and global
// text messages cannot be hidden by a script.

function applyRestrictions() {
  const controls = WA.controls;
  // Text chat only: camera and microphone are switched off for everyone.
  ['disableMapEditor', 'disableInviteButton', 'disableRoomList',
   'disableWebcam', 'disableMicrophone'].forEach(function (name) {
    try {
      if (typeof controls[name] === 'function') {
        controls[name]();
        console.log('[mansion] ' + name + ' applied');
      } else {
        console.log('[mansion] ' + name + ' not available in this WorkAdventure version');
      }
    } catch (e) {
      console.log('[mansion] ' + name + ' failed', e);
    }
  });
}

// Try to remove the built-in "global messages" menu entry.
// Undocumented whether built-in entries can be removed, so log the outcome either way.
function removeGlobalMessages() {
  try {
    if (!WA.ui || typeof WA.ui.getMenuCommand !== 'function') {
      console.log('[mansion] getMenuCommand not available');
      return;
    }
    Promise.resolve(WA.ui.getMenuCommand('globalMessages'))
      .then(function (menu) {
        if (menu && typeof menu.remove === 'function') {
          menu.remove();
          console.log('[mansion] globalMessages menu removed');
        } else {
          console.log('[mansion] globalMessages menu not found');
        }
      })
      .catch(function (e) { console.log('[mansion] globalMessages removal failed', e); });
  } catch (e) {
    console.log('[mansion] globalMessages removal failed', e);
  }
}

function start() {
  applyRestrictions();
  removeGlobalMessages();
}

if (typeof WA.onInit === 'function') {
  WA.onInit().then(start).catch(start);
} else {
  start();
}
