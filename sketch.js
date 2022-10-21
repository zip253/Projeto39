
//Criando variáveis
	var chao;
		var fundo;
	var jogador;
		var movendo = false;
	var pulando = false;
		var chaoinv;

//Criando variáveis imagens
	var fundoimg;
		var chaoimg;
	var jogadorani;
		var jogadoraniCD;
	var jogadoraniCE;
		var jogadoraniPE;
	var jogadoraniJE;
		var jogadoraniJD;

//Carregando imagens
	function preload(){

		fundoimg = loadImage("./assets/Fundo.png");
			chaoimg = loadImage("./assets/Chão.png")

		jogadorani = loadAnimation("./assets/Personagem/DireitaP1.png","./assets/Personagem/DireitaP2.png");
			jogadoraniCD = loadAnimation("./assets/Personagem/DireitaC1.png","./assets/Personagem/DireitaC2.png");
		jogadoraniCE = loadAnimation("./assets/Personagem/EsquerdaC1.png","./assets/Personagem/EsquerdaC2.png");
			jogadoraniPE = loadAnimation("./assets/Personagem/EsquerdaP1.png","./assets/Personagem/EsquerdaP2.png");
		jogadoraniJE = loadAnimation("./assets/Personagem/EsquerdaC1.png","./assets/Personagem/EsquerdaC2.png");
			jogadoraniJD = loadAnimation("./assets/Personagem/DireitaC1.png","./assets/Personagem/DireitaC2.png");
		
	}

//Configurando
	function setup(){
		createCanvas(1000,232);

			//Criando Sprites

				//Fundo
				fundo = createSprite(860, 116)
					fundo.addImage(fundoimg)

				//Chão
				chao = createSprite(660, 230)
					chao.addImage(chaoimg)
				chao.scale = 0.08
					//Inv
					chaoinv = createSprite(500, 215, 1000,50);
						chaoinv.visible = false;

				//Personagem
				jogador = createSprite(50,175,20,100);
					jogador.addAnimation("paradoD", jogadorani);
						jogador.addAnimation("paradoE", jogadoraniPE);
					jogador.addAnimation("correndoD", jogadoraniCD);
						jogador.addAnimation("correndoE", jogadoraniCE);
					jogador.addAnimation("pulandoD", jogadoraniJD);
						jogador.addAnimation("pulandoE", jogadoraniJE);
					jogador.changeAnimation("paradoD");
				jogador.scale = 0.45
	}

//Desenhando
	function draw(){
		background("violet");
			text(mouseX + "," + mouseY, mouseX, mouseY); 
		camera.x = jogador.x + 270
  		camera.y = jogador.y + 270


		//Movendo o jogador
		if (keyDown(RIGHT_ARROW)) {
			jogador.x = jogador.x + 5
			jogador.changeAnimation("correndoD");
			movendo = true
		  }
		  else if (keyDown(LEFT_ARROW)) {
			jogador.x = jogador.x - 5
			jogador.changeAnimation("correndoE");
			movendo = true
		  }
		  else if (keyDown("space") && jogador.y >= 160) {
			jogador.velocityY = jogador.velocityY - 2.5;
			jogador.changeAnimation("pulandoD");
			movendo = true;
			pulando = true;
		  }
		  else if (pulando == true) {
			pulando = false;
			jogador.changeAnimation("pulandoD");
			movendo = false
		  }
		  else if (movendo == true) {
			movendo = false
			jogador.changeAnimation("paradoD")
		  }
		  jogador.velocityY = jogador.velocityY + 0.5;

		  //Colidindo com o chão
		  jogador.collide(chaoinv);

//===========================================================================
	


		drawSprites();
	}