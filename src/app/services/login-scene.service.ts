import { Injectable } from '@angular/core';
declare let THREE:any;

@Injectable()
export class LoginSceneService {

  constructor () { }

  initScene () :void {
    let container;
    let camera, scene, renderer;
    let uniforms;

    function init() {
      container = document.getElementById( 'background' );

      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();

      let geometry = new THREE.PlaneBufferGeometry( 2, 2 );

      uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_mouse: { type: "v2", value: new THREE.Vector2() }
      };

      let material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
      });

      let mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( window.devicePixelRatio );

      container.appendChild( renderer.domElement );

      onWindowResize();
      window.addEventListener('resize', onWindowResize, false);

      document.onmousemove = function(e){
        uniforms.u_mouse.value.x = e.pageX
        uniforms.u_mouse.value.y = e.pageY
      }
    }

    function onWindowResize () {
      renderer.setSize( window.innerWidth, window.innerHeight );
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
    }

    function animate () {
      requestAnimationFrame( animate );
      render();
    }

    function render () {
      uniforms.u_time.value += 0.05;
      renderer.render( scene, camera );
    }

    init();
    animate();
  }
}
