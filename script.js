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

// Secret doors (Kitchen cupboard, Lounge bookcase): the "open" picture shows
// while someone stands near, and hides again when they walk away.
function secretDoors() {
  try {
    var url = (WA.room && WA.room.mapURL) || '';
    if (!/\/rooms\/(kitchen|lounge)\.tmj/.test(url)) return;
    var inKitchen = /\/rooms\/kitchen\.tmj/.test(url);
    var popup = null, message = null;
    WA.room.hideLayer('secret-open');
    WA.room.onEnterLayer('secret-near').subscribe(function (ev) {
      WA.room.showLayer('secret-open');
      // In the Kitchen, the discovery line. Skipped when arriving back out of the passage.
      if (!inKitchen || (ev && ev.reason === 'initial')) return;
      try {
        popup = WA.ui.openPopup('hiddenDoorPopup', 'There’s a hidden door?!', []);
      } catch (e) {
        message = WA.ui.displayActionMessage({ message: 'There’s a hidden door?!', callback: function () {}, type: 'message' });
      }
    });
    WA.room.onLeaveLayer('secret-near').subscribe(function () {
      WA.room.hideLayer('secret-open');
      try { if (popup) popup.close(); } catch (e) {}
      try { if (message) message.remove(); } catch (e) {}
      popup = null; message = null;
    });
    console.log('[mansion] secret door ready');
  } catch (e) {
    console.log('[mansion] secret door failed', e);
  }
}

function start() {
  applyRestrictions();
  removeGlobalMessages();
  secretDoors();
}

if (typeof WA.onInit === 'function') {
  WA.onInit().then(start).catch(start);
} else {
  start();
}
