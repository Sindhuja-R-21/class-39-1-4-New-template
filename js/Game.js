class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // TA
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2]; //car1-0, car2-1
  }

  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //SA
  play() {
      this.handleElements();
      Player.getPlayerInfo();

      if(allPlayers!==undefined){

        image(track,0,-height*5,width,height*6);

        var index=0;

        for(var plr in allPlayers){
          index=index+1;

          var x=allPlayers[plr].positionX; //players X pos from DB
          var y=height-allPlayers[plr].positionY; //players Y pos from DB

          //giving cars the value of players X and Y pos
          cars[index-1].position.x=x;
          cars[index-1].position.y=y;
          
          

        }



      }


      drawSprites();
    }
  }

