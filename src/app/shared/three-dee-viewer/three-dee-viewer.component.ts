import { Component, HostListener, Input, OnInit } from '@angular/core';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

@Component({
  selector: 'app-three-dee-viewer',
  templateUrl: './three-dee-viewer.component.html',
  styleUrl: './three-dee-viewer.component.scss'
})
export class ThreeDeeViewerComponent implements OnInit {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private mixer: THREE.AnimationMixer | undefined;
  private controls!: OrbitControls;
  private loader!: FBXLoader;
  private clock = new THREE.Clock();
  private currentObject: THREE.Group<THREE.Object3DEventMap> | null;
  private viewDimension!: number;
  private threeJsContainer!: any;
  private boundingBox!: THREE.LineSegments<THREE.EdgesGeometry<THREE.BoxGeometry>, THREE.LineBasicMaterial, THREE.Object3DEventMap>;
  
  @Input() path: string | undefined;
  @Input() ambientIntensity?: number;
  
  constructor () {
    this.currentObject = null;
    
    // Load FBX model
    this.loader = new FBXLoader();
  }
  
  ngOnInit(): void {
    this.threeJsContainer = document.querySelector('#threejs-container');
    this.viewDimension = Math.min(this.threeJsContainer?.clientHeight || 0, this.threeJsContainer?.clientWidth || 0);
    console.log('init dim', this.viewDimension)
    
    this.initThreeJS();
    this.animate();
  }
  
  ngOnChanges() {
    if (this.loader) {
      this.clearModel();
      this.loadModel();
    }
  }
  
  initThreeJS() {    
    // Create a scene
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color('grey')
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      Math.max(window.innerHeight, window.innerWidth)*1000,
    );
    this.camera.position.set(0, 0, this.viewDimension);
    // Update camera aspect ratio and projection matrix
    this.camera.aspect = this.threeJsContainer!.clientWidth / this.threeJsContainer!.clientHeight;
    this.camera.updateProjectionMatrix();
    
    // Create a renderer
    this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    this.renderer.setSize(this.threeJsContainer!.clientWidth, this.threeJsContainer!.clientHeight);
    this.renderer.setClearColor('white', 0)
    this.renderer.shadowMap.enabled = true;
    this.threeJsContainer!.appendChild(this.renderer.domElement);
    
    // Add OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    
    
    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, this.ambientIntensity || 1);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);
    
  }
  
  private animate() {
    requestAnimationFrame(() => this.animate());
    
    const delta = this.clock.getDelta();
    if (this.mixer) {
      this.mixer.update(delta);
    }
    // this.controls.addEventListener( 'change', ()=>{this.renderer.render(this.scene, this.camera)} );
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
  
  private clearModel() {
    if (!!this.currentObject) {
      this.scene.remove(this.currentObject);
      this.currentObject.traverse(function (child) {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.geometry.dispose();
          
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(mat => mat.dispose());
            }
            else {
              mesh.material.dispose();
            }
          }
        }
      });
      this.currentObject = null;
    }
  }
  
  private loadModel() {
    console.log('loading', this.path)
    if (this.path && this.loader) {
      this.loader.load(
        `${this.path}`, // file path
        (object) => { // onLoad function
          this.currentObject = object;
          
          object.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              child.castShadow = true;
              child.receiveShadow = true;
              // Remove textures and materials if present
              
              // console.log('mat', (mesh));
              
              // mesh.material = new THREE.MeshStandardMaterial({ color: 0x999999 }); // Replace material with basic one
            }
            
          })
          
          this.rescaleObject(object);
          this.scene.add(object);
          
          // Animation mixer
          if (object.animations && object.animations.length > 0) {
            this.mixer = new THREE.AnimationMixer(object);
            object.animations.forEach((clip) => {
              this.mixer?.clipAction(clip).play();
            })
          }
          // action.play();
        },
        undefined, // onProgress function
        (error) => { // onError function
          console.error('An error has occured', error);
        }
      );
    }
  }
  
  private getObjectDimensions(object: THREE.Group<THREE.Object3DEventMap>) {
    const size = new THREE.Vector3();
    const boundingBox = new THREE.Box3().setFromObject(object);
    
    boundingBox.getSize(size);
    
    return size;
  }
  
  private rescaleObject(object: THREE.Group<THREE.Object3DEventMap>) {
    const size = this.getObjectDimensions(object);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = this.viewDimension / maxDim;
    object.scale.set(scale, scale, scale);
    object.position.set(0,-this.viewDimension/2,0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('change window size')
    // Update the view dimension
    this.viewDimension = Math.min(this.threeJsContainer?.clientHeight || 0, this.threeJsContainer?.clientWidth || 0);

    // Update renderer size
    this.renderer.setSize(this.threeJsContainer!.clientWidth, this.threeJsContainer!.clientHeight);

    // Update camera aspect ratio and projection matrix
    this.camera.aspect = this.threeJsContainer!.clientWidth / this.threeJsContainer!.clientHeight;
    this.camera.updateProjectionMatrix();

    // // Resize the bounding box
    // this.resizeBoundingBox();
    
    // // Rescale the current object to maintain the aspect ratio
    // if (this.currentObject) {
    //   this.rescaleObject(this.currentObject);
    // }
  }
}
