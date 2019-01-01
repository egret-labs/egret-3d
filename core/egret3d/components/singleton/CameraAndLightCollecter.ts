namespace egret3d {
    /**
     * 
     */
    export enum LightCountDirty {
        None = 0,
        DirectionalLight = 0b00001,
        SpotLight = 0b00010,
        RectangleAreaLight = 0b00100,
        PointLight = 0b01000,
        HemisphereLight = 0b10000,
    }
    /**
     * 激活的摄像机和灯光。
     */
    export class CameraAndLightCollecter extends paper.SingletonComponent {
        /**
         * 
         */
        public lightCountDirty: LightCountDirty = LightCountDirty.None;
        /**
         * 
         */
        public readonly cameras: Camera[] = [];
        /**
         * 
         */
        public readonly directionalLights: DirectionalLight[] = [];
        /**
         * 
         */
        public readonly spotLights: SpotLight[] = [];
        /**
         * 
         */
        public readonly rectangleAreaLights: RectangleAreaLight[] = [];
        /**
         * 
         */
        public readonly pointLights: PointLight[] = [];
        /**
         * 
         */
        public readonly hemisphereLights: HemisphereLight[] = [];

        private _sortCameras(a: Camera, b: Camera) {
            const aOrder = a.renderTarget ? a.order : a.order * 1000 + 1;
            const bOrder = b.renderTarget ? b.order : b.order * 1000 + 1;

            return aOrder - bOrder;
        }
        /**
         * 更新相机。
         */
        public updateCameras(gameObjects: ReadonlyArray<paper.GameObject>) {
            this.cameras.length = 0;

            for (const gameObject of gameObjects) {
                this.cameras.push(gameObject.getComponent(Camera)!);
            }
        }
        /**
         * 更新灯光。
         */
        public updateLights(gameObjects: ReadonlyArray<paper.GameObject>) {
            let directLightCount = 0, spotLightCount = 0, rectangleAreaLightCount = 0, pointLightCount = 0, hemisphereLightCount = 0;
            const lights = [];
            const { directionalLights, spotLights, rectangleAreaLights, pointLights, hemisphereLights } = this;

            for (const gameObject of gameObjects) {
                const light = gameObject.getComponent(BaseLight as any, true) as BaseLight;
                lights.push(light);

                switch (light.constructor) {
                    case DirectionalLight:
                        directLightCount++;
                        break;

                    case SpotLight:
                        spotLightCount++;
                        break;

                    case RectangleAreaLight:
                        rectangleAreaLightCount++;
                        break;

                    case PointLight:
                        pointLightCount++;
                        break;

                    case HemisphereLight:
                        hemisphereLightCount++;
                        break;
                }
            }

            if (directLightCount !== directionalLights.length) {
                this.lightCountDirty |= LightCountDirty.DirectionalLight;
                directionalLights.length = directLightCount;

                let index = 0;
                for (const light of lights) {
                    if (light.constructor !== DirectionalLight) {
                        continue;
                    }

                    directionalLights[index++] = light as any;
                }
            }

            if (spotLightCount !== spotLights.length) {
                this.lightCountDirty |= LightCountDirty.SpotLight;
                spotLights.length = spotLightCount;

                let index = 0;
                for (const light of lights) {
                    if (light.constructor !== SpotLight) {
                        continue;
                    }

                    spotLights[index++] = light as any;
                }
            }

            if (rectangleAreaLightCount !== rectangleAreaLights.length) {
                this.lightCountDirty |= LightCountDirty.RectangleAreaLight;
                rectangleAreaLights.length = rectangleAreaLightCount;

                let index = 0;
                for (const light of lights) {
                    if (light.constructor !== RectangleAreaLight) {
                        continue;
                    }

                    rectangleAreaLights[index++] = light as any;
                }
            }

            if (pointLightCount !== pointLights.length) {
                this.lightCountDirty |= LightCountDirty.PointLight;
                pointLights.length = pointLightCount;

                let index = 0;
                for (const light of lights) {
                    if (light.constructor !== PointLight) {
                        continue;
                    }

                    pointLights[index++] = light as any;
                }
            }

            if (hemisphereLightCount !== hemisphereLights.length) {
                this.lightCountDirty |= LightCountDirty.HemisphereLight;
                hemisphereLights.length = hemisphereLightCount;

                let index = 0;
                for (const light of lights) {
                    if (light.constructor !== HemisphereLight) {
                        continue;
                    }

                    hemisphereLights[index++] = light as any;
                }
            }
        }
        /**
         * 排序相机。
         */
        public sortCameras() {
            this.cameras.sort(this._sortCameras);
        }
        /**
         * 相机计数。
         */
        @paper.editor.property(paper.editor.EditType.UINT, { readonly: true })
        public get cameraCount(): uint {
            return this.cameras.length;
        }
        /**
         * 灯光计数。
         */
        @paper.editor.property(paper.editor.EditType.UINT, { readonly: true })
        public get lightCount(): uint {
            return this.directionalLights.length
                + this.spotLights.length
                + this.rectangleAreaLights.length
                + this.pointLights.length
                + this.hemisphereLights.length;
        }
    }
}