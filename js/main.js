

/*All the scene set up stuff*/
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

//Creating a cube
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color:0x050d1});
var cube = new THREE.Mesh(geometry,material);

//This vector holds the x,y,z postion of our cube
var cubeOnePosition = new THREE.Vector3();

var zPlayerMoving = false;


//Creating a listener for key input
// var listener = new window.keypress.Listener();

document.addEventListener("keydown", function(a)
{
	if(a.which == 87)
	{
		console.log("check it");
		

	}

});



renderScene();
populateScene();
animate();

/*The function used to render the scene*/
function renderScene()
{
    //Setting the render size of the window and rendering the scene
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


/*This function populates our scene with meshes*/
function populateScene()
{
	//Adding the cube to the scene
	scene.add(cube);
	//This updates the cubes position matrix
	scene.updateMatrixWorld(true);

	camera.position.z = 4;
}

/*The function we call to animate our scene*/
function animate()
{
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    updateObjPosition(cubeOnePosition, cube);
    // detectPlayerInput();


}
/*This updates objects positions within the world */
function updateObjPosition(posVector, objMesh)
{
	posVector.setFromMatrixPosition(objMesh.matrixWorld);
	// console.log(posVector.x + ',' + posVector.y + ',' + posVector.z);
}

// function detectPlayerInput()
// {
// 	listener.simple_combo("w", function() 
// 	{
// 		console.log("You pressed W");
// 		cube.translateZ(0.01);
// 	});
// }

function movePlayerZ()
{
	
}
