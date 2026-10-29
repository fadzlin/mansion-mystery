// All the words in the mansion live here.
// Characters: statements shown on talk.html?c=<key>, one entry per page of the statement.
// Notes: officer notebooks and evidence tags shown on note.html?id=<key>.

const CHARACTERS = {
  aiman: {
    name: 'Captain Aiman', role: 'Lead investigator',
    pages: [
      { img: 'aiman-1', text: 'Welcome Detective. Here are the case details.\n\nVictim was found at around 11.30 am by the gardener and cook. We haven’t identify the cause of death yet. There is no sign of forced entry, this may be someone the victim knows. Victim is 30 years old with no history of serious illness.' },
      { img: 'aiman-2', text: 'The victim stays in this house with his wife Dania, and three service workers: the gardener Salim, cook Daud and housekeeper Nora. He also had a morning meeting with his business partner Faiz.' },
      { img: 'aiman-3', text: 'You need to take the statements from all five of them and collect evidences. Remember, until we know who the killer is they are all suspects. Find out if they have means, opportunity and motive.' },
    ],
  },
  dania: {
    name: 'Dania', role: 'Wife of the victim',
    pages: [
      { img: 'dania-1', text: 'I can’t believe my husband is dead. I just saw him this morning when I gave him his orange juice for breakfast.' },
      { img: 'dania-2', text: 'Enemy? No, I never heard him talk bad about anyone.' },
      { img: 'dania-3', text: 'I didn’t hear any fight from the room. I was not home, I was out shopping for shoes. Are you thinking I’m the one who killed him??' },
    ],
  },
  daud: {
    name: 'Daud', role: 'Cook',
    pages: [
      { img: 'daud-1', text: 'I’m still trembling. I can’t believe the last time I saw Mr. Musa alive would be last night when I looked outside the kitchen’s window and he was walking.' },
      { img: 'daud-2', text: 'I’m a new employee here and I’ve only known Mr. Musa for a month. He doesn’t speak much to us but I believe he’s good indeed.' },
      { img: 'daud-3', text: 'I was picking herbs for dinner in the conservatory when I heard a faint scream. Then I heard Pak Salim crying because he fell so I rushed to help him. We found the body too late. I was the one who contacted the police.' },
    ],
  },
  faiz: {
    name: 'Faiz', role: 'Business partner',
    pages: [
      { img: 'faiz-1', text: 'I.. what? That.. horrible man! I had to threaten to sue him before he agreed to pay me back. We’ve been business partners for 5 years but he has been borrowing money from me for too long without paying. At our morning meeting he finally agreed to start a payment plan.' },
      { img: 'faiz-2', text: 'I’m sure Musa is good to his family and friends but he’s horrible at financial management. Look at this house? I wonder how much it cost to keep it. Our company is bleeding money but he keeps charging unnecessary spendings on the company’s account!' },
      { img: 'faiz-3', text: 'You are asking me where I was today? After our meeting I was so mad I went back to sleep at my house. No, I don’t have any witness but I’m not a killer...' },
    ],
  },
  nora: {
    name: 'Nora', role: 'Housekeeper',
    pages: [
      { img: 'nora-1', text: 'I knocked on the parlor’s door to clean the room but Mr. Musa said not to enter. He sounded a bit weird but I’m sure it was him. That was 11.15 am this morning. I’m sure because I was looking at the clock on top of the door.' },
      { img: 'nora-2', text: 'I don’t interact much with Mr. Musa, he doesn’t really talk to servants..but poor Mrs. Dania.. She must be upset..' },
      { img: 'nora-2', text: 'After Mr Musa said not to enter the parlor, I went down the conservatory alone to clean. I didn’t hear anything there but when I went outside to fetch a ladder, I saw Pak Salim outside the study, he was napping. I was picking up the ladder at cellar and when I climbed outside I saw Daud and Pak Salim running to the parlor. They found Mr. Musa there.' },
    ],
  },
  salim: {
    name: 'Salim', role: 'Gardener',
    pages: [
      { img: 'salim-1', text: 'Musa called me to the parlor at 11 am to show the new pesticide he bought for the garden. That was the last I saw him.' },
      { img: 'salim-2', text: 'I’ve worked as gardener in this house since Musa was a small kid. He was a wild child but he grew to be a responsible adult. I’m not very fit anymore but he doesn’t fire me. I don’t know anyone that would want to hurt him.' },
      { img: 'salim-3', text: 'I was sitting in front of the study when I heard the scream. I fell down when I tried to run there. Luckily Daud came to help me. But when we went to the parlor Musa was already dead.' },
    ],
  },
};

// Greeting-only officers: one fixed line each, assigned room by room.
const GREETINGS = [
  'Morning, detective. Mind where you step, forensics haven’t finished in here.',
  'Captain Aiman is waiting in the parlor, detective.',
  'Nobody leaves the house until this is solved. Captain’s orders.',
  'Gloves on before you touch anything, detective.',
  'I’ve been on my feet since half past eleven. This house is bigger than the station.',
  'Quiet house, isn’t it? Too quiet, if you ask me.',
  'Good luck, detective. Everyone here has a story.',
  'Write everything down. The small details are the ones that matter.',
];

const NOTES = {
  // ---- Kitchen ----
  'kitchen-officer-1': { kind: 'officer', badge: 'PC 0417', text: GREETINGS[0] },
  'kitchen-officer-2': { kind: 'officer', badge: 'PC 0952', text: 'Forensic said fingerprints on pistol belong to Musa and Faiz.' },
  'kitchen-officer-3': { kind: 'officer', badge: 'PC 1183', text: 'Collecting evidences...' },
  'kitchen-knife-block': { kind: 'evidence', title: 'Knife block', place: 'Kitchen, side counter', text: 'This knife block is missing a knife...' },
  // ---- Dining Room ----
  'dining-officer-1': { kind: 'officer', badge: 'PC 0738', text: GREETINGS[1] },
  'dining-officer-2': { kind: 'officer', badge: 'PC 1264', text: 'Forensic said fingerprints on knife belong to Daud, Nora and Dania.' },
  // ---- Parlor ----
  'parlor-officer-1': { kind: 'officer', badge: 'PC 0221', text: 'We must not contaminate this crime scene!' },
  'parlor-officer-2': { kind: 'officer', badge: 'PC 0583', text: 'There is an empty glass here. And some spilled liquid on the floor...' },
};
