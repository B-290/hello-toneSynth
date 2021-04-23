const button = document.querySelector('.play1');
const button2 = document.querySelector('.play2');
const buffer = new Tone.Buffer('onload', {
  url: "assets/storm.mp3",
  loop: true,
  autostart: true,
  onload: true,
});

buffer.load()
buffer.get()

console.log('onload', 'url');

const player = new Tone.Player({
  url: "assets/storm.mp3",
  loop: true,
  autostart: true,
}).toDestination();

button.addEventListener('click', function play(){
	
  player.start(0)
  player.stop(1)
  });

  console.log('click', play);


const distortion = new Tone.Distortion(0.4).toDestination();
  player.connect(distortion);

  

	



 