$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0,700,100,8,"hotpink");

    createPlatform(100,600,200,8,"hotpink");

    createPlatform(200,500,300,8,"hotpink");
    createPlatform(500,500,8,200,"hotpink");
    createPlatform(600,700,200,8,"hotpink");
    createPlatform(700,600,100,8,"hotpink");
    createPlatform(900,500,100,8,"hotpink");
    createPlatform(1100,400,100,8,"hotpink");
    createPlatform(700,300,300,8,"hotpink");
    createBadPlatform(500,700,100,8,"red");
    createPlatform(300, 150, 200, 20, "hotpink", 0, 0, 0, 210, 500, 1);
    createPlatform(0,100,75,8,"hotpink");
    createPlatform(200,150,100,8, "hotpink");
    createPlatform(1000,600,200,8,"hotpink");


    // TODO 3 - Create Collectables
    createCollectable("database",600,650,0.3);
    createCollectable("database",0,50);
    createCollectable("database",950,250);
  
    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 2500, 20, 10, 100, 600, 2);

    createCannon("top", 600,2000,10,20,600,800);
    createCannon("top",1300,3000);


  
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }


  registerSetup(setup);
});

