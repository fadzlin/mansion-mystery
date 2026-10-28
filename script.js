// The Mansion: classroom restrictions.
// Runs in every player's browser on every map of the mansion.
// It hides the map-editor tools (which may include "Send global message"),
// the invite button and the room list. Kick/ban cannot be hidden by a script.

function applyRestrictions() {
  const controls = WA.controls;
  ['disableMapEditor', 'disableInviteButton', 'disableRoomList'].forEach(function (name) {
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

if (typeof WA.onInit === 'function') {
  WA.onInit().then(applyRestrictions).catch(applyRestrictions);
} else {
  applyRestrictions();
}
