export default function replaceLine() {
  let lines = [
    'This is a random sentence',
    'This site is just meaningless',
    'Who am I? Where am I? What am I doing?',
    'Okay I originally want to write something like Fortunes...',
    'What I got instead is this completely meaningless thing...',
  ];
  return lines[Math.floor(Math.random() * lines.length)];
}
