"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var examples;
(function (examples) {
    var sniper;
    (function (sniper) {
        var AnimationTest = (function () {
            function AnimationTest() {
            }
            AnimationTest.prototype.start = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // Load resource config.
                            return [4 /*yield*/, RES.loadConfig("default.res.json", "resource/sniper/")];
                            case 1:
                                // Load resource config.
                                _a.sent();
                                return [4 /*yield*/, RES.getResAsync("Assets/Prefab/Actor/female1.prefab.json")];
                            case 2:
                                _a.sent();
                                egret3d.Camera.main.gameObject.addComponent(Starter);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            return AnimationTest;
        }());
        sniper.AnimationTest = AnimationTest;
        __reflect(AnimationTest.prototype, "examples.sniper.AnimationTest", ["examples.Example"]);
        var Starter = (function (_super) {
            __extends(Starter, _super);
            function Starter() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Starter.prototype.onAwake = function () {
                var gameObject = paper.Prefab.create("Assets/Prefab/Actor/female1.prefab.json");
                gameObject.transform.setLocalPosition(0.0, 0.0, 0.0);
                gameObject.addComponent(behaviors.AnimationHelper);
                setTimeout(function () {
                    //
                    var animation = gameObject.getComponentInChildren(egret3d.Animation);
                    var animationController = animation.animationController;
                    animation.fadeIn("shoot_c", 0.3, 0, 0);
                    var layer = animationController.getOrAddLayer(1);
                    var tree = animationController.createAnimationTree(layer.machine, "aim");
                    // // const mask = layer.mask = egret3d.AnimationMask.create("UpperBody");
                    // // mask.createJoints(gameObject.getComponentInChildren(egret3d.SkinnedMeshRenderer)!.mesh!).addJoint("Bip002 Spine1");
                    // // animationController.createAnimationNode(tree, "Assets/Res/Actor/Male/Models/male_anim_shoot_c_down.ani.bin", "shoot_c_down");
                    animationController.createAnimationNode(tree, "Assets/Res/Actor/Male/Models/male_anim_shoot_c_up.ani.bin", "shoot_c_up");
                    // // animationController.createAnimationNode(tree, "Assets/Res/Actor/Male/Models/male_anim_shoot_c_down.ani.bin", "shoot_c");
                    animation.fadeIn("aim", 0.3, 1, 1, true);
                    // gameObject.addComponent(Updater);
                }, 1000);
                egret3d.creater.createGameObject("XXXXXX");
            };
            return Starter;
        }(paper.Behaviour));
        __reflect(Starter.prototype, "Starter");
        var Updater = (function (_super) {
            __extends(Updater, _super);
            function Updater() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Updater.prototype.onUpdate = function () {
                var animation = this.gameObject.getComponent(egret3d.Animation);
                var up = animation.getState("shoot_c");
                // const down = animation.getState("shoot_c_down") as egret3d.AnimationState;
                this._blending1DStates(up, (Math.sin(paper.clock.time) + 1.0) * 0.5);
            };
            Updater.prototype._blending1DStates = function (a, lerp) {
                a.weight = 1.0;
                // b.weight = lerp;
            };
            return Updater;
        }(paper.Behaviour));
        __reflect(Updater.prototype, "Updater");
    })(sniper = examples.sniper || (examples.sniper = {}));
})(examples || (examples = {}));