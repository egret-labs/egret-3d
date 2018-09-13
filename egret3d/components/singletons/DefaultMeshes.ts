namespace egret3d {
    const _helpVector3 = Vector3.create();
    const _attributesB: gltf.MeshAttributeType[] = [
        gltf.MeshAttributeType.POSITION,
        gltf.MeshAttributeType.NORMAL,
        gltf.MeshAttributeType.TEXCOORD_0,
    ];
    /**
     * 
     */
    export class DefaultMeshes extends paper.SingletonComponent {
        public static QUAD: Mesh;
        public static QUAD_PARTICLE: Mesh;
        public static PLANE: Mesh;
        public static CIRCLE_LINE: Mesh;
        public static CUBE: Mesh;
        public static PYRAMID: Mesh;
        public static CONE: Mesh;
        public static CYLINDER: Mesh;
        public static SPHERE: Mesh;

        public static LINE: Mesh;
        public static AXISES: Mesh;
        public static CUBE_WIREFRAMED: Mesh;
        public static PYRAMID_WIREFRAMED: Mesh;
        public static CAMERA_WIREFRAMED: Mesh;
        public static GRID: Mesh;

        public initialize() {
            super.initialize();
            // TODO 颜色切线，球体，更多类型。

            { // QUAD.
                const mesh = DefaultMeshes.createPlane();
                mesh._isBuiltin = true;
                mesh.name = "builtin/quad.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.QUAD = mesh;
            }

            { // QUAD_PARTICLE.
                const mesh = DefaultMeshes.createPlane(1.0, 1.0, -0.5, 0.0);
                mesh._isBuiltin = true;
                mesh.name = "builtin/quad_particle.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.QUAD_PARTICLE = mesh;
            }

            { // PLANE.
                const mesh = DefaultMeshes.createPlane(10.0, 10.0);
                mesh._isBuiltin = true;
                mesh.name = "builtin/plane.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.PLANE = mesh;
            }

            { // CUBE.
                const mesh = DefaultMeshes.createCube();
                mesh._isBuiltin = true;
                mesh.name = "builtin/cube.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.CUBE = mesh;
            }

            { // PYRAMID.
                const mesh = new Mesh(16, 18);
                mesh._isBuiltin = true;
                mesh.name = "builtin/pyramid.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.PYRAMID = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    -0.5, 0.0, -0.5,
                    0.0, 1.0, 0.0,
                    0.5, 0.0, -0.5,
                    0.5, 0.0, -0.5,
                    0.0, 1.0, 0.0,
                    0.5, 0.0, 0.5,
                    0.5, 0.0, 0.5,
                    0.0, 1.0, 0.0,
                    -0.5, 0.0, 0.5,
                    -0.5, 0.0, 0.5,
                    0.0, 1.0, 0.0,
                    -0.5, 0.0, -0.5,
                    -0.5, 0.0, -0.5,
                    0.5, 0.0, -0.5,
                    0.5, 0.0, 0.5,
                    -0.5, 0.0, 0.5,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, [
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, -1, 0,
                    0, -1, 0,
                    0, -1, 0,
                    0, -1, 0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, [
                    0, 0,
                    0.5, 0.5,
                    0, 1,
                    0, 1,
                    0.5, 0.5,
                    1, 1,
                    1, 1,
                    0.5, 0.5,
                    1, 0,
                    1, 0,
                    0.5, 0.5,
                    0, 0,
                    0, 0,
                    1, 0,
                    1, 1,
                    0, 1,
                ]);
                mesh.setIndices([
                    0, 2, 1, 3, 5, 4,
                    6, 8, 7, 9, 11, 10,
                    12, 14, 13, 15, 14, 12
                ]);
            }

            { // CONE.
                const mesh = DefaultMeshes.createCylinder(0.0, 0.5, 1.0, 0.0, 0.0, 0.0, 16, 1);
                mesh._isBuiltin = true;
                mesh.name = "builtin/pyramid.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.CONE = mesh;
            }

            { // CYLINDER.
                const mesh = DefaultMeshes.createCylinder();
                mesh._isBuiltin = true;
                mesh.name = "builtin/cylinder.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.CYLINDER = mesh;
            }

            { // SPHERE.
                const mesh = DefaultMeshes.createSphereCCW();
                mesh._isBuiltin = true;
                mesh.name = "builtin/sphere.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.SPHERE = mesh;
            }

            { // LINE.
                const mesh = new Mesh(2, 0, [gltf.MeshAttributeType.POSITION, gltf.MeshAttributeType.COLOR_0]);
                mesh._isBuiltin = true;
                mesh.name = "builtin/axises.mesh.bin";
                mesh.glTFMesh.primitives[0].mode = gltf.MeshPrimitiveMode.Lines;
                paper.Asset.register(mesh);
                DefaultMeshes.LINE = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    0.0, 0.0, 0.0, 1.0, 0.0, 0.0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
                ]);
            }

            { // AXISES.
                const mesh = new Mesh(6, 0, [gltf.MeshAttributeType.POSITION, gltf.MeshAttributeType.COLOR_0]);
                mesh._isBuiltin = true;
                mesh.name = "builtin/axises.mesh.bin";
                mesh.glTFMesh.primitives[0].mode = gltf.MeshPrimitiveMode.Lines;
                paper.Asset.register(mesh);
                DefaultMeshes.AXISES = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    0.0, 0.0, 0.0, 1.0, 0.0, 0.0,
                    0.0, 0.0, 0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 0.0, 0.0, 1.0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0,
                    0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0,
                    0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0,
                ]);

                // for (let iy = 0; iy < gridY; iy++) {
                //     for (let ix = 0; ix < gridX; ix++) {
                //         const a = meshVertexCount + ix + gridX1 * iy;
                //         const b = meshVertexCount + ix + gridX1 * (iy + 1);
                //         const c = meshVertexCount + (ix + 1) + gridX1 * (iy + 1);
                //         const d = meshVertexCount + (ix + 1) + gridX1 * iy;

                //         // faces
                //         indices.push(
                //             a, b, d,
                //             b, c, d
                //         );
                //     }
                // }
            }

            { // CUBE_WIREFRAMED.
                const mesh = new Mesh(24, 0, [gltf.MeshAttributeType.POSITION, gltf.MeshAttributeType.COLOR_0]);
                mesh._isBuiltin = true;
                mesh.name = "builtin/cube_wireframed.mesh.bin";
                mesh.glTFMesh.primitives[0].mode = gltf.MeshPrimitiveMode.Lines;
                paper.Asset.register(mesh);
                DefaultMeshes.CUBE_WIREFRAMED = mesh;
                //
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    // Z-
                    -0.5, 0.5, -0.5,

                    0.5, 0.5, -0.5,
                    0.5, 0.5, -0.5,

                    0.5, -0.5, -0.5,
                    0.5, -0.5, -0.5,

                    -0.5, -0.5, -0.5,
                    -0.5, -0.5, -0.5,

                    -0.5, 0.5, -0.5,
                    //
                    0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
                    //
                    0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
                    //
                    -0.5, -0.5, -0.5, -0.5, -0.5, 0.5,
                    //
                    -0.5, 0.5, -0.5, -0.5, 0.5, 0.5,

                    // Z+
                    0.5, 0.5, 0.5,

                    0.5, -0.5, 0.5,
                    0.5, -0.5, 0.5,

                    -0.5, -0.5, 0.5,
                    -0.5, -0.5, 0.5,

                    -0.5, 0.5, 0.5,
                    -0.5, 0.5, 0.5,

                    0.5, 0.5, 0.5,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                ]);
            }

            { // PYRAMID_WIREFRAMED.
                const mesh = new Mesh(24, 0, [gltf.MeshAttributeType.POSITION, gltf.MeshAttributeType.COLOR_0]);
                mesh._isBuiltin = true;
                mesh.name = "builtin/pyramid_wireframed.mesh.bin";
                mesh.glTFMesh.primitives[0].mode = gltf.MeshPrimitiveMode.Lines;
                paper.Asset.register(mesh);
                DefaultMeshes.PYRAMID_WIREFRAMED = mesh;
                //
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    -0.5, 0.0, -0.5,
                    0.5, 0.0, -0.5,
                    0.5, 0.0, -0.5,
                    0.5, 0.0, 0.5,
                    0.5, 0.0, 0.5,
                    -0.5, 0.0, 0.5,
                    -0.5, 0.0, 0.5,
                    -0.5, 0.0, -0.5,

                    -0.5, 0.0, -0.5,
                    0.0, 1.0, 0.0,

                    0.5, 0.0, -0.5,
                    0.0, 1.0, 0.0,

                    0.5, 0.0, 0.5,
                    0.0, 1.0, 0.0,

                    -0.5, 0.0, 0.5,
                    0.0, 1.0, 0.0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,

                    1, 1, 1, 1,
                    1, 1, 1, 1,

                    1, 1, 1, 1,
                    1, 1, 1, 1,

                    1, 1, 1, 1,
                    1, 1, 1, 1,

                    1, 1, 1, 1,
                    1, 1, 1, 1,
                ]);
            }

            {
                //GRID
                const mesh = DefaultMeshes.createGrid(50, 50);
                mesh._isBuiltin = true;
                mesh.name = "builtin/grid.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.GRID = mesh;
            }

            {
                //CAMERA_WIREFRAMED
                const mesh = DefaultMeshes.createCameraWireframed(egret3d.Color.create(1.0, 0.7, 0), egret3d.Color.RED, egret3d.Color.create(0, 0.7, 1), egret3d.Color.WHITE, egret3d.Color.create(0.2, 0.2, 0.2));
                mesh._isBuiltin = true;
                mesh.name = "builtin/camera.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.CAMERA_WIREFRAMED = mesh;
            }
        }
        /**
         * 创建带网格的实体。
         */
        public static createObject(mesh: Mesh, name?: string, tag?: string, scene?: paper.Scene) {
            const gameObject = paper.GameObject.create(name, tag, scene);

            if (mesh === this.AXISES) {
                const axisX = this.createObject(this.LINE, "axisX", tag, scene);
                const axisY = this.createObject(this.LINE, "axisY", tag, scene);
                const axisZ = this.createObject(this.LINE, "axisZ", tag, scene);
                const arrowX = this.createObject(this.PYRAMID, "arrowX", tag, scene);
                const arrowY = this.createObject(this.PYRAMID, "arrowY", tag, scene);
                const arrowZ = this.createObject(this.PYRAMID, "arrowZ", tag, scene);
                const pickX = this.createObject(this.CUBE, "pickAxisX", tag, scene);
                const pickY = this.createObject(this.CUBE, "pickAxisY", tag, scene);
                const pickZ = this.createObject(this.CUBE, "pickAxisZ", tag, scene);

                axisX.transform.parent = gameObject.transform;
                axisY.transform.parent = gameObject.transform;
                axisZ.transform.parent = gameObject.transform;
                arrowX.transform.parent = axisX.transform;
                arrowY.transform.parent = axisY.transform;
                arrowZ.transform.parent = axisZ.transform;
                pickX.transform.parent = gameObject.transform;
                pickY.transform.parent = gameObject.transform;
                pickZ.transform.parent = gameObject.transform;

                axisY.transform.setLocalEuler(0.0, 0.0, Math.PI * 0.5);
                axisZ.transform.setLocalEuler(0.0, -Math.PI * 0.5, 0.0);
                arrowX.transform.setLocalEuler(0.0, 0.0, -Math.PI * 0.5);
                arrowY.transform.setLocalEuler(0.0, 0.0, -Math.PI * 0.5);
                arrowZ.transform.setLocalEuler(0.0, 0.0, -Math.PI * 0.5);

                arrowX.transform.setLocalPosition(Vector3.RIGHT).setLocalScale(0.05, 0.1, 0.05);
                arrowY.transform.setLocalPosition(Vector3.RIGHT).setLocalScale(0.05, 0.1, 0.05);
                arrowZ.transform.setLocalPosition(Vector3.RIGHT).setLocalScale(0.05, 0.1, 0.05);

                pickX.transform.setLocalPosition(egret3d.Vector3.RIGHT).setLocalScale(1, 0.3, 0.3);
                pickY.transform.setLocalPosition(egret3d.Vector3.UP).setLocalScale(0.3, 1, 0.3);
                pickZ.transform.setLocalPosition(egret3d.Vector3.FORWARD).setLocalScale(0.3, 0.3, 1);
                pickX.activeSelf = pickY.activeSelf = pickZ.activeSelf = false;

                (axisX.renderer as MeshRenderer).material = (axisX.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.RED).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);
                (axisY.renderer as MeshRenderer).material = (axisY.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.GREEN).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);
                (axisZ.renderer as MeshRenderer).material = (axisZ.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.BLUE).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);
                (arrowX.renderer as MeshRenderer).material = (arrowX.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.RED).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);
                (arrowY.renderer as MeshRenderer).material = (arrowY.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.GREEN).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);
                (arrowZ.renderer as MeshRenderer).material = (arrowZ.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.BLUE).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);

                (pickX.renderer as MeshRenderer).material = (pickX.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.RED).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);
                (pickY.renderer as MeshRenderer).material = (pickY.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.GREEN).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);
                (pickZ.renderer as MeshRenderer).material = (pickZ.renderer as MeshRenderer).material.clone().setColor("diffuse", Color.BLUE).setDepth(false, false).setRenderQueue(paper.RenderQueue.Overlay);
            }
            else {
                const meshFilter = gameObject.addComponent(MeshFilter);
                const renderer = gameObject.addComponent(MeshRenderer);
                meshFilter.mesh = mesh;

                switch (mesh) {
                    case this.LINE:
                    case this.CUBE_WIREFRAMED:
                    case this.PYRAMID_WIREFRAMED:
                    case this.GRID:
                    case this.CAMERA_WIREFRAMED:
                        renderer.material = DefaultMaterials.LINEDASHED_COLOR;
                        break;
                }

            }

            return gameObject;
        }
        /**
         * 创建平面网格。
         */
        public static createPlane(
            width: number = 1.0, height: number = 1.0,
            centerOffsetX: number = 0.0, centerOffsetY: number = 0.0,
            widthSegments: number = 1, heightSegments: number = 1,
        ) {
            const widthHalf = width / 2;
            const heightHalf = height / 2;

            const gridX1 = widthSegments + 1;
            const gridY1 = heightSegments + 1;

            const segmentWidth = width / widthSegments;
            const segmentHeight = height / heightSegments;

            // buffers
            const indices = [] as number[];
            const vertices = [] as number[];
            const normals = [] as number[];
            const uvs = [] as number[];

            // generate vertices, normals and uvs
            for (let iy = 0; iy < gridY1; iy++) {
                const y = iy * segmentHeight - heightHalf;

                for (let ix = 0; ix < gridX1; ix++) {
                    const x = ix * segmentWidth - widthHalf;

                    vertices.push(centerOffsetX + x, centerOffsetY - y, 0.0);
                    normals.push(0.0, 0.0, 1.0);
                    uvs.push(
                        ix / widthSegments,
                        iy / heightSegments
                    );
                }
            }

            // indices
            for (let iy = 0; iy < heightSegments; iy++) {
                for (let ix = 0; ix < widthSegments; ix++) {
                    const a = ix + gridX1 * iy;
                    const b = ix + gridX1 * (iy + 1);
                    const c = (ix + 1) + gridX1 * (iy + 1);
                    const d = (ix + 1) + gridX1 * iy;

                    // faces
                    indices.push(
                        a, b, d,
                        b, c, d
                    );
                }
            }

            const mesh = Mesh.create(vertices.length / 3, indices.length);
            mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
            mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
            mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs);
            mesh.setIndices(indices);

            return mesh;
        }
        /**
         * 创建立方体网格。
         */
        public static createCube(
            width: number = 1.0, height: number = 1.0, depth: number = 1.0,
            centerOffsetX: number = 0.0, centerOffsetY: number = 0.0, centerOffsetZ: number = 0.0,
            widthSegments: number = 1, heightSegments: number = 1, depthSegments: number = 1,
            differentFace: boolean = false
        ) {
            // helper variables
            let meshVertexCount = 0;
            // buffers
            const indices = [] as number[];
            const vertices = [] as number[];
            const normals = [] as number[];
            const uvs = [] as number[];
            // build each side of the box geometry
            buildPlane('z', 'y', 'x', -1, -1, depth, height, -width, depthSegments, heightSegments); // px
            buildPlane('z', 'y', 'x', 1, -1, depth, height, width, depthSegments, heightSegments); // nx
            buildPlane('x', 'z', 'y', 1, 1, width, depth, -height, widthSegments, depthSegments); // py
            buildPlane('x', 'z', 'y', 1, -1, width, depth, height, widthSegments, depthSegments); // ny
            buildPlane('x', 'y', 'z', 1, -1, width, height, -depth, widthSegments, heightSegments); // pz
            buildPlane('x', 'y', 'z', -1, -1, width, height, depth, widthSegments, heightSegments); // nz

            // build geometry
            if (differentFace) {
                const faceIndexCount = indices.length / 6;
                const mesh = Mesh.create(vertices.length / 3, 0);
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs);

                for (let i = 0; i < 6; ++i) {
                    mesh.addSubMesh(faceIndexCount, i);
                    mesh.setIndices(indices, i, faceIndexCount * i);
                }

                return mesh;
            }
            else {
                const mesh = Mesh.create(vertices.length / 3, indices.length);
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs);
                mesh.setIndices(indices);

                return mesh;
            }

            function buildPlane(u: string, v: string, w: string, udir: number, vdir: number, width: number, height: number, depth: number, gridX: number, gridY: number) {
                const segmentWidth = width / gridX;
                const segmentHeight = height / gridY;

                const widthHalf = width / 2;
                const heightHalf = height / 2;
                const depthHalf = depth / 2;

                const gridX1 = gridX + 1;
                const gridY1 = gridY + 1;

                let vertexCount = 0;

                // generate vertices, normals and uvs
                for (let iy = 0; iy < gridY1; iy++) {
                    const y = iy * segmentHeight - heightHalf;
                    for (let ix = 0; ix < gridX1; ix++) {
                        const x = ix * segmentWidth - widthHalf;

                        // set values to correct vector component
                        _helpVector3[u] = x * udir;
                        _helpVector3[v] = y * vdir;
                        _helpVector3[w] = depthHalf;

                        // now apply vector to vertex buffer
                        vertices.push(_helpVector3.x + centerOffsetX, _helpVector3.y + centerOffsetY, _helpVector3.z + centerOffsetZ);

                        // set values to correct vector component
                        _helpVector3[u] = 0.0;
                        _helpVector3[v] = 0.0;
                        _helpVector3[w] = depth > 0.0 ? 1.0 : - 1.0;

                        // now apply vector to normal buffer
                        normals.push(_helpVector3.x, _helpVector3.y, _helpVector3.z);

                        // uvs
                        uvs.push(ix / gridX);
                        uvs.push(iy / gridY);

                        // counters
                        vertexCount += 1;
                    }
                }

                // indices
                // 1. you need three indices to draw a single face
                // 2. a single segment consists of two faces
                // 3. so we need to generate six (2*3) indices per segment
                for (let iy = 0; iy < gridY; iy++) {
                    for (let ix = 0; ix < gridX; ix++) {
                        const a = meshVertexCount + ix + gridX1 * iy;
                        const b = meshVertexCount + ix + gridX1 * (iy + 1);
                        const c = meshVertexCount + (ix + 1) + gridX1 * (iy + 1);
                        const d = meshVertexCount + (ix + 1) + gridX1 * iy;

                        // faces
                        indices.push(
                            a, b, d,
                            b, c, d
                        );
                    }
                }

                // update total number of vertices
                meshVertexCount += vertexCount;
            }
        }
        /**
         * 创建圆柱体网格。
         */
        public static createCylinder(
            radiusTop: number = 0.5, radiusBottom: number = 0.5, height: number = 1.0,
            centerOffsetX: number = 0.0, centerOffsetY: number = 0.0, centerOffsetZ: number = 0.0,
            radialSegments: number = 16, heightSegments = 1,
            openEnded: boolean = false, thetaStart: number = 0.0, thetaLength: number = Math.PI * 2.0,
            differentFace: boolean = false
        ) {
            // buffers
            const indices = [] as number[];
            const vertices = [] as number[];
            const normals = [] as number[];
            const uvs = [] as number[];

            // helper variables
            let index = 0;
            let groupStart = 0;
            const halfHeight = height / 2;
            const indexArray = [] as number[][];
            const subIndices = [] as number[];

            // generate geometry
            generateTorso();

            if (openEnded === false) {
                if (radiusTop > 0.0) generateCap(true);
                if (radiusBottom > 0.0) generateCap(false);
            }

            // build geometry
            if (differentFace) {
                const mesh = Mesh.create(vertices.length / 3, 0);
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs);

                for (let i = 0; i < subIndices.length; i += 3) {
                    mesh.addSubMesh(subIndices[1], subIndices[2]);
                    mesh.setIndices(indices, i, subIndices[0]);
                }

                return mesh;
            }
            else {
                const mesh = Mesh.create(vertices.length / 3, indices.length);
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs);
                mesh.setIndices(indices);

                return mesh;
            }

            function generateTorso() {
                let groupCount = 0;

                // this will be used to calculate the normal
                const slope = (radiusBottom - radiusTop) / height;

                // generate vertices, normals and uvs
                for (let iY = 0; iY <= heightSegments; iY++) {
                    const indexRow = [];
                    const v = iY / heightSegments;
                    // calculate the radius of the current row
                    const radius = v * (radiusBottom - radiusTop) + radiusTop;

                    for (let iX = 0; iX <= radialSegments; iX++) {
                        const u = iX / radialSegments;
                        const theta = u * thetaLength + thetaStart;
                        const sinTheta = Math.sin(theta);
                        const cosTheta = Math.cos(theta);

                        // vertex
                        _helpVector3.x = radius * sinTheta;
                        _helpVector3.y = -v * height + halfHeight;
                        _helpVector3.z = -radius * cosTheta;
                        vertices.push(_helpVector3.x + centerOffsetX, _helpVector3.y + centerOffsetY, _helpVector3.z + centerOffsetZ);

                        // normal
                        _helpVector3.set(sinTheta, slope, cosTheta).normalize();
                        normals.push(_helpVector3.x, _helpVector3.y, _helpVector3.z);

                        // uv
                        uvs.push(u, v);

                        // save index of vertex in respective row
                        indexRow.push(index++);
                    }

                    // now save vertices of the row in our index array
                    indexArray.push(indexRow);
                }

                // generate indices
                for (let iX = 0; iX < radialSegments; iX++) {
                    for (let iY = 0; iY < heightSegments; iY++) {
                        // we use the index array to access the correct indices
                        const a = indexArray[iY][iX];
                        const b = indexArray[iY + 1][iX];
                        const c = indexArray[iY + 1][iX + 1];
                        const d = indexArray[iY][iX + 1];

                        // faces
                        indices.push(
                            a, b, d,
                            b, c, d
                        );

                        // update group counter
                        groupCount += 6;
                    }
                }

                // add a group to the geometry. this will ensure multi material support
                subIndices.push(groupStart, groupCount, 0);
                // calculate new start value for groups
                groupStart += groupCount;
            }

            function generateCap(top) {
                let centerIndexStart = 0, centerIndexEnd = 0;
                let groupCount = 0;
                const radius = (top === true) ? radiusTop : radiusBottom;
                const sign = (top === true) ? 1 : - 1;

                // save the index of the first center vertex
                centerIndexStart = index;

                // first we generate the center vertex data of the cap.
                // because the geometry needs one set of uvs per face,
                // we must generate a center vertex per face/segment
                for (let iX = 1; iX <= radialSegments; iX++) {
                    // vertex
                    vertices.push(0.0, halfHeight * sign, 0.0);

                    // normal
                    normals.push(0.0, sign, 0.0);

                    // uv
                    uvs.push(0.5, 0.5);

                    // increase index
                    index++;
                }

                // save the index of the last center vertex
                centerIndexEnd = index;

                // now we generate the surrounding vertices, normals and uvs
                for (let iX = 0; iX <= radialSegments; iX++) {
                    const u = iX / radialSegments;
                    const theta = u * thetaLength + thetaStart;
                    const cosTheta = Math.cos(theta);
                    const sinTheta = Math.sin(theta);

                    // vertex
                    _helpVector3.x = radius * sinTheta;
                    _helpVector3.y = halfHeight * sign;
                    _helpVector3.z = -radius * cosTheta;
                    vertices.push(_helpVector3.x + centerOffsetX, _helpVector3.y + centerOffsetY, _helpVector3.z + centerOffsetZ);

                    // normal
                    normals.push(0.0, sign, 0.0);

                    // uv
                    uvs.push(
                        (sinTheta * 0.5 * sign) + 0.5,
                        (cosTheta * 0.5) + 0.5
                    );

                    // increase index
                    index++;
                }

                // generate indices
                for (let iX = 0; iX < radialSegments; iX++) {
                    const c = centerIndexStart + iX;
                    const i = centerIndexEnd + iX;

                    if (top === true) {
                        // face top
                        indices.push(i, i + 1, c);

                    }
                    else {
                        // face bottom
                        indices.push(i + 1, i, c);
                    }

                    groupCount += 3;
                }

                // add a group to the geometry. this will ensure multi material support
                subIndices.push(groupStart, groupCount, top === true ? 1 : 2);

                // calculate new start value for groups
                groupStart += groupCount;
            }
        }

        public static createSphereCCW(radius: number = 0.5, widthSegments: number = 24, heightSegments: number = 12) {
            widthSegments = Math.max(3, Math.floor(widthSegments));
            heightSegments = Math.max(2, Math.floor(heightSegments));
            const mesh = new Mesh((widthSegments + 1) * (heightSegments + 1), widthSegments * heightSegments * 6 - 6, _attributesB);
            //
            let index = 0;
            const vertex = new Vector3();
            const normal = new Vector3();
            const grid = new Array<number[]>();
            const vertices: number[] = [];
            const normals: number[] = [];
            const uvs: number[] = [];

            for (let iy = 0; iy <= heightSegments; iy++) {
                const verticesRow = new Array<number>();
                const v = iy / heightSegments;

                for (let ix = 0; ix <= widthSegments; ix++) {
                    const u = ix / widthSegments;
                    // Vertex.
                    vertex.x = -radius * Math.cos(u * Math.PI * 2) * Math.sin(v * Math.PI);
                    vertex.y = radius * Math.cos(v * Math.PI);
                    vertex.z = radius * Math.sin(u * Math.PI * 2) * Math.sin(v * Math.PI);
                    vertices.push(vertex.x, vertex.y, vertex.z);

                    // Normal.
                    normal.x = vertex.x;
                    normal.y = vertex.y;
                    normal.z = vertex.z;
                    const num = Math.sqrt(normal.x * normal.x + normal.y * normal.y + normal.z * normal.z);

                    if (num > Number.MIN_VALUE) {
                        normals.push(normal.x / num, normal.y / num, normal.z / num);
                    }
                    else {
                        normals.push(0.0, 0.0, 0.0);
                    }
                    uvs.push(0, 1.0 - u, v);
                    verticesRow.push(index++);
                }

                grid.push(verticesRow);
            }
            mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
            mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
            mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs);
            // Indices.
            const tris = new Array<number>();
            for (let iy = 0; iy < heightSegments; iy++) {
                for (let ix = 0; ix < widthSegments; ix++) {
                    const a = grid[iy][ix + 1];
                    const b = grid[iy][ix];
                    const c = grid[iy + 1][ix];
                    const d = grid[iy + 1][ix + 1];

                    if (iy !== 0) {
                        tris.push(a, d, b);
                    }

                    if (iy !== heightSegments - 1) {
                        tris.push(b, d, c);
                    }
                }
            }

            const indices = mesh.getIndices() as Uint16Array;
            for (let i = 0, l = tris.length; i < l; i++) {
                indices[i] = tris[i];
            }

            return mesh;
        }

        public static createCameraWireframed(colorFrustum: egret3d.Color, colorCone: egret3d.Color, colorUp: egret3d.Color, colorTarget: egret3d.Color, colorCross: egret3d.Color) {

            const vertices: number[] = [], colors: number[] = [];
            const verticeCount = 50;
            for (let i = 0; i < verticeCount; i++) {
                vertices.push(0.0, 0.0, 0.0);

                if (i < 24) {
                    colors.push(colorFrustum.r, colorFrustum.g, colorFrustum.b, colorFrustum.a);
                }
                else if (i < 32) {// cone
                    colors.push(colorCone.r, colorCone.g, colorCone.b, colorCone.a);
                }
                else if (i < 38) {// up
                    colors.push(colorUp.r, colorUp.g, colorUp.b, colorUp.a);
                }
                else if (i < 40) {// target
                    colors.push(colorTarget.r, colorTarget.g, colorTarget.b, colorTarget.a);
                }
                else {
                    colors.push(colorCross.r, colorCross.g, colorCross.b, colorCross.a);
                }

            }
            const mesh = new Mesh(verticeCount, 0, [gltf.MeshAttributeType.POSITION, gltf.MeshAttributeType.COLOR_0]);
            mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
            mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, colors);

            mesh.glTFMesh.primitives[0].mode = gltf.MeshPrimitiveMode.Lines;

            return mesh;
        }

        public static createGrid(size: number, divisions: number, color1?: egret3d.Color, color2?: egret3d.Color) {
            size = size || 10;
            divisions = divisions || 10;
            color1 = color1 !== undefined ? color1 : egret3d.Color.create(0.26, 0.26, 0.26);
            color2 = color2 !== undefined ? color2 : egret3d.Color.create(0.53, 0.53, 0.53);

            const center = divisions / 2;
            const step = size / divisions;
            const halfSize = size / 2;
            const vertices: number[] = [], colors: number[] = [];

            for (let i = 0, k = - halfSize; i <= divisions; i++ , k += step) {

                vertices.push(- halfSize, 0, k);
                vertices.push(halfSize, 0, k);
                vertices.push(k, 0, - halfSize);
                vertices.push(k, 0, halfSize);

                const color = i === center ? color1 : color2;

                colors.push(color.r, color.g, color.b, color.a);
                colors.push(color.r, color.g, color.b, color.a);
                colors.push(color.r, color.g, color.b, color.a);
                colors.push(color.r, color.g, color.b, color.a);
            }

            for (var i = 0; i < colors.length; i += 80) {
                for (var j = 0; j < 16; j++) {
                    colors[i + j] = 0.26;
                }
            }

            const mesh = new Mesh(vertices.length, 0, [gltf.MeshAttributeType.POSITION, gltf.MeshAttributeType.COLOR_0]);
            mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
            mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, colors);

            mesh.glTFMesh.primitives[0].mode = gltf.MeshPrimitiveMode.Lines;

            return mesh;
        }
    }
}
