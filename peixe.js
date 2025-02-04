var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho_roxo;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png');
    this.load.image('concha', 'assets/peixes/concha.png');
    this.load.image('concha1', 'assets/peixes/concha.png');
    this.load.image('concha2', 'assets/peixes/concha.png');
}


function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(400, 450, 'concha');
    this.add.image(600, 450, 'concha1');
    this.add.image(200, 450, 'concha2');

    //guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformando a variável
    peixinho.setFlip(true, false);
}

function update() {

    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
