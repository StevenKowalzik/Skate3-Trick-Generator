const grinds = ['nosegrind', '50-50', '5-0', 'Feeble', 'Smith', 'Crooked'];
const slides = ['noseslide', 'tailslide', 'boardslide', 'lipslide', 'bluntslide', 'nosebluntslide'];
const stance = ['', '', '', 'switch', 'fakie', 'nollie'];
const direction = ['frontside', 'backside'];
const tricks = ['kickflip', 'heelflip', 'shoveit', 'fsshoveit', '', '', '', ''];
const rotation = ['fs180', 'bs180', 'Pop out','Pop over','to fakie','', '', ''];
const trickDisplay = document.querySelector('#trick');
const button = document.querySelector('button');
const sound = document.querySelector('audio');
button.addEventListener('click', generateTrick);

const choose = tricks => tricks[Math.floor(Math.random() * tricks.length)];

function generateTrick() {
  let railtrick;
  if ( Math.random() < 0.5 ) { railtrick = grinds; }
  else { railtrick = slides; }
  let trick = `Do a ${choose(stance)} ${choose(tricks)} ${choose(direction)} ${choose(railtrick)} ${choose(rotation)}`;
  trickDisplay.innerHTML = trick;
  if (trick.search('heelflip') != -1) {
    sound.play();
  }
}
