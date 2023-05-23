import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function loadGLTFModel(
    scene, glbPath, 
    options={ recieveShadow: true, castShadow: true }
) {
    const { recieveShadow, castShadow } = options
    return new Promise(( resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'astronaut'
                obj.position.y = 0
                obj.recieveShadow = recieveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function (child) {
                    if(child.isMesh) {
                        child.castShadow = castShadow
                        child.recieveShadow = recieveShadow

                    }
                })

                resolve(obj)
            },
            undefined,
            function(error){
                reject(error)
            }
        )
    })
}