var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: {
    preload: preload, 
    create: create,
    update: update
  }
}

var game = new Phaser.Game(config);

var Taluga;

function preload() {                                              
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
    this.load.image('peixe', 'assets/peixes/tartaruga.png');
    this.load.image('serio', 'assets/peixes/peixe_serio.png');
}

function create() {                                               
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    Taluga = this.add.image(400, 300, 'peixe');
    this.add.image(400, 150, 'tubarao');
    this.add.image(200, 100, 'serio');
    Taluga.setFlip(true, false);
    

}

function update() { 

  Taluga.x = this.input.x;
  Taluga.y = this.input.y;
  
}