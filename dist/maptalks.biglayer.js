/*!
 * maptalks.biglayer v0.3.0
 * LICENSE : MIT
 * (c) 2016-2017 maptalks.org
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('maptalks')) :
	typeof define === 'function' && define.amd ? define(['exports', 'maptalks'], factory) :
	(factory((global.maptalks = global.maptalks || {}),global.maptalks));
}(this, (function (exports,maptalks) { 'use strict';

function create$2() {
    var out = new Float32Array(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

function create$3() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}



function copy$3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}





function identity$3(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}









function multiply$3(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}

function translate$2(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2],
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
        a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
        a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

        out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
        out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
        out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
}

function scale$3(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}



function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}



function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) {
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}





























function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
}





function lookAt(out, eye, center, up) {
    var x0,
        x1,
        x2,
        y0,
        y1,
        y2,
        z0,
        z1,
        z2,
        len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) === 0 && Math.abs(eyey - centery) === 0 && Math.abs(eyez - centerz) === 0) {
        return identity$3(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
}

function create$5() {
    var out = new Float32Array(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
}



function fromValues$5(x, y, z) {
    var out = new Float32Array(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}







































function normalize$1(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x * x + y * y + z * z;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
}

























var vec = create$5();

function create$6() {
    var out = new Float32Array(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
}























































var vec$1 = create$6();

function create$4() {
    var out = new Float32Array(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}



var tmpvec3 = create$5();
var xUnitVec3 = fromValues$5(1, 0, 0);
var yUnitVec3 = fromValues$5(0, 1, 0);



var matr = create$2();





































var temp1 = create$4();
var temp2 = create$4();

function create$7() {
    var out = new Float32Array(2);
    out[0] = 0;
    out[1] = 0;
    return out;
}





























































var vec$2 = create$7();

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Painter = function (_maptalks$Class) {
    inherits(Painter, _maptalks$Class);

    function Painter(gl, map, options) {
        classCallCheck(this, Painter);

        var _this = possibleConstructorReturn(this, _maptalks$Class.call(this, options));

        _this.gl = gl;
        _this.map = map;
        return _this;
    }

    return Painter;
}(maptalks.Class);

function getTargetZoom(map) {
    return map.getMaxNativeZoom() / 2;
}

var RADIAN = Math.PI / 180;

var WebglRenderer = function (_maptalks$renderer$Ca) {
    inherits(WebglRenderer, _maptalks$renderer$Ca);

    function WebglRenderer() {
        classCallCheck(this, WebglRenderer);
        return possibleConstructorReturn(this, _maptalks$renderer$Ca.apply(this, arguments));
    }

    WebglRenderer.prototype.needToRedraw = function needToRedraw() {
        var map = this.getMap();
        if (map.isZooming() && !map.getPitch()) {
            return false;
        }
        return _maptalks$renderer$Ca.prototype.needToRedraw.call(this);
    };

    WebglRenderer.prototype.createCanvas = function createCanvas() {
        if (this.canvas) {
            return;
        }

        var map = this.getMap();
        var size = map.getSize();
        var r = maptalks.Browser.retina ? 2 : 1;
        this.canvas = maptalks.Canvas.createCanvas(r * size['width'], r * size['height'], map.CanvasClass);
        var gl = this.gl = this._createGLContext(this.canvas, this.layer.options['glOptions']);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);

        gl.verbose = true;

        gl.blendFunc(gl.ONE, gl.ONE);
        gl.enable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        if (this.onCanvasCreate) {
            this.onCanvasCreate();
        }

        if (this.layer.options['doubleBuffer']) {
            this.buffer = maptalks.Canvas.createCanvas(this.canvas.width, this.canvas.height, map.CanvasClass);
            this.context = this.buffer.getContext('2d');
        }
    };

    WebglRenderer.prototype.resizeCanvas = function resizeCanvas(canvasSize) {
        if (!this.canvas) {
            return;
        }
        var size = void 0;
        if (!canvasSize) {
            size = this.getMap().getSize();
        } else {
            size = canvasSize;
        }
        var r = maptalks.Browser.retina ? 2 : 1;

        this.canvas.height = r * size['height'];
        this.canvas.width = r * size['width'];
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    };

    WebglRenderer.prototype.clearCanvas = function clearCanvas() {
        if (!this.canvas) {
            return;
        }
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        if (this.context) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };

    WebglRenderer.prototype.prepareCanvas = function prepareCanvas() {
        if (this.context) {
            return _maptalks$renderer$Ca.prototype.prepareCanvas.call(this);
        }
        if (!this.canvas) {
            this.createCanvas();
        } else {
            this.clearCanvas();
        }
        this.layer.fire('renderstart', { 'context': this.context, 'gl': this.gl });
        return null;
    };

    WebglRenderer.prototype.mergeSprites = function mergeSprites(sprites, forPoint) {
        if (!sprites || sprites.length === 0) {
            return null;
        }

        var buffer = 2;
        var w = 0,
            h = 0;
        sprites.forEach(function (s) {
            if (forPoint) {
                var len = Math.max(s.canvas.width, s.canvas.height);
                w += len + buffer;
                if (len > h) {
                    h = len;
                }
            } else {
                w += s.canvas.width + buffer;
                if (s.canvas.height > h) {
                    h = s.canvas.height;
                }
            }
        });

        w = Math.pow(2, Math.ceil(Math.log(w) / Math.LN2));
        h = Math.pow(2, Math.ceil(Math.log(h) / Math.LN2));

        var map = this.getMap();
        var spriteCanvas = maptalks.Canvas.createCanvas(w, h, map.CanvasClass),
            ctx = spriteCanvas.getContext('2d'),
            texCoords = [],
            offsets = [],
            sizes = [];
        var pointer = 0;
        sprites.forEach(function (s) {
            var dx = 0,
                dy = 0,
                len = void 0;
            if (forPoint) {
                var cw = s.canvas.width,
                    ch = s.canvas.height;
                len = Math.max(cw, ch);
                dx = len > cw ? (len - cw) / 2 : 0;
                dy = len > ch ? (len - ch) / 2 : 0;

                texCoords.push([pointer / w, len / w, len / h, len]);
                sizes.push([cw, ch]);
            } else {
                len = s.canvas.width;
                texCoords.push([pointer / w, s.canvas.width / w, s.canvas.height / h]);
            }

            ctx.drawImage(s.canvas, pointer + dx, dy);

            offsets.push(s.offset);
            pointer += len + buffer;
        });
        var result = {
            'canvas': spriteCanvas,
            'texCoords': texCoords,
            'offsets': offsets
        };
        if (forPoint) {
            result['sizes'] = sizes;
        }
        return result;
    };

    WebglRenderer.prototype.createBuffer = function createBuffer() {
        var gl = this.gl;

        var buffer = gl.createBuffer();
        if (!buffer) {
            throw new Error('Failed to create the buffer object');
        }

        if (!this._buffers) {
            this._buffers = [];
        }
        this._buffers.push(buffer);

        return buffer;
    };

    WebglRenderer.prototype.enableVertexAttrib = function enableVertexAttrib(attributes) {
        var gl = this.gl;
        if (Array.isArray(attributes[0])) {
            var verticesTexCoords = new Float32Array([0.0, 0.0, 0.0]);

            var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;

            var STRIDE = 0;
            for (var i = 0; i < attributes.length; i++) {
                STRIDE += attributes[i][1] || 0;
            }

            var offset = 0;
            for (var _i = 0; _i < attributes.length; _i++) {
                var attr = gl.getAttribLocation(gl.program, attributes[_i][0]);
                if (attr < 0) {
                    throw new Error('Failed to get the storage location of ' + attributes[_i][0]);
                }
                gl.vertexAttribPointer(attr, attributes[_i][1], gl[attributes[_i][2] || 'FLOAT'], false, FSIZE * STRIDE, FSIZE * offset);
                offset += attributes[_i][1] || 0;
                gl.enableVertexAttribArray(attr);
            }
        } else {
            var _attr = gl.getAttribLocation(gl.program, attributes[0]);
            gl.vertexAttribPointer(_attr, attributes[1], gl[attributes[2] || 'FLOAT'], false, 0, 0);
            gl.enableVertexAttribArray(_attr);
        }
    };

    WebglRenderer.prototype.onRemove = function onRemove() {
        var gl = this.gl;
        if (this._buffers) {
            this._buffers.forEach(function (b) {
                gl.deleteBuffer(b);
            });
            delete this._buffers;
        }
    };

    WebglRenderer.prototype.createProgram = function createProgram(vshader, fshader, uniforms) {
        var gl = this.gl;

        var vertexShader = this._compileShader(gl, gl.VERTEX_SHADER, vshader);
        var fragmentShader = this._compileShader(gl, gl.FRAGMENT_SHADER, fshader);
        if (!vertexShader || !fragmentShader) {
            return null;
        }

        var program = gl.createProgram();
        if (!program) {
            return null;
        }

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);

        gl.linkProgram(program);

        var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!linked) {
            var error = gl.getProgramInfoLog(program);
            gl.deleteProgram(program);
            gl.deleteShader(fragmentShader);
            gl.deleteShader(vertexShader);
            throw new Error('Failed to link program: ' + error);
        }

        this._initUniforms(program, uniforms);

        return program;
    };

    WebglRenderer.prototype.useProgram = function useProgram(program) {
        var gl = this.gl;
        gl.useProgram(program);
        gl.program = program;
        return this;
    };

    WebglRenderer.prototype.loadTexture = function loadTexture(image, texIdx) {
        var gl = this.gl;
        var texture = gl.createTexture();
        if (!texture) {
            throw new Error('Failed to create the texture object');
        }
        if (!texIdx) {
            texIdx = 0;
        }

        gl.activeTexture(gl['TEXTURE' + texIdx]);

        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        return texture;
    };

    WebglRenderer.prototype.enableSampler = function enableSampler(sampler, texIdx) {
        var gl = this.gl;
        var uSampler = this._getUniform(gl.program, sampler);
        if (!texIdx) {
            texIdx = 0;
        }

        gl.uniform1i(uSampler, texIdx);
        return uSampler;
    };

    WebglRenderer.prototype._calcMatrices = function _calcMatrices() {
        var map = this.getMap();
        var size = map.getSize(),
            scale = map.getScale();
        var center = map._prjToPoint(map._getPrjCenter(), map.getMaxZoom());
        var fov = map.getFov() * Math.PI / 180;
        var cameraToCenterDistance = 0.5 / Math.tan(fov / 2) * size.height * scale;

        var m = create$3();
        perspective(m, fov, size.width / size.height, 1, cameraToCenterDistance + 1E9);
        if (!maptalks.Util.IS_NODE) {
            scale$3(m, m, [1, -1, 1]);
        }
        translate$2(m, m, [0, 0, -cameraToCenterDistance]);
        rotateX(m, m, map.getPitch() * Math.PI / 180);
        rotateZ(m, m, -map.getBearing() * Math.PI / 180);
        translate$2(m, m, [-center.x, -center.y, 0]);
        return m;
    };

    WebglRenderer.prototype.calcMatrices = function calcMatrices() {
        var map = this.getMap();

        var size = map.getSize();

        var fov = map.getFov() * Math.PI / 180;
        var maxScale = map.getScale(map.getMinZoom()) / map.getScale(map.getMaxNativeZoom());
        var farZ = maxScale * size.height / 2 / this._getFovRatio();
        var m = create$3();
        perspective(m, fov, size.width / size.height, 1, farZ);
        var m1 = create$3();
        if (!maptalks.Util.IS_NODE) {
            scale$3(m, m, [1, -1, 1]);
        }
        copy$3(m1, m);
        var m2 = this._getLookAtMat();
        multiply$3(m, m1, m2);
        return m;
    };

    WebglRenderer.prototype._getLookAtMat = function _getLookAtMat() {
        var map = this.getMap();

        var targetZ = getTargetZoom(map);

        var size = map.getSize(),
            scale = map.getScale() / map.getScale(targetZ);

        var center2D = this.cameraCenter = map.coordinateToPoint(map.getCenter(), targetZ);
        var pitch = map.getPitch() * RADIAN;
        var bearing = -map.getBearing() * RADIAN;

        var ratio = this._getFovRatio();
        var z = scale * size.height / 2 / ratio;
        var cz = z * Math.cos(pitch);

        var dist = Math.sin(pitch) * z;

        var cx = center2D.x + dist * Math.sin(bearing);
        var cy = center2D.y + dist * Math.cos(bearing);

        var up = [Math.sin(bearing), Math.cos(bearing), 0];
        var m = create$3();
        lookAt(m, [cx, cy, cz], [center2D.x, center2D.y, 0], up);
        return m;
    };

    WebglRenderer.prototype._getFovRatio = function _getFovRatio() {
        var map = this.getMap();
        var fov = map.getFov();
        return Math.tan(fov / 2 * Math.PI / 180);
    };

    WebglRenderer.prototype.hitDetect = function hitDetect(point) {
        var gl = this.gl;
        if (!gl) {
            return false;
        }
        var pixels = new Uint8Array(1 * 1 * 4);
        var map = this.getMap();
        var h = this.canvas.height;
        var cp = map._pointToContainerPoint(point)._round();
        gl.readPixels(cp.x, h - cp.y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        return pixels[3] > 0;
    };

    WebglRenderer.prototype.getCanvasImage = function getCanvasImage() {
        var canvasImg = _maptalks$renderer$Ca.prototype.getCanvasImage.call(this);
        if (canvasImg && canvasImg.image && this.buffer) {
            var canvas = canvasImg.image;
            if (this.buffer.width !== canvas.width || this.buffer.height !== canvas.height || !this._preserveBuffer) {
                this.buffer.width = canvas.width;
                this.buffer.height = canvas.height;
            }
            if (!this._preserveBuffer) {
                this.context.drawImage(canvas, 0, 0);
            }
            canvasImg.image = this.buffer;
        }
        return canvasImg;
    };

    WebglRenderer.prototype.onZoomStart = function onZoomStart() {
        _maptalks$renderer$Ca.prototype.onZoomStart.apply(this, arguments);
    };

    WebglRenderer.prototype.onZoomEnd = function onZoomEnd() {
        _maptalks$renderer$Ca.prototype.onZoomEnd.apply(this, arguments);
    };

    WebglRenderer.prototype._createGLContext = function _createGLContext(canvas, options) {
        var attributes = maptalks.Util.extend({
            'alpha': true,
            'antialias': true,
            'preserveDrawingBuffer': true
        }, options);
        var names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
        var context = null;

        for (var i = 0; i < names.length; ++i) {
            try {
                context = canvas.getContext(names[i], attributes);
            } catch (e) {}
            if (context) {
                break;
            }
        }
        return context;
    };

    WebglRenderer.prototype._compileShader = function _compileShader(gl, type, source) {
        var shader = gl.createShader(type);
        if (shader == null) {
            throw new Error('unable to create shader');
        }

        gl.shaderSource(shader, source);

        gl.compileShader(shader);

        var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!compiled) {
            var error = gl.getShaderInfoLog(shader);

            gl.deleteShader(shader);
            throw new Error('Failed to compile shader: ' + error);
        }

        return shader;
    };

    WebglRenderer.prototype._initUniforms = function _initUniforms(program, uniforms) {
        for (var i = 0; i < uniforms.length; i++) {
            var name = uniforms[i];
            var uniform = uniforms[i];
            var b = name.indexOf('[');
            if (b >= 0) {
                name = name.substring(0, b);
                if (!maptalks.Util.IS_NODE) {
                    uniform = uniform.substring(0, b);
                }
            }
            program[name] = this._getUniform(program, uniform);
        }
    };

    WebglRenderer.prototype._getUniform = function _getUniform(program, uniformName) {
        var gl = this.gl;
        var uniform = gl.getUniformLocation(program, uniformName);
        if (!uniform) {
            throw new Error('Failed to get the storage location of ' + uniformName);
        }
        return uniform;
    };

    return WebglRenderer;
}(maptalks.renderer.CanvasRenderer);

var LineAtlas = function () {
    function LineAtlas(resources, options) {
        classCallCheck(this, LineAtlas);

        this.resources = resources;
        this.options = options || {};
        this.atlas = {};
    }

    LineAtlas.prototype.getAtlas = function getAtlas(symbol) {
        var key = JSON.stringify(symbol);

        if (!this.atlas[key]) {
            var atlas = this.addAtlas(symbol);
            if (atlas) {
                this.atlas[key] = atlas;
            }
        }
        return this.atlas[key];
    };

    LineAtlas.prototype.addAtlas = function addAtlas(symbol) {
        if (!symbol['lineDasharray'] && !symbol['linePatternFile']) {
            return null;
        }

        var size = this._getSize(symbol, this.resources);

        var canvas = this._createCanvas(size);

        if (!canvas) {
            throw new Error('can not initialize canvas container.');
        }

        var ctx = canvas.getContext('2d');
        maptalks.Canvas.prepareCanvas(ctx, symbol, this.resources);

        ctx.moveTo(0, size[1] / 2);
        ctx.lineTo(size[0], size[1] / 2);
        ctx.stroke();

        return {
            'canvas': canvas,
            'offset': new maptalks.Point(0, 0)
        };
    };

    LineAtlas.prototype._getSize = function _getSize(symbol, resources) {
        var w = 0,
            h = 0;
        var dashArray = symbol['lineDasharray'];
        if (dashArray) {
            for (var i = 0; i < dashArray.length; i++) {
                w += dashArray[i];
            }

            if (dashArray.length % 2 === 1) {
                w *= 2;
            }
            h = symbol['lineWidth'] == null ? 2 : symbol['lineWidth'];
        }
        if (symbol['linePatternFile']) {
            var image = resources.getImage(symbol['linePatternFile']);
            if (image.width > w) {
                w = image.width;
            }
            if (image.height > h) {
                h = image.height;
            }
        }
        return [w, h];
    };

    LineAtlas.prototype._createCanvas = function _createCanvas(size) {
        if (this.options['canvasClass']) {
            return new this.options['canvasClass'](size[0], size[1]);
        }
        if (typeof document !== 'undefined') {
            var canvas = document.createElement('canvas');
            canvas.width = size[0];
            canvas.height = size[1];
            return canvas;
        }
        return null;
    };

    return LineAtlas;
}();

var index$1 = Point$1;

function Point$1(x, y) {
    this.x = x;
    this.y = y;
}

Point$1.prototype = {
    clone: function clone() {
        return new Point$1(this.x, this.y);
    },

    add: function add(p) {
        return this.clone()._add(p);
    },

    sub: function sub(p) {
        return this.clone()._sub(p);
    },

    multByPoint: function multByPoint(p) {
        return this.clone()._multByPoint(p);
    },

    divByPoint: function divByPoint(p) {
        return this.clone()._divByPoint(p);
    },

    mult: function mult(k) {
        return this.clone()._mult(k);
    },

    div: function div(k) {
        return this.clone()._div(k);
    },

    rotate: function rotate(a) {
        return this.clone()._rotate(a);
    },

    rotateAround: function rotateAround(a, p) {
        return this.clone()._rotateAround(a, p);
    },

    matMult: function matMult(m) {
        return this.clone()._matMult(m);
    },

    unit: function unit() {
        return this.clone()._unit();
    },

    perp: function perp() {
        return this.clone()._perp();
    },

    round: function round() {
        return this.clone()._round();
    },

    mag: function mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    equals: function equals(other) {
        return this.x === other.x && this.y === other.y;
    },

    dist: function dist(p) {
        return Math.sqrt(this.distSqr(p));
    },

    distSqr: function distSqr(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    angle: function angle() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function angleTo(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    angleWith: function angleWith(b) {
        return this.angleWithSep(b.x, b.y);
    },

    angleWithSep: function angleWithSep(x, y) {
        return Math.atan2(this.x * y - this.y * x, this.x * x + this.y * y);
    },

    _matMult: function _matMult(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function _add(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function _sub(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function _mult(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function _div(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function _multByPoint(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function _divByPoint(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function _unit() {
        this._div(this.mag());
        return this;
    },

    _perp: function _perp() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function _rotate(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function _rotateAround(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function _round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

Point$1.convert = function (a) {
    if (a instanceof Point$1) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point$1(a[0], a[1]);
    }
    return a;
};

var options = {
    'project': true
};

var LinePainter = function (_Painter) {
    inherits(LinePainter, _Painter);

    function LinePainter(gl, map, options) {
        classCallCheck(this, LinePainter);

        var _this = possibleConstructorReturn(this, _Painter.call(this, gl, map, options));

        _this.vertexArray = [];
        _this.normalArray = [];
        _this.elementArray = [];
        _this.styleArray = [];


        _this.distance = 0;
        return _this;
    }

    LinePainter.prototype.getArrays = function getArrays() {
        return {
            'vertexArray': this.vertexArray,
            'normalArray': this.normalArray,
            'elementArray': this.elementArray,
            'styleArray': this.styleArray
        };
    };

    LinePainter.prototype.addLine = function addLine(line, style) {
        if (!line) {
            return this;
        }
        if (style.symbol['lineWidth'] <= 0 || style.symbol['lineOpacity'] <= 0) {
            return this;
        }

        var preVertexLen = this.vertexArray.length;

        var vertice = this._getVertice(line);

        if (vertice[0] && Array.isArray(vertice[0][0])) {
            for (var i = 0, l = vertice.length; i < l; i++) {
                this.addLine(vertice[i], style);
            }
            return this;
        }

        this._prepareToAdd();

        var targetZ = getTargetZoom(this.map);

        var currentVertex = void 0,
            nextVertex = void 0;
        for (var _i = 0, _l = vertice.length; _i < _l; _i++) {
            var vertex = vertice[_i];
            if (this.options['project']) {
                vertex = this.map.coordinateToPoint(new maptalks.Coordinate(vertex), targetZ).toArray();
            }
            currentVertex = index$1.convert(vertex);
            if (_i < _l - 1) {
                vertex = vertice[_i + 1];
                if (this.options['project']) {
                    vertex = this.map.coordinateToPoint(new maptalks.Coordinate(vertex), targetZ).toArray();
                }
                nextVertex = index$1.convert(vertex);
            } else {
                nextVertex = null;
            }
            this.addCurrentVertex(currentVertex, nextVertex);
        }

        var count = this.vertexArray.length - preVertexLen;

        this._addTexCoords(count, style);
        return this;
    };

    LinePainter.prototype.addCurrentVertex = function addCurrentVertex(currentVertex, nextVertex) {
        if (!this.preVertex) {
            this.e1 = this.e2 = this.e3 = -1;

            this._waitForLeftCap = true;
            this.preVertex = currentVertex;
            return;
        }

        var normal = currentVertex.sub(this.preVertex)._unit()._perp()._mult(-1);

        var nextNormal = void 0;
        if (nextVertex) {
            nextNormal = nextVertex.sub(currentVertex)._unit()._perp()._mult(-1);
        }

        var preJoinNormal = this._getStartNormal(normal, this.preNormal);

        this._addLineEndVertexs(this.preVertex, preJoinNormal, this.distance);

        this.distance += currentVertex.dist(this.preVertex);

        if (!nextVertex) {
            var endNormal = this._getEndNormal(normal, nextNormal);
            this._addLineEndVertexs(currentVertex, endNormal, this.distance);
        }

        this.preNormal = normal;
        this.preVertex = currentVertex;
    };

    LinePainter.prototype._prepareToAdd = function _prepareToAdd() {
        this.distance = 0;

        delete this.preVertex;
        delete this.preNormal;
    };

    LinePainter.prototype._addLineEndVertexs = function _addLineEndVertexs(vertex, joinNormal, linesofar) {
        var extrude = joinNormal.normal[0];

        this.e3 = this._addVertex(vertex, extrude, linesofar);
        if (this.e1 >= 0 && this.e2 >= 0) {
            this.elementArray.push(this.e1, this.e2, this.e3);
        }
        this.e1 = this.e2;
        this.e2 = this.e3;

        extrude = joinNormal.normal[1];

        this.e3 = this._addVertex(vertex, extrude, linesofar);
        if (this.e1 >= 0 && this.e2 >= 0) {
            this.elementArray.push(this.e1, this.e2, this.e3);
        }
        this.e1 = this.e2;
        this.e2 = this.e3;
    };

    LinePainter.prototype._addVertex = function _addVertex(currentVertex, normal, linesofar) {
        this.vertexArray.push(currentVertex.x, currentVertex.y);

        var normals = [this._precise(normal.x), this._precise(normal.y), linesofar];
        var n = this.normalArray.length / normals.length;
        maptalks.Util.pushIn(this.normalArray, normals);
        return n;
    };

    LinePainter.prototype._getVertice = function _getVertice(line) {
        if (line.geometry) {
            line = line.geometry.coordinates;
        } else if (line.coordinates) {
            line = line.coordinates;
        }
        return line;
    };

    LinePainter.prototype._addTexCoords = function _addTexCoords(n, style) {
        var v = (style.symbol['lineWidth'] || 2) / 2 * 100 + (style.symbol['lineOpacity'] || 1) * 10;

        v = v * 10000 + style.index;
        for (var i = 0; i < n; i++) {
            this.styleArray.push(v);
        }
    };

    LinePainter.prototype._getStartNormal = function _getStartNormal(normal, preNormal) {
        return this._getJoinNormal(normal, preNormal, normal);
    };

    LinePainter.prototype._getEndNormal = function _getEndNormal(normal, nextNormal) {
        return this._getJoinNormal(normal, normal, nextNormal);
    };

    LinePainter.prototype._getJoinNormal = function _getJoinNormal(currentNormal, preNormal, normal) {
        if (!preNormal || !normal) {
            return {
                'normal': [currentNormal, currentNormal.mult(-1)]
            };
        }
        var joinNormal = preNormal.add(normal)._unit();
        var cosHalfAngle = joinNormal.x * normal.x + joinNormal.y * normal.y;
        var miterLength = 1 / cosHalfAngle;
        joinNormal._mult(miterLength);
        return {
            'normal': [joinNormal, joinNormal.mult(-1)]
        };
    };

    LinePainter.prototype._precise = function _precise(f) {
        return Math.round(f * 1E7) / 1E7;
    };

    return LinePainter;
}(Painter);

LinePainter.mergeOptions(options);

var earcut_1 = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, size;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        size = Math.max(maxX - minX, maxY - minY);
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, size);

    return triangles;
}

function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (i = start; i < end; i += dim) {
            last = insertNode(i, data[i], data[i + 1], last);
        }
    } else {
        for (i = end - dim; i >= start; i -= dim) {
            last = insertNode(i, data[i], data[i + 1], last);
        }
    }

    if (last && equals$8(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals$8(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) return null;
            again = true;
        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
    if (!ear) return;

    if (!pass && size) indexCurve(ear, minX, minY, size);

    var stop = ear,
        prev,
        next;

    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        if (ear === stop) {
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, size, 2);
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, size);
            }

            break;
        }
    }
}

function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false;
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, size) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false;
    var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x,
        minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y,
        maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x,
        maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;

    var minZ = zOrder(minTX, minTY, minX, minY, size),
        maxZ = zOrder(maxTX, maxTY, minX, minY, size);

    var p = ear.nextZ;

    while (p && p.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.nextZ;
    }

    p = ear.prevZ;

    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    return true;
}

function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals$8(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

function splitEarcut(start, triangles, dim, minX, minY, size) {
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                var c = splitPolygon(a, b);

                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                earcutLinked(a, triangles, dim, minX, minY, size);
                earcutLinked(c, triangles, dim, minX, minY, size);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i,
        len,
        start,
        end,
        list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    do {
        if (hy <= p.y && hy >= p.next.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev;

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x);

            if ((tan < tanMin || tan === tanMin && p.x > m.x) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

function indexCurve(start, minX, minY, size) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

function sortLinked(list) {
    var i,
        p,
        q,
        e,
        tail,
        numMerges,
        pSize,
        qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }

            qSize = inSize;

            while (pSize > 0 || qSize > 0 && q) {

                if (pSize === 0) {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                } else if (qSize === 0 || !q) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else if (p.z <= q.z) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;
    } while (numMerges > 1);

    return list;
}

function zOrder(x, y, minX, minY, size) {
    x = 32767 * (x - minX) / size;
    y = 32767 * (y - minY) / size;

    x = (x | x << 8) & 0x00FF00FF;
    x = (x | x << 4) & 0x0F0F0F0F;
    x = (x | x << 2) & 0x33333333;
    x = (x | x << 1) & 0x55555555;

    y = (y | y << 8) & 0x00FF00FF;
    y = (y | y << 4) & 0x0F0F0F0F;
    y = (y | y << 2) & 0x33333333;
    y = (y | y << 1) & 0x55555555;

    return x | y << 1;
}

function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

function equals$8(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

function intersects(p1, q1, p2, q2) {
    if (equals$8(p1, q1) && equals$8(p2, q2) || equals$8(p1, q2) && equals$8(p2, q1)) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 && area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (p.y > py !== p.next.y > py && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;
    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    this.i = i;

    this.x = x;
    this.y = y;

    this.prev = null;
    this.next = null;

    this.z = null;

    this.prevZ = null;
    this.nextZ = null;

    this.steiner = false;
}

earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = { vertices: [], holes: [], dimensions: dim },
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) {
                result.vertices.push(data[i][j][d]);
            }
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};

var options$1 = {
    'project': true
};

var PolygonPainter = function (_Painter) {
    inherits(PolygonPainter, _Painter);

    function PolygonPainter(gl, map, options) {
        classCallCheck(this, PolygonPainter);

        var _this = possibleConstructorReturn(this, _Painter.call(this, gl, map, options));

        _this.vertexArray = [];
        _this.elementArray = [];
        _this.styleArray = [];
        return _this;
    }

    PolygonPainter.prototype.getArrays = function getArrays() {
        return {
            'vertexArray': this.vertexArray,
            'elementArray': this.elementArray,
            'styleArray': this.styleArray
        };
    };

    PolygonPainter.prototype.addPolygon = function addPolygon(polygon, style) {
        var _this2 = this;

        if (!polygon) {
            return this;
        }
        if (style.symbol['polygonOpacity'] <= 0) {
            return this;
        }

        var vertice = this._getVertice(polygon);

        if (vertice[0] && Array.isArray(vertice[0][0]) && Array.isArray(vertice[0][0][0])) {
            for (var i = 0, l = vertice.length; i < l; i++) {
                this.addPolygon(vertice[i], style);
            }
            return this;
        }
        vertice.forEach(function (ring) {
            if (!ring.length) {
                return;
            }
            if (!_this2._equalCoord(ring[0], ring[ring.length - 1])) {
                ring.push(ring[0], ring[1]);
            }
        });
        var targetZ = getTargetZoom(this.map);
        var data = earcut_1.flatten(vertice);

        if (this.options['project']) {
            var v = [];
            var c = void 0;
            for (var _i = 0, _l = data.vertices.length; _i < _l; _i += 2) {
                c = this.map.coordinateToPoint(new maptalks.Coordinate(data.vertices[_i], data.vertices[_i + 1]), targetZ);
                v.push(c.x, c.y);
            }
            data.vertices = v;
        }
        var triangles = earcut_1(data.vertices, data.holes, 2);
        if (triangles.length <= 2) {
            return this;
        }
        var deviation = earcut_1.deviation(data.vertices, data.holes, 2, triangles);
        if (Math.round(deviation * 1E3) / 1E3 !== 0) {
            if (console) {
                console.warn('Failed triangluation.');
            }
            return this;
        }
        var count = this.vertexArray.length / 2;
        if (count > 0) {
            triangles = triangles.map(function (e) {
                return e + count;
            });
        }
        maptalks.Util.pushIn(this.vertexArray, data.vertices);
        maptalks.Util.pushIn(this.elementArray, triangles);

        this._addTexCoords(data.vertices.length / 2, style);
        return this;
    };

    PolygonPainter.prototype._getVertice = function _getVertice(geo) {
        if (geo.geometry) {
            geo = geo.geometry.coordinates;
        } else if (geo.coordinates) {
            geo = geo.coordinates;
        }
        return geo;
    };

    PolygonPainter.prototype._addTexCoords = function _addTexCoords(n, style) {
        var v = style.index * 100 + (style.symbol['polygonOpacity'] || 1) * 10;
        for (var i = 0; i < n; i++) {
            this.styleArray.push(v);
        }
    };

    PolygonPainter.prototype._equalCoord = function _equalCoord(c1, c2) {
        return c1[0] === c2[0] && c1[1] === c2[1];
    };

    return PolygonPainter;
}(Painter);

PolygonPainter.mergeOptions(options$1);

var lineFragment = "#ifdef GL_ES\nprecision mediump float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n\nuniform float u_blur;\nuniform vec2 u_tex_size;\n\n// varying lowp vec4 v_color;\n// varying vec2 v_linenormal;\nvarying vec4 v_texcoord;\nvarying float v_opacity;\nvarying float v_linewidth;\nvarying float v_scale;\nvarying float v_texture_normal;\nvarying float v_linesofar;\n// varying float v_ruler;\n\nuniform sampler2D u_image;\n\nvoid main() {\n    vec4 color;\n    if (v_texcoord.q == -1.0) {\n        // is a texture fragment\n        float linesofar = v_linesofar / v_scale;\n        float texWidth = u_tex_size.x * v_texcoord.t;\n        float x = v_texcoord.s + mod(linesofar, texWidth) / texWidth * v_texcoord.t;\n        float y = (v_texture_normal + 1.0) / 2.0 * v_texcoord.p;\n\n        color = texture2D(u_image, vec2(x, y));\n    } else {\n        // a color fragment\n        color = v_texcoord;\n    }\n    float alpha = 1.0;\n    gl_FragColor = color * (alpha * v_opacity);\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}";

var maxUniformLength = maptalks.Browser.ie || maptalks.Browser.edge ? 504 : maptalks.Util.IS_NODE ? 1014 : 240;

var lineVertex = '#ifdef GL_ES\nprecision highp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n\nattribute vec4 a_pos;\nattribute mediump vec2 a_normal;\n// attribute mediump vec2 a_linenormal;\nattribute float a_linesofar;\n// (line_width * 100 + opacity * 10) * 10000 + tex_idx\nattribute float a_style;\n// attribute float a_seglen;\n\nuniform mat4 u_matrix;\nuniform float u_scale;\nuniform float u_styles[' + maxUniformLength + '];\n\nvarying vec2 v_linenormal;\nvarying float v_linewidth;\nvarying float v_opacity;\nvarying vec4 v_texcoord;\nvarying float v_scale;\nvarying float v_texture_normal;\n\nvarying float v_linesofar;\n// varying float v_ruler;\n\nvoid main() {\n    int tex_idx = int(mod(a_style, 10000.0));\n    float s = floor(a_style / 10000.0);\n    v_opacity = mod(s, 10.0) / 10.0;\n    if (v_opacity == 0.0) {\n        v_opacity = 1.0;\n    }\n    v_linewidth = s / 100.0;\n    v_texcoord = vec4(u_styles[tex_idx], u_styles[tex_idx + 1], u_styles[tex_idx + 2], u_styles[tex_idx + 3]);\n\n    v_scale = u_scale;\n\n    // v_linenormal = a_linenormal;\n\n    vec4 pos = a_pos;\n    pos.x += a_normal.x * v_linewidth * u_scale;\n    pos.y += a_normal.y * v_linewidth * u_scale;\n\n    // add linesofar with corner length caused by line-join\n    v_linesofar = a_linesofar;\n\n\n    gl_Position = u_matrix * pos;\n    if (a_normal.y == 0.0) {\n        // with an upside down straight line, a_normal.y is always 0, use a_normal.x instead\n        v_texture_normal = -sign(a_normal.x);\n    } else {\n        //\n        v_texture_normal = sign(a_normal.y);\n    }\n\n}';

var pointFragment = "\nprecision mediump float;\nuniform sampler2D u_sampler;\nvarying vec3 v_texCoord;\nvoid main() {\n    gl_FragColor = texture2D(u_sampler, vec2(v_texCoord[0] + gl_PointCoord[0] * v_texCoord[1], 1.0 + gl_PointCoord[1] * v_texCoord[2]));\n}";

var pointVertex = '\n// marker\'s 2d point at max zoom\nattribute vec4 a_pos;\n// texture idx in u_sprite\nattribute float a_sprite_idx;\nuniform mat4 u_matrix;\n// scale of current zoom\nuniform float u_scale;\n// sprites, an array of sprites\n// a sprite has 6 integers:\n// 0 : northwest\'s x, 1 : width, 2: height, 3: sprite size, 4: offset x, 5: offset y\n// array\'s length is not dynamic, support maximum count / 6 sprites\nuniform float u_sprite[' + maxUniformLength + '];\nvarying vec3 v_texCoord;\nvoid main() {\n  int idx = int(a_sprite_idx) * 6;\n  float size = u_sprite[idx + 3];\n  vec2 textOffset = vec2(u_sprite[idx + 4], u_sprite[idx + 5]);\n  vec4 pos = vec4(a_pos.x + textOffset.x * u_scale, a_pos.y + textOffset.y * u_scale, a_pos.z, a_pos.w);\n  gl_Position = u_matrix * pos;\n  gl_PointSize = size;\n  // texture coord\n  v_texCoord = vec3(u_sprite[idx], u_sprite[idx + 1], u_sprite[idx + 2]);\n}';

var polygonFragment = "\nprecision mediump float;\n\nvarying vec4 v_texcoord;\nvarying float v_opacity;\nvoid main() {\n    gl_FragColor = v_texcoord * v_opacity;\n}";

var polygonVertex = 'attribute vec4 a_pos;\n//tex_idx * 100 + opacity * 10\nattribute float a_fill_style;\n\nuniform mat4 u_matrix;\nuniform float u_fill_styles[' + maxUniformLength + '];\n\nvarying float v_opacity;\nvarying vec4 v_texcoord;\n\nvoid main() {\n  int tex_idx = int(floor(a_fill_style / 100.0));\n  v_opacity = mod(a_fill_style, 100.0) / 10.0;\n  v_texcoord = vec4(u_fill_styles[tex_idx], u_fill_styles[tex_idx + 1], u_fill_styles[tex_idx + 2], u_fill_styles[tex_idx + 3]);\n\n  gl_Position = u_matrix * a_pos;\n}';

var extrudeFragment = "\nprecision mediump float;\n\nvarying vec4 v_texcoord;\nvarying float v_opacity;\n// varying vec4 v_lighting;\n\nvoid main() {\n    gl_FragColor = v_texcoord * v_opacity;\n}";

var extrudeVertex = 'attribute vec4 a_pos;\nattribute vec4 a_normal;\n//tex_idx * 100 + opacity * 10\nattribute float a_fill_style;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp vec3 u_ambientlight;\nuniform lowp float u_lightintensity;\n// uniform vec3 u_ambientlight;\n\nuniform mat4 u_matrix;\nuniform float u_fill_styles[' + maxUniformLength + '];\n\nvarying float v_opacity;\nvarying vec4 v_texcoord;\n\nvarying vec4 v_lighting;\n\nvoid main() {\n  int tex_idx = int(a_fill_style / 100.0) * 4;\n  v_opacity = mod(a_fill_style, 100.0) / 10.0;\n\n  vec4 color = vec4(u_fill_styles[tex_idx], u_fill_styles[tex_idx + 1], u_fill_styles[tex_idx + 2], u_fill_styles[tex_idx + 3]);\n\n  gl_Position = u_matrix * a_pos;\n\n  vec3 normal = normalize(a_normal.xyz);\n  // // vec3 lightpos = normalize(u_lightpos);\n  // float nDotL = max(dot(u_lightpos, normal), 0.0);\n  // vec3 diffuse = u_lightcolor * color.rgb * nDotL;\n\n  // vec3 ambient = u_ambientlight * color.rgb;\n\n  // v_texcoord = vec4(diffuse + ambient, color.a);\n\n  // Relative luminance (how dark/bright is the surface color?)\n  float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n  // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(u_ambientlight, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(normal, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    // if (normal.y != 0.0) {\n    //     directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    // }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_texcoord.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_texcoord.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_texcoord.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n    v_texcoord.a = color.a;\n  // vec3 normal = normalize(a_normal.xyz);\n  // vec3 lightpos = normalize(u_lightpos.xyz);\n  // // codes from mapbox-gl-js\n  // v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n  // float directional = clamp(dot(normal, lightpos), 0.0, 1.0);\n  // directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n  // // if (a_normal.y != 0.0) {\n  // //   directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n  // // }\n\n  // v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}';

var shaders = {
    'line': {
        'fragmentSource': lineFragment,
        'vertexSource': lineVertex
    },
    'point': {
        'fragmentSource': pointFragment,
        'vertexSource': pointVertex
    },
    'polygon': {
        'fragmentSource': polygonFragment,
        'vertexSource': polygonVertex
    },
    'extrude': {
        'fragmentSource': extrudeFragment,
        'vertexSource': extrudeVertex
    }
};



var index = Object.freeze({
	WebglRenderer: WebglRenderer,
	Shader: shaders,
	Painter: Painter,
	LineAtlas: LineAtlas,
	LinePainter: LinePainter,
	PolygonPainter: PolygonPainter
});

var options$2 = {
    'renderer': 'webgl',
    'doublBuffer': false,
    'renderOnMoving': false,
    'renderOnZooming': false
};

var BigDataLayer = function (_maptalks$Layer) {
    inherits(BigDataLayer, _maptalks$Layer);

    BigDataLayer.fromJSON = function fromJSON(profile) {
        if (!profile || profile['type'] !== this.getJSONType()) {
            return null;
        }
        var constructor = this.prototype.constructor;
        var layer = new constructor(profile['id'], profile['data'], profile['options']);
        if (profile['style']) {
            layer.setStyle(profile['style']);
        }
        return layer;
    };

    function BigDataLayer(id, data, options) {
        classCallCheck(this, BigDataLayer);

        var opts = maptalks.Util.extend({}, options);
        var style = void 0;
        if (opts['style']) {
            style = opts['style'];
            delete opts['style'];
        }

        var _this = possibleConstructorReturn(this, _maptalks$Layer.call(this, id, opts));

        _this.data = data;
        if (style) {
            _this.setStyle(style);
        }
        return _this;
    }

    BigDataLayer.prototype.toJSON = function toJSON() {
        var json = {
            'type': this.getJSONType(),
            'data': this.data,
            'id': this.getId()
        };
        var options = this.config();
        var style = this.getStyle();
        if (options) {
            json['options'] = options;
        }
        if (style) {
            json['style'] = style;
        }
        return json;
    };

    BigDataLayer.prototype.setStyle = function setStyle(style) {
        if (!Array.isArray(style)) {
            style = [style];
        }
        this._style = style;
        this._cookedStyles = maptalks.MapboxUtil.compileStyle(style);

        this.fire('setstyle', { 'style': style });
        return this;
    };

    BigDataLayer.prototype.getStyle = function getStyle() {
        return this._style;
    };

    return BigDataLayer;
}(maptalks.Layer);

BigDataLayer.mergeOptions(options$2);

var sort$1 = sortKD;

function sortKD(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;

    var m = Math.floor((left + right) / 2);

    select(ids, coords, m, left, right, depth % 2);

    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}

function select(ids, coords, k, left, right, inc) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, inc);
        }

        var t = coords[2 * k + inc];
        var i = left;
        var j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) {
                i++;
            }while (coords[2 * j + inc] > t) {
                j--;
            }
        }

        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

var range_1 = range;

function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var x, y;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

var within_1 = within;

function within(ids, coords, qx, qy, r, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var r2 = r * r;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        var x = coords[2 * m];
        var y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function sqDist(ax, ay, bx, by) {
    var dx = ax - bx;
    var dy = ay - by;
    return dx * dx + dy * dy;
}

var sort = sort$1;
var _range = range_1;
var _within = within_1;

var kdbush_1 = kdbush;

function kdbush(points, getX, getY, nodeSize, ArrayType) {
    return new KDBush(points, getX, getY, nodeSize, ArrayType);
}

function KDBush(points, getX, getY, nodeSize, ArrayType) {
    getX = getX || defaultGetX;
    getY = getY || defaultGetY;
    ArrayType = ArrayType || Array;

    this.nodeSize = nodeSize || 64;
    this.points = points;

    this.ids = new ArrayType(points.length);
    this.coords = new ArrayType(points.length * 2);

    for (var i = 0; i < points.length; i++) {
        this.ids[i] = i;
        this.coords[2 * i] = getX(points[i]);
        this.coords[2 * i + 1] = getY(points[i]);
    }

    sort(this.ids, this.coords, this.nodeSize, 0, this.ids.length - 1, 0);
}

KDBush.prototype = {
    range: function range(minX, minY, maxX, maxY) {
        return _range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    },

    within: function within(x, y, r) {
        return _within(this.ids, this.coords, x, y, r, this.nodeSize);
    }
};

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}

var options$3 = {
    'blendEquation': 'add'
};

var BigPointLayer = function (_BigDataLayer) {
    inherits(BigPointLayer, _BigDataLayer);

    function BigPointLayer() {
        classCallCheck(this, BigPointLayer);
        return possibleConstructorReturn(this, _BigDataLayer.apply(this, arguments));
    }

    BigPointLayer.prototype.identify = function identify(coordinate, options) {
        var renderer$$1 = this._getRenderer();
        if (!renderer$$1) {
            return null;
        }
        return renderer$$1.identify(coordinate, options);
    };

    return BigPointLayer;
}(BigDataLayer);

BigPointLayer.mergeOptions(options$3);

BigPointLayer.registerJSONType('BigPointLayer');

BigPointLayer.registerRenderer('webgl', function (_WebglRenderer) {
    inherits(_class, _WebglRenderer);

    function _class(layer) {
        classCallCheck(this, _class);

        var _this2 = possibleConstructorReturn(this, _WebglRenderer.call(this, layer));

        _this2._needCheckStyle = true;
        _this2._needCheckSprites = true;
        _this2._registerEvents();
        return _this2;
    }

    _class.prototype.checkResources = function checkResources() {
        if (!this._needCheckStyle) {
            return [];
        }

        var resources = [];
        if (this.layer.getStyle()) {
            this.layer.getStyle().forEach(function (s) {
                var res = maptalks.Util.getExternalResources(s['symbol'], true);
                if (res) {
                    resources.push(res);
                }
            });
        }

        this._needCheckStyle = false;
        this._needCheckSprites = true;
        this._textureLoaded = false;
        return resources;
    };

    _class.prototype.onCanvasCreate = function onCanvasCreate() {
        var gl = this.gl;
        this._setBlendEquation();

        var uniforms = ['u_matrix', 'u_scale', 'u_sprite[0]'];
        var program = this.createProgram(shaders.point.vertexSource, shaders.point.fragmentSource, uniforms);
        this.useProgram(program);
        var buffer = this.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        this.enableVertexAttrib([['a_pos', 2], ['a_sprite_idx', 1]]);
    };

    _class.prototype.draw = function draw() {
        this.prepareCanvas();
        this._checkSprites();

        if (!this._vertexCount) {
            var map = this.getMap(),
                targetZ = getTargetZoom(map);
            var data = this.layer.data;
            var vertexTexCoords = [];
            var points = [];
            this._vertexCount = 0;
            var gl = this.gl;
            var maxIconSize = [0, 0];
            for (var i = 0, l = data.length; i < l; i++) {
                if (!data[i]) {
                    continue;
                }
                var point = void 0;
                if (Array.isArray(data[i])) {
                    point = data[i];
                } else if (data[i].type) {
                    var v = this._getVertice(data[i]);

                    point = [v[0], v[1], data[i].properties];
                }
                var tex = this._getTexCoord({ 'properties': point[2] });
                if (tex) {
                    this._vertexCount++;
                    var cp = map.coordinateToPoint(new maptalks.Coordinate(point), targetZ);
                    vertexTexCoords.push(cp.x, cp.y, tex.idx);
                    points.push([cp.x, cp.y, tex.size, tex.offset, point]);

                    if (tex.size[0] > maxIconSize[0]) {
                        maxIconSize[0] = tex.size[0];
                    }
                    if (tex.size[1] > maxIconSize[1]) {
                        maxIconSize[1] = tex.size[1];
                    }
                }
            }
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexTexCoords), gl.STATIC_DRAW);

            this._maxIconSize = maxIconSize;
            this._indexData(points);
        }

        this._drawMarkers();
        this.completeRender();
    };

    _class.prototype.drawOnInteracting = function drawOnInteracting() {
        this._drawMarkers();
        this.completeRender();
    };

    _class.prototype.onRemove = function onRemove() {
        this._removeEvents();
        delete this._sprites;
        delete this._uSprite;
        _WebglRenderer.prototype.onRemove.apply(this, arguments);
    };

    _class.prototype.identify = function identify(coordinate, options) {
        if (!this._kdIndex) {
            return null;
        }
        var map = this.getMap();
        var targetZ = getTargetZoom(map);
        var c = map.coordinateToPoint(coordinate, targetZ);

        var scale = map.getScale() / map.getScale(targetZ);
        var w = scale * this._maxIconSize[0],
            h = scale * this._maxIconSize[1];
        if (w < 1) {
            w = 1;
        }
        if (h < 1) {
            h = 1;
        }
        var ids = this._kdIndex.range(c.x - w, c.y - h, c.x + w, c.y + h);
        var filter = void 0,
            limit = void 0;
        if (options) {
            if (options['filter']) {
                filter = options['filter'];
            }
            if (options['count']) {
                limit = options['count'];
            }
        }

        var result = [];
        for (var i = 0, l = ids.length; i < l; i++) {
            var p = this._indexPoints[ids[i]];
            var x = p[0],
                y = p[1];
            var size = p[2],
                offset = p[3];
            var extent = [scale * (-size[0] / 2 + offset.x), scale * (-size[1] / 2 + offset.y), scale * (size[0] / 2 + offset.x), scale * (size[1] / 2 + offset.y)];
            if (c.x >= x + extent[0] && c.x <= x + extent[2] && c.y >= y + extent[1] && c.y <= y + extent[3]) {
                if (!filter || filter(p[4])) {
                    result.push(p[4]);
                }
                if (limit && result.length >= limit) {
                    break;
                }
            }
        }
        return result;
    };

    _class.prototype._indexData = function _indexData(data) {
        this._indexPoints = data;
        this._kdIndex = kdbush_1(data, null, null, 64, Int32Array);
    };

    _class.prototype._getTexCoord = function _getTexCoord(props) {
        if (!this.layer._cookedStyles) {
            return null;
        }
        for (var i = 0, len = this.layer._cookedStyles.length; i < len; i++) {
            if (this.layer._cookedStyles[i].filter(props) === true) {
                return {
                    'idx': i,
                    'texCoord': this._sprites.texCoords[i],
                    'offset': this._sprites.offsets[i],
                    'size': this._sprites.sizes[i]
                };
            }
        }
        return null;
    };

    _class.prototype._checkSprites = function _checkSprites() {
        var _this3 = this;

        if (!this._needCheckSprites) {
            return;
        }
        var resources = this.resources;
        var sprites = [];
        if (this.layer.getStyle()) {
            (function () {
                var map = _this3.getMap();
                _this3.layer.getStyle().forEach(function (style) {
                    var marker = new maptalks.Marker([0, 0], {
                        'symbol': style['symbol']
                    });
                    var sprite = marker._getSprite(resources, map.CanvasClass);
                    if (sprite) {
                        sprites.push(sprite);
                    }
                });
            })();
        }

        this._sprites = this.mergeSprites(sprites, true);
        if (!this._sprites) {
            return;
        }

        if (typeof window != 'undefined' && window.MAPTALKS_WEBGL_DEBUG_CANVAS) {
            window.MAPTALKS_WEBGL_DEBUG_CANVAS.getContext('2d').drawImage(this._sprites.canvas, 0, 0);
        }

        this._needCheckSprites = false;

        if (!this._textureLoaded) {
            var ctx = this._sprites.canvas.getContext('2d');
            var width = this._sprites.canvas.width;
            var height = this._sprites.canvas.height;
            var imageData = ctx.getImageData(0, 0, width, height);
            this.loadTexture(imageData);
            this.enableSampler('u_sampler');
            this._textureLoaded = true;

            var uSprite = this._uSprite = [];
            for (var i = 0, len = this.layer._cookedStyles.length; i < len; i++) {
                uSprite.push.apply(uSprite, this._sprites.texCoords[i]);
                uSprite.push(this._sprites.offsets[i].x, this._sprites.offsets[i].y);
            }
        }
    };

    _class.prototype._getVertice = function _getVertice(point) {
        if (point.geometry) {
            point = point.geometry.coordinates;
        } else if (point.coordinates) {
            point = point.coordinates;
        }
        return point;
    };

    _class.prototype._drawMarkers = function _drawMarkers() {
        var gl = this.gl;
        var m = this.calcMatrices();
        gl.uniformMatrix4fv(gl.program.u_matrix, false, m);
        gl.uniform1f(gl.program.u_scale, this.getMap().getScale());
        gl.uniform1fv(gl.program.u_sprite, this._uSprite);

        gl.drawArrays(gl.POINTS, 0, this._vertexCount);
    };

    _class.prototype._registerEvents = function _registerEvents() {
        this.layer.on('setstyle', this._onStyleChanged, this);
    };

    _class.prototype._removeEvents = function _removeEvents() {
        this.layer.off('setstyle', this._onStyleChanged, this);
    };

    _class.prototype._onStyleChanged = function _onStyleChanged() {
        this._needCheckStyle = true;
    };

    _class.prototype._setBlendEquation = function _setBlendEquation() {
        var blend = this.layer.options['blendEquation'];
        if (!blend) {
            return;
        }
        var gl = this.gl;
        blend = blend.toLowerCase();
        if (blend === 'add') {
            gl.blendEquation(gl.FUNC_ADD);
        } else if (blend === 'subtract') {
            gl.blendEquation(gl.FUNC_SUBTRACT);
        } else if (blend === 'reverse_substract') {
            gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT);
        }
    };

    return _class;
}(WebglRenderer));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var clone_1 = createCommonjsModule(function (module) {
  var clone = function () {
    'use strict';

    function clone(parent, circular, depth, prototype) {
      var filter;
      if ((typeof circular === 'undefined' ? 'undefined' : _typeof(circular)) === 'object') {
        depth = circular.depth;
        prototype = circular.prototype;
        filter = circular.filter;
        circular = circular.circular;
      }

      var allParents = [];
      var allChildren = [];

      var useBuffer = typeof Buffer != 'undefined';

      if (typeof circular == 'undefined') circular = true;

      if (typeof depth == 'undefined') depth = Infinity;

      function _clone(parent, depth) {
        if (parent === null) return null;

        if (depth == 0) return parent;

        var child;
        var proto;
        if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
          return parent;
        }

        if (clone.__isArray(parent)) {
          child = [];
        } else if (clone.__isRegExp(parent)) {
          child = new RegExp(parent.source, __getRegExpFlags(parent));
          if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (clone.__isDate(parent)) {
          child = new Date(parent.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent)) {
          child = new Buffer(parent.length);
          parent.copy(child);
          return child;
        } else {
          if (typeof prototype == 'undefined') {
            proto = Object.getPrototypeOf(parent);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }

        if (circular) {
          var index = allParents.indexOf(parent);

          if (index != -1) {
            return allChildren[index];
          }
          allParents.push(parent);
          allChildren.push(child);
        }

        for (var i in parent) {
          var attrs;
          if (proto) {
            attrs = Object.getOwnPropertyDescriptor(proto, i);
          }

          if (attrs && attrs.set == null) {
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        }

        return child;
      }

      return _clone(parent, depth);
    }

    clone.clonePrototype = function clonePrototype(parent) {
      if (parent === null) return null;

      var c = function c() {};
      c.prototype = parent;
      return new c();
    };

    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;

    function __isDate(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Date]';
    }
    clone.__isDate = __isDate;

    function __isArray(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Array]';
    }
    clone.__isArray = __isArray;

    function __isRegExp(o) {
      return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object RegExp]';
    }
    clone.__isRegExp = __isRegExp;

    function __getRegExpFlags(re) {
      var flags = '';
      if (re.global) flags += 'g';
      if (re.ignoreCase) flags += 'i';
      if (re.multiline) flags += 'm';
      return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;

    return clone;
  }();

  if ('object' === 'object' && module.exports) {
    module.exports = clone;
  }
});

var index$5 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions$1 = createCommonjsModule(function (module) {
	var cssKeywords = index$5;

	var reverseKeywords = {};
	for (var key in cssKeywords) {
		if (cssKeywords.hasOwnProperty(key)) {
			reverseKeywords[cssKeywords[key]] = key;
		}
	}

	var convert = module.exports = {
		rgb: { channels: 3, labels: 'rgb' },
		hsl: { channels: 3, labels: 'hsl' },
		hsv: { channels: 3, labels: 'hsv' },
		hwb: { channels: 3, labels: 'hwb' },
		cmyk: { channels: 4, labels: 'cmyk' },
		xyz: { channels: 3, labels: 'xyz' },
		lab: { channels: 3, labels: 'lab' },
		lch: { channels: 3, labels: 'lch' },
		hex: { channels: 1, labels: ['hex'] },
		keyword: { channels: 1, labels: ['keyword'] },
		ansi16: { channels: 1, labels: ['ansi16'] },
		ansi256: { channels: 1, labels: ['ansi256'] },
		hcg: { channels: 3, labels: ['h', 'c', 'g'] },
		apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
		gray: { channels: 1, labels: ['gray'] }
	};

	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}

			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}

			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}

			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', { value: channels });
			Object.defineProperty(convert[model], 'labels', { value: labels });
		}
	}

	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var v;

		if (max === 0) {
			s = 0;
		} else {
			s = delta / max * 1000 / 10;
		}

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		v = max / 255 * 1000 / 10;

		return [h, s, v];
	};

	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;

		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	function comparativeDistance(x, y) {
		return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
	}

	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		var currentClosestDistance = Infinity;
		var currentClosestKeyword;

		for (var keyword in cssKeywords) {
			if (cssKeywords.hasOwnProperty(keyword)) {
				var value = cssKeywords[keyword];

				var distance = comparativeDistance(rgb, value);

				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;

		r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
		g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
		b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

		var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
		var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
		var z = r * 0.0193 + g * 0.1192 + b * 0.9505;

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

		l = 116 * y - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;

		l *= 2;
		s *= l <= 1 ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;

		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - s * f);
		var t = 255 * v * (1 - s * (1 - f));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;

		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= lmin <= 1 ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;

		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh);

		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0:
				r = v;g = n;b = wh;break;
			case 1:
				r = n;g = v;b = wh;break;
			case 2:
				r = wh;g = v;b = n;break;
			case 3:
				r = wh;g = n;b = v;break;
			case 4:
				r = n;g = wh;b = v;break;
			case 5:
				r = v;g = wh;b = n;break;
		}

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;

		r = x * 3.2406 + y * -1.5372 + z * -0.4986;
		g = x * -0.9689 + y * 1.8758 + z * 0.0415;
		b = x * 0.0557 + y * -0.2040 + z * 1.0570;

		r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;

		g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;

		b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

		l = 116 * y - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;

		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];

		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round((r - 8) / 247 * 24) + 232;
		}

		var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		var color = args % 10;

		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		var mult = (~~(args > 50) + 1) * 0.5;
		var r = (color & 1) * mult * 255;
		var g = (color >> 1 & 1) * mult * 255;
		var b = (color >> 2 & 1) * mult * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = rem % 6 / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}/i);
		if (!match) {
			return [0, 0, 0];
		}

		var integer = parseInt(match[0], 16);
		var r = integer >> 16 & 0xFF;
		var g = integer >> 8 & 0xFF;
		var b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = max - min;
		var grayscale;
		var hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else if (max === r) {
			hue = (g - b) / chroma % 6;
		} else if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;

		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}

		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;

		var c = s * v;
		var f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		var pure = [0, 0, 0];
		var hi = h % 1 * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;

		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1;pure[1] = v;pure[2] = 0;break;
			case 1:
				pure[0] = w;pure[1] = 1;pure[2] = 0;break;
			case 2:
				pure[0] = 0;pure[1] = 1;pure[2] = v;break;
			case 3:
				pure[0] = 0;pure[1] = w;pure[2] = 1;break;
			case 4:
				pure[0] = v;pure[1] = 0;pure[2] = 1;break;
			default:
				pure[0] = 1;pure[1] = 0;pure[2] = w;
		}

		mg = (1.0 - c) * g;

		return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
	};

	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var v = c + g * (1.0 - c);
		var f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
});

var conversions$3 = conversions$1;

var models$1 = Object.keys(conversions$3);

function buildGraph() {
	var graph = {};

	for (var len = models$1.length, i = 0; i < len; i++) {
		graph[models$1[i]] = {
			distance: -1,
			parent: null
		};
	}

	return graph;
}

function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel];

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions$3[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions$3[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions$3[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route$1 = function route(fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var conversions = conversions$1;
var route = route$1;

var convert$1 = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function wrappedFn(args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert$1[fromModel] = {};

	Object.defineProperty(convert$1[fromModel], 'channels', { value: conversions[fromModel].channels });
	Object.defineProperty(convert$1[fromModel], 'labels', { value: conversions[fromModel].labels });

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert$1[fromModel][toModel] = wrapRounded(fn);
		convert$1[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var index$3 = convert$1;

var colorNames = index$5;

var colorString = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
};

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr = /^#([a-fA-F0-9]{3})$/,
       hex = /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\D+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   } else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   } else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   } else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   } else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale$8(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   } else {
      a = scale$8(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale$8(parseInt(match[1]), 0, 360),
          s = scale$8(parseFloat(match[2]), 0, 100),
          l = scale$8(parseFloat(match[3]), 0, 100),
          a = scale$8(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale$8(parseInt(match[1]), 0, 360),
          w = scale$8(parseFloat(match[2]), 0, 100),
          b = scale$8(parseFloat(match[3]), 0, 100),
          a = scale$8(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
   var hsla = getHsla(string);
   return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   } else if (vals = getHsla(string)) {
      return vals[3];
   } else if (vals = getHwb(string)) {
      return vals[3];
   }
}

function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1]) + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || rgba[3] && rgba[3] < 1) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = rgba[3] !== undefined ? rgba[3] : 1;
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || rgba[3] && rgba[3] < 1) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0] / 255 * 100),
       g = Math.round(rgba[1] / 255 * 100),
       b = Math.round(rgba[2] / 255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0] / 255 * 100),
       g = Math.round(rgba[1] / 255 * 100),
       b = Math.round(rgba[2] / 255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || hsla[3] && hsla[3] < 1) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = hsla[3] !== undefined ? hsla[3] : 1;
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + alpha + ")";
}

function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = hwb[3] !== undefined ? hwb[3] : 1;
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%" + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
   return reverseNames[rgb.slice(0, 3)];
}

function scale$8(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
   var str = num.toString(16).toUpperCase();
   return str.length < 2 ? "0" + str : str;
}

var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

var _clone = clone_1;
var convert = index$3;
var string = colorString;

var Color = function Color(obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function rgb() {
		return this.setSpace('rgb', arguments);
	},
	hsl: function hsl() {
		return this.setSpace('hsl', arguments);
	},
	hsv: function hsv() {
		return this.setSpace('hsv', arguments);
	},
	hwb: function hwb() {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function cmyk() {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function rgbArray() {
		return this.values.rgb;
	},
	hslArray: function hslArray() {
		return this.values.hsl;
	},
	hsvArray: function hsvArray() {
		return this.values.hsv;
	},
	hwbArray: function hwbArray() {
		if (this.values.alpha !== 1) {
			return this.values.hwb.concat([this.values.alpha]);
		}
		return this.values.hwb;
	},
	cmykArray: function cmykArray() {
		return this.values.cmyk;
	},
	rgbaArray: function rgbaArray() {
		var rgb = this.values.rgb;
		return rgb.concat([this.values.alpha]);
	},
	rgbaArrayNormalized: function rgbaArrayNormalized() {
		var rgb = this.values.rgb;
		var glRgba = [];
		for (var i = 0; i < 3; i++) {
			glRgba[i] = rgb[i] / 255;
		}
		glRgba.push(this.values.alpha);
		return glRgba;
	},
	hslaArray: function hslaArray() {
		var hsl = this.values.hsl;
		return hsl.concat([this.values.alpha]);
	},
	alpha: function alpha(val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function red(val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function green(val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function blue(val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function hue(val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function saturation(val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function lightness(val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function saturationv(val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function whiteness(val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function blackness(val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function value(val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function cyan(val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function magenta(val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function yellow(val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function black(val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function hexString() {
		return string.hexString(this.values.rgb);
	},
	rgbString: function rgbString() {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function rgbaString() {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function percentString() {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function hslString() {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function hslaString() {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function hwbString() {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function keyword() {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function rgbNumber() {
		return this.values.rgb[0] << 16 | this.values.rgb[1] << 8 | this.values.rgb[2];
	},

	luminosity: function luminosity() {
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function contrast(color2) {
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function level(color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return contrastRatio >= 4.5 ? 'AA' : '';
	},

	dark: function dark() {
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function light() {
		return !this.dark();
	},

	negate: function negate() {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function lighten(ratio) {
		this.values.hsl[2] += this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	darken: function darken(ratio) {
		this.values.hsl[2] -= this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	saturate: function saturate(ratio) {
		this.values.hsl[1] += this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	desaturate: function desaturate(ratio) {
		this.values.hsl[1] -= this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	whiten: function whiten(ratio) {
		this.values.hwb[1] += this.values.hwb[1] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	blacken: function blacken(ratio) {
		this.values.hwb[2] += this.values.hwb[2] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	greyscale: function greyscale() {
		var rgb = this.values.rgb;

		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function clearer(ratio) {
		this.setValues('alpha', this.values.alpha - this.values.alpha * ratio);
		return this;
	},

	opaquer: function opaquer(ratio) {
		this.setValues('alpha', this.values.alpha + this.values.alpha * ratio);
		return this;
	},

	rotate: function rotate(degrees) {
		var hue = this.values.hsl[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		this.values.hsl[0] = hue;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	mix: function mix(mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue()).alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function toJSON() {
		return this.rgb();
	},

	clone: function clone() {
		var col = new Color();
		col.values = _clone(this.values);
		return col;
	}
};

Color.prototype.getValues = function (space) {
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = this.values[space][i];
	}

	if (this.values.alpha !== 1) {
		vals.a = this.values.alpha;
	}

	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var spaces = {
		rgb: ['red', 'green', 'blue'],
		hsl: ['hue', 'saturation', 'lightness'],
		hsv: ['hue', 'saturation', 'value'],
		hwb: ['hue', 'whiteness', 'blackness'],
		cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};

	var maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	};

	var i;
	var alpha = 1;
	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		this.values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	this.values.alpha = Math.max(0, Math.min(1, alpha === undefined ? this.values.alpha : alpha));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
		this.values[space][i] = Math.round(capped);
	}

	for (var sname in spaces) {
		if (sname !== space) {
			this.values[sname] = convert[space][sname](this.values[space]);
		}

		for (i = 0; i < sname.length; i++) {
			capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
			this.values[sname][i] = Math.round(capped);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		return this.getValues(space);
	}

	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	if (val === undefined) {
		return this.values[space][index];
	} else if (val === this.values[space][index]) {
		return this;
	}

	this.values[space][index] = val;
	this.setValues(space, this.values[space]);

	return this;
};

var index$2 = Color;

var PathRenderer = function (_WebglRenderer) {
    inherits(PathRenderer, _WebglRenderer);

    function PathRenderer(layer) {
        classCallCheck(this, PathRenderer);

        var _this = possibleConstructorReturn(this, _WebglRenderer.call(this, layer));

        _this._needCheckStyle = true;
        _this._needCheckSprites = true;
        _this._registerEvents();
        return _this;
    }

    PathRenderer.prototype.checkResources = function checkResources() {
        if (!this._needCheckStyle) {
            return [];
        }

        var resources = [];
        if (this.layer._cookedStyles) {
            this.layer._cookedStyles.forEach(function (s) {
                s['symbol'] = maptalks.Util.convertResourceUrl(s['symbol']);
                var res = maptalks.Util.getExternalResources(s['symbol'], true);
                if (res) {
                    resources.push(res);
                }
            });
        }

        this._needCheckStyle = false;

        this._needCheckSprites = true;

        this._textureLoaded = false;

        if (resources.length === 0) {
            return [];
        }

        return resources;
    };

    PathRenderer.prototype.onCanvasCreate = function onCanvasCreate() {
        this.gl.getExtension('OES_element_index_uint');
    };

    PathRenderer.prototype.onRemove = function onRemove() {
        this._removeEvents();
        delete this._fillSprites;
        delete this._sprites;
        _WebglRenderer.prototype.onRemove.apply(this, arguments);
    };

    PathRenderer.prototype.getDataSymbol = function getDataSymbol(props) {
        var count = -1;
        for (var i = 0, l = this.layer._cookedStyles.length; i < l; i++) {
            var style = this.layer._cookedStyles[i];
            var texture = this.getTexture(style.symbol);
            if (texture) {
                count++;
            }
            if (style.filter({ 'properties': props }) === true) {
                if (texture) {
                    return {
                        'symbol': style.symbol,
                        'texCoord': this._fillSprites.texCoords[count],
                        'index': i
                    };
                } else {
                    return {
                        'symbol': style.symbol,
                        'index': i
                    };
                }
            }
        }
        return null;
    };

    PathRenderer.prototype.getLineTexture = function getLineTexture(symbol) {
        return this._atlas.getAtlas(symbol);
    };

    PathRenderer.prototype.getFillTexture = function getFillTexture(symbol) {
        var fillPattern = symbol ? symbol['polygonPatternFile'] : null;
        if (fillPattern) {
            return this.resources.getImage(fillPattern);
        }
        return null;
    };

    PathRenderer.prototype._checkSprites = function _checkSprites() {
        var _this2 = this;

        if (!this._needCheckSprites) {
            return;
        }
        this._atlas = new LineAtlas(this.resources);
        var sprites = [];
        var fillSprites = [];
        if (this.layer._cookedStyles) {
            this.layer._cookedStyles.forEach(function (s) {
                var sprite = _this2.getLineTexture(s.symbol);
                if (sprite) {
                    sprites.push(sprite);
                }

                sprite = _this2.getFillTexture(s.symbol);
                if (sprite) {
                    fillSprites.push({
                        'canvas': sprite,
                        'offset': new maptalks.Point(0, 0)
                    });
                }
            });
        }

        this._sprites = this.mergeSprites(sprites);
        this._fillSprites = this.mergeSprites(fillSprites);

        if (this._sprites && typeof window != 'undefined' && window.MAPTALKS_WEBGL_DEBUG_CANVAS) {
            var debugCanvas = window.MAPTALKS_WEBGL_DEBUG_CANVAS;
            debugCanvas.getContext('2d').fillRect(0, 0, debugCanvas.width, debugCanvas.height);
            debugCanvas.getContext('2d').fillStyle = 'rgb(255, 255, 255)';
            debugCanvas.getContext('2d').fillRect(0, 0, this._sprites.canvas.width, this._sprites.canvas.height);
            debugCanvas.getContext('2d').drawImage(this._sprites.canvas, 0, 0);
        }

        this._needCheckSprites = false;

        if (this._sprites && !this._textureLoaded) {
            this.loadTexture(this._sprites.canvas);
            this.enableSampler('u_image');
            this._textureLoaded = true;
        }

        if (this._fillSprites && !this._fillTextureLoaded) {
            this.loadTexture(this._fillSprites.canvas);
            this.enableSampler('u_fill_image');
            this._fillTextureLoaded = true;
        }

        var counter = 0;
        var uStyle = this._uStyle = [];
        for (var i = 0, len = this.layer._cookedStyles.length; i < len; i++) {
            var style = this.layer._cookedStyles[i];
            var texture = this.getLineTexture(style.symbol);
            if (texture) {
                uStyle.push.apply(uStyle, this._sprites.texCoords[counter++]);
                uStyle.push(-1);
            } else {
                var color = style.symbol['lineColor'] || '#000000';
                color = index$2(color).rgbaArrayNormalized();
                uStyle.push.apply(uStyle, color);
            }
        }

        counter = 0;
        var uFillStyle = this._uFillStyle = [];
        for (var _i = 0, _len = this.layer._cookedStyles.length; _i < _len; _i++) {
            var _style = this.layer._cookedStyles[_i];
            var _texture = this.getFillTexture(_style.symbol);
            if (_texture) {
                uFillStyle.push.apply(uFillStyle, this._fillSprites.texCoords[counter++]);
                uFillStyle.push(-1);
            } else {
                var _color = _style.symbol['polygonFill'] || '#fff';
                _color = index$2(_color).rgbaArrayNormalized();
                uFillStyle.push.apply(uFillStyle, _color);
            }
        }
    };

    PathRenderer.prototype._registerEvents = function _registerEvents() {
        this.layer.on('setstyle', this._onStyleChanged, this);
    };

    PathRenderer.prototype._removeEvents = function _removeEvents() {
        this.layer.off('setstyle', this._onStyleChanged, this);
    };

    PathRenderer.prototype._onStyleChanged = function _onStyleChanged() {
        this._needCheckStyle = true;
    };

    return PathRenderer;
}(WebglRenderer);

var options$4 = {
    'blur': 2
};

var BigLineLayer = function (_BigDataLayer) {
    inherits(BigLineLayer, _BigDataLayer);

    function BigLineLayer() {
        classCallCheck(this, BigLineLayer);
        return possibleConstructorReturn(this, _BigDataLayer.apply(this, arguments));
    }

    return BigLineLayer;
}(BigDataLayer);

BigLineLayer.mergeOptions(options$4);

BigLineLayer.registerJSONType('BigLineLayer');

var BigLineRenderer = function (_PathRenderer) {
    inherits(BigLineRenderer, _PathRenderer);

    function BigLineRenderer() {
        classCallCheck(this, BigLineRenderer);
        return possibleConstructorReturn(this, _PathRenderer.apply(this, arguments));
    }

    BigLineRenderer.prototype.onCanvasCreate = function onCanvasCreate() {
        var uniforms = ['u_matrix', 'u_scale', 'u_tex_size', 'u_styles[0]'];
        this._lineProgram = this.createProgram(shaders.line.vertexSource, shaders.line.fragmentSource, uniforms);
        _PathRenderer.prototype.onCanvasCreate.call(this);
    };

    BigLineRenderer.prototype.draw = function draw() {
        this.prepareCanvas();

        this._drawLines();
        this.completeRender();
    };

    BigLineRenderer.prototype.drawOnInteracting = function drawOnInteracting() {
        this._drawLines();
        this.completeRender();
    };

    BigLineRenderer.prototype.onRemove = function onRemove() {
        delete this._lineArrays;
        _PathRenderer.prototype.onRemove.apply(this, arguments);
    };

    BigLineRenderer.prototype.getTexture = function getTexture(symbol) {
        return this.getLineTexture(symbol);
    };

    BigLineRenderer.prototype._drawLines = function _drawLines() {
        var gl = this.gl,
            map = this.getMap(),
            program = this._lineProgram;
        this.useProgram(program);
        this._checkSprites();

        this._prepareLineData();
        this._bufferLineData(this._lineArrays);

        var m = this.calcMatrices();
        gl.uniformMatrix4fv(gl.program.u_matrix, false, m);
        gl.uniform1f(program.u_scale, map.getScale() / map.getScale(getTargetZoom(map)));
        gl.uniform1fv(program.u_styles, this._uStyle);

        var texSize = [0, 0];
        if (this._sprites) {
            texSize = [this._sprites.canvas.width, this._sprites.canvas.height];
        }
        gl.uniform2fv(program.u_tex_size, new Float32Array(texSize));
        gl.drawElements(gl.TRIANGLES, this._elementCount, gl.UNSIGNED_INT, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    BigLineRenderer.prototype._prepareLineData = function _prepareLineData() {
        if (this._lineArrays) {
            return;
        }
        var gl = this.gl,
            map = this.getMap();
        var data = this.layer.data;
        var painter = new LinePainter(gl, map);
        var symbol = void 0;
        for (var i = 0, l = data.length; i < l; i++) {
            if (!data[i]) {
                continue;
            }
            if (Array.isArray(data[i])) {
                symbol = this.getDataSymbol(data[i][1]);
                painter.addLine(data[i][0], symbol);
            } else if (data[i].type) {
                symbol = this.getDataSymbol(data[i].properties);
                painter.addLine(data[i], symbol);
            }
        }

        var lineArrays = this._lineArrays = painter.getArrays();

        this._elementCount = lineArrays.elementArray.length;
    };

    BigLineRenderer.prototype._bufferLineData = function _bufferLineData(lineArrays) {
        var gl = this.gl;

        if (!this._vertexBuffer) {
            var vertexBuffer = this._vertexBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineArrays.vertexArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        }
        this.enableVertexAttrib(['a_pos', 2, 'FLOAT']);

        if (!this._normalBuffer) {
            var normalBuffer = this._normalBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineArrays.normalArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._normalBuffer);
        }
        this.enableVertexAttrib([['a_normal', 2, 'FLOAT'], ['a_linesofar', 1, 'FLOAT']]);

        if (!this._texBuffer) {
            var texBuffer = this._texBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineArrays.styleArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._texBuffer);
        }
        this.enableVertexAttrib([['a_style', 1, 'FLOAT']]);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (!this._elementBuffer) {
            var elementBuffer = this._elementBuffer = this.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(lineArrays.elementArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._elementBuffer);
        }
    };

    return BigLineRenderer;
}(PathRenderer);

BigLineLayer.registerRenderer('webgl', BigLineRenderer);

var options$5 = {
    'blur': 2
};

var BigPolygonLayer = function (_BigDataLayer) {
    inherits(BigPolygonLayer, _BigDataLayer);

    function BigPolygonLayer() {
        classCallCheck(this, BigPolygonLayer);
        return possibleConstructorReturn(this, _BigDataLayer.apply(this, arguments));
    }

    return BigPolygonLayer;
}(BigDataLayer);

BigPolygonLayer.mergeOptions(options$5);

BigPolygonLayer.registerJSONType('BigPolygonLayer');

BigPolygonLayer.registerRenderer('webgl', function (_BigLineRenderer) {
    inherits(_class, _BigLineRenderer);

    function _class() {
        classCallCheck(this, _class);
        return possibleConstructorReturn(this, _BigLineRenderer.apply(this, arguments));
    }

    _class.prototype.onCanvasCreate = function onCanvasCreate() {
        var uniforms = ['u_matrix', 'u_fill_styles[0]'];
        this._polygonProgram = this.createProgram(shaders.polygon.vertexSource, shaders.polygon.fragmentSource, uniforms);
        _BigLineRenderer.prototype.onCanvasCreate.call(this);
    };

    _class.prototype.draw = function draw() {
        this.prepareCanvas();
        this._drawPolygons();
        this.gl.disable(this.gl.BLEND);
        this._drawLines();
        this.gl.enable(this.gl.BLEND);
        this.completeRender();
    };

    _class.prototype.drawOnInteracting = function drawOnInteracting() {
        this._drawPolygons();
        this.gl.disable(this.gl.BLEND);
        this._drawLines();
        this.gl.enable(this.gl.BLEND);
        this.completeRender();
    };

    _class.prototype.getTexture = function getTexture(symbol) {
        return this.getFillTexture(symbol);
    };

    _class.prototype._drawPolygons = function _drawPolygons() {
        var gl = this.gl,
            program = this._polygonProgram;
        this.useProgram(program);
        this._checkSprites();

        this._preparePolygonData();

        this._bufferPolygonData(this._polygonArrays);

        var m = this.calcMatrices();
        gl.uniformMatrix4fv(gl.program['u_matrix'], false, m);
        gl.uniform1fv(program['u_fill_styles'], this._uFillStyle);
        gl.drawElements(gl.TRIANGLES, this._polygonElementCount, gl.UNSIGNED_INT, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    _class.prototype._preparePolygonData = function _preparePolygonData() {
        if (this._polygonArrays) {
            return;
        }
        var gl = this.gl,
            map = this.getMap();

        var data = this.layer.data;
        var painter = new PolygonPainter(gl, map);
        var symbol = void 0;
        for (var i = 0, l = data.length; i < l; i++) {
            if (!data[i]) {
                continue;
            }
            if (Array.isArray(data[i])) {
                symbol = this.getDataSymbol(data[i][1]);
                painter.addPolygon(data[i][0], symbol);
            } else if (data[i].type) {
                symbol = this.getDataSymbol(data[i].properties);
                painter.addPolygon(data[i], symbol);
            }
        }
        var polygonArrays = this._polygonArrays = painter.getArrays();
        this._polygonElementCount = polygonArrays.elementArray.length;
    };

    _class.prototype._bufferPolygonData = function _bufferPolygonData(polygonArrays) {
        var gl = this.gl;
        if (!this._polygonVertexBuffer) {
            var vertexBuffer = this._polygonVertexBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(polygonArrays.vertexArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._polygonVertexBuffer);
        }
        this.enableVertexAttrib(['a_pos', 2, 'FLOAT']);

        if (!this._polygonTexBuffer) {
            var texBuffer = this._polygonTexBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(polygonArrays.styleArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._polygonTexBuffer);
        }
        this.enableVertexAttrib([['a_fill_style', 1, 'FLOAT']]);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (!this._polygonElemBuffer) {
            var elementBuffer = this._polygonElemBuffer = this.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(polygonArrays.elementArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._polygonElemBuffer);
        }
    };

    _class.prototype.onRemove = function onRemove() {
        delete this._polygonArrays;
        _BigLineRenderer.prototype.onRemove.apply(this, arguments);
    };

    return _class;
}(BigLineRenderer));

var options$7 = {
    'project': true
};

var ExtrudePainter = function (_Painter) {
    inherits(ExtrudePainter, _Painter);

    function ExtrudePainter(gl, map, options) {
        classCallCheck(this, ExtrudePainter);

        var _this = possibleConstructorReturn(this, _Painter.call(this, gl, map, options));

        _this.vertexArray = [];
        _this.normalArray = [];
        _this.elementArray = [];
        _this.styleArray = [];
        return _this;
    }

    ExtrudePainter.prototype.getArrays = function getArrays() {
        return {
            'vertexArray': this.vertexArray,
            'normalArray': this.normalArray,
            'elementArray': this.elementArray,
            'styleArray': this.styleArray
        };
    };

    ExtrudePainter.prototype.addPolygon = function addPolygon(polygon, height, style) {
        if (!polygon) {
            return this;
        }
        if (style.symbol['polygonOpacity'] <= 0) {
            return this;
        }

        var vertice = this._getVertice(polygon);

        if (vertice[0] && Array.isArray(vertice[0][0]) && Array.isArray(vertice[0][0][0])) {
            for (var i = 0, l = vertice.length; i < l; i++) {
                this.addPolygon(vertice[i], height, style);
            }
            return this;
        }

        this._fillArrays(vertice, height, style);
        return this;
    };

    ExtrudePainter.prototype._fillArrays = function _fillArrays(vertice, height, style) {
        var dimension = 3;

        var targetZ = getTargetZoom(this.map);
        var data = earcut_1.flatten(vertice);

        var bottom = [];
        var top = [];
        var c = void 0;

        for (var i = 0, l = data.vertices.length; i < l; i += 2) {
            if (i === l - 1) {
                if (this._equalCoord(data.vertices[i], data.vertices[0])) {
                    continue;
                }
            }
            if (this.options['project']) {
                c = this.map.coordinateToPoint(new maptalks.Coordinate(data.vertices[i], data.vertices[i + 1]), targetZ);
                bottom.push(c.x, c.y, 0);
                top.push(c.x, c.y, height);
            } else {
                bottom.push(data.vertices[i], data.vertices[i + 1], 0);
                top.push(data.vertices[i], data.vertices[i + 1], height);
            }
        }
        data.vertices = bottom;
        var triangles = earcut_1(data.vertices, data.holes, dimension);
        if (triangles.length <= 2) {
            return;
        }
        var deviation = earcut_1.deviation(data.vertices, data.holes, dimension, triangles);
        if (Math.round(deviation * 1E3) / 1E3 !== 0) {
            if (console) {
                console.warn('Failed triangluation.');
            }
            return;
        }

        var count = bottom.length / dimension;

        var preCount = this.vertexArray.length / dimension;
        if (preCount > 0) {
            triangles = triangles.map(function (e) {
                return e + preCount;
            });
        }

        maptalks.Util.pushIn(this.vertexArray, bottom);

        maptalks.Util.pushIn(this.elementArray, triangles);

        for (var _i = 0; _i < count; _i++) {
            this.normalArray.push(0, 0, -1);
        }

        if (count > 0) {
            triangles = triangles.map(function (e) {
                return e + count;
            });
        }

        maptalks.Util.pushIn(this.vertexArray, top);

        maptalks.Util.pushIn(this.elementArray, triangles);

        for (var _i2 = 0; _i2 < count; _i2++) {
            this.normalArray.push(0, 0, 1);
        }

        var vertexCount = this.vertexArray.length / dimension;
        for (var _i3 = 0, _l = count; _i3 < _l - 1; _i3++) {
            var ii = _i3 * dimension;
            var normal = new index$1(bottom[ii + 3], bottom[ii + 4]).sub(new index$1(bottom[ii], bottom[ii + 1]))._unit()._perp();
            this.vertexArray.push(bottom[ii], bottom[ii + 1], bottom[ii + 2]);
            this.vertexArray.push(bottom[ii + 3], bottom[ii + 4], bottom[ii + 5]);
            this.vertexArray.push(top[ii + 3], top[ii + 4], top[ii + 5]);
            this.vertexArray.push(top[ii], top[ii + 1], top[ii + 2]);
            for (var n = 0; n < 4; n++) {
                this.normalArray.push(normal.x, normal.y, 0);
            }
            var ei = _i3 * 4;
            this.elementArray.push(vertexCount + ei, vertexCount + ei + 1, vertexCount + ei + 2);
            this.elementArray.push(vertexCount + ei, vertexCount + ei + 2, vertexCount + ei + 3);
        }

        this._addTexCoords(this.vertexArray.length / dimension - preCount, style);
    };

    ExtrudePainter.prototype._getVertice = function _getVertice(geo) {
        if (geo.geometry) {
            geo = geo.geometry.coordinates;
        } else if (geo.coordinates) {
            geo = geo.coordinates;
        }
        return geo;
    };

    ExtrudePainter.prototype._addTexCoords = function _addTexCoords(n, style) {
        var v = style.index * 100 + (style.symbol['polygonOpacity'] || 1) * 10;
        for (var i = 0; i < n; i++) {
            this.styleArray.push(v);
        }
    };

    ExtrudePainter.prototype._equalCoord = function _equalCoord(c1, c2) {
        return c1[0] === c2[0] && c1[1] === c2[1];
    };

    return ExtrudePainter;
}(Painter);

ExtrudePainter.mergeOptions(options$7);

var options$6 = {
    'lightPos': [10, 0, 35],
    'lightColor': [1, 1, 1],
    'lightIntensity': 0.5,
    'ambientLight': [0.02, 0.02, 0.02]
};

var ExtrudePolygonLayer = function (_BigDataLayer) {
    inherits(ExtrudePolygonLayer, _BigDataLayer);

    function ExtrudePolygonLayer() {
        classCallCheck(this, ExtrudePolygonLayer);
        return possibleConstructorReturn(this, _BigDataLayer.apply(this, arguments));
    }

    return ExtrudePolygonLayer;
}(BigDataLayer);

ExtrudePolygonLayer.mergeOptions(options$6);

ExtrudePolygonLayer.registerJSONType('ExtrudePolygonLayer');

var ExtrudeRenderer = function (_PathRenderer) {
    inherits(ExtrudeRenderer, _PathRenderer);

    function ExtrudeRenderer() {
        classCallCheck(this, ExtrudeRenderer);
        return possibleConstructorReturn(this, _PathRenderer.apply(this, arguments));
    }

    ExtrudeRenderer.prototype.onCanvasCreate = function onCanvasCreate() {
        var uniforms = ['u_matrix', 'u_fill_styles[0]', 'u_lightcolor', 'u_lightpos', 'u_ambientlight', 'u_lightintensity'];
        this.program = this.createProgram(shaders.extrude.vertexSource, shaders.extrude.fragmentSource, uniforms);
        _PathRenderer.prototype.onCanvasCreate.call(this);
        var gl = this.gl;
        gl.enable(gl.DEPTH_TEST);

        gl.disable(gl.BLEND);
        gl.disable(gl.STENCIL_TEST);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    };

    ExtrudeRenderer.prototype.draw = function draw() {
        this.prepareCanvas();
        this._drawExtrudes();
        this.completeRender();
    };

    ExtrudeRenderer.prototype.drawOnInteracting = function drawOnInteracting() {
        this._drawExtrudes();
        this.completeRender();
    };

    ExtrudeRenderer.prototype.onRemove = function onRemove() {
        delete this._extrudeArrays;
        _PathRenderer.prototype.onRemove.apply(this, arguments);
    };

    ExtrudeRenderer.prototype.getTexture = function getTexture(symbol) {
        return this.getFillTexture(symbol);
    };

    ExtrudeRenderer.prototype._drawExtrudes = function _drawExtrudes() {
        var gl = this.gl,
            program = this.program;
        this.useProgram(program);
        this._checkSprites();

        this._prepareData();
        var m = this.calcMatrices();
        gl.uniformMatrix4fv(gl.program['u_matrix'], false, m);
        gl.uniform1fv(program['u_fill_styles'], this._uFillStyle);

        var lightpos = this.layer.options['lightPos'] || [0, 0, 35];
        gl.uniform3fv(gl.program['u_lightpos'], normalize$1([], lightpos));

        var lightColor = this.layer.options['lightColor'] || [1, 1, 1];
        gl.uniform3f(gl.program['u_lightcolor'], lightColor[0], lightColor[1], lightColor[2]);

        var ambient = this.layer.options['ambientLight'] || [0.02, 0.02, 0.02];
        gl.uniform3f(gl.program['u_ambientlight'], ambient[0], ambient[1], ambient[2]);

        var lightIntensity = this.layer.options['lightIntensity'] || 0.5;
        gl.uniform1f(gl.program['u_lightintensity'], lightIntensity);
        this._bufferExtrudeData(this._extrudeArrays);
        gl.drawElements(gl.TRIANGLES, this._elementCount, gl.UNSIGNED_INT, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    ExtrudeRenderer.prototype._prepareData = function _prepareData() {
        if (this._extrudeArrays) {
            return;
        }
        var gl = this.gl,
            map = this.getMap();
        var targetZ = getTargetZoom(map);
        var data = this.layer.data;
        var painter = new ExtrudePainter(gl, map);
        for (var i = 0, l = data.length; i < l; i++) {
            if (!data[i]) {
                continue;
            }
            if (Array.isArray(data[i])) {
                var symbol = this.getDataSymbol(data[i][1]);
                var height = data[i][1]['height'];
                var pHeight = map.distanceToPixel(height, 0, targetZ).width;
                painter.addPolygon(data[i][0], pHeight, symbol);
            } else if (data[i].type) {
                var _symbol = this.getDataSymbol(data[i].properties);
                var _height = data[i].properties['height'];
                var _pHeight = map.distanceToPixel(_height, 0, targetZ).width;
                painter.addPolygon(data[i], _pHeight, _symbol);
            }
        }
        var extrudeArrays = this._extrudeArrays = painter.getArrays();
        this._elementCount = extrudeArrays.elementArray.length;
    };

    ExtrudeRenderer.prototype._bufferExtrudeData = function _bufferExtrudeData(extrudeArrays) {
        var gl = this.gl;

        if (!this._vertexBuffer) {
            var vertexBuffer = this._vertexBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(extrudeArrays.vertexArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        }
        this.enableVertexAttrib(['a_pos', 3, 'FLOAT']);

        if (!this._normalBuffer) {
            var normalBuffer = this._normalBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(extrudeArrays.normalArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._normalBuffer);
        }
        this.enableVertexAttrib(['a_normal', 3, 'FLOAT']);

        if (!this._texBuffer) {
            var texBuffer = this._texBuffer = this.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(extrudeArrays.styleArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, this._texBuffer);
        }
        this.enableVertexAttrib([['a_fill_style', 1, 'FLOAT']]);

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        if (!this._elementBuffer) {
            var elementBuffer = this._elementBuffer = this.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(extrudeArrays.elementArray), gl.STATIC_DRAW);
        } else {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._elementBuffer);
        }
    };

    return ExtrudeRenderer;
}(PathRenderer);

ExtrudePolygonLayer.registerRenderer('webgl', ExtrudeRenderer);

exports.webgl = index;
exports.BigDataLayer = BigDataLayer;
exports.BigPointLayer = BigPointLayer;
exports.BigLineLayer = BigLineLayer;
exports.BigPolygonLayer = BigPolygonLayer;
exports.ExtrudePolygonLayer = ExtrudePolygonLayer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwdGFsa3MuYmlnbGF5ZXIuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvbWF0My5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvbWF0NC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvdmVjMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvdmVjNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvcXVhdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dsLW1hdHJpeC9zcmMvdmVjMi5qcyIsIi4uL3NyYy9wYWludGVyL1BhaW50ZXIuanMiLCIuLi9zcmMvUmVuZGVyZXIuanMiLCIuLi9zcmMvcGFpbnRlci9MaW5lQXRsYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9pbnQtZ2VvbWV0cnkvaW5kZXguanMiLCIuLi9zcmMvcGFpbnRlci9MaW5lUGFpbnRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lYXJjdXQvc3JjL2VhcmN1dC5qcyIsIi4uL3NyYy9wYWludGVyL1BvbHlnb25QYWludGVyLmpzIiwiLi4vc3JjL3NoYWRlci9saW5lLmZyYWdtZW50LmpzIiwiLi4vc3JjL3NoYWRlci9jb21tb24uanMiLCIuLi9zcmMvc2hhZGVyL2xpbmUudmVydGV4LmpzIiwiLi4vc3JjL3NoYWRlci9wb2ludC5mcmFnbWVudC5qcyIsIi4uL3NyYy9zaGFkZXIvcG9pbnQudmVydGV4LmpzIiwiLi4vc3JjL3NoYWRlci9wb2x5Z29uLmZyYWdtZW50LmpzIiwiLi4vc3JjL3NoYWRlci9wb2x5Z29uLnZlcnRleC5qcyIsIi4uL3NyYy9zaGFkZXIvZXh0cnVkZS5mcmFnbWVudC5qcyIsIi4uL3NyYy9zaGFkZXIvZXh0cnVkZS52ZXJ0ZXguanMiLCIuLi9zcmMvc2hhZGVyL1NoYWRlci5qcyIsIi4uL3NyYy9sYXllci9CaWdEYXRhTGF5ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvcmFuZ2UuanMiLCIuLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy93aXRoaW4uanMiLCIuLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9rZGJ1c2guanMiLCIuLi9zcmMvbGF5ZXIvQmlnUG9pbnRMYXllci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbG9uZS9jbG9uZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9jb2xvci1zdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanMiLCIuLi9zcmMvbGF5ZXIvcmVuZGVyZXIvUGF0aFJlbmRlcmVyLmpzIiwiLi4vc3JjL2xheWVyL0JpZ0xpbmVMYXllci5qcyIsIi4uL3NyYy9sYXllci9CaWdQb2x5Z29uTGF5ZXIuanMiLCIuLi9zcmMvcGFpbnRlci9FeHRydWRlUGFpbnRlci5qcyIsIi4uL3NyYy9sYXllci9FeHRydWRlUG9seWdvbkxheWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG5hbWUgbWF0M1xuICogQGNsYXNzIDN4MyBNYXRyaXhcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0M1xuICpcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoOSk7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAxO1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHVwcGVyLWxlZnQgM3gzIHZhbHVlcyBpbnRvIHRoZSBnaXZlbiBtYXQzLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0NChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzRdO1xuICAgIG91dFs0XSA9IGFbNV07XG4gICAgb3V0WzVdID0gYVs2XTtcbiAgICBvdXRbNl0gPSBhWzhdO1xuICAgIG91dFs3XSA9IGFbOV07XG4gICAgb3V0WzhdID0gYVsxMF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDkpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0MyB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcmV0dXJucyB7bWF0M30gQSBuZXcgbWF0M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoOSk7XG4gICAgb3V0WzBdID0gbTAwO1xuICAgIG91dFsxXSA9IG0wMTtcbiAgICBvdXRbMl0gPSBtMDI7XG4gICAgb3V0WzNdID0gbTEwO1xuICAgIG91dFs0XSA9IG0xMTtcbiAgICBvdXRbNV0gPSBtMTI7XG4gICAgb3V0WzZdID0gbTIwO1xuICAgIG91dFs3XSA9IG0yMTtcbiAgICBvdXRbOF0gPSBtMjI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICAgIG91dFswXSA9IG0wMDtcbiAgICBvdXRbMV0gPSBtMDE7XG4gICAgb3V0WzJdID0gbTAyO1xuICAgIG91dFszXSA9IG0xMDtcbiAgICBvdXRbNF0gPSBtMTE7XG4gICAgb3V0WzVdID0gbTEyO1xuICAgIG91dFs2XSA9IG0yMDtcbiAgICBvdXRbN10gPSBtMjE7XG4gICAgb3V0WzhdID0gbTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMTtcbiAgICBvdXRbNV0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIHZhciBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMTIgPSBhWzVdO1xuICAgICAgICBvdXRbMV0gPSBhWzNdO1xuICAgICAgICBvdXRbMl0gPSBhWzZdO1xuICAgICAgICBvdXRbM10gPSBhMDE7XG4gICAgICAgIG91dFs1XSA9IGFbN107XG4gICAgICAgIG91dFs2XSA9IGEwMjtcbiAgICAgICAgb3V0WzddID0gYTEyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbM107XG4gICAgICAgIG91dFsyXSA9IGFbNl07XG4gICAgICAgIG91dFszXSA9IGFbMV07XG4gICAgICAgIG91dFs0XSA9IGFbNF07XG4gICAgICAgIG91dFs1XSA9IGFbN107XG4gICAgICAgIG91dFs2XSA9IGFbMl07XG4gICAgICAgIG91dFs3XSA9IGFbNV07XG4gICAgICAgIG91dFs4XSA9IGFbOF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSxcbiAgICAgICAgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XSxcbiAgICAgICAgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XSxcblxuICAgICAgICBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjEsXG4gICAgICAgIGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjAsXG4gICAgICAgIGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMCxcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMTtcblxuICAgIGlmICghZGV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSBiMDEgKiBkZXQ7XG4gICAgb3V0WzFdID0gKC1hMjIgKiBhMDEgKyBhMDIgKiBhMjEpICogZGV0O1xuICAgIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0O1xuICAgIG91dFszXSA9IGIxMSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTIyICogYTAwIC0gYTAyICogYTIwKSAqIGRldDtcbiAgICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXQ7XG4gICAgb3V0WzZdID0gYjIxICogZGV0O1xuICAgIG91dFs3XSA9ICgtYTIxICogYTAwICsgYTAxICogYTIwKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV0sXG4gICAgICAgIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF07XG5cbiAgICBvdXRbMF0gPSAoYTExICogYTIyIC0gYTEyICogYTIxKTtcbiAgICBvdXRbMV0gPSAoYTAyICogYTIxIC0gYTAxICogYTIyKTtcbiAgICBvdXRbMl0gPSAoYTAxICogYTEyIC0gYTAyICogYTExKTtcbiAgICBvdXRbM10gPSAoYTEyICogYTIwIC0gYTEwICogYTIyKTtcbiAgICBvdXRbNF0gPSAoYTAwICogYTIyIC0gYTAyICogYTIwKTtcbiAgICBvdXRbNV0gPSAoYTAyICogYTEwIC0gYTAwICogYTEyKTtcbiAgICBvdXRbNl0gPSAoYTEwICogYTIxIC0gYTExICogYTIwKTtcbiAgICBvdXRbN10gPSAoYTAxICogYTIwIC0gYTAwICogYTIxKTtcbiAgICBvdXRbOF0gPSAoYTAwICogYTExIC0gYTAxICogYTEwKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLFxuICAgICAgICBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdLFxuICAgICAgICBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdO1xuXG4gICAgcmV0dXJuIGEwMCAqIChhMjIgKiBhMTEgLSBhMTIgKiBhMjEpICsgYTAxICogKC1hMjIgKiBhMTAgKyBhMTIgKiBhMjApICsgYTAyICogKGEyMSAqIGExMCAtIGExMSAqIGEyMCk7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sXG4gICAgICAgIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV0sXG4gICAgICAgIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF0sXG5cbiAgICAgICAgYjAwID0gYlswXSwgYjAxID0gYlsxXSwgYjAyID0gYlsyXSxcbiAgICAgICAgYjEwID0gYlszXSwgYjExID0gYls0XSwgYjEyID0gYls1XSxcbiAgICAgICAgYjIwID0gYls2XSwgYjIxID0gYls3XSwgYjIyID0gYls4XTtcblxuICAgIG91dFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMDtcbiAgICBvdXRbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjE7XG4gICAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyO1xuXG4gICAgb3V0WzNdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwO1xuICAgIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMTtcbiAgICBvdXRbNV0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjI7XG5cbiAgICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjA7XG4gICAgb3V0WzddID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxO1xuICAgIG91dFs4XSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0My5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge211bHRpcGx5IGFzIG11bH07XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgbWF0MyBieSB0aGUgZ2l2ZW4gdmVjdG9yXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSxcbiAgICAgICAgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XSxcbiAgICAgICAgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XSxcbiAgICAgICAgeCA9IHZbMF0sIHkgPSB2WzFdO1xuXG4gICAgb3V0WzBdID0gYTAwO1xuICAgIG91dFsxXSA9IGEwMTtcbiAgICBvdXRbMl0gPSBhMDI7XG5cbiAgICBvdXRbM10gPSBhMTA7XG4gICAgb3V0WzRdID0gYTExO1xuICAgIG91dFs1XSA9IGExMjtcblxuICAgIG91dFs2XSA9IHggKiBhMDAgKyB5ICogYTEwICsgYTIwO1xuICAgIG91dFs3XSA9IHggKiBhMDEgKyB5ICogYTExICsgYTIxO1xuICAgIG91dFs4XSA9IHggKiBhMDIgKyB5ICogYTEyICsgYTIyO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLFxuICAgICAgICBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdLFxuICAgICAgICBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdLFxuXG4gICAgICAgIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICAgIG91dFsxXSA9IGMgKiBhMDEgKyBzICogYTExO1xuICAgIG91dFsyXSA9IGMgKiBhMDIgKyBzICogYTEyO1xuXG4gICAgb3V0WzNdID0gYyAqIGExMCAtIHMgKiBhMDA7XG4gICAgb3V0WzRdID0gYyAqIGExMSAtIHMgKiBhMDE7XG4gICAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG5cbiAgICBvdXRbNl0gPSBhMjA7XG4gICAgb3V0WzddID0gYTIxO1xuICAgIG91dFs4XSA9IGEyMjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXTtcblxuICAgIG91dFswXSA9IHggKiBhWzBdO1xuICAgIG91dFsxXSA9IHggKiBhWzFdO1xuICAgIG91dFsyXSA9IHggKiBhWzJdO1xuXG4gICAgb3V0WzNdID0geSAqIGFbM107XG4gICAgb3V0WzRdID0geSAqIGFbNF07XG4gICAgb3V0WzVdID0geSAqIGFbNV07XG5cbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzJ9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAxO1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gdlswXTtcbiAgICBvdXRbN10gPSB2WzFdO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLCBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGM7XG4gICAgb3V0WzFdID0gcztcbiAgICBvdXRbMl0gPSAwO1xuXG4gICAgb3V0WzNdID0gLXM7XG4gICAgb3V0WzRdID0gYztcbiAgICBvdXRbNV0gPSAwO1xuXG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjMn0gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gICAgb3V0WzBdID0gdlswXTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG5cbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHZbMV07XG4gICAgb3V0WzVdID0gMDtcblxuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDJkKG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSAwO1xuXG4gICAgb3V0WzNdID0gYVsyXTtcbiAgICBvdXRbNF0gPSBhWzNdO1xuICAgIG91dFs1XSA9IDA7XG5cbiAgICBvdXRbNl0gPSBhWzRdO1xuICAgIG91dFs3XSA9IGFbNV07XG4gICAgb3V0WzhdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuKlxuKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4qIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeXggPSB5ICogeDIsXG4gICAgICAgIHl5ID0geSAqIHkyLFxuICAgICAgICB6eCA9IHogKiB4MixcbiAgICAgICAgenkgPSB6ICogeTIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gICAgb3V0WzNdID0geXggLSB3ejtcbiAgICBvdXRbNl0gPSB6eCArIHd5O1xuXG4gICAgb3V0WzFdID0geXggKyB3ejtcbiAgICBvdXRbNF0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbN10gPSB6eSAtIHd4O1xuXG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbNV0gPSB6eSArIHd4O1xuICAgIG91dFs4XSA9IDEgLSB4eCAtIHl5O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4qIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbipcbiogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbEZyb21NYXQ0KG91dCwgYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzIsXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgICAgICBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICBpZiAoIWRldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG5cbiAgICBvdXRbM10gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcblxuICAgIG91dFs2XSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFs3XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gYSBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ21hdDMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbM10gKyAnLCAnICsgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgKyBhWzhdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gICAgcmV0dXJuIChNYXRoLnNxcnQoTWF0aC5wb3coYVswXSwgMikgKyBNYXRoLnBvdyhhWzFdLCAyKSArIE1hdGgucG93KGFbMl0sIDIpICsgTWF0aC5wb3coYVszXSwgMikgKyBNYXRoLnBvdyhhWzRdLCAyKSArIE1hdGgucG93KGFbNV0sIDIpICsgTWF0aC5wb3coYVs2XSwgMikgKyBNYXRoLnBvdyhhWzddLCAyKSArIE1hdGgucG93KGFbOF0sIDIpKSk7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0My5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3N1YnRyYWN0IGFzIHN1Yn07XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYjtcbiAgICBvdXRbMV0gPSBhWzFdICogYjtcbiAgICBvdXRbMl0gPSBhWzJdICogYjtcbiAgICBvdXRbM10gPSBhWzNdICogYjtcbiAgICBvdXRbNF0gPSBhWzRdICogYjtcbiAgICBvdXRbNV0gPSBhWzVdICogYjtcbiAgICBvdXRbNl0gPSBhWzZdICogYjtcbiAgICBvdXRbN10gPSBhWzddICogYjtcbiAgICBvdXRbOF0gPSBhWzhdICogYjtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDMncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIncyBlbGVtZW50cyBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhckFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICAgIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSk7XG4gICAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICAgIG91dFs0XSA9IGFbNF0gKyAoYls0XSAqIHNjYWxlKTtcbiAgICBvdXRbNV0gPSBhWzVdICsgKGJbNV0gKiBzY2FsZSk7XG4gICAgb3V0WzZdID0gYVs2XSArIChiWzZdICogc2NhbGUpO1xuICAgIG91dFs3XSA9IGFbN10gKyAoYls3XSAqIHNjYWxlKTtcbiAgICBvdXRbOF0gPSBhWzhdICsgKGJbOF0gKiBzY2FsZSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJlxuICAgICAgICAgICBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJlxuICAgICAgICAgICBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XTtcbn1cbiIsIi8qKlxuICogQG5hbWUgbWF0NFxuICogQGNsYXNzIDR4NCBNYXRyaXhcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXQ0IHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDMgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTMgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggNylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggOClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggOSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTApXG4gKiBAcGFyYW0ge051bWJlcn0gbTIzIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDMgcG9zaXRpb24gKGluZGV4IDExKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMCBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAxMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzEgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMTMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMyIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDIgcG9zaXRpb24gKGluZGV4IDE0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMyBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxNSlcbiAqIEByZXR1cm5zIHttYXQ0fSBBIG5ldyBtYXQ0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMykge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBtMDA7XG4gICAgb3V0WzFdID0gbTAxO1xuICAgIG91dFsyXSA9IG0wMjtcbiAgICBvdXRbM10gPSBtMDM7XG4gICAgb3V0WzRdID0gbTEwO1xuICAgIG91dFs1XSA9IG0xMTtcbiAgICBvdXRbNl0gPSBtMTI7XG4gICAgb3V0WzddID0gbTEzO1xuICAgIG91dFs4XSA9IG0yMDtcbiAgICBvdXRbOV0gPSBtMjE7XG4gICAgb3V0WzEwXSA9IG0yMjtcbiAgICBvdXRbMTFdID0gbTIzO1xuICAgIG91dFsxMl0gPSBtMzA7XG4gICAgb3V0WzEzXSA9IG0zMTtcbiAgICBvdXRbMTRdID0gbTMyO1xuICAgIG91dFsxNV0gPSBtMzM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQ0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gICAgb3V0WzBdID0gbTAwO1xuICAgIG91dFsxXSA9IG0wMTtcbiAgICBvdXRbMl0gPSBtMDI7XG4gICAgb3V0WzNdID0gbTAzO1xuICAgIG91dFs0XSA9IG0xMDtcbiAgICBvdXRbNV0gPSBtMTE7XG4gICAgb3V0WzZdID0gbTEyO1xuICAgIG91dFs3XSA9IG0xMztcbiAgICBvdXRbOF0gPSBtMjA7XG4gICAgb3V0WzldID0gbTIxO1xuICAgIG91dFsxMF0gPSBtMjI7XG4gICAgb3V0WzExXSA9IG0yMztcbiAgICBvdXRbMTJdID0gbTMwO1xuICAgIG91dFsxM10gPSBtMzE7XG4gICAgb3V0WzE0XSA9IG0zMjtcbiAgICBvdXRbMTVdID0gbTMzO1xuICAgIHJldHVybiBvdXQ7XG59XG5cblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gICAgaWYgKG91dCA9PT0gYSkge1xuICAgICAgICB2YXIgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgICAgIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYTAxO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYTAyO1xuICAgICAgICBvdXRbOV0gPSBhMTI7XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGEwMztcbiAgICAgICAgb3V0WzEzXSA9IGExMztcbiAgICAgICAgb3V0WzE0XSA9IGEyMztcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRbMF0gPSBhWzBdO1xuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYVsxXTtcbiAgICAgICAgb3V0WzVdID0gYVs1XTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGFbMl07XG4gICAgICAgIG91dFs5XSA9IGFbNl07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYVszXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbN107XG4gICAgICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgICBvdXRbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgICBvdXRbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICAgIG91dFsxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIG91dFswXSAgPSAgKGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzFdICA9IC0oYTAxICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFszXSAgPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzRdICA9IC0oYTEwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFs2XSAgPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzddICA9ICAoYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICAgIG91dFs5XSAgPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gICAgb3V0WzEwXSA9ICAoYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gICAgb3V0WzEzXSA9ICAoYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpKTtcbiAgICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIG91dFsxNV0gPSAgKGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NCdzIGV4cGxpY2l0bHlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIHZhciBiMCAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdO1xuICAgIG91dFswXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICAgIG91dFsxXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICAgIG91dFsyXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICAgIG91dFszXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuXG4gICAgYjAgPSBiWzRdOyBiMSA9IGJbNV07IGIyID0gYls2XTsgYjMgPSBiWzddO1xuICAgIG91dFs0XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICAgIG91dFs1XSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICAgIG91dFs2XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICAgIG91dFs3XSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuXG4gICAgYjAgPSBiWzhdOyBiMSA9IGJbOV07IGIyID0gYlsxMF07IGIzID0gYlsxMV07XG4gICAgb3V0WzhdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gICAgb3V0WzldID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gICAgb3V0WzEwXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICAgIG91dFsxMV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcblxuICAgIGIwID0gYlsxMl07IGIxID0gYlsxM107IGIyID0gYlsxNF07IGIzID0gYlsxNV07XG4gICAgb3V0WzEyXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICAgIG91dFsxM10gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgICBvdXRbMTRdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gICAgb3V0WzE1XSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQ0Lm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7bXVsdGlwbHkgYXMgbXVsfTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdLFxuICAgICAgICBhMDAsIGEwMSwgYTAyLCBhMDMsXG4gICAgICAgIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gICAgaWYgKGEgPT09IG91dCkge1xuICAgICAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMl0gKiB4ICsgYVs2XSAqIHkgKyBhWzEwXSAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgICAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgICAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzBdID0gYTAwOyBvdXRbMV0gPSBhMDE7IG91dFsyXSA9IGEwMjsgb3V0WzNdID0gYTAzO1xuICAgICAgICBvdXRbNF0gPSBhMTA7IG91dFs1XSA9IGExMTsgb3V0WzZdID0gYTEyOyBvdXRbN10gPSBhMTM7XG4gICAgICAgIG91dFs4XSA9IGEyMDsgb3V0WzldID0gYTIxOyBvdXRbMTBdID0gYTIyOyBvdXRbMTFdID0gYTIzO1xuXG4gICAgICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMyBub3QgdXNpbmcgdmVjdG9yaXphdGlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBnaXZlbiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICB2YXIgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXSxcbiAgICAgICAgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiksXG4gICAgICAgIHMsIGMsIHQsXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjMsXG4gICAgICAgIGIwMCwgYjAxLCBiMDIsXG4gICAgICAgIGIxMCwgYjExLCBiMTIsXG4gICAgICAgIGIyMCwgYjIxLCBiMjI7XG5cbiAgICBpZiAobGVuID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeCAqPSBsZW47XG4gICAgeSAqPSBsZW47XG4gICAgeiAqPSBsZW47XG5cbiAgICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgICB0ID0gMSAtIGM7XG5cbiAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG4gICAgYjAwID0geCAqIHggKiB0ICsgYzsgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7IGIwMiA9IHogKiB4ICogdCAtIHkgKiBzO1xuICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzOyBiMTEgPSB5ICogeSAqIHQgKyBjOyBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogczsgYjIxID0geSAqIHogKiB0IC0geCAqIHM7IGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgICBvdXRbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gICAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICAgIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgICBvdXRbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gICAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICAgIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgICBvdXRbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XG4gICAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICAgIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgICBvdXRbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xuICAgIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFswXSAgPSBhWzBdO1xuICAgICAgICBvdXRbMV0gID0gYVsxXTtcbiAgICAgICAgb3V0WzJdICA9IGFbMl07XG4gICAgICAgIG91dFszXSAgPSBhWzNdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICAgIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICAgIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFs0XSAgPSBhWzRdO1xuICAgICAgICBvdXRbNV0gID0gYVs1XTtcbiAgICAgICAgb3V0WzZdICA9IGFbNl07XG4gICAgICAgIG91dFs3XSAgPSBhWzddO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICAgIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICAgIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzhdICA9IGFbOF07XG4gICAgICAgIG91dFs5XSAgPSBhWzldO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjICsgYTEwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjICsgYTEyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjICsgYTEzICogcztcbiAgICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgICBvdXRbNV0gPSBhMTEgKiBjIC0gYTAxICogcztcbiAgICBvdXRbNl0gPSBhMTIgKiBjIC0gYTAyICogcztcbiAgICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciBzY2FsaW5nXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHt2ZWMzfSB2IFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU2NhbGluZyhvdXQsIHYpIHtcbiAgICBvdXRbMF0gPSB2WzBdO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gdlsxXTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSB2WzJdO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGUgYXJvdW5kIGEgZ2l2ZW4gYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkLCBheGlzKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCwgYXhpcykge1xuICAgIHZhciB4ID0gYXhpc1swXSwgeSA9IGF4aXNbMV0sIHogPSBheGlzWzJdLFxuICAgICAgICBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KSxcbiAgICAgICAgcywgYywgdDtcblxuICAgIGlmIChsZW4gPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB4ICo9IGxlbjtcbiAgICB5ICo9IGxlbjtcbiAgICB6ICo9IGxlbjtcblxuICAgIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICAgIHQgPSAxIC0gYztcblxuICAgIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0geCAqIHggKiB0ICsgYztcbiAgICBvdXRbMV0gPSB5ICogeCAqIHQgKyB6ICogcztcbiAgICBvdXRbMl0gPSB6ICogeCAqIHQgLSB5ICogcztcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHggKiB5ICogdCAtIHogKiBzO1xuICAgIG91dFs1XSA9IHkgKiB5ICogdCArIGM7XG4gICAgb3V0WzZdID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4ICogeiAqIHQgKyB5ICogcztcbiAgICBvdXRbOV0gPSB5ICogeiAqIHQgLSB4ICogcztcbiAgICBvdXRbMTBdID0geiAqIHogKiB0ICsgYztcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWChkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWFJvdGF0aW9uKG91dCwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKTtcblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gID0gMTtcbiAgICBvdXRbMV0gID0gMDtcbiAgICBvdXRbMl0gID0gMDtcbiAgICBvdXRbM10gID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGM7XG4gICAgb3V0WzZdID0gcztcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gLXM7XG4gICAgb3V0WzEwXSA9IGM7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnJvdGF0ZVkoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVlSb3RhdGlvbihvdXQsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdICA9IGM7XG4gICAgb3V0WzFdICA9IDA7XG4gICAgb3V0WzJdICA9IC1zO1xuICAgIG91dFszXSAgPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gcztcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSBjO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGVaKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21aUm90YXRpb24ob3V0LCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSAgPSBjO1xuICAgIG91dFsxXSAgPSBzO1xuICAgIG91dFsyXSAgPSAwO1xuICAgIG91dFszXSAgPSAwO1xuICAgIG91dFs0XSA9IC1zO1xuICAgIG91dFs1XSA9IGM7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICB2YXIgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHh5ID0geCAqIHkyLFxuICAgICAgICB4eiA9IHggKiB6MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHl6ID0geSAqIHoyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gICAgb3V0WzFdID0geHkgKyB3ejtcbiAgICBvdXRbMl0gPSB4eiAtIHd5O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geHkgLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICAgIG91dFs2XSA9IHl6ICsgd3g7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4eiArIHd5O1xuICAgIG91dFs5XSA9IHl6IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxuICogIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbixcbiAqICB0aGUgcmV0dXJuZWQgdmVjdG9yIHdpbGwgYmUgdGhlIHNhbWUgYXMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgdHJhbnNsYXRpb24gY29tcG9uZW50XG4gKiBAcGFyYW0gIHttYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvdXQsIG1hdCkge1xuICAgIG91dFswXSA9IG1hdFsxMl07XG4gICAgb3V0WzFdID0gbWF0WzEzXTtcbiAgICBvdXRbMl0gPSBtYXRbMTRdO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxuICogIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aCBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlXG4gKiAgd2l0aCBhIG5vcm1hbGl6ZWQgUXVhdGVybmlvbiBwYXJhbXRlciwgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlXG4gKiAgdGhlIHNhbWUgYXMgdGhlIHNjYWxpbmcgdmVjdG9yXG4gKiAgb3JpZ2luYWxseSBzdXBwbGllZC5cbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnRcbiAqIEBwYXJhbSAge21hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxpbmcob3V0LCBtYXQpIHtcbiAgICB2YXIgbTExID0gbWF0WzBdLFxuICAgICAgICBtMTIgPSBtYXRbMV0sXG4gICAgICAgIG0xMyA9IG1hdFsyXSxcbiAgICAgICAgbTIxID0gbWF0WzRdLFxuICAgICAgICBtMjIgPSBtYXRbNV0sXG4gICAgICAgIG0yMyA9IG1hdFs2XSxcbiAgICAgICAgbTMxID0gbWF0WzhdLFxuICAgICAgICBtMzIgPSBtYXRbOV0sXG4gICAgICAgIG0zMyA9IG1hdFsxMF07XG5cbiAgICBvdXRbMF0gPSBNYXRoLnNxcnQobTExICogbTExICsgbTEyICogbTEyICsgbTEzICogbTEzKTtcbiAgICBvdXRbMV0gPSBNYXRoLnNxcnQobTIxICogbTIxICsgbTIyICogbTIyICsgbTIzICogbTIzKTtcbiAgICBvdXRbMl0gPSBNYXRoLnNxcnQobTMxICogbTMxICsgbTMyICogbTMyICsgbTMzICogbTMzKTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByb3RhdGlvbmFsIGNvbXBvbmVudFxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXG4gKiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sIHRoZSByZXR1cm5lZCBxdWF0ZXJuaW9uIHdpbGwgYmUgdGhlXG4gKiAgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um90YXRpb24ob3V0LCBtYXQpIHtcbiAgLy8gQWxnb3JpdGhtIHRha2VuIGZyb20gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvUXVhdGVybmlvbi9pbmRleC5odG1cbiAgICB2YXIgdHJhY2UgPSBtYXRbMF0gKyBtYXRbNV0gKyBtYXRbMTBdO1xuICAgIHZhciBTID0gMDtcblxuICAgIGlmICh0cmFjZSA+IDApIHtcbiAgICAgICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgICAgICBvdXRbM10gPSAwLjI1ICogUztcbiAgICAgICAgb3V0WzBdID0gKG1hdFs2XSAtIG1hdFs5XSkgLyBTO1xuICAgICAgICBvdXRbMV0gPSAobWF0WzhdIC0gbWF0WzJdKSAvIFM7XG4gICAgICAgIG91dFsyXSA9IChtYXRbMV0gLSBtYXRbNF0pIC8gUztcbiAgICB9IGVsc2UgaWYgKChtYXRbMF0gPiBtYXRbNV0pICYgKG1hdFswXSA+IG1hdFsxMF0pKSB7XG4gICAgICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzBdIC0gbWF0WzVdIC0gbWF0WzEwXSkgKiAyO1xuICAgICAgICBvdXRbM10gPSAobWF0WzZdIC0gbWF0WzldKSAvIFM7XG4gICAgICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgICAgICBvdXRbMV0gPSAobWF0WzFdICsgbWF0WzRdKSAvIFM7XG4gICAgICAgIG91dFsyXSA9IChtYXRbOF0gKyBtYXRbMl0pIC8gUztcbiAgICB9IGVsc2UgaWYgKG1hdFs1XSA+IG1hdFsxMF0pIHtcbiAgICAgICAgUyA9IE1hdGguc3FydCgxLjAgKyBtYXRbNV0gLSBtYXRbMF0gLSBtYXRbMTBdKSAqIDI7XG4gICAgICAgIG91dFszXSA9IChtYXRbOF0gLSBtYXRbMl0pIC8gUztcbiAgICAgICAgb3V0WzBdID0gKG1hdFsxXSArIG1hdFs0XSkgLyBTO1xuICAgICAgICBvdXRbMV0gPSAwLjI1ICogUztcbiAgICAgICAgb3V0WzJdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzEwXSAtIG1hdFswXSAtIG1hdFs1XSkgKiAyO1xuICAgICAgICBvdXRbM10gPSAobWF0WzFdIC0gbWF0WzRdKSAvIFM7XG4gICAgICAgIG91dFswXSA9IChtYXRbOF0gKyBtYXRbMl0pIC8gUztcbiAgICAgICAgb3V0WzFdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICAgICAgICBvdXRbMl0gPSAwLjI1ICogUztcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24sIHZlY3RvciB0cmFuc2xhdGlvbiBhbmQgdmVjdG9yIHNjYWxlXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIHZhciBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIHNjYWxlKVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBzIFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlKG91dCwgcSwgdiwgcykge1xuICAgIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyLFxuICAgICAgICBzeCA9IHNbMF0sXG4gICAgICAgIHN5ID0gc1sxXSxcbiAgICAgICAgc3ogPSBzWzJdO1xuXG4gICAgb3V0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gICAgb3V0WzFdID0gKHh5ICsgd3opICogc3g7XG4gICAgb3V0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAoeHkgLSB3eikgKiBzeTtcbiAgICBvdXRbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgICBvdXRbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9ICh4eiArIHd5KSAqIHN6O1xuICAgIG91dFs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICAgIG91dFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiwgdmVjdG9yIHRyYW5zbGF0aW9uIGFuZCB2ZWN0b3Igc2NhbGUsIHJvdGF0aW5nIGFuZCBzY2FsaW5nIGFyb3VuZCB0aGUgZ2l2ZW4gb3JpZ2luXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG9yaWdpbik7XG4gKiAgICAgdmFyIHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgc2NhbGUpXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgbmVnYXRpdmVPcmlnaW4pO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBzIFNjYWxpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IG8gVGhlIG9yaWdpbiB2ZWN0b3IgYXJvdW5kIHdoaWNoIHRvIHNjYWxlIGFuZCByb3RhdGVcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVPcmlnaW4ob3V0LCBxLCB2LCBzLCBvKSB7XG4gIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyLFxuXG4gICAgICAgIHN4ID0gc1swXSxcbiAgICAgICAgc3kgPSBzWzFdLFxuICAgICAgICBzeiA9IHNbMl0sXG5cbiAgICAgICAgb3ggPSBvWzBdLFxuICAgICAgICBveSA9IG9bMV0sXG4gICAgICAgIG96ID0gb1syXTtcblxuICAgIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICAgIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICAgIG91dFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gICAgb3V0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gICAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF0gKyBveCAtIChvdXRbMF0gKiBveCArIG91dFs0XSAqIG95ICsgb3V0WzhdICogb3opO1xuICAgIG91dFsxM10gPSB2WzFdICsgb3kgLSAob3V0WzFdICogb3ggKyBvdXRbNV0gKiBveSArIG91dFs5XSAqIG96KTtcbiAgICBvdXRbMTRdID0gdlsyXSArIG96IC0gKG91dFsyXSAqIG94ICsgb3V0WzZdICogb3kgKyBvdXRbMTBdICogb3opO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgNHg0IG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBxIFF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXG4gKlxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB5eCA9IHkgKiB4MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHp4ID0geiAqIHgyLFxuICAgICAgICB6eSA9IHogKiB5MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgICBvdXRbMV0gPSB5eCArIHd6O1xuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcblxuICAgIG91dFs0XSA9IHl4IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzZdID0genkgKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuXG4gICAgb3V0WzhdID0genggKyB3eTtcbiAgICBvdXRbOV0gPSB6eSAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICBvdXRbMTFdID0gMDtcblxuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZydXN0dW0ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KSxcbiAgICAgICAgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAobmVhciAqIDIpICogdGI7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gICAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhciAqIDIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGY7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxuICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHByb2plY3Rpb24gbWF0cmljZXMgdG8gYmUgdXNlZFxuICogd2l0aCB0aGUgc3RpbGwgZXhwZXJpZW1lbnRhbCBXZWJWUiBBUEkuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtPYmplY3R9IGZvdiBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHZhbHVlczogdXBEZWdyZWVzLCBkb3duRGVncmVlcywgbGVmdERlZ3JlZXMsIHJpZ2h0RGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3KG91dCwgZm92LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKSxcbiAgICAgICAgZG93blRhbiA9IE1hdGgudGFuKGZvdi5kb3duRGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCksXG4gICAgICAgIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApLFxuICAgICAgICByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApLFxuICAgICAgICB4U2NhbGUgPSAyLjAgLyAobGVmdFRhbiArIHJpZ2h0VGFuKSxcbiAgICAgICAgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG5cbiAgICBvdXRbMF0gPSB4U2NhbGU7XG4gICAgb3V0WzFdID0gMC4wO1xuICAgIG91dFsyXSA9IDAuMDtcbiAgICBvdXRbM10gPSAwLjA7XG4gICAgb3V0WzRdID0gMC4wO1xuICAgIG91dFs1XSA9IHlTY2FsZTtcbiAgICBvdXRbNl0gPSAwLjA7XG4gICAgb3V0WzddID0gMC4wO1xuICAgIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICAgIG91dFs5XSA9ICgodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTFdID0gLTEuMDtcbiAgICBvdXRbMTJdID0gMC4wO1xuICAgIG91dFsxM10gPSAwLjA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTVdID0gMC4wO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ydGhvKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCksXG4gICAgICAgIGJ0ID0gMSAvIChib3R0b20gLSB0b3ApLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gLTIgKiBscjtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IC0yICogYnQ7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMiAqIG5mO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICAgIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICAgIG91dFsxNF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxvb2stYXQgbWF0cml4IHdpdGggdGhlIGdpdmVuIGV5ZSBwb3NpdGlvbiwgZm9jYWwgcG9pbnQsIGFuZCB1cCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsZW4sXG4gICAgICAgIGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl0sXG4gICAgICAgIGNlbnRlcnggPSBjZW50ZXJbMF0sXG4gICAgICAgIGNlbnRlcnkgPSBjZW50ZXJbMV0sXG4gICAgICAgIGNlbnRlcnogPSBjZW50ZXJbMl07XG5cbiAgICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpID09PSAwICYmXG4gICAgICAgIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA9PT0gMCAmJlxuICAgICAgICBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5KG91dCk7XG4gICAgfVxuXG4gICAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICAgIHoyID0gZXlleiAtIGNlbnRlcno7XG5cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG5cbiAgICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB4MCA9IDA7XG4gICAgICAgIHgxID0gMDtcbiAgICAgICAgeDIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHgwICo9IGxlbjtcbiAgICAgICAgeDEgKj0gbGVuO1xuICAgICAgICB4MiAqPSBsZW47XG4gICAgfVxuXG4gICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG5cbiAgICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB5MCA9IDA7XG4gICAgICAgIHkxID0gMDtcbiAgICAgICAgeTIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHkwICo9IGxlbjtcbiAgICAgICAgeTEgKj0gbGVuO1xuICAgICAgICB5MiAqPSBsZW47XG4gICAgfVxuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geTA7XG4gICAgb3V0WzJdID0gejA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4MTtcbiAgICBvdXRbNV0gPSB5MTtcbiAgICBvdXRbNl0gPSB6MTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHgyO1xuICAgIG91dFs5XSA9IHkyO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICAgIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gICAgb3V0WzE0XSA9IC0oejAgKiBleWV4ICsgejEgKiBleWV5ICsgejIgKiBleWV6KTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gICAgcmV0dXJuICdtYXQ0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbNF0gKyAnLCAnICsgYVs1XSArICcsICcgKyBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs4XSArICcsICcgKyBhWzldICsgJywgJyArIGFbMTBdICsgJywgJyArIGFbMTFdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbMTJdICsgJywgJyArIGFbMTNdICsgJywgJyArIGFbMTRdICsgJywgJyArIGFbMTVdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gICAgcmV0dXJuIChNYXRoLnNxcnQoTWF0aC5wb3coYVswXSwgMikgKyBNYXRoLnBvdyhhWzFdLCAyKSArIE1hdGgucG93KGFbMl0sIDIpICsgTWF0aC5wb3coYVszXSwgMikgKyBNYXRoLnBvdyhhWzRdLCAyKSArIE1hdGgucG93KGFbNV0sIDIpICsgTWF0aC5wb3coYVs2XSwgMikgKyBNYXRoLnBvdyhhWzddLCAyKSArIE1hdGgucG93KGFbOF0sIDIpICsgTWF0aC5wb3coYVs5XSwgMikgKyBNYXRoLnBvdyhhWzEwXSwgMikgKyBNYXRoLnBvdyhhWzExXSwgMikgKyBNYXRoLnBvdyhhWzEyXSwgMikgKyBNYXRoLnBvdyhhWzEzXSwgMikgKyBNYXRoLnBvdyhhWzE0XSwgMikgKyBNYXRoLnBvdyhhWzE1XSwgMikpKTtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQ0J3NcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSArIGJbM107XG4gICAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gICAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gICAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gICAgb3V0WzddID0gYVs3XSArIGJbN107XG4gICAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gICAgb3V0WzldID0gYVs5XSArIGJbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdICsgYlsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdICsgYlsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdICsgYlsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdICsgYlsxNV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICAgIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICAgIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICAgIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICAgIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICAgIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICAgIG91dFs5XSA9IGFbOV0gLSBiWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXSAtIGJbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXSAtIGJbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXSAtIGJbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXSAtIGJbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XSAtIGJbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XSAtIGJbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQ0LnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3VidHJhY3QgYXMgc3VifTtcblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIG91dFsyXSA9IGFbMl0gKiBiO1xuICAgIG91dFszXSA9IGFbM10gKiBiO1xuICAgIG91dFs0XSA9IGFbNF0gKiBiO1xuICAgIG91dFs1XSA9IGFbNV0gKiBiO1xuICAgIG91dFs2XSA9IGFbNl0gKiBiO1xuICAgIG91dFs3XSA9IGFbN10gKiBiO1xuICAgIG91dFs4XSA9IGFbOF0gKiBiO1xuICAgIG91dFs5XSA9IGFbOV0gKiBiO1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gICAgb3V0WzExXSA9IGFbMTFdICogYjtcbiAgICBvdXRbMTJdID0gYVsxMl0gKiBiO1xuICAgIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gICAgb3V0WzE0XSA9IGFbMTRdICogYjtcbiAgICBvdXRbMTVdID0gYVsxNV0gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0NCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpO1xuICAgIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgICBvdXRbM10gPSBhWzNdICsgKGJbM10gKiBzY2FsZSk7XG4gICAgb3V0WzRdID0gYVs0XSArIChiWzRdICogc2NhbGUpO1xuICAgIG91dFs1XSA9IGFbNV0gKyAoYls1XSAqIHNjYWxlKTtcbiAgICBvdXRbNl0gPSBhWzZdICsgKGJbNl0gKiBzY2FsZSk7XG4gICAgb3V0WzddID0gYVs3XSArIChiWzddICogc2NhbGUpO1xuICAgIG91dFs4XSA9IGFbOF0gKyAoYls4XSAqIHNjYWxlKTtcbiAgICBvdXRbOV0gPSBhWzldICsgKGJbOV0gKiBzY2FsZSk7XG4gICAgb3V0WzEwXSA9IGFbMTBdICsgKGJbMTBdICogc2NhbGUpO1xuICAgIG91dFsxMV0gPSBhWzExXSArIChiWzExXSAqIHNjYWxlKTtcbiAgICBvdXRbMTJdID0gYVsxMl0gKyAoYlsxMl0gKiBzY2FsZSk7XG4gICAgb3V0WzEzXSA9IGFbMTNdICsgKGJbMTNdICogc2NhbGUpO1xuICAgIG91dFsxNF0gPSBhWzE0XSArIChiWzE0XSAqIHNjYWxlKTtcbiAgICBvdXRbMTVdID0gYVsxNV0gKyAoYlsxNV0gKiBzY2FsZSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmXG4gICAgICAgICAgIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiZcbiAgICAgICAgICAgYVs4XSA9PT0gYls4XSAmJiBhWzldID09PSBiWzldICYmIGFbMTBdID09PSBiWzEwXSAmJiBhWzExXSA9PT0gYlsxMV0gJiZcbiAgICAgICAgICAgYVsxMl0gPT09IGJbMTJdICYmIGFbMTNdID09PSBiWzEzXSAmJiBhWzE0XSA9PT0gYlsxNF0gJiYgYVsxNV0gPT09IGJbMTVdO1xufVxuIiwiLyoqXG4gKiBAbmFtZSB2ZWMzXG4gKiBAY2xhc3MgMyBEaW1lbnNpb25hbCBWZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6KSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gICAgb3V0WzBdID0geDtcbiAgICBvdXRbMV0gPSB5O1xuICAgIG91dFsyXSA9IHo7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gICAgb3V0WzBdID0geDtcbiAgICBvdXRbMV0gPSB5O1xuICAgIG91dFsyXSA9IHo7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3VidHJhY3QgYXMgc3VifTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge211bHRpcGx5IGFzIG11bH07XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpdmlkZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2RpdmlkZSBhcyBkaXZ9O1xuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICAgIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5jZWlsKGFbMl0pO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gTWF0aC5mbG9vcihhWzBdKTtcbiAgICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICAgIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICAgIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpO1xuICAgIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHtkaXN0YW5jZSBhcyBkaXN0fTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdO1xuICAgIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWREaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3NxdWFyZWREaXN0YW5jZSBhcyBzcXJEaXN0fTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2xlbmd0aCBhcyBsZW59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3F1YXJlZExlbmd0aCBhcyBzcXJMZW59O1xuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF07XG4gICAgb3V0WzFdID0gLWFbMV07XG4gICAgb3V0WzJdID0gLWFbMl07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICAgIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gICAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXTtcbiAgICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6O1xuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICAgICAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgICAgICAgb3V0WzFdID0gYVsxXSAqIGxlbjtcbiAgICAgICAgb3V0WzJdID0gYVsyXSAqIGxlbjtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICAgIHZhciBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLFxuICAgICAgICBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdO1xuXG4gICAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnk7XG4gICAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYno7XG4gICAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYng7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgdmFyIGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl07XG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gICAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGhlcm1pdGUgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVybWl0ZShvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgICB2YXIgZmFjdG9yVGltZXMyID0gdCAqIHQsXG4gICAgICAgIGZhY3RvcjEgPSBmYWN0b3JUaW1lczIgKiAoMiAqIHQgLSAzKSArIDEsXG4gICAgICAgIGZhY3RvcjIgPSBmYWN0b3JUaW1lczIgKiAodCAtIDIpICsgdCxcbiAgICAgICAgZmFjdG9yMyA9IGZhY3RvclRpbWVzMiAqICh0IC0gMSksXG4gICAgICAgIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiAoMyAtIDIgKiB0KTtcblxuICAgIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICAgIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICAgIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGJlemllciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZXppZXIob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gICAgdmFyIGludmVyc2VGYWN0b3IgPSAxIC0gdCxcbiAgICAgICAgaW52ZXJzZUZhY3RvclRpbWVzVHdvID0gaW52ZXJzZUZhY3RvciAqIGludmVyc2VGYWN0b3IsXG4gICAgICAgIGZhY3RvclRpbWVzMiA9IHQgKiB0LFxuICAgICAgICBmYWN0b3IxID0gaW52ZXJzZUZhY3RvclRpbWVzVHdvICogaW52ZXJzZUZhY3RvcixcbiAgICAgICAgZmFjdG9yMiA9IDMgKiB0ICogaW52ZXJzZUZhY3RvclRpbWVzVHdvLFxuICAgICAgICBmYWN0b3IzID0gMyAqIGZhY3RvclRpbWVzMiAqIGludmVyc2VGYWN0b3IsXG4gICAgICAgIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiB0O1xuXG4gICAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gICAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gICAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMS4wO1xuXG4gICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMi4wICogTWF0aC5QSTtcbiAgICB2YXIgeiA9IChNYXRoLnJhbmRvbSgpICogMi4wKSAtIDEuMDtcbiAgICB2YXIgelNjYWxlID0gTWF0aC5zcXJ0KDEuMCAtIHogKiB6KSAqIHNjYWxlO1xuXG4gICAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGU7XG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiB6U2NhbGU7XG4gICAgb3V0WzJdID0geiAqIHNjYWxlO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSxcbiAgICAgICAgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XTtcbiAgICB3ID0gdyB8fCAxLjA7XG4gICAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHc7XG4gICAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gICAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSkgLyB3O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl07XG4gICAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdO1xuICAgIG91dFsxXSA9IHggKiBtWzFdICsgeSAqIG1bNF0gKyB6ICogbVs3XTtcbiAgICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtxdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gICAgLy8gYmVuY2htYXJrczogaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnNcblxuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICAgICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgICAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICAgICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6O1xuXG4gICAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICAgIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG4gICAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgYykge1xuICAgIHZhciBwID0gW10sIHIgPSBbXTtcbiAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBwWzJdID0gYVsyXSAtIGJbMl07XG5cbiAgICAvL3BlcmZvcm0gcm90YXRpb25cbiAgICByWzBdID0gcFswXTtcbiAgICByWzFdID0gcFsxXSAqIE1hdGguY29zKGMpIC0gcFsyXSAqIE1hdGguc2luKGMpO1xuICAgIHJbMl0gPSBwWzFdICogTWF0aC5zaW4oYykgKyBwWzJdICogTWF0aC5jb3MoYyk7XG5cbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF07XG4gICAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gICAgb3V0WzJdID0gclsyXSArIGJbMl07XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIGMpIHtcbiAgICB2YXIgcCA9IFtdLCByID0gW107XG4gICAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBwWzFdID0gYVsxXSAtIGJbMV07XG4gICAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMl0gKiBNYXRoLnNpbihjKSArIHBbMF0gKiBNYXRoLmNvcyhjKTtcbiAgICByWzFdID0gcFsxXTtcbiAgICByWzJdID0gcFsyXSAqIE1hdGguY29zKGMpIC0gcFswXSAqIE1hdGguc2luKGMpO1xuXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCBiLCBjKSB7XG4gICAgdmFyIHAgPSBbXSwgciA9IFtdO1xuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF07XG4gICAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIHBbMl0gPSBhWzJdIC0gYlsyXTtcblxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzBdICogTWF0aC5jb3MoYykgLSBwWzFdICogTWF0aC5zaW4oYyk7XG4gICAgclsxXSA9IHBbMF0gKiBNYXRoLnNpbihjKSArIHBbMV0gKiBNYXRoLmNvcyhjKTtcbiAgICByWzJdID0gcFsyXTtcblxuICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXTtcblxuICAgIHJldHVybiBvdXQ7XG59XG5cbnZhciB2ZWMgPSBjcmVhdGUoKTtcbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzNzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzMuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgdmFyIGksIGw7XG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgICAgc3RyaWRlID0gMztcbiAgICB9XG5cbiAgICBpZiAoIW9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgICBsID0gTWF0aC5taW4oKGNvdW50ICogc3RyaWRlKSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgICB2ZWNbMF0gPSBhW2ldOyB2ZWNbMV0gPSBhW2kgKyAxXTsgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgICBhW2ldID0gdmVjWzBdOyBhW2kgKyAxXSA9IHZlY1sxXTsgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAzRCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG5cbiAgICB2YXIgdGVtcEEgPSBmcm9tVmFsdWVzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgIHZhciB0ZW1wQiA9IGZyb21WYWx1ZXMoYlswXSwgYlsxXSwgYlsyXSk7XG5cbiAgICBub3JtYWxpemUodGVtcEEsIHRlbXBBKTtcbiAgICBub3JtYWxpemUodGVtcEIsIHRlbXBCKTtcblxuICAgIHZhciBjb3NpbmUgPSBkb3QodGVtcEEsIHRlbXBCKTtcblxuICAgIGlmIChjb3NpbmUgPiAxLjApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSAgICBlbHNlIGlmIChjb3NpbmUgPCAtMS4wKSB7XG4gICAgICAgIHJldHVybiBNYXRoLlBJO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zaW5lKTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ3ZlYzMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbn1cbiIsIi8qKlxuICogQG5hbWUgdmVjNFxuICogQGNsYXNzIDQgRGltZW5zaW9uYWwgVmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWM0XG4gKlxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDQpO1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6LCB3KSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgb3V0WzBdID0geDtcbiAgICBvdXRbMV0gPSB5O1xuICAgIG91dFsyXSA9IHo7XG4gICAgb3V0WzNdID0gdztcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWM0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHosIHcpIHtcbiAgICBvdXRbMF0gPSB4O1xuICAgIG91dFsxXSA9IHk7XG4gICAgb3V0WzJdID0gejtcbiAgICBvdXRbM10gPSB3O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3N1YnRyYWN0IGFzIHN1Yn07XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gICAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gICAgb3V0WzNdID0gYVszXSAqIGJbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHttdWx0aXBseSBhcyBtdWx9O1xuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgICBvdXRbM10gPSBhWzNdIC8gYlszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXZpZGV9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHtkaXZpZGUgYXMgZGl2fTtcblxuLyoqXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2VpbFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICAgIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgICBvdXRbM10gPSBNYXRoLmNlaWwoYVszXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGZsb29yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICAgIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gICAgb3V0WzJdID0gTWF0aC5mbG9vcihhWzJdKTtcbiAgICBvdXRbM10gPSBNYXRoLmZsb29yKGFbM10pO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICAgIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICAgIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICAgIG91dFszXSA9IE1hdGgubWluKGFbM10sIGJbM10pO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICAgIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICAgIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICAgIG91dFszXSA9IE1hdGgubWF4KGFbM10sIGJbM10pO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICAgIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gICAgb3V0WzNdID0gTWF0aC5yb3VuZChhWzNdKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzQgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGI7XG4gICAgb3V0WzFdID0gYVsxXSAqIGI7XG4gICAgb3V0WzJdID0gYVsyXSAqIGI7XG4gICAgb3V0WzNdID0gYVszXSAqIGI7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gayB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBrKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogayk7XG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogayk7XG4gICAgb3V0WzJdID0gYVsyXSArIChiWzJdICogayk7XG4gICAgb3V0WzNdID0gYVszXSArIChiWzNdICogayk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXSxcbiAgICAgICAgdyA9IGJbM10gLSBhWzNdO1xuICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2Rpc3RhbmNlIGFzIGRpc3R9O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl0sXG4gICAgICAgIHcgPSBiWzNdIC0gYVszXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWREaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3NxdWFyZWREaXN0YW5jZSBhcyBzcXJEaXN0fTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXSxcbiAgICAgICAgdyA9IGFbM107XG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0Lmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2xlbmd0aCBhcyBsZW59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXSxcbiAgICAgICAgdyA9IGFbM107XG4gICAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3F1YXJlZExlbmd0aCBhcyBzcXJMZW59O1xuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF07XG4gICAgb3V0WzFdID0gLWFbMV07XG4gICAgb3V0WzJdID0gLWFbMl07XG4gICAgb3V0WzNdID0gLWFbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICAgIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gICAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgICBvdXRbM10gPSAxLjAgLyBhWzNdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdLFxuICAgICAgICB3ID0gYVszXTtcbiAgICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgICAgICBvdXRbMF0gPSB4ICogbGVuO1xuICAgICAgICBvdXRbMV0gPSB5ICogbGVuO1xuICAgICAgICBvdXRbMl0gPSB6ICogbGVuO1xuICAgICAgICBvdXRbM10gPSB3ICogbGVuO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICB2YXIgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV0sXG4gICAgICAgIGF6ID0gYVsyXSxcbiAgICAgICAgYXcgPSBhWzNdO1xuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICAgIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICAgIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICAgIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW2tdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgaykge1xuICAgIGsgPSBrIHx8IDEuMDtcblxuICAgIC8vVE9ETzogVGhpcyBpcyBhIHByZXR0eSBhd2Z1bCB3YXkgb2YgZG9pbmcgdGhpcy4gRmluZCBzb21ldGhpbmcgYmV0dGVyLlxuICAgIG91dFswXSA9IE1hdGgucmFuZG9tKCk7XG4gICAgb3V0WzFdID0gTWF0aC5yYW5kb20oKTtcbiAgICBvdXRbMl0gPSBNYXRoLnJhbmRvbSgpO1xuICAgIG91dFszXSA9IE1hdGgucmFuZG9tKCk7XG4gICAgbm9ybWFsaXplKG91dCwgb3V0KTtcbiAgICBzY2FsZShvdXQsIG91dCwgayk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBtYXQ0LlxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sIHcgPSBhWzNdO1xuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogdztcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSAqIHc7XG4gICAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogdztcbiAgICBvdXRbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICAgICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgICAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICAgICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6O1xuXG4gICAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICAgIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG4gICAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4O1xuICAgIG91dFszXSA9IGFbM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxudmFyIHZlYyA9IGNyZWF0ZSgpO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWM0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWM0LiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjNHMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICAgIHN0cmlkZSA9IDQ7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgdmVjWzBdID0gYVtpXTsgdmVjWzFdID0gYVtpICsgMV07IHZlY1syXSA9IGFbaSArIDJdOyB2ZWNbM10gPSBhW2kgKyAzXTtcbiAgICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICAgIGFbaV0gPSB2ZWNbMF07IGFbaSArIDFdID0gdmVjWzFdOyBhW2kgKyAyXSA9IHZlY1syXTsgYVtpICsgM10gPSB2ZWNbM107XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ3ZlYzQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG4iLCJpbXBvcnQgKiBhcyBtYXQzIGZyb20gJy4vbWF0Myc7XG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gJy4vdmVjMyc7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gJy4vdmVjNCc7XG5cbi8qKlxuICogQG5hbWUgcXVhdFxuICogQGNsYXNzIFF1YXRlcm5pb25cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgcXVhdFxuICpcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0ZXJuaW9uIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbm9ybWFsaXplID0gdmVjNC5ub3JtYWxpemU7XG5cbnZhciB0bXB2ZWMzID0gdmVjMy5jcmVhdGUoKTtcbnZhciB4VW5pdFZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMSwgMCwgMCk7XG52YXIgeVVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDAsIDEsIDApO1xuXG4vKipcbiAqIFNldHMgYSBxdWF0ZXJuaW9uIHRvIHJlcHJlc2VudCB0aGUgc2hvcnRlc3Qgcm90YXRpb24gZnJvbSBvbmVcbiAqIHZlY3RvciB0byBhbm90aGVyLlxuICpcbiAqIEJvdGggdmVjdG9ycyBhcmUgYXNzdW1lZCB0byBiZSB1bml0IGxlbmd0aC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb24uXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGluaXRpYWwgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIGRlc3RpbmF0aW9uIHZlY3RvclxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25UbyhvdXQsIGEsIGIpIHtcbiAgICB2YXIgZG90ID0gdmVjMy5kb3QoYSwgYik7XG4gICAgaWYgKGRvdCA8IC0wLjk5OTk5OSkge1xuICAgICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIHhVbml0VmVjMywgYSk7XG4gICAgICAgIGlmICh2ZWMzLmxlbmd0aCh0bXB2ZWMzKSA8IDAuMDAwMDAxKVxuICAgICAgICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCB5VW5pdFZlYzMsIGEpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh0bXB2ZWMzLCB0bXB2ZWMzKTtcbiAgICAgICAgc2V0QXhpc0FuZ2xlKG91dCwgdG1wdmVjMywgTWF0aC5QSSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBlbHNlIGlmIChkb3QgPiAwLjk5OTk5OSkge1xuICAgICAgICBvdXRbMF0gPSAwO1xuICAgICAgICBvdXRbMV0gPSAwO1xuICAgICAgICBvdXRbMl0gPSAwO1xuICAgICAgICBvdXRbM10gPSAxO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgYSwgYik7XG4gICAgICAgIG91dFswXSA9IHRtcHZlYzNbMF07XG4gICAgICAgIG91dFsxXSA9IHRtcHZlYzNbMV07XG4gICAgICAgIG91dFsyXSA9IHRtcHZlYzNbMl07XG4gICAgICAgIG91dFszXSA9IDEgKyBkb3Q7XG4gICAgICAgIHJldHVybiBub3JtYWxpemUob3V0LCBvdXQpO1xuICAgIH1cbn1cblxudmFyIG1hdHIgPSBtYXQzLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBxdWF0ZXJuaW9uIHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuXG4gKiBheGVzLiBFYWNoIGF4aXMgaXMgYSB2ZWMzIGFuZCBpcyBleHBlY3RlZCB0byBiZSB1bml0IGxlbmd0aCBhbmRcbiAqIHBlcnBlbmRpY3VsYXIgdG8gYWxsIG90aGVyIHNwZWNpZmllZCBheGVzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gdmlldyAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIHZpZXdpbmcgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHJpZ2h0IHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInJpZ2h0XCIgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHVwICAgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInVwXCIgZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBeGVzKG91dCwgdmlldywgcmlnaHQsIHVwKSB7XG4gICAgbWF0clswXSA9IHJpZ2h0WzBdO1xuICAgIG1hdHJbM10gPSByaWdodFsxXTtcbiAgICBtYXRyWzZdID0gcmlnaHRbMl07XG5cbiAgICBtYXRyWzFdID0gdXBbMF07XG4gICAgbWF0cls0XSA9IHVwWzFdO1xuICAgIG1hdHJbN10gPSB1cFsyXTtcblxuICAgIG1hdHJbMl0gPSAtdmlld1swXTtcbiAgICBtYXRyWzVdID0gLXZpZXdbMV07XG4gICAgbWF0cls4XSA9IC12aWV3WzJdO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIGZyb21NYXQzKG91dCwgbWF0cikpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcXVhdCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdGVybmlvbiB0byBjbG9uZVxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGNsb25lID0gdmVjNC5jbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBmcm9tVmFsdWVzID0gdmVjNC5mcm9tVmFsdWVzO1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBxdWF0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgc291cmNlIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGNvcHkgPSB2ZWM0LmNvcHk7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgcXVhdCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgc2V0ID0gdmVjNC5zZXQ7XG5cbi8qKlxuICogU2V0IGEgcXVhdCB0byB0aGUgaWRlbnRpdHkgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldHMgYSBxdWF0IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFuZCByb3RhdGlvbiBheGlzLFxuICogdGhlbiByZXR1cm5zIGl0LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBeGlzQW5nbGUob3V0LCBheGlzLCByYWQpIHtcbiAgICByYWQgPSByYWQgKiAwLjU7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIG91dFswXSA9IHMgKiBheGlzWzBdO1xuICAgIG91dFsxXSA9IHMgKiBheGlzWzFdO1xuICAgIG91dFsyXSA9IHMgKiBheGlzWzJdO1xuICAgIG91dFszXSA9IE1hdGguY29zKHJhZCk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSByb3RhdGlvbiBheGlzIGFuZCBhbmdsZSBmb3IgYSBnaXZlblxuICogIHF1YXRlcm5pb24uIElmIGEgcXVhdGVybmlvbiBpcyBjcmVhdGVkIHdpdGhcbiAqICBzZXRBeGlzQW5nbGUsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIHRoZSBzYW1lXG4gKiAgdmFsdWVzIGFzIHByb3ZpZGllZCBpbiB0aGUgb3JpZ2luYWwgcGFyYW1ldGVyIGxpc3RcbiAqICBPUiBmdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB2YWx1ZXMuXG4gKiBFeGFtcGxlOiBUaGUgcXVhdGVybmlvbiBmb3JtZWQgYnkgYXhpcyBbMCwgMCwgMV0gYW5kXG4gKiAgYW5nbGUgLTkwIGlzIHRoZSBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIGZvcm1lZCBieVxuICogIFswLCAwLCAxXSBhbmQgMjcwLiBUaGlzIG1ldGhvZCBmYXZvcnMgdGhlIGxhdHRlci5cbiAqIEBwYXJhbSAge3ZlYzN9IG91dCAgVmVjdG9yIHJlY2VpdmluZyB0aGUgYXhpcyBvZiByb3RhdGlvblxuICogQHBhcmFtICB7cXVhdH0gcSAgICAgUXVhdGVybmlvbiB0byBiZSBkZWNvbXBvc2VkXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBBbmdsZSwgaW4gcmFkaWFucywgb2YgdGhlIHJvdGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBeGlzQW5nbGUob3V0LCBxKSB7XG4gICAgdmFyIHJhZCA9IE1hdGguYWNvcyhxWzNdKSAqIDIuMDtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCAvIDIuMCk7XG4gICAgaWYgKHMgIT09IDAuMCkge1xuICAgICAgICBvdXRbMF0gPSBxWzBdIC8gcztcbiAgICAgICAgb3V0WzFdID0gcVsxXSAvIHM7XG4gICAgICAgIG91dFsyXSA9IHFbMl0gLyBzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHMgaXMgemVybywgcmV0dXJuIGFueSBheGlzIChubyByb3RhdGlvbiAtIGF4aXMgZG9lcyBub3QgbWF0dGVyKVxuICAgICAgICBvdXRbMF0gPSAxO1xuICAgICAgICBvdXRbMV0gPSAwO1xuICAgICAgICBvdXRbMl0gPSAwO1xuICAgIH1cbiAgICByZXR1cm4gcmFkO1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBhZGQgPSB2ZWM0LmFkZDtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgdmFyIGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sIGF3ID0gYVszXSxcbiAgICAgICAgYnggPSBiWzBdLCBieSA9IGJbMV0sIGJ6ID0gYlsyXSwgYncgPSBiWzNdO1xuXG4gICAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XG4gICAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge211bHRpcGx5IGFzIG11bH07XG5cbi8qKlxuICogU2NhbGVzIGEgcXVhdCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzY2FsZSA9IHZlYzQuc2NhbGU7XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdLFxuICAgICAgICBieCA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgKyBhdyAqIGJ4O1xuICAgIG91dFsxXSA9IGF5ICogYncgKyBheiAqIGJ4O1xuICAgIG91dFsyXSA9IGF6ICogYncgLSBheSAqIGJ4O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheCAqIGJ4O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdLFxuICAgICAgICBieSA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgLSBheiAqIGJ5O1xuICAgIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBheCAqIGJ5O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheSAqIGJ5O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICAgIHJhZCAqPSAwLjU7XG5cbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdLFxuICAgICAgICBieiA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICAgIG91dFswXSA9IGF4ICogYncgKyBheSAqIGJ6O1xuICAgIG91dFsxXSA9IGF5ICogYncgLSBheCAqIGJ6O1xuICAgIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6O1xuICAgIG91dFszXSA9IGF3ICogYncgLSBheiAqIGJ6O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgVyBjb21wb25lbnQgb2YgYSBxdWF0IGZyb20gdGhlIFgsIFksIGFuZCBaIGNvbXBvbmVudHMuXG4gKiBBc3N1bWVzIHRoYXQgcXVhdGVybmlvbiBpcyAxIHVuaXQgaW4gbGVuZ3RoLlxuICogQW55IGV4aXN0aW5nIFcgY29tcG9uZW50IHdpbGwgYmUgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBXIGNvbXBvbmVudCBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVyhvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXTtcblxuICAgIG91dFswXSA9IHg7XG4gICAgb3V0WzFdID0geTtcbiAgICBvdXRbMl0gPSB6O1xuICAgIG91dFszXSA9IE1hdGguc3FydChNYXRoLmFicygxLjAgLSB4ICogeCAtIHkgKiB5IC0geiAqIHopKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGRvdCA9IHZlYzQuZG90O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIGxlcnAgPSB2ZWM0LmxlcnA7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICAvLyBiZW5jaG1hcmtzOlxuICAgIC8vICAgIGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tc2xlcnAtaW1wbGVtZW50YXRpb25zXG5cbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdLFxuICAgICAgICBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdLCBidyA9IGJbM107XG5cbiAgICB2YXIgICAgICAgIG9tZWdhLCBjb3NvbSwgc2lub20sIHNjYWxlMCwgc2NhbGUxO1xuXG4gICAgLy8gY2FsYyBjb3NpbmVcbiAgICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7XG4gICAgLy8gYWRqdXN0IHNpZ25zIChpZiBuZWNlc3NhcnkpXG4gICAgaWYgKGNvc29tIDwgMC4wKSB7XG4gICAgICAgIGNvc29tID0gLWNvc29tO1xuICAgICAgICBieCA9IC1ieDtcbiAgICAgICAgYnkgPSAtYnk7XG4gICAgICAgIGJ6ID0gLWJ6O1xuICAgICAgICBidyA9IC1idztcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGNvZWZmaWNpZW50c1xuICAgIGlmICgoMS4wIC0gY29zb20pID4gMC4wMDAwMDEpIHtcbiAgICAgICAgLy8gc3RhbmRhcmQgY2FzZSAoc2xlcnApXG4gICAgICAgIG9tZWdhICA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgICAgIHNpbm9tICA9IE1hdGguc2luKG9tZWdhKTtcbiAgICAgICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgICAgIHNjYWxlMSA9IE1hdGguc2luKHQgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcImZyb21cIiBhbmQgXCJ0b1wiIHF1YXRlcm5pb25zIGFyZSB2ZXJ5IGNsb3NlXG4gICAgICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cbiAgICAgICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICAgICAgc2NhbGUxID0gdDtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xuICAgIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gICAgb3V0WzFdID0gc2NhbGUwICogYXkgKyBzY2FsZTEgKiBieTtcbiAgICBvdXRbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6O1xuICAgIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG52YXIgdGVtcDEgPSBjcmVhdGUoKTtcbnZhciB0ZW1wMiA9IGNyZWF0ZSgpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnRcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxbGVycChvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgICBzbGVycCh0ZW1wMSwgYSwgZCwgdCk7XG4gICAgc2xlcnAodGVtcDIsIGIsIGMsIHQpO1xuICAgIHNsZXJwKG91dCwgdGVtcDEsIHRlbXAyLCAyICogdCAqICgxIC0gdCkpO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSxcbiAgICAgICAgZG90ID0gYTAgKiBhMCArIGExICogYTEgKyBhMiAqIGEyICsgYTMgKiBhMyxcbiAgICAgICAgaW52RG90ID0gZG90ID8gMS4wIC8gZG90IDogMDtcblxuICAgIC8vIFRPRE86IFdvdWxkIGJlIGZhc3RlciB0byByZXR1cm4gWzAsMCwwLDBdIGltbWVkaWF0ZWx5IGlmIGRvdCA9PSAwXG5cbiAgICBvdXRbMF0gPSAtYTAgKiBpbnZEb3Q7XG4gICAgb3V0WzFdID0gLWExICogaW52RG90O1xuICAgIG91dFsyXSA9IC1hMiAqIGludkRvdDtcbiAgICBvdXRbM10gPSBhMyAqIGludkRvdDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIHF1YXRcbiAqIElmIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdC5pbnZlcnNlIGFuZCBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgY29uanVnYXRlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25qdWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF07XG4gICAgb3V0WzFdID0gLWFbMV07XG4gICAgb3V0WzJdID0gLWFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBsZW5ndGggPSB2ZWM0Lmxlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB2YXIgbGVuID0gdmVjNC5sZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIHNxdWFyZWRMZW5ndGggPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0LnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHZhciBzcXJMZW4gPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gM3gzIHJvdGF0aW9uIG1hdHJpeC5cbiAqXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxuICogdG8gcmVub3JtYWxpemUgdGhlIHF1YXRlcm5pb24geW91cnNlbGYgd2hlcmUgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHttYXQzfSBtIHJvdGF0aW9uIG1hdHJpeFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MyhvdXQsIG0pIHtcbiAgICAvLyBBbGdvcml0aG0gaW4gS2VuIFNob2VtYWtlJ3MgYXJ0aWNsZSBpbiAxOTg3IFNJR0dSQVBIIGNvdXJzZSBub3Rlc1xuICAgIC8vIGFydGljbGUgXCJRdWF0ZXJuaW9uIENhbGN1bHVzIGFuZCBGYXN0IEFuaW1hdGlvblwiLlxuICAgIHZhciBmVHJhY2UgPSBtWzBdICsgbVs0XSArIG1bOF07XG4gICAgdmFyIGZSb290O1xuXG4gICAgaWYgKGZUcmFjZSA+IDAuMCkge1xuICAgICAgICAvLyB8d3wgPiAxLzIsIG1heSBhcyB3ZWxsIGNob29zZSB3ID4gMS8yXG4gICAgICAgIGZSb290ID0gTWF0aC5zcXJ0KGZUcmFjZSArIDEuMCk7ICAvLyAyd1xuICAgICAgICBvdXRbM10gPSAwLjUgKiBmUm9vdDtcbiAgICAgICAgZlJvb3QgPSAwLjUgLyBmUm9vdDsgIC8vIDEvKDR3KVxuICAgICAgICBvdXRbMF0gPSAobVs1XSAtIG1bN10pICogZlJvb3Q7XG4gICAgICAgIG91dFsxXSA9IChtWzZdIC0gbVsyXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0WzJdID0gKG1bMV0gLSBtWzNdKSAqIGZSb290O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHx3fCA8PSAxLzJcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBpZiAobVs0XSA+IG1bMF0pXG4gICAgICAgICAgICBpID0gMTtcbiAgICAgICAgaWYgKG1bOF0gPiBtW2kgKiAzICsgaV0pXG4gICAgICAgICAgICBpID0gMjtcbiAgICAgICAgdmFyIGogPSAoaSArIDEpICUgMztcbiAgICAgICAgdmFyIGsgPSAoaSArIDIpICUgMztcblxuICAgICAgICBmUm9vdCA9IE1hdGguc3FydChtW2kgKiAzICsgaV0gLSBtW2ogKiAzICsgal0gLSBtW2sgKiAzICsga10gKyAxLjApO1xuICAgICAgICBvdXRbaV0gPSAwLjUgKiBmUm9vdDtcbiAgICAgICAgZlJvb3QgPSAwLjUgLyBmUm9vdDtcbiAgICAgICAgb3V0WzNdID0gKG1baiAqIDMgKyBrXSAtIG1bayAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0W2pdID0gKG1baiAqIDMgKyBpXSArIG1baSAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICAgICAgb3V0W2tdID0gKG1bayAqIDMgKyBpXSArIG1baSAqIDMgKyBrXSkgKiBmUm9vdDtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBxdWF0ZW5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gICAgcmV0dXJuICdxdWF0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7cXVhdH0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgdmFyIGVxdWFscyA9IHZlYzQuZXF1YWxzO1xuIiwiLyoqXG4gKiBAbmFtZSB2ZWMyXG4gKiBAY2xhc3MgMiBEaW1lbnNpb25hbCBWZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzJcbiAqXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMik7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgIG91dFswXSA9IHg7XG4gICAgb3V0WzFdID0geTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMyIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzIgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHkpIHtcbiAgICBvdXRbMF0gPSB4O1xuICAgIG91dFsxXSA9IHk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB7c3VidHJhY3QgYXMgc3VifTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge211bHRpcGx5IGFzIG11bH07XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLmRpdmlkZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2RpdmlkZSBhcyBkaXZ9O1xuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICAgIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGZsb29yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICAgIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gICAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICAgIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMyIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiO1xuICAgIG91dFsxXSA9IGFbMV0gKiBiO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMidzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICAgIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge2Rpc3RhbmNlIGFzIGRpc3R9O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdO1xuICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5zcXVhcmVkRGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHtzcXVhcmVkRGlzdGFuY2UgYXMgc3FyRGlzdH07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5sZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHtsZW5ndGggYXMgbGVufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXTtcbiAgICByZXR1cm4geCAqIHggKyB5ICogeTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZExlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQge3NxdWFyZWRMZW5ndGggYXMgc3FyTGVufTtcblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdO1xuICAgIG91dFsxXSA9IC1hWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV07XG4gICAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHk7XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgICAgICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICAgICAgICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICogTm90ZSB0aGF0IHRoZSBjcm9zcyBwcm9kdWN0IG11c3QgYnkgZGVmaW5pdGlvbiBwcm9kdWNlIGEgM0QgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICAgIG91dFswXSA9IG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gejtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICB2YXIgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV07XG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAyLjAgKiBNYXRoLlBJO1xuICAgIG91dFswXSA9IE1hdGguY29zKHIpICogc2NhbGU7XG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiBzY2FsZTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV07XG4gICAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5O1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJkfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MmQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXTtcbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bMl0gKiB5ICsgbVs0XTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDNcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQzfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdO1xuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdO1xuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0NFxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdO1xuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXTtcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVsxM107XG4gICAgcmV0dXJuIG91dDtcbn1cblxudmFyIHZlYyA9IGNyZWF0ZSgpO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMyLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICAgIHN0cmlkZSA9IDI7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY291bnQpIHtcbiAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgdmVjWzBdID0gYVtpXTsgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgICBhW2ldID0gdmVjWzBdOyBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICAgIHJldHVybiAndmVjMignICsgYVswXSArICcsICcgKyBhWzFdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgZXhhY3RseSBoYXZlIHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWMyfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV07XG59XG4iLCJpbXBvcnQgKiBhcyBtYXB0YWxrcyBmcm9tICdtYXB0YWxrcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBtYXB0YWxrcy5DbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZ2wsIG1hcCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRab29tKG1hcCkge1xuICAgIHJldHVybiBtYXAuZ2V0TWF4TmF0aXZlWm9vbSgpIC8gMjtcbn1cbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcbmltcG9ydCB7IG1hdDQgfSBmcm9tICdAbWFwYm94L2dsLW1hdHJpeCc7XG5pbXBvcnQgeyBnZXRUYXJnZXRab29tIH0gZnJvbSAnLi9wYWludGVyL1BhaW50ZXInO1xuXG5jb25zdCBSQURJQU4gPSBNYXRoLlBJIC8gMTgwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJnbFJlbmRlcmVyIGV4dGVuZHMgbWFwdGFsa3MucmVuZGVyZXIuQ2FudmFzUmVuZGVyZXIge1xuXG4gICAgbmVlZFRvUmVkcmF3KCkge1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICBpZiAobWFwLmlzWm9vbWluZygpICYmICFtYXAuZ2V0UGl0Y2goKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5uZWVkVG9SZWRyYXcoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRNYXAoKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IG1hcC5nZXRTaXplKCk7XG4gICAgICAgIGNvbnN0IHIgPSBtYXB0YWxrcy5Ccm93c2VyLnJldGluYSA/IDIgOiAxO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG1hcHRhbGtzLkNhbnZhcy5jcmVhdGVDYW52YXMociAqIHNpemVbJ3dpZHRoJ10sIHIgKiBzaXplWydoZWlnaHQnXSwgbWFwLkNhbnZhc0NsYXNzKTtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsID0gdGhpcy5fY3JlYXRlR0xDb250ZXh0KHRoaXMuY2FudmFzLCB0aGlzLmxheWVyLm9wdGlvbnNbJ2dsT3B0aW9ucyddKTtcbiAgICAgICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAwLjApO1xuICAgICAgICAvLyBnbC5ibGVuZEZ1bmNTZXBhcmF0ZSggZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIGdsLlpFUk8sIGdsLk9ORSApO1xuICAgICAgICAvL1xuICAgICAgICBnbC52ZXJib3NlID0gdHJ1ZTtcblxuICAgICAgICAvLyBnbC5ibGVuZEZ1bmMoZ2wuT05FLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcbiAgICAgICAgLy8gZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FKTtcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLk9ORSwgZ2wuT05FKTtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICAgICAgZ2wuZGlzYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMub25DYW52YXNDcmVhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub25DYW52YXNDcmVhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxheWVyLm9wdGlvbnNbJ2RvdWJsZUJ1ZmZlciddKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG1hcHRhbGtzLkNhbnZhcy5jcmVhdGVDYW52YXModGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgbWFwLkNhbnZhc0NsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuYnVmZmVyLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemVDYW52YXMoY2FudmFzU2l6ZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNpemU7XG4gICAgICAgIGlmICghY2FudmFzU2l6ZSkge1xuICAgICAgICAgICAgc2l6ZSA9IHRoaXMuZ2V0TWFwKCkuZ2V0U2l6ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2l6ZSA9IGNhbnZhc1NpemU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IG1hcHRhbGtzLkJyb3dzZXIucmV0aW5hID8gMiA6IDE7XG4gICAgICAgIC8vcmV0aW5hIHN1cHBvcnRcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gciAqIHNpemVbJ2hlaWdodCddO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHIgKiBzaXplWyd3aWR0aCddO1xuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQpO1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlcGFyZUNhbnZhcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgLy8gdGhlIGxheWVyIGlzIGRvdWJsZSBidWZmZXJlZCwgY2xpcCB0aGUgY2FudmFzIHdpdGggbGF5ZXIncyBtYXNrLlxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnByZXBhcmVDYW52YXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIuZmlyZSgncmVuZGVyc3RhcnQnLCB7ICdjb250ZXh0JyA6IHRoaXMuY29udGV4dCwgJ2dsJyA6IHRoaXMuZ2wgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG1lcmdlIHNwcml0ZXMgdG8gYSBsYXJnZSBzcHJpdGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3RbXX0gc3ByaXRlcyAgIC0gc3ByaXRlcyB0byBtZXJnZVxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGZvclBvaW50cyAgLSB3aGV0aGVyIHRoZSBtZXJnZWQgc3ByaXRlIGlzIGZvciBwb2ludHMsIHBvaW50J3Mgc3ByaXRlcyBuZWVkIHRvIGJlIHNxdWFyZS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgc3ByaXRlcyBtZXJnZWRcbiAgICAgKi9cbiAgICBtZXJnZVNwcml0ZXMoc3ByaXRlcywgZm9yUG9pbnQpIHtcbiAgICAgICAgaWYgKCFzcHJpdGVzIHx8IHNwcml0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvL2J1ZmZlciBiZXR3ZWVuIHNwcml0ZXNcbiAgICAgICAgY29uc3QgYnVmZmVyID0gMjtcbiAgICAgICAgbGV0IHcgPSAwLFxuICAgICAgICAgICAgaCA9IDA7XG4gICAgICAgIHNwcml0ZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgaWYgKGZvclBvaW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgocy5jYW52YXMud2lkdGgsIHMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgdyArPSBsZW4gKyBidWZmZXI7XG4gICAgICAgICAgICAgICAgaWYgKGxlbiA+IGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IGxlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHcgKz0gcy5jYW52YXMud2lkdGggKyBidWZmZXI7XG4gICAgICAgICAgICAgICAgaWYgKHMuY2FudmFzLmhlaWdodCA+IGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IHMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vb3BlbmdsIHRleHR1cmUncyBzaXplIGhhcyB0byBiZSBeMi5cbiAgICAgICAgdyA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZyh3KSAvIE1hdGguTE4yKSk7XG4gICAgICAgIGggPSBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2coaCkgLyBNYXRoLkxOMikpO1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgICAgIGNvbnN0IHNwcml0ZUNhbnZhcyA9IG1hcHRhbGtzLkNhbnZhcy5jcmVhdGVDYW52YXModywgaCwgbWFwLkNhbnZhc0NsYXNzKSxcbiAgICAgICAgICAgIGN0eCA9IHNwcml0ZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgICAgICAgICAgdGV4Q29vcmRzID0gW10sXG4gICAgICAgICAgICBvZmZzZXRzID0gW10sXG4gICAgICAgICAgICBzaXplcyA9IFtdO1xuICAgICAgICBsZXQgcG9pbnRlciA9IDA7XG4gICAgICAgIHNwcml0ZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgbGV0IGR4ID0gMCwgZHkgPSAwLCBsZW47XG4gICAgICAgICAgICBpZiAoZm9yUG9pbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdyA9IHMuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBjaCA9IHMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICBsZW4gPSBNYXRoLm1heChjdywgY2gpO1xuICAgICAgICAgICAgICAgIGR4ID0gbGVuID4gY3cgPyAobGVuIC0gY3cpIC8gMiA6IDA7XG4gICAgICAgICAgICAgICAgZHkgPSBsZW4gPiBjaCA/IChsZW4gLSBjaCkgLyAyIDogMDtcbiAgICAgICAgICAgICAgICAvLzA6IG5vcnRod2VzdC54LCAxOiB3aWR0aCwgMjogaGVpZ2h0LCAzOiBzaXplXG4gICAgICAgICAgICAgICAgdGV4Q29vcmRzLnB1c2goW3BvaW50ZXIgLyB3LCBsZW4gLyB3LCBsZW4gLyBoLCBsZW5dKTtcbiAgICAgICAgICAgICAgICBzaXplcy5wdXNoKFtjdywgY2hdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVuID0gcy5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdGV4Q29vcmRzLnB1c2goW3BvaW50ZXIgLyB3LCBzLmNhbnZhcy53aWR0aCAvIHcsIHMuY2FudmFzLmhlaWdodCAvIGhdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzLmNhbnZhcywgcG9pbnRlciArIGR4LCBkeSk7XG5cbiAgICAgICAgICAgIG9mZnNldHMucHVzaChzLm9mZnNldCk7XG4gICAgICAgICAgICBwb2ludGVyICs9IGxlbiArIGJ1ZmZlcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICdjYW52YXMnIDogc3ByaXRlQ2FudmFzLFxuICAgICAgICAgICAgJ3RleENvb3JkcycgOiB0ZXhDb29yZHMsXG4gICAgICAgICAgICAnb2Zmc2V0cycgOiBvZmZzZXRzXG4gICAgICAgIH07XG4gICAgICAgIGlmIChmb3JQb2ludCkge1xuICAgICAgICAgICAgcmVzdWx0WydzaXplcyddID0gc2l6ZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjcmVhdGVCdWZmZXIoKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBidWZmZXIgb2JqZWN0XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHRoZSBidWZmZXIgb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2J1ZmZlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idWZmZXJzLnB1c2goYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIGVuYWJsZVZlcnRleEF0dHJpYihhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXR0cmlidXRlc1swXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzVGV4Q29vcmRzID0gbmV3IEZsb2F0MzJBcnJheShbMC4wLCAwLjAsIDAuMF0pO1xuXG4gICAgICAgICAgICBjb25zdCBGU0laRSA9IHZlcnRpY2VzVGV4Q29vcmRzLkJZVEVTX1BFUl9FTEVNRU5UO1xuXG4gICAgICAgICAgICBsZXQgU1RSSURFID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIFNUUklERSArPSAoYXR0cmlidXRlc1tpXVsxXSB8fCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oZ2wucHJvZ3JhbSwgYXR0cmlidXRlc1tpXVswXSk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0aGUgc3RvcmFnZSBsb2NhdGlvbiBvZiAnICsgYXR0cmlidXRlc1tpXVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0ciwgYXR0cmlidXRlc1tpXVsxXSwgZ2xbYXR0cmlidXRlc1tpXVsyXSB8fCAnRkxPQVQnXSwgZmFsc2UsIEZTSVpFICogU1RSSURFLCBGU0laRSAqIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IChhdHRyaWJ1dGVzW2ldWzFdIHx8IDApO1xuICAgICAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKGdsLnByb2dyYW0sIGF0dHJpYnV0ZXNbMF0pO1xuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhdHRyLCBhdHRyaWJ1dGVzWzFdLCBnbFthdHRyaWJ1dGVzWzJdIHx8ICdGTE9BVCddLCBmYWxzZSwgMCwgMCk7XG4gICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25SZW1vdmUoKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgIGdsLmRlbGV0ZUJ1ZmZlcihiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2J1ZmZlcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGxpbmtlZCBwcm9ncmFtIG9iamVjdFxuICAgICAqIEBwYXJhbSB2c2hhZGVyIGEgdmVydGV4IHNoYWRlciBwcm9ncmFtIChzdHJpbmcpXG4gICAgICogQHBhcmFtIGZzaGFkZXIgYSBmcmFnbWVudCBzaGFkZXIgcHJvZ3JhbSAoc3RyaW5nKVxuICAgICAqIEByZXR1cm4gY3JlYXRlZCBwcm9ncmFtIG9iamVjdCwgb3IgbnVsbCBpZiB0aGUgY3JlYXRpb24gaGFzIGZhaWxlZFxuICAgICAqL1xuICAgIGNyZWF0ZVByb2dyYW0odnNoYWRlciwgZnNoYWRlciwgdW5pZm9ybXMpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgLy8gQ3JlYXRlIHNoYWRlciBvYmplY3RcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gdGhpcy5fY29tcGlsZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNoYWRlcik7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5fY29tcGlsZVNoYWRlcihnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmc2hhZGVyKTtcbiAgICAgICAgaWYgKCF2ZXJ0ZXhTaGFkZXIgfHwgIWZyYWdtZW50U2hhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYSBwcm9ncmFtIG9iamVjdFxuICAgICAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgIC8vIEF0dGFjaCB0aGUgc2hhZGVyIG9iamVjdHNcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG5cbiAgICAgIC8vIExpbmsgdGhlIHByb2dyYW0gb2JqZWN0XG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgICAvLyBDaGVjayB0aGUgcmVzdWx0IG9mIGxpbmtpbmdcbiAgICAgICAgY29uc3QgbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gICAgICAgIGlmICghbGlua2VkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pO1xuICAgICAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGxpbmsgcHJvZ3JhbTogJyArIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luaXRVbmlmb3Jtcyhwcm9ncmFtLCB1bmlmb3Jtcyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgfVxuXG4gICAgdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgZ2wucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxvYWRUZXh0dXJlKGltYWdlLCB0ZXhJZHgpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpOyAgIC8vIENyZWF0ZSBhIHRleHR1cmUgb2JqZWN0XG4gICAgICAgIGlmICghdGV4dHVyZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHRoZSB0ZXh0dXJlIG9iamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGV4SWR4KSB7XG4gICAgICAgICAgICB0ZXhJZHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuYWJsZSB0ZXh0dXJlIHVuaXQwXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2xbJ1RFWFRVUkUnICsgdGV4SWR4XSk7XG4gICAgICAgIC8vIEJpbmQgdGhlIHRleHR1cmUgb2JqZWN0IHRvIHRoZSB0YXJnZXRcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgICAgIC8vIFNldCB0aGUgdGV4dHVyZSBwYXJhbWV0ZXJzXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgLy8gU2V0IHRoZSB0ZXh0dXJlIGltYWdlXG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xuICAgICAgICByZXR1cm4gdGV4dHVyZTtcbiAgICB9XG5cbiAgICBlbmFibGVTYW1wbGVyKHNhbXBsZXIsIHRleElkeCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIGNvbnN0IHVTYW1wbGVyID0gdGhpcy5fZ2V0VW5pZm9ybShnbC5wcm9ncmFtLCBzYW1wbGVyKTtcbiAgICAgICAgaWYgKCF0ZXhJZHgpIHtcbiAgICAgICAgICAgIHRleElkeCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHRoZSB0ZXh0dXJlIHVuaXQgdG8gdGhlIHNhbXBsZXJcbiAgICAgICAgZ2wudW5pZm9ybTFpKHVTYW1wbGVyLCB0ZXhJZHgpO1xuICAgICAgICByZXR1cm4gdVNhbXBsZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBfY2FsY01hdHJpY2VzKCkge1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICBjb25zdCBzaXplID0gbWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgIHNjYWxlID0gbWFwLmdldFNjYWxlKCk7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IG1hcC5fcHJqVG9Qb2ludChtYXAuX2dldFByakNlbnRlcigpLCBtYXAuZ2V0TWF4Wm9vbSgpKTtcbiAgICAgICAgY29uc3QgZm92ID0gbWFwLmdldEZvdigpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3QgY2FtZXJhVG9DZW50ZXJEaXN0YW5jZSA9IDAuNSAvIE1hdGgudGFuKGZvdiAvIDIpICogc2l6ZS5oZWlnaHQgKiBzY2FsZTtcblxuICAgICAgICBjb25zdCBtID0gbWF0NC5jcmVhdGUoKTtcbiAgICAgICAgbWF0NC5wZXJzcGVjdGl2ZShtLCBmb3YsIHNpemUud2lkdGggLyBzaXplLmhlaWdodCwgMSwgY2FtZXJhVG9DZW50ZXJEaXN0YW5jZSArIDFFOSk7XG4gICAgICAgIGlmICghbWFwdGFsa3MuVXRpbC5JU19OT0RFKSB7XG4gICAgICAgICAgICAvLyBkb2Vzbid0IG5lZWQgdG8gZmxpcCBZIHdpdGggaGVhZGxlc3MtZ2wsIHVua25vd24gcmVhc29uXG4gICAgICAgICAgICBtYXQ0LnNjYWxlKG0sIG0sIFsxLCAtMSwgMV0pO1xuICAgICAgICB9XG4gICAgICAgIG1hdDQudHJhbnNsYXRlKG0sIG0sIFswLCAwLCAtY2FtZXJhVG9DZW50ZXJEaXN0YW5jZV0pO1xuICAgICAgICBtYXQ0LnJvdGF0ZVgobSwgbSwgbWFwLmdldFBpdGNoKCkgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgbWF0NC5yb3RhdGVaKG0sIG0sIC1tYXAuZ2V0QmVhcmluZygpICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIG1hdDQudHJhbnNsYXRlKG0sIG0sIFstY2VudGVyLngsIC1jZW50ZXIueSwgMF0pO1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICBjYWxjTWF0cmljZXMoKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgICAgIC8vIGdldCBwaXhlbCBzaXplIG9mIG1hcFxuICAgICAgICBjb25zdCBzaXplID0gbWFwLmdldFNpemUoKTtcbiAgICAgICAgLy8gZ2V0IGZpZWxkIG9mIHZpZXdcbiAgICAgICAgY29uc3QgZm92ID0gbWFwLmdldEZvdigpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgY29uc3QgbWF4U2NhbGUgPSBtYXAuZ2V0U2NhbGUobWFwLmdldE1pblpvb20oKSkgLyBtYXAuZ2V0U2NhbGUobWFwLmdldE1heE5hdGl2ZVpvb20oKSk7XG4gICAgICAgIGNvbnN0IGZhclogPSBtYXhTY2FsZSAqIHNpemUuaGVpZ2h0IC8gMiAvIHRoaXMuX2dldEZvdlJhdGlvKCk7XG4gICAgICAgIGNvbnN0IG0gPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBtYXQ0LnBlcnNwZWN0aXZlKG0sIGZvdiwgc2l6ZS53aWR0aCAvIHNpemUuaGVpZ2h0LCAxLCBmYXJaKTtcbiAgICAgICAgY29uc3QgbTEgPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAgICBpZiAoIW1hcHRhbGtzLlV0aWwuSVNfTk9ERSkge1xuICAgICAgICAgICAgLy8gZG9lc24ndCBuZWVkIHRvIGZsaXAgWSB3aXRoIGhlYWRsZXNzLWdsLCB1bmtub3duIHJlYXNvblxuICAgICAgICAgICAgbWF0NC5zY2FsZShtLCBtLCBbMSwgLTEsIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBtYXQ0LmNvcHkobTEsIG0pO1xuICAgICAgICBjb25zdCBtMiA9IHRoaXMuX2dldExvb2tBdE1hdCgpO1xuICAgICAgICBtYXQ0Lm11bHRpcGx5KG0sIG0xLCBtMik7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIF9nZXRMb29rQXRNYXQoKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0WiA9IGdldFRhcmdldFpvb20obWFwKTtcblxuICAgICAgICBjb25zdCBzaXplID0gbWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgIHNjYWxlID0gbWFwLmdldFNjYWxlKCkgLyBtYXAuZ2V0U2NhbGUodGFyZ2V0Wik7XG4gICAgICAgIC8vIGNvbnN0IGNlbnRlciA9IHRoaXMuY2FtZXJhQ2VudGVyID0gbWFwLl9wcmpUb1BvaW50KG1hcC5fZ2V0UHJqQ2VudGVyKCksIG1hcC5nZXRNYXhOYXRpdmVab29tKCkpO1xuICAgICAgICBjb25zdCBjZW50ZXIyRCA9IHRoaXMuY2FtZXJhQ2VudGVyID0gbWFwLmNvb3JkaW5hdGVUb1BvaW50KG1hcC5nZXRDZW50ZXIoKSwgdGFyZ2V0Wik7XG4gICAgICAgIGNvbnN0IHBpdGNoID0gbWFwLmdldFBpdGNoKCkgKiBSQURJQU47XG4gICAgICAgIGNvbnN0IGJlYXJpbmcgPSAtbWFwLmdldEJlYXJpbmcoKSAqIFJBRElBTjtcblxuICAgICAgICBjb25zdCByYXRpbyA9IHRoaXMuX2dldEZvdlJhdGlvKCk7XG4gICAgICAgIGNvbnN0IHogPSBzY2FsZSAqIHNpemUuaGVpZ2h0IC8gMiAvIHJhdGlvO1xuICAgICAgICBjb25zdCBjeiA9IHogKiBNYXRoLmNvcyhwaXRjaCk7XG4gICAgICAgIC8vIGFuZCBbZGlzdF0gYXdheSBmcm9tIG1hcCdzIGNlbnRlciBvbiBYWSBwbGFuZSB0byB0aWx0IHRoZSBzY2VuZS5cbiAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguc2luKHBpdGNoKSAqIHo7XG4gICAgICAgIC8vIHdoZW4gbWFwIHJvdGF0ZXMsIHRoZSBjYW1lcmEncyB4eSBwb3NpdGlvbiBpcyByb3RhdGluZyB3aXRoIHRoZSBnaXZlbiBiZWFyaW5nIGFuZCBzdGlsbCBrZWVwcyBbZGlzdF0gYXdheSBmcm9tIG1hcCdzIGNlbnRlclxuICAgICAgICBjb25zdCBjeCA9IGNlbnRlcjJELnggKyBkaXN0ICogTWF0aC5zaW4oYmVhcmluZyk7XG4gICAgICAgIGNvbnN0IGN5ID0gY2VudGVyMkQueSArIGRpc3QgKiBNYXRoLmNvcyhiZWFyaW5nKTtcblxuICAgICAgICAvLyB3aGVuIG1hcCByb3RhdGVzLCBjYW1lcmEncyB1cCBheGlzIGlzIHBvaW50aW5nIHRvIGJlYXJpbmcgZnJvbSBzb3V0aCBkaXJlY3Rpb24gb2YgbWFwXG4gICAgICAgIC8vIGRlZmF1bHQgWzAsMSwwXSBpcyB0aGUgWSBheGlzIHdoaWxlIHRoZSBhbmdsZSBvZiBpbmNsaW5hdGlvbiBhbHdheXMgZXF1YWwgMFxuICAgICAgICAvLyBpZiB5b3Ugd2FudCB0byByb3RhdGUgdGhlIG1hcCBhZnRlciB1cCBhbiBpbmNsaW5lLHBsZWFzZSByb3RhdGVaIGxpa2UgdGhpczpcbiAgICAgICAgLy8gbGV0IHVwID0gbmV3IHZlYzMoMCwxLDApO1xuICAgICAgICAvLyB1cC5yb3RhdGVaKHRhcmdldCxyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgdXAgPSBbTWF0aC5zaW4oYmVhcmluZyksIE1hdGguY29zKGJlYXJpbmcpLCAwXTtcbiAgICAgICAgY29uc3QgbSA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICAgIG1hdDQubG9va0F0KG0sIFtjeCwgY3ksIGN6XSwgW2NlbnRlcjJELngsIGNlbnRlcjJELnksIDBdLCB1cCk7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIF9nZXRGb3ZSYXRpbygpIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRNYXAoKTtcbiAgICAgICAgY29uc3QgZm92ID0gbWFwLmdldEZvdigpO1xuICAgICAgICByZXR1cm4gTWF0aC50YW4oZm92IC8gMiAqIE1hdGguUEkgLyAxODApO1xuICAgIH1cblxuICAgIGhpdERldGVjdChwb2ludCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaXhlbHMgPSBuZXcgVWludDhBcnJheSgxICogMSAqIDQpO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICBjb25zdCBoID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjcCA9IG1hcC5fcG9pbnRUb0NvbnRhaW5lclBvaW50KHBvaW50KS5fcm91bmQoKTtcbiAgICAgICAgZ2wucmVhZFBpeGVscyhjcC54LCBoIC0gY3AueSwgMSwgMSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgcGl4ZWxzKTtcbiAgICAgICAgcmV0dXJuIChwaXhlbHNbM10gPiAwKTtcbiAgICB9XG5cbiAgICBnZXRDYW52YXNJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzSW1nID0gc3VwZXIuZ2V0Q2FudmFzSW1hZ2UoKTtcbiAgICAgICAgaWYgKGNhbnZhc0ltZyAmJiBjYW52YXNJbWcuaW1hZ2UgJiYgdGhpcy5idWZmZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc0ltZy5pbWFnZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlci53aWR0aCAhPT0gY2FudmFzLndpZHRoIHx8IHRoaXMuYnVmZmVyLmhlaWdodCAhPT0gY2FudmFzLmhlaWdodCB8fCAhdGhpcy5fcHJlc2VydmVCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlci5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9wcmVzZXJ2ZUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbnZhc0ltZy5pbWFnZSA9IHRoaXMuYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW52YXNJbWc7XG4gICAgfVxuXG4gICAgb25ab29tU3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLm9uWm9vbVN0YXJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgb25ab29tRW5kKCkge1xuICAgICAgICBzdXBlci5vblpvb21FbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlR0xDb250ZXh0KGNhbnZhcywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gbWFwdGFsa3MuVXRpbC5leHRlbmQoe1xuICAgICAgICAgICAgJ2FscGhhJzogdHJ1ZSxcbiAgICAgICAgICAgICdhbnRpYWxpYXMnOiB0cnVlLFxuICAgICAgICAgICAgJ3ByZXNlcnZlRHJhd2luZ0J1ZmZlcic6IHRydWVcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gWyd3ZWJnbCcsICdleHBlcmltZW50YWwtd2ViZ2wnLCAnd2Via2l0LTNkJywgJ21vei13ZWJnbCddO1xuICAgICAgICBsZXQgY29udGV4dCA9IG51bGw7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KG5hbWVzW2ldLCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc2hhZGVyIG9iamVjdFxuICAgICAqIEBwYXJhbSBnbCBHTCBjb250ZXh0XG4gICAgICogQHBhcmFtIHR5cGUgdGhlIHR5cGUgb2YgdGhlIHNoYWRlciBvYmplY3QgdG8gYmUgY3JlYXRlZFxuICAgICAqIEBwYXJhbSBzb3VyY2Ugc2hhZGVyIHByb2dyYW0gKHN0cmluZylcbiAgICAgKiBAcmV0dXJuIGNyZWF0ZWQgc2hhZGVyIG9iamVjdCwgb3IgbnVsbCBpZiB0aGUgY3JlYXRpb24gaGFzIGZhaWxlZC5cbiAgICAgKi9cbiAgICBfY29tcGlsZVNoYWRlcihnbCwgdHlwZSwgc291cmNlKSB7XG4gICAgICAvLyBDcmVhdGUgc2hhZGVyIG9iamVjdFxuICAgICAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgICAgIGlmIChzaGFkZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gY3JlYXRlIHNoYWRlcicpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIFNldCB0aGUgc2hhZGVyIHByb2dyYW1cbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcblxuICAgICAgLy8gQ29tcGlsZSB0aGUgc2hhZGVyXG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgICAgLy8gQ2hlY2sgdGhlIHJlc3VsdCBvZiBjb21waWxhdGlvblxuICAgICAgICBjb25zdCBjb21waWxlZCA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcbiAgICAgICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG5cbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY29tcGlsZSBzaGFkZXI6ICcgKyBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hhZGVyO1xuICAgIH1cblxuICAgIF9pbml0VW5pZm9ybXMocHJvZ3JhbSwgdW5pZm9ybXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmlmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB1bmlmb3Jtc1tpXTtcbiAgICAgICAgICAgIGxldCB1bmlmb3JtID0gdW5pZm9ybXNbaV07XG4gICAgICAgICAgICBjb25zdCBiID0gbmFtZS5pbmRleE9mKCdbJyk7XG4gICAgICAgICAgICBpZiAoYiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIGIpO1xuICAgICAgICAgICAgICAgIGlmICghbWFwdGFsa3MuVXRpbC5JU19OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIGJyb3dzZXIsIHJlbW92ZSBbMF0gZnJvbSB1bmlmb3JtYSBkZWNsYXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtID0gdW5pZm9ybS5zdWJzdHJpbmcoMCwgYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZ3JhbVtuYW1lXSA9IHRoaXMuX2dldFVuaWZvcm0ocHJvZ3JhbSwgdW5pZm9ybSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0VW5pZm9ybShwcm9ncmFtLCB1bmlmb3JtTmFtZSkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIGNvbnN0IHVuaWZvcm0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybU5hbWUpO1xuICAgICAgICBpZiAoIXVuaWZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0aGUgc3RvcmFnZSBsb2NhdGlvbiBvZiAnICsgdW5pZm9ybU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmlmb3JtO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcblxuLyoqXG4gKiBBIExpbmVBdGxhcyBsZXRzIHVzIHJldXNlIHJlbmRlcmVkIGRhc2hlZCBsaW5lc1xuICogYnkgd3JpdGluZyBtYW55IG9mIHRoZW0gdG8gYSB0ZXh0dXJlIGFuZCB0aGVuIGZldGNoaW5nIHRoZWlyIHBvc2l0aW9uc1xuICogdXNpbmcgLmdldERhc2guXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQXRsYXMge1xuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5hdGxhcyA9IHt9O1xuICAgIH1cblxuICAgIGdldEF0bGFzKHN5bWJvbCkge1xuICAgICAgICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShzeW1ib2wpO1xuXG4gICAgICAgIGlmICghdGhpcy5hdGxhc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCBhdGxhcyA9IHRoaXMuYWRkQXRsYXMoc3ltYm9sKTtcbiAgICAgICAgICAgIGlmIChhdGxhcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXRsYXNba2V5XSA9IGF0bGFzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzW2tleV07XG4gICAgfVxuXG4gICAgYWRkQXRsYXMoc3ltYm9sKSB7XG4gICAgICAgIGlmICghc3ltYm9sWydsaW5lRGFzaGFycmF5J10gJiYgIXN5bWJvbFsnbGluZVBhdHRlcm5GaWxlJ10pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuX2dldFNpemUoc3ltYm9sLCB0aGlzLnJlc291cmNlcyk7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5fY3JlYXRlQ2FudmFzKHNpemUpO1xuXG4gICAgICAgIGlmICghY2FudmFzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3QgaW5pdGlhbGl6ZSBjYW52YXMgY29udGFpbmVyLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIG1hcHRhbGtzLkNhbnZhcy5wcmVwYXJlQ2FudmFzKGN0eCwgc3ltYm9sLCB0aGlzLnJlc291cmNlcyk7XG5cbiAgICAgICAgY3R4Lm1vdmVUbygwLCBzaXplWzFdIC8gMik7XG4gICAgICAgIGN0eC5saW5lVG8oc2l6ZVswXSwgc2l6ZVsxXSAvIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdjYW52YXMnIDogY2FudmFzLFxuICAgICAgICAgICAgJ29mZnNldCcgOiBuZXcgbWFwdGFsa3MuUG9pbnQoMCwgMClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2l6ZSBvZiB0aGUgYXRsYXMgb2Ygc3ltYm9sLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gc3ltYm9sIC0gYXRsYXMncyBzeW1ib2xcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0gICAgICAgIHNpemUgOiBbd2lkdGgsIGhlaWdodF1cbiAgICAgKi9cbiAgICBfZ2V0U2l6ZShzeW1ib2wsIHJlc291cmNlcykge1xuICAgICAgICBsZXQgdyA9IDAsIGggPSAwO1xuICAgICAgICBjb25zdCBkYXNoQXJyYXkgPSBzeW1ib2xbJ2xpbmVEYXNoYXJyYXknXTtcbiAgICAgICAgaWYgKGRhc2hBcnJheSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXNoQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3ICs9IGRhc2hBcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGFycmF5IGlzIG9kZCxcbiAgICAgICAgICAgIC8vIHRoZSBlbGVtZW50cyBvZiB0aGUgYXJyYXkgZ2V0IGNvcGllZCBhbmQgY29uY2F0ZW5hdGVkLlxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIFs1LCAxNSwgMjVdIHdpbGwgYmVjb21lIFs1LCAxNSwgMjUsIDUsIDE1LCAyNV0uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEL3NldExpbmVEYXNoXG4gICAgICAgICAgICBpZiAoZGFzaEFycmF5Lmxlbmd0aCAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB3ICo9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoID0gKHN5bWJvbFsnbGluZVdpZHRoJ10gPT0gbnVsbCA/IDIgOiBzeW1ib2xbJ2xpbmVXaWR0aCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ltYm9sWydsaW5lUGF0dGVybkZpbGUnXSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSByZXNvdXJjZXMuZ2V0SW1hZ2Uoc3ltYm9sWydsaW5lUGF0dGVybkZpbGUnXSk7XG4gICAgICAgICAgICBpZiAoaW1hZ2Uud2lkdGggPiB3KSB7XG4gICAgICAgICAgICAgICAgdyA9IGltYWdlLndpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGltYWdlLmhlaWdodCA+IGgpIHtcbiAgICAgICAgICAgICAgICBoID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdywgaF07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNhbnZhcyhzaXplKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ2NhbnZhc0NsYXNzJ10pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5vcHRpb25zWydjYW52YXNDbGFzcyddKHNpemVbMF0sIHNpemVbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIGRvY3VtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZVswXTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplWzFdO1xuICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cbi8qKlxuICogQSBzdGFuZGFsb25lIHBvaW50IGdlb21ldHJ5IHdpdGggdXNlZnVsIGFjY2Vzc29yLCBjb21wYXJpc29uLCBhbmRcbiAqIG1vZGlmaWNhdGlvbiBtZXRob2RzLlxuICpcbiAqIEBjbGFzcyBQb2ludFxuICogQHBhcmFtIHtOdW1iZXJ9IHggdGhlIHgtY29vcmRpbmF0ZS4gdGhpcyBjb3VsZCBiZSBsb25naXR1ZGUgb3Igc2NyZWVuXG4gKiBwaXhlbHMsIG9yIGFueSBvdGhlciBzb3J0IG9mIHVuaXQuXG4gKiBAcGFyYW0ge051bWJlcn0geSB0aGUgeS1jb29yZGluYXRlLiB0aGlzIGNvdWxkIGJlIGxhdGl0dWRlIG9yIHNjcmVlblxuICogcGl4ZWxzLCBvciBhbnkgb3RoZXIgc29ydCBvZiB1bml0LlxuICogQGV4YW1wbGVcbiAqIHZhciBwb2ludCA9IG5ldyBQb2ludCgtNzcsIDM4KTtcbiAqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbn1cblxuUG9pbnQucHJvdG90eXBlID0ge1xuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhpcyBwb2ludCwgcmV0dXJuaW5nIGEgbmV3IHBvaW50IHRoYXQgY2FuIGJlIG1vZGlmaWVkXG4gICAgICogd2l0aG91dCBhZmZlY3RpbmcgdGhlIG9sZCBvbmUuXG4gICAgICogQHJldHVybiB7UG9pbnR9IHRoZSBjbG9uZVxuICAgICAqL1xuICAgIGNsb25lOiBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhpcyBwb2ludCdzIHggJiB5IGNvb3JkaW5hdGVzIHRvIGFub3RoZXIgcG9pbnQsXG4gICAgICogeWllbGRpbmcgYSBuZXcgcG9pbnQuXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgYWRkOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9hZGQocCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdCB0aGlzIHBvaW50J3MgeCAmIHkgY29vcmRpbmF0ZXMgdG8gZnJvbSBwb2ludCxcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBzdWI6ICAgICBmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3N1YihwKTsgfSxcblxuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgcG9pbnQncyB4ICYgeSBjb29yZGluYXRlcyBieSBwb2ludCxcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwIHRoZSBvdGhlciBwb2ludFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBtdWx0QnlQb2ludDogICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9tdWx0QnlQb2ludChwKTsgfSxcblxuICAgIC8qKlxuICAgICAqIERpdmlkZSB0aGlzIHBvaW50J3MgeCAmIHkgY29vcmRpbmF0ZXMgYnkgcG9pbnQsXG4gICAgICogeWllbGRpbmcgYSBuZXcgcG9pbnQuXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgZGl2QnlQb2ludDogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fZGl2QnlQb2ludChwKTsgfSxcblxuICAgIC8qKlxuICAgICAqIE11bHRpcGx5IHRoaXMgcG9pbnQncyB4ICYgeSBjb29yZGluYXRlcyBieSBhIGZhY3RvcixcbiAgICAgKiB5aWVsZGluZyBhIG5ldyBwb2ludC5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBrIGZhY3RvclxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICBtdWx0OiAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX211bHQoayk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGUgdGhpcyBwb2ludCdzIHggJiB5IGNvb3JkaW5hdGVzIGJ5IGEgZmFjdG9yLFxuICAgICAqIHlpZWxkaW5nIGEgbmV3IHBvaW50LlxuICAgICAqIEBwYXJhbSB7UG9pbnR9IGsgZmFjdG9yXG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIGRpdjogICAgIGZ1bmN0aW9uKGspIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fZGl2KGspOyB9LFxuXG4gICAgLyoqXG4gICAgICogUm90YXRlIHRoaXMgcG9pbnQgYXJvdW5kIHRoZSAwLCAwIG9yaWdpbiBieSBhbiBhbmdsZSBhLFxuICAgICAqIGdpdmVuIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gYSBhbmdsZSB0byByb3RhdGUgYXJvdW5kLCBpbiByYWRpYW5zXG4gICAgICogQHJldHVybiB7UG9pbnR9IG91dHB1dCBwb2ludFxuICAgICAqL1xuICAgIHJvdGF0ZTogIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm90YXRlKGEpOyB9LFxuXG4gICAgLyoqXG4gICAgICogUm90YXRlIHRoaXMgcG9pbnQgYXJvdW5kIHAgcG9pbnQgYnkgYW4gYW5nbGUgYSxcbiAgICAgKiBnaXZlbiBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGEgYW5nbGUgdG8gcm90YXRlIGFyb3VuZCwgaW4gcmFkaWFuc1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IHAgUG9pbnQgdG8gcm90YXRlIGFyb3VuZFxuICAgICAqIEByZXR1cm4ge1BvaW50fSBvdXRwdXQgcG9pbnRcbiAgICAgKi9cbiAgICByb3RhdGVBcm91bmQ6ICBmdW5jdGlvbihhLHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm90YXRlQXJvdW5kKGEscCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBseSB0aGlzIHBvaW50IGJ5IGEgNHgxIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxuICAgICAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gbSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gb3V0cHV0IHBvaW50XG4gICAgICovXG4gICAgbWF0TXVsdDogZnVuY3Rpb24obSkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9tYXRNdWx0KG0pOyB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoaXMgcG9pbnQgYnV0IGFzIGEgdW5pdCB2ZWN0b3IgZnJvbSAwLCAwLCBtZWFuaW5nXG4gICAgICogdGhhdCB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgcmVzdWx0aW5nIHBvaW50IHRvIHRoZSAwLCAwXG4gICAgICogY29vcmRpbmF0ZSB3aWxsIGJlIGVxdWFsIHRvIDEgYW5kIHRoZSBhbmdsZSBmcm9tIHRoZSByZXN1bHRpbmdcbiAgICAgKiBwb2ludCB0byB0aGUgMCwgMCBjb29yZGluYXRlIHdpbGwgYmUgdGhlIHNhbWUgYXMgYmVmb3JlLlxuICAgICAqIEByZXR1cm4ge1BvaW50fSB1bml0IHZlY3RvciBwb2ludFxuICAgICAqL1xuICAgIHVuaXQ6ICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl91bml0KCk7IH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIGEgcGVycGVuZGljdWxhciBwb2ludCwgd2hlcmUgdGhlIG5ldyB5IGNvb3JkaW5hdGVcbiAgICAgKiBpcyB0aGUgb2xkIHggY29vcmRpbmF0ZSBhbmQgdGhlIG5ldyB4IGNvb3JkaW5hdGUgaXMgdGhlIG9sZCB5XG4gICAgICogY29vcmRpbmF0ZSBtdWx0aXBsaWVkIGJ5IC0xXG4gICAgICogQHJldHVybiB7UG9pbnR9IHBlcnBlbmRpY3VsYXIgcG9pbnRcbiAgICAgKi9cbiAgICBwZXJwOiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcGVycCgpOyB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgdmVyc2lvbiBvZiB0aGlzIHBvaW50IHdpdGggdGhlIHggJiB5IGNvb3JkaW5hdGVzXG4gICAgICogcm91bmRlZCB0byBpbnRlZ2Vycy5cbiAgICAgKiBAcmV0dXJuIHtQb2ludH0gcm91bmRlZCBwb2ludFxuICAgICAqL1xuICAgIHJvdW5kOiAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3VuZCgpOyB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBtYWdpdHVkZSBvZiB0aGlzIHBvaW50OiB0aGlzIGlzIHRoZSBFdWNsaWRlYW5cbiAgICAgKiBkaXN0YW5jZSBmcm9tIHRoZSAwLCAwIGNvb3JkaW5hdGUgdG8gdGhpcyBwb2ludCdzIHggYW5kIHlcbiAgICAgKiBjb29yZGluYXRlcy5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IG1hZ25pdHVkZVxuICAgICAqL1xuICAgIG1hZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSnVkZ2Ugd2hldGhlciB0aGlzIHBvaW50IGlzIGVxdWFsIHRvIGFub3RoZXIgcG9pbnQsIHJldHVybmluZ1xuICAgICAqIHRydWUgb3IgZmFsc2UuXG4gICAgICogQHBhcmFtIHtQb2ludH0gb3RoZXIgdGhlIG90aGVyIHBvaW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gd2hldGhlciB0aGUgcG9pbnRzIGFyZSBlcXVhbFxuICAgICAqL1xuICAgIGVxdWFsczogZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gb3RoZXIueCAmJlxuICAgICAgICAgICAgICAgdGhpcy55ID09PSBvdGhlci55O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwb2ludCB0byBhbm90aGVyIHBvaW50XG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGRpc3RhbmNlXG4gICAgICovXG4gICAgZGlzdDogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdFNxcihwKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHBvaW50IHRvIGFub3RoZXIgcG9pbnQsXG4gICAgICogd2l0aG91dCB0aGUgc3F1YXJlIHJvb3Qgc3RlcC4gVXNlZnVsIGlmIHlvdSdyZSBjb21wYXJpbmdcbiAgICAgKiByZWxhdGl2ZSBkaXN0YW5jZXMuXG4gICAgICogQHBhcmFtIHtQb2ludH0gcCB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGRpc3RhbmNlXG4gICAgICovXG4gICAgZGlzdFNxcjogZnVuY3Rpb24ocCkge1xuICAgICAgICB2YXIgZHggPSBwLnggLSB0aGlzLngsXG4gICAgICAgICAgICBkeSA9IHAueSAtIHRoaXMueTtcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFuZ2xlIGZyb20gdGhlIDAsIDAgY29vcmRpbmF0ZSB0byB0aGlzIHBvaW50LCBpbiByYWRpYW5zXG4gICAgICogY29vcmRpbmF0ZXMuXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBhbmdsZVxuICAgICAqL1xuICAgIGFuZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFuZ2xlIGZyb20gdGhpcyBwb2ludCB0byBhbm90aGVyIHBvaW50LCBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIHtQb2ludH0gYiB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgYW5nbGVUbzogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnkgLSBiLnksIHRoaXMueCAtIGIueCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0aGlzIHBvaW50IGFuZCBhbm90aGVyIHBvaW50LCBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIHtQb2ludH0gYiB0aGUgb3RoZXIgcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgYW5nbGVXaXRoOiBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlV2l0aFNlcChiLngsIGIueSk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICogRmluZCB0aGUgYW5nbGUgb2YgdGhlIHR3byB2ZWN0b3JzLCBzb2x2aW5nIHRoZSBmb3JtdWxhIGZvclxuICAgICAqIHRoZSBjcm9zcyBwcm9kdWN0IGEgeCBiID0gfGF8fGJ8c2luKM64KSBmb3IgzrguXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHggdGhlIHgtY29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5IHRoZSB5LWNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBhbmdsZSBpbiByYWRpYW5zXG4gICAgICovXG4gICAgYW5nbGVXaXRoU2VwOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgdGhpcy54ICogeSAtIHRoaXMueSAqIHgsXG4gICAgICAgICAgICB0aGlzLnggKiB4ICsgdGhpcy55ICogeSk7XG4gICAgfSxcblxuICAgIF9tYXRNdWx0OiBmdW5jdGlvbihtKSB7XG4gICAgICAgIHZhciB4ID0gbVswXSAqIHRoaXMueCArIG1bMV0gKiB0aGlzLnksXG4gICAgICAgICAgICB5ID0gbVsyXSAqIHRoaXMueCArIG1bM10gKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfYWRkOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCArPSBwLng7XG4gICAgICAgIHRoaXMueSArPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfc3ViOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCAtPSBwLng7XG4gICAgICAgIHRoaXMueSAtPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfbXVsdDogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggKj0gaztcbiAgICAgICAgdGhpcy55ICo9IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfZGl2OiBmdW5jdGlvbihrKSB7XG4gICAgICAgIHRoaXMueCAvPSBrO1xuICAgICAgICB0aGlzLnkgLz0gaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9tdWx0QnlQb2ludDogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggKj0gcC54O1xuICAgICAgICB0aGlzLnkgKj0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2RpdkJ5UG9pbnQ6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdGhpcy54IC89IHAueDtcbiAgICAgICAgdGhpcy55IC89IHAueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91bml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZGl2KHRoaXMubWFnKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3BlcnA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSAteTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3RhdGU6IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICB4ID0gY29zICogdGhpcy54IC0gc2luICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IHNpbiAqIHRoaXMueCArIGNvcyAqIHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3RhdGVBcm91bmQ6IGZ1bmN0aW9uKGFuZ2xlLCBwKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICB4ID0gcC54ICsgY29zICogKHRoaXMueCAtIHAueCkgLSBzaW4gKiAodGhpcy55IC0gcC55KSxcbiAgICAgICAgICAgIHkgPSBwLnkgKyBzaW4gKiAodGhpcy54IC0gcC54KSArIGNvcyAqICh0aGlzLnkgLSBwLnkpO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3JvdW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ29uc3RydWN0IGEgcG9pbnQgZnJvbSBhbiBhcnJheSBpZiBuZWNlc3NhcnksIG90aGVyd2lzZSBpZiB0aGUgaW5wdXRcbiAqIGlzIGFscmVhZHkgYSBQb2ludCwgb3IgYW4gdW5rbm93biB0eXBlLCByZXR1cm4gaXQgdW5jaGFuZ2VkXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj58UG9pbnR8Kn0gYSBhbnkga2luZCBvZiBpbnB1dCB2YWx1ZVxuICogQHJldHVybiB7UG9pbnR9IGNvbnN0cnVjdGVkIHBvaW50LCBvciBwYXNzZWQtdGhyb3VnaCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKiAvLyB0aGlzXG4gKiB2YXIgcG9pbnQgPSBQb2ludC5jb252ZXJ0KFswLCAxXSk7XG4gKiAvLyBpcyBlcXVpdmFsZW50IHRvXG4gKiB2YXIgcG9pbnQgPSBuZXcgUG9pbnQoMCwgMSk7XG4gKi9cblBvaW50LmNvbnZlcnQgPSBmdW5jdGlvbiAoYSkge1xuICAgIGlmIChhIGluc3RhbmNlb2YgUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoYVswXSwgYVsxXSk7XG4gICAgfVxuICAgIHJldHVybiBhO1xufTtcbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4vUGFpbnRlcic7XG5pbXBvcnQgUG9pbnQgZnJvbSAncG9pbnQtZ2VvbWV0cnknO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0Wm9vbSB9IGZyb20gJy4vUGFpbnRlcic7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgJ3Byb2plY3QnIDogdHJ1ZVxufTtcblxuLyoqXG4gKiBBIExpbmUgUGFpbnRlciB0byBwcm9kdWNlIHZlcnRleCBjb29yZGluYXRlcyBmb3IgV2ViR0wgc2hhZGVycy4gPGJyPlxuICpcbiAqIExpbmUgaXMgdHJpYW5nbGVkIGFzIGluIGh0dHBzOi8vbWF0dGRlc2wuc3ZidGxlLmNvbS9kcmF3aW5nLWxpbmVzLWlzLWhhcmQuIDxicj5cbiAqXG4gKiBJbnNwaXJlZCBieSBtYXB0YWxrcy1nbC1qc1xuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21hcGJveC9tYXBib3gtZ2wtanNcbiAqXG4gKiBSZWZlcmVuY2VzOlxuICogICAgaHR0cDovL2xhYnMuaHlwZXJhbmRyb2lkLmNvbS9lZmZpY2llbnQtd2ViZ2wtc3Ryb2tpbmdcbiAqICAgIGh0dHBzOi8vbWF0dGRlc2wuc3ZidGxlLmNvbS9kcmF3aW5nLWxpbmVzLWlzLWhhcmRcbiAqICAgIGh0dHBzOi8vd3d3Lm1hcGJveC5jb20vYmxvZy9kcmF3aW5nLWFudGlhbGlhc2VkLWxpbmVzL1xuICpcbiAqIEBhdXRob3IgZnV6aGVublxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVQYWludGVyIGV4dGVuZHMgUGFpbnRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgbWFwLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGdsLCBtYXAsIG9wdGlvbnMpO1xuICAgICAgICAvLyDnu5PmnpzmlbDnu4RcbiAgICAgICAgLy8tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLnZlcnRleEFycmF5ID0gW107XG4gICAgICAgIHRoaXMubm9ybWFsQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5zdHlsZUFycmF5ID0gW107XG4gICAgICAgIC8vLS0tLS0tLS0tLS1cblxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57nu5PmnpzmlbDnu4RcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IOe7k+aenOaVsOe7hFxuICAgICAqL1xuICAgIGdldEFycmF5cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICd2ZXJ0ZXhBcnJheScgIDogdGhpcy52ZXJ0ZXhBcnJheSxcbiAgICAgICAgICAgICdub3JtYWxBcnJheScgIDogdGhpcy5ub3JtYWxBcnJheSxcbiAgICAgICAgICAgICdlbGVtZW50QXJyYXknIDogdGhpcy5lbGVtZW50QXJyYXksXG4gICAgICAgICAgICAnc3R5bGVBcnJheScgICA6IHRoaXMuc3R5bGVBcnJheVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS4gOadoee6v+aVsOaNrueahOWdkOagh+aVsOe7hCwgIOWdkOagh+S4uue7j+e6rOW6puaIluiAhTJkIHBvaW50KOWdkOagh+aWueWQkeS4juWxj+W5leWdkOagh+ebuOWQjCkuXG4gICAgICog5b2T5pWw5o2u5Li657uP57qs5bqm5pe2LCDpnIDopoHmiopvcHRpb25z5Lit55qEcHJvamVjdOiuvuS4unRydWVcbiAgICAgKiDnur/mlbDmja7lj6/ku6XmmK8gTGluZVN0cmluZywg5Lmf5Y+v5Lul5pivIE11bHRpTGluZVN0cmluZy5cbiAgICAgKiDlpoLmnpzmmK9NdWx0aUxpbmVTdHJpbmcsIOaVsOe7hOW9ouW8j+S4ujogW1t4MCwgeTBdLFt4MSwgeTFdLCAuLl1cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnrKzkuIDmnaHnur/nmoTlnZDmoIfmlbDnu4QgICAgICDnrKzkuozmnaHnur/nmoTlnZDmoIfmlbDnu4RcbiAgICAgKiDlpoLmnpzmmK9NdWx0aUxpbmVTdHJpbmcsIOaVsOe7hOW9ouW8j+S4ujogW1tbeDAwLCB5MDBdLFt4MDEsIHkwMV0sIC4uXSwgW1t4MTAsIHkxMF0sW3gxMSwgeTExXSwgLi5dXVxuICAgICAqIHN0eWxl5Li657q/55qE5qC35byPLCDnlKjmnaXnlJ/miJDmoLflvI/mlbDmja4uXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXVtdfE51bWJlcltdW11bXX0gbGluZSAtIOe6v+WdkOagh+aVsOe7hFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZSAtIOe6v+eahOagt+W8jywgbWFwdGFsa3MuanPnmoRTeW1ib2xcbiAgICAgKi9cbiAgICBhZGRMaW5lKGxpbmUsIHN0eWxlKSB7XG4gICAgICAgIGlmICghbGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0eWxlLnN5bWJvbFsnbGluZVdpZHRoJ10gPD0gMCB8fCBzdHlsZS5zeW1ib2xbJ2xpbmVPcGFjaXR5J10gPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b2T5YmN5bey5aSE55CG55qEZWxlbWVudCjkuInop5LlvaIp5pWw6YePXG4gICAgICAgIGNvbnN0IHByZVZlcnRleExlbiA9IHRoaXMudmVydGV4QXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IHZlcnRpY2UgPSB0aGlzLl9nZXRWZXJ0aWNlKGxpbmUpO1xuXG4gICAgICAgIC8v6L6T5YWl5pivTXVsdGlMaW5lU3RyaW5n5pe2LCDpgY3ljoZjaGlsZHJlbiwg5bm25L6d5qyh5re75Yqg5aSE55CGXG4gICAgICAgIGlmICh2ZXJ0aWNlWzBdICYmIEFycmF5LmlzQXJyYXkodmVydGljZVswXVswXSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdmVydGljZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExpbmUodmVydGljZVtpXSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wcmVwYXJlVG9BZGQoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRaID0gZ2V0VGFyZ2V0Wm9vbSh0aGlzLm1hcCk7XG5cbiAgICAgICAgLy/pgY3ljoYsIOS+neasoea3u+WKoOerr+eCuVxuICAgICAgICBsZXQgY3VycmVudFZlcnRleCwgbmV4dFZlcnRleDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB2ZXJ0aWNlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlcnRleCA9IHZlcnRpY2VbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zWydwcm9qZWN0J10pIHtcbiAgICAgICAgICAgICAgICAvL+i+k+WFpeaYr+e7j+e6rOW6puaXtiwg6L2s5YyW5Li6MmQgcG9pbnRcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSB0aGlzLm1hcC5jb29yZGluYXRlVG9Qb2ludChuZXcgbWFwdGFsa3MuQ29vcmRpbmF0ZSh2ZXJ0ZXgpLCB0YXJnZXRaKS50b0FycmF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50VmVydGV4ID0gUG9pbnQuY29udmVydCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgaWYgKGkgPCBsIC0gMSkge1xuICAgICAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VbaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3Byb2plY3QnXSkge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXggPSB0aGlzLm1hcC5jb29yZGluYXRlVG9Qb2ludChuZXcgbWFwdGFsa3MuQ29vcmRpbmF0ZSh2ZXJ0ZXgpLCB0YXJnZXRaKS50b0FycmF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSBQb2ludC5jb252ZXJ0KHZlcnRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGRDdXJyZW50VmVydGV4KGN1cnJlbnRWZXJ0ZXgsIG5leHRWZXJ0ZXgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaWsOWinueahGVsZW1lbnTmlbDph49cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnZlcnRleEFycmF5Lmxlbmd0aCAtIHByZVZlcnRleExlbjtcbiAgICAgICAgLy8g5re75Yqg5qC35byP5pWw5o2uXG4gICAgICAgIHRoaXMuX2FkZFRleENvb3Jkcyhjb3VudCwgc3R5bGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuIDmnaHnur/mrrXnlLHlm5vkuKrnq6/ngrksIOS4pOS4quS4ieinkuW9oue7hOaIkCwg5aaC5Zu+5omA56S6OlxuICAgICAqICAgICAgIGUwIF9fX19fX19fX19fXyBlMlxuICAgICAqICAgICAgIHwgICAgICAgICAgICAgIHxcbiAgICAgKiAgICBfXyAuX19fX19fX19fX19fX198XG4gICAgICogICAgICAgfFxcIGpvaW4gICAgICAgIHxcbiAgICAgKiAgIHwgICB8IFxcIF9fX19fX19fX19ffGUzXG4gICAgICogICB8ICAgfCAgfGUxXG4gICAgICogICB8ICAgISAgfFxuICAgICAqICAg5LiJ6KeS5b2iMTogW2UwLCBlMSwgZTJdXG4gICAgICogICDkuInop5LlvaIyOiBbZTEsIGUyLCBlM11cbiAgICAgKlxuICAgICAqICBlMOWSjGUx55qE56uv54K55Z2Q5qCH55u45ZCMLCBub3JtYWzlgLzkuI3lkIxcbiAgICAgKiAg5ZCM55CGZTLlkoxlM+eahOerr+eCueWdkOagh+ebuOWQjCwgbm9ybWFs5YC85LiN5ZCMXG4gICAgICpcbiAgICAgKiBhZGRDdXJyZW50VmVydGV45pa55rOV5qC55o2u5b2T5YmN56uv54K55ZKM5LiL5LiA5Liq56uv54K5LCDorqHnrpflh7plMC1lM+eahG5vcm1hbCwgbGluZXNvZmFy562JLCDmt7vliqDliLDnu5PmnpzmlbDnu4TkuK0uXG4gICAgICogQHBhcmFtIHtQb2ludH0gY3VycmVudFZlcnRleCAtIOW9k+WJjeerr+eCueWdkOagh1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IG5leHRWZXJ0ZXggICAgLSDkuIvkuIDkuKrnq6/ngrnlnZDmoIdcbiAgICAgKi9cbiAgICBhZGRDdXJyZW50VmVydGV4KGN1cnJlbnRWZXJ0ZXgsIG5leHRWZXJ0ZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByZVZlcnRleCkge1xuICAgICAgICAgICAgLy8g6YeN572uZWxlbWVudOaVsOaNruWkhOeQhueahOi+heWKqeWPmOmHj1xuICAgICAgICAgICAgdGhpcy5lMSA9IHRoaXMuZTIgPSB0aGlzLmUzID0gLTE7XG4gICAgICAgICAgICAvLyB0aGUgZmlyc3QgdmVydGV4LlxuICAgICAgICAgICAgLy8g5L+d5a2Y56uv54K55YiwcHJlVmVydGV45LitLCDov5Tlm57nrYnlvoXkuIvkuIDkuKrnq6/ngrnmlbDmja5cbiAgICAgICAgICAgIHRoaXMuX3dhaXRGb3JMZWZ0Q2FwID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJlVmVydGV4ID0gY3VycmVudFZlcnRleDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIG5vcm1hbOS4uuS4jue6v+auteihjOi/m+aWueWQkemAhuaXtumSiOWeguebtOeahG5vcm1hbGl6ZWTlgLxcbiAgICAgICAgICog57q/5pa55ZCR5Li65LuO5bem5Yiw5Y+z5pe2LCBub3JtYWzmlrnlkJHlkJHkuIpcbiAgICAgICAgICog57q/5pa55ZCR5Li65LuO5Y+z5Yiw5bem5pe2LCBub3JtYWzmlrnlkJHlkJHkuItcbiAgICAgICAgICogICAgICAgICAgICAgICAgICBuZXh0Tm9ybWFsXG4gICAgICAgICAqICAgIGN1cnJlbnRWZXJ0ZXggICAg4oaRXG4gICAgICAgICAqICAgICAgICAgICAgICAgIC5fX19fX19fXy4gbmV4dFZlcnRleFxuICAgICAgICAgKiAgICAgICAgICAgICAgICB8XFxcbiAgICAgICAgICogICAgIG5vcm1hbCAg4oaQICB8IFxcIGpvaW5Ob3JtYWxcbiAgICAgICAgICogICAgICAgICAgICAgICAgfFxuICAgICAgICAgKiAgICAgcHJldlZlcnRleCAhXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8vIOiuoeeul+W9k+WJjee6v+auteeahG5vcm1hbFxuICAgICAgICBjb25zdCBub3JtYWwgPSBjdXJyZW50VmVydGV4LnN1Yih0aGlzLnByZVZlcnRleCkuX3VuaXQoKS5fcGVycCgpLl9tdWx0KC0xKTtcbiAgICAgICAgLy8g6K6h566X5LiL5LiA5p2h57q/5q6155qEbm9ybWFsXG4gICAgICAgIGxldCBuZXh0Tm9ybWFsO1xuICAgICAgICBpZiAobmV4dFZlcnRleCkge1xuICAgICAgICAgICAgbmV4dE5vcm1hbCA9IG5leHRWZXJ0ZXguc3ViKGN1cnJlbnRWZXJ0ZXgpLl91bml0KCkuX3BlcnAoKS5fbXVsdCgtMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVKb2luTm9ybWFsID0gdGhpcy5fZ2V0U3RhcnROb3JtYWwobm9ybWFsLCB0aGlzLnByZU5vcm1hbCk7XG5cbiAgICAgICAgLy8gMS4g6K6h566X57q/5q615bem5L6n55qEam9pbk5vcm1hbFxuICAgICAgICAvLyAyLiDmt7vliqDnur/mrrXlt6bkvqfnq6/ngrkoZTAsIGUxKeWIsOe7k+aenOaVsOe7hOS4rVxuICAgICAgICB0aGlzLl9hZGRMaW5lRW5kVmVydGV4cyh0aGlzLnByZVZlcnRleCwgcHJlSm9pbk5vcm1hbCwgdGhpcy5kaXN0YW5jZSk7XG5cbiAgICAgICAgLy8g5aKe5Yqg57q/5q616ZW/5bqm5YiwbGluZXNvZmFy5LitXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gY3VycmVudFZlcnRleC5kaXN0KHRoaXMucHJlVmVydGV4KTtcblxuICAgICAgICBpZiAoIW5leHRWZXJ0ZXgpIHtcbiAgICAgICAgICAgIC8vIOexu+S8vOe6v+auteW3puS+p+err+eCueeahOWkhOeQhiwg5re75Yqg5Y+z5L6n56uv54K5KGUyLCBlMylcbiAgICAgICAgICAgIGNvbnN0IGVuZE5vcm1hbCA9IHRoaXMuX2dldEVuZE5vcm1hbChub3JtYWwsIG5leHROb3JtYWwpO1xuICAgICAgICAgICAgdGhpcy5fYWRkTGluZUVuZFZlcnRleHMoY3VycmVudFZlcnRleCwgZW5kTm9ybWFsLCB0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5wcmVOb3JtYWwgPSBub3JtYWw7XG4gICAgICAgIHRoaXMucHJlVmVydGV4ID0gY3VycmVudFZlcnRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlh4blpIfmt7vliqDmlrDnmoTnur9cbiAgICAgKi9cbiAgICBfcHJlcGFyZVRvQWRkKCkge1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gMDtcblxuICAgICAgICBkZWxldGUgdGhpcy5wcmVWZXJ0ZXg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByZU5vcm1hbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDnur/nmoTnq6/ngrnlnZDmoIflkoxub3JtYWznrYnliLDnu5PmnpzmlbDnu4TkuK1cbiAgICAgKiBAcGFyYW0ge1BvaW50fSB2ZXJ0ZXggICAgICAtIOW9k+WJjeeahOerr+eCuVxuICAgICAqIEBwYXJhbSB7UG9pbnR9IGpvaW5Ob3JtYWwgIC0gam9pbui/nuaOpeWkhOeahG5vcm1hbOWAvFxuICAgICAqIEBwYXJhbSB7UG9pbnR9IG5vcm1hbCAgICAgIC0g57q/5q6155qEbm9ybWFs5YC8XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpbmVzb2ZhciAgLSDlvZPliY3nur/mgLvplb9cbiAgICAgKi9cbiAgICBfYWRkTGluZUVuZFZlcnRleHModmVydGV4LCBqb2luTm9ybWFsLCBsaW5lc29mYXIpIHtcbiAgICAgICAgLy91cCBleHRydWRlIGpvaW5Ob3JtYWxcbiAgICAgICAgbGV0IGV4dHJ1ZGUgPSBqb2luTm9ybWFsLm5vcm1hbFswXTtcblxuICAgICAgICB0aGlzLmUzID0gdGhpcy5fYWRkVmVydGV4KHZlcnRleCwgZXh0cnVkZSwgbGluZXNvZmFyKTtcbiAgICAgICAgaWYgKHRoaXMuZTEgPj0gMCAmJiB0aGlzLmUyID49IDApIHtcbiAgICAgICAgICAgIC8vIGFkZCB0byBlbGVtZW50IGFycmF5XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRBcnJheS5wdXNoKHRoaXMuZTEsIHRoaXMuZTIsIHRoaXMuZTMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZTEgPSB0aGlzLmUyO1xuICAgICAgICB0aGlzLmUyID0gdGhpcy5lMztcblxuICAgICAgICAvLyBkb3duIGV4dHJ1ZGUgam9pbk5vcm1hbFxuICAgICAgICBleHRydWRlID0gam9pbk5vcm1hbC5ub3JtYWxbMV07XG5cbiAgICAgICAgdGhpcy5lMyA9IHRoaXMuX2FkZFZlcnRleCh2ZXJ0ZXgsIGV4dHJ1ZGUsIGxpbmVzb2Zhcik7XG4gICAgICAgIGlmICh0aGlzLmUxID49IDAgJiYgdGhpcy5lMiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBhZGQgdG8gZWxlbWVudCBhcnJheVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkucHVzaCh0aGlzLmUxLCB0aGlzLmUyLCB0aGlzLmUzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmUxID0gdGhpcy5lMjtcbiAgICAgICAgdGhpcy5lMiA9IHRoaXMuZTM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgdmVydGV4IGRhdGEgdG8gdmVydGV4IGFycmF5XG4gICAgICogQHBhcmFtIHtQb2ludH0gY3VycmVudFZlcnRleCAgICAgLSBjdXJyZW50IHZlcnRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBub3JtYWwgIC0gdGhlIG5vcm1hbCBvZiBjdXJyZW50IGxpbmUgc2VnbWVudFxuICAgICAqL1xuICAgIF9hZGRWZXJ0ZXgoY3VycmVudFZlcnRleCwgbm9ybWFsLCBsaW5lc29mYXIpIHtcbiAgICAgICAgLy8gYWRkIHRvIHZlcnRleCBhcnJheVxuICAgICAgICB0aGlzLnZlcnRleEFycmF5LnB1c2goY3VycmVudFZlcnRleC54LCBjdXJyZW50VmVydGV4LnkpO1xuICAgICAgICAvLyBqb2luTm9ybWFs5LiO57q/5q61bm9ybWFs55qE5beu5YC8LCBqb2luTm9ybWFsLngsIGpvaW5Ob3JtYWwueSwgbm9ybWFsLngsIG5vcm1hbC55LCBsaW5lc29mYXJcbiAgICAgICAgY29uc3Qgbm9ybWFscyA9IFt0aGlzLl9wcmVjaXNlKG5vcm1hbC54KSwgdGhpcy5fcHJlY2lzZShub3JtYWwueSksIGxpbmVzb2Zhcl07XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm5vcm1hbEFycmF5Lmxlbmd0aCAvIG5vcm1hbHMubGVuZ3RoO1xuICAgICAgICBtYXB0YWxrcy5VdGlsLnB1c2hJbih0aGlzLm5vcm1hbEFycmF5LCBub3JtYWxzKTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuXG5cbiAgICBfZ2V0VmVydGljZShsaW5lKSB7XG4gICAgICAgIGlmIChsaW5lLmdlb21ldHJ5KSB7XG4gICAgICAgICAgICAvL0dlb0pTT04gZmVhdHVyZVxuICAgICAgICAgICAgbGluZSA9IGxpbmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5jb29yZGluYXRlcykge1xuICAgICAgICAgICAgLy9HZW9KU09OIGdlb21ldHJ5XG4gICAgICAgICAgICBsaW5lID0gbGluZS5jb29yZGluYXRlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlJ/miJDnur/nmoTmoLflvI/mlbDnu4Tlubbmt7vliqDliLDnu5PmnpzmlbDnu4TkuK1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbiAgICAgLSDnur/nmoRlbGVtZW505pWw6YePXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIC0g57q/55qE5qC35byPXG4gICAgICovXG4gICAgX2FkZFRleENvb3JkcyhuLCBzdHlsZSkge1xuICAgICAgICAvLyDnur/nmoTpgI/mmI7luqYsIOe6v+WuveeahDEvMihzaGFkZXLkuK3pg73mmK/nlKhsaW5lV2lkdGjnmoQxLzLlgZrorqHnrpcpXG4gICAgICAgIGxldCB2ID0gKHN0eWxlLnN5bWJvbFsnbGluZVdpZHRoJ10gfHwgMikgLyAyICogMTAwICsgKHN0eWxlLnN5bWJvbFsnbGluZU9wYWNpdHknXSB8fCAxKSAqIDEwO1xuICAgICAgICAvLyAobGluZV93aWR0aCAqIDEwMCArIG9wYWNpdHkgKiAxMCkgKiAxMDAwMCArIHRleF9pZHhcbiAgICAgICAgdiA9IHYgKiAxMDAwMCArIHN0eWxlLmluZGV4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdHlsZUFycmF5LnB1c2godik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorqHnrpfnur/mrrXotbfngrnnmoRqb2luXG4gICAgICogQHBhcmFtICB7W3R5cGVdfSBub3JtYWwgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gcHJlTm9ybWFsIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgX2dldFN0YXJ0Tm9ybWFsKG5vcm1hbCwgcHJlTm9ybWFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRKb2luTm9ybWFsKG5vcm1hbCwgcHJlTm9ybWFsLCBub3JtYWwpO1xuICAgIH1cblxuICAgIF9nZXRFbmROb3JtYWwobm9ybWFsLCBuZXh0Tm9ybWFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRKb2luTm9ybWFsKG5vcm1hbCwgbm9ybWFsLCBuZXh0Tm9ybWFsKTtcbiAgICB9XG5cbiAgICBfZ2V0Sm9pbk5vcm1hbChjdXJyZW50Tm9ybWFsLCBwcmVOb3JtYWwsIG5vcm1hbCkge1xuICAgICAgICBpZiAoIXByZU5vcm1hbCB8fCAhbm9ybWFsKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdub3JtYWwnIDogW2N1cnJlbnROb3JtYWwsIGN1cnJlbnROb3JtYWwubXVsdCgtMSldXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGpvaW5Ob3JtYWwgPSBwcmVOb3JtYWwuYWRkKG5vcm1hbCkuX3VuaXQoKTtcbiAgICAgICAgY29uc3QgY29zSGFsZkFuZ2xlID0gam9pbk5vcm1hbC54ICogbm9ybWFsLnggKyBqb2luTm9ybWFsLnkgKiBub3JtYWwueTtcbiAgICAgICAgY29uc3QgbWl0ZXJMZW5ndGggPSAxIC8gY29zSGFsZkFuZ2xlO1xuICAgICAgICBqb2luTm9ybWFsLl9tdWx0KG1pdGVyTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdub3JtYWwnIDogW2pvaW5Ob3JtYWwsIGpvaW5Ob3JtYWwubXVsdCgtMSldXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3ByZWNpc2UoZikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChmICogMUU3KSAvIDFFNztcbiAgICB9XG59XG5cbkxpbmVQYWludGVyLm1lcmdlT3B0aW9ucyhvcHRpb25zKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBlYXJjdXQ7XG5cbmZ1bmN0aW9uIGVhcmN1dChkYXRhLCBob2xlSW5kaWNlcywgZGltKSB7XG5cbiAgICBkaW0gPSBkaW0gfHwgMjtcblxuICAgIHZhciBoYXNIb2xlcyA9IGhvbGVJbmRpY2VzICYmIGhvbGVJbmRpY2VzLmxlbmd0aCxcbiAgICAgICAgb3V0ZXJMZW4gPSBoYXNIb2xlcyA/IGhvbGVJbmRpY2VzWzBdICogZGltIDogZGF0YS5sZW5ndGgsXG4gICAgICAgIG91dGVyTm9kZSA9IGxpbmtlZExpc3QoZGF0YSwgMCwgb3V0ZXJMZW4sIGRpbSwgdHJ1ZSksXG4gICAgICAgIHRyaWFuZ2xlcyA9IFtdO1xuXG4gICAgaWYgKCFvdXRlck5vZGUpIHJldHVybiB0cmlhbmdsZXM7XG5cbiAgICB2YXIgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgeCwgeSwgc2l6ZTtcblxuICAgIGlmIChoYXNIb2xlcykgb3V0ZXJOb2RlID0gZWxpbWluYXRlSG9sZXMoZGF0YSwgaG9sZUluZGljZXMsIG91dGVyTm9kZSwgZGltKTtcblxuICAgIC8vIGlmIHRoZSBzaGFwZSBpcyBub3QgdG9vIHNpbXBsZSwgd2UnbGwgdXNlIHotb3JkZXIgY3VydmUgaGFzaCBsYXRlcjsgY2FsY3VsYXRlIHBvbHlnb24gYmJveFxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDgwICogZGltKSB7XG4gICAgICAgIG1pblggPSBtYXhYID0gZGF0YVswXTtcbiAgICAgICAgbWluWSA9IG1heFkgPSBkYXRhWzFdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBkaW07IGkgPCBvdXRlckxlbjsgaSArPSBkaW0pIHtcbiAgICAgICAgICAgIHggPSBkYXRhW2ldO1xuICAgICAgICAgICAgeSA9IGRhdGFbaSArIDFdO1xuICAgICAgICAgICAgaWYgKHggPCBtaW5YKSBtaW5YID0geDtcbiAgICAgICAgICAgIGlmICh5IDwgbWluWSkgbWluWSA9IHk7XG4gICAgICAgICAgICBpZiAoeCA+IG1heFgpIG1heFggPSB4O1xuICAgICAgICAgICAgaWYgKHkgPiBtYXhZKSBtYXhZID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1pblgsIG1pblkgYW5kIHNpemUgYXJlIGxhdGVyIHVzZWQgdG8gdHJhbnNmb3JtIGNvb3JkcyBpbnRvIGludGVnZXJzIGZvciB6LW9yZGVyIGNhbGN1bGF0aW9uXG4gICAgICAgIHNpemUgPSBNYXRoLm1heChtYXhYIC0gbWluWCwgbWF4WSAtIG1pblkpO1xuICAgIH1cblxuICAgIGVhcmN1dExpbmtlZChvdXRlck5vZGUsIHRyaWFuZ2xlcywgZGltLCBtaW5YLCBtaW5ZLCBzaXplKTtcblxuICAgIHJldHVybiB0cmlhbmdsZXM7XG59XG5cbi8vIGNyZWF0ZSBhIGNpcmN1bGFyIGRvdWJseSBsaW5rZWQgbGlzdCBmcm9tIHBvbHlnb24gcG9pbnRzIGluIHRoZSBzcGVjaWZpZWQgd2luZGluZyBvcmRlclxuZnVuY3Rpb24gbGlua2VkTGlzdChkYXRhLCBzdGFydCwgZW5kLCBkaW0sIGNsb2Nrd2lzZSkge1xuICAgIHZhciBpLCBsYXN0O1xuXG4gICAgaWYgKGNsb2Nrd2lzZSA9PT0gKHNpZ25lZEFyZWEoZGF0YSwgc3RhcnQsIGVuZCwgZGltKSA+IDApKSB7XG4gICAgICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IGRpbSkgbGFzdCA9IGluc2VydE5vZGUoaSwgZGF0YVtpXSwgZGF0YVtpICsgMV0sIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IGVuZCAtIGRpbTsgaSA+PSBzdGFydDsgaSAtPSBkaW0pIGxhc3QgPSBpbnNlcnROb2RlKGksIGRhdGFbaV0sIGRhdGFbaSArIDFdLCBsYXN0KTtcbiAgICB9XG5cbiAgICBpZiAobGFzdCAmJiBlcXVhbHMobGFzdCwgbGFzdC5uZXh0KSkge1xuICAgICAgICByZW1vdmVOb2RlKGxhc3QpO1xuICAgICAgICBsYXN0ID0gbGFzdC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0O1xufVxuXG4vLyBlbGltaW5hdGUgY29saW5lYXIgb3IgZHVwbGljYXRlIHBvaW50c1xuZnVuY3Rpb24gZmlsdGVyUG9pbnRzKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoIXN0YXJ0KSByZXR1cm4gc3RhcnQ7XG4gICAgaWYgKCFlbmQpIGVuZCA9IHN0YXJ0O1xuXG4gICAgdmFyIHAgPSBzdGFydCxcbiAgICAgICAgYWdhaW47XG4gICAgZG8ge1xuICAgICAgICBhZ2FpbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcC5zdGVpbmVyICYmIChlcXVhbHMocCwgcC5uZXh0KSB8fCBhcmVhKHAucHJldiwgcCwgcC5uZXh0KSA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUocCk7XG4gICAgICAgICAgICBwID0gZW5kID0gcC5wcmV2O1xuICAgICAgICAgICAgaWYgKHAgPT09IHAubmV4dCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBhZ2FpbiA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHAgPSBwLm5leHQ7XG4gICAgICAgIH1cbiAgICB9IHdoaWxlIChhZ2FpbiB8fCBwICE9PSBlbmQpO1xuXG4gICAgcmV0dXJuIGVuZDtcbn1cblxuLy8gbWFpbiBlYXIgc2xpY2luZyBsb29wIHdoaWNoIHRyaWFuZ3VsYXRlcyBhIHBvbHlnb24gKGdpdmVuIGFzIGEgbGlua2VkIGxpc3QpXG5mdW5jdGlvbiBlYXJjdXRMaW5rZWQoZWFyLCB0cmlhbmdsZXMsIGRpbSwgbWluWCwgbWluWSwgc2l6ZSwgcGFzcykge1xuICAgIGlmICghZWFyKSByZXR1cm47XG5cbiAgICAvLyBpbnRlcmxpbmsgcG9seWdvbiBub2RlcyBpbiB6LW9yZGVyXG4gICAgaWYgKCFwYXNzICYmIHNpemUpIGluZGV4Q3VydmUoZWFyLCBtaW5YLCBtaW5ZLCBzaXplKTtcblxuICAgIHZhciBzdG9wID0gZWFyLFxuICAgICAgICBwcmV2LCBuZXh0O1xuXG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGVhcnMsIHNsaWNpbmcgdGhlbSBvbmUgYnkgb25lXG4gICAgd2hpbGUgKGVhci5wcmV2ICE9PSBlYXIubmV4dCkge1xuICAgICAgICBwcmV2ID0gZWFyLnByZXY7XG4gICAgICAgIG5leHQgPSBlYXIubmV4dDtcblxuICAgICAgICBpZiAoc2l6ZSA/IGlzRWFySGFzaGVkKGVhciwgbWluWCwgbWluWSwgc2l6ZSkgOiBpc0VhcihlYXIpKSB7XG4gICAgICAgICAgICAvLyBjdXQgb2ZmIHRoZSB0cmlhbmdsZVxuICAgICAgICAgICAgdHJpYW5nbGVzLnB1c2gocHJldi5pIC8gZGltKTtcbiAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKGVhci5pIC8gZGltKTtcbiAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKG5leHQuaSAvIGRpbSk7XG5cbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZWFyKTtcblxuICAgICAgICAgICAgLy8gc2tpcHBpbmcgdGhlIG5leHQgdmVydGljZSBsZWFkcyB0byBsZXNzIHNsaXZlciB0cmlhbmdsZXNcbiAgICAgICAgICAgIGVhciA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIHN0b3AgPSBuZXh0Lm5leHQ7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZWFyID0gbmV4dDtcblxuICAgICAgICAvLyBpZiB3ZSBsb29wZWQgdGhyb3VnaCB0aGUgd2hvbGUgcmVtYWluaW5nIHBvbHlnb24gYW5kIGNhbid0IGZpbmQgYW55IG1vcmUgZWFyc1xuICAgICAgICBpZiAoZWFyID09PSBzdG9wKSB7XG4gICAgICAgICAgICAvLyB0cnkgZmlsdGVyaW5nIHBvaW50cyBhbmQgc2xpY2luZyBhZ2FpblxuICAgICAgICAgICAgaWYgKCFwYXNzKSB7XG4gICAgICAgICAgICAgICAgZWFyY3V0TGlua2VkKGZpbHRlclBvaW50cyhlYXIpLCB0cmlhbmdsZXMsIGRpbSwgbWluWCwgbWluWSwgc2l6ZSwgMSk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlkbid0IHdvcmssIHRyeSBjdXJpbmcgYWxsIHNtYWxsIHNlbGYtaW50ZXJzZWN0aW9ucyBsb2NhbGx5XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBlYXIgPSBjdXJlTG9jYWxJbnRlcnNlY3Rpb25zKGVhciwgdHJpYW5nbGVzLCBkaW0pO1xuICAgICAgICAgICAgICAgIGVhcmN1dExpbmtlZChlYXIsIHRyaWFuZ2xlcywgZGltLCBtaW5YLCBtaW5ZLCBzaXplLCAyKTtcblxuICAgICAgICAgICAgLy8gYXMgYSBsYXN0IHJlc29ydCwgdHJ5IHNwbGl0dGluZyB0aGUgcmVtYWluaW5nIHBvbHlnb24gaW50byB0d29cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFzcyA9PT0gMikge1xuICAgICAgICAgICAgICAgIHNwbGl0RWFyY3V0KGVhciwgdHJpYW5nbGVzLCBkaW0sIG1pblgsIG1pblksIHNpemUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gY2hlY2sgd2hldGhlciBhIHBvbHlnb24gbm9kZSBmb3JtcyBhIHZhbGlkIGVhciB3aXRoIGFkamFjZW50IG5vZGVzXG5mdW5jdGlvbiBpc0VhcihlYXIpIHtcbiAgICB2YXIgYSA9IGVhci5wcmV2LFxuICAgICAgICBiID0gZWFyLFxuICAgICAgICBjID0gZWFyLm5leHQ7XG5cbiAgICBpZiAoYXJlYShhLCBiLCBjKSA+PSAwKSByZXR1cm4gZmFsc2U7IC8vIHJlZmxleCwgY2FuJ3QgYmUgYW4gZWFyXG5cbiAgICAvLyBub3cgbWFrZSBzdXJlIHdlIGRvbid0IGhhdmUgb3RoZXIgcG9pbnRzIGluc2lkZSB0aGUgcG90ZW50aWFsIGVhclxuICAgIHZhciBwID0gZWFyLm5leHQubmV4dDtcblxuICAgIHdoaWxlIChwICE9PSBlYXIucHJldikge1xuICAgICAgICBpZiAocG9pbnRJblRyaWFuZ2xlKGEueCwgYS55LCBiLngsIGIueSwgYy54LCBjLnksIHAueCwgcC55KSAmJlxuICAgICAgICAgICAgYXJlYShwLnByZXYsIHAsIHAubmV4dCkgPj0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBwID0gcC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc0Vhckhhc2hlZChlYXIsIG1pblgsIG1pblksIHNpemUpIHtcbiAgICB2YXIgYSA9IGVhci5wcmV2LFxuICAgICAgICBiID0gZWFyLFxuICAgICAgICBjID0gZWFyLm5leHQ7XG5cbiAgICBpZiAoYXJlYShhLCBiLCBjKSA+PSAwKSByZXR1cm4gZmFsc2U7IC8vIHJlZmxleCwgY2FuJ3QgYmUgYW4gZWFyXG5cbiAgICAvLyB0cmlhbmdsZSBiYm94OyBtaW4gJiBtYXggYXJlIGNhbGN1bGF0ZWQgbGlrZSB0aGlzIGZvciBzcGVlZFxuICAgIHZhciBtaW5UWCA9IGEueCA8IGIueCA/IChhLnggPCBjLnggPyBhLnggOiBjLngpIDogKGIueCA8IGMueCA/IGIueCA6IGMueCksXG4gICAgICAgIG1pblRZID0gYS55IDwgYi55ID8gKGEueSA8IGMueSA/IGEueSA6IGMueSkgOiAoYi55IDwgYy55ID8gYi55IDogYy55KSxcbiAgICAgICAgbWF4VFggPSBhLnggPiBiLnggPyAoYS54ID4gYy54ID8gYS54IDogYy54KSA6IChiLnggPiBjLnggPyBiLnggOiBjLngpLFxuICAgICAgICBtYXhUWSA9IGEueSA+IGIueSA/IChhLnkgPiBjLnkgPyBhLnkgOiBjLnkpIDogKGIueSA+IGMueSA/IGIueSA6IGMueSk7XG5cbiAgICAvLyB6LW9yZGVyIHJhbmdlIGZvciB0aGUgY3VycmVudCB0cmlhbmdsZSBiYm94O1xuICAgIHZhciBtaW5aID0gek9yZGVyKG1pblRYLCBtaW5UWSwgbWluWCwgbWluWSwgc2l6ZSksXG4gICAgICAgIG1heFogPSB6T3JkZXIobWF4VFgsIG1heFRZLCBtaW5YLCBtaW5ZLCBzaXplKTtcblxuICAgIC8vIGZpcnN0IGxvb2sgZm9yIHBvaW50cyBpbnNpZGUgdGhlIHRyaWFuZ2xlIGluIGluY3JlYXNpbmcgei1vcmRlclxuICAgIHZhciBwID0gZWFyLm5leHRaO1xuXG4gICAgd2hpbGUgKHAgJiYgcC56IDw9IG1heFopIHtcbiAgICAgICAgaWYgKHAgIT09IGVhci5wcmV2ICYmIHAgIT09IGVhci5uZXh0ICYmXG4gICAgICAgICAgICBwb2ludEluVHJpYW5nbGUoYS54LCBhLnksIGIueCwgYi55LCBjLngsIGMueSwgcC54LCBwLnkpICYmXG4gICAgICAgICAgICBhcmVhKHAucHJldiwgcCwgcC5uZXh0KSA+PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHAgPSBwLm5leHRaO1xuICAgIH1cblxuICAgIC8vIHRoZW4gbG9vayBmb3IgcG9pbnRzIGluIGRlY3JlYXNpbmcgei1vcmRlclxuICAgIHAgPSBlYXIucHJldlo7XG5cbiAgICB3aGlsZSAocCAmJiBwLnogPj0gbWluWikge1xuICAgICAgICBpZiAocCAhPT0gZWFyLnByZXYgJiYgcCAhPT0gZWFyLm5leHQgJiZcbiAgICAgICAgICAgIHBvaW50SW5UcmlhbmdsZShhLngsIGEueSwgYi54LCBiLnksIGMueCwgYy55LCBwLngsIHAueSkgJiZcbiAgICAgICAgICAgIGFyZWEocC5wcmV2LCBwLCBwLm5leHQpID49IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgcCA9IHAucHJldlo7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8vIGdvIHRocm91Z2ggYWxsIHBvbHlnb24gbm9kZXMgYW5kIGN1cmUgc21hbGwgbG9jYWwgc2VsZi1pbnRlcnNlY3Rpb25zXG5mdW5jdGlvbiBjdXJlTG9jYWxJbnRlcnNlY3Rpb25zKHN0YXJ0LCB0cmlhbmdsZXMsIGRpbSkge1xuICAgIHZhciBwID0gc3RhcnQ7XG4gICAgZG8ge1xuICAgICAgICB2YXIgYSA9IHAucHJldixcbiAgICAgICAgICAgIGIgPSBwLm5leHQubmV4dDtcblxuICAgICAgICBpZiAoIWVxdWFscyhhLCBiKSAmJiBpbnRlcnNlY3RzKGEsIHAsIHAubmV4dCwgYikgJiYgbG9jYWxseUluc2lkZShhLCBiKSAmJiBsb2NhbGx5SW5zaWRlKGIsIGEpKSB7XG5cbiAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKGEuaSAvIGRpbSk7XG4gICAgICAgICAgICB0cmlhbmdsZXMucHVzaChwLmkgLyBkaW0pO1xuICAgICAgICAgICAgdHJpYW5nbGVzLnB1c2goYi5pIC8gZGltKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHR3byBub2RlcyBpbnZvbHZlZFxuICAgICAgICAgICAgcmVtb3ZlTm9kZShwKTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUocC5uZXh0KTtcblxuICAgICAgICAgICAgcCA9IHN0YXJ0ID0gYjtcbiAgICAgICAgfVxuICAgICAgICBwID0gcC5uZXh0O1xuICAgIH0gd2hpbGUgKHAgIT09IHN0YXJ0KTtcblxuICAgIHJldHVybiBwO1xufVxuXG4vLyB0cnkgc3BsaXR0aW5nIHBvbHlnb24gaW50byB0d28gYW5kIHRyaWFuZ3VsYXRlIHRoZW0gaW5kZXBlbmRlbnRseVxuZnVuY3Rpb24gc3BsaXRFYXJjdXQoc3RhcnQsIHRyaWFuZ2xlcywgZGltLCBtaW5YLCBtaW5ZLCBzaXplKSB7XG4gICAgLy8gbG9vayBmb3IgYSB2YWxpZCBkaWFnb25hbCB0aGF0IGRpdmlkZXMgdGhlIHBvbHlnb24gaW50byB0d29cbiAgICB2YXIgYSA9IHN0YXJ0O1xuICAgIGRvIHtcbiAgICAgICAgdmFyIGIgPSBhLm5leHQubmV4dDtcbiAgICAgICAgd2hpbGUgKGIgIT09IGEucHJldikge1xuICAgICAgICAgICAgaWYgKGEuaSAhPT0gYi5pICYmIGlzVmFsaWREaWFnb25hbChhLCBiKSkge1xuICAgICAgICAgICAgICAgIC8vIHNwbGl0IHRoZSBwb2x5Z29uIGluIHR3byBieSB0aGUgZGlhZ29uYWxcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHNwbGl0UG9seWdvbihhLCBiKTtcblxuICAgICAgICAgICAgICAgIC8vIGZpbHRlciBjb2xpbmVhciBwb2ludHMgYXJvdW5kIHRoZSBjdXRzXG4gICAgICAgICAgICAgICAgYSA9IGZpbHRlclBvaW50cyhhLCBhLm5leHQpO1xuICAgICAgICAgICAgICAgIGMgPSBmaWx0ZXJQb2ludHMoYywgYy5uZXh0KTtcblxuICAgICAgICAgICAgICAgIC8vIHJ1biBlYXJjdXQgb24gZWFjaCBoYWxmXG4gICAgICAgICAgICAgICAgZWFyY3V0TGlua2VkKGEsIHRyaWFuZ2xlcywgZGltLCBtaW5YLCBtaW5ZLCBzaXplKTtcbiAgICAgICAgICAgICAgICBlYXJjdXRMaW5rZWQoYywgdHJpYW5nbGVzLCBkaW0sIG1pblgsIG1pblksIHNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGIgPSBiLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgYSA9IGEubmV4dDtcbiAgICB9IHdoaWxlIChhICE9PSBzdGFydCk7XG59XG5cbi8vIGxpbmsgZXZlcnkgaG9sZSBpbnRvIHRoZSBvdXRlciBsb29wLCBwcm9kdWNpbmcgYSBzaW5nbGUtcmluZyBwb2x5Z29uIHdpdGhvdXQgaG9sZXNcbmZ1bmN0aW9uIGVsaW1pbmF0ZUhvbGVzKGRhdGEsIGhvbGVJbmRpY2VzLCBvdXRlck5vZGUsIGRpbSkge1xuICAgIHZhciBxdWV1ZSA9IFtdLFxuICAgICAgICBpLCBsZW4sIHN0YXJ0LCBlbmQsIGxpc3Q7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBob2xlSW5kaWNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBzdGFydCA9IGhvbGVJbmRpY2VzW2ldICogZGltO1xuICAgICAgICBlbmQgPSBpIDwgbGVuIC0gMSA/IGhvbGVJbmRpY2VzW2kgKyAxXSAqIGRpbSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICBsaXN0ID0gbGlua2VkTGlzdChkYXRhLCBzdGFydCwgZW5kLCBkaW0sIGZhbHNlKTtcbiAgICAgICAgaWYgKGxpc3QgPT09IGxpc3QubmV4dCkgbGlzdC5zdGVpbmVyID0gdHJ1ZTtcbiAgICAgICAgcXVldWUucHVzaChnZXRMZWZ0bW9zdChsaXN0KSk7XG4gICAgfVxuXG4gICAgcXVldWUuc29ydChjb21wYXJlWCk7XG5cbiAgICAvLyBwcm9jZXNzIGhvbGVzIGZyb20gbGVmdCB0byByaWdodFxuICAgIGZvciAoaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbGltaW5hdGVIb2xlKHF1ZXVlW2ldLCBvdXRlck5vZGUpO1xuICAgICAgICBvdXRlck5vZGUgPSBmaWx0ZXJQb2ludHMob3V0ZXJOb2RlLCBvdXRlck5vZGUubmV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dGVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZVgoYSwgYikge1xuICAgIHJldHVybiBhLnggLSBiLng7XG59XG5cbi8vIGZpbmQgYSBicmlkZ2UgYmV0d2VlbiB2ZXJ0aWNlcyB0aGF0IGNvbm5lY3RzIGhvbGUgd2l0aCBhbiBvdXRlciByaW5nIGFuZCBhbmQgbGluayBpdFxuZnVuY3Rpb24gZWxpbWluYXRlSG9sZShob2xlLCBvdXRlck5vZGUpIHtcbiAgICBvdXRlck5vZGUgPSBmaW5kSG9sZUJyaWRnZShob2xlLCBvdXRlck5vZGUpO1xuICAgIGlmIChvdXRlck5vZGUpIHtcbiAgICAgICAgdmFyIGIgPSBzcGxpdFBvbHlnb24ob3V0ZXJOb2RlLCBob2xlKTtcbiAgICAgICAgZmlsdGVyUG9pbnRzKGIsIGIubmV4dCk7XG4gICAgfVxufVxuXG4vLyBEYXZpZCBFYmVybHkncyBhbGdvcml0aG0gZm9yIGZpbmRpbmcgYSBicmlkZ2UgYmV0d2VlbiBob2xlIGFuZCBvdXRlciBwb2x5Z29uXG5mdW5jdGlvbiBmaW5kSG9sZUJyaWRnZShob2xlLCBvdXRlck5vZGUpIHtcbiAgICB2YXIgcCA9IG91dGVyTm9kZSxcbiAgICAgICAgaHggPSBob2xlLngsXG4gICAgICAgIGh5ID0gaG9sZS55LFxuICAgICAgICBxeCA9IC1JbmZpbml0eSxcbiAgICAgICAgbTtcblxuICAgIC8vIGZpbmQgYSBzZWdtZW50IGludGVyc2VjdGVkIGJ5IGEgcmF5IGZyb20gdGhlIGhvbGUncyBsZWZ0bW9zdCBwb2ludCB0byB0aGUgbGVmdDtcbiAgICAvLyBzZWdtZW50J3MgZW5kcG9pbnQgd2l0aCBsZXNzZXIgeCB3aWxsIGJlIHBvdGVudGlhbCBjb25uZWN0aW9uIHBvaW50XG4gICAgZG8ge1xuICAgICAgICBpZiAoaHkgPD0gcC55ICYmIGh5ID49IHAubmV4dC55KSB7XG4gICAgICAgICAgICB2YXIgeCA9IHAueCArIChoeSAtIHAueSkgKiAocC5uZXh0LnggLSBwLngpIC8gKHAubmV4dC55IC0gcC55KTtcbiAgICAgICAgICAgIGlmICh4IDw9IGh4ICYmIHggPiBxeCkge1xuICAgICAgICAgICAgICAgIHF4ID0geDtcbiAgICAgICAgICAgICAgICBpZiAoeCA9PT0gaHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh5ID09PSBwLnkpIHJldHVybiBwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHkgPT09IHAubmV4dC55KSByZXR1cm4gcC5uZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtID0gcC54IDwgcC5uZXh0LnggPyBwIDogcC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAgPSBwLm5leHQ7XG4gICAgfSB3aGlsZSAocCAhPT0gb3V0ZXJOb2RlKTtcblxuICAgIGlmICghbSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoaHggPT09IHF4KSByZXR1cm4gbS5wcmV2OyAvLyBob2xlIHRvdWNoZXMgb3V0ZXIgc2VnbWVudDsgcGljayBsb3dlciBlbmRwb2ludFxuXG4gICAgLy8gbG9vayBmb3IgcG9pbnRzIGluc2lkZSB0aGUgdHJpYW5nbGUgb2YgaG9sZSBwb2ludCwgc2VnbWVudCBpbnRlcnNlY3Rpb24gYW5kIGVuZHBvaW50O1xuICAgIC8vIGlmIHRoZXJlIGFyZSBubyBwb2ludHMgZm91bmQsIHdlIGhhdmUgYSB2YWxpZCBjb25uZWN0aW9uO1xuICAgIC8vIG90aGVyd2lzZSBjaG9vc2UgdGhlIHBvaW50IG9mIHRoZSBtaW5pbXVtIGFuZ2xlIHdpdGggdGhlIHJheSBhcyBjb25uZWN0aW9uIHBvaW50XG5cbiAgICB2YXIgc3RvcCA9IG0sXG4gICAgICAgIG14ID0gbS54LFxuICAgICAgICBteSA9IG0ueSxcbiAgICAgICAgdGFuTWluID0gSW5maW5pdHksXG4gICAgICAgIHRhbjtcblxuICAgIHAgPSBtLm5leHQ7XG5cbiAgICB3aGlsZSAocCAhPT0gc3RvcCkge1xuICAgICAgICBpZiAoaHggPj0gcC54ICYmIHAueCA+PSBteCAmJlxuICAgICAgICAgICAgICAgIHBvaW50SW5UcmlhbmdsZShoeSA8IG15ID8gaHggOiBxeCwgaHksIG14LCBteSwgaHkgPCBteSA/IHF4IDogaHgsIGh5LCBwLngsIHAueSkpIHtcblxuICAgICAgICAgICAgdGFuID0gTWF0aC5hYnMoaHkgLSBwLnkpIC8gKGh4IC0gcC54KTsgLy8gdGFuZ2VudGlhbFxuXG4gICAgICAgICAgICBpZiAoKHRhbiA8IHRhbk1pbiB8fCAodGFuID09PSB0YW5NaW4gJiYgcC54ID4gbS54KSkgJiYgbG9jYWxseUluc2lkZShwLCBob2xlKSkge1xuICAgICAgICAgICAgICAgIG0gPSBwO1xuICAgICAgICAgICAgICAgIHRhbk1pbiA9IHRhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAgPSBwLm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIGludGVybGluayBwb2x5Z29uIG5vZGVzIGluIHotb3JkZXJcbmZ1bmN0aW9uIGluZGV4Q3VydmUoc3RhcnQsIG1pblgsIG1pblksIHNpemUpIHtcbiAgICB2YXIgcCA9IHN0YXJ0O1xuICAgIGRvIHtcbiAgICAgICAgaWYgKHAueiA9PT0gbnVsbCkgcC56ID0gek9yZGVyKHAueCwgcC55LCBtaW5YLCBtaW5ZLCBzaXplKTtcbiAgICAgICAgcC5wcmV2WiA9IHAucHJldjtcbiAgICAgICAgcC5uZXh0WiA9IHAubmV4dDtcbiAgICAgICAgcCA9IHAubmV4dDtcbiAgICB9IHdoaWxlIChwICE9PSBzdGFydCk7XG5cbiAgICBwLnByZXZaLm5leHRaID0gbnVsbDtcbiAgICBwLnByZXZaID0gbnVsbDtcblxuICAgIHNvcnRMaW5rZWQocCk7XG59XG5cbi8vIFNpbW9uIFRhdGhhbSdzIGxpbmtlZCBsaXN0IG1lcmdlIHNvcnQgYWxnb3JpdGhtXG4vLyBodHRwOi8vd3d3LmNoaWFyay5ncmVlbmVuZC5vcmcudWsvfnNndGF0aGFtL2FsZ29yaXRobXMvbGlzdHNvcnQuaHRtbFxuZnVuY3Rpb24gc29ydExpbmtlZChsaXN0KSB7XG4gICAgdmFyIGksIHAsIHEsIGUsIHRhaWwsIG51bU1lcmdlcywgcFNpemUsIHFTaXplLFxuICAgICAgICBpblNpemUgPSAxO1xuXG4gICAgZG8ge1xuICAgICAgICBwID0gbGlzdDtcbiAgICAgICAgbGlzdCA9IG51bGw7XG4gICAgICAgIHRhaWwgPSBudWxsO1xuICAgICAgICBudW1NZXJnZXMgPSAwO1xuXG4gICAgICAgIHdoaWxlIChwKSB7XG4gICAgICAgICAgICBudW1NZXJnZXMrKztcbiAgICAgICAgICAgIHEgPSBwO1xuICAgICAgICAgICAgcFNpemUgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcFNpemUrKztcbiAgICAgICAgICAgICAgICBxID0gcS5uZXh0WjtcbiAgICAgICAgICAgICAgICBpZiAoIXEpIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBxU2l6ZSA9IGluU2l6ZTtcblxuICAgICAgICAgICAgd2hpbGUgKHBTaXplID4gMCB8fCAocVNpemUgPiAwICYmIHEpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocFNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IHE7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxLm5leHRaO1xuICAgICAgICAgICAgICAgICAgICBxU2l6ZS0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocVNpemUgPT09IDAgfHwgIXEpIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBwLm5leHRaO1xuICAgICAgICAgICAgICAgICAgICBwU2l6ZS0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocC56IDw9IHEueikge1xuICAgICAgICAgICAgICAgICAgICBlID0gcDtcbiAgICAgICAgICAgICAgICAgICAgcCA9IHAubmV4dFo7XG4gICAgICAgICAgICAgICAgICAgIHBTaXplLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IHE7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxLm5leHRaO1xuICAgICAgICAgICAgICAgICAgICBxU2l6ZS0tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YWlsKSB0YWlsLm5leHRaID0gZTtcbiAgICAgICAgICAgICAgICBlbHNlIGxpc3QgPSBlO1xuXG4gICAgICAgICAgICAgICAgZS5wcmV2WiA9IHRhaWw7XG4gICAgICAgICAgICAgICAgdGFpbCA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFpbC5uZXh0WiA9IG51bGw7XG4gICAgICAgIGluU2l6ZSAqPSAyO1xuXG4gICAgfSB3aGlsZSAobnVtTWVyZ2VzID4gMSk7XG5cbiAgICByZXR1cm4gbGlzdDtcbn1cblxuLy8gei1vcmRlciBvZiBhIHBvaW50IGdpdmVuIGNvb3JkcyBhbmQgc2l6ZSBvZiB0aGUgZGF0YSBib3VuZGluZyBib3hcbmZ1bmN0aW9uIHpPcmRlcih4LCB5LCBtaW5YLCBtaW5ZLCBzaXplKSB7XG4gICAgLy8gY29vcmRzIGFyZSB0cmFuc2Zvcm1lZCBpbnRvIG5vbi1uZWdhdGl2ZSAxNS1iaXQgaW50ZWdlciByYW5nZVxuICAgIHggPSAzMjc2NyAqICh4IC0gbWluWCkgLyBzaXplO1xuICAgIHkgPSAzMjc2NyAqICh5IC0gbWluWSkgLyBzaXplO1xuXG4gICAgeCA9ICh4IHwgKHggPDwgOCkpICYgMHgwMEZGMDBGRjtcbiAgICB4ID0gKHggfCAoeCA8PCA0KSkgJiAweDBGMEYwRjBGO1xuICAgIHggPSAoeCB8ICh4IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gICAgeCA9ICh4IHwgKHggPDwgMSkpICYgMHg1NTU1NTU1NTtcblxuICAgIHkgPSAoeSB8ICh5IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gICAgeSA9ICh5IHwgKHkgPDwgNCkpICYgMHgwRjBGMEYwRjtcbiAgICB5ID0gKHkgfCAoeSA8PCAyKSkgJiAweDMzMzMzMzMzO1xuICAgIHkgPSAoeSB8ICh5IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgICByZXR1cm4geCB8ICh5IDw8IDEpO1xufVxuXG4vLyBmaW5kIHRoZSBsZWZ0bW9zdCBub2RlIG9mIGEgcG9seWdvbiByaW5nXG5mdW5jdGlvbiBnZXRMZWZ0bW9zdChzdGFydCkge1xuICAgIHZhciBwID0gc3RhcnQsXG4gICAgICAgIGxlZnRtb3N0ID0gc3RhcnQ7XG4gICAgZG8ge1xuICAgICAgICBpZiAocC54IDwgbGVmdG1vc3QueCkgbGVmdG1vc3QgPSBwO1xuICAgICAgICBwID0gcC5uZXh0O1xuICAgIH0gd2hpbGUgKHAgIT09IHN0YXJ0KTtcblxuICAgIHJldHVybiBsZWZ0bW9zdDtcbn1cblxuLy8gY2hlY2sgaWYgYSBwb2ludCBsaWVzIHdpdGhpbiBhIGNvbnZleCB0cmlhbmdsZVxuZnVuY3Rpb24gcG9pbnRJblRyaWFuZ2xlKGF4LCBheSwgYngsIGJ5LCBjeCwgY3ksIHB4LCBweSkge1xuICAgIHJldHVybiAoY3ggLSBweCkgKiAoYXkgLSBweSkgLSAoYXggLSBweCkgKiAoY3kgLSBweSkgPj0gMCAmJlxuICAgICAgICAgICAoYXggLSBweCkgKiAoYnkgLSBweSkgLSAoYnggLSBweCkgKiAoYXkgLSBweSkgPj0gMCAmJlxuICAgICAgICAgICAoYnggLSBweCkgKiAoY3kgLSBweSkgLSAoY3ggLSBweCkgKiAoYnkgLSBweSkgPj0gMDtcbn1cblxuLy8gY2hlY2sgaWYgYSBkaWFnb25hbCBiZXR3ZWVuIHR3byBwb2x5Z29uIG5vZGVzIGlzIHZhbGlkIChsaWVzIGluIHBvbHlnb24gaW50ZXJpb3IpXG5mdW5jdGlvbiBpc1ZhbGlkRGlhZ29uYWwoYSwgYikge1xuICAgIHJldHVybiBhLm5leHQuaSAhPT0gYi5pICYmIGEucHJldi5pICE9PSBiLmkgJiYgIWludGVyc2VjdHNQb2x5Z29uKGEsIGIpICYmXG4gICAgICAgICAgIGxvY2FsbHlJbnNpZGUoYSwgYikgJiYgbG9jYWxseUluc2lkZShiLCBhKSAmJiBtaWRkbGVJbnNpZGUoYSwgYik7XG59XG5cbi8vIHNpZ25lZCBhcmVhIG9mIGEgdHJpYW5nbGVcbmZ1bmN0aW9uIGFyZWEocCwgcSwgcikge1xuICAgIHJldHVybiAocS55IC0gcC55KSAqIChyLnggLSBxLngpIC0gKHEueCAtIHAueCkgKiAoci55IC0gcS55KTtcbn1cblxuLy8gY2hlY2sgaWYgdHdvIHBvaW50cyBhcmUgZXF1YWxcbmZ1bmN0aW9uIGVxdWFscyhwMSwgcDIpIHtcbiAgICByZXR1cm4gcDEueCA9PT0gcDIueCAmJiBwMS55ID09PSBwMi55O1xufVxuXG4vLyBjaGVjayBpZiB0d28gc2VnbWVudHMgaW50ZXJzZWN0XG5mdW5jdGlvbiBpbnRlcnNlY3RzKHAxLCBxMSwgcDIsIHEyKSB7XG4gICAgaWYgKChlcXVhbHMocDEsIHExKSAmJiBlcXVhbHMocDIsIHEyKSkgfHxcbiAgICAgICAgKGVxdWFscyhwMSwgcTIpICYmIGVxdWFscyhwMiwgcTEpKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGFyZWEocDEsIHExLCBwMikgPiAwICE9PSBhcmVhKHAxLCBxMSwgcTIpID4gMCAmJlxuICAgICAgICAgICBhcmVhKHAyLCBxMiwgcDEpID4gMCAhPT0gYXJlYShwMiwgcTIsIHExKSA+IDA7XG59XG5cbi8vIGNoZWNrIGlmIGEgcG9seWdvbiBkaWFnb25hbCBpbnRlcnNlY3RzIGFueSBwb2x5Z29uIHNlZ21lbnRzXG5mdW5jdGlvbiBpbnRlcnNlY3RzUG9seWdvbihhLCBiKSB7XG4gICAgdmFyIHAgPSBhO1xuICAgIGRvIHtcbiAgICAgICAgaWYgKHAuaSAhPT0gYS5pICYmIHAubmV4dC5pICE9PSBhLmkgJiYgcC5pICE9PSBiLmkgJiYgcC5uZXh0LmkgIT09IGIuaSAmJlxuICAgICAgICAgICAgICAgIGludGVyc2VjdHMocCwgcC5uZXh0LCBhLCBiKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHAgPSBwLm5leHQ7XG4gICAgfSB3aGlsZSAocCAhPT0gYSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGNoZWNrIGlmIGEgcG9seWdvbiBkaWFnb25hbCBpcyBsb2NhbGx5IGluc2lkZSB0aGUgcG9seWdvblxuZnVuY3Rpb24gbG9jYWxseUluc2lkZShhLCBiKSB7XG4gICAgcmV0dXJuIGFyZWEoYS5wcmV2LCBhLCBhLm5leHQpIDwgMCA/XG4gICAgICAgIGFyZWEoYSwgYiwgYS5uZXh0KSA+PSAwICYmIGFyZWEoYSwgYS5wcmV2LCBiKSA+PSAwIDpcbiAgICAgICAgYXJlYShhLCBiLCBhLnByZXYpIDwgMCB8fCBhcmVhKGEsIGEubmV4dCwgYikgPCAwO1xufVxuXG4vLyBjaGVjayBpZiB0aGUgbWlkZGxlIHBvaW50IG9mIGEgcG9seWdvbiBkaWFnb25hbCBpcyBpbnNpZGUgdGhlIHBvbHlnb25cbmZ1bmN0aW9uIG1pZGRsZUluc2lkZShhLCBiKSB7XG4gICAgdmFyIHAgPSBhLFxuICAgICAgICBpbnNpZGUgPSBmYWxzZSxcbiAgICAgICAgcHggPSAoYS54ICsgYi54KSAvIDIsXG4gICAgICAgIHB5ID0gKGEueSArIGIueSkgLyAyO1xuICAgIGRvIHtcbiAgICAgICAgaWYgKCgocC55ID4gcHkpICE9PSAocC5uZXh0LnkgPiBweSkpICYmIChweCA8IChwLm5leHQueCAtIHAueCkgKiAocHkgLSBwLnkpIC8gKHAubmV4dC55IC0gcC55KSArIHAueCkpXG4gICAgICAgICAgICBpbnNpZGUgPSAhaW5zaWRlO1xuICAgICAgICBwID0gcC5uZXh0O1xuICAgIH0gd2hpbGUgKHAgIT09IGEpO1xuXG4gICAgcmV0dXJuIGluc2lkZTtcbn1cblxuLy8gbGluayB0d28gcG9seWdvbiB2ZXJ0aWNlcyB3aXRoIGEgYnJpZGdlOyBpZiB0aGUgdmVydGljZXMgYmVsb25nIHRvIHRoZSBzYW1lIHJpbmcsIGl0IHNwbGl0cyBwb2x5Z29uIGludG8gdHdvO1xuLy8gaWYgb25lIGJlbG9uZ3MgdG8gdGhlIG91dGVyIHJpbmcgYW5kIGFub3RoZXIgdG8gYSBob2xlLCBpdCBtZXJnZXMgaXQgaW50byBhIHNpbmdsZSByaW5nXG5mdW5jdGlvbiBzcGxpdFBvbHlnb24oYSwgYikge1xuICAgIHZhciBhMiA9IG5ldyBOb2RlKGEuaSwgYS54LCBhLnkpLFxuICAgICAgICBiMiA9IG5ldyBOb2RlKGIuaSwgYi54LCBiLnkpLFxuICAgICAgICBhbiA9IGEubmV4dCxcbiAgICAgICAgYnAgPSBiLnByZXY7XG5cbiAgICBhLm5leHQgPSBiO1xuICAgIGIucHJldiA9IGE7XG5cbiAgICBhMi5uZXh0ID0gYW47XG4gICAgYW4ucHJldiA9IGEyO1xuXG4gICAgYjIubmV4dCA9IGEyO1xuICAgIGEyLnByZXYgPSBiMjtcblxuICAgIGJwLm5leHQgPSBiMjtcbiAgICBiMi5wcmV2ID0gYnA7XG5cbiAgICByZXR1cm4gYjI7XG59XG5cbi8vIGNyZWF0ZSBhIG5vZGUgYW5kIG9wdGlvbmFsbHkgbGluayBpdCB3aXRoIHByZXZpb3VzIG9uZSAoaW4gYSBjaXJjdWxhciBkb3VibHkgbGlua2VkIGxpc3QpXG5mdW5jdGlvbiBpbnNlcnROb2RlKGksIHgsIHksIGxhc3QpIHtcbiAgICB2YXIgcCA9IG5ldyBOb2RlKGksIHgsIHkpO1xuXG4gICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHAucHJldiA9IHA7XG4gICAgICAgIHAubmV4dCA9IHA7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBwLm5leHQgPSBsYXN0Lm5leHQ7XG4gICAgICAgIHAucHJldiA9IGxhc3Q7XG4gICAgICAgIGxhc3QubmV4dC5wcmV2ID0gcDtcbiAgICAgICAgbGFzdC5uZXh0ID0gcDtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUocCkge1xuICAgIHAubmV4dC5wcmV2ID0gcC5wcmV2O1xuICAgIHAucHJldi5uZXh0ID0gcC5uZXh0O1xuXG4gICAgaWYgKHAucHJldlopIHAucHJldloubmV4dFogPSBwLm5leHRaO1xuICAgIGlmIChwLm5leHRaKSBwLm5leHRaLnByZXZaID0gcC5wcmV2Wjtcbn1cblxuZnVuY3Rpb24gTm9kZShpLCB4LCB5KSB7XG4gICAgLy8gdmVydGljZSBpbmRleCBpbiBjb29yZGluYXRlcyBhcnJheVxuICAgIHRoaXMuaSA9IGk7XG5cbiAgICAvLyB2ZXJ0ZXggY29vcmRpbmF0ZXNcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG5cbiAgICAvLyBwcmV2aW91cyBhbmQgbmV4dCB2ZXJ0aWNlIG5vZGVzIGluIGEgcG9seWdvbiByaW5nXG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuXG4gICAgLy8gei1vcmRlciBjdXJ2ZSB2YWx1ZVxuICAgIHRoaXMueiA9IG51bGw7XG5cbiAgICAvLyBwcmV2aW91cyBhbmQgbmV4dCBub2RlcyBpbiB6LW9yZGVyXG4gICAgdGhpcy5wcmV2WiA9IG51bGw7XG4gICAgdGhpcy5uZXh0WiA9IG51bGw7XG5cbiAgICAvLyBpbmRpY2F0ZXMgd2hldGhlciB0aGlzIGlzIGEgc3RlaW5lciBwb2ludFxuICAgIHRoaXMuc3RlaW5lciA9IGZhbHNlO1xufVxuXG4vLyByZXR1cm4gYSBwZXJjZW50YWdlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgcG9seWdvbiBhcmVhIGFuZCBpdHMgdHJpYW5ndWxhdGlvbiBhcmVhO1xuLy8gdXNlZCB0byB2ZXJpZnkgY29ycmVjdG5lc3Mgb2YgdHJpYW5ndWxhdGlvblxuZWFyY3V0LmRldmlhdGlvbiA9IGZ1bmN0aW9uIChkYXRhLCBob2xlSW5kaWNlcywgZGltLCB0cmlhbmdsZXMpIHtcbiAgICB2YXIgaGFzSG9sZXMgPSBob2xlSW5kaWNlcyAmJiBob2xlSW5kaWNlcy5sZW5ndGg7XG4gICAgdmFyIG91dGVyTGVuID0gaGFzSG9sZXMgPyBob2xlSW5kaWNlc1swXSAqIGRpbSA6IGRhdGEubGVuZ3RoO1xuXG4gICAgdmFyIHBvbHlnb25BcmVhID0gTWF0aC5hYnMoc2lnbmVkQXJlYShkYXRhLCAwLCBvdXRlckxlbiwgZGltKSk7XG4gICAgaWYgKGhhc0hvbGVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBob2xlSW5kaWNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gaG9sZUluZGljZXNbaV0gKiBkaW07XG4gICAgICAgICAgICB2YXIgZW5kID0gaSA8IGxlbiAtIDEgPyBob2xlSW5kaWNlc1tpICsgMV0gKiBkaW0gOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIHBvbHlnb25BcmVhIC09IE1hdGguYWJzKHNpZ25lZEFyZWEoZGF0YSwgc3RhcnQsIGVuZCwgZGltKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdHJpYW5nbGVzQXJlYSA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHRyaWFuZ2xlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICB2YXIgYSA9IHRyaWFuZ2xlc1tpXSAqIGRpbTtcbiAgICAgICAgdmFyIGIgPSB0cmlhbmdsZXNbaSArIDFdICogZGltO1xuICAgICAgICB2YXIgYyA9IHRyaWFuZ2xlc1tpICsgMl0gKiBkaW07XG4gICAgICAgIHRyaWFuZ2xlc0FyZWEgKz0gTWF0aC5hYnMoXG4gICAgICAgICAgICAoZGF0YVthXSAtIGRhdGFbY10pICogKGRhdGFbYiArIDFdIC0gZGF0YVthICsgMV0pIC1cbiAgICAgICAgICAgIChkYXRhW2FdIC0gZGF0YVtiXSkgKiAoZGF0YVtjICsgMV0gLSBkYXRhW2EgKyAxXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBwb2x5Z29uQXJlYSA9PT0gMCAmJiB0cmlhbmdsZXNBcmVhID09PSAwID8gMCA6XG4gICAgICAgIE1hdGguYWJzKCh0cmlhbmdsZXNBcmVhIC0gcG9seWdvbkFyZWEpIC8gcG9seWdvbkFyZWEpO1xufTtcblxuZnVuY3Rpb24gc2lnbmVkQXJlYShkYXRhLCBzdGFydCwgZW5kLCBkaW0pIHtcbiAgICB2YXIgc3VtID0gMDtcbiAgICBmb3IgKHZhciBpID0gc3RhcnQsIGogPSBlbmQgLSBkaW07IGkgPCBlbmQ7IGkgKz0gZGltKSB7XG4gICAgICAgIHN1bSArPSAoZGF0YVtqXSAtIGRhdGFbaV0pICogKGRhdGFbaSArIDFdICsgZGF0YVtqICsgMV0pO1xuICAgICAgICBqID0gaTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbn1cblxuLy8gdHVybiBhIHBvbHlnb24gaW4gYSBtdWx0aS1kaW1lbnNpb25hbCBhcnJheSBmb3JtIChlLmcuIGFzIGluIEdlb0pTT04pIGludG8gYSBmb3JtIEVhcmN1dCBhY2NlcHRzXG5lYXJjdXQuZmxhdHRlbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIGRpbSA9IGRhdGFbMF1bMF0ubGVuZ3RoLFxuICAgICAgICByZXN1bHQgPSB7dmVydGljZXM6IFtdLCBob2xlczogW10sIGRpbWVuc2lvbnM6IGRpbX0sXG4gICAgICAgIGhvbGVJbmRleCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRpbTsgZCsrKSByZXN1bHQudmVydGljZXMucHVzaChkYXRhW2ldW2pdW2RdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGhvbGVJbmRleCArPSBkYXRhW2kgLSAxXS5sZW5ndGg7XG4gICAgICAgICAgICByZXN1bHQuaG9sZXMucHVzaChob2xlSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0ICogYXMgbWFwdGFsa3MgZnJvbSAnbWFwdGFsa3MnO1xuaW1wb3J0IFBhaW50ZXIgZnJvbSAnLi9QYWludGVyJztcbmltcG9ydCBlYXJjdXQgZnJvbSAnZWFyY3V0JztcbmltcG9ydCB7IGdldFRhcmdldFpvb20gfSBmcm9tICcuL1BhaW50ZXInO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICAgIC8v6L6T5YWl5pWw5o2u5Li657uP57qs5bqm5pe2LCDovazljJbkuLoyZCBwb2ludFxuICAgICdwcm9qZWN0JyA6IHRydWVcbn07XG5cbi8qKlxuICogQSBQb2x5Z29uIFBhaW50ZXIgdG8gcHJvZHVjZSB2ZXJ0ZXggY29vcmRpbmF0ZXMgZm9yIFdlYkdMIHNoYWRlcnMuIDxicj5cbiAqXG4gKiBAYXV0aG9yIGZ1emhlbm5cbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uUGFpbnRlciBleHRlbmRzIFBhaW50ZXIge1xuICAgIGNvbnN0cnVjdG9yKGdsLCBtYXAsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoZ2wsIG1hcCwgb3B0aW9ucyk7XG4gICAgICAgIC8vIOe7k+aenOaVsOe7hFxuICAgICAgICAvLy0tLS0tLS0tLS0tXG4gICAgICAgIHRoaXMudmVydGV4QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5zdHlsZUFycmF5ID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue57uT5p6c5pWw57uEXG4gICAgICogQHJldHVybiB7T2JqZWN0fSDnu5PmnpzmlbDnu4RcbiAgICAgKi9cbiAgICBnZXRBcnJheXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAndmVydGV4QXJyYXknICA6IHRoaXMudmVydGV4QXJyYXksXG4gICAgICAgICAgICAnZWxlbWVudEFycmF5JyA6IHRoaXMuZWxlbWVudEFycmF5LFxuICAgICAgICAgICAgJ3N0eWxlQXJyYXknICAgOiB0aGlzLnN0eWxlQXJyYXlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDkuIDmnaFQb2x5Z29u5pWw5o2u55qE5Z2Q5qCH5pWw57uELCAg5Z2Q5qCH5Li657uP57qs5bqm5oiW6ICFMmQgcG9pbnQo5Z2Q5qCH5pa55ZCR5LiO5bGP5bmV5Z2Q5qCH55u45ZCMKS5cbiAgICAgKiDlvZPmlbDmja7kuLrnu4/nuqzluqbml7YsIOmcgOimgeaKim9wdGlvbnPkuK3nmoRwcm9qZWN06K6+5Li6dHJ1ZVxuICAgICAqIOWkmui+ueW9ouaVsOaNruWPr+S7peaYryBQb2x5Z29uLCDkuZ/lj6/ku6XmmK8gTXVsdGlQb2x5Z29uLlxuICAgICAqIOWmguaenOaYr011bHRpUG9seWdvbiwg5pWw57uE5b2i5byP5Li6OiBbW1t4MCwgeTBdLFt4MSwgeTFdLCAuLl1dXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg56ys5LiA5p2h5aSa6L655b2i55qE5Z2Q5qCH5pWw57uEICAgICAg56ys5LqM5p2h57q/55qE5Z2Q5qCH5pWw57uEXG4gICAgICog5aaC5p6c5pivTXVsdGlQb2x5Z29uLCDmlbDnu4TlvaLlvI/kuLo6IFtbW1t4MDAsIHkwMF0sW3gwMSwgeTAxXSwgLi5dXSwgW1tbeDEwLCB5MTBdLFt4MTEsIHkxMV0sIC4uXV1dXG4gICAgICogc3R5bGXkuLrlpJrovrnlvaLnmoTmoLflvI8sIOeUqOadpeeUn+aIkOagt+W8j+aVsOaNri5cbiAgICAgKiBAcGFyYW0ge051bWJlcltdW118TnVtYmVyW11bXVtdfSBwb2x5Z29uIC0g5aSa6L655b2i5Z2Q5qCH5pWw57uEXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIC0g5aSa6L655b2i55qE5qC35byPLCBtYXB0YWxrcy5qc+eahFN5bWJvbFxuICAgICAqL1xuICAgIGFkZFBvbHlnb24ocG9seWdvbiwgc3R5bGUpIHtcbiAgICAgICAgaWYgKCFwb2x5Z29uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGUuc3ltYm9sWydwb2x5Z29uT3BhY2l0eSddIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmVydGljZSA9IHRoaXMuX2dldFZlcnRpY2UocG9seWdvbik7XG5cbiAgICAgICAgLy/ovpPlhaXmmK9NdWx0aVBvbHlnb27ml7YsIOmBjeWOhmNoaWxkcmVuLCDlubbkvp3mrKHmt7vliqDlpITnkIZcbiAgICAgICAgaWYgKHZlcnRpY2VbMF0gJiYgQXJyYXkuaXNBcnJheSh2ZXJ0aWNlWzBdWzBdKSAmJiBBcnJheS5pc0FycmF5KHZlcnRpY2VbMF1bMF1bMF0pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHZlcnRpY2UubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2x5Z29uKHZlcnRpY2VbaV0sIHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHZlcnRpY2UuZm9yRWFjaChyaW5nID0+IHtcbiAgICAgICAgICAgIGlmICghcmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VxdWFsQ29vcmQocmluZ1swXSwgcmluZ1tyaW5nLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgICAgIHJpbmcucHVzaChyaW5nWzBdLCByaW5nWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRhcmdldFogPSBnZXRUYXJnZXRab29tKHRoaXMubWFwKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGVhcmN1dC5mbGF0dGVuKHZlcnRpY2UpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3Byb2plY3QnXSkge1xuICAgICAgICAgICAgY29uc3QgdiA9IFtdO1xuICAgICAgICAgICAgbGV0IGM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEudmVydGljZXMubGVuZ3RoOyBpIDwgbDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgYyA9IHRoaXMubWFwLmNvb3JkaW5hdGVUb1BvaW50KG5ldyBtYXB0YWxrcy5Db29yZGluYXRlKGRhdGEudmVydGljZXNbaV0sIGRhdGEudmVydGljZXNbaSArIDFdKSwgdGFyZ2V0Wik7XG4gICAgICAgICAgICAgICAgdi5wdXNoKGMueCwgYy55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEudmVydGljZXMgPSB2O1xuICAgICAgICB9XG4gICAgICAgIGxldCB0cmlhbmdsZXMgPSBlYXJjdXQoZGF0YS52ZXJ0aWNlcywgZGF0YS5ob2xlcywgMik7XG4gICAgICAgIGlmICh0cmlhbmdsZXMubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRldmlhdGlvbiA9IGVhcmN1dC5kZXZpYXRpb24oZGF0YS52ZXJ0aWNlcywgZGF0YS5ob2xlcywgMiwgdHJpYW5nbGVzKTtcbiAgICAgICAgaWYgKE1hdGgucm91bmQoZGV2aWF0aW9uICogMUUzKSAvIDFFMyAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKGNvbnNvbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0cmlhbmdsdWF0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnZlcnRleEFycmF5Lmxlbmd0aCAvIDI7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRyaWFuZ2xlcyA9IHRyaWFuZ2xlcy5tYXAoZSA9PiBlICsgY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIG1hcHRhbGtzLlV0aWwucHVzaEluKHRoaXMudmVydGV4QXJyYXksIGRhdGEudmVydGljZXMpO1xuICAgICAgICBtYXB0YWxrcy5VdGlsLnB1c2hJbih0aGlzLmVsZW1lbnRBcnJheSwgdHJpYW5nbGVzKTtcblxuICAgICAgICAvLyDmt7vliqDmoLflvI/mlbDmja5cbiAgICAgICAgdGhpcy5fYWRkVGV4Q29vcmRzKGRhdGEudmVydGljZXMubGVuZ3RoIC8gMiwgc3R5bGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZ2V0VmVydGljZShnZW8pIHtcbiAgICAgICAgaWYgKGdlby5nZW9tZXRyeSkge1xuICAgICAgICAgICAgLy9HZW9KU09OIGZlYXR1cmVcbiAgICAgICAgICAgIGdlbyA9IGdlby5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgICAgfSBlbHNlIGlmIChnZW8uY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIC8vR2VvSlNPTiBnZW9tZXRyeVxuICAgICAgICAgICAgZ2VvID0gZ2VvLmNvb3JkaW5hdGVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW87XG4gICAgfVxuXG4gICAgX2FkZFRleENvb3JkcyhuLCBzdHlsZSkge1xuICAgICAgICAvLyB0ZXhfaWR4ICogMTAwICsgb3BhY2l0eSAqIDEwXG4gICAgICAgIGNvbnN0IHYgPSBzdHlsZS5pbmRleCAqIDEwMCArIChzdHlsZS5zeW1ib2xbJ3BvbHlnb25PcGFjaXR5J10gfHwgMSkgKiAxMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVBcnJheS5wdXNoKHYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2VxdWFsQ29vcmQoYzEsIGMyKSB7XG4gICAgICAgIHJldHVybiBjMVswXSA9PT0gYzJbMF0gJiYgYzFbMV0gPT09IGMyWzFdO1xuICAgIH1cbn1cblxuUG9seWdvblBhaW50ZXIubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuIiwiZXhwb3J0IGRlZmF1bHRcbmAjaWZkZWYgR0xfRVNcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuI2Vsc2VcbiNkZWZpbmUgbG93cFxuI2RlZmluZSBtZWRpdW1wXG4jZGVmaW5lIGhpZ2hwXG4jZW5kaWZcblxudW5pZm9ybSBmbG9hdCB1X2JsdXI7XG51bmlmb3JtIHZlYzIgdV90ZXhfc2l6ZTtcblxuLy8gdmFyeWluZyBsb3dwIHZlYzQgdl9jb2xvcjtcbi8vIHZhcnlpbmcgdmVjMiB2X2xpbmVub3JtYWw7XG52YXJ5aW5nIHZlYzQgdl90ZXhjb29yZDtcbnZhcnlpbmcgZmxvYXQgdl9vcGFjaXR5O1xudmFyeWluZyBmbG9hdCB2X2xpbmV3aWR0aDtcbnZhcnlpbmcgZmxvYXQgdl9zY2FsZTtcbnZhcnlpbmcgZmxvYXQgdl90ZXh0dXJlX25vcm1hbDtcbnZhcnlpbmcgZmxvYXQgdl9saW5lc29mYXI7XG4vLyB2YXJ5aW5nIGZsb2F0IHZfcnVsZXI7XG5cbnVuaWZvcm0gc2FtcGxlcjJEIHVfaW1hZ2U7XG5cbnZvaWQgbWFpbigpIHtcbiAgICB2ZWM0IGNvbG9yO1xuICAgIGlmICh2X3RleGNvb3JkLnEgPT0gLTEuMCkge1xuICAgICAgICAvLyBpcyBhIHRleHR1cmUgZnJhZ21lbnRcbiAgICAgICAgZmxvYXQgbGluZXNvZmFyID0gdl9saW5lc29mYXIgLyB2X3NjYWxlO1xuICAgICAgICBmbG9hdCB0ZXhXaWR0aCA9IHVfdGV4X3NpemUueCAqIHZfdGV4Y29vcmQudDtcbiAgICAgICAgZmxvYXQgeCA9IHZfdGV4Y29vcmQucyArIG1vZChsaW5lc29mYXIsIHRleFdpZHRoKSAvIHRleFdpZHRoICogdl90ZXhjb29yZC50O1xuICAgICAgICBmbG9hdCB5ID0gKHZfdGV4dHVyZV9ub3JtYWwgKyAxLjApIC8gMi4wICogdl90ZXhjb29yZC5wO1xuXG4gICAgICAgIGNvbG9yID0gdGV4dHVyZTJEKHVfaW1hZ2UsIHZlYzIoeCwgeSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGEgY29sb3IgZnJhZ21lbnRcbiAgICAgICAgY29sb3IgPSB2X3RleGNvb3JkO1xuICAgIH1cbiAgICBmbG9hdCBhbHBoYSA9IDEuMDtcbiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvciAqIChhbHBoYSAqIHZfb3BhY2l0eSk7XG4jaWZkZWYgT1ZFUkRSQVdfSU5TUEVDVE9SXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjApO1xuI2VuZGlmXG59YDtcbiIsImltcG9ydCB7IEJyb3dzZXIsIFV0aWwgfSBmcm9tICdtYXB0YWxrcyc7XG5leHBvcnQgY29uc3QgbWF4VW5pZm9ybUxlbmd0aCA9IChCcm93c2VyLmllIHx8IEJyb3dzZXIuZWRnZSkgPyA1MDQgOiBVdGlsLklTX05PREUgPyAxMDE0IDogMjQwOyAvLyAzOTAwIGZvciA2NC1iaXQgY2hyb21lIDU2LjAsIDI0MCBmb3IgMzItYml0IGNocm9tZSA1Ni4wXG4iLCJpbXBvcnQgeyBtYXhVbmlmb3JtTGVuZ3RoIH0gZnJvbSAnLi9jb21tb24nO1xuZXhwb3J0IGRlZmF1bHRcbmAjaWZkZWYgR0xfRVNcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcbiNlbHNlXG4jZGVmaW5lIGxvd3BcbiNkZWZpbmUgbWVkaXVtcFxuI2RlZmluZSBoaWdocFxuI2VuZGlmXG5cbmF0dHJpYnV0ZSB2ZWM0IGFfcG9zO1xuYXR0cmlidXRlIG1lZGl1bXAgdmVjMiBhX25vcm1hbDtcbi8vIGF0dHJpYnV0ZSBtZWRpdW1wIHZlYzIgYV9saW5lbm9ybWFsO1xuYXR0cmlidXRlIGZsb2F0IGFfbGluZXNvZmFyO1xuLy8gKGxpbmVfd2lkdGggKiAxMDAgKyBvcGFjaXR5ICogMTApICogMTAwMDAgKyB0ZXhfaWR4XG5hdHRyaWJ1dGUgZmxvYXQgYV9zdHlsZTtcbi8vIGF0dHJpYnV0ZSBmbG9hdCBhX3NlZ2xlbjtcblxudW5pZm9ybSBtYXQ0IHVfbWF0cml4O1xudW5pZm9ybSBmbG9hdCB1X3NjYWxlO1xudW5pZm9ybSBmbG9hdCB1X3N0eWxlc1ske21heFVuaWZvcm1MZW5ndGh9XTtcblxudmFyeWluZyB2ZWMyIHZfbGluZW5vcm1hbDtcbnZhcnlpbmcgZmxvYXQgdl9saW5ld2lkdGg7XG52YXJ5aW5nIGZsb2F0IHZfb3BhY2l0eTtcbnZhcnlpbmcgdmVjNCB2X3RleGNvb3JkO1xudmFyeWluZyBmbG9hdCB2X3NjYWxlO1xudmFyeWluZyBmbG9hdCB2X3RleHR1cmVfbm9ybWFsO1xuXG52YXJ5aW5nIGZsb2F0IHZfbGluZXNvZmFyO1xuLy8gdmFyeWluZyBmbG9hdCB2X3J1bGVyO1xuXG52b2lkIG1haW4oKSB7XG4gICAgaW50IHRleF9pZHggPSBpbnQobW9kKGFfc3R5bGUsIDEwMDAwLjApKTtcbiAgICBmbG9hdCBzID0gZmxvb3IoYV9zdHlsZSAvIDEwMDAwLjApO1xuICAgIHZfb3BhY2l0eSA9IG1vZChzLCAxMC4wKSAvIDEwLjA7XG4gICAgaWYgKHZfb3BhY2l0eSA9PSAwLjApIHtcbiAgICAgICAgdl9vcGFjaXR5ID0gMS4wO1xuICAgIH1cbiAgICB2X2xpbmV3aWR0aCA9IHMgLyAxMDAuMDtcbiAgICB2X3RleGNvb3JkID0gdmVjNCh1X3N0eWxlc1t0ZXhfaWR4XSwgdV9zdHlsZXNbdGV4X2lkeCArIDFdLCB1X3N0eWxlc1t0ZXhfaWR4ICsgMl0sIHVfc3R5bGVzW3RleF9pZHggKyAzXSk7XG5cbiAgICB2X3NjYWxlID0gdV9zY2FsZTtcblxuICAgIC8vIHZfbGluZW5vcm1hbCA9IGFfbGluZW5vcm1hbDtcblxuICAgIHZlYzQgcG9zID0gYV9wb3M7XG4gICAgcG9zLnggKz0gYV9ub3JtYWwueCAqIHZfbGluZXdpZHRoICogdV9zY2FsZTtcbiAgICBwb3MueSArPSBhX25vcm1hbC55ICogdl9saW5ld2lkdGggKiB1X3NjYWxlO1xuXG4gICAgLy8gYWRkIGxpbmVzb2ZhciB3aXRoIGNvcm5lciBsZW5ndGggY2F1c2VkIGJ5IGxpbmUtam9pblxuICAgIHZfbGluZXNvZmFyID0gYV9saW5lc29mYXI7XG5cblxuICAgIGdsX1Bvc2l0aW9uID0gdV9tYXRyaXggKiBwb3M7XG4gICAgaWYgKGFfbm9ybWFsLnkgPT0gMC4wKSB7XG4gICAgICAgIC8vIHdpdGggYW4gdXBzaWRlIGRvd24gc3RyYWlnaHQgbGluZSwgYV9ub3JtYWwueSBpcyBhbHdheXMgMCwgdXNlIGFfbm9ybWFsLnggaW5zdGVhZFxuICAgICAgICB2X3RleHR1cmVfbm9ybWFsID0gLXNpZ24oYV9ub3JtYWwueCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9cbiAgICAgICAgdl90ZXh0dXJlX25vcm1hbCA9IHNpZ24oYV9ub3JtYWwueSk7XG4gICAgfVxuXG59YDtcbiIsImV4cG9ydCBkZWZhdWx0XG5gXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfc2FtcGxlcjtcbnZhcnlpbmcgdmVjMyB2X3RleENvb3JkO1xudm9pZCBtYWluKCkge1xuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1X3NhbXBsZXIsIHZlYzIodl90ZXhDb29yZFswXSArIGdsX1BvaW50Q29vcmRbMF0gKiB2X3RleENvb3JkWzFdLCAxLjAgKyBnbF9Qb2ludENvb3JkWzFdICogdl90ZXhDb29yZFsyXSkpO1xufWA7XG4iLCJpbXBvcnQgeyBtYXhVbmlmb3JtTGVuZ3RoIH0gZnJvbSAnLi9jb21tb24nO1xuZXhwb3J0IGRlZmF1bHRcbmBcbi8vIG1hcmtlcidzIDJkIHBvaW50IGF0IG1heCB6b29tXG5hdHRyaWJ1dGUgdmVjNCBhX3Bvcztcbi8vIHRleHR1cmUgaWR4IGluIHVfc3ByaXRlXG5hdHRyaWJ1dGUgZmxvYXQgYV9zcHJpdGVfaWR4O1xudW5pZm9ybSBtYXQ0IHVfbWF0cml4O1xuLy8gc2NhbGUgb2YgY3VycmVudCB6b29tXG51bmlmb3JtIGZsb2F0IHVfc2NhbGU7XG4vLyBzcHJpdGVzLCBhbiBhcnJheSBvZiBzcHJpdGVzXG4vLyBhIHNwcml0ZSBoYXMgNiBpbnRlZ2Vyczpcbi8vIDAgOiBub3J0aHdlc3QncyB4LCAxIDogd2lkdGgsIDI6IGhlaWdodCwgMzogc3ByaXRlIHNpemUsIDQ6IG9mZnNldCB4LCA1OiBvZmZzZXQgeVxuLy8gYXJyYXkncyBsZW5ndGggaXMgbm90IGR5bmFtaWMsIHN1cHBvcnQgbWF4aW11bSBjb3VudCAvIDYgc3ByaXRlc1xudW5pZm9ybSBmbG9hdCB1X3Nwcml0ZVske21heFVuaWZvcm1MZW5ndGh9XTtcbnZhcnlpbmcgdmVjMyB2X3RleENvb3JkO1xudm9pZCBtYWluKCkge1xuICBpbnQgaWR4ID0gaW50KGFfc3ByaXRlX2lkeCkgKiA2O1xuICBmbG9hdCBzaXplID0gdV9zcHJpdGVbaWR4ICsgM107XG4gIHZlYzIgdGV4dE9mZnNldCA9IHZlYzIodV9zcHJpdGVbaWR4ICsgNF0sIHVfc3ByaXRlW2lkeCArIDVdKTtcbiAgdmVjNCBwb3MgPSB2ZWM0KGFfcG9zLnggKyB0ZXh0T2Zmc2V0LnggKiB1X3NjYWxlLCBhX3Bvcy55ICsgdGV4dE9mZnNldC55ICogdV9zY2FsZSwgYV9wb3MueiwgYV9wb3Mudyk7XG4gIGdsX1Bvc2l0aW9uID0gdV9tYXRyaXggKiBwb3M7XG4gIGdsX1BvaW50U2l6ZSA9IHNpemU7XG4gIC8vIHRleHR1cmUgY29vcmRcbiAgdl90ZXhDb29yZCA9IHZlYzModV9zcHJpdGVbaWR4XSwgdV9zcHJpdGVbaWR4ICsgMV0sIHVfc3ByaXRlW2lkeCArIDJdKTtcbn1gO1xuIiwiZXhwb3J0IGRlZmF1bHRcbmBcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXG52YXJ5aW5nIHZlYzQgdl90ZXhjb29yZDtcbnZhcnlpbmcgZmxvYXQgdl9vcGFjaXR5O1xudm9pZCBtYWluKCkge1xuICAgIGdsX0ZyYWdDb2xvciA9IHZfdGV4Y29vcmQgKiB2X29wYWNpdHk7XG59YDtcbiIsImltcG9ydCB7IG1heFVuaWZvcm1MZW5ndGggfSBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgZGVmYXVsdFxuYGF0dHJpYnV0ZSB2ZWM0IGFfcG9zO1xuLy90ZXhfaWR4ICogMTAwICsgb3BhY2l0eSAqIDEwXG5hdHRyaWJ1dGUgZmxvYXQgYV9maWxsX3N0eWxlO1xuXG51bmlmb3JtIG1hdDQgdV9tYXRyaXg7XG51bmlmb3JtIGZsb2F0IHVfZmlsbF9zdHlsZXNbJHttYXhVbmlmb3JtTGVuZ3RofV07XG5cbnZhcnlpbmcgZmxvYXQgdl9vcGFjaXR5O1xudmFyeWluZyB2ZWM0IHZfdGV4Y29vcmQ7XG5cbnZvaWQgbWFpbigpIHtcbiAgaW50IHRleF9pZHggPSBpbnQoZmxvb3IoYV9maWxsX3N0eWxlIC8gMTAwLjApKTtcbiAgdl9vcGFjaXR5ID0gbW9kKGFfZmlsbF9zdHlsZSwgMTAwLjApIC8gMTAuMDtcbiAgdl90ZXhjb29yZCA9IHZlYzQodV9maWxsX3N0eWxlc1t0ZXhfaWR4XSwgdV9maWxsX3N0eWxlc1t0ZXhfaWR4ICsgMV0sIHVfZmlsbF9zdHlsZXNbdGV4X2lkeCArIDJdLCB1X2ZpbGxfc3R5bGVzW3RleF9pZHggKyAzXSk7XG5cbiAgZ2xfUG9zaXRpb24gPSB1X21hdHJpeCAqIGFfcG9zO1xufWA7XG4iLCJleHBvcnQgZGVmYXVsdFxuYFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cbnZhcnlpbmcgdmVjNCB2X3RleGNvb3JkO1xudmFyeWluZyBmbG9hdCB2X29wYWNpdHk7XG4vLyB2YXJ5aW5nIHZlYzQgdl9saWdodGluZztcblxudm9pZCBtYWluKCkge1xuICAgIGdsX0ZyYWdDb2xvciA9IHZfdGV4Y29vcmQgKiB2X29wYWNpdHk7XG59YDtcbiIsImltcG9ydCB7IG1heFVuaWZvcm1MZW5ndGggfSBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgZGVmYXVsdFxuYGF0dHJpYnV0ZSB2ZWM0IGFfcG9zO1xuYXR0cmlidXRlIHZlYzQgYV9ub3JtYWw7XG4vL3RleF9pZHggKiAxMDAgKyBvcGFjaXR5ICogMTBcbmF0dHJpYnV0ZSBmbG9hdCBhX2ZpbGxfc3R5bGU7XG5cbnVuaWZvcm0gdmVjMyB1X2xpZ2h0Y29sb3I7XG51bmlmb3JtIGxvd3AgdmVjMyB1X2xpZ2h0cG9zO1xudW5pZm9ybSBsb3dwIHZlYzMgdV9hbWJpZW50bGlnaHQ7XG51bmlmb3JtIGxvd3AgZmxvYXQgdV9saWdodGludGVuc2l0eTtcbi8vIHVuaWZvcm0gdmVjMyB1X2FtYmllbnRsaWdodDtcblxudW5pZm9ybSBtYXQ0IHVfbWF0cml4O1xudW5pZm9ybSBmbG9hdCB1X2ZpbGxfc3R5bGVzWyR7bWF4VW5pZm9ybUxlbmd0aH1dO1xuXG52YXJ5aW5nIGZsb2F0IHZfb3BhY2l0eTtcbnZhcnlpbmcgdmVjNCB2X3RleGNvb3JkO1xuXG52YXJ5aW5nIHZlYzQgdl9saWdodGluZztcblxudm9pZCBtYWluKCkge1xuICBpbnQgdGV4X2lkeCA9IGludChhX2ZpbGxfc3R5bGUgLyAxMDAuMCkgKiA0O1xuICB2X29wYWNpdHkgPSBtb2QoYV9maWxsX3N0eWxlLCAxMDAuMCkgLyAxMC4wO1xuXG4gIHZlYzQgY29sb3IgPSB2ZWM0KHVfZmlsbF9zdHlsZXNbdGV4X2lkeF0sIHVfZmlsbF9zdHlsZXNbdGV4X2lkeCArIDFdLCB1X2ZpbGxfc3R5bGVzW3RleF9pZHggKyAyXSwgdV9maWxsX3N0eWxlc1t0ZXhfaWR4ICsgM10pO1xuXG4gIGdsX1Bvc2l0aW9uID0gdV9tYXRyaXggKiBhX3BvcztcblxuICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZShhX25vcm1hbC54eXopO1xuICAvLyAvLyB2ZWMzIGxpZ2h0cG9zID0gbm9ybWFsaXplKHVfbGlnaHRwb3MpO1xuICAvLyBmbG9hdCBuRG90TCA9IG1heChkb3QodV9saWdodHBvcywgbm9ybWFsKSwgMC4wKTtcbiAgLy8gdmVjMyBkaWZmdXNlID0gdV9saWdodGNvbG9yICogY29sb3IucmdiICogbkRvdEw7XG5cbiAgLy8gdmVjMyBhbWJpZW50ID0gdV9hbWJpZW50bGlnaHQgKiBjb2xvci5yZ2I7XG5cbiAgLy8gdl90ZXhjb29yZCA9IHZlYzQoZGlmZnVzZSArIGFtYmllbnQsIGNvbG9yLmEpO1xuXG4gIC8vIFJlbGF0aXZlIGx1bWluYW5jZSAoaG93IGRhcmsvYnJpZ2h0IGlzIHRoZSBzdXJmYWNlIGNvbG9yPylcbiAgZmxvYXQgY29sb3J2YWx1ZSA9IGNvbG9yLnIgKiAwLjIxMjYgKyBjb2xvci5nICogMC43MTUyICsgY29sb3IuYiAqIDAuMDcyMjtcbiAgLy8gQWRkIHNsaWdodCBhbWJpZW50IGxpZ2h0aW5nIHNvIG5vIGV4dHJ1c2lvbnMgYXJlIHRvdGFsbHkgYmxhY2tcbiAgICB2ZWM0IGFtYmllbnRsaWdodCA9IHZlYzQodV9hbWJpZW50bGlnaHQsIDEuMCk7XG4gICAgY29sb3IgKz0gYW1iaWVudGxpZ2h0O1xuXG4gICAgLy8gQ2FsY3VsYXRlIGNvcyh0aGV0YSksIHdoZXJlIHRoZXRhIGlzIHRoZSBhbmdsZSBiZXR3ZWVuIHN1cmZhY2Ugbm9ybWFsIGFuZCBkaWZmdXNlIGxpZ2h0IHJheVxuICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gY2xhbXAoZG90KG5vcm1hbCwgdV9saWdodHBvcyksIDAuMCwgMS4wKTtcblxuICAgIC8vIEFkanVzdCBkaXJlY3Rpb25hbCBzbyB0aGF0XG4gICAgLy8gdGhlIHJhbmdlIG9mIHZhbHVlcyBmb3IgaGlnaGxpZ2h0L3NoYWRpbmcgaXMgbmFycm93ZXJcbiAgICAvLyB3aXRoIGxvd2VyIGxpZ2h0IGludGVuc2l0eVxuICAgIC8vIGFuZCB3aXRoIGxpZ2h0ZXIvYnJpZ2h0ZXIgc3VyZmFjZSBjb2xvcnNcbiAgICBkaXJlY3Rpb25hbCA9IG1peCgoMS4wIC0gdV9saWdodGludGVuc2l0eSksIG1heCgoMS4wIC0gY29sb3J2YWx1ZSArIHVfbGlnaHRpbnRlbnNpdHkpLCAxLjApLCBkaXJlY3Rpb25hbCk7XG5cbiAgICAvLyBBZGQgZ3JhZGllbnQgYWxvbmcgeiBheGlzIG9mIHNpZGUgc3VyZmFjZXNcbiAgICAvLyBpZiAobm9ybWFsLnkgIT0gMC4wKSB7XG4gICAgLy8gICAgIGRpcmVjdGlvbmFsICo9IGNsYW1wKCh0ICsgYmFzZSkgKiBwb3coaGVpZ2h0IC8gMTUwLjAsIDAuNSksIG1peCgwLjcsIDAuOTgsIDEuMCAtIHVfbGlnaHRpbnRlbnNpdHkpLCAxLjApO1xuICAgIC8vIH1cblxuICAgIC8vIEFzc2lnbiBmaW5hbCBjb2xvciBiYXNlZCBvbiBzdXJmYWNlICsgYW1iaWVudCBsaWdodCBjb2xvciwgZGlmZnVzZSBsaWdodCBkaXJlY3Rpb25hbCwgYW5kIGxpZ2h0IGNvbG9yXG4gICAgLy8gd2l0aCBsb3dlciBib3VuZHMgYWRqdXN0ZWQgdG8gaHVlIG9mIGxpZ2h0XG4gICAgLy8gc28gdGhhdCBzaGFkaW5nIGlzIHRpbnRlZCB3aXRoIHRoZSBjb21wbGVtZW50YXJ5IChvcHBvc2l0ZSkgY29sb3IgdG8gdGhlIGxpZ2h0IGNvbG9yXG4gICAgdl90ZXhjb29yZC5yICs9IGNsYW1wKGNvbG9yLnIgKiBkaXJlY3Rpb25hbCAqIHVfbGlnaHRjb2xvci5yLCBtaXgoMC4wLCAwLjMsIDEuMCAtIHVfbGlnaHRjb2xvci5yKSwgMS4wKTtcbiAgICB2X3RleGNvb3JkLmcgKz0gY2xhbXAoY29sb3IuZyAqIGRpcmVjdGlvbmFsICogdV9saWdodGNvbG9yLmcsIG1peCgwLjAsIDAuMywgMS4wIC0gdV9saWdodGNvbG9yLmcpLCAxLjApO1xuICAgIHZfdGV4Y29vcmQuYiArPSBjbGFtcChjb2xvci5iICogZGlyZWN0aW9uYWwgKiB1X2xpZ2h0Y29sb3IuYiwgbWl4KDAuMCwgMC4zLCAxLjAgLSB1X2xpZ2h0Y29sb3IuYiksIDEuMCk7XG4gICAgdl90ZXhjb29yZC5hID0gY29sb3IuYTtcbiAgLy8gdmVjMyBub3JtYWwgPSBub3JtYWxpemUoYV9ub3JtYWwueHl6KTtcbiAgLy8gdmVjMyBsaWdodHBvcyA9IG5vcm1hbGl6ZSh1X2xpZ2h0cG9zLnh5eik7XG4gIC8vIC8vIGNvZGVzIGZyb20gbWFwYm94LWdsLWpzXG4gIC8vIHZfbGlnaHRpbmcgPSB2ZWM0KDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gIC8vIGZsb2F0IGRpcmVjdGlvbmFsID0gY2xhbXAoZG90KG5vcm1hbCwgbGlnaHRwb3MpLCAwLjAsIDEuMCk7XG4gIC8vIGRpcmVjdGlvbmFsID0gbWl4KCgxLjAgLSB1X2xpZ2h0aW50ZW5zaXR5KSwgbWF4KCgwLjUgKyB1X2xpZ2h0aW50ZW5zaXR5KSwgMS4wKSwgZGlyZWN0aW9uYWwpO1xuXG4gIC8vIC8vIGlmIChhX25vcm1hbC55ICE9IDAuMCkge1xuICAvLyAvLyAgIGRpcmVjdGlvbmFsICo9IGNsYW1wKCh0ICsgYmFzZSkgKiBwb3coaGVpZ2h0IC8gMTUwLjAsIDAuNSksIG1peCgwLjcsIDAuOTgsIDEuMCAtIHVfbGlnaHRpbnRlbnNpdHkpLCAxLjApO1xuICAvLyAvLyB9XG5cbiAgLy8gdl9saWdodGluZy5yZ2IgKz0gY2xhbXAoZGlyZWN0aW9uYWwgKiB1X2xpZ2h0Y29sb3IsIG1peCh2ZWMzKDAuMCksIHZlYzMoMC4zKSwgMS4wIC0gdV9saWdodGNvbG9yKSwgdmVjMygxLjApKTtcbn1gO1xuIiwiaW1wb3J0IGxpbmVGcmFnbWVudCBmcm9tICcuL2xpbmUuZnJhZ21lbnQnO1xuaW1wb3J0IGxpbmVWZXJ0ZXggZnJvbSAnLi9saW5lLnZlcnRleCc7XG5pbXBvcnQgcG9pbnRGcmFnbWVudCBmcm9tICcuL3BvaW50LmZyYWdtZW50JztcbmltcG9ydCBwb2ludFZlcnRleCBmcm9tICcuL3BvaW50LnZlcnRleCc7XG5pbXBvcnQgcG9seWdvbkZyYWdtZW50IGZyb20gJy4vcG9seWdvbi5mcmFnbWVudCc7XG5pbXBvcnQgcG9seWdvblZlcnRleCBmcm9tICcuL3BvbHlnb24udmVydGV4JztcbmltcG9ydCBleHRydWRlRnJhZ21lbnQgZnJvbSAnLi9leHRydWRlLmZyYWdtZW50JztcbmltcG9ydCBleHRydWRlVmVydGV4IGZyb20gJy4vZXh0cnVkZS52ZXJ0ZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgJ2xpbmUnOiB7XG4gICAgICAgICdmcmFnbWVudFNvdXJjZScgOiBsaW5lRnJhZ21lbnQsXG4gICAgICAgICd2ZXJ0ZXhTb3VyY2UnIDogbGluZVZlcnRleFxuICAgIH0sXG4gICAgJ3BvaW50Jzoge1xuICAgICAgICAnZnJhZ21lbnRTb3VyY2UnIDogcG9pbnRGcmFnbWVudCxcbiAgICAgICAgJ3ZlcnRleFNvdXJjZScgOiBwb2ludFZlcnRleFxuICAgIH0sXG4gICAgJ3BvbHlnb24nIDoge1xuICAgICAgICAnZnJhZ21lbnRTb3VyY2UnIDogcG9seWdvbkZyYWdtZW50LFxuICAgICAgICAndmVydGV4U291cmNlJyA6IHBvbHlnb25WZXJ0ZXhcbiAgICB9LFxuICAgICdleHRydWRlJyA6IHtcbiAgICAgICAgJ2ZyYWdtZW50U291cmNlJyA6IGV4dHJ1ZGVGcmFnbWVudCxcbiAgICAgICAgJ3ZlcnRleFNvdXJjZScgOiBleHRydWRlVmVydGV4XG4gICAgfVxufTtcbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAncmVuZGVyZXInIDogJ3dlYmdsJyxcbiAgICAnZG91YmxCdWZmZXInIDogZmFsc2UsXG4gICAgJ3JlbmRlck9uTW92aW5nJyA6IGZhbHNlLFxuICAgICdyZW5kZXJPblpvb21pbmcnIDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpZ0RhdGFMYXllciBleHRlbmRzIG1hcHRhbGtzLkxheWVyIHtcbiAgICAvKipcbiAgICAgKiBSZXByb2R1Y2UgYSBCaWdEYXRhTGF5ZXIgZnJvbSBsYXllcidzIHByb2ZpbGUgSlNPTi5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGxheWVySlNPTiAtIGxheWVyJ3MgcHJvZmlsZSBKU09OXG4gICAgICogQHJldHVybiB7bWFwdGFsa3MuQmlnRGF0YUxheWVyfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tSlNPTihwcm9maWxlKSB7XG4gICAgICAgIGlmICghcHJvZmlsZSB8fCBwcm9maWxlWyd0eXBlJ10gIT09IHRoaXMuZ2V0SlNPTlR5cGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0aGlzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgY29uc3RydWN0b3IocHJvZmlsZVsnaWQnXSwgcHJvZmlsZVsnZGF0YSddLCBwcm9maWxlWydvcHRpb25zJ10pO1xuICAgICAgICBpZiAocHJvZmlsZVsnc3R5bGUnXSkge1xuICAgICAgICAgICAgbGF5ZXIuc2V0U3R5bGUocHJvZmlsZVsnc3R5bGUnXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGlkLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSBtYXB0YWxrcy5VdGlsLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gICAgICAgIGxldCBzdHlsZTtcbiAgICAgICAgaWYgKG9wdHNbJ3N0eWxlJ10pIHtcbiAgICAgICAgICAgIHN0eWxlID0gb3B0c1snc3R5bGUnXTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRzWydzdHlsZSddO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKGlkLCBvcHRzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cG9ydCB0aGUgQmlnRGF0YUxheWVyJ3MganNvbi4gPGJyPlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gbGF5ZXIncyBKU09OXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICAgICAgJ3R5cGUnOiB0aGlzLmdldEpTT05UeXBlKCksXG4gICAgICAgICAgICAnZGF0YScgOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICAnaWQnOiB0aGlzLmdldElkKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnKCk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRTdHlsZSgpO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAganNvblsnb3B0aW9ucyddID0gb3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgIGpzb25bJ3N0eWxlJ10gPSBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICBzZXRTdHlsZShzdHlsZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICAgICAgICBzdHlsZSA9IFtzdHlsZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5fY29va2VkU3R5bGVzID0gbWFwdGFsa3MuTWFwYm94VXRpbC5jb21waWxlU3R5bGUoc3R5bGUpO1xuICAgICAgICAvKipcbiAgICAgICAgICogc2V0c3R5bGUgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBtYXB0YWxrcy5CaWdEYXRhTGF5ZXIjc2V0c3R5bGVcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgLSBzZXRzdHlsZVxuICAgICAgICAgKiBAcHJvcGVydHkge21hcHRhbGtzLkJpZ0RhdGFMYXllcn0gdGFyZ2V0IC0gbGF5ZXJcbiAgICAgICAgICogQHByb3BlcnR5IHtPYmplY3R8T2JqZWN0W119ICAgICAgIHN0eWxlIC0gc3R5bGUgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpcmUoJ3NldHN0eWxlJywgeyAnc3R5bGUnIDogc3R5bGUgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFN0eWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3R5bGU7XG4gICAgfVxufVxuXG5CaWdEYXRhTGF5ZXIubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNvcnRLRDtcblxuZnVuY3Rpb24gc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgcmlnaHQsIGRlcHRoKSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkgcmV0dXJuO1xuXG4gICAgdmFyIG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICBzZWxlY3QoaWRzLCBjb29yZHMsIG0sIGxlZnQsIHJpZ2h0LCBkZXB0aCAlIDIpO1xuXG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgbSAtIDEsIGRlcHRoICsgMSk7XG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbSArIDEsIHJpZ2h0LCBkZXB0aCArIDEpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QoaWRzLCBjb29yZHMsIGssIGxlZnQsIHJpZ2h0LCBpbmMpIHtcblxuICAgIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgICAgICAgdmFyIG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgdmFyIG0gPSBrIC0gbGVmdCArIDE7XG4gICAgICAgICAgICB2YXIgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgICAgICAgdmFyIHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgdmFyIHNkID0gMC41ICogTWF0aC5zcXJ0KHogKiBzICogKG4gLSBzKSAvIG4pICogKG0gLSBuIC8gMiA8IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgdmFyIG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgdmFyIG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHQgPSBjb29yZHNbMiAqIGsgKyBpbmNdO1xuICAgICAgICB2YXIgaSA9IGxlZnQ7XG4gICAgICAgIHZhciBqID0gcmlnaHQ7XG5cbiAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGspO1xuICAgICAgICBpZiAoY29vcmRzWzIgKiByaWdodCArIGluY10gPiB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgcmlnaHQpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaSArIGluY10gPCB0KSBpKys7XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBqICsgaW5jXSA+IHQpIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZHNbMiAqIGxlZnQgKyBpbmNdID09PSB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgaik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGosIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICAgICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKSB7XG4gICAgc3dhcChpZHMsIGksIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSwgMiAqIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSArIDEsIDIgKiBqICsgMSk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKSB7XG4gICAgdmFyIHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmdlO1xuXG5mdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICB2YXIgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgeCwgeTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHZhciBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgdmFyIG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtaW5YIDw9IHggOiBtaW5ZIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWF4WCA+PSB4IDogbWF4WSA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhpbjtcblxuZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgdmFyIHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIHZhciBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIHZhciByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICB2YXIgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB2YXIgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIHZhciB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIHZhciBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggLSByIDw9IHggOiBxeSAtIHIgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCArIHIgPj0geCA6IHF5ICsgciA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzcURpc3QoYXgsIGF5LCBieCwgYnkpIHtcbiAgICB2YXIgZHggPSBheCAtIGJ4O1xuICAgIHZhciBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc29ydCA9IHJlcXVpcmUoJy4vc29ydCcpO1xudmFyIHJhbmdlID0gcmVxdWlyZSgnLi9yYW5nZScpO1xudmFyIHdpdGhpbiA9IHJlcXVpcmUoJy4vd2l0aGluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ga2RidXNoO1xuXG5mdW5jdGlvbiBrZGJ1c2gocG9pbnRzLCBnZXRYLCBnZXRZLCBub2RlU2l6ZSwgQXJyYXlUeXBlKSB7XG4gICAgcmV0dXJuIG5ldyBLREJ1c2gocG9pbnRzLCBnZXRYLCBnZXRZLCBub2RlU2l6ZSwgQXJyYXlUeXBlKTtcbn1cblxuZnVuY3Rpb24gS0RCdXNoKHBvaW50cywgZ2V0WCwgZ2V0WSwgbm9kZVNpemUsIEFycmF5VHlwZSkge1xuICAgIGdldFggPSBnZXRYIHx8IGRlZmF1bHRHZXRYO1xuICAgIGdldFkgPSBnZXRZIHx8IGRlZmF1bHRHZXRZO1xuICAgIEFycmF5VHlwZSA9IEFycmF5VHlwZSB8fCBBcnJheTtcblxuICAgIHRoaXMubm9kZVNpemUgPSBub2RlU2l6ZSB8fCA2NDtcbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgIHRoaXMuaWRzID0gbmV3IEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICB0aGlzLmNvb3JkcyA9IG5ldyBBcnJheVR5cGUocG9pbnRzLmxlbmd0aCAqIDIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5pZHNbaV0gPSBpO1xuICAgICAgICB0aGlzLmNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgIHRoaXMuY29vcmRzWzIgKiBpICsgMV0gPSBnZXRZKHBvaW50c1tpXSk7XG4gICAgfVxuXG4gICAgc29ydCh0aGlzLmlkcywgdGhpcy5jb29yZHMsIHRoaXMubm9kZVNpemUsIDAsIHRoaXMuaWRzLmxlbmd0aCAtIDEsIDApO1xufVxuXG5LREJ1c2gucHJvdG90eXBlID0ge1xuICAgIHJhbmdlOiBmdW5jdGlvbiAobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9LFxuXG4gICAgd2l0aGluOiBmdW5jdGlvbiAoeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZGVmYXVsdEdldFgocCkgeyByZXR1cm4gcFswXTsgfVxuZnVuY3Rpb24gZGVmYXVsdEdldFkocCkgeyByZXR1cm4gcFsxXTsgfVxuIiwiaW1wb3J0ICogYXMgbWFwdGFsa3MgZnJvbSAnbWFwdGFsa3MnO1xuaW1wb3J0IEJpZ0RhdGFMYXllciBmcm9tICcuL0JpZ0RhdGFMYXllcic7XG5pbXBvcnQgV2ViZ2xSZW5kZXJlciBmcm9tICcuLi9SZW5kZXJlcic7XG5pbXBvcnQgc2hhZGVycyBmcm9tICcuLi9zaGFkZXIvU2hhZGVyJztcbmltcG9ydCBrZGJ1c2ggZnJvbSAna2RidXNoJztcbmltcG9ydCB7IGdldFRhcmdldFpvb20gfSBmcm9tICcuLi9wYWludGVyL1BhaW50ZXInO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICAgICdibGVuZEVxdWF0aW9uJyA6ICdhZGQnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaWdQb2ludExheWVyIGV4dGVuZHMgQmlnRGF0YUxheWVyIHtcbiAgICBpZGVudGlmeShjb29yZGluYXRlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5fZ2V0UmVuZGVyZXIoKTtcbiAgICAgICAgaWYgKCFyZW5kZXJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmlkZW50aWZ5KGNvb3JkaW5hdGUsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuQmlnUG9pbnRMYXllci5tZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cbkJpZ1BvaW50TGF5ZXIucmVnaXN0ZXJKU09OVHlwZSgnQmlnUG9pbnRMYXllcicpO1xuXG5CaWdQb2ludExheWVyLnJlZ2lzdGVyUmVuZGVyZXIoJ3dlYmdsJywgY2xhc3MgZXh0ZW5kcyBXZWJnbFJlbmRlcmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGxheWVyKSB7XG4gICAgICAgIHN1cGVyKGxheWVyKTtcbiAgICAgICAgdGhpcy5fbmVlZENoZWNrU3R5bGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTcHJpdGVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjaGVja1Jlc291cmNlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9uZWVkQ2hlY2tTdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gW107XG4gICAgICAgIGlmICh0aGlzLmxheWVyLmdldFN0eWxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuZ2V0U3R5bGUoKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbWFwdGFsa3MuVXRpbC5nZXRFeHRlcm5hbFJlc291cmNlcyhzWydzeW1ib2wnXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXMucHVzaChyZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbmVlZENoZWNrU3R5bGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbmVlZENoZWNrU3ByaXRlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuX3RleHR1cmVMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlcztcbiAgICB9XG5cbiAgICBvbkNhbnZhc0NyZWF0ZSgpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICB0aGlzLl9zZXRCbGVuZEVxdWF0aW9uKCk7XG4gICAgICAgIC8vIGdsLmJsZW5kRXF1YXRpb25TZXBhcmF0ZShnbC5GVU5DX0FERCwgZ2wuRlVOQ19BREQpO1xuICAgICAgICAvLyBnbC5ibGVuZEZ1bmNTZXBhcmF0ZShnbC5PTkUsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEsIGdsLk9ORSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0gWyd1X21hdHJpeCcsICd1X3NjYWxlJywgJ3Vfc3ByaXRlWzBdJ107XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oc2hhZGVycy5wb2ludC52ZXJ0ZXhTb3VyY2UsIHNoYWRlcnMucG9pbnQuZnJhZ21lbnRTb3VyY2UsIHVuaWZvcm1zKTtcbiAgICAgICAgdGhpcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoW1xuICAgICAgICAgICAgWydhX3BvcycsIDJdLFxuICAgICAgICAgICAgWydhX3Nwcml0ZV9pZHgnLCAxXVxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnByZXBhcmVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5fY2hlY2tTcHJpdGVzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl92ZXJ0ZXhDb3VudCkge1xuICAgICAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRNYXAoKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRaID0gZ2V0VGFyZ2V0Wm9vbShtYXApO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGF5ZXIuZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleENvb3JkcyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgICAgICAgICB0aGlzLl92ZXJ0ZXhDb3VudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgICAgICBjb25zdCBtYXhJY29uU2l6ZSA9IFswLCAwXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBwb2ludDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBwb2ludCA9IGRhdGFbaV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhW2ldLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuX2dldFZlcnRpY2UoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vZ2VvanNvblxuICAgICAgICAgICAgICAgICAgICBwb2ludCA9IFt2WzBdLCB2WzFdLCBkYXRhW2ldLnByb3BlcnRpZXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0ZXggPSB0aGlzLl9nZXRUZXhDb29yZCh7ICdwcm9wZXJ0aWVzJyA6IHBvaW50WzJdIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVydGV4Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3AgPSBtYXAuY29vcmRpbmF0ZVRvUG9pbnQobmV3IG1hcHRhbGtzLkNvb3JkaW5hdGUocG9pbnQpLCB0YXJnZXRaKTtcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4VGV4Q29vcmRzLnB1c2goY3AueCwgY3AueSwgdGV4LmlkeCk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjcC54LCBjcC55LCB0ZXguc2l6ZSwgdGV4Lm9mZnNldCwgcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBtYXggc2l6ZSBvZiBpY29ucywgd2lsbCB1c2UgaXQgZm9yIGlkZW50aWZ5IHRvbGVyYW5jZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleC5zaXplWzBdID4gbWF4SWNvblNpemVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEljb25TaXplWzBdID0gdGV4LnNpemVbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleC5zaXplWzFdID4gbWF4SWNvblNpemVbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEljb25TaXplWzFdID0gdGV4LnNpemVbMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0ZXhUZXhDb29yZHMpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21heEljb25TaXplID0gbWF4SWNvblNpemU7XG4gICAgICAgICAgICB0aGlzLl9pbmRleERhdGEocG9pbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RyYXdNYXJrZXJzKCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBkcmF3T25JbnRlcmFjdGluZygpIHtcbiAgICAgICAgdGhpcy5fZHJhd01hcmtlcnMoKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVJlbmRlcigpO1xuICAgIH1cblxuICAgIG9uUmVtb3ZlKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudHMoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Nwcml0ZXM7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl91U3ByaXRlO1xuICAgICAgICBzdXBlci5vblJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGlkZW50aWZ5KGNvb3JkaW5hdGUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9rZEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRaID0gZ2V0VGFyZ2V0Wm9vbShtYXApO1xuICAgICAgICBjb25zdCBjID0gbWFwLmNvb3JkaW5hdGVUb1BvaW50KGNvb3JkaW5hdGUsIHRhcmdldFopO1xuICAgICAgICAvLyBzY2FsZSB0aGUgaWNvbiBzaXplIHRvIHRoZSBtYXggem9vbSBsZXZlbC5cbiAgICAgICAgY29uc3Qgc2NhbGUgPSBtYXAuZ2V0U2NhbGUoKSAvIG1hcC5nZXRTY2FsZSh0YXJnZXRaKTtcbiAgICAgICAgbGV0IHcgPSBzY2FsZSAqIHRoaXMuX21heEljb25TaXplWzBdLFxuICAgICAgICAgICAgaCA9IHNjYWxlICogdGhpcy5fbWF4SWNvblNpemVbMV07XG4gICAgICAgIGlmICh3IDwgMSkge1xuICAgICAgICAgICAgdyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGggPCAxKSB7XG4gICAgICAgICAgICBoID0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLl9rZEluZGV4LnJhbmdlKGMueCAtIHcsIGMueSAtIGgsIGMueCArIHcsIGMueSArIGgpO1xuICAgICAgICBsZXQgZmlsdGVyLCBsaW1pdDtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydmaWx0ZXInXSkge1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IG9wdGlvbnNbJ2ZpbHRlciddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2NvdW50J10pIHtcbiAgICAgICAgICAgICAgICBsaW1pdCA9IG9wdGlvbnNbJ2NvdW50J107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5faW5kZXhQb2ludHNbaWRzW2ldXTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBwWzBdLFxuICAgICAgICAgICAgICAgIHkgPSBwWzFdO1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHBbMl0sXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gcFszXTtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVudCA9IFtcbiAgICAgICAgICAgICAgICBzY2FsZSAqICgtc2l6ZVswXSAvIDIgKyBvZmZzZXQueCksXG4gICAgICAgICAgICAgICAgc2NhbGUgKiAoLXNpemVbMV0gLyAyICsgb2Zmc2V0LnkpLFxuICAgICAgICAgICAgICAgIHNjYWxlICogKHNpemVbMF0gLyAyICsgb2Zmc2V0LngpLFxuICAgICAgICAgICAgICAgIHNjYWxlICogKHNpemVbMV0gLyAyICsgb2Zmc2V0LnkpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKGMueCA+PSAoeCArIGV4dGVudFswXSkgJiZcbiAgICAgICAgICAgICAgICBjLnggPD0gKHggKyBleHRlbnRbMl0pICYmXG4gICAgICAgICAgICAgICAgYy55ID49ICh5ICsgZXh0ZW50WzFdKSAmJlxuICAgICAgICAgICAgICAgIGMueSA8PSAoeSArIGV4dGVudFszXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIocFs0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcFs0XSBpcyBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBbNF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGltaXQgJiYgcmVzdWx0Lmxlbmd0aCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF9pbmRleERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9pbmRleFBvaW50cyA9IGRhdGE7XG4gICAgICAgIHRoaXMuX2tkSW5kZXggPSBrZGJ1c2goZGF0YSwgbnVsbCwgbnVsbCwgNjQsIEludDMyQXJyYXkpO1xuICAgIH1cblxuICAgIF9nZXRUZXhDb29yZChwcm9wcykge1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlc1tpXS5maWx0ZXIocHJvcHMpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkeCcgOiBpLFxuICAgICAgICAgICAgICAgICAgICAndGV4Q29vcmQnIDogdGhpcy5fc3ByaXRlcy50ZXhDb29yZHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXQnICAgOiB0aGlzLl9zcHJpdGVzLm9mZnNldHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICdzaXplJyAgICAgOiB0aGlzLl9zcHJpdGVzLnNpemVzW2ldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBfY2hlY2tTcHJpdGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX25lZWRDaGVja1Nwcml0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSB0aGlzLnJlc291cmNlcztcbiAgICAgICAgY29uc3Qgc3ByaXRlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5sYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICAgICAgdGhpcy5sYXllci5nZXRTdHlsZSgpLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBtYXB0YWxrcy5NYXJrZXIoWzAsIDBdLCB7XG4gICAgICAgICAgICAgICAgICAgICdzeW1ib2wnIDogc3R5bGVbJ3N5bWJvbCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gbWFya2VyLl9nZXRTcHJpdGUocmVzb3VyY2VzLCBtYXAuQ2FudmFzQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKHNwcml0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zcHJpdGVzID0gdGhpcy5tZXJnZVNwcml0ZXMoc3ByaXRlcywgdHJ1ZSk7XG4gICAgICAgIGlmICghdGhpcy5fc3ByaXRlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAod2luZG93KSAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTUFQVEFMS1NfV0VCR0xfREVCVUdfQ0FOVkFTKSB7XG4gICAgICAgICAgICB3aW5kb3cuTUFQVEFMS1NfV0VCR0xfREVCVUdfQ0FOVkFTLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXMuY2FudmFzLCAwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX25lZWRDaGVja1Nwcml0ZXMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXRoaXMuX3RleHR1cmVMb2FkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX3Nwcml0ZXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3Nwcml0ZXMuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5fc3ByaXRlcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMubG9hZFRleHR1cmUoaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlU2FtcGxlcigndV9zYW1wbGVyJyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgdVNwcml0ZSA9IHRoaXMuX3VTcHJpdGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmxheWVyLl9jb29rZWRTdHlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB1U3ByaXRlLnB1c2guYXBwbHkodVNwcml0ZSwgdGhpcy5fc3ByaXRlcy50ZXhDb29yZHNbaV0pO1xuICAgICAgICAgICAgICAgIHVTcHJpdGUucHVzaCh0aGlzLl9zcHJpdGVzLm9mZnNldHNbaV0ueCwgdGhpcy5fc3ByaXRlcy5vZmZzZXRzW2ldLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldFZlcnRpY2UocG9pbnQpIHtcbiAgICAgICAgaWYgKHBvaW50Lmdlb21ldHJ5KSB7XG4gICAgICAgICAgICAvL0dlb0pTT04gZmVhdHVyZVxuICAgICAgICAgICAgcG9pbnQgPSBwb2ludC5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludC5jb29yZGluYXRlcykge1xuICAgICAgICAgICAgLy9HZW9KU09OIGdlb21ldHJ5XG4gICAgICAgICAgICBwb2ludCA9IHBvaW50LmNvb3JkaW5hdGVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG5cbiAgICBfZHJhd01hcmtlcnMoKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuY2FsY01hdHJpY2VzKCk7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoZ2wucHJvZ3JhbS51X21hdHJpeCwgZmFsc2UsIG0pO1xuICAgICAgICBnbC51bmlmb3JtMWYoZ2wucHJvZ3JhbS51X3NjYWxlLCB0aGlzLmdldE1hcCgpLmdldFNjYWxlKCkpO1xuICAgICAgICBnbC51bmlmb3JtMWZ2KGdsLnByb2dyYW0udV9zcHJpdGUsIHRoaXMuX3VTcHJpdGUpO1xuXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuUE9JTlRTLCAwLCB0aGlzLl92ZXJ0ZXhDb3VudCk7XG4gICAgfVxuXG4gICAgX3JlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxheWVyLm9uKCdzZXRzdHlsZScsIHRoaXMuX29uU3R5bGVDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmxheWVyLm9mZignc2V0c3R5bGUnLCB0aGlzLl9vblN0eWxlQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgX29uU3R5bGVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTdHlsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgX3NldEJsZW5kRXF1YXRpb24oKSB7XG4gICAgICAgIGxldCBibGVuZCA9IHRoaXMubGF5ZXIub3B0aW9uc1snYmxlbmRFcXVhdGlvbiddO1xuICAgICAgICBpZiAoIWJsZW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICBibGVuZCA9IGJsZW5kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChibGVuZCA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICAgIGdsLmJsZW5kRXF1YXRpb24oZ2wuRlVOQ19BREQpO1xuICAgICAgICB9IGVsc2UgaWYgKGJsZW5kID09PSAnc3VidHJhY3QnKSB7XG4gICAgICAgICAgICBnbC5ibGVuZEVxdWF0aW9uKGdsLkZVTkNfU1VCVFJBQ1QpO1xuICAgICAgICB9IGVsc2UgaWYgKGJsZW5kID09PSAncmV2ZXJzZV9zdWJzdHJhY3QnKSB7XG4gICAgICAgICAgICBnbC5ibGVuZEVxdWF0aW9uKGdsLkZVTkNfUkVWRVJTRV9TVUJUUkFDVCk7XG4gICAgICAgIH1cblxuICAgIH1cbn0pO1xuIiwidmFyIGNsb25lID0gKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENsb25lcyAoY29waWVzKSBhbiBPYmplY3QgdXNpbmcgZGVlcCBjb3B5aW5nLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gc3VwcG9ydHMgY2lyY3VsYXIgcmVmZXJlbmNlcyBieSBkZWZhdWx0LCBidXQgaWYgeW91IGFyZSBjZXJ0YWluXG4gKiB0aGVyZSBhcmUgbm8gY2lyY3VsYXIgcmVmZXJlbmNlcyBpbiB5b3VyIG9iamVjdCwgeW91IGNhbiBzYXZlIHNvbWUgQ1BVIHRpbWVcbiAqIGJ5IGNhbGxpbmcgY2xvbmUob2JqLCBmYWxzZSkuXG4gKlxuICogQ2F1dGlvbjogaWYgYGNpcmN1bGFyYCBpcyBmYWxzZSBhbmQgYHBhcmVudGAgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlcyxcbiAqIHlvdXIgcHJvZ3JhbSBtYXkgZW50ZXIgYW4gaW5maW5pdGUgbG9vcCBhbmQgY3Jhc2guXG4gKlxuICogQHBhcmFtIGBwYXJlbnRgIC0gdGhlIG9iamVjdCB0byBiZSBjbG9uZWRcbiAqIEBwYXJhbSBgY2lyY3VsYXJgIC0gc2V0IHRvIHRydWUgaWYgdGhlIG9iamVjdCB0byBiZSBjbG9uZWQgbWF5IGNvbnRhaW5cbiAqICAgIGNpcmN1bGFyIHJlZmVyZW5jZXMuIChvcHRpb25hbCAtIHRydWUgYnkgZGVmYXVsdClcbiAqIEBwYXJhbSBgZGVwdGhgIC0gc2V0IHRvIGEgbnVtYmVyIGlmIHRoZSBvYmplY3QgaXMgb25seSB0byBiZSBjbG9uZWQgdG9cbiAqICAgIGEgcGFydGljdWxhciBkZXB0aC4gKG9wdGlvbmFsIC0gZGVmYXVsdHMgdG8gSW5maW5pdHkpXG4gKiBAcGFyYW0gYHByb3RvdHlwZWAgLSBzZXRzIHRoZSBwcm90b3R5cGUgdG8gYmUgdXNlZCB3aGVuIGNsb25pbmcgYW4gb2JqZWN0LlxuICogICAgKG9wdGlvbmFsIC0gZGVmYXVsdHMgdG8gcGFyZW50IHByb3RvdHlwZSkuXG4qL1xuZnVuY3Rpb24gY2xvbmUocGFyZW50LCBjaXJjdWxhciwgZGVwdGgsIHByb3RvdHlwZSkge1xuICB2YXIgZmlsdGVyO1xuICBpZiAodHlwZW9mIGNpcmN1bGFyID09PSAnb2JqZWN0Jykge1xuICAgIGRlcHRoID0gY2lyY3VsYXIuZGVwdGg7XG4gICAgcHJvdG90eXBlID0gY2lyY3VsYXIucHJvdG90eXBlO1xuICAgIGZpbHRlciA9IGNpcmN1bGFyLmZpbHRlcjtcbiAgICBjaXJjdWxhciA9IGNpcmN1bGFyLmNpcmN1bGFyXG4gIH1cbiAgLy8gbWFpbnRhaW4gdHdvIGFycmF5cyBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcywgd2hlcmUgY29ycmVzcG9uZGluZyBwYXJlbnRzXG4gIC8vIGFuZCBjaGlsZHJlbiBoYXZlIHRoZSBzYW1lIGluZGV4XG4gIHZhciBhbGxQYXJlbnRzID0gW107XG4gIHZhciBhbGxDaGlsZHJlbiA9IFtdO1xuXG4gIHZhciB1c2VCdWZmZXIgPSB0eXBlb2YgQnVmZmVyICE9ICd1bmRlZmluZWQnO1xuXG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT0gJ3VuZGVmaW5lZCcpXG4gICAgY2lyY3VsYXIgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZGVwdGggPT0gJ3VuZGVmaW5lZCcpXG4gICAgZGVwdGggPSBJbmZpbml0eTtcblxuICAvLyByZWN1cnNlIHRoaXMgZnVuY3Rpb24gc28gd2UgZG9uJ3QgcmVzZXQgYWxsUGFyZW50cyBhbmQgYWxsQ2hpbGRyZW5cbiAgZnVuY3Rpb24gX2Nsb25lKHBhcmVudCwgZGVwdGgpIHtcbiAgICAvLyBjbG9uaW5nIG51bGwgYWx3YXlzIHJldHVybnMgbnVsbFxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgICByZXR1cm4gbnVsbDtcblxuICAgIGlmIChkZXB0aCA9PSAwKVxuICAgICAgcmV0dXJuIHBhcmVudDtcblxuICAgIHZhciBjaGlsZDtcbiAgICB2YXIgcHJvdG87XG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGNsb25lLl9faXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IFtdO1xuICAgIH0gZWxzZSBpZiAoY2xvbmUuX19pc1JlZ0V4cChwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBSZWdFeHAocGFyZW50LnNvdXJjZSwgX19nZXRSZWdFeHBGbGFncyhwYXJlbnQpKTtcbiAgICAgIGlmIChwYXJlbnQubGFzdEluZGV4KSBjaGlsZC5sYXN0SW5kZXggPSBwYXJlbnQubGFzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAoY2xvbmUuX19pc0RhdGUocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgRGF0ZShwYXJlbnQuZ2V0VGltZSgpKTtcbiAgICB9IGVsc2UgaWYgKHVzZUJ1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgQnVmZmVyKHBhcmVudC5sZW5ndGgpO1xuICAgICAgcGFyZW50LmNvcHkoY2hpbGQpO1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHByb3RvdHlwZSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXJlbnQpO1xuICAgICAgICBjaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuICAgICAgICBwcm90byA9IHByb3RvdHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2lyY3VsYXIpIHtcbiAgICAgIHZhciBpbmRleCA9IGFsbFBhcmVudHMuaW5kZXhPZihwYXJlbnQpO1xuXG4gICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsbENoaWxkcmVuW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGFsbFBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgYWxsQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSBpbiBwYXJlbnQpIHtcbiAgICAgIHZhciBhdHRycztcbiAgICAgIGlmIChwcm90bykge1xuICAgICAgICBhdHRycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0cnMgJiYgYXR0cnMuc2V0ID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjaGlsZFtpXSA9IF9jbG9uZShwYXJlbnRbaV0sIGRlcHRoIC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgcmV0dXJuIF9jbG9uZShwYXJlbnQsIGRlcHRoKTtcbn1cblxuLyoqXG4gKiBTaW1wbGUgZmxhdCBjbG9uZSB1c2luZyBwcm90b3R5cGUsIGFjY2VwdHMgb25seSBvYmplY3RzLCB1c2VmdWxsIGZvciBwcm9wZXJ0eVxuICogb3ZlcnJpZGUgb24gRkxBVCBjb25maWd1cmF0aW9uIG9iamVjdCAobm8gbmVzdGVkIHByb3BzKS5cbiAqXG4gKiBVU0UgV0lUSCBDQVVUSU9OISBUaGlzIG1heSBub3QgYmVoYXZlIGFzIHlvdSB3aXNoIGlmIHlvdSBkbyBub3Qga25vdyBob3cgdGhpc1xuICogd29ya3MuXG4gKi9cbmNsb25lLmNsb25lUHJvdG90eXBlID0gZnVuY3Rpb24gY2xvbmVQcm90b3R5cGUocGFyZW50KSB7XG4gIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIGMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgYy5wcm90b3R5cGUgPSBwYXJlbnQ7XG4gIHJldHVybiBuZXcgYygpO1xufTtcblxuLy8gcHJpdmF0ZSB1dGlsaXR5IGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBfX29ialRvU3RyKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn07XG5jbG9uZS5fX29ialRvU3RyID0gX19vYmpUb1N0cjtcblxuZnVuY3Rpb24gX19pc0RhdGUobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IERhdGVdJztcbn07XG5jbG9uZS5fX2lzRGF0ZSA9IF9faXNEYXRlO1xuXG5mdW5jdGlvbiBfX2lzQXJyYXkobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuY2xvbmUuX19pc0FycmF5ID0gX19pc0FycmF5O1xuXG5mdW5jdGlvbiBfX2lzUmVnRXhwKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5jbG9uZS5fX2lzUmVnRXhwID0gX19pc1JlZ0V4cDtcblxuZnVuY3Rpb24gX19nZXRSZWdFeHBGbGFncyhyZSkge1xuICB2YXIgZmxhZ3MgPSAnJztcbiAgaWYgKHJlLmdsb2JhbCkgZmxhZ3MgKz0gJ2cnO1xuICBpZiAocmUuaWdub3JlQ2FzZSkgZmxhZ3MgKz0gJ2knO1xuICBpZiAocmUubXVsdGlsaW5lKSBmbGFncyArPSAnbSc7XG4gIHJldHVybiBmbGFncztcbn07XG5jbG9uZS5fX2dldFJlZ0V4cEZsYWdzID0gX19nZXRSZWdFeHBGbGFncztcblxucmV0dXJuIGNsb25lO1xufSkoKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07IiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjc3NLZXl3b3JkcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxudmFyIHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yICh2YXIga2V5IGluIGNzc0tleXdvcmRzKSB7XG5cdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV1dID0ga2V5O1xuXHR9XG59XG5cbnZhciBjb252ZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdyZ2InfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzbCd9LFxuXHRoc3Y6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHN2J30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdod2InfSxcblx0Y215azoge2NoYW5uZWxzOiA0LCBsYWJlbHM6ICdjbXlrJ30sXG5cdHh5ejoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICd4eXonfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xhYid9LFxuXHRsY2g6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGNoJ30sXG5cdGhleDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnaGV4J119LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydrZXl3b3JkJ119LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kxNiddfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTI1NiddfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydoJywgJ2MnLCAnZyddfSxcblx0YXBwbGU6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ3IxNicsICdnMTYnLCAnYjE2J119LFxuXHRncmF5OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydncmF5J119XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKHZhciBtb2RlbCBpbiBjb252ZXJ0KSB7XG5cdGlmIChjb252ZXJ0Lmhhc093blByb3BlcnR5KG1vZGVsKSkge1xuXHRcdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoJ2xhYmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbCBsYWJlbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnZlcnRbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NoYW5uZWwgYW5kIGxhYmVsIGNvdW50cyBtaXNtYXRjaDogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogbGFiZWxzfSk7XG5cdH1cbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIHY7XG5cblx0aWYgKG1heCA9PT0gMCkge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSAoZGVsdGEgLyBtYXggKiAxMDAwKSAvIDEwO1xuXHR9XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHR2ID0gKChtYXggLyAyNTUpICogMTAwMCkgLyAxMDtcblxuXHRyZXR1cm4gW2gsIHMsIHZdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHR2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgYztcblx0dmFyIG07XG5cdHZhciB5O1xuXHR2YXIgaztcblxuXHRrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0bSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHR5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbi8qKlxuICogU2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG4gKiAqL1xuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdHJldHVybiAoXG5cdFx0TWF0aC5wb3coeFswXSAtIHlbMF0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzFdIC0geVsxXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMl0gLSB5WzJdLCAyKVxuXHQpO1xufVxuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0dmFyIGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0dmFyIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKHZhciBrZXl3b3JkIGluIGNzc0tleXdvcmRzKSB7XG5cdFx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleXdvcmQpKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcblxuXHRcdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdFx0dmFyIGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0dmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF0gLyAzNjA7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHQxO1xuXHR2YXIgdDI7XG5cdHZhciB0Mztcblx0dmFyIHJnYjtcblx0dmFyIHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHR0MSA9IDIgKiBsIC0gdDI7XG5cblx0cmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF07XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHNtaW4gPSBzO1xuXHR2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXHR2YXIgc3Y7XG5cdHZhciB2O1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdHYgPSAobCArIHMpIC8gMjtcblx0c3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF0gLyA2MDtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHR2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHR2YXIgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHR2YXIgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHR2YXIgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF07XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0dmFyIGxtaW47XG5cdHZhciBzbDtcblx0dmFyIGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgaCA9IGh3YlswXSAvIDM2MDtcblx0dmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG5cdHZhciByYXRpbyA9IHdoICsgYmw7XG5cdHZhciBpO1xuXHR2YXIgdjtcblx0dmFyIGY7XG5cdHZhciBuO1xuXG5cdC8vIHdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHR2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHR2YXIgYyA9IGNteWtbMF0gLyAxMDA7XG5cdHZhciBtID0gY215a1sxXSAvIDEwMDtcblx0dmFyIHkgPSBjbXlrWzJdIC8gMTAwO1xuXHR2YXIgayA9IGNteWtbM10gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSAvIDEwMDtcblx0dmFyIHkgPSB4eXpbMV0gLyAxMDA7XG5cdHZhciB6ID0geHl6WzJdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciB4O1xuXHR2YXIgeTtcblx0dmFyIHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHR2YXIgeTIgPSBNYXRoLnBvdyh5LCAzKTtcblx0dmFyIHgyID0gTWF0aC5wb3coeCwgMyk7XG5cdHZhciB6MiA9IE1hdGgucG93KHosIDMpO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciBocjtcblx0dmFyIGg7XG5cdHZhciBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdHZhciBsID0gbGNoWzBdO1xuXHR2YXIgYyA9IGxjaFsxXTtcblx0dmFyIGggPSBsY2hbMl07XG5cdHZhciBhO1xuXHR2YXIgYjtcblx0dmFyIGhyO1xuXG5cdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRhID0gYyAqIE1hdGguY29zKGhyKTtcblx0YiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cdHZhciB2YWx1ZSA9IDEgaW4gYXJndW1lbnRzID8gYXJndW1lbnRzWzFdIDogY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdOyAvLyBoc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBvcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cblx0Ly8gd2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHR2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdHZhciByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0dmFyIGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0dmFyIHJlbTtcblx0dmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHR2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdHZhciBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdHZhciBpbnRlZ2VyID0gcGFyc2VJbnQobWF0Y2hbMF0sIDE2KTtcblx0dmFyIHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHR2YXIgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0dmFyIGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdHZhciBncmF5c2NhbGU7XG5cdHZhciBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYSArIDQ7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgYyA9IDE7XG5cdHZhciBmID0gMDtcblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdGMgPSAyLjAgKiBzICogbDtcblx0fSBlbHNlIHtcblx0XHRjID0gMi4wICogcyAqICgxLjAgLSBsKTtcblx0fVxuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHR2YXIgYyA9IHMgKiB2O1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBoID0gaGNnWzBdIC8gMzYwO1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHR2YXIgcHVyZSA9IFswLCAwLCAwXTtcblx0dmFyIGhpID0gKGggJSAxKSAqIDY7XG5cdHZhciB2ID0gaGkgJSAxO1xuXHR2YXIgdyA9IDEgLSB2O1xuXHR2YXIgbWcgPSAwO1xuXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHR2YXIgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIHcgPSBod2JbMV0gLyAxMDA7XG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgdiA9IDEgLSBiO1xuXHR2YXIgYyA9IHYgLSB3O1xuXHR2YXIgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydC5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHNsID0gY29udmVydC5ncmF5LmhzdiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbMCwgMCwgYXJnc1swXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0LmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0dmFyIHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuXHR2YXIgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG5cdHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG4vLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG52YXIgcm91dGUgPSByZXF1aXJlKCcuL3JvdXRlJyk7XG5cbnZhciBjb252ZXJ0ID0ge307XG5cbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHR2YXIgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyB3ZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yICh2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0ubGFiZWxzfSk7XG5cblx0dmFyIHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdHZhciByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAodG9Nb2RlbCkge1xuXHRcdHZhciBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBnZXRSZ2JhOiBnZXRSZ2JhLFxuICAgZ2V0SHNsYTogZ2V0SHNsYSxcbiAgIGdldFJnYjogZ2V0UmdiLFxuICAgZ2V0SHNsOiBnZXRIc2wsXG4gICBnZXRId2I6IGdldEh3YixcbiAgIGdldEFscGhhOiBnZXRBbHBoYSxcblxuICAgaGV4U3RyaW5nOiBoZXhTdHJpbmcsXG4gICByZ2JTdHJpbmc6IHJnYlN0cmluZyxcbiAgIHJnYmFTdHJpbmc6IHJnYmFTdHJpbmcsXG4gICBwZXJjZW50U3RyaW5nOiBwZXJjZW50U3RyaW5nLFxuICAgcGVyY2VudGFTdHJpbmc6IHBlcmNlbnRhU3RyaW5nLFxuICAgaHNsU3RyaW5nOiBoc2xTdHJpbmcsXG4gICBoc2xhU3RyaW5nOiBoc2xhU3RyaW5nLFxuICAgaHdiU3RyaW5nOiBod2JTdHJpbmcsXG4gICBrZXl3b3JkOiBrZXl3b3JkXG59XG5cbmZ1bmN0aW9uIGdldFJnYmEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGFiYnIgPSAgL14jKFthLWZBLUYwLTldezN9KSQvLFxuICAgICAgIGhleCA9ICAvXiMoW2EtZkEtRjAtOV17Nn0pJC8sXG4gICAgICAgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIGtleXdvcmQgPSAvKFxcRCspLztcblxuICAgdmFyIHJnYiA9IFswLCAwLCAwXSxcbiAgICAgICBhID0gMSxcbiAgICAgICBtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkgKiAyLCBpICogMiArIDIpLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG4gICAgICBpZiAobWF0Y2hbMV0gPT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuICAgICAgcmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG4gICAgICBpZiAoIXJnYikge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgcmdiW2ldID0gc2NhbGUocmdiW2ldLCAwLCAyNTUpO1xuICAgfVxuICAgaWYgKCFhICYmIGEgIT0gMCkge1xuICAgICAgYSA9IDE7XG4gICB9XG4gICBlbHNlIHtcbiAgICAgIGEgPSBzY2FsZShhLCAwLCAxKTtcbiAgIH1cbiAgIHJnYlszXSA9IGE7XG4gICByZXR1cm4gcmdiO1xufVxuXG5mdW5jdGlvbiBnZXRIc2xhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICBzID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgbCA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCBzLCBsLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SHdiKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHcgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBiID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHcsIGIsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZ2Ioc3RyaW5nKSB7XG4gICB2YXIgcmdiYSA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIHJldHVybiByZ2JhICYmIHJnYmEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEhzbChzdHJpbmcpIHtcbiAgdmFyIGhzbGEgPSBnZXRIc2xhKHN0cmluZyk7XG4gIHJldHVybiBoc2xhICYmIGhzbGEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEFscGhhKHN0cmluZykge1xuICAgdmFyIHZhbHMgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICBpZiAodmFscykge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHNsYShzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRId2Ioc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG59XG5cbi8vIGdlbmVyYXRvcnNcbmZ1bmN0aW9uIGhleFN0cmluZyhyZ2IpIHtcbiAgIHJldHVybiBcIiNcIiArIGhleERvdWJsZShyZ2JbMF0pICsgaGV4RG91YmxlKHJnYlsxXSlcbiAgICAgICAgICAgICAgKyBoZXhEb3VibGUocmdiWzJdKTtcbn1cblxuZnVuY3Rpb24gcmdiU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChyZ2JhWzNdICE9PSB1bmRlZmluZWQgPyByZ2JhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdXG4gICAgICAgICAgICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG5cbiAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlLCBcIiArIChhbHBoYSB8fCByZ2JhWzNdIHx8IDEpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbFN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAoaHNsYVszXSAmJiBoc2xhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbChcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChoc2xhWzNdICE9PSB1bmRlZmluZWQgPyBoc2xhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2xhKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSwgXCJcbiAgICAgICAgICAgKyBhbHBoYSArIFwiKVwiO1xufVxuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuZnVuY3Rpb24gaHdiU3RyaW5nKGh3YiwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChod2JbM10gIT09IHVuZGVmaW5lZCA/IGh3YlszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHdiKFwiICsgaHdiWzBdICsgXCIsIFwiICsgaHdiWzFdICsgXCIlLCBcIiArIGh3YlsyXSArIFwiJVwiXG4gICAgICAgICAgICsgKGFscGhhICE9PSB1bmRlZmluZWQgJiYgYWxwaGEgIT09IDEgPyBcIiwgXCIgKyBhbHBoYSA6IFwiXCIpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQocmdiKSB7XG4gIHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn1cblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gc2NhbGUobnVtLCBtaW4sIG1heCkge1xuICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/IFwiMFwiICsgc3RyIDogc3RyO1xufVxuXG5cbi8vY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcbiAgIHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG59XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNsb25lID0gcmVxdWlyZSgnY2xvbmUnKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xudmFyIHN0cmluZyA9IHJlcXVpcmUoJ2NvbG9yLXN0cmluZycpO1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAob2JqKSB7XG5cdGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHJldHVybiBvYmo7XG5cdH1cblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbG9yKSkge1xuXHRcdHJldHVybiBuZXcgQ29sb3Iob2JqKTtcblx0fVxuXG5cdHRoaXMudmFsdWVzID0ge1xuXHRcdHJnYjogWzAsIDAsIDBdLFxuXHRcdGhzbDogWzAsIDAsIDBdLFxuXHRcdGhzdjogWzAsIDAsIDBdLFxuXHRcdGh3YjogWzAsIDAsIDBdLFxuXHRcdGNteWs6IFswLCAwLCAwLCAwXSxcblx0XHRhbHBoYTogMVxuXHR9O1xuXG5cdC8vIHBhcnNlIENvbG9yKCkgYXJndW1lbnRcblx0dmFyIHZhbHM7XG5cdGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhbHMgPSBzdHJpbmcuZ2V0UmdiYShvYmopO1xuXHRcdGlmICh2YWxzKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEhzbGEob2JqKSkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscyA9IHN0cmluZy5nZXRId2Iob2JqKSkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZyBcIicgKyBvYmogKyAnXCInKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcblx0XHR2YWxzID0gb2JqO1xuXHRcdGlmICh2YWxzLnIgIT09IHVuZGVmaW5lZCB8fCB2YWxzLnJlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLmwgIT09IHVuZGVmaW5lZCB8fCB2YWxzLmxpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLnYgIT09IHVuZGVmaW5lZCB8fCB2YWxzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc3YnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudyAhPT0gdW5kZWZpbmVkIHx8IHZhbHMud2hpdGVuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMuYyAhPT0gdW5kZWZpbmVkIHx8IHZhbHMuY3lhbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnY215aycsIHZhbHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdCAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHJnYjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdyZ2InLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc2w6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHNsJywgYXJndW1lbnRzKTtcblx0fSxcblx0aHN2OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2hzdicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGh3YjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdod2InLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRjbXlrOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2NteWsnLCBhcmd1bWVudHMpO1xuXHR9LFxuXG5cdHJnYkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLnJnYjtcblx0fSxcblx0aHNsQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHNsO1xuXHR9LFxuXHRoc3ZBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc3Y7XG5cdH0sXG5cdGh3YkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMudmFsdWVzLmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmh3Yjtcblx0fSxcblx0Y215a0FycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmNteWs7XG5cdH0sXG5cdHJnYmFBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0cmV0dXJuIHJnYi5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdH0sXG5cdHJnYmFBcnJheU5vcm1hbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHZhciBnbFJnYmEgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0Z2xSZ2JhW2ldID0gcmdiW2ldIC8gMjU1O1xuXHRcdH1cblx0XHRnbFJnYmEucHVzaCh0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdFx0cmV0dXJuIGdsUmdiYTtcblx0fSxcblx0aHNsYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMudmFsdWVzLmhzbDtcblx0XHRyZXR1cm4gaHNsLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5hbHBoYTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdmFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZWQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAwLCB2YWwpO1xuXHR9LFxuXHRncmVlbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAyLCB2YWwpO1xuXHR9LFxuXHRodWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHR2YWwgJT0gMzYwO1xuXHRcdFx0dmFsID0gdmFsIDwgMCA/IDM2MCArIHZhbCA6IHZhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMCwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDEsIHZhbCk7XG5cdH0sXG5cdGxpZ2h0bmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDIsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb252OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMSwgdmFsKTtcblx0fSxcblx0d2hpdGVuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMSwgdmFsKTtcblx0fSxcblx0YmxhY2tuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMiwgdmFsKTtcblx0fSxcblx0dmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAyLCB2YWwpO1xuXHR9LFxuXHRjeWFuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDAsIHZhbCk7XG5cdH0sXG5cdG1hZ2VudGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMSwgdmFsKTtcblx0fSxcblx0eWVsbG93OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDIsIHZhbCk7XG5cdH0sXG5cdGJsYWNrOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDMsIHZhbCk7XG5cdH0sXG5cblx0aGV4U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKTtcblx0fSxcblx0cmdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHJnYmFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRod2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0a2V5d29yZDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKHRoaXMudmFsdWVzLnJnYlswXSA8PCAxNikgfCAodGhpcy52YWx1ZXMucmdiWzFdIDw8IDgpIHwgdGhpcy52YWx1ZXMucmdiWzJdO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGRhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0bGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuZGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gMjU1IC0gdGhpcy52YWx1ZXMucmdiW2ldO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgcmdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gKz0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gLT0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSArPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gLT0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMV0gKz0gdGhpcy52YWx1ZXMuaHdiWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzJdICs9IHRoaXMudmFsdWVzLmh3YlsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdyZXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIFt2YWwsIHZhbCwgdmFsXSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xlYXJlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgLSAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhICsgKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGh1ZSA9IHRoaXMudmFsdWVzLmhzbFswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMF0gPSBodWU7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0ICovXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdHZhciBjb2xvcjEgPSB0aGlzO1xuXHRcdHZhciBjb2xvcjIgPSBtaXhpbkNvbG9yO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0LnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKVxuXHRcdFx0KVxuXHRcdFx0LmFscGhhKGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmdiKCk7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgY29sID0gbmV3IENvbG9yKCk7XG5cdFx0Y29sLnZhbHVlcyA9IGNsb25lKHRoaXMudmFsdWVzKTtcblx0XHRyZXR1cm4gY29sO1xuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlKSB7XG5cdHZhciB2YWxzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHNbc3BhY2UuY2hhckF0KGkpXSA9IHRoaXMudmFsdWVzW3NwYWNlXVtpXTtcblx0fVxuXG5cdGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuXHRcdHZhbHMuYSA9IHRoaXMudmFsdWVzLmFscGhhO1xuXHR9XG5cblx0Ly8ge3I6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDAuNH1cblx0cmV0dXJuIHZhbHM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlLCB2YWxzKSB7XG5cdHZhciBzcGFjZXMgPSB7XG5cdFx0cmdiOiBbJ3JlZCcsICdncmVlbicsICdibHVlJ10sXG5cdFx0aHNsOiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcyddLFxuXHRcdGhzdjogWydodWUnLCAnc2F0dXJhdGlvbicsICd2YWx1ZSddLFxuXHRcdGh3YjogWydodWUnLCAnd2hpdGVuZXNzJywgJ2JsYWNrbmVzcyddLFxuXHRcdGNteWs6IFsnY3lhbicsICdtYWdlbnRhJywgJ3llbGxvdycsICdibGFjayddXG5cdH07XG5cblx0dmFyIG1heGVzID0ge1xuXHRcdHJnYjogWzI1NSwgMjU1LCAyNTVdLFxuXHRcdGhzbDogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGhzdjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGh3YjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGNteWs6IFsxMDAsIDEwMCwgMTAwLCAxMDBdXG5cdH07XG5cblx0dmFyIGk7XG5cdHZhciBhbHBoYSA9IDE7XG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdGFscGhhID0gdmFscztcblx0fSBlbHNlIGlmICh2YWxzLmxlbmd0aCkge1xuXHRcdC8vIFsxMCwgMTAsIDEwXVxuXHRcdHRoaXMudmFsdWVzW3NwYWNlXSA9IHZhbHMuc2xpY2UoMCwgc3BhY2UubGVuZ3RoKTtcblx0XHRhbHBoYSA9IHZhbHNbc3BhY2UubGVuZ3RoXTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlLmNoYXJBdCgwKV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyOiAxMCwgZzogMTAsIGI6IDEwfVxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tzcGFjZS5jaGFyQXQoaSldO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2VzW3NwYWNlXVswXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyZWQ6IDEwLCBncmVlbjogMTAsIGJsdWU6IDEwfVxuXHRcdHZhciBjaGFucyA9IHNwYWNlc1tzcGFjZV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbY2hhbnNbaV1dO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hbHBoYTtcblx0fVxuXG5cdHRoaXMudmFsdWVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGFscGhhID09PSB1bmRlZmluZWQgPyB0aGlzLnZhbHVlcy5hbHBoYSA6IGFscGhhKSkpO1xuXG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBjYXBwZWQ7XG5cblx0Ly8gY2FwIHZhbHVlcyBvZiB0aGUgc3BhY2UgcHJpb3IgY29udmVydGluZyBhbGwgdmFsdWVzXG5cdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NwYWNlXVtpXSwgdGhpcy52YWx1ZXNbc3BhY2VdW2ldKSk7XG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHR9XG5cblx0Ly8gY29udmVydCB0byBhbGwgdGhlIG90aGVyIGNvbG9yIHNwYWNlc1xuXHRmb3IgKHZhciBzbmFtZSBpbiBzcGFjZXMpIHtcblx0XHRpZiAoc25hbWUgIT09IHNwYWNlKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV0gPSBjb252ZXJ0W3NwYWNlXVtzbmFtZV0odGhpcy52YWx1ZXNbc3BhY2VdKTtcblx0XHR9XG5cblx0XHQvLyBjYXAgdmFsdWVzXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzbmFtZV1baV0sIHRoaXMudmFsdWVzW3NuYW1lXVtpXSkpO1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFNwYWNlID0gZnVuY3Rpb24gKHNwYWNlLCBhcmdzKSB7XG5cdHZhciB2YWxzID0gYXJnc1swXTtcblxuXHRpZiAodmFscyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmdiKClcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZXMoc3BhY2UpO1xuXHR9XG5cblx0Ly8gY29sb3IucmdiKDEwLCAxMCwgMTApXG5cdGlmICh0eXBlb2YgdmFscyA9PT0gJ251bWJlcicpIHtcblx0XHR2YWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG5cdH1cblxuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdmFscyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbiAoc3BhY2UsIGluZGV4LCB2YWwpIHtcblx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmVkKClcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XTtcblx0fSBlbHNlIGlmICh2YWwgPT09IHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0pIHtcblx0XHQvLyBjb2xvci5yZWQoY29sb3IucmVkKCkpXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBjb2xvci5yZWQoMTAwKVxuXHR0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdID0gdmFsO1xuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdGhpcy52YWx1ZXNbc3BhY2VdKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCJpbXBvcnQgKiBhcyBtYXB0YWxrcyBmcm9tICdtYXB0YWxrcyc7XG5pbXBvcnQgV2ViZ2xSZW5kZXJlciBmcm9tICcuLi8uLi9SZW5kZXJlcic7XG5pbXBvcnQgTGluZUF0bGFzIGZyb20gJy4uLy4uL3BhaW50ZXIvTGluZUF0bGFzJztcbmltcG9ydCBDb2xvciBmcm9tICdjb2xvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGhSZW5kZXJlciBleHRlbmRzIFdlYmdsUmVuZGVyZXIge1xuXG4gICAgY29uc3RydWN0b3IobGF5ZXIpIHtcbiAgICAgICAgc3VwZXIobGF5ZXIpO1xuICAgICAgICB0aGlzLl9uZWVkQ2hlY2tTdHlsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX25lZWRDaGVja1Nwcml0ZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuICAgIGNoZWNrUmVzb3VyY2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX25lZWRDaGVja1N0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlcykge1xuICAgICAgICAgICAgdGhpcy5sYXllci5fY29va2VkU3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICBzWydzeW1ib2wnXSA9IG1hcHRhbGtzLlV0aWwuY29udmVydFJlc291cmNlVXJsKHNbJ3N5bWJvbCddKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBtYXB0YWxrcy5VdGlsLmdldEV4dGVybmFsUmVzb3VyY2VzKHNbJ3N5bWJvbCddLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlcy5wdXNoKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuX25lZWRDaGVja1N0eWxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fbmVlZENoZWNrU3ByaXRlcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdGV4dHVyZUxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb3VyY2VzO1xuICAgIH1cblxuICAgIG9uQ2FudmFzQ3JlYXRlKCkge1xuICAgICAgICAvLyBlbmFibGUgZHJhd0VsZW1lbnRzIHRvIHVzZSBVTlNJR05FRF9JTlQgYXMgdGhlIHR5cGUgb2YgZWxlbWVudCBhcnJheSBidWZmZXJcbiAgICAgICAgLy8gZGVmYXVsdCB0eXBlIGlzIFVOU0lHTkVEX1NIT1JUKDAgfiA2NTUzNilcbiAgICAgICAgdGhpcy5nbC5nZXRFeHRlbnNpb24oJ09FU19lbGVtZW50X2luZGV4X3VpbnQnKTtcbiAgICB9XG5cblxuICAgIG9uUmVtb3ZlKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudHMoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2ZpbGxTcHJpdGVzO1xuICAgICAgICBkZWxldGUgdGhpcy5fc3ByaXRlcztcbiAgICAgICAgc3VwZXIub25SZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBnZXREYXRhU3ltYm9sKHByb3BzKSB7XG4gICAgICAgIGxldCBjb3VudCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5sYXllci5fY29va2VkU3R5bGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuZ2V0VGV4dHVyZShzdHlsZS5zeW1ib2wpO1xuICAgICAgICAgICAgaWYgKHRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0eWxlLmZpbHRlcih7ICdwcm9wZXJ0aWVzJyA6IHByb3BzIH0pID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzeW1ib2wnIDogc3R5bGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RleENvb3JkJyA6IHRoaXMuX2ZpbGxTcHJpdGVzLnRleENvb3Jkc1tjb3VudF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW5kZXgnIDogaVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnc3ltYm9sJyA6IHN0eWxlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbmRleCcgOiBpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0TGluZVRleHR1cmUoc3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdGxhcy5nZXRBdGxhcyhzeW1ib2wpO1xuICAgIH1cblxuICAgIGdldEZpbGxUZXh0dXJlKHN5bWJvbCkge1xuICAgICAgICBjb25zdCBmaWxsUGF0dGVybiA9IHN5bWJvbCA/IHN5bWJvbFsncG9seWdvblBhdHRlcm5GaWxlJ10gOiBudWxsO1xuICAgICAgICBpZiAoZmlsbFBhdHRlcm4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5nZXRJbWFnZShmaWxsUGF0dGVybik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2NoZWNrU3ByaXRlcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9uZWVkQ2hlY2tTcHJpdGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXRsYXMgPSBuZXcgTGluZUF0bGFzKHRoaXMucmVzb3VyY2VzKTtcbiAgICAgICAgY29uc3Qgc3ByaXRlcyA9IFtdO1xuICAgICAgICBjb25zdCBmaWxsU3ByaXRlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5sYXllci5fY29va2VkU3R5bGVzKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLl9jb29rZWRTdHlsZXMuZm9yRWFjaChzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5nZXRMaW5lVGV4dHVyZShzLnN5bWJvbCk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLnB1c2goc3ByaXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmlsbCB0ZXh1cmVcbiAgICAgICAgICAgICAgICBzcHJpdGUgPSB0aGlzLmdldEZpbGxUZXh0dXJlKHMuc3ltYm9sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTcHJpdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NhbnZhcycgOiBzcHJpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0JyA6IG5ldyBtYXB0YWxrcy5Qb2ludCgwLCAwKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSB0aGlzLm1lcmdlU3ByaXRlcyhzcHJpdGVzKTtcbiAgICAgICAgdGhpcy5fZmlsbFNwcml0ZXMgPSB0aGlzLm1lcmdlU3ByaXRlcyhmaWxsU3ByaXRlcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXMgJiYgdHlwZW9mICh3aW5kb3cpICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NQVBUQUxLU19XRUJHTF9ERUJVR19DQU5WQVMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlYnVnQ2FudmFzID0gd2luZG93Lk1BUFRBTEtTX1dFQkdMX0RFQlVHX0NBTlZBUztcbiAgICAgICAgICAgIGRlYnVnQ2FudmFzLmdldENvbnRleHQoJzJkJykuZmlsbFJlY3QoMCwgMCwgZGVidWdDYW52YXMud2lkdGgsIGRlYnVnQ2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBkZWJ1Z0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAyNTUsIDI1NSknO1xuICAgICAgICAgICAgZGVidWdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5maWxsUmVjdCgwLCAwLCB0aGlzLl9zcHJpdGVzLmNhbnZhcy53aWR0aCwgdGhpcy5fc3ByaXRlcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGRlYnVnQ2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHRoaXMuX3Nwcml0ZXMuY2FudmFzLCAwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX25lZWRDaGVja1Nwcml0ZXMgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5fc3ByaXRlcyAmJiAhdGhpcy5fdGV4dHVyZUxvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZSh0aGlzLl9zcHJpdGVzLmNhbnZhcyk7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVNhbXBsZXIoJ3VfaW1hZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZpbGxTcHJpdGVzICYmICF0aGlzLl9maWxsVGV4dHVyZUxvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZSh0aGlzLl9maWxsU3ByaXRlcy5jYW52YXMpO1xuICAgICAgICAgICAgdGhpcy5lbmFibGVTYW1wbGVyKCd1X2ZpbGxfaW1hZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuX2ZpbGxUZXh0dXJlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXBhcmUgYXJyYXkgZm9yIHVuaWZvcm0gdV9zdHlsZXNcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCB1U3R5bGUgPSB0aGlzLl91U3R5bGUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmxheWVyLl9jb29rZWRTdHlsZXNbaV07XG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5nZXRMaW5lVGV4dHVyZShzdHlsZS5zeW1ib2wpO1xuICAgICAgICAgICAgaWYgKHRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICAvLyDmqKHlvI/loavlhYXmiJbmnIlkYXNoYXJyYXnml7YsIOa3u+WKoOS4ieS9jee6ueeQhuWdkOagh1xuICAgICAgICAgICAgICAgIC8vIDA6IHjlnZDmoIcsIDE6IOe6ueeQhumVv+W6piwgMjog57q555CG5a695bqmLCAzOiAtMVxuICAgICAgICAgICAgICAgIHVTdHlsZS5wdXNoLmFwcGx5KHVTdHlsZSwgdGhpcy5fc3ByaXRlcy50ZXhDb29yZHNbY291bnRlcisrXSk7XG4gICAgICAgICAgICAgICAgdVN0eWxlLnB1c2goLTEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDnur/mmK/nroDljZXnmoTpopzoibLloavlhYVcbiAgICAgICAgICAgICAgICAvLyAwOiByLCAxOiBnLCAyOiBiLCAzOiBhXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gc3R5bGUuc3ltYm9sWydsaW5lQ29sb3InXSB8fCAnIzAwMDAwMCc7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBDb2xvcihjb2xvcikucmdiYUFycmF5Tm9ybWFsaXplZCgpO1xuICAgICAgICAgICAgICAgIHVTdHlsZS5wdXNoLmFwcGx5KHVTdHlsZSwgY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJlcGFyZSBhcnJheSBmb3IgdW5pZm9ybSB1X2ZpbGxfc3R5bGVzXG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCB1RmlsbFN0eWxlID0gdGhpcy5fdUZpbGxTdHlsZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5sYXllci5fY29va2VkU3R5bGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMubGF5ZXIuX2Nvb2tlZFN0eWxlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmdldEZpbGxUZXh0dXJlKHN0eWxlLnN5bWJvbCk7XG4gICAgICAgICAgICBpZiAodGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIC8vIOaooeW8j+Whq+WFheaIluaciWRhc2hhcnJheeaXtiwg5re75Yqg5LiJ5L2N57q555CG5Z2Q5qCHXG4gICAgICAgICAgICAgICAgLy8gMDogeOWdkOaghywgMTog57q555CG6ZW/5bqmLCAyOiDnurnnkIblrr3luqYsIDM6IC0xXG4gICAgICAgICAgICAgICAgdUZpbGxTdHlsZS5wdXNoLmFwcGx5KHVGaWxsU3R5bGUsIHRoaXMuX2ZpbGxTcHJpdGVzLnRleENvb3Jkc1tjb3VudGVyKytdKTtcbiAgICAgICAgICAgICAgICB1RmlsbFN0eWxlLnB1c2goLTEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDnur/mmK/nroDljZXnmoTpopzoibLloavlhYVcbiAgICAgICAgICAgICAgICAvLyAwOiByLCAxOiBnLCAyOiBiLCAzOiBhXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gc3R5bGUuc3ltYm9sWydwb2x5Z29uRmlsbCddIHx8ICcjZmZmJztcbiAgICAgICAgICAgICAgICBjb2xvciA9IENvbG9yKGNvbG9yKS5yZ2JhQXJyYXlOb3JtYWxpemVkKCk7XG4gICAgICAgICAgICAgICAgdUZpbGxTdHlsZS5wdXNoLmFwcGx5KHVGaWxsU3R5bGUsIGNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5sYXllci5vbignc2V0c3R5bGUnLCB0aGlzLl9vblN0eWxlQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgX3JlbW92ZUV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5sYXllci5vZmYoJ3NldHN0eWxlJywgdGhpcy5fb25TdHlsZUNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIF9vblN0eWxlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5fbmVlZENoZWNrU3R5bGUgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCBzaGFkZXJzIGZyb20gJy4uL3NoYWRlci9TaGFkZXInO1xuaW1wb3J0IExpbmVQYWludGVyIGZyb20gJy4uL3BhaW50ZXIvTGluZVBhaW50ZXInO1xuaW1wb3J0IEJpZ0RhdGFMYXllciBmcm9tICcuL0JpZ0RhdGFMYXllcic7XG5pbXBvcnQgUGF0aFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXIvUGF0aFJlbmRlcmVyJztcbmltcG9ydCB7IGdldFRhcmdldFpvb20gfSBmcm9tICcuLi9wYWludGVyL1BhaW50ZXInO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICAgICdibHVyJyA6IDJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpZ0xpbmVMYXllciBleHRlbmRzIEJpZ0RhdGFMYXllciB7XG5cbn1cblxuQmlnTGluZUxheWVyLm1lcmdlT3B0aW9ucyhvcHRpb25zKTtcblxuQmlnTGluZUxheWVyLnJlZ2lzdGVySlNPTlR5cGUoJ0JpZ0xpbmVMYXllcicpO1xuXG4vKmNvbnN0IGRlZmF1bHRTeW1ib2wgPSB7XG4gICAgJ2xpbmVXaWR0aCcgOiAxMixcbiAgICAnbGluZU9wYWNpdHknIDogMSxcbiAgICAnbGluZUNvbG9yJyA6ICdyZ2IoMCwgMCwgMCknLFxuICAgICdsaW5lRGFzaGFycmF5JyA6IFsyMCwgMTAsIDMwLCAyMF1cbn07Ki9cblxuZXhwb3J0IGNsYXNzIEJpZ0xpbmVSZW5kZXJlciBleHRlbmRzIFBhdGhSZW5kZXJlciB7XG5cblxuICAgIG9uQ2FudmFzQ3JlYXRlKCkge1xuICAgICAgICBjb25zdCB1bmlmb3JtcyA9IFsndV9tYXRyaXgnLCAndV9zY2FsZScsICd1X3RleF9zaXplJywgLyondV9ibHVyJywqLyAndV9zdHlsZXNbMF0nXTtcbiAgICAgICAgdGhpcy5fbGluZVByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oc2hhZGVycy5saW5lLnZlcnRleFNvdXJjZSwgc2hhZGVycy5saW5lLmZyYWdtZW50U291cmNlLCB1bmlmb3Jtcyk7XG4gICAgICAgIHN1cGVyLm9uQ2FudmFzQ3JlYXRlKCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlQ2FudmFzKCk7XG5cbiAgICAgICAgdGhpcy5fZHJhd0xpbmVzKCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBkcmF3T25JbnRlcmFjdGluZygpIHtcbiAgICAgICAgdGhpcy5fZHJhd0xpbmVzKCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBvblJlbW92ZSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xpbmVBcnJheXM7XG4gICAgICAgIHN1cGVyLm9uUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZ2V0VGV4dHVyZShzeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGluZVRleHR1cmUoc3ltYm9sKTtcbiAgICB9XG5cbiAgICBfZHJhd0xpbmVzKCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2wsXG4gICAgICAgICAgICBtYXAgPSB0aGlzLmdldE1hcCgpLFxuICAgICAgICAgICAgcHJvZ3JhbSA9IHRoaXMuX2xpbmVQcm9ncmFtO1xuICAgICAgICB0aGlzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuX2NoZWNrU3ByaXRlcygpO1xuXG4gICAgICAgIHRoaXMuX3ByZXBhcmVMaW5lRGF0YSgpO1xuICAgICAgICB0aGlzLl9idWZmZXJMaW5lRGF0YSh0aGlzLl9saW5lQXJyYXlzKTtcblxuICAgICAgICBjb25zdCBtID0gdGhpcy5jYWxjTWF0cmljZXMoKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihnbC5wcm9ncmFtLnVfbWF0cml4LCBmYWxzZSwgbSk7XG4gICAgICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVfc2NhbGUsIG1hcC5nZXRTY2FsZSgpIC8gbWFwLmdldFNjYWxlKGdldFRhcmdldFpvb20obWFwKSkpO1xuICAgICAgICBnbC51bmlmb3JtMWZ2KHByb2dyYW0udV9zdHlsZXMsIHRoaXMuX3VTdHlsZSk7XG4gICAgICAgIC8vIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVfbGluZXdpZHRoLCBzeW1ib2xbJ2xpbmVXaWR0aCddIC8gMik7XG4gICAgICAgIC8vIHZhciBjb2xvciA9IENvbG9yKHN5bWJvbFsnbGluZUNvbG9yJ10pLnJnYmFBcnJheSgpLm1hcChmdW5jdGlvbiAoYywgaSkgeyBpZiAoaT09PTMpIHsgcmV0dXJuIGM7IH0gZWxzZSB7cmV0dXJuIGMgLyAyNTU7fX0pO1xuICAgICAgICAvLyBnbC51bmlmb3JtNGZ2KHByb2dyYW0udV9jb2xvciwgbmV3IEZsb2F0MzJBcnJheShjb2xvcikpO1xuICAgICAgICAvLyBnbC51bmlmb3JtMWYocHJvZ3JhbS51X29wYWNpdHksIHN5bWJvbFsnbGluZU9wYWNpdHknXSk7XG4gICAgICAgIC8vIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVfYmx1ciwgdGhpcy5sYXllci5vcHRpb25zWydibHVyJ10pO1xuICAgICAgICBsZXQgdGV4U2l6ZSA9IFswLCAwXTtcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZXMpIHtcbiAgICAgICAgICAgIHRleFNpemUgPSBbdGhpcy5fc3ByaXRlcy5jYW52YXMud2lkdGgsIHRoaXMuX3Nwcml0ZXMuY2FudmFzLmhlaWdodF07XG4gICAgICAgIH1cbiAgICAgICAgZ2wudW5pZm9ybTJmdihwcm9ncmFtLnVfdGV4X3NpemUsIG5ldyBGbG9hdDMyQXJyYXkodGV4U2l6ZSkpO1xuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCB0aGlzLl9lbGVtZW50Q291bnQsIGdsLlVOU0lHTkVEX0lOVCwgMCk7XG4gICAgICAgIC8vcmVsZWFzZSBlbGVtZW50IGJ1ZmZlclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgICB9XG5cbiAgICBfcHJlcGFyZUxpbmVEYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5fbGluZUFycmF5cykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbCxcbiAgICAgICAgICAgIG1hcCA9IHRoaXMuZ2V0TWFwKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxheWVyLmRhdGE7XG4gICAgICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgTGluZVBhaW50ZXIoZ2wsIG1hcCk7XG4gICAgICAgIGxldCBzeW1ib2w7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghZGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtpXSkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSB0aGlzLmdldERhdGFTeW1ib2woZGF0YVtpXVsxXSk7XG4gICAgICAgICAgICAgICAgcGFpbnRlci5hZGRMaW5lKGRhdGFbaV1bMF0sIHN5bWJvbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbaV0udHlwZSkge1xuICAgICAgICAgICAgICAgIC8vZ2VvanNvblxuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHRoaXMuZ2V0RGF0YVN5bWJvbChkYXRhW2ldLnByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIHBhaW50ZXIuYWRkTGluZShkYXRhW2ldLCBzeW1ib2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE8g5aSE55CG57q555CG5Z2Q5qCHXG4gICAgICAgIGNvbnN0IGxpbmVBcnJheXMgPSB0aGlzLl9saW5lQXJyYXlzID0gcGFpbnRlci5nZXRBcnJheXMoKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50Q291bnQgPSBsaW5lQXJyYXlzLmVsZW1lbnRBcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgX2J1ZmZlckxpbmVEYXRhKGxpbmVBcnJheXMpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xuICAgICAgICAvL2J1ZmZlciB2ZXJ0ZXggZGF0YVxuICAgICAgICBpZiAoIXRoaXMuX3ZlcnRleEJ1ZmZlcikge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5fdmVydGV4QnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkobGluZUFycmF5cy52ZXJ0ZXhBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl92ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlVmVydGV4QXR0cmliKFxuICAgICAgICAgICAgWydhX3BvcycsIDIsICdGTE9BVCddXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9ub3JtYWxCdWZmZXIpIHtcbiAgICAgICAgICAgIC8vYnVmZmVyIG5vcm1hbCBkYXRhXG4gICAgICAgICAgICBjb25zdCBub3JtYWxCdWZmZXIgPSB0aGlzLl9ub3JtYWxCdWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG5vcm1hbEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShsaW5lQXJyYXlzLm5vcm1hbEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX25vcm1hbEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoW1xuICAgICAgICAgICAgWydhX25vcm1hbCcsIDIsICdGTE9BVCddLFxuICAgICAgICAgICAgWydhX2xpbmVzb2ZhcicsIDEsICdGTE9BVCddXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICghdGhpcy5fdGV4QnVmZmVyKSB7XG4gICAgICAgICAgICAvL3RleHR1cmUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGNvbnN0IHRleEJ1ZmZlciA9IHRoaXMuX3RleEJ1ZmZlciA9IHRoaXMuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGV4QnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGxpbmVBcnJheXMuc3R5bGVBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl90ZXhCdWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlVmVydGV4QXR0cmliKFtcbiAgICAgICAgICAgIFsnYV9zdHlsZScsIDEsICdGTE9BVCddXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIHJlbGVhc2UgYmluZGVkIGJ1ZmZlclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50QnVmZmVyKSB7XG4gICAgICAgICAgICAvL2J1ZmZlciBlbGVtZW50IGRhdGFcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRCdWZmZXIgPSB0aGlzLl9lbGVtZW50QnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGVsZW1lbnRCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQzMkFycmF5KGxpbmVBcnJheXMuZWxlbWVudEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5fZWxlbWVudEJ1ZmZlcik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xuICAgIH1cbn1cblxuQmlnTGluZUxheWVyLnJlZ2lzdGVyUmVuZGVyZXIoJ3dlYmdsJywgQmlnTGluZVJlbmRlcmVyKTtcbiIsImltcG9ydCBzaGFkZXJzIGZyb20gJy4uL3NoYWRlci9TaGFkZXInO1xuaW1wb3J0IEJpZ0RhdGFMYXllciBmcm9tICcuL0JpZ0RhdGFMYXllcic7XG5pbXBvcnQgUG9seWdvblBhaW50ZXIgZnJvbSAnLi4vcGFpbnRlci9Qb2x5Z29uUGFpbnRlcic7XG5pbXBvcnQgeyBCaWdMaW5lUmVuZGVyZXIgfSBmcm9tICcuL0JpZ0xpbmVMYXllcic7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgJ2JsdXInIDogMlxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlnUG9seWdvbkxheWVyIGV4dGVuZHMgQmlnRGF0YUxheWVyIHtcblxufVxuXG5CaWdQb2x5Z29uTGF5ZXIubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuXG5CaWdQb2x5Z29uTGF5ZXIucmVnaXN0ZXJKU09OVHlwZSgnQmlnUG9seWdvbkxheWVyJyk7XG5cbkJpZ1BvbHlnb25MYXllci5yZWdpc3RlclJlbmRlcmVyKCd3ZWJnbCcsIGNsYXNzIGV4dGVuZHMgQmlnTGluZVJlbmRlcmVyIHtcblxuICAgIG9uQ2FudmFzQ3JlYXRlKCkge1xuICAgICAgICBjb25zdCB1bmlmb3JtcyA9IFsndV9tYXRyaXgnLCAndV9maWxsX3N0eWxlc1swXSddO1xuICAgICAgICB0aGlzLl9wb2x5Z29uUHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbShzaGFkZXJzLnBvbHlnb24udmVydGV4U291cmNlLCBzaGFkZXJzLnBvbHlnb24uZnJhZ21lbnRTb3VyY2UsIHVuaWZvcm1zKTtcbiAgICAgICAgc3VwZXIub25DYW52YXNDcmVhdGUoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnByZXBhcmVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5fZHJhd1BvbHlnb25zKCk7XG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLkJMRU5EKTtcbiAgICAgICAgdGhpcy5fZHJhd0xpbmVzKCk7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZHJhd09uSW50ZXJhY3RpbmcoKSB7XG4gICAgICAgIHRoaXMuX2RyYXdQb2x5Z29ucygpO1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5CTEVORCk7XG4gICAgICAgIHRoaXMuX2RyYXdMaW5lcygpO1xuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkJMRU5EKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVJlbmRlcigpO1xuICAgIH1cblxuICAgIGdldFRleHR1cmUoc3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGxUZXh0dXJlKHN5bWJvbCk7XG4gICAgfVxuXG4gICAgX2RyYXdQb2x5Z29ucygpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsLFxuICAgICAgICAgICAgcHJvZ3JhbSA9IHRoaXMuX3BvbHlnb25Qcm9ncmFtO1xuICAgICAgICB0aGlzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuX2NoZWNrU3ByaXRlcygpO1xuXG4gICAgICAgIHRoaXMuX3ByZXBhcmVQb2x5Z29uRGF0YSgpO1xuXG4gICAgICAgIHRoaXMuX2J1ZmZlclBvbHlnb25EYXRhKHRoaXMuX3BvbHlnb25BcnJheXMpO1xuXG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLmNhbGNNYXRyaWNlcygpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGdsLnByb2dyYW1bJ3VfbWF0cml4J10sIGZhbHNlLCBtKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmdihwcm9ncmFtWyd1X2ZpbGxfc3R5bGVzJ10sIHRoaXMuX3VGaWxsU3R5bGUpO1xuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCB0aGlzLl9wb2x5Z29uRWxlbWVudENvdW50LCBnbC5VTlNJR05FRF9JTlQsIDApO1xuICAgICAgICAvL3JlbGVhc2UgZWxlbWVudCBidWZmZXJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbCk7XG4gICAgfVxuXG4gICAgX3ByZXBhcmVQb2x5Z29uRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BvbHlnb25BcnJheXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2wsXG4gICAgICAgICAgICBtYXAgPSB0aGlzLmdldE1hcCgpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxheWVyLmRhdGE7XG4gICAgICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgUG9seWdvblBhaW50ZXIoZ2wsIG1hcCk7XG4gICAgICAgIGxldCBzeW1ib2w7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghZGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtpXSkpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSB0aGlzLmdldERhdGFTeW1ib2woZGF0YVtpXVsxXSk7XG4gICAgICAgICAgICAgICAgcGFpbnRlci5hZGRQb2x5Z29uKGRhdGFbaV1bMF0sIHN5bWJvbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbaV0udHlwZSkge1xuICAgICAgICAgICAgICAgIC8vZ2VvanNvblxuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHRoaXMuZ2V0RGF0YVN5bWJvbChkYXRhW2ldLnByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIHBhaW50ZXIuYWRkUG9seWdvbihkYXRhW2ldLCBzeW1ib2wpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9seWdvbkFycmF5cyA9IHRoaXMuX3BvbHlnb25BcnJheXMgPSBwYWludGVyLmdldEFycmF5cygpO1xuICAgICAgICB0aGlzLl9wb2x5Z29uRWxlbWVudENvdW50ID0gcG9seWdvbkFycmF5cy5lbGVtZW50QXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIF9idWZmZXJQb2x5Z29uRGF0YShwb2x5Z29uQXJyYXlzKSB7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgaWYgKCF0aGlzLl9wb2x5Z29uVmVydGV4QnVmZmVyKSB7XG4gICAgICAgICAgICAvL2J1ZmZlciB2ZXJ0ZXggZGF0YVxuICAgICAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gdGhpcy5fcG9seWdvblZlcnRleEJ1ZmZlciA9IHRoaXMuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4QnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHBvbHlnb25BcnJheXMudmVydGV4QXJyYXkpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5fcG9seWdvblZlcnRleEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoXG4gICAgICAgICAgICBbJ2FfcG9zJywgMiwgJ0ZMT0FUJ11cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXRoaXMuX3BvbHlnb25UZXhCdWZmZXIpIHtcbiAgICAgICAgICAgIC8vdGV4dHVyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgY29uc3QgdGV4QnVmZmVyID0gdGhpcy5fcG9seWdvblRleEJ1ZmZlciA9IHRoaXMuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGV4QnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHBvbHlnb25BcnJheXMuc3R5bGVBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl9wb2x5Z29uVGV4QnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVZlcnRleEF0dHJpYihbXG4gICAgICAgICAgICBbJ2FfZmlsbF9zdHlsZScsIDEsICdGTE9BVCddXG4gICAgICAgIF0pO1xuICAgICAgICAvLyByZWxlYXNlIGJpbmRlZCBidWZmZXJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuXG4gICAgICAgIGlmICghdGhpcy5fcG9seWdvbkVsZW1CdWZmZXIpIHtcbiAgICAgICAgICAgIC8vYnVmZmVyIGVsZW1lbnQgZGF0YVxuICAgICAgICAgICAgY29uc3QgZWxlbWVudEJ1ZmZlciA9IHRoaXMuX3BvbHlnb25FbGVtQnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGVsZW1lbnRCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQzMkFycmF5KHBvbHlnb25BcnJheXMuZWxlbWVudEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5fcG9seWdvbkVsZW1CdWZmZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZW1vdmUoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wb2x5Z29uQXJyYXlzO1xuICAgICAgICBzdXBlci5vblJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxufSk7XG5cbiIsImltcG9ydCAqIGFzIG1hcHRhbGtzIGZyb20gJ21hcHRhbGtzJztcbmltcG9ydCBQYWludGVyIGZyb20gJy4vUGFpbnRlcic7XG5pbXBvcnQgZWFyY3V0IGZyb20gJ2VhcmN1dCc7XG5pbXBvcnQgUG9pbnQgZnJvbSAncG9pbnQtZ2VvbWV0cnknO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0Wm9vbSB9IGZyb20gJy4vUGFpbnRlcic7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLy/ovpPlhaXmlbDmja7kuLrnu4/nuqzluqbml7YsIOi9rOWMluS4ujJkIHBvaW50XG4gICAgJ3Byb2plY3QnIDogdHJ1ZVxufTtcblxuLyoqXG4gKiBBIFBvbHlnb24gUGFpbnRlciB0byBwcm9kdWNlIHZlcnRleCBjb29yZGluYXRlcyBmb3IgV2ViR0wgc2hhZGVycy4gPGJyPlxuICpcbiAqIEBhdXRob3IgZnV6aGVublxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJ1ZGVQYWludGVyIGV4dGVuZHMgUGFpbnRlciB7XG4gICAgY29uc3RydWN0b3IoZ2wsIG1hcCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihnbCwgbWFwLCBvcHRpb25zKTtcbiAgICAgICAgLy8g57uT5p6c5pWw57uEXG4gICAgICAgIC8vLS0tLS0tLS0tLS1cbiAgICAgICAgdGhpcy52ZXJ0ZXhBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLm5vcm1hbEFycmF5ID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudEFycmF5ID0gW107XG4gICAgICAgIHRoaXMuc3R5bGVBcnJheSA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnue7k+aenOaVsOe7hFxuICAgICAqIEByZXR1cm4ge09iamVjdH0g57uT5p6c5pWw57uEXG4gICAgICovXG4gICAgZ2V0QXJyYXlzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3ZlcnRleEFycmF5JyAgOiB0aGlzLnZlcnRleEFycmF5LFxuICAgICAgICAgICAgJ25vcm1hbEFycmF5JyA6IHRoaXMubm9ybWFsQXJyYXksXG4gICAgICAgICAgICAnZWxlbWVudEFycmF5JyA6IHRoaXMuZWxlbWVudEFycmF5LFxuICAgICAgICAgICAgJ3N0eWxlQXJyYXknICAgOiB0aGlzLnN0eWxlQXJyYXlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDkuIDmnaFQb2x5Z29u5pWw5o2u55qE5Z2Q5qCH5pWw57uELCAg5Z2Q5qCH5Li657uP57qs5bqm5oiW6ICFMmQgcG9pbnQo5Z2Q5qCH5pa55ZCR5LiO5bGP5bmV5Z2Q5qCH55u45ZCMKS5cbiAgICAgKiDlvZPmlbDmja7kuLrnu4/nuqzluqbml7YsIOmcgOimgeaKim9wdGlvbnPkuK3nmoRwcm9qZWN06K6+5Li6dHJ1ZVxuICAgICAqIOWkmui+ueW9ouaVsOaNruWPr+S7peaYryBQb2x5Z29uLCDkuZ/lj6/ku6XmmK8gTXVsdGlQb2x5Z29uLlxuICAgICAqIOWmguaenOaYr011bHRpUG9seWdvbiwg5pWw57uE5b2i5byP5Li6OiBbW1t4MCwgeTBdLFt4MSwgeTFdLCAuLl1dXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg56ys5LiA5p2h5aSa6L655b2i55qE5Z2Q5qCH5pWw57uEICAgICAg56ys5LqM5p2h57q/55qE5Z2Q5qCH5pWw57uEXG4gICAgICog5aaC5p6c5pivTXVsdGlQb2x5Z29uLCDmlbDnu4TlvaLlvI/kuLo6IFtbW1t4MDAsIHkwMF0sW3gwMSwgeTAxXSwgLi5dXSwgW1tbeDEwLCB5MTBdLFt4MTEsIHkxMV0sIC4uXV1dXG4gICAgICogc3R5bGXkuLrlpJrovrnlvaLnmoTmoLflvI8sIOeUqOadpeeUn+aIkOagt+W8j+aVsOaNri5cbiAgICAgKiBAcGFyYW0ge051bWJlcltdW118TnVtYmVyW11bXVtdfSBwb2x5Z29uIC0g5aSa6L655b2i5Z2Q5qCH5pWw57uEXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlIC0g5aSa6L655b2i55qE5qC35byPLCBtYXB0YWxrcy5qc+eahFN5bWJvbFxuICAgICAqL1xuICAgIGFkZFBvbHlnb24ocG9seWdvbiwgaGVpZ2h0LCBzdHlsZSkge1xuICAgICAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZS5zeW1ib2xbJ3BvbHlnb25PcGFjaXR5J10gPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2ZXJ0aWNlID0gdGhpcy5fZ2V0VmVydGljZShwb2x5Z29uKTtcblxuICAgICAgICAvL+i+k+WFpeaYr011bHRpUG9seWdvbuaXtiwg6YGN5Y6GY2hpbGRyZW4sIOW5tuS+neasoea3u+WKoOWkhOeQhlxuICAgICAgICBpZiAodmVydGljZVswXSAmJiBBcnJheS5pc0FycmF5KHZlcnRpY2VbMF1bMF0pICYmIEFycmF5LmlzQXJyYXkodmVydGljZVswXVswXVswXSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdmVydGljZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBvbHlnb24odmVydGljZVtpXSwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZpbGxBcnJheXModmVydGljZSwgaGVpZ2h0LCBzdHlsZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9maWxsQXJyYXlzKHZlcnRpY2UsIGhlaWdodCwgc3R5bGUpIHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9uID0gMztcblxuICAgICAgICBjb25zdCB0YXJnZXRaID0gZ2V0VGFyZ2V0Wm9vbSh0aGlzLm1hcCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBlYXJjdXQuZmxhdHRlbih2ZXJ0aWNlKTtcblxuICAgICAgICBjb25zdCBib3R0b20gPSBbXTtcbiAgICAgICAgY29uc3QgdG9wID0gW107XG4gICAgICAgIGxldCBjO1xuICAgICAgICAvL3B1c2ggM2QgcG9pbnRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZGF0YS52ZXJ0aWNlcy5sZW5ndGg7IGkgPCBsOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGlmIChpID09PSBsIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lcXVhbENvb3JkKGRhdGEudmVydGljZXNbaV0sIGRhdGEudmVydGljZXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3Byb2plY3QnXSkge1xuICAgICAgICAgICAgICAgIGMgPSB0aGlzLm1hcC5jb29yZGluYXRlVG9Qb2ludChuZXcgbWFwdGFsa3MuQ29vcmRpbmF0ZShkYXRhLnZlcnRpY2VzW2ldLCBkYXRhLnZlcnRpY2VzW2kgKyAxXSksIHRhcmdldFopO1xuICAgICAgICAgICAgICAgIGJvdHRvbS5wdXNoKGMueCwgYy55LCAwKTtcbiAgICAgICAgICAgICAgICB0b3AucHVzaChjLngsIGMueSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm90dG9tLnB1c2goZGF0YS52ZXJ0aWNlc1tpXSwgZGF0YS52ZXJ0aWNlc1tpICsgMV0sIDApO1xuICAgICAgICAgICAgICAgIHRvcC5wdXNoKGRhdGEudmVydGljZXNbaV0sIGRhdGEudmVydGljZXNbaSArIDFdLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEudmVydGljZXMgPSBib3R0b207XG4gICAgICAgIGxldCB0cmlhbmdsZXMgPSBlYXJjdXQoZGF0YS52ZXJ0aWNlcywgZGF0YS5ob2xlcywgZGltZW5zaW9uKTtcbiAgICAgICAgaWYgKHRyaWFuZ2xlcy5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRldmlhdGlvbiA9IGVhcmN1dC5kZXZpYXRpb24oZGF0YS52ZXJ0aWNlcywgZGF0YS5ob2xlcywgZGltZW5zaW9uLCB0cmlhbmdsZXMpO1xuICAgICAgICBpZiAoTWF0aC5yb3VuZChkZXZpYXRpb24gKiAxRTMpIC8gMUUzICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoY29uc29sZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRyaWFuZ2x1YXRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb3VudCA9IGJvdHRvbS5sZW5ndGggLyBkaW1lbnNpb247XG5cbiAgICAgICAgY29uc3QgcHJlQ291bnQgPSB0aGlzLnZlcnRleEFycmF5Lmxlbmd0aCAvIGRpbWVuc2lvbjtcbiAgICAgICAgaWYgKHByZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdHJpYW5nbGVzID0gdHJpYW5nbGVzLm1hcChlID0+IGUgKyBwcmVDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHVzaCBib3R0b20gdmVydGljZVxuICAgICAgICBtYXB0YWxrcy5VdGlsLnB1c2hJbih0aGlzLnZlcnRleEFycmF5LCBib3R0b20pO1xuICAgICAgICAvLyBwdXNoIGJvdHRvbSBlbGVtZW50c1xuICAgICAgICBtYXB0YWxrcy5VdGlsLnB1c2hJbih0aGlzLmVsZW1lbnRBcnJheSwgdHJpYW5nbGVzKTtcbiAgICAgICAgLy8gcHVzaCBib3R0b20gbm9ybWFsc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubm9ybWFsQXJyYXkucHVzaCgwLCAwLCAtMSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRyaWFuZ2xlcyA9IHRyaWFuZ2xlcy5tYXAoZSA9PiBlICsgY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHB1c2ggdG9wIHZlcnRpY2VcbiAgICAgICAgbWFwdGFsa3MuVXRpbC5wdXNoSW4odGhpcy52ZXJ0ZXhBcnJheSwgdG9wKTtcbiAgICAgICAgLy8gcHVzaCB0b3AgZWxlbWVudHNcbiAgICAgICAgbWFwdGFsa3MuVXRpbC5wdXNoSW4odGhpcy5lbGVtZW50QXJyYXksIHRyaWFuZ2xlcyk7XG4gICAgICAgIC8vIHB1c2ggdG9wIG5vcm1hbHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLm5vcm1hbEFycmF5LnB1c2goMCwgMCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwdXNoIHdhbGwgZWxlbWVudHNcbiAgICAgICAgY29uc3QgdmVydGV4Q291bnQgPSB0aGlzLnZlcnRleEFycmF5Lmxlbmd0aCAvIGRpbWVuc2lvbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjb3VudDsgaSA8IGwgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlpID0gaSAqIGRpbWVuc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbCA9IG5ldyBQb2ludChib3R0b21baWkgKyAzXSwgYm90dG9tW2lpICsgNF0pLnN1YihuZXcgUG9pbnQoYm90dG9tW2lpXSwgYm90dG9tW2lpICsgMV0pKS5fdW5pdCgpLl9wZXJwKCk7XG4gICAgICAgICAgICB0aGlzLnZlcnRleEFycmF5LnB1c2goYm90dG9tW2lpXSwgYm90dG9tW2lpICsgMV0sIGJvdHRvbVtpaSArIDJdKTtcbiAgICAgICAgICAgIHRoaXMudmVydGV4QXJyYXkucHVzaChib3R0b21baWkgKyAzXSwgYm90dG9tW2lpICsgNF0sIGJvdHRvbVtpaSArIDVdKTtcbiAgICAgICAgICAgIHRoaXMudmVydGV4QXJyYXkucHVzaCh0b3BbaWkgKyAzXSwgdG9wW2lpICsgNF0sIHRvcFtpaSArIDVdKTtcbiAgICAgICAgICAgIHRoaXMudmVydGV4QXJyYXkucHVzaCh0b3BbaWldLCB0b3BbaWkgKyAxXSwgdG9wW2lpICsgMl0pO1xuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCA0OyBuKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vcm1hbEFycmF5LnB1c2gobm9ybWFsLngsIG5vcm1hbC55LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVpID0gaSAqIDQ7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRBcnJheS5wdXNoKHZlcnRleENvdW50ICsgZWksIHZlcnRleENvdW50ICsgZWkgKyAxLCB2ZXJ0ZXhDb3VudCArIGVpICsgMik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRBcnJheS5wdXNoKHZlcnRleENvdW50ICsgZWksIHZlcnRleENvdW50ICsgZWkgKyAyLCB2ZXJ0ZXhDb3VudCArIGVpICsgMyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIHB1c2ggc3R5bGVzXG4gICAgICAgIHRoaXMuX2FkZFRleENvb3Jkcyh0aGlzLnZlcnRleEFycmF5Lmxlbmd0aCAvIGRpbWVuc2lvbiAtIHByZUNvdW50LCBzdHlsZSk7XG4gICAgfVxuXG4gICAgX2dldFZlcnRpY2UoZ2VvKSB7XG4gICAgICAgIGlmIChnZW8uZ2VvbWV0cnkpIHtcbiAgICAgICAgICAgIC8vR2VvSlNPTiBmZWF0dXJlXG4gICAgICAgICAgICBnZW8gPSBnZW8uZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2VvLmNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAvL0dlb0pTT04gZ2VvbWV0cnlcbiAgICAgICAgICAgIGdlbyA9IGdlby5jb29yZGluYXRlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2VvO1xuICAgIH1cblxuICAgIF9hZGRUZXhDb29yZHMobiwgc3R5bGUpIHtcbiAgICAgICAgLy8gdGV4X2lkeCAqIDEwMCArIG9wYWNpdHkgKiAxMFxuICAgICAgICBjb25zdCB2ID0gc3R5bGUuaW5kZXggKiAxMDAgKyAoc3R5bGUuc3ltYm9sWydwb2x5Z29uT3BhY2l0eSddIHx8IDEpICogMTA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlQXJyYXkucHVzaCh2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9lcXVhbENvb3JkKGMxLCBjMikge1xuICAgICAgICByZXR1cm4gYzFbMF0gPT09IGMyWzBdICYmIGMxWzFdID09PSBjMlsxXTtcbiAgICB9XG59XG5cbkV4dHJ1ZGVQYWludGVyLm1lcmdlT3B0aW9ucyhvcHRpb25zKTtcbiIsImltcG9ydCBzaGFkZXJzIGZyb20gJy4uL3NoYWRlci9TaGFkZXInO1xuaW1wb3J0IEV4dHJ1ZGVQYWludGVyIGZyb20gJy4uL3BhaW50ZXIvRXh0cnVkZVBhaW50ZXInO1xuaW1wb3J0IEJpZ0RhdGFMYXllciBmcm9tICcuL0JpZ0RhdGFMYXllcic7XG5pbXBvcnQgUGF0aFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXIvUGF0aFJlbmRlcmVyJztcbmltcG9ydCB7IHZlYzMgfSBmcm9tICdAbWFwYm94L2dsLW1hdHJpeCc7XG5pbXBvcnQgeyBnZXRUYXJnZXRab29tIH0gZnJvbSAnLi4vcGFpbnRlci9QYWludGVyJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAnbGlnaHRQb3MnIDogWzEwLCAwLCAzNV0sXG4gICAgJ2xpZ2h0Q29sb3InIDogWzEsIDEsIDFdLFxuICAgICdsaWdodEludGVuc2l0eScgOiAwLjUsXG4gICAgJ2FtYmllbnRMaWdodCcgOiBbMC4wMiwgMC4wMiwgMC4wMl1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJ1ZGVQb2x5Z29uTGF5ZXIgZXh0ZW5kcyBCaWdEYXRhTGF5ZXIge1xuXG59XG5cbkV4dHJ1ZGVQb2x5Z29uTGF5ZXIubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuXG5FeHRydWRlUG9seWdvbkxheWVyLnJlZ2lzdGVySlNPTlR5cGUoJ0V4dHJ1ZGVQb2x5Z29uTGF5ZXInKTtcblxuZXhwb3J0IGNsYXNzIEV4dHJ1ZGVSZW5kZXJlciBleHRlbmRzIFBhdGhSZW5kZXJlciB7XG5cbiAgICBvbkNhbnZhc0NyZWF0ZSgpIHtcbiAgICAgICAgY29uc3QgdW5pZm9ybXMgPSBbJ3VfbWF0cml4JywgJ3VfZmlsbF9zdHlsZXNbMF0nLCAndV9saWdodGNvbG9yJywgJ3VfbGlnaHRwb3MnLCAndV9hbWJpZW50bGlnaHQnLCAndV9saWdodGludGVuc2l0eSddO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oc2hhZGVycy5leHRydWRlLnZlcnRleFNvdXJjZSwgc2hhZGVycy5leHRydWRlLmZyYWdtZW50U291cmNlLCB1bmlmb3Jtcyk7XG4gICAgICAgIHN1cGVyLm9uQ2FudmFzQ3JlYXRlKCk7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xuICAgICAgICAvLyBnbC5kZXB0aEZ1bmMoZ2wuRVFVQUwpO1xuICAgICAgICAvLyBnbC5jdWxsRmFjZShnbC5GUk9OVF9BTkRfQkFDSyk7XG4gICAgICAgIC8vIElmIGJsZW5kIGlzIGVuYWJsZWQsIGV4dHJ1c2lvbidzIHdhbGwgd2lsbCBiZSB0cmFuc3BhcmVudFxuICAgICAgICBnbC5kaXNhYmxlKGdsLkJMRU5EKTtcbiAgICAgICAgZ2wuZGlzYWJsZShnbC5TVEVOQ0lMX1RFU1QpO1xuICAgICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnByZXBhcmVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5fZHJhd0V4dHJ1ZGVzKCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBkcmF3T25JbnRlcmFjdGluZygpIHtcbiAgICAgICAgdGhpcy5fZHJhd0V4dHJ1ZGVzKCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBvblJlbW92ZSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2V4dHJ1ZGVBcnJheXM7XG4gICAgICAgIHN1cGVyLm9uUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZ2V0VGV4dHVyZShzeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsbFRleHR1cmUoc3ltYm9sKTtcbiAgICB9XG5cbiAgICBfZHJhd0V4dHJ1ZGVzKCkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2wsXG4gICAgICAgICAgICBwcm9ncmFtID0gdGhpcy5wcm9ncmFtO1xuICAgICAgICB0aGlzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuX2NoZWNrU3ByaXRlcygpO1xuXG4gICAgICAgIHRoaXMuX3ByZXBhcmVEYXRhKCk7XG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLmNhbGNNYXRyaWNlcygpO1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGdsLnByb2dyYW1bJ3VfbWF0cml4J10sIGZhbHNlLCBtKTtcbiAgICAgICAgZ2wudW5pZm9ybTFmdihwcm9ncmFtWyd1X2ZpbGxfc3R5bGVzJ10sIHRoaXMuX3VGaWxsU3R5bGUpO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0cG9zID0gdGhpcy5sYXllci5vcHRpb25zWydsaWdodFBvcyddIHx8IFswLCAwLCAzNV07XG4gICAgICAgIGdsLnVuaWZvcm0zZnYoZ2wucHJvZ3JhbVsndV9saWdodHBvcyddLCB2ZWMzLm5vcm1hbGl6ZShbXSwgbGlnaHRwb3MpKTtcblxuICAgICAgICBjb25zdCBsaWdodENvbG9yID0gdGhpcy5sYXllci5vcHRpb25zWydsaWdodENvbG9yJ10gfHwgWzEsIDEsIDFdO1xuICAgICAgICBnbC51bmlmb3JtM2YoZ2wucHJvZ3JhbVsndV9saWdodGNvbG9yJ10sIGxpZ2h0Q29sb3JbMF0sIGxpZ2h0Q29sb3JbMV0sIGxpZ2h0Q29sb3JbMl0pO1xuXG4gICAgICAgIGNvbnN0IGFtYmllbnQgPSB0aGlzLmxheWVyLm9wdGlvbnNbJ2FtYmllbnRMaWdodCddIHx8IFswLjAyLCAwLjAyLCAwLjAyXTtcbiAgICAgICAgZ2wudW5pZm9ybTNmKGdsLnByb2dyYW1bJ3VfYW1iaWVudGxpZ2h0J10sIGFtYmllbnRbMF0sIGFtYmllbnRbMV0sIGFtYmllbnRbMl0pO1xuXG4gICAgICAgIGNvbnN0IGxpZ2h0SW50ZW5zaXR5ID0gdGhpcy5sYXllci5vcHRpb25zWydsaWdodEludGVuc2l0eSddIHx8IDAuNTtcbiAgICAgICAgZ2wudW5pZm9ybTFmKGdsLnByb2dyYW1bJ3VfbGlnaHRpbnRlbnNpdHknXSwgbGlnaHRJbnRlbnNpdHkpO1xuICAgICAgICB0aGlzLl9idWZmZXJFeHRydWRlRGF0YSh0aGlzLl9leHRydWRlQXJyYXlzKTtcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLlRSSUFOR0xFUywgdGhpcy5fZWxlbWVudENvdW50LCBnbC5VTlNJR05FRF9JTlQsIDApO1xuICAgICAgICAvLyBnbC5kcmF3RWxlbWVudHMoZ2wuTElORVMsIHRoaXMuX2VsZW1lbnRDb3VudCwgZ2wuVU5TSUdORURfSU5ULCAwKTtcbiAgICAgICAgLy9yZWxlYXNlIGVsZW1lbnQgYnVmZmVyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpO1xuICAgIH1cblxuICAgIF9wcmVwYXJlRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJ1ZGVBcnJheXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2wsXG4gICAgICAgICAgICBtYXAgPSB0aGlzLmdldE1hcCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRaID0gZ2V0VGFyZ2V0Wm9vbShtYXApO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5sYXllci5kYXRhO1xuICAgICAgICBjb25zdCBwYWludGVyID0gbmV3IEV4dHJ1ZGVQYWludGVyKGdsLCBtYXApO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFbaV0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gdGhpcy5nZXREYXRhU3ltYm9sKGRhdGFbaV1bMV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRhdGFbaV1bMV1bJ2hlaWdodCddO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBIZWlnaHQgPSBtYXAuZGlzdGFuY2VUb1BpeGVsKGhlaWdodCwgMCwgdGFyZ2V0Wikud2lkdGg7XG4gICAgICAgICAgICAgICAgcGFpbnRlci5hZGRQb2x5Z29uKGRhdGFbaV1bMF0sIHBIZWlnaHQsIHN5bWJvbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbaV0udHlwZSkge1xuICAgICAgICAgICAgICAgIC8vZ2VvanNvblxuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuZ2V0RGF0YVN5bWJvbChkYXRhW2ldLnByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGRhdGFbaV0ucHJvcGVydGllc1snaGVpZ2h0J107XG4gICAgICAgICAgICAgICAgY29uc3QgcEhlaWdodCA9IG1hcC5kaXN0YW5jZVRvUGl4ZWwoaGVpZ2h0LCAwLCB0YXJnZXRaKS53aWR0aDtcbiAgICAgICAgICAgICAgICBwYWludGVyLmFkZFBvbHlnb24oZGF0YVtpXSwgcEhlaWdodCwgc3ltYm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRydWRlQXJyYXlzID0gdGhpcy5fZXh0cnVkZUFycmF5cyA9IHBhaW50ZXIuZ2V0QXJyYXlzKCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRDb3VudCA9IGV4dHJ1ZGVBcnJheXMuZWxlbWVudEFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBfYnVmZmVyRXh0cnVkZURhdGEoZXh0cnVkZUFycmF5cykge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIC8vYnVmZmVyIHZlcnRleCBkYXRhXG4gICAgICAgIGlmICghdGhpcy5fdmVydGV4QnVmZmVyKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSB0aGlzLl92ZXJ0ZXhCdWZmZXIgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZlcnRleEJ1ZmZlcik7XG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShleHRydWRlQXJyYXlzLnZlcnRleEFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX3ZlcnRleEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoXG4gICAgICAgICAgICBbJ2FfcG9zJywgMywgJ0ZMT0FUJ11cbiAgICAgICAgKTtcblxuICAgICAgICAvL2J1ZmZlciBub3JtYWwgZGF0YVxuICAgICAgICBpZiAoIXRoaXMuX25vcm1hbEJ1ZmZlcikge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsQnVmZmVyID0gdGhpcy5fbm9ybWFsQnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBub3JtYWxCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoZXh0cnVkZUFycmF5cy5ub3JtYWxBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLl9ub3JtYWxCdWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlVmVydGV4QXR0cmliKFxuICAgICAgICAgICAgWydhX25vcm1hbCcsIDMsICdGTE9BVCddXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl90ZXhCdWZmZXIpIHtcbiAgICAgICAgICAgIC8vdGV4dHVyZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgY29uc3QgdGV4QnVmZmVyID0gdGhpcy5fdGV4QnVmZmVyID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXhCdWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoZXh0cnVkZUFycmF5cy5zdHlsZUFycmF5KSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuX3RleEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWIoW1xuICAgICAgICAgICAgWydhX2ZpbGxfc3R5bGUnLCAxLCAnRkxPQVQnXVxuICAgICAgICBdKTtcblxuICAgICAgICAvLyByZWxlYXNlIGJpbmRlZCBidWZmZXJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudEJ1ZmZlcikge1xuICAgICAgICAgICAgLy9idWZmZXIgZWxlbWVudCBkYXRhXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50QnVmZmVyID0gdGhpcy5fZWxlbWVudEJ1ZmZlciA9IHRoaXMuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBlbGVtZW50QnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MzJBcnJheShleHRydWRlQXJyYXlzLmVsZW1lbnRBcnJheSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuX2VsZW1lbnRCdWZmZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5FeHRydWRlUG9seWdvbkxheWVyLnJlZ2lzdGVyUmVuZGVyZXIoJ3dlYmdsJywgRXh0cnVkZVJlbmRlcmVyKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJvdXQiLCJGbG9hdDMyQXJyYXkiLCJjb3B5IiwiYSIsImlkZW50aXR5IiwibXVsdGlwbHkiLCJiIiwiYTAwIiwiYTAxIiwiYTAyIiwiYTAzIiwiYTEwIiwiYTExIiwiYTEyIiwiYTEzIiwiYTIwIiwiYTIxIiwiYTIyIiwiYTIzIiwiYTMwIiwiYTMxIiwiYTMyIiwiYTMzIiwiYjAiLCJiMSIsImIyIiwiYjMiLCJ0cmFuc2xhdGUiLCJ2IiwieCIsInkiLCJ6Iiwic2NhbGUiLCJyb3RhdGVYIiwicmFkIiwicyIsIk1hdGgiLCJzaW4iLCJjIiwiY29zIiwicm90YXRlWiIsInBlcnNwZWN0aXZlIiwiZm92eSIsImFzcGVjdCIsIm5lYXIiLCJmYXIiLCJmIiwidGFuIiwibmYiLCJsb29rQXQiLCJleWUiLCJjZW50ZXIiLCJ1cCIsIngwIiwieDEiLCJ4MiIsInkwIiwieTEiLCJ5MiIsInowIiwiejEiLCJ6MiIsImxlbiIsImV5ZXgiLCJleWV5IiwiZXlleiIsInVweCIsInVweSIsInVweiIsImNlbnRlcngiLCJjZW50ZXJ5IiwiY2VudGVyeiIsImFicyIsInNxcnQiLCJmcm9tVmFsdWVzIiwibm9ybWFsaXplIiwidmVjIiwidmVjNCIsInRtcHZlYzMiLCJ2ZWMzIiwieFVuaXRWZWMzIiwieVVuaXRWZWMzIiwibWF0ciIsIm1hdDMiLCJjbG9uZSIsInNldCIsImFkZCIsImRvdCIsImxlcnAiLCJ0ZW1wMSIsInRlbXAyIiwibGVuZ3RoIiwic3F1YXJlZExlbmd0aCIsInNxckxlbiIsImVxdWFscyIsIlBhaW50ZXIiLCJnbCIsIm1hcCIsIm9wdGlvbnMiLCJtYXB0YWxrcyIsImdldFRhcmdldFpvb20iLCJnZXRNYXhOYXRpdmVab29tIiwiUkFESUFOIiwiUEkiLCJXZWJnbFJlbmRlcmVyIiwibmVlZFRvUmVkcmF3IiwiZ2V0TWFwIiwiaXNab29taW5nIiwiZ2V0UGl0Y2giLCJjcmVhdGVDYW52YXMiLCJjYW52YXMiLCJzaXplIiwiZ2V0U2l6ZSIsInIiLCJyZXRpbmEiLCJDYW52YXNDbGFzcyIsIl9jcmVhdGVHTENvbnRleHQiLCJsYXllciIsImNsZWFyQ29sb3IiLCJ2ZXJib3NlIiwiYmxlbmRGdW5jIiwiT05FIiwiZW5hYmxlIiwiQkxFTkQiLCJkaXNhYmxlIiwiREVQVEhfVEVTVCIsInBpeGVsU3RvcmVpIiwiVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMIiwib25DYW52YXNDcmVhdGUiLCJidWZmZXIiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwiY2FudmFzU2l6ZSIsInZpZXdwb3J0IiwiY2xlYXJDYW52YXMiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJERVBUSF9CVUZGRVJfQklUIiwiY2xlYXJSZWN0IiwicHJlcGFyZUNhbnZhcyIsImZpcmUiLCJtZXJnZVNwcml0ZXMiLCJzcHJpdGVzIiwiZm9yUG9pbnQiLCJ3IiwiaCIsImZvckVhY2giLCJtYXgiLCJwb3ciLCJjZWlsIiwibG9nIiwiTE4yIiwic3ByaXRlQ2FudmFzIiwiY3R4IiwidGV4Q29vcmRzIiwib2Zmc2V0cyIsInNpemVzIiwicG9pbnRlciIsImR4IiwiZHkiLCJjdyIsImNoIiwicHVzaCIsImRyYXdJbWFnZSIsIm9mZnNldCIsInJlc3VsdCIsImNyZWF0ZUJ1ZmZlciIsIkVycm9yIiwiX2J1ZmZlcnMiLCJlbmFibGVWZXJ0ZXhBdHRyaWIiLCJhdHRyaWJ1dGVzIiwiQXJyYXkiLCJpc0FycmF5IiwidmVydGljZXNUZXhDb29yZHMiLCJGU0laRSIsIkJZVEVTX1BFUl9FTEVNRU5UIiwiU1RSSURFIiwiaSIsImF0dHIiLCJnZXRBdHRyaWJMb2NhdGlvbiIsInByb2dyYW0iLCJ2ZXJ0ZXhBdHRyaWJQb2ludGVyIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJvblJlbW92ZSIsImRlbGV0ZUJ1ZmZlciIsImNyZWF0ZVByb2dyYW0iLCJ2c2hhZGVyIiwiZnNoYWRlciIsInVuaWZvcm1zIiwidmVydGV4U2hhZGVyIiwiX2NvbXBpbGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiZnJhZ21lbnRTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImxpbmtlZCIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsImVycm9yIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJkZWxldGVQcm9ncmFtIiwiZGVsZXRlU2hhZGVyIiwiX2luaXRVbmlmb3JtcyIsInVzZVByb2dyYW0iLCJsb2FkVGV4dHVyZSIsImltYWdlIiwidGV4SWR4IiwidGV4dHVyZSIsImNyZWF0ZVRleHR1cmUiLCJhY3RpdmVUZXh0dXJlIiwiYmluZFRleHR1cmUiLCJURVhUVVJFXzJEIiwidGV4UGFyYW1ldGVyaSIsIlRFWFRVUkVfTUlOX0ZJTFRFUiIsIk5FQVJFU1QiLCJ0ZXhJbWFnZTJEIiwiUkdCQSIsIlVOU0lHTkVEX0JZVEUiLCJlbmFibGVTYW1wbGVyIiwic2FtcGxlciIsInVTYW1wbGVyIiwiX2dldFVuaWZvcm0iLCJ1bmlmb3JtMWkiLCJfY2FsY01hdHJpY2VzIiwiZ2V0U2NhbGUiLCJfcHJqVG9Qb2ludCIsIl9nZXRQcmpDZW50ZXIiLCJnZXRNYXhab29tIiwiZm92IiwiZ2V0Rm92IiwiY2FtZXJhVG9DZW50ZXJEaXN0YW5jZSIsIm0iLCJtYXQ0IiwiSVNfTk9ERSIsImdldEJlYXJpbmciLCJjYWxjTWF0cmljZXMiLCJtYXhTY2FsZSIsImdldE1pblpvb20iLCJmYXJaIiwiX2dldEZvdlJhdGlvIiwibTEiLCJtMiIsIl9nZXRMb29rQXRNYXQiLCJ0YXJnZXRaIiwiY2VudGVyMkQiLCJjYW1lcmFDZW50ZXIiLCJjb29yZGluYXRlVG9Qb2ludCIsImdldENlbnRlciIsInBpdGNoIiwiYmVhcmluZyIsInJhdGlvIiwiY3oiLCJkaXN0IiwiY3giLCJjeSIsImhpdERldGVjdCIsInBvaW50IiwicGl4ZWxzIiwiVWludDhBcnJheSIsImNwIiwiX3BvaW50VG9Db250YWluZXJQb2ludCIsIl9yb3VuZCIsInJlYWRQaXhlbHMiLCJnZXRDYW52YXNJbWFnZSIsImNhbnZhc0ltZyIsIl9wcmVzZXJ2ZUJ1ZmZlciIsIm9uWm9vbVN0YXJ0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvblpvb21FbmQiLCJleHRlbmQiLCJuYW1lcyIsImUiLCJ0eXBlIiwic291cmNlIiwic2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwic2hhZGVyU291cmNlIiwiY29tcGlsZVNoYWRlciIsImNvbXBpbGVkIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJnZXRTaGFkZXJJbmZvTG9nIiwibmFtZSIsInVuaWZvcm0iLCJpbmRleE9mIiwic3Vic3RyaW5nIiwidW5pZm9ybU5hbWUiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJDYW52YXNSZW5kZXJlciIsIkxpbmVBdGxhcyIsInJlc291cmNlcyIsImF0bGFzIiwiZ2V0QXRsYXMiLCJzeW1ib2wiLCJrZXkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkQXRsYXMiLCJfZ2V0U2l6ZSIsIl9jcmVhdGVDYW52YXMiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkYXNoQXJyYXkiLCJnZXRJbWFnZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIlBvaW50IiwicHJvdG90eXBlIiwicCIsIl9hZGQiLCJfc3ViIiwiX211bHRCeVBvaW50IiwiX2RpdkJ5UG9pbnQiLCJrIiwiX211bHQiLCJfZGl2IiwiX3JvdGF0ZSIsIl9yb3RhdGVBcm91bmQiLCJfbWF0TXVsdCIsIl91bml0IiwiX3BlcnAiLCJvdGhlciIsImRpc3RTcXIiLCJhdGFuMiIsImFuZ2xlV2l0aFNlcCIsIm1hZyIsImFuZ2xlIiwicm91bmQiLCJjb252ZXJ0IiwiTGluZVBhaW50ZXIiLCJ2ZXJ0ZXhBcnJheSIsIm5vcm1hbEFycmF5IiwiZWxlbWVudEFycmF5Iiwic3R5bGVBcnJheSIsImRpc3RhbmNlIiwiZ2V0QXJyYXlzIiwiYWRkTGluZSIsImxpbmUiLCJzdHlsZSIsInByZVZlcnRleExlbiIsInZlcnRpY2UiLCJfZ2V0VmVydGljZSIsImwiLCJfcHJlcGFyZVRvQWRkIiwiY3VycmVudFZlcnRleCIsIm5leHRWZXJ0ZXgiLCJ2ZXJ0ZXgiLCJ0b0FycmF5IiwiYWRkQ3VycmVudFZlcnRleCIsImNvdW50IiwiX2FkZFRleENvb3JkcyIsInByZVZlcnRleCIsImUxIiwiZTIiLCJlMyIsIl93YWl0Rm9yTGVmdENhcCIsIm5vcm1hbCIsInN1YiIsIm5leHROb3JtYWwiLCJwcmVKb2luTm9ybWFsIiwiX2dldFN0YXJ0Tm9ybWFsIiwicHJlTm9ybWFsIiwiX2FkZExpbmVFbmRWZXJ0ZXhzIiwiZW5kTm9ybWFsIiwiX2dldEVuZE5vcm1hbCIsImpvaW5Ob3JtYWwiLCJsaW5lc29mYXIiLCJleHRydWRlIiwiX2FkZFZlcnRleCIsIm5vcm1hbHMiLCJfcHJlY2lzZSIsIm4iLCJwdXNoSW4iLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiaW5kZXgiLCJfZ2V0Sm9pbk5vcm1hbCIsImN1cnJlbnROb3JtYWwiLCJtdWx0IiwiY29zSGFsZkFuZ2xlIiwibWl0ZXJMZW5ndGgiLCJtZXJnZU9wdGlvbnMiLCJlYXJjdXQiLCJkYXRhIiwiaG9sZUluZGljZXMiLCJkaW0iLCJoYXNIb2xlcyIsIm91dGVyTGVuIiwib3V0ZXJOb2RlIiwibGlua2VkTGlzdCIsInRyaWFuZ2xlcyIsIm1pblgiLCJtaW5ZIiwibWF4WCIsIm1heFkiLCJlbGltaW5hdGVIb2xlcyIsInN0YXJ0IiwiZW5kIiwiY2xvY2t3aXNlIiwibGFzdCIsInNpZ25lZEFyZWEiLCJpbnNlcnROb2RlIiwibmV4dCIsImZpbHRlclBvaW50cyIsImFnYWluIiwic3RlaW5lciIsImFyZWEiLCJwcmV2IiwiZWFyY3V0TGlua2VkIiwiZWFyIiwicGFzcyIsImluZGV4Q3VydmUiLCJzdG9wIiwiaXNFYXJIYXNoZWQiLCJpc0VhciIsImN1cmVMb2NhbEludGVyc2VjdGlvbnMiLCJwb2ludEluVHJpYW5nbGUiLCJtaW5UWCIsIm1pblRZIiwibWF4VFgiLCJtYXhUWSIsIm1pbloiLCJ6T3JkZXIiLCJtYXhaIiwibmV4dFoiLCJwcmV2WiIsImludGVyc2VjdHMiLCJsb2NhbGx5SW5zaWRlIiwic3BsaXRFYXJjdXQiLCJpc1ZhbGlkRGlhZ29uYWwiLCJzcGxpdFBvbHlnb24iLCJxdWV1ZSIsImxpc3QiLCJnZXRMZWZ0bW9zdCIsInNvcnQiLCJjb21wYXJlWCIsImVsaW1pbmF0ZUhvbGUiLCJob2xlIiwiZmluZEhvbGVCcmlkZ2UiLCJoeCIsImh5IiwicXgiLCJJbmZpbml0eSIsIm14IiwibXkiLCJ0YW5NaW4iLCJzb3J0TGlua2VkIiwicSIsInRhaWwiLCJudW1NZXJnZXMiLCJwU2l6ZSIsInFTaXplIiwiaW5TaXplIiwibGVmdG1vc3QiLCJheCIsImF5IiwiYngiLCJieSIsInB4IiwicHkiLCJpbnRlcnNlY3RzUG9seWdvbiIsIm1pZGRsZUluc2lkZSIsInAxIiwicDIiLCJxMSIsInEyIiwiaW5zaWRlIiwiYTIiLCJOb2RlIiwiYW4iLCJicCIsInJlbW92ZU5vZGUiLCJkZXZpYXRpb24iLCJwb2x5Z29uQXJlYSIsInRyaWFuZ2xlc0FyZWEiLCJzdW0iLCJqIiwiZmxhdHRlbiIsInZlcnRpY2VzIiwiaG9sZXMiLCJkaW1lbnNpb25zIiwiaG9sZUluZGV4IiwiZCIsIlBvbHlnb25QYWludGVyIiwiYWRkUG9seWdvbiIsInBvbHlnb24iLCJyaW5nIiwiX2VxdWFsQ29vcmQiLCJjb25zb2xlIiwid2FybiIsImdlbyIsImMxIiwiYzIiLCJtYXhVbmlmb3JtTGVuZ3RoIiwiQnJvd3NlciIsImllIiwiZWRnZSIsIlV0aWwiLCJsaW5lRnJhZ21lbnQiLCJsaW5lVmVydGV4IiwicG9pbnRGcmFnbWVudCIsInBvaW50VmVydGV4IiwicG9seWdvbkZyYWdtZW50IiwicG9seWdvblZlcnRleCIsImV4dHJ1ZGVGcmFnbWVudCIsImV4dHJ1ZGVWZXJ0ZXgiLCJCaWdEYXRhTGF5ZXIiLCJmcm9tSlNPTiIsInByb2ZpbGUiLCJnZXRKU09OVHlwZSIsImNvbnN0cnVjdG9yIiwic2V0U3R5bGUiLCJpZCIsIm9wdHMiLCJ0b0pTT04iLCJqc29uIiwiZ2V0SWQiLCJjb25maWciLCJnZXRTdHlsZSIsIl9zdHlsZSIsIl9jb29rZWRTdHlsZXMiLCJjb21waWxlU3R5bGUiLCJzb3J0S0QiLCJpZHMiLCJjb29yZHMiLCJub2RlU2l6ZSIsImxlZnQiLCJyaWdodCIsImRlcHRoIiwiZmxvb3IiLCJzZWxlY3QiLCJpbmMiLCJleHAiLCJzZCIsIm5ld0xlZnQiLCJuZXdSaWdodCIsIm1pbiIsInQiLCJzd2FwSXRlbSIsInN3YXAiLCJhcnIiLCJ0bXAiLCJyYW5nZSIsInN0YWNrIiwiYXhpcyIsInBvcCIsIm5leHRBeGlzIiwid2l0aGluIiwicXkiLCJyMiIsInNxRGlzdCIsInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsImtkYnVzaCIsInBvaW50cyIsImdldFgiLCJnZXRZIiwiQXJyYXlUeXBlIiwiS0RCdXNoIiwiZGVmYXVsdEdldFgiLCJkZWZhdWx0R2V0WSIsIkJpZ1BvaW50TGF5ZXIiLCJpZGVudGlmeSIsImNvb3JkaW5hdGUiLCJyZW5kZXJlciIsIl9nZXRSZW5kZXJlciIsInJlZ2lzdGVySlNPTlR5cGUiLCJyZWdpc3RlclJlbmRlcmVyIiwiX25lZWRDaGVja1N0eWxlIiwiX25lZWRDaGVja1Nwcml0ZXMiLCJfcmVnaXN0ZXJFdmVudHMiLCJjaGVja1Jlc291cmNlcyIsInJlcyIsImdldEV4dGVybmFsUmVzb3VyY2VzIiwiX3RleHR1cmVMb2FkZWQiLCJfc2V0QmxlbmRFcXVhdGlvbiIsInNoYWRlcnMiLCJ2ZXJ0ZXhTb3VyY2UiLCJmcmFnbWVudFNvdXJjZSIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJkcmF3IiwiX2NoZWNrU3ByaXRlcyIsIl92ZXJ0ZXhDb3VudCIsInZlcnRleFRleENvb3JkcyIsIm1heEljb25TaXplIiwicHJvcGVydGllcyIsInRleCIsIl9nZXRUZXhDb29yZCIsImlkeCIsImJ1ZmZlckRhdGEiLCJTVEFUSUNfRFJBVyIsIl9tYXhJY29uU2l6ZSIsIl9pbmRleERhdGEiLCJfZHJhd01hcmtlcnMiLCJjb21wbGV0ZVJlbmRlciIsImRyYXdPbkludGVyYWN0aW5nIiwiX3JlbW92ZUV2ZW50cyIsIl9zcHJpdGVzIiwiX3VTcHJpdGUiLCJfa2RJbmRleCIsImZpbHRlciIsImxpbWl0IiwiX2luZGV4UG9pbnRzIiwiZXh0ZW50IiwiSW50MzJBcnJheSIsInByb3BzIiwibWFya2VyIiwic3ByaXRlIiwiX2dldFNwcml0ZSIsIndpbmRvdyIsIk1BUFRBTEtTX1dFQkdMX0RFQlVHX0NBTlZBUyIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsInVTcHJpdGUiLCJ1bmlmb3JtTWF0cml4NGZ2IiwidV9tYXRyaXgiLCJ1bmlmb3JtMWYiLCJ1X3NjYWxlIiwidW5pZm9ybTFmdiIsInVfc3ByaXRlIiwiZHJhd0FycmF5cyIsIlBPSU5UUyIsIm9uIiwiX29uU3R5bGVDaGFuZ2VkIiwib2ZmIiwiYmxlbmQiLCJ0b0xvd2VyQ2FzZSIsImJsZW5kRXF1YXRpb24iLCJGVU5DX0FERCIsIkZVTkNfU1VCVFJBQ1QiLCJGVU5DX1JFVkVSU0VfU1VCVFJBQ1QiLCJwYXJlbnQiLCJjaXJjdWxhciIsImFsbFBhcmVudHMiLCJhbGxDaGlsZHJlbiIsInVzZUJ1ZmZlciIsIkJ1ZmZlciIsIl9jbG9uZSIsImNoaWxkIiwicHJvdG8iLCJfX2lzQXJyYXkiLCJfX2lzUmVnRXhwIiwiUmVnRXhwIiwiX19nZXRSZWdFeHBGbGFncyIsImxhc3RJbmRleCIsIl9faXNEYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJpc0J1ZmZlciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiYXR0cnMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjbG9uZVByb3RvdHlwZSIsIl9fb2JqVG9TdHIiLCJvIiwidG9TdHJpbmciLCJjYWxsIiwicmUiLCJmbGFncyIsImdsb2JhbCIsImlnbm9yZUNhc2UiLCJtdWx0aWxpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3NzS2V5d29yZHMiLCJyZXZlcnNlS2V5d29yZHMiLCJoYXNPd25Qcm9wZXJ0eSIsImNoYW5uZWxzIiwibGFiZWxzIiwibW9kZWwiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwicmdiIiwiaHNsIiwiZyIsImRlbHRhIiwiaHN2IiwiaHdiIiwiY215ayIsImNvbXBhcmF0aXZlRGlzdGFuY2UiLCJrZXl3b3JkIiwicmV2ZXJzZWQiLCJjdXJyZW50Q2xvc2VzdERpc3RhbmNlIiwiY3VycmVudENsb3Nlc3RLZXl3b3JkIiwieHl6IiwibGFiIiwidDEiLCJ0MiIsInQzIiwidmFsIiwic21pbiIsImxtaW4iLCJzdiIsImhpIiwidm1pbiIsInNsIiwid2giLCJibCIsImxjaCIsImhyIiwiYW5zaTE2IiwiYXJncyIsImFuc2kiLCJhbnNpMjU2IiwiY29sb3IiLCJyZW0iLCJoZXgiLCJpbnRlZ2VyIiwic3RyaW5nIiwidG9VcHBlckNhc2UiLCJtYXRjaCIsInBhcnNlSW50IiwiaGNnIiwiY2hyb21hIiwiZ3JheXNjYWxlIiwiaHVlIiwicHVyZSIsIm1nIiwiYXBwbGUiLCJncmF5IiwiY29udmVyc2lvbnMiLCJtb2RlbHMiLCJrZXlzIiwiYnVpbGRHcmFwaCIsImdyYXBoIiwiZGVyaXZlQkZTIiwiZnJvbU1vZGVsIiwiY3VycmVudCIsImFkamFjZW50cyIsImFkamFjZW50Iiwibm9kZSIsInVuc2hpZnQiLCJsaW5rIiwiZnJvbSIsInRvIiwid3JhcENvbnZlcnNpb24iLCJ0b01vZGVsIiwicGF0aCIsImZuIiwiY3VyIiwiY29udmVyc2lvbiIsInJvdXRlIiwid3JhcFJhdyIsIndyYXBwZWRGbiIsInVuZGVmaW5lZCIsInNsaWNlIiwid3JhcFJvdW5kZWQiLCJyb3V0ZXMiLCJyb3V0ZU1vZGVscyIsInJhdyIsImNvbG9yTmFtZXMiLCJnZXRSZ2JhIiwiZ2V0SHNsYSIsImdldFJnYiIsImdldEhzbCIsImdldEh3YiIsImdldEFscGhhIiwiaGV4U3RyaW5nIiwicmdiU3RyaW5nIiwicmdiYVN0cmluZyIsInBlcmNlbnRTdHJpbmciLCJwZXJjZW50YVN0cmluZyIsImhzbFN0cmluZyIsImhzbGFTdHJpbmciLCJod2JTdHJpbmciLCJhYmJyIiwicmdiYSIsInBlciIsInBhcnNlRmxvYXQiLCJhbHBoYSIsImlzTmFOIiwiaHNsYSIsInZhbHMiLCJoZXhEb3VibGUiLCJyZXZlcnNlTmFtZXMiLCJudW0iLCJzdHIiLCJDb2xvciIsIm9iaiIsInZhbHVlcyIsInNldFZhbHVlcyIsInJlZCIsImxpZ2h0bmVzcyIsIndoaXRlbmVzcyIsImN5YW4iLCJzZXRTcGFjZSIsImNvbmNhdCIsImdsUmdiYSIsInNldENoYW5uZWwiLCJsdW0iLCJjaGFuIiwiY29sb3IyIiwibHVtMSIsImx1bWlub3NpdHkiLCJsdW0yIiwiY29udHJhc3RSYXRpbyIsImNvbnRyYXN0IiwieWlxIiwiZGFyayIsImRlZ3JlZXMiLCJtaXhpbkNvbG9yIiwid2VpZ2h0IiwiY29sb3IxIiwidzEiLCJ3MiIsImdyZWVuIiwiYmx1ZSIsImNvbCIsImdldFZhbHVlcyIsInNwYWNlIiwiY2hhckF0Iiwic3BhY2VzIiwibWF4ZXMiLCJjaGFucyIsImNhcHBlZCIsInNuYW1lIiwiUGF0aFJlbmRlcmVyIiwiY29udmVydFJlc291cmNlVXJsIiwiZ2V0RXh0ZW5zaW9uIiwiX2ZpbGxTcHJpdGVzIiwiZ2V0RGF0YVN5bWJvbCIsImdldFRleHR1cmUiLCJnZXRMaW5lVGV4dHVyZSIsIl9hdGxhcyIsImdldEZpbGxUZXh0dXJlIiwiZmlsbFBhdHRlcm4iLCJmaWxsU3ByaXRlcyIsImRlYnVnQ2FudmFzIiwiZmlsbFJlY3QiLCJmaWxsU3R5bGUiLCJfZmlsbFRleHR1cmVMb2FkZWQiLCJjb3VudGVyIiwidVN0eWxlIiwiX3VTdHlsZSIsInJnYmFBcnJheU5vcm1hbGl6ZWQiLCJ1RmlsbFN0eWxlIiwiX3VGaWxsU3R5bGUiLCJCaWdMaW5lTGF5ZXIiLCJCaWdMaW5lUmVuZGVyZXIiLCJfbGluZVByb2dyYW0iLCJfZHJhd0xpbmVzIiwiX2xpbmVBcnJheXMiLCJfcHJlcGFyZUxpbmVEYXRhIiwiX2J1ZmZlckxpbmVEYXRhIiwidV9zdHlsZXMiLCJ0ZXhTaXplIiwidW5pZm9ybTJmdiIsInVfdGV4X3NpemUiLCJkcmF3RWxlbWVudHMiLCJUUklBTkdMRVMiLCJfZWxlbWVudENvdW50IiwiVU5TSUdORURfSU5UIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVIiLCJwYWludGVyIiwibGluZUFycmF5cyIsIl92ZXJ0ZXhCdWZmZXIiLCJ2ZXJ0ZXhCdWZmZXIiLCJfbm9ybWFsQnVmZmVyIiwibm9ybWFsQnVmZmVyIiwiX3RleEJ1ZmZlciIsInRleEJ1ZmZlciIsIl9lbGVtZW50QnVmZmVyIiwiZWxlbWVudEJ1ZmZlciIsIlVpbnQzMkFycmF5IiwiQmlnUG9seWdvbkxheWVyIiwiX3BvbHlnb25Qcm9ncmFtIiwiX2RyYXdQb2x5Z29ucyIsIl9wcmVwYXJlUG9seWdvbkRhdGEiLCJfYnVmZmVyUG9seWdvbkRhdGEiLCJfcG9seWdvbkFycmF5cyIsIl9wb2x5Z29uRWxlbWVudENvdW50IiwicG9seWdvbkFycmF5cyIsIl9wb2x5Z29uVmVydGV4QnVmZmVyIiwiX3BvbHlnb25UZXhCdWZmZXIiLCJfcG9seWdvbkVsZW1CdWZmZXIiLCJFeHRydWRlUGFpbnRlciIsIl9maWxsQXJyYXlzIiwiZGltZW5zaW9uIiwiYm90dG9tIiwidG9wIiwicHJlQ291bnQiLCJ2ZXJ0ZXhDb3VudCIsImlpIiwiZWkiLCJFeHRydWRlUG9seWdvbkxheWVyIiwiRXh0cnVkZVJlbmRlcmVyIiwiU1RFTkNJTF9URVNUIiwiX2RyYXdFeHRydWRlcyIsIl9leHRydWRlQXJyYXlzIiwiX3ByZXBhcmVEYXRhIiwibGlnaHRwb3MiLCJ1bmlmb3JtM2Z2IiwibGlnaHRDb2xvciIsInVuaWZvcm0zZiIsImFtYmllbnQiLCJsaWdodEludGVuc2l0eSIsIl9idWZmZXJFeHRydWRlRGF0YSIsInBIZWlnaHQiLCJkaXN0YW5jZVRvUGl4ZWwiLCJleHRydWRlQXJyYXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVVPLFNBQVNBLFFBQVQsR0FBa0I7UUFDakJDLE1BQU0sSUFBSUMsWUFBSixDQUFpQixDQUFqQixDQUFWO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1dBQ09ELEdBQVA7Q0FVSixBQUFPLEFBbUJQLEFBQU8sQUFxQlAsQUFBTyxBQTJCUCxBQUFPLEFBNkJQLEFBQU8sQUFtQlAsQUFBTyxBQW9CUCxBQUFPLEFBZ0NQLEFBQU8sQUFvQ1AsQUFBTyxBQXVCUCxBQUFPLEFBZ0JQLEFBQU8sQUEyQlAsQUFVQSxBQUFPLEFBNEJQLEFBQU8sQUE4QlAsQUFBTyxBQTRCUCxBQUFPLEFBd0JQLEFBQU8sQUE0QlAsQUFBTyxBQXNCUCxBQUFPLEFBdUJQLEFBQU8sQUF1Q1AsQUFBTyxBQWdEUCxBQUFPLEFBWVAsQUFBTyxBQVlQLEFBQU8sQUFxQlAsQUFBTyxBQWlCUCxBQVVBLEFBQU8sQUFzQlAsQUFBTyxBQW9CUCxBQUFPOztBQzVxQkEsU0FBU0QsUUFBVCxHQUFrQjtRQUNqQkMsTUFBTSxJQUFJQyxZQUFKLENBQWlCLEVBQWpCLENBQVY7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLEVBQUosSUFBVSxDQUFWO1FBQ0ksRUFBSixJQUFVLENBQVY7UUFDSSxFQUFKLElBQVUsQ0FBVjtRQUNJLEVBQUosSUFBVSxDQUFWO1FBQ0ksRUFBSixJQUFVLENBQVY7UUFDSSxFQUFKLElBQVUsQ0FBVjtXQUNPRCxHQUFQOzs7QUFTSixBQUFPOztBQTRCUCxBQUFPLFNBQVNFLE1BQVQsQ0FBY0YsR0FBZCxFQUFtQkcsQ0FBbkIsRUFBc0I7UUFDckIsQ0FBSixJQUFTQSxFQUFFLENBQUYsQ0FBVDtRQUNJLENBQUosSUFBU0EsRUFBRSxDQUFGLENBQVQ7UUFDSSxDQUFKLElBQVNBLEVBQUUsQ0FBRixDQUFUO1FBQ0ksQ0FBSixJQUFTQSxFQUFFLENBQUYsQ0FBVDtRQUNJLENBQUosSUFBU0EsRUFBRSxDQUFGLENBQVQ7UUFDSSxDQUFKLElBQVNBLEVBQUUsQ0FBRixDQUFUO1FBQ0ksQ0FBSixJQUFTQSxFQUFFLENBQUYsQ0FBVDtRQUNJLENBQUosSUFBU0EsRUFBRSxDQUFGLENBQVQ7UUFDSSxDQUFKLElBQVNBLEVBQUUsQ0FBRixDQUFUO1FBQ0ksQ0FBSixJQUFTQSxFQUFFLENBQUYsQ0FBVDtRQUNJLEVBQUosSUFBVUEsRUFBRSxFQUFGLENBQVY7UUFDSSxFQUFKLElBQVVBLEVBQUUsRUFBRixDQUFWO1FBQ0ksRUFBSixJQUFVQSxFQUFFLEVBQUYsQ0FBVjtRQUNJLEVBQUosSUFBVUEsRUFBRSxFQUFGLENBQVY7UUFDSSxFQUFKLElBQVVBLEVBQUUsRUFBRixDQUFWO1FBQ0ksRUFBSixJQUFVQSxFQUFFLEVBQUYsQ0FBVjtXQUNPSCxHQUFQOzs7QUF3QkosQUFBTzs7QUEyQ1AsQUFBTzs7QUEyQlAsQUFBTyxTQUFTSSxVQUFULENBQWtCSixHQUFsQixFQUF1QjtRQUN0QixDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLEVBQUosSUFBVSxDQUFWO1FBQ0ksRUFBSixJQUFVLENBQVY7UUFDSSxFQUFKLElBQVUsQ0FBVjtRQUNJLEVBQUosSUFBVSxDQUFWO1FBQ0ksRUFBSixJQUFVLENBQVY7UUFDSSxFQUFKLElBQVUsQ0FBVjtXQUNPQSxHQUFQOzs7QUFVSixBQUFPOztBQWdEUCxBQUFPOztBQXNEUCxBQUFPOztBQStCUCxBQUFPOztBQStCUCxBQUFPLFNBQVNLLFVBQVQsQ0FBa0JMLEdBQWxCLEVBQXVCRyxDQUF2QixFQUEwQkcsQ0FBMUIsRUFBNkI7UUFDNUJDLE1BQU1KLEVBQUUsQ0FBRixDQUFWO1FBQWdCSyxNQUFNTCxFQUFFLENBQUYsQ0FBdEI7UUFBNEJNLE1BQU1OLEVBQUUsQ0FBRixDQUFsQztRQUF3Q08sTUFBTVAsRUFBRSxDQUFGLENBQTlDO1FBQ0lRLE1BQU1SLEVBQUUsQ0FBRixDQURWO1FBQ2dCUyxNQUFNVCxFQUFFLENBQUYsQ0FEdEI7UUFDNEJVLE1BQU1WLEVBQUUsQ0FBRixDQURsQztRQUN3Q1csTUFBTVgsRUFBRSxDQUFGLENBRDlDO1FBRUlZLE1BQU1aLEVBQUUsQ0FBRixDQUZWO1FBRWdCYSxNQUFNYixFQUFFLENBQUYsQ0FGdEI7UUFFNEJjLE1BQU1kLEVBQUUsRUFBRixDQUZsQztRQUV5Q2UsTUFBTWYsRUFBRSxFQUFGLENBRi9DO1FBR0lnQixNQUFNaEIsRUFBRSxFQUFGLENBSFY7UUFHaUJpQixNQUFNakIsRUFBRSxFQUFGLENBSHZCO1FBRzhCa0IsTUFBTWxCLEVBQUUsRUFBRixDQUhwQztRQUcyQ21CLE1BQU1uQixFQUFFLEVBQUYsQ0FIakQ7O1FBTUlvQixLQUFNakIsRUFBRSxDQUFGLENBQVY7UUFBZ0JrQixLQUFLbEIsRUFBRSxDQUFGLENBQXJCO1FBQTJCbUIsS0FBS25CLEVBQUUsQ0FBRixDQUFoQztRQUFzQ29CLEtBQUtwQixFQUFFLENBQUYsQ0FBM0M7UUFDSSxDQUFKLElBQVNpQixLQUFLaEIsR0FBTCxHQUFXaUIsS0FBS2IsR0FBaEIsR0FBc0JjLEtBQUtWLEdBQTNCLEdBQWlDVyxLQUFLUCxHQUEvQztRQUNJLENBQUosSUFBU0ksS0FBS2YsR0FBTCxHQUFXZ0IsS0FBS1osR0FBaEIsR0FBc0JhLEtBQUtULEdBQTNCLEdBQWlDVSxLQUFLTixHQUEvQztRQUNJLENBQUosSUFBU0csS0FBS2QsR0FBTCxHQUFXZSxLQUFLWCxHQUFoQixHQUFzQlksS0FBS1IsR0FBM0IsR0FBaUNTLEtBQUtMLEdBQS9DO1FBQ0ksQ0FBSixJQUFTRSxLQUFLYixHQUFMLEdBQVdjLEtBQUtWLEdBQWhCLEdBQXNCVyxLQUFLUCxHQUEzQixHQUFpQ1EsS0FBS0osR0FBL0M7O1NBRUtoQixFQUFFLENBQUYsQ0FBTCxDQUFXa0IsS0FBS2xCLEVBQUUsQ0FBRixDQUFMLENBQVdtQixLQUFLbkIsRUFBRSxDQUFGLENBQUwsQ0FBV29CLEtBQUtwQixFQUFFLENBQUYsQ0FBTDtRQUM3QixDQUFKLElBQVNpQixLQUFLaEIsR0FBTCxHQUFXaUIsS0FBS2IsR0FBaEIsR0FBc0JjLEtBQUtWLEdBQTNCLEdBQWlDVyxLQUFLUCxHQUEvQztRQUNJLENBQUosSUFBU0ksS0FBS2YsR0FBTCxHQUFXZ0IsS0FBS1osR0FBaEIsR0FBc0JhLEtBQUtULEdBQTNCLEdBQWlDVSxLQUFLTixHQUEvQztRQUNJLENBQUosSUFBU0csS0FBS2QsR0FBTCxHQUFXZSxLQUFLWCxHQUFoQixHQUFzQlksS0FBS1IsR0FBM0IsR0FBaUNTLEtBQUtMLEdBQS9DO1FBQ0ksQ0FBSixJQUFTRSxLQUFLYixHQUFMLEdBQVdjLEtBQUtWLEdBQWhCLEdBQXNCVyxLQUFLUCxHQUEzQixHQUFpQ1EsS0FBS0osR0FBL0M7O1NBRUtoQixFQUFFLENBQUYsQ0FBTCxDQUFXa0IsS0FBS2xCLEVBQUUsQ0FBRixDQUFMLENBQVdtQixLQUFLbkIsRUFBRSxFQUFGLENBQUwsQ0FBWW9CLEtBQUtwQixFQUFFLEVBQUYsQ0FBTDtRQUM5QixDQUFKLElBQVNpQixLQUFLaEIsR0FBTCxHQUFXaUIsS0FBS2IsR0FBaEIsR0FBc0JjLEtBQUtWLEdBQTNCLEdBQWlDVyxLQUFLUCxHQUEvQztRQUNJLENBQUosSUFBU0ksS0FBS2YsR0FBTCxHQUFXZ0IsS0FBS1osR0FBaEIsR0FBc0JhLEtBQUtULEdBQTNCLEdBQWlDVSxLQUFLTixHQUEvQztRQUNJLEVBQUosSUFBVUcsS0FBS2QsR0FBTCxHQUFXZSxLQUFLWCxHQUFoQixHQUFzQlksS0FBS1IsR0FBM0IsR0FBaUNTLEtBQUtMLEdBQWhEO1FBQ0ksRUFBSixJQUFVRSxLQUFLYixHQUFMLEdBQVdjLEtBQUtWLEdBQWhCLEdBQXNCVyxLQUFLUCxHQUEzQixHQUFpQ1EsS0FBS0osR0FBaEQ7O1NBRUtoQixFQUFFLEVBQUYsQ0FBTCxDQUFZa0IsS0FBS2xCLEVBQUUsRUFBRixDQUFMLENBQVltQixLQUFLbkIsRUFBRSxFQUFGLENBQUwsQ0FBWW9CLEtBQUtwQixFQUFFLEVBQUYsQ0FBTDtRQUNoQyxFQUFKLElBQVVpQixLQUFLaEIsR0FBTCxHQUFXaUIsS0FBS2IsR0FBaEIsR0FBc0JjLEtBQUtWLEdBQTNCLEdBQWlDVyxLQUFLUCxHQUFoRDtRQUNJLEVBQUosSUFBVUksS0FBS2YsR0FBTCxHQUFXZ0IsS0FBS1osR0FBaEIsR0FBc0JhLEtBQUtULEdBQTNCLEdBQWlDVSxLQUFLTixHQUFoRDtRQUNJLEVBQUosSUFBVUcsS0FBS2QsR0FBTCxHQUFXZSxLQUFLWCxHQUFoQixHQUFzQlksS0FBS1IsR0FBM0IsR0FBaUNTLEtBQUtMLEdBQWhEO1FBQ0ksRUFBSixJQUFVRSxLQUFLYixHQUFMLEdBQVdjLEtBQUtWLEdBQWhCLEdBQXNCVyxLQUFLUCxHQUEzQixHQUFpQ1EsS0FBS0osR0FBaEQ7V0FDT3RCLEdBQVA7OztBQU9KLEFBVUEsQUFBTyxTQUFTMkIsV0FBVCxDQUFtQjNCLEdBQW5CLEVBQXdCRyxDQUF4QixFQUEyQnlCLENBQTNCLEVBQThCO1FBQzdCQyxJQUFJRCxFQUFFLENBQUYsQ0FBUjtRQUFjRSxJQUFJRixFQUFFLENBQUYsQ0FBbEI7UUFBd0JHLElBQUlILEVBQUUsQ0FBRixDQUE1QjtRQUNJckIsR0FESjtRQUNTQyxHQURUO1FBQ2NDLEdBRGQ7UUFDbUJDLEdBRG5CO1FBRUlDLEdBRko7UUFFU0MsR0FGVDtRQUVjQyxHQUZkO1FBRW1CQyxHQUZuQjtRQUdJQyxHQUhKO1FBR1NDLEdBSFQ7UUFHY0MsR0FIZDtRQUdtQkMsR0FIbkI7O1FBS0lmLE1BQU1ILEdBQVYsRUFBZTtZQUNQLEVBQUosSUFBVUcsRUFBRSxDQUFGLElBQU8wQixDQUFQLEdBQVcxQixFQUFFLENBQUYsSUFBTzJCLENBQWxCLEdBQXNCM0IsRUFBRSxDQUFGLElBQU80QixDQUE3QixHQUFpQzVCLEVBQUUsRUFBRixDQUEzQztZQUNJLEVBQUosSUFBVUEsRUFBRSxDQUFGLElBQU8wQixDQUFQLEdBQVcxQixFQUFFLENBQUYsSUFBTzJCLENBQWxCLEdBQXNCM0IsRUFBRSxDQUFGLElBQU80QixDQUE3QixHQUFpQzVCLEVBQUUsRUFBRixDQUEzQztZQUNJLEVBQUosSUFBVUEsRUFBRSxDQUFGLElBQU8wQixDQUFQLEdBQVcxQixFQUFFLENBQUYsSUFBTzJCLENBQWxCLEdBQXNCM0IsRUFBRSxFQUFGLElBQVE0QixDQUE5QixHQUFrQzVCLEVBQUUsRUFBRixDQUE1QztZQUNJLEVBQUosSUFBVUEsRUFBRSxDQUFGLElBQU8wQixDQUFQLEdBQVcxQixFQUFFLENBQUYsSUFBTzJCLENBQWxCLEdBQXNCM0IsRUFBRSxFQUFGLElBQVE0QixDQUE5QixHQUFrQzVCLEVBQUUsRUFBRixDQUE1QztLQUpKLE1BS087Y0FDR0EsRUFBRSxDQUFGLENBQU4sQ0FBWUssTUFBTUwsRUFBRSxDQUFGLENBQU4sQ0FBWU0sTUFBTU4sRUFBRSxDQUFGLENBQU4sQ0FBWU8sTUFBTVAsRUFBRSxDQUFGLENBQU47Y0FDOUJBLEVBQUUsQ0FBRixDQUFOLENBQVlTLE1BQU1ULEVBQUUsQ0FBRixDQUFOLENBQVlVLE1BQU1WLEVBQUUsQ0FBRixDQUFOLENBQVlXLE1BQU1YLEVBQUUsQ0FBRixDQUFOO2NBQzlCQSxFQUFFLENBQUYsQ0FBTixDQUFZYSxNQUFNYixFQUFFLENBQUYsQ0FBTixDQUFZYyxNQUFNZCxFQUFFLEVBQUYsQ0FBTixDQUFhZSxNQUFNZixFQUFFLEVBQUYsQ0FBTjs7WUFFakMsQ0FBSixJQUFTSSxHQUFULENBQWNQLElBQUksQ0FBSixJQUFTUSxHQUFULENBQWNSLElBQUksQ0FBSixJQUFTUyxHQUFULENBQWNULElBQUksQ0FBSixJQUFTVSxHQUFUO1lBQ3RDLENBQUosSUFBU0MsR0FBVCxDQUFjWCxJQUFJLENBQUosSUFBU1ksR0FBVCxDQUFjWixJQUFJLENBQUosSUFBU2EsR0FBVCxDQUFjYixJQUFJLENBQUosSUFBU2MsR0FBVDtZQUN0QyxDQUFKLElBQVNDLEdBQVQsQ0FBY2YsSUFBSSxDQUFKLElBQVNnQixHQUFULENBQWNoQixJQUFJLEVBQUosSUFBVWlCLEdBQVYsQ0FBZWpCLElBQUksRUFBSixJQUFVa0IsR0FBVjs7WUFFdkMsRUFBSixJQUFVWCxNQUFNc0IsQ0FBTixHQUFVbEIsTUFBTW1CLENBQWhCLEdBQW9CZixNQUFNZ0IsQ0FBMUIsR0FBOEI1QixFQUFFLEVBQUYsQ0FBeEM7WUFDSSxFQUFKLElBQVVLLE1BQU1xQixDQUFOLEdBQVVqQixNQUFNa0IsQ0FBaEIsR0FBb0JkLE1BQU1lLENBQTFCLEdBQThCNUIsRUFBRSxFQUFGLENBQXhDO1lBQ0ksRUFBSixJQUFVTSxNQUFNb0IsQ0FBTixHQUFVaEIsTUFBTWlCLENBQWhCLEdBQW9CYixNQUFNYyxDQUExQixHQUE4QjVCLEVBQUUsRUFBRixDQUF4QztZQUNJLEVBQUosSUFBVU8sTUFBTW1CLENBQU4sR0FBVWYsTUFBTWdCLENBQWhCLEdBQW9CWixNQUFNYSxDQUExQixHQUE4QjVCLEVBQUUsRUFBRixDQUF4Qzs7O1dBR0dILEdBQVA7OztBQVdKLEFBQU8sU0FBU2dDLE9BQVQsQ0FBZWhDLEdBQWYsRUFBb0JHLENBQXBCLEVBQXVCeUIsQ0FBdkIsRUFBMEI7UUFDekJDLElBQUlELEVBQUUsQ0FBRixDQUFSO1FBQWNFLElBQUlGLEVBQUUsQ0FBRixDQUFsQjtRQUF3QkcsSUFBSUgsRUFBRSxDQUFGLENBQTVCOztRQUVJLENBQUosSUFBU3pCLEVBQUUsQ0FBRixJQUFPMEIsQ0FBaEI7UUFDSSxDQUFKLElBQVMxQixFQUFFLENBQUYsSUFBTzBCLENBQWhCO1FBQ0ksQ0FBSixJQUFTMUIsRUFBRSxDQUFGLElBQU8wQixDQUFoQjtRQUNJLENBQUosSUFBUzFCLEVBQUUsQ0FBRixJQUFPMEIsQ0FBaEI7UUFDSSxDQUFKLElBQVMxQixFQUFFLENBQUYsSUFBTzJCLENBQWhCO1FBQ0ksQ0FBSixJQUFTM0IsRUFBRSxDQUFGLElBQU8yQixDQUFoQjtRQUNJLENBQUosSUFBUzNCLEVBQUUsQ0FBRixJQUFPMkIsQ0FBaEI7UUFDSSxDQUFKLElBQVMzQixFQUFFLENBQUYsSUFBTzJCLENBQWhCO1FBQ0ksQ0FBSixJQUFTM0IsRUFBRSxDQUFGLElBQU80QixDQUFoQjtRQUNJLENBQUosSUFBUzVCLEVBQUUsQ0FBRixJQUFPNEIsQ0FBaEI7UUFDSSxFQUFKLElBQVU1QixFQUFFLEVBQUYsSUFBUTRCLENBQWxCO1FBQ0ksRUFBSixJQUFVNUIsRUFBRSxFQUFGLElBQVE0QixDQUFsQjtRQUNJLEVBQUosSUFBVTVCLEVBQUUsRUFBRixDQUFWO1FBQ0ksRUFBSixJQUFVQSxFQUFFLEVBQUYsQ0FBVjtRQUNJLEVBQUosSUFBVUEsRUFBRSxFQUFGLENBQVY7UUFDSSxFQUFKLElBQVVBLEVBQUUsRUFBRixDQUFWO1dBQ09ILEdBQVA7OztBQVlKLEFBQU87O0FBOERQLEFBQU8sU0FBU2lDLE9BQVQsQ0FBaUJqQyxHQUFqQixFQUFzQkcsQ0FBdEIsRUFBeUIrQixHQUF6QixFQUE4QjtRQUM3QkMsSUFBSUMsS0FBS0MsR0FBTCxDQUFTSCxHQUFULENBQVI7UUFDSUksSUFBSUYsS0FBS0csR0FBTCxDQUFTTCxHQUFULENBRFI7UUFFSXZCLE1BQU1SLEVBQUUsQ0FBRixDQUZWO1FBR0lTLE1BQU1ULEVBQUUsQ0FBRixDQUhWO1FBSUlVLE1BQU1WLEVBQUUsQ0FBRixDQUpWO1FBS0lXLE1BQU1YLEVBQUUsQ0FBRixDQUxWO1FBTUlZLE1BQU1aLEVBQUUsQ0FBRixDQU5WO1FBT0lhLE1BQU1iLEVBQUUsQ0FBRixDQVBWO1FBUUljLE1BQU1kLEVBQUUsRUFBRixDQVJWO1FBU0llLE1BQU1mLEVBQUUsRUFBRixDQVRWOztRQVdJQSxNQUFNSCxHQUFWLEVBQWU7WUFDUCxDQUFKLElBQVVHLEVBQUUsQ0FBRixDQUFWO1lBQ0ksQ0FBSixJQUFVQSxFQUFFLENBQUYsQ0FBVjtZQUNJLENBQUosSUFBVUEsRUFBRSxDQUFGLENBQVY7WUFDSSxDQUFKLElBQVVBLEVBQUUsQ0FBRixDQUFWO1lBQ0ksRUFBSixJQUFVQSxFQUFFLEVBQUYsQ0FBVjtZQUNJLEVBQUosSUFBVUEsRUFBRSxFQUFGLENBQVY7WUFDSSxFQUFKLElBQVVBLEVBQUUsRUFBRixDQUFWO1lBQ0ksRUFBSixJQUFVQSxFQUFFLEVBQUYsQ0FBVjs7O1FBSUEsQ0FBSixJQUFTUSxNQUFNMkIsQ0FBTixHQUFVdkIsTUFBTW9CLENBQXpCO1FBQ0ksQ0FBSixJQUFTdkIsTUFBTTBCLENBQU4sR0FBVXRCLE1BQU1tQixDQUF6QjtRQUNJLENBQUosSUFBU3RCLE1BQU15QixDQUFOLEdBQVVyQixNQUFNa0IsQ0FBekI7UUFDSSxDQUFKLElBQVNyQixNQUFNd0IsQ0FBTixHQUFVcEIsTUFBTWlCLENBQXpCO1FBQ0ksQ0FBSixJQUFTcEIsTUFBTXVCLENBQU4sR0FBVTNCLE1BQU13QixDQUF6QjtRQUNJLENBQUosSUFBU25CLE1BQU1zQixDQUFOLEdBQVUxQixNQUFNdUIsQ0FBekI7UUFDSSxFQUFKLElBQVVsQixNQUFNcUIsQ0FBTixHQUFVekIsTUFBTXNCLENBQTFCO1FBQ0ksRUFBSixJQUFVakIsTUFBTW9CLENBQU4sR0FBVXhCLE1BQU1xQixDQUExQjtXQUNPbkMsR0FBUDs7O0FBV0osQUFBTzs7QUEyQ1AsQUFBTyxTQUFTd0MsT0FBVCxDQUFpQnhDLEdBQWpCLEVBQXNCRyxDQUF0QixFQUF5QitCLEdBQXpCLEVBQThCO1FBQzdCQyxJQUFJQyxLQUFLQyxHQUFMLENBQVNILEdBQVQsQ0FBUjtRQUNJSSxJQUFJRixLQUFLRyxHQUFMLENBQVNMLEdBQVQsQ0FEUjtRQUVJM0IsTUFBTUosRUFBRSxDQUFGLENBRlY7UUFHSUssTUFBTUwsRUFBRSxDQUFGLENBSFY7UUFJSU0sTUFBTU4sRUFBRSxDQUFGLENBSlY7UUFLSU8sTUFBTVAsRUFBRSxDQUFGLENBTFY7UUFNSVEsTUFBTVIsRUFBRSxDQUFGLENBTlY7UUFPSVMsTUFBTVQsRUFBRSxDQUFGLENBUFY7UUFRSVUsTUFBTVYsRUFBRSxDQUFGLENBUlY7UUFTSVcsTUFBTVgsRUFBRSxDQUFGLENBVFY7O1FBV0lBLE1BQU1ILEdBQVYsRUFBZTtZQUNQLENBQUosSUFBVUcsRUFBRSxDQUFGLENBQVY7WUFDSSxDQUFKLElBQVVBLEVBQUUsQ0FBRixDQUFWO1lBQ0ksRUFBSixJQUFVQSxFQUFFLEVBQUYsQ0FBVjtZQUNJLEVBQUosSUFBVUEsRUFBRSxFQUFGLENBQVY7WUFDSSxFQUFKLElBQVVBLEVBQUUsRUFBRixDQUFWO1lBQ0ksRUFBSixJQUFVQSxFQUFFLEVBQUYsQ0FBVjtZQUNJLEVBQUosSUFBVUEsRUFBRSxFQUFGLENBQVY7WUFDSSxFQUFKLElBQVVBLEVBQUUsRUFBRixDQUFWOzs7UUFJQSxDQUFKLElBQVNJLE1BQU0rQixDQUFOLEdBQVUzQixNQUFNd0IsQ0FBekI7UUFDSSxDQUFKLElBQVMzQixNQUFNOEIsQ0FBTixHQUFVMUIsTUFBTXVCLENBQXpCO1FBQ0ksQ0FBSixJQUFTMUIsTUFBTTZCLENBQU4sR0FBVXpCLE1BQU1zQixDQUF6QjtRQUNJLENBQUosSUFBU3pCLE1BQU00QixDQUFOLEdBQVV4QixNQUFNcUIsQ0FBekI7UUFDSSxDQUFKLElBQVN4QixNQUFNMkIsQ0FBTixHQUFVL0IsTUFBTTRCLENBQXpCO1FBQ0ksQ0FBSixJQUFTdkIsTUFBTTBCLENBQU4sR0FBVTlCLE1BQU0yQixDQUF6QjtRQUNJLENBQUosSUFBU3RCLE1BQU15QixDQUFOLEdBQVU3QixNQUFNMEIsQ0FBekI7UUFDSSxDQUFKLElBQVNyQixNQUFNd0IsQ0FBTixHQUFVNUIsTUFBTXlCLENBQXpCO1dBQ09uQyxHQUFQOzs7QUFjSixBQUFPOztBQStCUCxBQUFPOztBQWdDUCxBQUFPOztBQStDUCxBQUFPOztBQW1DUCxBQUFPOztBQW1DUCxBQUFPOztBQXVDUCxBQUFPOztBQThDUCxBQUFPOztBQWtCUCxBQUFPOztBQTJCUCxBQUFPOztBQW1EUCxBQUFPOztBQTREUCxBQUFPOztBQXFEUCxBQUFPOztBQW1EUCxBQUFPOztBQWlDUCxBQUFPLFNBQVN5QyxXQUFULENBQXFCekMsR0FBckIsRUFBMEIwQyxJQUExQixFQUFnQ0MsTUFBaEMsRUFBd0NDLElBQXhDLEVBQThDQyxHQUE5QyxFQUFtRDtRQUNsREMsSUFBSSxNQUFNVixLQUFLVyxHQUFMLENBQVNMLE9BQU8sQ0FBaEIsQ0FBZDtRQUNJTSxLQUFLLEtBQUtKLE9BQU9DLEdBQVosQ0FEVDtRQUVJLENBQUosSUFBU0MsSUFBSUgsTUFBYjtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTRyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxFQUFKLElBQVUsQ0FBQ0QsTUFBTUQsSUFBUCxJQUFlSSxFQUF6QjtRQUNJLEVBQUosSUFBVSxDQUFDLENBQVg7UUFDSSxFQUFKLElBQVUsQ0FBVjtRQUNJLEVBQUosSUFBVSxDQUFWO1FBQ0ksRUFBSixJQUFXLElBQUlILEdBQUosR0FBVUQsSUFBWCxHQUFtQkksRUFBN0I7UUFDSSxFQUFKLElBQVUsQ0FBVjtXQUNPaEQsR0FBUDs7O0FBY0osQUFBTzs7QUF1Q1AsQUFBTzs7QUFnQ1AsQUFBTyxTQUFTaUQsTUFBVCxDQUFnQmpELEdBQWhCLEVBQXFCa0QsR0FBckIsRUFBMEJDLE1BQTFCLEVBQWtDQyxFQUFsQyxFQUFzQztRQUNyQ0MsRUFBSjtRQUFRQyxFQUFSO1FBQVlDLEVBQVo7UUFBZ0JDLEVBQWhCO1FBQW9CQyxFQUFwQjtRQUF3QkMsRUFBeEI7UUFBNEJDLEVBQTVCO1FBQWdDQyxFQUFoQztRQUFvQ0MsRUFBcEM7UUFBd0NDLEdBQXhDO1FBQ0lDLE9BQU9iLElBQUksQ0FBSixDQURYO1FBRUljLE9BQU9kLElBQUksQ0FBSixDQUZYO1FBR0llLE9BQU9mLElBQUksQ0FBSixDQUhYO1FBSUlnQixNQUFNZCxHQUFHLENBQUgsQ0FKVjtRQUtJZSxNQUFNZixHQUFHLENBQUgsQ0FMVjtRQU1JZ0IsTUFBTWhCLEdBQUcsQ0FBSCxDQU5WO1FBT0lpQixVQUFVbEIsT0FBTyxDQUFQLENBUGQ7UUFRSW1CLFVBQVVuQixPQUFPLENBQVAsQ0FSZDtRQVNJb0IsVUFBVXBCLE9BQU8sQ0FBUCxDQVRkOztRQVdJZixLQUFLb0MsR0FBTCxDQUFTVCxPQUFPTSxPQUFoQixNQUE2QixDQUE3QixJQUNBakMsS0FBS29DLEdBQUwsQ0FBU1IsT0FBT00sT0FBaEIsTUFBNkIsQ0FEN0IsSUFFQWxDLEtBQUtvQyxHQUFMLENBQVNQLE9BQU9NLE9BQWhCLE1BQTZCLENBRmpDLEVBRW9DO2VBQ3pCbkUsV0FBU0osR0FBVCxDQUFQOzs7U0FHQytELE9BQU9NLE9BQVo7U0FDS0wsT0FBT00sT0FBWjtTQUNLTCxPQUFPTSxPQUFaOztVQUVNLElBQUluQyxLQUFLcUMsSUFBTCxDQUFVZCxLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQWYsR0FBb0JDLEtBQUtBLEVBQW5DLENBQVY7VUFDTUMsR0FBTjtVQUNNQSxHQUFOO1VBQ01BLEdBQU47O1NBRUtLLE1BQU1OLEVBQU4sR0FBV08sTUFBTVIsRUFBdEI7U0FDS1EsTUFBTVQsRUFBTixHQUFXTyxNQUFNTCxFQUF0QjtTQUNLSyxNQUFNTixFQUFOLEdBQVdPLE1BQU1SLEVBQXRCO1VBQ012QixLQUFLcUMsSUFBTCxDQUFVcEIsS0FBS0EsRUFBTCxHQUFVQyxLQUFLQSxFQUFmLEdBQW9CQyxLQUFLQSxFQUFuQyxDQUFOO1FBQ0ksQ0FBQ08sR0FBTCxFQUFVO2FBQ0QsQ0FBTDthQUNLLENBQUw7YUFDSyxDQUFMO0tBSEosTUFJTztjQUNHLElBQUlBLEdBQVY7Y0FDTUEsR0FBTjtjQUNNQSxHQUFOO2NBQ01BLEdBQU47OztTQUdDRixLQUFLTCxFQUFMLEdBQVVNLEtBQUtQLEVBQXBCO1NBQ0tPLEtBQUtSLEVBQUwsR0FBVU0sS0FBS0osRUFBcEI7U0FDS0ksS0FBS0wsRUFBTCxHQUFVTSxLQUFLUCxFQUFwQjs7VUFFTWpCLEtBQUtxQyxJQUFMLENBQVVqQixLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQWYsR0FBb0JDLEtBQUtBLEVBQW5DLENBQU47UUFDSSxDQUFDSSxHQUFMLEVBQVU7YUFDRCxDQUFMO2FBQ0ssQ0FBTDthQUNLLENBQUw7S0FISixNQUlPO2NBQ0csSUFBSUEsR0FBVjtjQUNNQSxHQUFOO2NBQ01BLEdBQU47Y0FDTUEsR0FBTjs7O1FBR0EsQ0FBSixJQUFTVCxFQUFUO1FBQ0ksQ0FBSixJQUFTRyxFQUFUO1FBQ0ksQ0FBSixJQUFTRyxFQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVNMLEVBQVQ7UUFDSSxDQUFKLElBQVNHLEVBQVQ7UUFDSSxDQUFKLElBQVNHLEVBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBU0wsRUFBVDtRQUNJLENBQUosSUFBU0csRUFBVDtRQUNJLEVBQUosSUFBVUcsRUFBVjtRQUNJLEVBQUosSUFBVSxDQUFWO1FBQ0ksRUFBSixJQUFVLEVBQUVSLEtBQUtVLElBQUwsR0FBWVQsS0FBS1UsSUFBakIsR0FBd0JULEtBQUtVLElBQS9CLENBQVY7UUFDSSxFQUFKLElBQVUsRUFBRVQsS0FBS08sSUFBTCxHQUFZTixLQUFLTyxJQUFqQixHQUF3Qk4sS0FBS08sSUFBL0IsQ0FBVjtRQUNJLEVBQUosSUFBVSxFQUFFTixLQUFLSSxJQUFMLEdBQVlILEtBQUtJLElBQWpCLEdBQXdCSCxLQUFLSSxJQUEvQixDQUFWO1FBQ0ksRUFBSixJQUFVLENBQVY7O1dBRU9qRSxHQUFQO0NBU0osQUFBTyxBQWFQLEFBQU8sQUFZUCxBQUFPLEFBNEJQLEFBQU8sQUF3QlAsQUFVQSxBQUFPLEFBNkJQLEFBQU8sQUEyQlAsQUFBTzs7QUNuaERBLFNBQVNELFFBQVQsR0FBa0I7UUFDakJDLE1BQU0sSUFBSUMsWUFBSixDQUFpQixDQUFqQixDQUFWO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1dBQ09ELEdBQVA7OztBQVNKLEFBQU87O0FBZ0JQLEFBQU8sU0FBUzBFLFlBQVQsQ0FBb0I3QyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCO1FBQzVCL0IsTUFBTSxJQUFJQyxZQUFKLENBQWlCLENBQWpCLENBQVY7UUFDSSxDQUFKLElBQVM0QixDQUFUO1FBQ0ksQ0FBSixJQUFTQyxDQUFUO1FBQ0ksQ0FBSixJQUFTQyxDQUFUO1dBQ08vQixHQUFQOzs7QUFVSixBQUFPOztBQWdCUCxBQUFPOztBQWVQLEFBQU87O0FBZVAsQUFBTzs7QUFXUCxBQVVBLEFBQU87O0FBV1AsQUFVQSxBQUFPOztBQVdQLEFBU0EsQUFBTzs7QUFjUCxBQUFPOztBQWVQLEFBQU87O0FBZVAsQUFBTzs7QUFjUCxBQUFPOztBQWVQLEFBQU87O0FBZ0JQLEFBQU87O0FBY1AsQUFBTzs7QUFXUCxBQVNBLEFBQU87O0FBV1AsQUFRQSxBQUFPOztBQVdQLEFBUUEsQUFBTzs7QUFXUCxBQVNBLEFBQU87O0FBY1AsQUFBTzs7QUFjUCxBQUFPLFNBQVMyRSxXQUFULENBQW1CM0UsR0FBbkIsRUFBd0JHLENBQXhCLEVBQTJCO1FBQzFCMEIsSUFBSTFCLEVBQUUsQ0FBRixDQUFSO1FBQ0kyQixJQUFJM0IsRUFBRSxDQUFGLENBRFI7UUFFSTRCLElBQUk1QixFQUFFLENBQUYsQ0FGUjtRQUdJMkQsTUFBTWpDLElBQUlBLENBQUosR0FBUUMsSUFBSUEsQ0FBWixHQUFnQkMsSUFBSUEsQ0FBOUI7UUFDSStCLE1BQU0sQ0FBVixFQUFhO2NBRUgsSUFBSTFCLEtBQUtxQyxJQUFMLENBQVVYLEdBQVYsQ0FBVjtZQUNJLENBQUosSUFBUzNELEVBQUUsQ0FBRixJQUFPMkQsR0FBaEI7WUFDSSxDQUFKLElBQVMzRCxFQUFFLENBQUYsSUFBTzJELEdBQWhCO1lBQ0ksQ0FBSixJQUFTM0QsRUFBRSxDQUFGLElBQU8yRCxHQUFoQjs7V0FFRzlELEdBQVA7OztBQVVKLEFBQU87O0FBWVAsQUFBTzs7QUFtQlAsQUFBTzs7QUFxQlAsQUFBTzs7QUF5QlAsQUFBTzs7QUF1QlAsQUFBTzs7QUFzQlAsQUFBTzs7QUFrQlAsQUFBTzs7QUFnQlAsQUFBTzs7QUEyQlAsQUFBTzs7QUE0QlAsQUFBTzs7QUE0QlAsQUFBTzs7QUFvQlAsSUFBSTRFLE1BQU03RSxVQUFWLENBYUEsQUFBTyxBQStCUCxBQUFPLEFBeUJQLEFBQU8sQUFXUCxBQUFPOztBQ250QkEsU0FBU0EsUUFBVCxHQUFrQjtRQUNqQkMsTUFBTSxJQUFJQyxZQUFKLENBQWlCLENBQWpCLENBQVY7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtXQUNPRCxHQUFQOzs7QUFTSixBQUFPOztBQWtCUCxBQUFPOztBQWdCUCxBQUFPOztBQWtCUCxBQUFPOztBQWdCUCxBQUFPOztBQWdCUCxBQUFPOztBQVlQLEFBVUEsQUFBTzs7QUFZUCxBQVVBLEFBQU87O0FBWVAsQUFTQSxBQUFPOztBQWVQLEFBQU87O0FBZ0JQLEFBQU87O0FBZ0JQLEFBQU87O0FBZVAsQUFBTzs7QUFnQlAsQUFBTzs7QUFpQlAsQUFBTzs7QUFlUCxBQUFPOztBQVlQLEFBU0EsQUFBTzs7QUFZUCxBQVFBLEFBQU87O0FBWVAsQUFRQSxBQUFPOztBQVlQLEFBU0EsQUFBTzs7QUFlUCxBQUFPOztBQWVQLEFBQU87O0FBdUJQLEFBQU87O0FBYVAsQUFBTzs7QUFtQlAsQUFBTzs7QUFxQlAsQUFBTzs7QUFpQlAsQUFBTzs7QUFrQlAsSUFBSTRFLFFBQU03RSxVQUFWLENBY0EsQUFBTyxBQStCUCxBQUFPLEFBV1AsQUFBTzs7QUNyaUJBLFNBQVNBLFFBQVQsR0FBa0I7UUFDakJDLE1BQU0sSUFBSUMsWUFBSixDQUFpQixDQUFqQixDQUFWO1FBQ0ksQ0FBSixJQUFTLENBQVQ7UUFDSSxDQUFKLElBQVMsQ0FBVDtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7V0FDT0QsR0FBUDs7O0FBV0osQUFBTyxBQUFJMkUsQUFBWUUsQUFBaEI7O0FBRVAsSUFBSUMsVUFBVUMsUUFBQSxFQUFkO0FBQ0EsSUFBSUMsWUFBWUQsWUFBQSxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFoQjtBQUNBLElBQUlFLFlBQVlGLFlBQUEsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBaEI7O0FBYUEsQUFBTzs7QUF5QlAsSUFBSUcsT0FBT0MsUUFBQSxFQUFYOztBQVlBLEFBQU87O0FBdUJQLEFBQU8sQUFBSUMsQUFBUVAsQUFBWjs7QUFZUCxBQUFPLEFBQUlILEFBQWFHLEFBQWpCOztBQVVQLEFBQU8sQUFBSTNFLEFBQU8yRSxBQUFYOztBQWFQLEFBQU8sQUFBSVEsQUFBTVIsQUFBVjs7QUFRUCxBQUFPOztBQWlCUCxBQUFPOztBQXVCUCxBQUFPOztBQXlCUCxBQUFPLEFBQUlTLEFBQU1ULEFBQVY7O0FBVVAsQUFBTzs7QUFlUCxBQVdBLEFBQU8sQUFBSTdDLEFBQVE2QyxBQUFaOztBQVVQLEFBQU87O0FBcUJQLEFBQU87O0FBcUJQLEFBQU87O0FBc0JQLEFBQU87O0FBa0JQLEFBQU8sQUFBSVUsQUFBTVYsQUFBVjs7QUFZUCxBQUFPLEFBQUlXLEFBQU9YLEFBQVg7O0FBV1AsQUFBTzs7QUF5Q1AsSUFBSVksUUFBUTFGLFVBQVo7QUFDQSxJQUFJMkYsUUFBUTNGLFVBQVosQ0FhQSxBQUFPLEFBY1AsQUFBTyxBQXNCUCxBQUFPLEFBZVAsQUFBTyxBQUFJNEYsQUFBU2QsQUFBYixBQU1QLEFBQU8sQUFBSWYsQUFBTWUsQUFBVixBQVNQLEFBQU8sQUFBSWUsQUFBZ0JmLEFBQXBCLEFBTVAsQUFBTyxBQUFJZ0IsQUFBU2hCLEFBQWIsQUFhUCxBQUFPLEFBeUNQLEFBQU8sQUFXUCxBQUFPLEFBQUlpQixBQUFTakIsQUFBYjs7QUNyaUJBLFNBQVM5RSxRQUFULEdBQWtCO1FBQ2pCQyxNQUFNLElBQUlDLFlBQUosQ0FBaUIsQ0FBakIsQ0FBVjtRQUNJLENBQUosSUFBUyxDQUFUO1FBQ0ksQ0FBSixJQUFTLENBQVQ7V0FDT0QsR0FBUDs7O0FBU0osQUFBTzs7QUFjUCxBQUFPOztBQWNQLEFBQU87O0FBY1AsQUFBTzs7QUFjUCxBQUFPOztBQWNQLEFBQU87O0FBVVAsQUFVQSxBQUFPOztBQVVQLEFBVUEsQUFBTzs7QUFVUCxBQVNBLEFBQU87O0FBYVAsQUFBTzs7QUFjUCxBQUFPOztBQWNQLEFBQU87O0FBYVAsQUFBTzs7QUFjUCxBQUFPOztBQWVQLEFBQU87O0FBYVAsQUFBTzs7QUFVUCxBQVNBLEFBQU87O0FBVVAsQUFRQSxBQUFPOztBQVVQLEFBUUEsQUFBTzs7QUFVUCxBQVNBLEFBQU87O0FBYVAsQUFBTzs7QUFhUCxBQUFPOztBQW9CUCxBQUFPOztBQWFQLEFBQU87O0FBZ0JQLEFBQU87O0FBZVAsQUFBTzs7QUFnQlAsQUFBTzs7QUFnQlAsQUFBTzs7QUFpQlAsQUFBTzs7QUFrQlAsQUFBTzs7QUFRUCxJQUFJNEUsUUFBTTdFLFVBQVYsQ0FjQSxBQUFPLEFBK0JQLEFBQU8sQUFXUCxBQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN2hCY2dHOzs7cUJBQ0xDLEVBQVosRUFBZ0JDLEdBQWhCLEVBQXFCQyxPQUFyQixFQUE4Qjs7O29EQUMxQiwyQkFBTUEsT0FBTixDQUQwQjs7Y0FFckJGLEVBQUwsR0FBVUEsRUFBVjtjQUNLQyxHQUFMLEdBQVdBLEdBQVg7Ozs7O0VBSjZCRTs7QUFRckMsQUFBTyxTQUFTQyxhQUFULENBQXVCSCxHQUF2QixFQUE0QjtXQUN4QkEsSUFBSUksZ0JBQUosS0FBeUIsQ0FBaEM7OztBQ1BKLElBQU1DLFNBQVNsRSxLQUFLbUUsRUFBTCxHQUFVLEdBQXpCOztJQUVxQkM7Ozs7Ozs7OzRCQUVqQkMsdUNBQWU7WUFDTFIsTUFBTSxLQUFLUyxNQUFMLEVBQVo7WUFDSVQsSUFBSVUsU0FBSixNQUFtQixDQUFDVixJQUFJVyxRQUFKLEVBQXhCLEVBQXdDO21CQUM3QixLQUFQOztlQUVHLGdDQUFNSCxZQUFOLFdBQVA7Ozs0QkFHSkksdUNBQWU7WUFDUCxLQUFLQyxNQUFULEVBQWlCOzs7O1lBSVhiLE1BQU0sS0FBS1MsTUFBTCxFQUFaO1lBQ01LLE9BQU9kLElBQUllLE9BQUosRUFBYjtZQUNNQyxJQUFJZCxnQkFBQSxDQUFpQmUsTUFBakIsR0FBMEIsQ0FBMUIsR0FBOEIsQ0FBeEM7YUFDS0osTUFBTCxHQUFjWCxlQUFBLENBQWdCVSxZQUFoQixDQUE2QkksSUFBSUYsS0FBSyxPQUFMLENBQWpDLEVBQWdERSxJQUFJRixLQUFLLFFBQUwsQ0FBcEQsRUFBb0VkLElBQUlrQixXQUF4RSxDQUFkO1lBQ01uQixLQUFLLEtBQUtBLEVBQUwsR0FBVSxLQUFLb0IsZ0JBQUwsQ0FBc0IsS0FBS04sTUFBM0IsRUFBbUMsS0FBS08sS0FBTCxDQUFXbkIsT0FBWCxDQUFtQixXQUFuQixDQUFuQyxDQUFyQjtXQUNHb0IsVUFBSCxDQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0I7O1dBSUdDLE9BQUgsR0FBYSxJQUFiOztXQUlHQyxTQUFILENBQWF4QixHQUFHeUIsR0FBaEIsRUFBcUJ6QixHQUFHeUIsR0FBeEI7V0FDR0MsTUFBSCxDQUFVMUIsR0FBRzJCLEtBQWI7V0FDR0MsT0FBSCxDQUFXNUIsR0FBRzZCLFVBQWQ7V0FDR0MsV0FBSCxDQUFlOUIsR0FBRytCLDhCQUFsQixFQUFrRCxJQUFsRDtZQUNJLEtBQUtDLGNBQVQsRUFBeUI7aUJBQ2hCQSxjQUFMOzs7WUFHQSxLQUFLWCxLQUFMLENBQVduQixPQUFYLENBQW1CLGNBQW5CLENBQUosRUFBd0M7aUJBQy9CK0IsTUFBTCxHQUFjOUIsZUFBQSxDQUFnQlUsWUFBaEIsQ0FBNkIsS0FBS0MsTUFBTCxDQUFZb0IsS0FBekMsRUFBZ0QsS0FBS3BCLE1BQUwsQ0FBWXFCLE1BQTVELEVBQW9FbEMsSUFBSWtCLFdBQXhFLENBQWQ7aUJBQ0tpQixPQUFMLEdBQWUsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQWY7Ozs7NEJBSVJDLHFDQUFhQyxZQUFZO1lBQ2pCLENBQUMsS0FBS3pCLE1BQVYsRUFBa0I7OztZQUdkQyxhQUFKO1lBQ0ksQ0FBQ3dCLFVBQUwsRUFBaUI7bUJBQ04sS0FBSzdCLE1BQUwsR0FBY00sT0FBZCxFQUFQO1NBREosTUFFTzttQkFDSXVCLFVBQVA7O1lBRUV0QixJQUFJZCxnQkFBQSxDQUFpQmUsTUFBakIsR0FBMEIsQ0FBMUIsR0FBOEIsQ0FBeEM7O2FBRUtKLE1BQUwsQ0FBWXFCLE1BQVosR0FBcUJsQixJQUFJRixLQUFLLFFBQUwsQ0FBekI7YUFDS0QsTUFBTCxDQUFZb0IsS0FBWixHQUFvQmpCLElBQUlGLEtBQUssT0FBTCxDQUF4QjthQUNLZixFQUFMLENBQVF3QyxRQUFSLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLEtBQUsxQixNQUFMLENBQVlvQixLQUFuQyxFQUEwQyxLQUFLcEIsTUFBTCxDQUFZcUIsTUFBdEQ7Ozs0QkFHSk0scUNBQWM7WUFDTixDQUFDLEtBQUszQixNQUFWLEVBQWtCOzs7YUFHYmQsRUFBTCxDQUFRMEMsS0FBUixDQUFjLEtBQUsxQyxFQUFMLENBQVEyQyxnQkFBUixHQUEyQixLQUFLM0MsRUFBTCxDQUFRNEMsZ0JBQWpEO1lBQ0ksS0FBS1IsT0FBVCxFQUFrQjtpQkFDVEEsT0FBTCxDQUFhUyxTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEtBQUsvQixNQUFMLENBQVlvQixLQUF6QyxFQUFnRCxLQUFLcEIsTUFBTCxDQUFZcUIsTUFBNUQ7Ozs7NEJBSVJXLHlDQUFnQjtZQUNSLEtBQUtWLE9BQVQsRUFBa0I7bUJBRVAsZ0NBQU1VLGFBQU4sV0FBUDs7WUFFQSxDQUFDLEtBQUtoQyxNQUFWLEVBQWtCO2lCQUNURCxZQUFMO1NBREosTUFFTztpQkFDRTRCLFdBQUw7O2FBRUNwQixLQUFMLENBQVcwQixJQUFYLENBQWdCLGFBQWhCLEVBQStCLEVBQUUsV0FBWSxLQUFLWCxPQUFuQixFQUE0QixNQUFPLEtBQUtwQyxFQUF4QyxFQUEvQjtlQUNPLElBQVA7Ozs0QkFTSmdELHFDQUFhQyxTQUFTQyxVQUFVO1lBQ3hCLENBQUNELE9BQUQsSUFBWUEsUUFBUXRELE1BQVIsS0FBbUIsQ0FBbkMsRUFBc0M7bUJBQzNCLElBQVA7OztZQUdFc0MsU0FBUyxDQUFmO1lBQ0lrQixJQUFJLENBQVI7WUFDSUMsSUFBSSxDQURSO2dCQUVRQyxPQUFSLENBQWdCLFVBQVVsSCxDQUFWLEVBQWE7Z0JBQ3JCK0csUUFBSixFQUFjO29CQUNKcEYsTUFBTTFCLEtBQUtrSCxHQUFMLENBQVNuSCxFQUFFMkUsTUFBRixDQUFTb0IsS0FBbEIsRUFBeUIvRixFQUFFMkUsTUFBRixDQUFTcUIsTUFBbEMsQ0FBWjtxQkFDS3JFLE1BQU1tRSxNQUFYO29CQUNJbkUsTUFBTXNGLENBQVYsRUFBYTt3QkFDTHRGLEdBQUo7O2FBSlIsTUFNTztxQkFDRTNCLEVBQUUyRSxNQUFGLENBQVNvQixLQUFULEdBQWlCRCxNQUF0QjtvQkFDSTlGLEVBQUUyRSxNQUFGLENBQVNxQixNQUFULEdBQWtCaUIsQ0FBdEIsRUFBeUI7d0JBQ2pCakgsRUFBRTJFLE1BQUYsQ0FBU3FCLE1BQWI7OztTQVZaOztZQWdCSS9GLEtBQUttSCxHQUFMLENBQVMsQ0FBVCxFQUFZbkgsS0FBS29ILElBQUwsQ0FBVXBILEtBQUtxSCxHQUFMLENBQVNOLENBQVQsSUFBYy9HLEtBQUtzSCxHQUE3QixDQUFaLENBQUo7WUFDSXRILEtBQUttSCxHQUFMLENBQVMsQ0FBVCxFQUFZbkgsS0FBS29ILElBQUwsQ0FBVXBILEtBQUtxSCxHQUFMLENBQVNMLENBQVQsSUFBY2hILEtBQUtzSCxHQUE3QixDQUFaLENBQUo7O1lBRU16RCxNQUFNLEtBQUtTLE1BQUwsRUFBWjtZQUNNaUQsZUFBZXhELGVBQUEsQ0FBZ0JVLFlBQWhCLENBQTZCc0MsQ0FBN0IsRUFBZ0NDLENBQWhDLEVBQW1DbkQsSUFBSWtCLFdBQXZDLENBQXJCO1lBQ0l5QyxNQUFNRCxhQUFhdEIsVUFBYixDQUF3QixJQUF4QixDQURWO1lBRUl3QixZQUFZLEVBRmhCO1lBR0lDLFVBQVUsRUFIZDtZQUlJQyxRQUFRLEVBSlo7WUFLSUMsVUFBVSxDQUFkO2dCQUNRWCxPQUFSLENBQWdCLFVBQVVsSCxDQUFWLEVBQWE7Z0JBQ3JCOEgsS0FBSyxDQUFUO2dCQUFZQyxLQUFLLENBQWpCO2dCQUFvQnBHLFlBQXBCO2dCQUNJb0YsUUFBSixFQUFjO29CQUNKaUIsS0FBS2hJLEVBQUUyRSxNQUFGLENBQVNvQixLQUFwQjtvQkFDSWtDLEtBQUtqSSxFQUFFMkUsTUFBRixDQUFTcUIsTUFEbEI7c0JBRU0vRixLQUFLa0gsR0FBTCxDQUFTYSxFQUFULEVBQWFDLEVBQWIsQ0FBTjtxQkFDS3RHLE1BQU1xRyxFQUFOLEdBQVcsQ0FBQ3JHLE1BQU1xRyxFQUFQLElBQWEsQ0FBeEIsR0FBNEIsQ0FBakM7cUJBQ0tyRyxNQUFNc0csRUFBTixHQUFXLENBQUN0RyxNQUFNc0csRUFBUCxJQUFhLENBQXhCLEdBQTRCLENBQWpDOzswQkFFVUMsSUFBVixDQUFlLENBQUNMLFVBQVViLENBQVgsRUFBY3JGLE1BQU1xRixDQUFwQixFQUF1QnJGLE1BQU1zRixDQUE3QixFQUFnQ3RGLEdBQWhDLENBQWY7c0JBQ011RyxJQUFOLENBQVcsQ0FBQ0YsRUFBRCxFQUFLQyxFQUFMLENBQVg7YUFSSixNQVNPO3NCQUNHakksRUFBRTJFLE1BQUYsQ0FBU29CLEtBQWY7MEJBQ1VtQyxJQUFWLENBQWUsQ0FBQ0wsVUFBVWIsQ0FBWCxFQUFjaEgsRUFBRTJFLE1BQUYsQ0FBU29CLEtBQVQsR0FBaUJpQixDQUEvQixFQUFrQ2hILEVBQUUyRSxNQUFGLENBQVNxQixNQUFULEdBQWtCaUIsQ0FBcEQsQ0FBZjs7O2dCQUdBa0IsU0FBSixDQUFjbkksRUFBRTJFLE1BQWhCLEVBQXdCa0QsVUFBVUMsRUFBbEMsRUFBc0NDLEVBQXRDOztvQkFFUUcsSUFBUixDQUFhbEksRUFBRW9JLE1BQWY7dUJBQ1d6RyxNQUFNbUUsTUFBakI7U0FuQko7WUFxQk11QyxTQUFTO3NCQUNBYixZQURBO3lCQUVHRSxTQUZIO3VCQUdDQztTQUhoQjtZQUtJWixRQUFKLEVBQWM7bUJBQ0gsT0FBUCxJQUFrQmEsS0FBbEI7O2VBRUdTLE1BQVA7Ozs0QkFHSkMsdUNBQWU7WUFDTHpFLEtBQUssS0FBS0EsRUFBaEI7O1lBRU1pQyxTQUFTakMsR0FBR3lFLFlBQUgsRUFBZjtZQUNJLENBQUN4QyxNQUFMLEVBQWE7a0JBQ0gsSUFBSXlDLEtBQUosQ0FBVSxvQ0FBVixDQUFOOzs7WUFHQSxDQUFDLEtBQUtDLFFBQVYsRUFBb0I7aUJBQ1hBLFFBQUwsR0FBZ0IsRUFBaEI7O2FBRUNBLFFBQUwsQ0FBY04sSUFBZCxDQUFtQnBDLE1BQW5COztlQUVPQSxNQUFQOzs7NEJBR0oyQyxpREFBbUJDLFlBQVk7WUFDckI3RSxLQUFLLEtBQUtBLEVBQWhCO1lBQ0k4RSxNQUFNQyxPQUFOLENBQWNGLFdBQVcsQ0FBWCxDQUFkLENBQUosRUFBa0M7Z0JBQ3hCRyxvQkFBb0IsSUFBSS9LLFlBQUosQ0FBaUIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBakIsQ0FBMUI7O2dCQUVNZ0wsUUFBUUQsa0JBQWtCRSxpQkFBaEM7O2dCQUVJQyxTQUFTLENBQWI7aUJBQ0ssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUCxXQUFXbEYsTUFBL0IsRUFBdUN5RixHQUF2QyxFQUE0QzswQkFDN0JQLFdBQVdPLENBQVgsRUFBYyxDQUFkLEtBQW9CLENBQS9COzs7Z0JBR0FiLFNBQVMsQ0FBYjtpQkFDSyxJQUFJYSxLQUFJLENBQWIsRUFBZ0JBLEtBQUlQLFdBQVdsRixNQUEvQixFQUF1Q3lGLElBQXZDLEVBQTRDO29CQUNsQ0MsT0FBT3JGLEdBQUdzRixpQkFBSCxDQUFxQnRGLEdBQUd1RixPQUF4QixFQUFpQ1YsV0FBV08sRUFBWCxFQUFjLENBQWQsQ0FBakMsQ0FBYjtvQkFDSUMsT0FBTyxDQUFYLEVBQWM7MEJBQ0osSUFBSVgsS0FBSixDQUFVLDJDQUEyQ0csV0FBV08sRUFBWCxFQUFjLENBQWQsQ0FBckQsQ0FBTjs7bUJBRURJLG1CQUFILENBQXVCSCxJQUF2QixFQUE2QlIsV0FBV08sRUFBWCxFQUFjLENBQWQsQ0FBN0IsRUFBK0NwRixHQUFHNkUsV0FBV08sRUFBWCxFQUFjLENBQWQsS0FBb0IsT0FBdkIsQ0FBL0MsRUFBZ0YsS0FBaEYsRUFBdUZILFFBQVFFLE1BQS9GLEVBQXVHRixRQUFRVixNQUEvRzswQkFDV00sV0FBV08sRUFBWCxFQUFjLENBQWQsS0FBb0IsQ0FBL0I7bUJBQ0dLLHVCQUFILENBQTJCSixJQUEzQjs7U0FsQlIsTUFvQk87Z0JBQ0dBLFFBQU9yRixHQUFHc0YsaUJBQUgsQ0FBcUJ0RixHQUFHdUYsT0FBeEIsRUFBaUNWLFdBQVcsQ0FBWCxDQUFqQyxDQUFiO2VBQ0dXLG1CQUFILENBQXVCSCxLQUF2QixFQUE2QlIsV0FBVyxDQUFYLENBQTdCLEVBQTRDN0UsR0FBRzZFLFdBQVcsQ0FBWCxLQUFpQixPQUFwQixDQUE1QyxFQUEwRSxLQUExRSxFQUFpRixDQUFqRixFQUFvRixDQUFwRjtlQUNHWSx1QkFBSCxDQUEyQkosS0FBM0I7Ozs7NEJBS1JLLCtCQUFXO1lBQ0QxRixLQUFLLEtBQUtBLEVBQWhCO1lBQ0ksS0FBSzJFLFFBQVQsRUFBbUI7aUJBQ1ZBLFFBQUwsQ0FBY3RCLE9BQWQsQ0FBc0IsVUFBVS9JLENBQVYsRUFBYTttQkFDNUJxTCxZQUFILENBQWdCckwsQ0FBaEI7YUFESjttQkFHTyxLQUFLcUssUUFBWjs7Ozs0QkFVUmlCLHVDQUFjQyxTQUFTQyxTQUFTQyxVQUFVO1lBQ2hDL0YsS0FBSyxLQUFLQSxFQUFoQjs7WUFFTWdHLGVBQWUsS0FBS0MsY0FBTCxDQUFvQmpHLEVBQXBCLEVBQXdCQSxHQUFHa0csYUFBM0IsRUFBMENMLE9BQTFDLENBQXJCO1lBQ01NLGlCQUFpQixLQUFLRixjQUFMLENBQW9CakcsRUFBcEIsRUFBd0JBLEdBQUdvRyxlQUEzQixFQUE0Q04sT0FBNUMsQ0FBdkI7WUFDSSxDQUFDRSxZQUFELElBQWlCLENBQUNHLGNBQXRCLEVBQXNDO21CQUMzQixJQUFQOzs7WUFJRVosVUFBVXZGLEdBQUc0RixhQUFILEVBQWhCO1lBQ0ksQ0FBQ0wsT0FBTCxFQUFjO21CQUNILElBQVA7OztXQUlEYyxZQUFILENBQWdCZCxPQUFoQixFQUF5QlMsWUFBekI7V0FDR0ssWUFBSCxDQUFnQmQsT0FBaEIsRUFBeUJZLGNBQXpCOztXQUdHRyxXQUFILENBQWVmLE9BQWY7O1lBR01nQixTQUFTdkcsR0FBR3dHLG1CQUFILENBQXVCakIsT0FBdkIsRUFBZ0N2RixHQUFHeUcsV0FBbkMsQ0FBZjtZQUNJLENBQUNGLE1BQUwsRUFBYTtnQkFDSEcsUUFBUTFHLEdBQUcyRyxpQkFBSCxDQUFxQnBCLE9BQXJCLENBQWQ7ZUFDR3FCLGFBQUgsQ0FBaUJyQixPQUFqQjtlQUNHc0IsWUFBSCxDQUFnQlYsY0FBaEI7ZUFDR1UsWUFBSCxDQUFnQmIsWUFBaEI7a0JBQ00sSUFBSXRCLEtBQUosQ0FBVSw2QkFBNkJnQyxLQUF2QyxDQUFOOzs7YUFHQ0ksYUFBTCxDQUFtQnZCLE9BQW5CLEVBQTRCUSxRQUE1Qjs7ZUFFT1IsT0FBUDs7OzRCQUdKd0IsaUNBQVd4QixTQUFTO1lBQ1Z2RixLQUFLLEtBQUtBLEVBQWhCO1dBQ0crRyxVQUFILENBQWN4QixPQUFkO1dBQ0dBLE9BQUgsR0FBYUEsT0FBYjtlQUNPLElBQVA7Ozs0QkFHSnlCLG1DQUFZQyxPQUFPQyxRQUFRO1lBQ2pCbEgsS0FBSyxLQUFLQSxFQUFoQjtZQUNNbUgsVUFBVW5ILEdBQUdvSCxhQUFILEVBQWhCO1lBQ0ksQ0FBQ0QsT0FBTCxFQUFjO2tCQUNKLElBQUl6QyxLQUFKLENBQVUscUNBQVYsQ0FBTjs7WUFFQSxDQUFDd0MsTUFBTCxFQUFhO3FCQUNBLENBQVQ7OztXQUdERyxhQUFILENBQWlCckgsR0FBRyxZQUFZa0gsTUFBZixDQUFqQjs7V0FFR0ksV0FBSCxDQUFldEgsR0FBR3VILFVBQWxCLEVBQThCSixPQUE5Qjs7V0FFR0ssYUFBSCxDQUFpQnhILEdBQUd1SCxVQUFwQixFQUFnQ3ZILEdBQUd5SCxrQkFBbkMsRUFBdUR6SCxHQUFHMEgsT0FBMUQ7O1dBRUdDLFVBQUgsQ0FBYzNILEdBQUd1SCxVQUFqQixFQUE2QixDQUE3QixFQUFnQ3ZILEdBQUc0SCxJQUFuQyxFQUF5QzVILEdBQUc0SCxJQUE1QyxFQUFrRDVILEdBQUc2SCxhQUFyRCxFQUFvRVosS0FBcEU7ZUFDT0UsT0FBUDs7OzRCQUdKVyx1Q0FBY0MsU0FBU2IsUUFBUTtZQUNyQmxILEtBQUssS0FBS0EsRUFBaEI7WUFDTWdJLFdBQVcsS0FBS0MsV0FBTCxDQUFpQmpJLEdBQUd1RixPQUFwQixFQUE2QndDLE9BQTdCLENBQWpCO1lBQ0ksQ0FBQ2IsTUFBTCxFQUFhO3FCQUNBLENBQVQ7OztXQUdEZ0IsU0FBSCxDQUFhRixRQUFiLEVBQXVCZCxNQUF2QjtlQUNPYyxRQUFQOzs7NEJBT0pHLHlDQUFnQjtZQUNObEksTUFBTSxLQUFLUyxNQUFMLEVBQVo7WUFDTUssT0FBT2QsSUFBSWUsT0FBSixFQUFiO1lBQ0loRixRQUFRaUUsSUFBSW1JLFFBQUosRUFEWjtZQUVNakwsU0FBUzhDLElBQUlvSSxXQUFKLENBQWdCcEksSUFBSXFJLGFBQUosRUFBaEIsRUFBcUNySSxJQUFJc0ksVUFBSixFQUFyQyxDQUFmO1lBQ01DLE1BQU12SSxJQUFJd0ksTUFBSixLQUFlck0sS0FBS21FLEVBQXBCLEdBQXlCLEdBQXJDO1lBQ01tSSx5QkFBeUIsTUFBTXRNLEtBQUtXLEdBQUwsQ0FBU3lMLE1BQU0sQ0FBZixDQUFOLEdBQTBCekgsS0FBS29CLE1BQS9CLEdBQXdDbkcsS0FBdkU7O1lBRU0yTSxJQUFJQyxRQUFBLEVBQVY7bUJBQ0EsQ0FBaUJELENBQWpCLEVBQW9CSCxHQUFwQixFQUF5QnpILEtBQUttQixLQUFMLEdBQWFuQixLQUFLb0IsTUFBM0MsRUFBbUQsQ0FBbkQsRUFBc0R1Ryx5QkFBeUIsR0FBL0U7WUFDSSxDQUFDdkksYUFBQSxDQUFjMEksT0FBbkIsRUFBNEI7bUJBRXhCLENBQVdGLENBQVgsRUFBY0EsQ0FBZCxFQUFpQixDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLENBQWpCOzttQkFFSixDQUFlQSxDQUFmLEVBQWtCQSxDQUFsQixFQUFxQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQ0Qsc0JBQVIsQ0FBckI7ZUFDQSxDQUFhQyxDQUFiLEVBQWdCQSxDQUFoQixFQUFtQjFJLElBQUlXLFFBQUosS0FBaUJ4RSxLQUFLbUUsRUFBdEIsR0FBMkIsR0FBOUM7ZUFDQSxDQUFhb0ksQ0FBYixFQUFnQkEsQ0FBaEIsRUFBbUIsQ0FBQzFJLElBQUk2SSxVQUFKLEVBQUQsR0FBb0IxTSxLQUFLbUUsRUFBekIsR0FBOEIsR0FBakQ7bUJBQ0EsQ0FBZW9JLENBQWYsRUFBa0JBLENBQWxCLEVBQXFCLENBQUMsQ0FBQ3hMLE9BQU90QixDQUFULEVBQVksQ0FBQ3NCLE9BQU9yQixDQUFwQixFQUF1QixDQUF2QixDQUFyQjtlQUNPNk0sQ0FBUDs7OzRCQUdKSSx1Q0FBZTtZQUNMOUksTUFBTSxLQUFLUyxNQUFMLEVBQVo7O1lBRU1LLE9BQU9kLElBQUllLE9BQUosRUFBYjs7WUFFTXdILE1BQU12SSxJQUFJd0ksTUFBSixLQUFlck0sS0FBS21FLEVBQXBCLEdBQXlCLEdBQXJDO1lBQ015SSxXQUFXL0ksSUFBSW1JLFFBQUosQ0FBYW5JLElBQUlnSixVQUFKLEVBQWIsSUFBaUNoSixJQUFJbUksUUFBSixDQUFhbkksSUFBSUksZ0JBQUosRUFBYixDQUFsRDtZQUNNNkksT0FBT0YsV0FBV2pJLEtBQUtvQixNQUFoQixHQUF5QixDQUF6QixHQUE2QixLQUFLZ0gsWUFBTCxFQUExQztZQUNNUixJQUFJQyxRQUFBLEVBQVY7bUJBQ0EsQ0FBaUJELENBQWpCLEVBQW9CSCxHQUFwQixFQUF5QnpILEtBQUttQixLQUFMLEdBQWFuQixLQUFLb0IsTUFBM0MsRUFBbUQsQ0FBbkQsRUFBc0QrRyxJQUF0RDtZQUNNRSxLQUFLUixRQUFBLEVBQVg7WUFDSSxDQUFDekksYUFBQSxDQUFjMEksT0FBbkIsRUFBNEI7bUJBRXhCLENBQVdGLENBQVgsRUFBY0EsQ0FBZCxFQUFpQixDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLENBQWpCOztjQUVKLENBQVVTLEVBQVYsRUFBY1QsQ0FBZDtZQUNNVSxLQUFLLEtBQUtDLGFBQUwsRUFBWDtrQkFDQSxDQUFjWCxDQUFkLEVBQWlCUyxFQUFqQixFQUFxQkMsRUFBckI7ZUFDT1YsQ0FBUDs7OzRCQUdKVyx5Q0FBZ0I7WUFDTnJKLE1BQU0sS0FBS1MsTUFBTCxFQUFaOztZQUVNNkksVUFBVW5KLGNBQWNILEdBQWQsQ0FBaEI7O1lBRU1jLE9BQU9kLElBQUllLE9BQUosRUFBYjtZQUNJaEYsUUFBUWlFLElBQUltSSxRQUFKLEtBQWlCbkksSUFBSW1JLFFBQUosQ0FBYW1CLE9BQWIsQ0FEN0I7O1lBR01DLFdBQVcsS0FBS0MsWUFBTCxHQUFvQnhKLElBQUl5SixpQkFBSixDQUFzQnpKLElBQUkwSixTQUFKLEVBQXRCLEVBQXVDSixPQUF2QyxDQUFyQztZQUNNSyxRQUFRM0osSUFBSVcsUUFBSixLQUFpQk4sTUFBL0I7WUFDTXVKLFVBQVUsQ0FBQzVKLElBQUk2SSxVQUFKLEVBQUQsR0FBb0J4SSxNQUFwQzs7WUFFTXdKLFFBQVEsS0FBS1gsWUFBTCxFQUFkO1lBQ01wTixJQUFJQyxRQUFRK0UsS0FBS29CLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEIySCxLQUFwQztZQUNNQyxLQUFLaE8sSUFBSUssS0FBS0csR0FBTCxDQUFTcU4sS0FBVCxDQUFmOztZQUVNSSxPQUFPNU4sS0FBS0MsR0FBTCxDQUFTdU4sS0FBVCxJQUFrQjdOLENBQS9COztZQUVNa08sS0FBS1QsU0FBUzNOLENBQVQsR0FBYW1PLE9BQU81TixLQUFLQyxHQUFMLENBQVN3TixPQUFULENBQS9CO1lBQ01LLEtBQUtWLFNBQVMxTixDQUFULEdBQWFrTyxPQUFPNU4sS0FBS0csR0FBTCxDQUFTc04sT0FBVCxDQUEvQjs7WUFPTXpNLEtBQUssQ0FBQ2hCLEtBQUtDLEdBQUwsQ0FBU3dOLE9BQVQsQ0FBRCxFQUFvQnpOLEtBQUtHLEdBQUwsQ0FBU3NOLE9BQVQsQ0FBcEIsRUFBdUMsQ0FBdkMsQ0FBWDtZQUNNbEIsSUFBSUMsUUFBQSxFQUFWO2NBQ0EsQ0FBWUQsQ0FBWixFQUFlLENBQUNzQixFQUFELEVBQUtDLEVBQUwsRUFBU0gsRUFBVCxDQUFmLEVBQTZCLENBQUNQLFNBQVMzTixDQUFWLEVBQWEyTixTQUFTMU4sQ0FBdEIsRUFBeUIsQ0FBekIsQ0FBN0IsRUFBMERzQixFQUExRDtlQUNPdUwsQ0FBUDs7OzRCQUdKUSx1Q0FBZTtZQUNMbEosTUFBTSxLQUFLUyxNQUFMLEVBQVo7WUFDTThILE1BQU12SSxJQUFJd0ksTUFBSixFQUFaO2VBQ09yTSxLQUFLVyxHQUFMLENBQVN5TCxNQUFNLENBQU4sR0FBVXBNLEtBQUttRSxFQUFmLEdBQW9CLEdBQTdCLENBQVA7Ozs0QkFHSjRKLCtCQUFVQyxPQUFPO1lBQ1BwSyxLQUFLLEtBQUtBLEVBQWhCO1lBQ0ksQ0FBQ0EsRUFBTCxFQUFTO21CQUNFLEtBQVA7O1lBRUVxSyxTQUFTLElBQUlDLFVBQUosQ0FBZSxJQUFJLENBQUosR0FBUSxDQUF2QixDQUFmO1lBQ01ySyxNQUFNLEtBQUtTLE1BQUwsRUFBWjtZQUNNMEMsSUFBSSxLQUFLdEMsTUFBTCxDQUFZcUIsTUFBdEI7WUFDTW9JLEtBQUt0SyxJQUFJdUssc0JBQUosQ0FBMkJKLEtBQTNCLEVBQWtDSyxNQUFsQyxFQUFYO1dBQ0dDLFVBQUgsQ0FBY0gsR0FBRzFPLENBQWpCLEVBQW9CdUgsSUFBSW1ILEdBQUd6TyxDQUEzQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQyxFQUFvQ2tFLEdBQUc0SCxJQUF2QyxFQUE2QzVILEdBQUc2SCxhQUFoRCxFQUErRHdDLE1BQS9EO2VBQ1FBLE9BQU8sQ0FBUCxJQUFZLENBQXBCOzs7NEJBR0pNLDJDQUFpQjtZQUNQQyxZQUFZLGdDQUFNRCxjQUFOLFdBQWxCO1lBQ0lDLGFBQWFBLFVBQVUzRCxLQUF2QixJQUFnQyxLQUFLaEYsTUFBekMsRUFBaUQ7Z0JBQ3ZDbkIsU0FBUzhKLFVBQVUzRCxLQUF6QjtnQkFDSSxLQUFLaEYsTUFBTCxDQUFZQyxLQUFaLEtBQXNCcEIsT0FBT29CLEtBQTdCLElBQXNDLEtBQUtELE1BQUwsQ0FBWUUsTUFBWixLQUF1QnJCLE9BQU9xQixNQUFwRSxJQUE4RSxDQUFDLEtBQUswSSxlQUF4RixFQUF5RztxQkFDaEc1SSxNQUFMLENBQVlDLEtBQVosR0FBb0JwQixPQUFPb0IsS0FBM0I7cUJBQ0tELE1BQUwsQ0FBWUUsTUFBWixHQUFxQnJCLE9BQU9xQixNQUE1Qjs7Z0JBRUEsQ0FBQyxLQUFLMEksZUFBVixFQUEyQjtxQkFDbEJ6SSxPQUFMLENBQWFrQyxTQUFiLENBQXVCeEQsTUFBdkIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEM7O3NCQUVNbUcsS0FBVixHQUFrQixLQUFLaEYsTUFBdkI7O2VBRUcySSxTQUFQOzs7NEJBR0pFLHFDQUFjO3dDQUNKQSxXQUFOLENBQWtCQyxLQUFsQixDQUF3QixJQUF4QixFQUE4QkMsU0FBOUI7Ozs0QkFHSkMsaUNBQVk7d0NBQ0ZBLFNBQU4sQ0FBZ0JGLEtBQWhCLENBQXNCLElBQXRCLEVBQTRCQyxTQUE1Qjs7OzRCQUdKNUosNkNBQWlCTixRQUFRWixTQUFTO1lBQ3hCMkUsYUFBYTFFLGFBQUEsQ0FBYytLLE1BQWQsQ0FBcUI7cUJBQzNCLElBRDJCO3lCQUV2QixJQUZ1QjtxQ0FHWDtTQUhWLEVBSWhCaEwsT0FKZ0IsQ0FBbkI7WUFLTWlMLFFBQVEsQ0FBQyxPQUFELEVBQVUsb0JBQVYsRUFBZ0MsV0FBaEMsRUFBNkMsV0FBN0MsQ0FBZDtZQUNJL0ksVUFBVSxJQUFkOzthQUVLLElBQUlnRCxJQUFJLENBQWIsRUFBZ0JBLElBQUkrRixNQUFNeEwsTUFBMUIsRUFBa0MsRUFBRXlGLENBQXBDLEVBQXVDO2dCQUMvQjswQkFDVXRFLE9BQU91QixVQUFQLENBQWtCOEksTUFBTS9GLENBQU4sQ0FBbEIsRUFBNEJQLFVBQTVCLENBQVY7YUFESixDQUVFLE9BQU91RyxDQUFQLEVBQVU7Z0JBQ1JoSixPQUFKLEVBQWE7Ozs7ZUFJVkEsT0FBUDs7OzRCQVdKNkQseUNBQWVqRyxJQUFJcUwsTUFBTUMsUUFBUTtZQUV2QkMsU0FBU3ZMLEdBQUd3TCxZQUFILENBQWdCSCxJQUFoQixDQUFmO1lBQ0lFLFVBQVUsSUFBZCxFQUFvQjtrQkFDVixJQUFJN0csS0FBSixDQUFVLHlCQUFWLENBQU47OztXQUlEK0csWUFBSCxDQUFnQkYsTUFBaEIsRUFBd0JELE1BQXhCOztXQUdHSSxhQUFILENBQWlCSCxNQUFqQjs7WUFHTUksV0FBVzNMLEdBQUc0TCxrQkFBSCxDQUFzQkwsTUFBdEIsRUFBOEJ2TCxHQUFHNkwsY0FBakMsQ0FBakI7WUFDSSxDQUFDRixRQUFMLEVBQWU7Z0JBQ0xqRixRQUFRMUcsR0FBRzhMLGdCQUFILENBQW9CUCxNQUFwQixDQUFkOztlQUVHMUUsWUFBSCxDQUFnQjBFLE1BQWhCO2tCQUNNLElBQUk3RyxLQUFKLENBQVUsK0JBQStCZ0MsS0FBekMsQ0FBTjs7O2VBR0c2RSxNQUFQOzs7NEJBR0p6RSx1Q0FBY3ZCLFNBQVNRLFVBQVU7YUFDeEIsSUFBSVgsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVyxTQUFTcEcsTUFBN0IsRUFBcUN5RixHQUFyQyxFQUEwQztnQkFDbEMyRyxPQUFPaEcsU0FBU1gsQ0FBVCxDQUFYO2dCQUNJNEcsVUFBVWpHLFNBQVNYLENBQVQsQ0FBZDtnQkFDTTlLLElBQUl5UixLQUFLRSxPQUFMLENBQWEsR0FBYixDQUFWO2dCQUNJM1IsS0FBSyxDQUFULEVBQVk7dUJBQ0R5UixLQUFLRyxTQUFMLENBQWUsQ0FBZixFQUFrQjVSLENBQWxCLENBQVA7b0JBQ0ksQ0FBQzZGLGFBQUEsQ0FBYzBJLE9BQW5CLEVBQTRCOzhCQUVkbUQsUUFBUUUsU0FBUixDQUFrQixDQUFsQixFQUFxQjVSLENBQXJCLENBQVY7OztvQkFHQXlSLElBQVIsSUFBZ0IsS0FBSzlELFdBQUwsQ0FBaUIxQyxPQUFqQixFQUEwQnlHLE9BQTFCLENBQWhCOzs7OzRCQUlSL0QsbUNBQVkxQyxTQUFTNEcsYUFBYTtZQUN4Qm5NLEtBQUssS0FBS0EsRUFBaEI7WUFDTWdNLFVBQVVoTSxHQUFHb00sa0JBQUgsQ0FBc0I3RyxPQUF0QixFQUErQjRHLFdBQS9CLENBQWhCO1lBQ0ksQ0FBQ0gsT0FBTCxFQUFjO2tCQUNKLElBQUl0SCxLQUFKLENBQVUsMkNBQTJDeUgsV0FBckQsQ0FBTjs7ZUFFR0gsT0FBUDs7OztFQXhlbUM3TCxpQkFBQSxDQUFrQmtNOztJQ0t4Q0M7dUJBQ0xDLFNBQVosRUFBdUJyTSxPQUF2QixFQUFnQzs7O2FBQ3ZCcU0sU0FBTCxHQUFpQkEsU0FBakI7YUFDS3JNLE9BQUwsR0FBZUEsV0FBVyxFQUExQjthQUNLc00sS0FBTCxHQUFhLEVBQWI7Ozt3QkFHSkMsNkJBQVNDLFFBQVE7WUFDUEMsTUFBTUMsS0FBS0MsU0FBTCxDQUFlSCxNQUFmLENBQVo7O1lBRUksQ0FBQyxLQUFLRixLQUFMLENBQVdHLEdBQVgsQ0FBTCxFQUFzQjtnQkFDWkgsUUFBUSxLQUFLTSxRQUFMLENBQWNKLE1BQWQsQ0FBZDtnQkFDSUYsS0FBSixFQUFXO3FCQUNGQSxLQUFMLENBQVdHLEdBQVgsSUFBa0JILEtBQWxCOzs7ZUFHRCxLQUFLQSxLQUFMLENBQVdHLEdBQVgsQ0FBUDs7O3dCQUdKRyw2QkFBU0osUUFBUTtZQUNULENBQUNBLE9BQU8sZUFBUCxDQUFELElBQTRCLENBQUNBLE9BQU8saUJBQVAsQ0FBakMsRUFBNEQ7bUJBQ2pELElBQVA7OztZQUdFM0wsT0FBTyxLQUFLZ00sUUFBTCxDQUFjTCxNQUFkLEVBQXNCLEtBQUtILFNBQTNCLENBQWI7O1lBRU16TCxTQUFTLEtBQUtrTSxhQUFMLENBQW1Cak0sSUFBbkIsQ0FBZjs7WUFFSSxDQUFDRCxNQUFMLEVBQWE7a0JBQ0gsSUFBSTRELEtBQUosQ0FBVSxzQ0FBVixDQUFOOzs7WUFHRWQsTUFBTTlDLE9BQU91QixVQUFQLENBQWtCLElBQWxCLENBQVo7dUJBQ0EsQ0FBZ0JTLGFBQWhCLENBQThCYyxHQUE5QixFQUFtQzhJLE1BQW5DLEVBQTJDLEtBQUtILFNBQWhEOztZQUVJVSxNQUFKLENBQVcsQ0FBWCxFQUFjbE0sS0FBSyxDQUFMLElBQVUsQ0FBeEI7WUFDSW1NLE1BQUosQ0FBV25NLEtBQUssQ0FBTCxDQUFYLEVBQW9CQSxLQUFLLENBQUwsSUFBVSxDQUE5QjtZQUNJb00sTUFBSjs7ZUFFTztzQkFDUXJNLE1BRFI7c0JBRVEsSUFBSVgsY0FBSixDQUFtQixDQUFuQixFQUFzQixDQUF0QjtTQUZmOzs7d0JBV0o0TSw2QkFBU0wsUUFBUUgsV0FBVztZQUNwQnBKLElBQUksQ0FBUjtZQUFXQyxJQUFJLENBQWY7WUFDTWdLLFlBQVlWLE9BQU8sZUFBUCxDQUFsQjtZQUNJVSxTQUFKLEVBQWU7aUJBQ04sSUFBSWhJLElBQUksQ0FBYixFQUFnQkEsSUFBSWdJLFVBQVV6TixNQUE5QixFQUFzQ3lGLEdBQXRDLEVBQTJDO3FCQUNsQ2dJLFVBQVVoSSxDQUFWLENBQUw7OztnQkFNQWdJLFVBQVV6TixNQUFWLEdBQW1CLENBQW5CLEtBQXlCLENBQTdCLEVBQWdDO3FCQUN2QixDQUFMOztnQkFFQytNLE9BQU8sV0FBUCxLQUF1QixJQUF2QixHQUE4QixDQUE5QixHQUFrQ0EsT0FBTyxXQUFQLENBQXZDOztZQUVBQSxPQUFPLGlCQUFQLENBQUosRUFBK0I7Z0JBQ3JCekYsUUFBUXNGLFVBQVVjLFFBQVYsQ0FBbUJYLE9BQU8saUJBQVAsQ0FBbkIsQ0FBZDtnQkFDSXpGLE1BQU0vRSxLQUFOLEdBQWNpQixDQUFsQixFQUFxQjtvQkFDYjhELE1BQU0vRSxLQUFWOztnQkFFQStFLE1BQU05RSxNQUFOLEdBQWVpQixDQUFuQixFQUFzQjtvQkFDZDZELE1BQU05RSxNQUFWOzs7ZUFHRCxDQUFDZ0IsQ0FBRCxFQUFJQyxDQUFKLENBQVA7Ozt3QkFHSjRKLHVDQUFjak0sTUFBTTtZQUNaLEtBQUtiLE9BQUwsQ0FBYSxhQUFiLENBQUosRUFBaUM7bUJBQ3RCLElBQUksS0FBS0EsT0FBTCxDQUFhLGFBQWIsQ0FBSixDQUFnQ2EsS0FBSyxDQUFMLENBQWhDLEVBQXlDQSxLQUFLLENBQUwsQ0FBekMsQ0FBUDs7WUFFQyxPQUFPdU0sUUFBUixLQUFzQixXQUExQixFQUF1QztnQkFDN0J4TSxTQUFTd00sU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO21CQUNPckwsS0FBUCxHQUFlbkIsS0FBSyxDQUFMLENBQWY7bUJBQ09vQixNQUFQLEdBQWdCcEIsS0FBSyxDQUFMLENBQWhCO21CQUNPRCxNQUFQOztlQUVHLElBQVA7Ozs7OztBQ2pHUixjQUFpQjBNLE9BQWpCOztBQWNBLFNBQVNBLE9BQVQsQ0FBZTNSLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO1NBQ1pELENBQUwsR0FBU0EsQ0FBVDtTQUNLQyxDQUFMLEdBQVNBLENBQVQ7OztBQUdKMFIsUUFBTUMsU0FBTixHQUFrQjtXQU9QLGlCQUFXO2VBQVMsSUFBSUQsT0FBSixDQUFVLEtBQUszUixDQUFmLEVBQWtCLEtBQUtDLENBQXZCLENBQVA7S0FQTjs7U0FlTCxhQUFTNFIsQ0FBVCxFQUFZO2VBQVMsS0FBS3RPLEtBQUwsR0FBYXVPLElBQWIsQ0FBa0JELENBQWxCLENBQVA7S0FmVDs7U0F1QkwsYUFBU0EsQ0FBVCxFQUFZO2VBQVMsS0FBS3RPLEtBQUwsR0FBYXdPLElBQWIsQ0FBa0JGLENBQWxCLENBQVA7S0F2QlQ7O2lCQStCRSxxQkFBU0EsQ0FBVCxFQUFZO2VBQVMsS0FBS3RPLEtBQUwsR0FBYXlPLFlBQWIsQ0FBMEJILENBQTFCLENBQVA7S0EvQmhCOztnQkF1Q0Usb0JBQVNBLENBQVQsRUFBWTtlQUFTLEtBQUt0TyxLQUFMLEdBQWEwTyxXQUFiLENBQXlCSixDQUF6QixDQUFQO0tBdkNoQjs7VUErQ0wsY0FBU0ssQ0FBVCxFQUFZO2VBQVMsS0FBSzNPLEtBQUwsR0FBYTRPLEtBQWIsQ0FBbUJELENBQW5CLENBQVA7S0EvQ1Q7O1NBdURMLGFBQVNBLENBQVQsRUFBWTtlQUFTLEtBQUszTyxLQUFMLEdBQWE2TyxJQUFiLENBQWtCRixDQUFsQixDQUFQO0tBdkRUOztZQStETCxnQkFBUzVULENBQVQsRUFBWTtlQUFTLEtBQUtpRixLQUFMLEdBQWE4TyxPQUFiLENBQXFCL1QsQ0FBckIsQ0FBUDtLQS9EVDs7a0JBd0VDLHNCQUFTQSxDQUFULEVBQVd1VCxDQUFYLEVBQWM7ZUFBUyxLQUFLdE8sS0FBTCxHQUFhK08sYUFBYixDQUEyQmhVLENBQTNCLEVBQTZCdVQsQ0FBN0IsQ0FBUDtLQXhFakI7O2FBK0VMLGlCQUFTL0UsQ0FBVCxFQUFZO2VBQVMsS0FBS3ZKLEtBQUwsR0FBYWdQLFFBQWIsQ0FBc0J6RixDQUF0QixDQUFQO0tBL0VUOztVQXdGTCxnQkFBVztlQUFTLEtBQUt2SixLQUFMLEdBQWFpUCxLQUFiLEVBQVA7S0F4RlI7O1VBZ0dMLGdCQUFXO2VBQVMsS0FBS2pQLEtBQUwsR0FBYWtQLEtBQWIsRUFBUDtLQWhHUjs7V0F1R0wsaUJBQVc7ZUFBUyxLQUFLbFAsS0FBTCxHQUFhcUwsTUFBYixFQUFQO0tBdkdSOztTQStHVCxlQUFXO2VBQ0xyTyxLQUFLcUMsSUFBTCxDQUFVLEtBQUs1QyxDQUFMLEdBQVMsS0FBS0EsQ0FBZCxHQUFrQixLQUFLQyxDQUFMLEdBQVMsS0FBS0EsQ0FBMUMsQ0FBUDtLQWhIVTs7WUF5SE4sZ0JBQVN5UyxLQUFULEVBQWdCO2VBQ2IsS0FBSzFTLENBQUwsS0FBVzBTLE1BQU0xUyxDQUFqQixJQUNBLEtBQUtDLENBQUwsS0FBV3lTLE1BQU16UyxDQUR4QjtLQTFIVTs7VUFtSVIsY0FBUzRSLENBQVQsRUFBWTtlQUNQdFIsS0FBS3FDLElBQUwsQ0FBVSxLQUFLK1AsT0FBTCxDQUFhZCxDQUFiLENBQVYsQ0FBUDtLQXBJVTs7YUE4SUwsaUJBQVNBLENBQVQsRUFBWTtZQUNiekosS0FBS3lKLEVBQUU3UixDQUFGLEdBQU0sS0FBS0EsQ0FBcEI7WUFDSXFJLEtBQUt3SixFQUFFNVIsQ0FBRixHQUFNLEtBQUtBLENBRHBCO2VBRU9tSSxLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQXRCO0tBakpVOztXQXlKUCxpQkFBVztlQUNQOUgsS0FBS3FTLEtBQUwsQ0FBVyxLQUFLM1MsQ0FBaEIsRUFBbUIsS0FBS0QsQ0FBeEIsQ0FBUDtLQTFKVTs7YUFrS0wsaUJBQVN2QixDQUFULEVBQVk7ZUFDVjhCLEtBQUtxUyxLQUFMLENBQVcsS0FBSzNTLENBQUwsR0FBU3hCLEVBQUV3QixDQUF0QixFQUF5QixLQUFLRCxDQUFMLEdBQVN2QixFQUFFdUIsQ0FBcEMsQ0FBUDtLQW5LVTs7ZUEyS0gsbUJBQVN2QixDQUFULEVBQVk7ZUFDWixLQUFLb1UsWUFBTCxDQUFrQnBVLEVBQUV1QixDQUFwQixFQUF1QnZCLEVBQUV3QixDQUF6QixDQUFQO0tBNUtVOztrQkFzTEEsc0JBQVNELENBQVQsRUFBWUMsQ0FBWixFQUFlO2VBQ2xCTSxLQUFLcVMsS0FBTCxDQUNILEtBQUs1UyxDQUFMLEdBQVNDLENBQVQsR0FBYSxLQUFLQSxDQUFMLEdBQVNELENBRG5CLEVBRUgsS0FBS0EsQ0FBTCxHQUFTQSxDQUFULEdBQWEsS0FBS0MsQ0FBTCxHQUFTQSxDQUZuQixDQUFQO0tBdkxVOztjQTRMSixrQkFBUzZNLENBQVQsRUFBWTtZQUNkOU0sSUFBSThNLEVBQUUsQ0FBRixJQUFPLEtBQUs5TSxDQUFaLEdBQWdCOE0sRUFBRSxDQUFGLElBQU8sS0FBSzdNLENBQXBDO1lBQ0lBLElBQUk2TSxFQUFFLENBQUYsSUFBTyxLQUFLOU0sQ0FBWixHQUFnQjhNLEVBQUUsQ0FBRixJQUFPLEtBQUs3TSxDQURwQzthQUVLRCxDQUFMLEdBQVNBLENBQVQ7YUFDS0MsQ0FBTCxHQUFTQSxDQUFUO2VBQ08sSUFBUDtLQWpNVTs7VUFvTVIsY0FBUzRSLENBQVQsRUFBWTthQUNUN1IsQ0FBTCxJQUFVNlIsRUFBRTdSLENBQVo7YUFDS0MsQ0FBTCxJQUFVNFIsRUFBRTVSLENBQVo7ZUFDTyxJQUFQO0tBdk1VOztVQTBNUixjQUFTNFIsQ0FBVCxFQUFZO2FBQ1Q3UixDQUFMLElBQVU2UixFQUFFN1IsQ0FBWjthQUNLQyxDQUFMLElBQVU0UixFQUFFNVIsQ0FBWjtlQUNPLElBQVA7S0E3TVU7O1dBZ05QLGVBQVNpUyxDQUFULEVBQVk7YUFDVmxTLENBQUwsSUFBVWtTLENBQVY7YUFDS2pTLENBQUwsSUFBVWlTLENBQVY7ZUFDTyxJQUFQO0tBbk5VOztVQXNOUixjQUFTQSxDQUFULEVBQVk7YUFDVGxTLENBQUwsSUFBVWtTLENBQVY7YUFDS2pTLENBQUwsSUFBVWlTLENBQVY7ZUFDTyxJQUFQO0tBek5VOztrQkE0TkEsc0JBQVNMLENBQVQsRUFBWTthQUNqQjdSLENBQUwsSUFBVTZSLEVBQUU3UixDQUFaO2FBQ0tDLENBQUwsSUFBVTRSLEVBQUU1UixDQUFaO2VBQ08sSUFBUDtLQS9OVTs7aUJBa09ELHFCQUFTNFIsQ0FBVCxFQUFZO2FBQ2hCN1IsQ0FBTCxJQUFVNlIsRUFBRTdSLENBQVo7YUFDS0MsQ0FBTCxJQUFVNFIsRUFBRTVSLENBQVo7ZUFDTyxJQUFQO0tBck9VOztXQXdPUCxpQkFBVzthQUNUbVMsSUFBTCxDQUFVLEtBQUtVLEdBQUwsRUFBVjtlQUNPLElBQVA7S0ExT1U7O1dBNk9QLGlCQUFXO1lBQ1Y3UyxJQUFJLEtBQUtBLENBQWI7YUFDS0EsQ0FBTCxHQUFTLEtBQUtELENBQWQ7YUFDS0EsQ0FBTCxHQUFTLENBQUNDLENBQVY7ZUFDTyxJQUFQO0tBalBVOzthQW9QTCxpQkFBUzhTLEtBQVQsRUFBZ0I7WUFDakJyUyxNQUFNSCxLQUFLRyxHQUFMLENBQVNxUyxLQUFULENBQVY7WUFDSXZTLE1BQU1ELEtBQUtDLEdBQUwsQ0FBU3VTLEtBQVQsQ0FEVjtZQUVJL1MsSUFBSVUsTUFBTSxLQUFLVixDQUFYLEdBQWVRLE1BQU0sS0FBS1AsQ0FGbEM7WUFHSUEsSUFBSU8sTUFBTSxLQUFLUixDQUFYLEdBQWVVLE1BQU0sS0FBS1QsQ0FIbEM7YUFJS0QsQ0FBTCxHQUFTQSxDQUFUO2FBQ0tDLENBQUwsR0FBU0EsQ0FBVDtlQUNPLElBQVA7S0EzUFU7O21CQThQQyx1QkFBUzhTLEtBQVQsRUFBZ0JsQixDQUFoQixFQUFtQjtZQUMxQm5SLE1BQU1ILEtBQUtHLEdBQUwsQ0FBU3FTLEtBQVQsQ0FBVjtZQUNJdlMsTUFBTUQsS0FBS0MsR0FBTCxDQUFTdVMsS0FBVCxDQURWO1lBRUkvUyxJQUFJNlIsRUFBRTdSLENBQUYsR0FBTVUsT0FBTyxLQUFLVixDQUFMLEdBQVM2UixFQUFFN1IsQ0FBbEIsQ0FBTixHQUE2QlEsT0FBTyxLQUFLUCxDQUFMLEdBQVM0UixFQUFFNVIsQ0FBbEIsQ0FGckM7WUFHSUEsSUFBSTRSLEVBQUU1UixDQUFGLEdBQU1PLE9BQU8sS0FBS1IsQ0FBTCxHQUFTNlIsRUFBRTdSLENBQWxCLENBQU4sR0FBNkJVLE9BQU8sS0FBS1QsQ0FBTCxHQUFTNFIsRUFBRTVSLENBQWxCLENBSHJDO2FBSUtELENBQUwsR0FBU0EsQ0FBVDthQUNLQyxDQUFMLEdBQVNBLENBQVQ7ZUFDTyxJQUFQO0tBclFVOztZQXdRTixrQkFBVzthQUNWRCxDQUFMLEdBQVNPLEtBQUt5UyxLQUFMLENBQVcsS0FBS2hULENBQWhCLENBQVQ7YUFDS0MsQ0FBTCxHQUFTTSxLQUFLeVMsS0FBTCxDQUFXLEtBQUsvUyxDQUFoQixDQUFUO2VBQ08sSUFBUDs7Q0EzUVI7O0FBMFJBMFIsUUFBTXNCLE9BQU4sR0FBZ0IsVUFBVTNVLENBQVYsRUFBYTtRQUNyQkEsYUFBYXFULE9BQWpCLEVBQXdCO2VBQ2JyVCxDQUFQOztRQUVBMkssTUFBTUMsT0FBTixDQUFjNUssQ0FBZCxDQUFKLEVBQXNCO2VBQ1gsSUFBSXFULE9BQUosQ0FBVXJULEVBQUUsQ0FBRixDQUFWLEVBQWdCQSxFQUFFLENBQUYsQ0FBaEIsQ0FBUDs7V0FFR0EsQ0FBUDtDQVBKOztBQzFTQSxJQUFNK0YsVUFBVTtlQUNBO0NBRGhCOztJQW9CcUI2Tzs7O3lCQUVML08sRUFBWixFQUFnQkMsR0FBaEIsRUFBcUJDLE9BQXJCLEVBQThCOzs7b0RBQzFCLG9CQUFNRixFQUFOLEVBQVVDLEdBQVYsRUFBZUMsT0FBZixDQUQwQjs7Y0FJckI4TyxXQUFMLEdBQW1CLEVBQW5CO2NBQ0tDLFdBQUwsR0FBbUIsRUFBbkI7Y0FDS0MsWUFBTCxHQUFvQixFQUFwQjtjQUNLQyxVQUFMLEdBQWtCLEVBQWxCOzs7Y0FHS0MsUUFBTCxHQUFnQixDQUFoQjs7OzswQkFPSkMsaUNBQVk7ZUFDRDsyQkFDYyxLQUFLTCxXQURuQjsyQkFFYyxLQUFLQyxXQUZuQjs0QkFHYyxLQUFLQyxZQUhuQjswQkFJYyxLQUFLQztTQUoxQjs7OzBCQW1CSkcsMkJBQVFDLE1BQU1DLE9BQU87WUFDYixDQUFDRCxJQUFMLEVBQVc7bUJBQ0EsSUFBUDs7WUFFQUMsTUFBTTlDLE1BQU4sQ0FBYSxXQUFiLEtBQTZCLENBQTdCLElBQWtDOEMsTUFBTTlDLE1BQU4sQ0FBYSxhQUFiLEtBQStCLENBQXJFLEVBQXdFO21CQUM3RCxJQUFQOzs7WUFHRStDLGVBQWUsS0FBS1QsV0FBTCxDQUFpQnJQLE1BQXRDOztZQUVNK1AsVUFBVSxLQUFLQyxXQUFMLENBQWlCSixJQUFqQixDQUFoQjs7WUFHSUcsUUFBUSxDQUFSLEtBQWM1SyxNQUFNQyxPQUFOLENBQWMySyxRQUFRLENBQVIsRUFBVyxDQUFYLENBQWQsQ0FBbEIsRUFBZ0Q7aUJBQ3ZDLElBQUl0SyxJQUFJLENBQVIsRUFBV3dLLElBQUlGLFFBQVEvUCxNQUE1QixFQUFvQ3lGLElBQUl3SyxDQUF4QyxFQUEyQ3hLLEdBQTNDLEVBQWdEO3FCQUN2Q2tLLE9BQUwsQ0FBYUksUUFBUXRLLENBQVIsQ0FBYixFQUF5Qm9LLEtBQXpCOzttQkFFRyxJQUFQOzs7YUFHQ0ssYUFBTDs7WUFFTXRHLFVBQVVuSixjQUFjLEtBQUtILEdBQW5CLENBQWhCOztZQUdJNlAsc0JBQUo7WUFBbUJDLG1CQUFuQjthQUNLLElBQUkzSyxLQUFJLENBQVIsRUFBV3dLLEtBQUlGLFFBQVEvUCxNQUE1QixFQUFvQ3lGLEtBQUl3SyxFQUF4QyxFQUEyQ3hLLElBQTNDLEVBQWdEO2dCQUN4QzRLLFNBQVNOLFFBQVF0SyxFQUFSLENBQWI7Z0JBQ0ksS0FBS2xGLE9BQUwsQ0FBYSxTQUFiLENBQUosRUFBNkI7eUJBRWhCLEtBQUtELEdBQUwsQ0FBU3lKLGlCQUFULENBQTJCLElBQUl2SixtQkFBSixDQUF3QjZQLE1BQXhCLENBQTNCLEVBQTREekcsT0FBNUQsRUFBcUUwRyxPQUFyRSxFQUFUOzs0QkFFWXpDLFFBQU1zQixPQUFOLENBQWNrQixNQUFkLENBQWhCO2dCQUNJNUssS0FBSXdLLEtBQUksQ0FBWixFQUFlO3lCQUNGRixRQUFRdEssS0FBSSxDQUFaLENBQVQ7b0JBQ0ksS0FBS2xGLE9BQUwsQ0FBYSxTQUFiLENBQUosRUFBNkI7NkJBQ2hCLEtBQUtELEdBQUwsQ0FBU3lKLGlCQUFULENBQTJCLElBQUl2SixtQkFBSixDQUF3QjZQLE1BQXhCLENBQTNCLEVBQTREekcsT0FBNUQsRUFBcUUwRyxPQUFyRSxFQUFUOzs2QkFFU3pDLFFBQU1zQixPQUFOLENBQWNrQixNQUFkLENBQWI7YUFMSixNQU1POzZCQUNVLElBQWI7O2lCQUVDRSxnQkFBTCxDQUFzQkosYUFBdEIsRUFBcUNDLFVBQXJDOzs7WUFHRUksUUFBUSxLQUFLbkIsV0FBTCxDQUFpQnJQLE1BQWpCLEdBQTBCOFAsWUFBeEM7O2FBRUtXLGFBQUwsQ0FBbUJELEtBQW5CLEVBQTBCWCxLQUExQjtlQUNPLElBQVA7OzswQkFzQkpVLDZDQUFpQkosZUFBZUMsWUFBWTtZQUNwQyxDQUFDLEtBQUtNLFNBQVYsRUFBcUI7aUJBRVpDLEVBQUwsR0FBVSxLQUFLQyxFQUFMLEdBQVUsS0FBS0MsRUFBTCxHQUFVLENBQUMsQ0FBL0I7O2lCQUdLQyxlQUFMLEdBQXVCLElBQXZCO2lCQUNLSixTQUFMLEdBQWlCUCxhQUFqQjs7OztZQW1CRVksU0FBU1osY0FBY2EsR0FBZCxDQUFrQixLQUFLTixTQUF2QixFQUFrQ2hDLEtBQWxDLEdBQTBDQyxLQUExQyxHQUFrRE4sS0FBbEQsQ0FBd0QsQ0FBQyxDQUF6RCxDQUFmOztZQUVJNEMsbUJBQUo7WUFDSWIsVUFBSixFQUFnQjt5QkFDQ0EsV0FBV1ksR0FBWCxDQUFlYixhQUFmLEVBQThCekIsS0FBOUIsR0FBc0NDLEtBQXRDLEdBQThDTixLQUE5QyxDQUFvRCxDQUFDLENBQXJELENBQWI7OztZQUdFNkMsZ0JBQWdCLEtBQUtDLGVBQUwsQ0FBcUJKLE1BQXJCLEVBQTZCLEtBQUtLLFNBQWxDLENBQXRCOzthQUlLQyxrQkFBTCxDQUF3QixLQUFLWCxTQUE3QixFQUF3Q1EsYUFBeEMsRUFBdUQsS0FBS3pCLFFBQTVEOzthQUdLQSxRQUFMLElBQWlCVSxjQUFjOUYsSUFBZCxDQUFtQixLQUFLcUcsU0FBeEIsQ0FBakI7O1lBRUksQ0FBQ04sVUFBTCxFQUFpQjtnQkFFUGtCLFlBQVksS0FBS0MsYUFBTCxDQUFtQlIsTUFBbkIsRUFBMkJFLFVBQTNCLENBQWxCO2lCQUNLSSxrQkFBTCxDQUF3QmxCLGFBQXhCLEVBQXVDbUIsU0FBdkMsRUFBa0QsS0FBSzdCLFFBQXZEOzs7YUFJQzJCLFNBQUwsR0FBaUJMLE1BQWpCO2FBQ0tMLFNBQUwsR0FBaUJQLGFBQWpCOzs7MEJBTUpELHlDQUFnQjthQUNQVCxRQUFMLEdBQWdCLENBQWhCOztlQUVPLEtBQUtpQixTQUFaO2VBQ08sS0FBS1UsU0FBWjs7OzBCQVVKQyxpREFBbUJoQixRQUFRbUIsWUFBWUMsV0FBVztZQUUxQ0MsVUFBVUYsV0FBV1QsTUFBWCxDQUFrQixDQUFsQixDQUFkOzthQUVLRixFQUFMLEdBQVUsS0FBS2MsVUFBTCxDQUFnQnRCLE1BQWhCLEVBQXdCcUIsT0FBeEIsRUFBaUNELFNBQWpDLENBQVY7WUFDSSxLQUFLZCxFQUFMLElBQVcsQ0FBWCxJQUFnQixLQUFLQyxFQUFMLElBQVcsQ0FBL0IsRUFBa0M7aUJBRXpCckIsWUFBTCxDQUFrQjdLLElBQWxCLENBQXVCLEtBQUtpTSxFQUE1QixFQUFnQyxLQUFLQyxFQUFyQyxFQUF5QyxLQUFLQyxFQUE5Qzs7YUFFQ0YsRUFBTCxHQUFVLEtBQUtDLEVBQWY7YUFDS0EsRUFBTCxHQUFVLEtBQUtDLEVBQWY7O2tCQUdVVyxXQUFXVCxNQUFYLENBQWtCLENBQWxCLENBQVY7O2FBRUtGLEVBQUwsR0FBVSxLQUFLYyxVQUFMLENBQWdCdEIsTUFBaEIsRUFBd0JxQixPQUF4QixFQUFpQ0QsU0FBakMsQ0FBVjtZQUNJLEtBQUtkLEVBQUwsSUFBVyxDQUFYLElBQWdCLEtBQUtDLEVBQUwsSUFBVyxDQUEvQixFQUFrQztpQkFFekJyQixZQUFMLENBQWtCN0ssSUFBbEIsQ0FBdUIsS0FBS2lNLEVBQTVCLEVBQWdDLEtBQUtDLEVBQXJDLEVBQXlDLEtBQUtDLEVBQTlDOzthQUVDRixFQUFMLEdBQVUsS0FBS0MsRUFBZjthQUNLQSxFQUFMLEdBQVUsS0FBS0MsRUFBZjs7OzBCQVFKYyxpQ0FBV3hCLGVBQWVZLFFBQVFVLFdBQVc7YUFFcENwQyxXQUFMLENBQWlCM0ssSUFBakIsQ0FBc0J5TCxjQUFjalUsQ0FBcEMsRUFBdUNpVSxjQUFjaFUsQ0FBckQ7O1lBRU15VixVQUFVLENBQUMsS0FBS0MsUUFBTCxDQUFjZCxPQUFPN1UsQ0FBckIsQ0FBRCxFQUEwQixLQUFLMlYsUUFBTCxDQUFjZCxPQUFPNVUsQ0FBckIsQ0FBMUIsRUFBbURzVixTQUFuRCxDQUFoQjtZQUNNSyxJQUFJLEtBQUt4QyxXQUFMLENBQWlCdFAsTUFBakIsR0FBMEI0UixRQUFRNVIsTUFBNUM7cUJBQ0EsQ0FBYytSLE1BQWQsQ0FBcUIsS0FBS3pDLFdBQTFCLEVBQXVDc0MsT0FBdkM7ZUFDT0UsQ0FBUDs7OzBCQUlKOUIsbUNBQVlKLE1BQU07WUFDVkEsS0FBS29DLFFBQVQsRUFBbUI7bUJBRVJwQyxLQUFLb0MsUUFBTCxDQUFjQyxXQUFyQjtTQUZKLE1BR08sSUFBSXJDLEtBQUtxQyxXQUFULEVBQXNCO21CQUVsQnJDLEtBQUtxQyxXQUFaOztlQUVHckMsSUFBUDs7OzBCQVFKYSx1Q0FBY3FCLEdBQUdqQyxPQUFPO1lBRWhCNVQsSUFBSSxDQUFDNFQsTUFBTTlDLE1BQU4sQ0FBYSxXQUFiLEtBQTZCLENBQTlCLElBQW1DLENBQW5DLEdBQXVDLEdBQXZDLEdBQTZDLENBQUM4QyxNQUFNOUMsTUFBTixDQUFhLGFBQWIsS0FBK0IsQ0FBaEMsSUFBcUMsRUFBMUY7O1lBRUk5USxJQUFJLEtBQUosR0FBWTRULE1BQU1xQyxLQUF0QjthQUNLLElBQUl6TSxJQUFJLENBQWIsRUFBZ0JBLElBQUlxTSxDQUFwQixFQUF1QnJNLEdBQXZCLEVBQTRCO2lCQUNuQitKLFVBQUwsQ0FBZ0I5SyxJQUFoQixDQUFxQnpJLENBQXJCOzs7OzBCQVVSa1YsMkNBQWdCSixRQUFRSyxXQUFXO2VBQ3hCLEtBQUtlLGNBQUwsQ0FBb0JwQixNQUFwQixFQUE0QkssU0FBNUIsRUFBdUNMLE1BQXZDLENBQVA7OzswQkFHSlEsdUNBQWNSLFFBQVFFLFlBQVk7ZUFDdkIsS0FBS2tCLGNBQUwsQ0FBb0JwQixNQUFwQixFQUE0QkEsTUFBNUIsRUFBb0NFLFVBQXBDLENBQVA7OzswQkFHSmtCLHlDQUFlQyxlQUFlaEIsV0FBV0wsUUFBUTtZQUN6QyxDQUFDSyxTQUFELElBQWMsQ0FBQ0wsTUFBbkIsRUFBMkI7bUJBQ2hCOzBCQUNRLENBQUNxQixhQUFELEVBQWdCQSxjQUFjQyxJQUFkLENBQW1CLENBQUMsQ0FBcEIsQ0FBaEI7YUFEZjs7WUFJRWIsYUFBYUosVUFBVXpSLEdBQVYsQ0FBY29SLE1BQWQsRUFBc0JyQyxLQUF0QixFQUFuQjtZQUNNNEQsZUFBZWQsV0FBV3RWLENBQVgsR0FBZTZVLE9BQU83VSxDQUF0QixHQUEwQnNWLFdBQVdyVixDQUFYLEdBQWU0VSxPQUFPNVUsQ0FBckU7WUFDTW9XLGNBQWMsSUFBSUQsWUFBeEI7bUJBQ1dqRSxLQUFYLENBQWlCa0UsV0FBakI7ZUFDTztzQkFDUSxDQUFDZixVQUFELEVBQWFBLFdBQVdhLElBQVgsQ0FBZ0IsQ0FBQyxDQUFqQixDQUFiO1NBRGY7OzswQkFLSlIsNkJBQVMxVSxHQUFHO2VBQ0RWLEtBQUt5UyxLQUFMLENBQVcvUixJQUFJLEdBQWYsSUFBc0IsR0FBN0I7Ozs7RUFuUmlDaUQ7O0FBdVJ6Q2dQLFlBQVlvRCxZQUFaLENBQXlCalMsT0FBekI7O0FDOVNBLGVBQWlCa1MsTUFBakI7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLFdBQXRCLEVBQW1DQyxHQUFuQyxFQUF3Qzs7VUFFOUJBLE9BQU8sQ0FBYjs7UUFFSUMsV0FBV0YsZUFBZUEsWUFBWTNTLE1BQTFDO1FBQ0k4UyxXQUFXRCxXQUFXRixZQUFZLENBQVosSUFBaUJDLEdBQTVCLEdBQWtDRixLQUFLMVMsTUFEdEQ7UUFFSStTLFlBQVlDLFdBQVdOLElBQVgsRUFBaUIsQ0FBakIsRUFBb0JJLFFBQXBCLEVBQThCRixHQUE5QixFQUFtQyxJQUFuQyxDQUZoQjtRQUdJSyxZQUFZLEVBSGhCOztRQUtJLENBQUNGLFNBQUwsRUFBZ0IsT0FBT0UsU0FBUDs7UUFFWkMsSUFBSixFQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQkMsSUFBdEIsRUFBNEJuWCxDQUE1QixFQUErQkMsQ0FBL0IsRUFBa0NpRixJQUFsQzs7UUFFSXlSLFFBQUosRUFBY0UsWUFBWU8sZUFBZVosSUFBZixFQUFxQkMsV0FBckIsRUFBa0NJLFNBQWxDLEVBQTZDSCxHQUE3QyxDQUFaOztRQUdWRixLQUFLMVMsTUFBTCxHQUFjLEtBQUs0UyxHQUF2QixFQUE0QjtlQUNqQlEsT0FBT1YsS0FBSyxDQUFMLENBQWQ7ZUFDT1csT0FBT1gsS0FBSyxDQUFMLENBQWQ7O2FBRUssSUFBSWpOLElBQUltTixHQUFiLEVBQWtCbk4sSUFBSXFOLFFBQXRCLEVBQWdDck4sS0FBS21OLEdBQXJDLEVBQTBDO2dCQUNsQ0YsS0FBS2pOLENBQUwsQ0FBSjtnQkFDSWlOLEtBQUtqTixJQUFJLENBQVQsQ0FBSjtnQkFDSXZKLElBQUlnWCxJQUFSLEVBQWNBLE9BQU9oWCxDQUFQO2dCQUNWQyxJQUFJZ1gsSUFBUixFQUFjQSxPQUFPaFgsQ0FBUDtnQkFDVkQsSUFBSWtYLElBQVIsRUFBY0EsT0FBT2xYLENBQVA7Z0JBQ1ZDLElBQUlrWCxJQUFSLEVBQWNBLE9BQU9sWCxDQUFQOzs7ZUFJWE0sS0FBS2tILEdBQUwsQ0FBU3lQLE9BQU9GLElBQWhCLEVBQXNCRyxPQUFPRixJQUE3QixDQUFQOzs7aUJBR1NKLFNBQWIsRUFBd0JFLFNBQXhCLEVBQW1DTCxHQUFuQyxFQUF3Q00sSUFBeEMsRUFBOENDLElBQTlDLEVBQW9EL1IsSUFBcEQ7O1dBRU82UixTQUFQOzs7QUFJSixTQUFTRCxVQUFULENBQW9CTixJQUFwQixFQUEwQmEsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDWixHQUF0QyxFQUEyQ2EsU0FBM0MsRUFBc0Q7UUFDOUNoTyxDQUFKLEVBQU9pTyxJQUFQOztRQUVJRCxjQUFlRSxXQUFXakIsSUFBWCxFQUFpQmEsS0FBakIsRUFBd0JDLEdBQXhCLEVBQTZCWixHQUE3QixJQUFvQyxDQUF2RCxFQUEyRDthQUNsRG5OLElBQUk4TixLQUFULEVBQWdCOU4sSUFBSStOLEdBQXBCLEVBQXlCL04sS0FBS21OLEdBQTlCO21CQUEwQ2dCLFdBQVduTyxDQUFYLEVBQWNpTixLQUFLak4sQ0FBTCxDQUFkLEVBQXVCaU4sS0FBS2pOLElBQUksQ0FBVCxDQUF2QixFQUFvQ2lPLElBQXBDLENBQVA7O0tBRHZDLE1BRU87YUFDRWpPLElBQUkrTixNQUFNWixHQUFmLEVBQW9Cbk4sS0FBSzhOLEtBQXpCLEVBQWdDOU4sS0FBS21OLEdBQXJDO21CQUFpRGdCLFdBQVduTyxDQUFYLEVBQWNpTixLQUFLak4sQ0FBTCxDQUFkLEVBQXVCaU4sS0FBS2pOLElBQUksQ0FBVCxDQUF2QixFQUFvQ2lPLElBQXBDLENBQVA7Ozs7UUFHMUNBLFFBQVF2VCxTQUFPdVQsSUFBUCxFQUFhQSxLQUFLRyxJQUFsQixDQUFaLEVBQXFDO21CQUN0QkgsSUFBWDtlQUNPQSxLQUFLRyxJQUFaOzs7V0FHR0gsSUFBUDs7O0FBSUosU0FBU0ksWUFBVCxDQUFzQlAsS0FBdEIsRUFBNkJDLEdBQTdCLEVBQWtDO1FBQzFCLENBQUNELEtBQUwsRUFBWSxPQUFPQSxLQUFQO1FBQ1IsQ0FBQ0MsR0FBTCxFQUFVQSxNQUFNRCxLQUFOOztRQUVOeEYsSUFBSXdGLEtBQVI7UUFDSVEsS0FESjtPQUVHO2dCQUNTLEtBQVI7O1lBRUksQ0FBQ2hHLEVBQUVpRyxPQUFILEtBQWU3VCxTQUFPNE4sQ0FBUCxFQUFVQSxFQUFFOEYsSUFBWixLQUFxQkksS0FBS2xHLEVBQUVtRyxJQUFQLEVBQWFuRyxDQUFiLEVBQWdCQSxFQUFFOEYsSUFBbEIsTUFBNEIsQ0FBaEUsQ0FBSixFQUF3RTt1QkFDekQ5RixDQUFYO2dCQUNJeUYsTUFBTXpGLEVBQUVtRyxJQUFaO2dCQUNJbkcsTUFBTUEsRUFBRThGLElBQVosRUFBa0IsT0FBTyxJQUFQO29CQUNWLElBQVI7U0FKSixNQU1PO2dCQUNDOUYsRUFBRThGLElBQU47O0tBVlIsUUFZU0UsU0FBU2hHLE1BQU15RixHQVp4Qjs7V0FjT0EsR0FBUDs7O0FBSUosU0FBU1csWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJuQixTQUEzQixFQUFzQ0wsR0FBdEMsRUFBMkNNLElBQTNDLEVBQWlEQyxJQUFqRCxFQUF1RC9SLElBQXZELEVBQTZEaVQsSUFBN0QsRUFBbUU7UUFDM0QsQ0FBQ0QsR0FBTCxFQUFVOztRQUdOLENBQUNDLElBQUQsSUFBU2pULElBQWIsRUFBbUJrVCxXQUFXRixHQUFYLEVBQWdCbEIsSUFBaEIsRUFBc0JDLElBQXRCLEVBQTRCL1IsSUFBNUI7O1FBRWZtVCxPQUFPSCxHQUFYO1FBQ0lGLElBREo7UUFDVUwsSUFEVjs7V0FJT08sSUFBSUYsSUFBSixLQUFhRSxJQUFJUCxJQUF4QixFQUE4QjtlQUNuQk8sSUFBSUYsSUFBWDtlQUNPRSxJQUFJUCxJQUFYOztZQUVJelMsT0FBT29ULFlBQVlKLEdBQVosRUFBaUJsQixJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkIvUixJQUE3QixDQUFQLEdBQTRDcVQsTUFBTUwsR0FBTixDQUFoRCxFQUE0RDtzQkFFOUMxUCxJQUFWLENBQWV3UCxLQUFLek8sQ0FBTCxHQUFTbU4sR0FBeEI7c0JBQ1VsTyxJQUFWLENBQWUwUCxJQUFJM08sQ0FBSixHQUFRbU4sR0FBdkI7c0JBQ1VsTyxJQUFWLENBQWVtUCxLQUFLcE8sQ0FBTCxHQUFTbU4sR0FBeEI7O3VCQUVXd0IsR0FBWDs7a0JBR01QLEtBQUtBLElBQVg7bUJBQ09BLEtBQUtBLElBQVo7Ozs7O2NBS0VBLElBQU47O1lBR0lPLFFBQVFHLElBQVosRUFBa0I7Z0JBRVYsQ0FBQ0YsSUFBTCxFQUFXOzZCQUNNUCxhQUFhTSxHQUFiLENBQWIsRUFBZ0NuQixTQUFoQyxFQUEyQ0wsR0FBM0MsRUFBZ0RNLElBQWhELEVBQXNEQyxJQUF0RCxFQUE0RC9SLElBQTVELEVBQWtFLENBQWxFO2FBREosTUFJTyxJQUFJaVQsU0FBUyxDQUFiLEVBQWdCO3NCQUNiSyx1QkFBdUJOLEdBQXZCLEVBQTRCbkIsU0FBNUIsRUFBdUNMLEdBQXZDLENBQU47NkJBQ2F3QixHQUFiLEVBQWtCbkIsU0FBbEIsRUFBNkJMLEdBQTdCLEVBQWtDTSxJQUFsQyxFQUF3Q0MsSUFBeEMsRUFBOEMvUixJQUE5QyxFQUFvRCxDQUFwRDthQUZHLE1BS0EsSUFBSWlULFNBQVMsQ0FBYixFQUFnQjs0QkFDUEQsR0FBWixFQUFpQm5CLFNBQWpCLEVBQTRCTCxHQUE1QixFQUFpQ00sSUFBakMsRUFBdUNDLElBQXZDLEVBQTZDL1IsSUFBN0M7Ozs7Ozs7O0FBU2hCLFNBQVNxVCxLQUFULENBQWVMLEdBQWYsRUFBb0I7UUFDWjVaLElBQUk0WixJQUFJRixJQUFaO1FBQ0l2WixJQUFJeVosR0FEUjtRQUVJelgsSUFBSXlYLElBQUlQLElBRlo7O1FBSUlJLEtBQUt6WixDQUFMLEVBQVFHLENBQVIsRUFBV2dDLENBQVgsS0FBaUIsQ0FBckIsRUFBd0IsT0FBTyxLQUFQO1FBR3BCb1IsSUFBSXFHLElBQUlQLElBQUosQ0FBU0EsSUFBakI7O1dBRU85RixNQUFNcUcsSUFBSUYsSUFBakIsRUFBdUI7WUFDZlMsZ0JBQWdCbmEsRUFBRTBCLENBQWxCLEVBQXFCMUIsRUFBRTJCLENBQXZCLEVBQTBCeEIsRUFBRXVCLENBQTVCLEVBQStCdkIsRUFBRXdCLENBQWpDLEVBQW9DUSxFQUFFVCxDQUF0QyxFQUF5Q1MsRUFBRVIsQ0FBM0MsRUFBOEM0UixFQUFFN1IsQ0FBaEQsRUFBbUQ2UixFQUFFNVIsQ0FBckQsS0FDQThYLEtBQUtsRyxFQUFFbUcsSUFBUCxFQUFhbkcsQ0FBYixFQUFnQkEsRUFBRThGLElBQWxCLEtBQTJCLENBRC9CLEVBQ2tDLE9BQU8sS0FBUDtZQUM5QjlGLEVBQUU4RixJQUFOOzs7V0FHRyxJQUFQOzs7QUFHSixTQUFTVyxXQUFULENBQXFCSixHQUFyQixFQUEwQmxCLElBQTFCLEVBQWdDQyxJQUFoQyxFQUFzQy9SLElBQXRDLEVBQTRDO1FBQ3BDNUcsSUFBSTRaLElBQUlGLElBQVo7UUFDSXZaLElBQUl5WixHQURSO1FBRUl6WCxJQUFJeVgsSUFBSVAsSUFGWjs7UUFJSUksS0FBS3paLENBQUwsRUFBUUcsQ0FBUixFQUFXZ0MsQ0FBWCxLQUFpQixDQUFyQixFQUF3QixPQUFPLEtBQVA7UUFHcEJpWSxRQUFRcGEsRUFBRTBCLENBQUYsR0FBTXZCLEVBQUV1QixDQUFSLEdBQWExQixFQUFFMEIsQ0FBRixHQUFNUyxFQUFFVCxDQUFSLEdBQVkxQixFQUFFMEIsQ0FBZCxHQUFrQlMsRUFBRVQsQ0FBakMsR0FBdUN2QixFQUFFdUIsQ0FBRixHQUFNUyxFQUFFVCxDQUFSLEdBQVl2QixFQUFFdUIsQ0FBZCxHQUFrQlMsRUFBRVQsQ0FBdkU7UUFDSTJZLFFBQVFyYSxFQUFFMkIsQ0FBRixHQUFNeEIsRUFBRXdCLENBQVIsR0FBYTNCLEVBQUUyQixDQUFGLEdBQU1RLEVBQUVSLENBQVIsR0FBWTNCLEVBQUUyQixDQUFkLEdBQWtCUSxFQUFFUixDQUFqQyxHQUF1Q3hCLEVBQUV3QixDQUFGLEdBQU1RLEVBQUVSLENBQVIsR0FBWXhCLEVBQUV3QixDQUFkLEdBQWtCUSxFQUFFUixDQUR2RTtRQUVJMlksUUFBUXRhLEVBQUUwQixDQUFGLEdBQU12QixFQUFFdUIsQ0FBUixHQUFhMUIsRUFBRTBCLENBQUYsR0FBTVMsRUFBRVQsQ0FBUixHQUFZMUIsRUFBRTBCLENBQWQsR0FBa0JTLEVBQUVULENBQWpDLEdBQXVDdkIsRUFBRXVCLENBQUYsR0FBTVMsRUFBRVQsQ0FBUixHQUFZdkIsRUFBRXVCLENBQWQsR0FBa0JTLEVBQUVULENBRnZFO1FBR0k2WSxRQUFRdmEsRUFBRTJCLENBQUYsR0FBTXhCLEVBQUV3QixDQUFSLEdBQWEzQixFQUFFMkIsQ0FBRixHQUFNUSxFQUFFUixDQUFSLEdBQVkzQixFQUFFMkIsQ0FBZCxHQUFrQlEsRUFBRVIsQ0FBakMsR0FBdUN4QixFQUFFd0IsQ0FBRixHQUFNUSxFQUFFUixDQUFSLEdBQVl4QixFQUFFd0IsQ0FBZCxHQUFrQlEsRUFBRVIsQ0FIdkU7O1FBTUk2WSxPQUFPQyxPQUFPTCxLQUFQLEVBQWNDLEtBQWQsRUFBcUIzQixJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUMvUixJQUFqQyxDQUFYO1FBQ0k4VCxPQUFPRCxPQUFPSCxLQUFQLEVBQWNDLEtBQWQsRUFBcUI3QixJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUMvUixJQUFqQyxDQURYOztRQUlJMk0sSUFBSXFHLElBQUllLEtBQVo7O1dBRU9wSCxLQUFLQSxFQUFFM1IsQ0FBRixJQUFPOFksSUFBbkIsRUFBeUI7WUFDakJuSCxNQUFNcUcsSUFBSUYsSUFBVixJQUFrQm5HLE1BQU1xRyxJQUFJUCxJQUE1QixJQUNBYyxnQkFBZ0JuYSxFQUFFMEIsQ0FBbEIsRUFBcUIxQixFQUFFMkIsQ0FBdkIsRUFBMEJ4QixFQUFFdUIsQ0FBNUIsRUFBK0J2QixFQUFFd0IsQ0FBakMsRUFBb0NRLEVBQUVULENBQXRDLEVBQXlDUyxFQUFFUixDQUEzQyxFQUE4QzRSLEVBQUU3UixDQUFoRCxFQUFtRDZSLEVBQUU1UixDQUFyRCxDQURBLElBRUE4WCxLQUFLbEcsRUFBRW1HLElBQVAsRUFBYW5HLENBQWIsRUFBZ0JBLEVBQUU4RixJQUFsQixLQUEyQixDQUYvQixFQUVrQyxPQUFPLEtBQVA7WUFDOUI5RixFQUFFb0gsS0FBTjs7O1FBSUFmLElBQUlnQixLQUFSOztXQUVPckgsS0FBS0EsRUFBRTNSLENBQUYsSUFBTzRZLElBQW5CLEVBQXlCO1lBQ2pCakgsTUFBTXFHLElBQUlGLElBQVYsSUFBa0JuRyxNQUFNcUcsSUFBSVAsSUFBNUIsSUFDQWMsZ0JBQWdCbmEsRUFBRTBCLENBQWxCLEVBQXFCMUIsRUFBRTJCLENBQXZCLEVBQTBCeEIsRUFBRXVCLENBQTVCLEVBQStCdkIsRUFBRXdCLENBQWpDLEVBQW9DUSxFQUFFVCxDQUF0QyxFQUF5Q1MsRUFBRVIsQ0FBM0MsRUFBOEM0UixFQUFFN1IsQ0FBaEQsRUFBbUQ2UixFQUFFNVIsQ0FBckQsQ0FEQSxJQUVBOFgsS0FBS2xHLEVBQUVtRyxJQUFQLEVBQWFuRyxDQUFiLEVBQWdCQSxFQUFFOEYsSUFBbEIsS0FBMkIsQ0FGL0IsRUFFa0MsT0FBTyxLQUFQO1lBQzlCOUYsRUFBRXFILEtBQU47OztXQUdHLElBQVA7OztBQUlKLFNBQVNWLHNCQUFULENBQWdDbkIsS0FBaEMsRUFBdUNOLFNBQXZDLEVBQWtETCxHQUFsRCxFQUF1RDtRQUMvQzdFLElBQUl3RixLQUFSO09BQ0c7WUFDSy9ZLElBQUl1VCxFQUFFbUcsSUFBVjtZQUNJdlosSUFBSW9ULEVBQUU4RixJQUFGLENBQU9BLElBRGY7O1lBR0ksQ0FBQzFULFNBQU8zRixDQUFQLEVBQVVHLENBQVYsQ0FBRCxJQUFpQjBhLFdBQVc3YSxDQUFYLEVBQWN1VCxDQUFkLEVBQWlCQSxFQUFFOEYsSUFBbkIsRUFBeUJsWixDQUF6QixDQUFqQixJQUFnRDJhLGNBQWM5YSxDQUFkLEVBQWlCRyxDQUFqQixDQUFoRCxJQUF1RTJhLGNBQWMzYSxDQUFkLEVBQWlCSCxDQUFqQixDQUEzRSxFQUFnRzs7c0JBRWxGa0ssSUFBVixDQUFlbEssRUFBRWlMLENBQUYsR0FBTW1OLEdBQXJCO3NCQUNVbE8sSUFBVixDQUFlcUosRUFBRXRJLENBQUYsR0FBTW1OLEdBQXJCO3NCQUNVbE8sSUFBVixDQUFlL0osRUFBRThLLENBQUYsR0FBTW1OLEdBQXJCOzt1QkFHVzdFLENBQVg7dUJBQ1dBLEVBQUU4RixJQUFiOztnQkFFSU4sUUFBUTVZLENBQVo7O1lBRUFvVCxFQUFFOEYsSUFBTjtLQWhCSixRQWlCUzlGLE1BQU13RixLQWpCZjs7V0FtQk94RixDQUFQOzs7QUFJSixTQUFTd0gsV0FBVCxDQUFxQmhDLEtBQXJCLEVBQTRCTixTQUE1QixFQUF1Q0wsR0FBdkMsRUFBNENNLElBQTVDLEVBQWtEQyxJQUFsRCxFQUF3RC9SLElBQXhELEVBQThEO1FBRXRENUcsSUFBSStZLEtBQVI7T0FDRztZQUNLNVksSUFBSUgsRUFBRXFaLElBQUYsQ0FBT0EsSUFBZjtlQUNPbFosTUFBTUgsRUFBRTBaLElBQWYsRUFBcUI7Z0JBQ2IxWixFQUFFaUwsQ0FBRixLQUFROUssRUFBRThLLENBQVYsSUFBZStQLGdCQUFnQmhiLENBQWhCLEVBQW1CRyxDQUFuQixDQUFuQixFQUEwQztvQkFFbENnQyxJQUFJOFksYUFBYWpiLENBQWIsRUFBZ0JHLENBQWhCLENBQVI7O29CQUdJbVosYUFBYXRaLENBQWIsRUFBZ0JBLEVBQUVxWixJQUFsQixDQUFKO29CQUNJQyxhQUFhblgsQ0FBYixFQUFnQkEsRUFBRWtYLElBQWxCLENBQUo7OzZCQUdhclosQ0FBYixFQUFnQnlZLFNBQWhCLEVBQTJCTCxHQUEzQixFQUFnQ00sSUFBaEMsRUFBc0NDLElBQXRDLEVBQTRDL1IsSUFBNUM7NkJBQ2F6RSxDQUFiLEVBQWdCc1csU0FBaEIsRUFBMkJMLEdBQTNCLEVBQWdDTSxJQUFoQyxFQUFzQ0MsSUFBdEMsRUFBNEMvUixJQUE1Qzs7O2dCQUdBekcsRUFBRWtaLElBQU47O1lBRUFyWixFQUFFcVosSUFBTjtLQWxCSixRQW1CU3JaLE1BQU0rWSxLQW5CZjs7O0FBdUJKLFNBQVNELGNBQVQsQ0FBd0JaLElBQXhCLEVBQThCQyxXQUE5QixFQUEyQ0ksU0FBM0MsRUFBc0RILEdBQXRELEVBQTJEO1FBQ25EOEMsUUFBUSxFQUFaO1FBQ0lqUSxDQURKO1FBQ090SCxHQURQO1FBQ1lvVixLQURaO1FBQ21CQyxHQURuQjtRQUN3Qm1DLElBRHhCOztTQUdLbFEsSUFBSSxDQUFKLEVBQU90SCxNQUFNd1UsWUFBWTNTLE1BQTlCLEVBQXNDeUYsSUFBSXRILEdBQTFDLEVBQStDc0gsR0FBL0MsRUFBb0Q7Z0JBQ3hDa04sWUFBWWxOLENBQVosSUFBaUJtTixHQUF6QjtjQUNNbk4sSUFBSXRILE1BQU0sQ0FBVixHQUFjd1UsWUFBWWxOLElBQUksQ0FBaEIsSUFBcUJtTixHQUFuQyxHQUF5Q0YsS0FBSzFTLE1BQXBEO2VBQ09nVCxXQUFXTixJQUFYLEVBQWlCYSxLQUFqQixFQUF3QkMsR0FBeEIsRUFBNkJaLEdBQTdCLEVBQWtDLEtBQWxDLENBQVA7WUFDSStDLFNBQVNBLEtBQUs5QixJQUFsQixFQUF3QjhCLEtBQUszQixPQUFMLEdBQWUsSUFBZjtjQUNsQnRQLElBQU4sQ0FBV2tSLFlBQVlELElBQVosQ0FBWDs7O1VBR0VFLElBQU4sQ0FBV0MsUUFBWDs7U0FHS3JRLElBQUksQ0FBVCxFQUFZQSxJQUFJaVEsTUFBTTFWLE1BQXRCLEVBQThCeUYsR0FBOUIsRUFBbUM7c0JBQ2pCaVEsTUFBTWpRLENBQU4sQ0FBZCxFQUF3QnNOLFNBQXhCO29CQUNZZSxhQUFhZixTQUFiLEVBQXdCQSxVQUFVYyxJQUFsQyxDQUFaOzs7V0FHR2QsU0FBUDs7O0FBR0osU0FBUytDLFFBQVQsQ0FBa0J0YixDQUFsQixFQUFxQkcsQ0FBckIsRUFBd0I7V0FDYkgsRUFBRTBCLENBQUYsR0FBTXZCLEVBQUV1QixDQUFmOzs7QUFJSixTQUFTNlosYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJqRCxTQUE3QixFQUF3QztnQkFDeEJrRCxlQUFlRCxJQUFmLEVBQXFCakQsU0FBckIsQ0FBWjtRQUNJQSxTQUFKLEVBQWU7WUFDUHBZLElBQUk4YSxhQUFhMUMsU0FBYixFQUF3QmlELElBQXhCLENBQVI7cUJBQ2FyYixDQUFiLEVBQWdCQSxFQUFFa1osSUFBbEI7Ozs7QUFLUixTQUFTb0MsY0FBVCxDQUF3QkQsSUFBeEIsRUFBOEJqRCxTQUE5QixFQUF5QztRQUNqQ2hGLElBQUlnRixTQUFSO1FBQ0ltRCxLQUFLRixLQUFLOVosQ0FEZDtRQUVJaWEsS0FBS0gsS0FBSzdaLENBRmQ7UUFHSWlhLEtBQUssQ0FBQ0MsUUFIVjtRQUlJck4sQ0FKSjs7T0FRRztZQUNLbU4sTUFBTXBJLEVBQUU1UixDQUFSLElBQWFnYSxNQUFNcEksRUFBRThGLElBQUYsQ0FBTzFYLENBQTlCLEVBQWlDO2dCQUN6QkQsSUFBSTZSLEVBQUU3UixDQUFGLEdBQU0sQ0FBQ2lhLEtBQUtwSSxFQUFFNVIsQ0FBUixLQUFjNFIsRUFBRThGLElBQUYsQ0FBTzNYLENBQVAsR0FBVzZSLEVBQUU3UixDQUEzQixLQUFpQzZSLEVBQUU4RixJQUFGLENBQU8xWCxDQUFQLEdBQVc0UixFQUFFNVIsQ0FBOUMsQ0FBZDtnQkFDSUQsS0FBS2dhLEVBQUwsSUFBV2hhLElBQUlrYSxFQUFuQixFQUF1QjtxQkFDZGxhLENBQUw7b0JBQ0lBLE1BQU1nYSxFQUFWLEVBQWM7d0JBQ05DLE9BQU9wSSxFQUFFNVIsQ0FBYixFQUFnQixPQUFPNFIsQ0FBUDt3QkFDWm9JLE9BQU9wSSxFQUFFOEYsSUFBRixDQUFPMVgsQ0FBbEIsRUFBcUIsT0FBTzRSLEVBQUU4RixJQUFUOztvQkFFckI5RixFQUFFN1IsQ0FBRixHQUFNNlIsRUFBRThGLElBQUYsQ0FBTzNYLENBQWIsR0FBaUI2UixDQUFqQixHQUFxQkEsRUFBRThGLElBQTNCOzs7WUFHSjlGLEVBQUU4RixJQUFOO0tBWkosUUFhUzlGLE1BQU1nRixTQWJmOztRQWVJLENBQUMvSixDQUFMLEVBQVEsT0FBTyxJQUFQOztRQUVKa04sT0FBT0UsRUFBWCxFQUFlLE9BQU9wTixFQUFFa0wsSUFBVDs7UUFNWEssT0FBT3ZMLENBQVg7UUFDSXNOLEtBQUt0TixFQUFFOU0sQ0FEWDtRQUVJcWEsS0FBS3ZOLEVBQUU3TSxDQUZYO1FBR0lxYSxTQUFTSCxRQUhiO1FBSUlqWixHQUpKOztRQU1JNEwsRUFBRTZLLElBQU47O1dBRU85RixNQUFNd0csSUFBYixFQUFtQjtZQUNYMkIsTUFBTW5JLEVBQUU3UixDQUFSLElBQWE2UixFQUFFN1IsQ0FBRixJQUFPb2EsRUFBcEIsSUFDSTNCLGdCQUFnQndCLEtBQUtJLEVBQUwsR0FBVUwsRUFBVixHQUFlRSxFQUEvQixFQUFtQ0QsRUFBbkMsRUFBdUNHLEVBQXZDLEVBQTJDQyxFQUEzQyxFQUErQ0osS0FBS0ksRUFBTCxHQUFVSCxFQUFWLEdBQWVGLEVBQTlELEVBQWtFQyxFQUFsRSxFQUFzRXBJLEVBQUU3UixDQUF4RSxFQUEyRTZSLEVBQUU1UixDQUE3RSxDQURSLEVBQ3lGOztrQkFFL0VNLEtBQUtvQyxHQUFMLENBQVNzWCxLQUFLcEksRUFBRTVSLENBQWhCLEtBQXNCK1osS0FBS25JLEVBQUU3UixDQUE3QixDQUFOOztnQkFFSSxDQUFDa0IsTUFBTW9aLE1BQU4sSUFBaUJwWixRQUFRb1osTUFBUixJQUFrQnpJLEVBQUU3UixDQUFGLEdBQU04TSxFQUFFOU0sQ0FBNUMsS0FBbURvWixjQUFjdkgsQ0FBZCxFQUFpQmlJLElBQWpCLENBQXZELEVBQStFO29CQUN2RWpJLENBQUo7eUJBQ1MzUSxHQUFUOzs7O1lBSUoyUSxFQUFFOEYsSUFBTjs7O1dBR0c3SyxDQUFQOzs7QUFJSixTQUFTc0wsVUFBVCxDQUFvQmYsS0FBcEIsRUFBMkJMLElBQTNCLEVBQWlDQyxJQUFqQyxFQUF1Qy9SLElBQXZDLEVBQTZDO1FBQ3JDMk0sSUFBSXdGLEtBQVI7T0FDRztZQUNLeEYsRUFBRTNSLENBQUYsS0FBUSxJQUFaLEVBQWtCMlIsRUFBRTNSLENBQUYsR0FBTTZZLE9BQU9sSCxFQUFFN1IsQ0FBVCxFQUFZNlIsRUFBRTVSLENBQWQsRUFBaUIrVyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkIvUixJQUE3QixDQUFOO1VBQ2hCZ1UsS0FBRixHQUFVckgsRUFBRW1HLElBQVo7VUFDRWlCLEtBQUYsR0FBVXBILEVBQUU4RixJQUFaO1lBQ0k5RixFQUFFOEYsSUFBTjtLQUpKLFFBS1M5RixNQUFNd0YsS0FMZjs7TUFPRTZCLEtBQUYsQ0FBUUQsS0FBUixHQUFnQixJQUFoQjtNQUNFQyxLQUFGLEdBQVUsSUFBVjs7ZUFFV3JILENBQVg7OztBQUtKLFNBQVMwSSxVQUFULENBQW9CZCxJQUFwQixFQUEwQjtRQUNsQmxRLENBQUo7UUFBT3NJLENBQVA7UUFBVTJJLENBQVY7UUFBYWpMLENBQWI7UUFBZ0JrTCxJQUFoQjtRQUFzQkMsU0FBdEI7UUFBaUNDLEtBQWpDO1FBQXdDQyxLQUF4QztRQUNJQyxTQUFTLENBRGI7O09BR0c7WUFDS3BCLElBQUo7ZUFDTyxJQUFQO2VBQ08sSUFBUDtvQkFDWSxDQUFaOztlQUVPNUgsQ0FBUCxFQUFVOztnQkFFRkEsQ0FBSjtvQkFDUSxDQUFSO2lCQUNLdEksSUFBSSxDQUFULEVBQVlBLElBQUlzUixNQUFoQixFQUF3QnRSLEdBQXhCLEVBQTZCOztvQkFFckJpUixFQUFFdkIsS0FBTjtvQkFDSSxDQUFDdUIsQ0FBTCxFQUFROzs7b0JBR0pLLE1BQVI7O21CQUVPRixRQUFRLENBQVIsSUFBY0MsUUFBUSxDQUFSLElBQWFKLENBQWxDLEVBQXNDOztvQkFFOUJHLFVBQVUsQ0FBZCxFQUFpQjt3QkFDVEgsQ0FBSjt3QkFDSUEsRUFBRXZCLEtBQU47O2lCQUZKLE1BSU8sSUFBSTJCLFVBQVUsQ0FBVixJQUFlLENBQUNKLENBQXBCLEVBQXVCO3dCQUN0QjNJLENBQUo7d0JBQ0lBLEVBQUVvSCxLQUFOOztpQkFGRyxNQUlBLElBQUlwSCxFQUFFM1IsQ0FBRixJQUFPc2EsRUFBRXRhLENBQWIsRUFBZ0I7d0JBQ2YyUixDQUFKO3dCQUNJQSxFQUFFb0gsS0FBTjs7aUJBRkcsTUFJQTt3QkFDQ3VCLENBQUo7d0JBQ0lBLEVBQUV2QixLQUFOOzs7O29CQUlBd0IsSUFBSixFQUFVQSxLQUFLeEIsS0FBTCxHQUFhMUosQ0FBYixDQUFWLEtBQ0trSyxPQUFPbEssQ0FBUDs7a0JBRUgySixLQUFGLEdBQVV1QixJQUFWO3VCQUNPbEwsQ0FBUDs7O2dCQUdBaUwsQ0FBSjs7O2FBR0N2QixLQUFMLEdBQWEsSUFBYjtrQkFDVSxDQUFWO0tBakRKLFFBbURTeUIsWUFBWSxDQW5EckI7O1dBcURPakIsSUFBUDs7O0FBSUosU0FBU1YsTUFBVCxDQUFnQi9ZLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQitXLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQy9SLElBQWxDLEVBQXdDO1FBRWhDLFNBQVNsRixJQUFJZ1gsSUFBYixJQUFxQjlSLElBQXpCO1FBQ0ksU0FBU2pGLElBQUlnWCxJQUFiLElBQXFCL1IsSUFBekI7O1FBRUksQ0FBQ2xGLElBQUtBLEtBQUssQ0FBWCxJQUFpQixVQUFyQjtRQUNJLENBQUNBLElBQUtBLEtBQUssQ0FBWCxJQUFpQixVQUFyQjtRQUNJLENBQUNBLElBQUtBLEtBQUssQ0FBWCxJQUFpQixVQUFyQjtRQUNJLENBQUNBLElBQUtBLEtBQUssQ0FBWCxJQUFpQixVQUFyQjs7UUFFSSxDQUFDQyxJQUFLQSxLQUFLLENBQVgsSUFBaUIsVUFBckI7UUFDSSxDQUFDQSxJQUFLQSxLQUFLLENBQVgsSUFBaUIsVUFBckI7UUFDSSxDQUFDQSxJQUFLQSxLQUFLLENBQVgsSUFBaUIsVUFBckI7UUFDSSxDQUFDQSxJQUFLQSxLQUFLLENBQVgsSUFBaUIsVUFBckI7O1dBRU9ELElBQUtDLEtBQUssQ0FBakI7OztBQUlKLFNBQVN5WixXQUFULENBQXFCckMsS0FBckIsRUFBNEI7UUFDcEJ4RixJQUFJd0YsS0FBUjtRQUNJeUQsV0FBV3pELEtBRGY7T0FFRztZQUNLeEYsRUFBRTdSLENBQUYsR0FBTThhLFNBQVM5YSxDQUFuQixFQUFzQjhhLFdBQVdqSixDQUFYO1lBQ2xCQSxFQUFFOEYsSUFBTjtLQUZKLFFBR1M5RixNQUFNd0YsS0FIZjs7V0FLT3lELFFBQVA7OztBQUlKLFNBQVNyQyxlQUFULENBQXlCc0MsRUFBekIsRUFBNkJDLEVBQTdCLEVBQWlDQyxFQUFqQyxFQUFxQ0MsRUFBckMsRUFBeUM5TSxFQUF6QyxFQUE2Q0MsRUFBN0MsRUFBaUQ4TSxFQUFqRCxFQUFxREMsRUFBckQsRUFBeUQ7V0FDOUMsQ0FBQ2hOLEtBQUsrTSxFQUFOLEtBQWFILEtBQUtJLEVBQWxCLElBQXdCLENBQUNMLEtBQUtJLEVBQU4sS0FBYTlNLEtBQUsrTSxFQUFsQixDQUF4QixJQUFpRCxDQUFqRCxJQUNBLENBQUNMLEtBQUtJLEVBQU4sS0FBYUQsS0FBS0UsRUFBbEIsSUFBd0IsQ0FBQ0gsS0FBS0UsRUFBTixLQUFhSCxLQUFLSSxFQUFsQixDQUF4QixJQUFpRCxDQURqRCxJQUVBLENBQUNILEtBQUtFLEVBQU4sS0FBYTlNLEtBQUsrTSxFQUFsQixJQUF3QixDQUFDaE4sS0FBSytNLEVBQU4sS0FBYUQsS0FBS0UsRUFBbEIsQ0FBeEIsSUFBaUQsQ0FGeEQ7OztBQU1KLFNBQVM5QixlQUFULENBQXlCaGIsQ0FBekIsRUFBNEJHLENBQTVCLEVBQStCO1dBQ3BCSCxFQUFFcVosSUFBRixDQUFPcE8sQ0FBUCxLQUFhOUssRUFBRThLLENBQWYsSUFBb0JqTCxFQUFFMFosSUFBRixDQUFPek8sQ0FBUCxLQUFhOUssRUFBRThLLENBQW5DLElBQXdDLENBQUM4UixrQkFBa0IvYyxDQUFsQixFQUFxQkcsQ0FBckIsQ0FBekMsSUFDQTJhLGNBQWM5YSxDQUFkLEVBQWlCRyxDQUFqQixDQURBLElBQ3VCMmEsY0FBYzNhLENBQWQsRUFBaUJILENBQWpCLENBRHZCLElBQzhDZ2QsYUFBYWhkLENBQWIsRUFBZ0JHLENBQWhCLENBRHJEOzs7QUFLSixTQUFTc1osSUFBVCxDQUFjbEcsQ0FBZCxFQUFpQjJJLENBQWpCLEVBQW9CcFYsQ0FBcEIsRUFBdUI7V0FDWixDQUFDb1YsRUFBRXZhLENBQUYsR0FBTTRSLEVBQUU1UixDQUFULEtBQWVtRixFQUFFcEYsQ0FBRixHQUFNd2EsRUFBRXhhLENBQXZCLElBQTRCLENBQUN3YSxFQUFFeGEsQ0FBRixHQUFNNlIsRUFBRTdSLENBQVQsS0FBZW9GLEVBQUVuRixDQUFGLEdBQU11YSxFQUFFdmEsQ0FBdkIsQ0FBbkM7OztBQUlKLFNBQVNnRSxRQUFULENBQWdCc1gsRUFBaEIsRUFBb0JDLEVBQXBCLEVBQXdCO1dBQ2JELEdBQUd2YixDQUFILEtBQVN3YixHQUFHeGIsQ0FBWixJQUFpQnViLEdBQUd0YixDQUFILEtBQVN1YixHQUFHdmIsQ0FBcEM7OztBQUlKLFNBQVNrWixVQUFULENBQW9Cb0MsRUFBcEIsRUFBd0JFLEVBQXhCLEVBQTRCRCxFQUE1QixFQUFnQ0UsRUFBaEMsRUFBb0M7UUFDM0J6WCxTQUFPc1gsRUFBUCxFQUFXRSxFQUFYLEtBQWtCeFgsU0FBT3VYLEVBQVAsRUFBV0UsRUFBWCxDQUFuQixJQUNDelgsU0FBT3NYLEVBQVAsRUFBV0csRUFBWCxLQUFrQnpYLFNBQU91WCxFQUFQLEVBQVdDLEVBQVgsQ0FEdkIsRUFDd0MsT0FBTyxJQUFQO1dBQ2pDMUQsS0FBS3dELEVBQUwsRUFBU0UsRUFBVCxFQUFhRCxFQUFiLElBQW1CLENBQW5CLEtBQXlCekQsS0FBS3dELEVBQUwsRUFBU0UsRUFBVCxFQUFhQyxFQUFiLElBQW1CLENBQTVDLElBQ0EzRCxLQUFLeUQsRUFBTCxFQUFTRSxFQUFULEVBQWFILEVBQWIsSUFBbUIsQ0FBbkIsS0FBeUJ4RCxLQUFLeUQsRUFBTCxFQUFTRSxFQUFULEVBQWFELEVBQWIsSUFBbUIsQ0FEbkQ7OztBQUtKLFNBQVNKLGlCQUFULENBQTJCL2MsQ0FBM0IsRUFBOEJHLENBQTlCLEVBQWlDO1FBQ3pCb1QsSUFBSXZULENBQVI7T0FDRztZQUNLdVQsRUFBRXRJLENBQUYsS0FBUWpMLEVBQUVpTCxDQUFWLElBQWVzSSxFQUFFOEYsSUFBRixDQUFPcE8sQ0FBUCxLQUFhakwsRUFBRWlMLENBQTlCLElBQW1Dc0ksRUFBRXRJLENBQUYsS0FBUTlLLEVBQUU4SyxDQUE3QyxJQUFrRHNJLEVBQUU4RixJQUFGLENBQU9wTyxDQUFQLEtBQWE5SyxFQUFFOEssQ0FBakUsSUFDSTRQLFdBQVd0SCxDQUFYLEVBQWNBLEVBQUU4RixJQUFoQixFQUFzQnJaLENBQXRCLEVBQXlCRyxDQUF6QixDQURSLEVBQ3FDLE9BQU8sSUFBUDtZQUNqQ29ULEVBQUU4RixJQUFOO0tBSEosUUFJUzlGLE1BQU12VCxDQUpmOztXQU1PLEtBQVA7OztBQUlKLFNBQVM4YSxhQUFULENBQXVCOWEsQ0FBdkIsRUFBMEJHLENBQTFCLEVBQTZCO1dBQ2xCc1osS0FBS3paLEVBQUUwWixJQUFQLEVBQWExWixDQUFiLEVBQWdCQSxFQUFFcVosSUFBbEIsSUFBMEIsQ0FBMUIsR0FDSEksS0FBS3paLENBQUwsRUFBUUcsQ0FBUixFQUFXSCxFQUFFcVosSUFBYixLQUFzQixDQUF0QixJQUEyQkksS0FBS3paLENBQUwsRUFBUUEsRUFBRTBaLElBQVYsRUFBZ0J2WixDQUFoQixLQUFzQixDQUQ5QyxHQUVIc1osS0FBS3paLENBQUwsRUFBUUcsQ0FBUixFQUFXSCxFQUFFMFosSUFBYixJQUFxQixDQUFyQixJQUEwQkQsS0FBS3paLENBQUwsRUFBUUEsRUFBRXFaLElBQVYsRUFBZ0JsWixDQUFoQixJQUFxQixDQUZuRDs7O0FBTUosU0FBUzZjLFlBQVQsQ0FBc0JoZCxDQUF0QixFQUF5QkcsQ0FBekIsRUFBNEI7UUFDcEJvVCxJQUFJdlQsQ0FBUjtRQUNJcWQsU0FBUyxLQURiO1FBRUlSLEtBQUssQ0FBQzdjLEVBQUUwQixDQUFGLEdBQU12QixFQUFFdUIsQ0FBVCxJQUFjLENBRnZCO1FBR0lvYixLQUFLLENBQUM5YyxFQUFFMkIsQ0FBRixHQUFNeEIsRUFBRXdCLENBQVQsSUFBYyxDQUh2QjtPQUlHO1lBQ080UixFQUFFNVIsQ0FBRixHQUFNbWIsRUFBUCxLQUFnQnZKLEVBQUU4RixJQUFGLENBQU8xWCxDQUFQLEdBQVdtYixFQUE1QixJQUFxQ0QsS0FBSyxDQUFDdEosRUFBRThGLElBQUYsQ0FBTzNYLENBQVAsR0FBVzZSLEVBQUU3UixDQUFkLEtBQW9Cb2IsS0FBS3ZKLEVBQUU1UixDQUEzQixLQUFpQzRSLEVBQUU4RixJQUFGLENBQU8xWCxDQUFQLEdBQVc0UixFQUFFNVIsQ0FBOUMsSUFBbUQ0UixFQUFFN1IsQ0FBbkcsRUFDSTJiLFNBQVMsQ0FBQ0EsTUFBVjtZQUNBOUosRUFBRThGLElBQU47S0FISixRQUlTOUYsTUFBTXZULENBSmY7O1dBTU9xZCxNQUFQOzs7QUFLSixTQUFTcEMsWUFBVCxDQUFzQmpiLENBQXRCLEVBQXlCRyxDQUF6QixFQUE0QjtRQUNwQm1kLEtBQUssSUFBSUMsSUFBSixDQUFTdmQsRUFBRWlMLENBQVgsRUFBY2pMLEVBQUUwQixDQUFoQixFQUFtQjFCLEVBQUUyQixDQUFyQixDQUFUO1FBQ0lMLEtBQUssSUFBSWljLElBQUosQ0FBU3BkLEVBQUU4SyxDQUFYLEVBQWM5SyxFQUFFdUIsQ0FBaEIsRUFBbUJ2QixFQUFFd0IsQ0FBckIsQ0FEVDtRQUVJNmIsS0FBS3hkLEVBQUVxWixJQUZYO1FBR0lvRSxLQUFLdGQsRUFBRXVaLElBSFg7O01BS0VMLElBQUYsR0FBU2xaLENBQVQ7TUFDRXVaLElBQUYsR0FBUzFaLENBQVQ7O09BRUdxWixJQUFILEdBQVVtRSxFQUFWO09BQ0c5RCxJQUFILEdBQVU0RCxFQUFWOztPQUVHakUsSUFBSCxHQUFVaUUsRUFBVjtPQUNHNUQsSUFBSCxHQUFVcFksRUFBVjs7T0FFRytYLElBQUgsR0FBVS9YLEVBQVY7T0FDR29ZLElBQUgsR0FBVStELEVBQVY7O1dBRU9uYyxFQUFQOzs7QUFJSixTQUFTOFgsVUFBVCxDQUFvQm5PLENBQXBCLEVBQXVCdkosQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCdVgsSUFBN0IsRUFBbUM7UUFDM0IzRixJQUFJLElBQUlnSyxJQUFKLENBQVN0UyxDQUFULEVBQVl2SixDQUFaLEVBQWVDLENBQWYsQ0FBUjs7UUFFSSxDQUFDdVgsSUFBTCxFQUFXO1VBQ0xRLElBQUYsR0FBU25HLENBQVQ7VUFDRThGLElBQUYsR0FBUzlGLENBQVQ7S0FGSixNQUlPO1VBQ0Q4RixJQUFGLEdBQVNILEtBQUtHLElBQWQ7VUFDRUssSUFBRixHQUFTUixJQUFUO2FBQ0tHLElBQUwsQ0FBVUssSUFBVixHQUFpQm5HLENBQWpCO2FBQ0s4RixJQUFMLEdBQVk5RixDQUFaOztXQUVHQSxDQUFQOzs7QUFHSixTQUFTbUssVUFBVCxDQUFvQm5LLENBQXBCLEVBQXVCO01BQ2pCOEYsSUFBRixDQUFPSyxJQUFQLEdBQWNuRyxFQUFFbUcsSUFBaEI7TUFDRUEsSUFBRixDQUFPTCxJQUFQLEdBQWM5RixFQUFFOEYsSUFBaEI7O1FBRUk5RixFQUFFcUgsS0FBTixFQUFhckgsRUFBRXFILEtBQUYsQ0FBUUQsS0FBUixHQUFnQnBILEVBQUVvSCxLQUFsQjtRQUNUcEgsRUFBRW9ILEtBQU4sRUFBYXBILEVBQUVvSCxLQUFGLENBQVFDLEtBQVIsR0FBZ0JySCxFQUFFcUgsS0FBbEI7OztBQUdqQixTQUFTMkMsSUFBVCxDQUFjdFMsQ0FBZCxFQUFpQnZKLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtTQUVkc0osQ0FBTCxHQUFTQSxDQUFUOztTQUdLdkosQ0FBTCxHQUFTQSxDQUFUO1NBQ0tDLENBQUwsR0FBU0EsQ0FBVDs7U0FHSytYLElBQUwsR0FBWSxJQUFaO1NBQ0tMLElBQUwsR0FBWSxJQUFaOztTQUdLelgsQ0FBTCxHQUFTLElBQVQ7O1NBR0tnWixLQUFMLEdBQWEsSUFBYjtTQUNLRCxLQUFMLEdBQWEsSUFBYjs7U0FHS25CLE9BQUwsR0FBZSxLQUFmOzs7QUFLSnZCLE9BQU8wRixTQUFQLEdBQW1CLFVBQVV6RixJQUFWLEVBQWdCQyxXQUFoQixFQUE2QkMsR0FBN0IsRUFBa0NLLFNBQWxDLEVBQTZDO1FBQ3hESixXQUFXRixlQUFlQSxZQUFZM1MsTUFBMUM7UUFDSThTLFdBQVdELFdBQVdGLFlBQVksQ0FBWixJQUFpQkMsR0FBNUIsR0FBa0NGLEtBQUsxUyxNQUF0RDs7UUFFSW9ZLGNBQWMzYixLQUFLb0MsR0FBTCxDQUFTOFUsV0FBV2pCLElBQVgsRUFBaUIsQ0FBakIsRUFBb0JJLFFBQXBCLEVBQThCRixHQUE5QixDQUFULENBQWxCO1FBQ0lDLFFBQUosRUFBYzthQUNMLElBQUlwTixJQUFJLENBQVIsRUFBV3RILE1BQU13VSxZQUFZM1MsTUFBbEMsRUFBMEN5RixJQUFJdEgsR0FBOUMsRUFBbURzSCxHQUFuRCxFQUF3RDtnQkFDaEQ4TixRQUFRWixZQUFZbE4sQ0FBWixJQUFpQm1OLEdBQTdCO2dCQUNJWSxNQUFNL04sSUFBSXRILE1BQU0sQ0FBVixHQUFjd1UsWUFBWWxOLElBQUksQ0FBaEIsSUFBcUJtTixHQUFuQyxHQUF5Q0YsS0FBSzFTLE1BQXhEOzJCQUNldkQsS0FBS29DLEdBQUwsQ0FBUzhVLFdBQVdqQixJQUFYLEVBQWlCYSxLQUFqQixFQUF3QkMsR0FBeEIsRUFBNkJaLEdBQTdCLENBQVQsQ0FBZjs7OztRQUlKeUYsZ0JBQWdCLENBQXBCO1NBQ0s1UyxJQUFJLENBQVQsRUFBWUEsSUFBSXdOLFVBQVVqVCxNQUExQixFQUFrQ3lGLEtBQUssQ0FBdkMsRUFBMEM7WUFDbENqTCxJQUFJeVksVUFBVXhOLENBQVYsSUFBZW1OLEdBQXZCO1lBQ0lqWSxJQUFJc1ksVUFBVXhOLElBQUksQ0FBZCxJQUFtQm1OLEdBQTNCO1lBQ0lqVyxJQUFJc1csVUFBVXhOLElBQUksQ0FBZCxJQUFtQm1OLEdBQTNCO3lCQUNpQm5XLEtBQUtvQyxHQUFMLENBQ2IsQ0FBQzZULEtBQUtsWSxDQUFMLElBQVVrWSxLQUFLL1YsQ0FBTCxDQUFYLEtBQXVCK1YsS0FBSy9YLElBQUksQ0FBVCxJQUFjK1gsS0FBS2xZLElBQUksQ0FBVCxDQUFyQyxJQUNBLENBQUNrWSxLQUFLbFksQ0FBTCxJQUFVa1ksS0FBSy9YLENBQUwsQ0FBWCxLQUF1QitYLEtBQUsvVixJQUFJLENBQVQsSUFBYytWLEtBQUtsWSxJQUFJLENBQVQsQ0FBckMsQ0FGYSxDQUFqQjs7O1dBS0c0ZCxnQkFBZ0IsQ0FBaEIsSUFBcUJDLGtCQUFrQixDQUF2QyxHQUEyQyxDQUEzQyxHQUNINWIsS0FBS29DLEdBQUwsQ0FBUyxDQUFDd1osZ0JBQWdCRCxXQUFqQixJQUFnQ0EsV0FBekMsQ0FESjtDQXZCSjs7QUEyQkEsU0FBU3pFLFVBQVQsQ0FBb0JqQixJQUFwQixFQUEwQmEsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDWixHQUF0QyxFQUEyQztRQUNuQzBGLE1BQU0sQ0FBVjtTQUNLLElBQUk3UyxJQUFJOE4sS0FBUixFQUFlZ0YsSUFBSS9FLE1BQU1aLEdBQTlCLEVBQW1Dbk4sSUFBSStOLEdBQXZDLEVBQTRDL04sS0FBS21OLEdBQWpELEVBQXNEO2VBQzNDLENBQUNGLEtBQUs2RixDQUFMLElBQVU3RixLQUFLak4sQ0FBTCxDQUFYLEtBQXVCaU4sS0FBS2pOLElBQUksQ0FBVCxJQUFjaU4sS0FBSzZGLElBQUksQ0FBVCxDQUFyQyxDQUFQO1lBQ0k5UyxDQUFKOztXQUVHNlMsR0FBUDs7O0FBSUo3RixPQUFPK0YsT0FBUCxHQUFpQixVQUFVOUYsSUFBVixFQUFnQjtRQUN6QkUsTUFBTUYsS0FBSyxDQUFMLEVBQVEsQ0FBUixFQUFXMVMsTUFBckI7UUFDSTZFLFNBQVMsRUFBQzRULFVBQVUsRUFBWCxFQUFlQyxPQUFPLEVBQXRCLEVBQTBCQyxZQUFZL0YsR0FBdEMsRUFEYjtRQUVJZ0csWUFBWSxDQUZoQjs7U0FJSyxJQUFJblQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJaU4sS0FBSzFTLE1BQXpCLEVBQWlDeUYsR0FBakMsRUFBc0M7YUFDN0IsSUFBSThTLElBQUksQ0FBYixFQUFnQkEsSUFBSTdGLEtBQUtqTixDQUFMLEVBQVF6RixNQUE1QixFQUFvQ3VZLEdBQXBDLEVBQXlDO2lCQUNoQyxJQUFJTSxJQUFJLENBQWIsRUFBZ0JBLElBQUlqRyxHQUFwQixFQUF5QmlHLEdBQXpCO3VCQUFxQ0osUUFBUCxDQUFnQi9ULElBQWhCLENBQXFCZ08sS0FBS2pOLENBQUwsRUFBUThTLENBQVIsRUFBV00sQ0FBWCxDQUFyQjs7O1lBRTlCcFQsSUFBSSxDQUFSLEVBQVc7eUJBQ01pTixLQUFLak4sSUFBSSxDQUFULEVBQVl6RixNQUF6QjttQkFDTzBZLEtBQVAsQ0FBYWhVLElBQWIsQ0FBa0JrVSxTQUFsQjs7O1dBR0QvVCxNQUFQO0NBZEo7O0FDL21CQSxJQUFNdEUsWUFBVTtlQUVBO0NBRmhCOztJQVdxQnVZOzs7NEJBQ0x6WSxFQUFaLEVBQWdCQyxHQUFoQixFQUFxQkMsT0FBckIsRUFBOEI7OztvREFDMUIsb0JBQU1GLEVBQU4sRUFBVUMsR0FBVixFQUFlQyxPQUFmLENBRDBCOztjQUlyQjhPLFdBQUwsR0FBbUIsRUFBbkI7Y0FDS0UsWUFBTCxHQUFvQixFQUFwQjtjQUNLQyxVQUFMLEdBQWtCLEVBQWxCOzs7OzZCQU9KRSxpQ0FBWTtlQUNEOzJCQUNjLEtBQUtMLFdBRG5COzRCQUVjLEtBQUtFLFlBRm5COzBCQUdjLEtBQUtDO1NBSDFCOzs7NkJBa0JKdUosaUNBQVdDLFNBQVNuSixPQUFPOzs7WUFDbkIsQ0FBQ21KLE9BQUwsRUFBYzttQkFDSCxJQUFQOztZQUVBbkosTUFBTTlDLE1BQU4sQ0FBYSxnQkFBYixLQUFrQyxDQUF0QyxFQUF5QzttQkFDOUIsSUFBUDs7O1lBR0VnRCxVQUFVLEtBQUtDLFdBQUwsQ0FBaUJnSixPQUFqQixDQUFoQjs7WUFHSWpKLFFBQVEsQ0FBUixLQUFjNUssTUFBTUMsT0FBTixDQUFjMkssUUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFkLENBQWQsSUFBOEM1SyxNQUFNQyxPQUFOLENBQWMySyxRQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQUFkLENBQWxELEVBQW1GO2lCQUMxRSxJQUFJdEssSUFBSSxDQUFSLEVBQVd3SyxJQUFJRixRQUFRL1AsTUFBNUIsRUFBb0N5RixJQUFJd0ssQ0FBeEMsRUFBMkN4SyxHQUEzQyxFQUFnRDtxQkFDdkNzVCxVQUFMLENBQWdCaEosUUFBUXRLLENBQVIsQ0FBaEIsRUFBNEJvSyxLQUE1Qjs7bUJBRUcsSUFBUDs7Z0JBRUluTSxPQUFSLENBQWdCLGdCQUFRO2dCQUNoQixDQUFDdVYsS0FBS2paLE1BQVYsRUFBa0I7OztnQkFHZCxDQUFDLE9BQUtrWixXQUFMLENBQWlCRCxLQUFLLENBQUwsQ0FBakIsRUFBMEJBLEtBQUtBLEtBQUtqWixNQUFMLEdBQWMsQ0FBbkIsQ0FBMUIsQ0FBTCxFQUF1RDtxQkFDOUMwRSxJQUFMLENBQVV1VSxLQUFLLENBQUwsQ0FBVixFQUFtQkEsS0FBSyxDQUFMLENBQW5COztTQUxSO1lBUU1yUCxVQUFVbkosY0FBYyxLQUFLSCxHQUFuQixDQUFoQjtZQUNNb1MsT0FBT0QsU0FBTytGLE9BQVAsQ0FBZXpJLE9BQWYsQ0FBYjs7WUFFSSxLQUFLeFAsT0FBTCxDQUFhLFNBQWIsQ0FBSixFQUE2QjtnQkFDbkJ0RSxJQUFJLEVBQVY7Z0JBQ0lVLFVBQUo7aUJBQ0ssSUFBSThJLEtBQUksQ0FBUixFQUFXd0ssS0FBSXlDLEtBQUsrRixRQUFMLENBQWN6WSxNQUFsQyxFQUEwQ3lGLEtBQUl3SyxFQUE5QyxFQUFpRHhLLE1BQUssQ0FBdEQsRUFBeUQ7b0JBQ2pELEtBQUtuRixHQUFMLENBQVN5SixpQkFBVCxDQUEyQixJQUFJdkosbUJBQUosQ0FBd0JrUyxLQUFLK0YsUUFBTCxDQUFjaFQsRUFBZCxDQUF4QixFQUEwQ2lOLEtBQUsrRixRQUFMLENBQWNoVCxLQUFJLENBQWxCLENBQTFDLENBQTNCLEVBQTRGbUUsT0FBNUYsQ0FBSjtrQkFDRWxGLElBQUYsQ0FBTy9ILEVBQUVULENBQVQsRUFBWVMsRUFBRVIsQ0FBZDs7aUJBRUNzYyxRQUFMLEdBQWdCeGMsQ0FBaEI7O1lBRUFnWCxZQUFZUixTQUFPQyxLQUFLK0YsUUFBWixFQUFzQi9GLEtBQUtnRyxLQUEzQixFQUFrQyxDQUFsQyxDQUFoQjtZQUNJekYsVUFBVWpULE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkI7bUJBQ2hCLElBQVA7O1lBRUVtWSxZQUFZMUYsU0FBTzBGLFNBQVAsQ0FBaUJ6RixLQUFLK0YsUUFBdEIsRUFBZ0MvRixLQUFLZ0csS0FBckMsRUFBNEMsQ0FBNUMsRUFBK0N6RixTQUEvQyxDQUFsQjtZQUNJeFcsS0FBS3lTLEtBQUwsQ0FBV2lKLFlBQVksR0FBdkIsSUFBOEIsR0FBOUIsS0FBc0MsQ0FBMUMsRUFBNkM7Z0JBQ3JDZ0IsT0FBSixFQUFhO3dCQUNEQyxJQUFSLENBQWEsdUJBQWI7O21CQUVHLElBQVA7O1lBRUU1SSxRQUFRLEtBQUtuQixXQUFMLENBQWlCclAsTUFBakIsR0FBMEIsQ0FBeEM7WUFDSXdRLFFBQVEsQ0FBWixFQUFlO3dCQUNDeUMsVUFBVTNTLEdBQVYsQ0FBYzt1QkFBS21MLElBQUkrRSxLQUFUO2FBQWQsQ0FBWjs7cUJBRUosQ0FBY3VCLE1BQWQsQ0FBcUIsS0FBSzFDLFdBQTFCLEVBQXVDcUQsS0FBSytGLFFBQTVDO3FCQUNBLENBQWMxRyxNQUFkLENBQXFCLEtBQUt4QyxZQUExQixFQUF3QzBELFNBQXhDOzthQUdLeEMsYUFBTCxDQUFtQmlDLEtBQUsrRixRQUFMLENBQWN6WSxNQUFkLEdBQXVCLENBQTFDLEVBQTZDNlAsS0FBN0M7ZUFDTyxJQUFQOzs7NkJBR0pHLG1DQUFZcUosS0FBSztZQUNUQSxJQUFJckgsUUFBUixFQUFrQjtrQkFFUnFILElBQUlySCxRQUFKLENBQWFDLFdBQW5CO1NBRkosTUFHTyxJQUFJb0gsSUFBSXBILFdBQVIsRUFBcUI7a0JBRWxCb0gsSUFBSXBILFdBQVY7O2VBRUdvSCxHQUFQOzs7NkJBR0o1SSx1Q0FBY3FCLEdBQUdqQyxPQUFPO1lBRWQ1VCxJQUFJNFQsTUFBTXFDLEtBQU4sR0FBYyxHQUFkLEdBQW9CLENBQUNyQyxNQUFNOUMsTUFBTixDQUFhLGdCQUFiLEtBQWtDLENBQW5DLElBQXdDLEVBQXRFO2FBQ0ssSUFBSXRILElBQUksQ0FBYixFQUFnQkEsSUFBSXFNLENBQXBCLEVBQXVCck0sR0FBdkIsRUFBNEI7aUJBQ25CK0osVUFBTCxDQUFnQjlLLElBQWhCLENBQXFCekksQ0FBckI7Ozs7NkJBSVJpZCxtQ0FBWUksSUFBSUMsSUFBSTtlQUNURCxHQUFHLENBQUgsTUFBVUMsR0FBRyxDQUFILENBQVYsSUFBbUJELEdBQUcsQ0FBSCxNQUFVQyxHQUFHLENBQUgsQ0FBcEM7Ozs7RUFqSG9Dblo7O0FBcUg1QzBZLGVBQWV0RyxZQUFmLENBQTRCalMsU0FBNUI7O0FDcklBOztBQ0NPLElBQU1pWixtQkFBb0JDLGlCQUFRQyxFQUFSLElBQWNELGlCQUFRRSxJQUF2QixHQUErQixHQUEvQixHQUFxQ0MsY0FBSzFRLE9BQUwsR0FBZSxJQUFmLEdBQXNCLEdBQXBGOztBQ0FQLG9iQW1CeUJzUSxnQkFuQnpCOztBQ0RBOztBQ0NBLDBjQWF5QkEsZ0JBYnpCOztBQ0RBOztBQ0NBLHFLQU04QkEsZ0JBTjlCOztBQ0RBOztBQ0NBLHNXQWE4QkEsZ0JBYjlCOztBQ1FBLGNBQWU7WUFDSDswQkFDZUssWUFEZjt3QkFFYUM7S0FIVjthQUtGOzBCQUNjQyxhQURkO3dCQUVZQztLQVBWO2VBU0M7MEJBQ1dDLGVBRFg7d0JBRVNDO0tBWFY7ZUFhQzswQkFDV0MsZUFEWDt3QkFFU0M7O0NBZnpCOzs7Ozs7Ozs7Ozs7O0FDUEEsSUFBTTdaLFlBQVU7Z0JBQ0MsT0FERDttQkFFSSxLQUZKO3NCQUdPLEtBSFA7dUJBSVE7Q0FKeEI7O0lBT3FCOFo7OztpQkFTVkMsNkJBQVNDLFNBQVM7WUFDakIsQ0FBQ0EsT0FBRCxJQUFZQSxRQUFRLE1BQVIsTUFBb0IsS0FBS0MsV0FBTCxFQUFwQyxFQUF3RDttQkFDN0MsSUFBUDs7WUFFRUMsY0FBYyxLQUFLM00sU0FBTCxDQUFlMk0sV0FBbkM7WUFDTS9ZLFFBQVEsSUFBSStZLFdBQUosQ0FBZ0JGLFFBQVEsSUFBUixDQUFoQixFQUErQkEsUUFBUSxNQUFSLENBQS9CLEVBQWdEQSxRQUFRLFNBQVIsQ0FBaEQsQ0FBZDtZQUNJQSxRQUFRLE9BQVIsQ0FBSixFQUFzQjtrQkFDWkcsUUFBTixDQUFlSCxRQUFRLE9BQVIsQ0FBZjs7ZUFFRzdZLEtBQVA7OzswQkFHUWlaLEVBQVosRUFBZ0JqSSxJQUFoQixFQUFzQm5TLE9BQXRCLEVBQStCOzs7WUFDckJxYSxPQUFPcGEsYUFBQSxDQUFjK0ssTUFBZCxDQUFxQixFQUFyQixFQUF5QmhMLE9BQXpCLENBQWI7WUFDSXNQLGNBQUo7WUFDSStLLEtBQUssT0FBTCxDQUFKLEVBQW1CO29CQUNQQSxLQUFLLE9BQUwsQ0FBUjttQkFDT0EsS0FBSyxPQUFMLENBQVA7OztvREFFSiwyQkFBTUQsRUFBTixFQUFVQyxJQUFWLENBUDJCOztjQVF0QmxJLElBQUwsR0FBWUEsSUFBWjtZQUNJN0MsS0FBSixFQUFXO2tCQUNGNkssUUFBTCxDQUFjN0ssS0FBZDs7Ozs7MkJBUVJnTCwyQkFBUztZQUNDQyxPQUFPO29CQUNELEtBQUtOLFdBQUwsRUFEQztvQkFFQSxLQUFLOUgsSUFGTDtrQkFHSCxLQUFLcUksS0FBTDtTQUhWO1lBS014YSxVQUFVLEtBQUt5YSxNQUFMLEVBQWhCO1lBQ01uTCxRQUFRLEtBQUtvTCxRQUFMLEVBQWQ7WUFDSTFhLE9BQUosRUFBYTtpQkFDSixTQUFMLElBQWtCQSxPQUFsQjs7WUFFQXNQLEtBQUosRUFBVztpQkFDRixPQUFMLElBQWdCQSxLQUFoQjs7ZUFFR2lMLElBQVA7OzsyQkFHSkosNkJBQVM3SyxPQUFPO1lBQ1IsQ0FBQzFLLE1BQU1DLE9BQU4sQ0FBY3lLLEtBQWQsQ0FBTCxFQUEyQjtvQkFDZixDQUFDQSxLQUFELENBQVI7O2FBRUNxTCxNQUFMLEdBQWNyTCxLQUFkO2FBQ0tzTCxhQUFMLEdBQXFCM2EsbUJBQUEsQ0FBb0I0YSxZQUFwQixDQUFpQ3ZMLEtBQWpDLENBQXJCOzthQVVLek0sSUFBTCxDQUFVLFVBQVYsRUFBc0IsRUFBRSxTQUFVeU0sS0FBWixFQUF0QjtlQUNPLElBQVA7OzsyQkFHSm9MLCtCQUFXO2VBQ0EsS0FBS0MsTUFBWjs7OztFQTVFa0MxYTs7QUFnRjFDNlosYUFBYTdILFlBQWIsQ0FBMEJqUyxTQUExQjs7QUN2RkEsYUFBaUI4YSxNQUFqQjs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsTUFBckIsRUFBNkJDLFFBQTdCLEVBQXVDQyxJQUF2QyxFQUE2Q0MsS0FBN0MsRUFBb0RDLEtBQXBELEVBQTJEO1FBQ25ERCxRQUFRRCxJQUFSLElBQWdCRCxRQUFwQixFQUE4Qjs7UUFFMUJ4UyxJQUFJdk0sS0FBS21mLEtBQUwsQ0FBVyxDQUFDSCxPQUFPQyxLQUFSLElBQWlCLENBQTVCLENBQVI7O1dBRU9KLEdBQVAsRUFBWUMsTUFBWixFQUFvQnZTLENBQXBCLEVBQXVCeVMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQW9DQyxRQUFRLENBQTVDOztXQUVPTCxHQUFQLEVBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxJQUE5QixFQUFvQ3pTLElBQUksQ0FBeEMsRUFBMkMyUyxRQUFRLENBQW5EO1dBQ09MLEdBQVAsRUFBWUMsTUFBWixFQUFvQkMsUUFBcEIsRUFBOEJ4UyxJQUFJLENBQWxDLEVBQXFDMFMsS0FBckMsRUFBNENDLFFBQVEsQ0FBcEQ7OztBQUdKLFNBQVNFLE1BQVQsQ0FBZ0JQLEdBQWhCLEVBQXFCQyxNQUFyQixFQUE2Qm5OLENBQTdCLEVBQWdDcU4sSUFBaEMsRUFBc0NDLEtBQXRDLEVBQTZDSSxHQUE3QyxFQUFrRDs7V0FFdkNKLFFBQVFELElBQWYsRUFBcUI7WUFDYkMsUUFBUUQsSUFBUixHQUFlLEdBQW5CLEVBQXdCO2dCQUNoQjNKLElBQUk0SixRQUFRRCxJQUFSLEdBQWUsQ0FBdkI7Z0JBQ0l6UyxJQUFJb0YsSUFBSXFOLElBQUosR0FBVyxDQUFuQjtnQkFDSXJmLElBQUlLLEtBQUtxSCxHQUFMLENBQVNnTyxDQUFULENBQVI7Z0JBQ0l0VixJQUFJLE1BQU1DLEtBQUtzZixHQUFMLENBQVMsSUFBSTNmLENBQUosR0FBUSxDQUFqQixDQUFkO2dCQUNJNGYsS0FBSyxNQUFNdmYsS0FBS3FDLElBQUwsQ0FBVTFDLElBQUlJLENBQUosSUFBU3NWLElBQUl0VixDQUFiLElBQWtCc1YsQ0FBNUIsQ0FBTixJQUF3QzlJLElBQUk4SSxJQUFJLENBQVIsR0FBWSxDQUFaLEdBQWdCLENBQUMsQ0FBakIsR0FBcUIsQ0FBN0QsQ0FBVDtnQkFDSW1LLFVBQVV4ZixLQUFLa0gsR0FBTCxDQUFTOFgsSUFBVCxFQUFlaGYsS0FBS21mLEtBQUwsQ0FBV3hOLElBQUlwRixJQUFJeE0sQ0FBSixHQUFRc1YsQ0FBWixHQUFnQmtLLEVBQTNCLENBQWYsQ0FBZDtnQkFDSUUsV0FBV3pmLEtBQUswZixHQUFMLENBQVNULEtBQVQsRUFBZ0JqZixLQUFLbWYsS0FBTCxDQUFXeE4sSUFBSSxDQUFDMEQsSUFBSTlJLENBQUwsSUFBVXhNLENBQVYsR0FBY3NWLENBQWxCLEdBQXNCa0ssRUFBakMsQ0FBaEIsQ0FBZjttQkFDT1YsR0FBUCxFQUFZQyxNQUFaLEVBQW9Cbk4sQ0FBcEIsRUFBdUI2TixPQUF2QixFQUFnQ0MsUUFBaEMsRUFBMENKLEdBQTFDOzs7WUFHQU0sSUFBSWIsT0FBTyxJQUFJbk4sQ0FBSixHQUFRME4sR0FBZixDQUFSO1lBQ0lyVyxJQUFJZ1csSUFBUjtZQUNJbEQsSUFBSW1ELEtBQVI7O2lCQUVTSixHQUFULEVBQWNDLE1BQWQsRUFBc0JFLElBQXRCLEVBQTRCck4sQ0FBNUI7WUFDSW1OLE9BQU8sSUFBSUcsS0FBSixHQUFZSSxHQUFuQixJQUEwQk0sQ0FBOUIsRUFBaUNDLFNBQVNmLEdBQVQsRUFBY0MsTUFBZCxFQUFzQkUsSUFBdEIsRUFBNEJDLEtBQTVCOztlQUUxQmpXLElBQUk4UyxDQUFYLEVBQWM7cUJBQ0QrQyxHQUFULEVBQWNDLE1BQWQsRUFBc0I5VixDQUF0QixFQUF5QjhTLENBQXpCOzs7bUJBR09nRCxPQUFPLElBQUk5VixDQUFKLEdBQVFxVyxHQUFmLElBQXNCTSxDQUE3Qjs7YUFDQSxPQUFPYixPQUFPLElBQUloRCxDQUFKLEdBQVF1RCxHQUFmLElBQXNCTSxDQUE3Qjs7Ozs7WUFHQWIsT0FBTyxJQUFJRSxJQUFKLEdBQVdLLEdBQWxCLE1BQTJCTSxDQUEvQixFQUFrQ0MsU0FBU2YsR0FBVCxFQUFjQyxNQUFkLEVBQXNCRSxJQUF0QixFQUE0QmxELENBQTVCLEVBQWxDLEtBQ0s7O3FCQUVRK0MsR0FBVCxFQUFjQyxNQUFkLEVBQXNCaEQsQ0FBdEIsRUFBeUJtRCxLQUF6Qjs7O1lBR0FuRCxLQUFLbkssQ0FBVCxFQUFZcU4sT0FBT2xELElBQUksQ0FBWDtZQUNSbkssS0FBS21LLENBQVQsRUFBWW1ELFFBQVFuRCxJQUFJLENBQVo7Ozs7QUFJcEIsU0FBUzhELFFBQVQsQ0FBa0JmLEdBQWxCLEVBQXVCQyxNQUF2QixFQUErQjlWLENBQS9CLEVBQWtDOFMsQ0FBbEMsRUFBcUM7U0FDNUIrQyxHQUFMLEVBQVU3VixDQUFWLEVBQWE4UyxDQUFiO1NBQ0tnRCxNQUFMLEVBQWEsSUFBSTlWLENBQWpCLEVBQW9CLElBQUk4UyxDQUF4QjtTQUNLZ0QsTUFBTCxFQUFhLElBQUk5VixDQUFKLEdBQVEsQ0FBckIsRUFBd0IsSUFBSThTLENBQUosR0FBUSxDQUFoQzs7O0FBR0osU0FBUytELElBQVQsQ0FBY0MsR0FBZCxFQUFtQjlXLENBQW5CLEVBQXNCOFMsQ0FBdEIsRUFBeUI7UUFDakJpRSxNQUFNRCxJQUFJOVcsQ0FBSixDQUFWO1FBQ0lBLENBQUosSUFBUzhXLElBQUloRSxDQUFKLENBQVQ7UUFDSUEsQ0FBSixJQUFTaUUsR0FBVDs7O0FDOURKLGNBQWlCQyxLQUFqQjs7QUFFQSxTQUFTQSxLQUFULENBQWVuQixHQUFmLEVBQW9CQyxNQUFwQixFQUE0QnJJLElBQTVCLEVBQWtDQyxJQUFsQyxFQUF3Q0MsSUFBeEMsRUFBOENDLElBQTlDLEVBQW9EbUksUUFBcEQsRUFBOEQ7UUFDdERrQixRQUFRLENBQUMsQ0FBRCxFQUFJcEIsSUFBSXRiLE1BQUosR0FBYSxDQUFqQixFQUFvQixDQUFwQixDQUFaO1FBQ0k2RSxTQUFTLEVBQWI7UUFDSTNJLENBQUosRUFBT0MsQ0FBUDs7V0FFT3VnQixNQUFNMWMsTUFBYixFQUFxQjtZQUNiMmMsT0FBT0QsTUFBTUUsR0FBTixFQUFYO1lBQ0lsQixRQUFRZ0IsTUFBTUUsR0FBTixFQUFaO1lBQ0luQixPQUFPaUIsTUFBTUUsR0FBTixFQUFYOztZQUVJbEIsUUFBUUQsSUFBUixJQUFnQkQsUUFBcEIsRUFBOEI7aUJBQ3JCLElBQUkvVixJQUFJZ1csSUFBYixFQUFtQmhXLEtBQUtpVyxLQUF4QixFQUErQmpXLEdBQS9CLEVBQW9DO29CQUM1QjhWLE9BQU8sSUFBSTlWLENBQVgsQ0FBSjtvQkFDSThWLE9BQU8sSUFBSTlWLENBQUosR0FBUSxDQUFmLENBQUo7b0JBQ0l2SixLQUFLZ1gsSUFBTCxJQUFhaFgsS0FBS2tYLElBQWxCLElBQTBCalgsS0FBS2dYLElBQS9CLElBQXVDaFgsS0FBS2tYLElBQWhELEVBQXNEeE8sT0FBT0gsSUFBUCxDQUFZNFcsSUFBSTdWLENBQUosQ0FBWjs7Ozs7WUFLMUR1RCxJQUFJdk0sS0FBS21mLEtBQUwsQ0FBVyxDQUFDSCxPQUFPQyxLQUFSLElBQWlCLENBQTVCLENBQVI7O1lBRUlILE9BQU8sSUFBSXZTLENBQVgsQ0FBSjtZQUNJdVMsT0FBTyxJQUFJdlMsQ0FBSixHQUFRLENBQWYsQ0FBSjs7WUFFSTlNLEtBQUtnWCxJQUFMLElBQWFoWCxLQUFLa1gsSUFBbEIsSUFBMEJqWCxLQUFLZ1gsSUFBL0IsSUFBdUNoWCxLQUFLa1gsSUFBaEQsRUFBc0R4TyxPQUFPSCxJQUFQLENBQVk0VyxJQUFJdFMsQ0FBSixDQUFaOztZQUVsRDZULFdBQVcsQ0FBQ0YsT0FBTyxDQUFSLElBQWEsQ0FBNUI7O1lBRUlBLFNBQVMsQ0FBVCxHQUFhekosUUFBUWhYLENBQXJCLEdBQXlCaVgsUUFBUWhYLENBQXJDLEVBQXdDO2tCQUM5QnVJLElBQU4sQ0FBVytXLElBQVg7a0JBQ00vVyxJQUFOLENBQVdzRSxJQUFJLENBQWY7a0JBQ010RSxJQUFOLENBQVdtWSxRQUFYOztZQUVBRixTQUFTLENBQVQsR0FBYXZKLFFBQVFsWCxDQUFyQixHQUF5Qm1YLFFBQVFsWCxDQUFyQyxFQUF3QztrQkFDOUJ1SSxJQUFOLENBQVdzRSxJQUFJLENBQWY7a0JBQ010RSxJQUFOLENBQVdnWCxLQUFYO2tCQUNNaFgsSUFBTixDQUFXbVksUUFBWDs7OztXQUlEaFksTUFBUDs7O0FDMUNKLGVBQWlCaVksTUFBakI7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQnhCLEdBQWhCLEVBQXFCQyxNQUFyQixFQUE2Qm5GLEVBQTdCLEVBQWlDMkcsRUFBakMsRUFBcUN6YixDQUFyQyxFQUF3Q2thLFFBQXhDLEVBQWtEO1FBQzFDa0IsUUFBUSxDQUFDLENBQUQsRUFBSXBCLElBQUl0YixNQUFKLEdBQWEsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBWjtRQUNJNkUsU0FBUyxFQUFiO1FBQ0ltWSxLQUFLMWIsSUFBSUEsQ0FBYjs7V0FFT29iLE1BQU0xYyxNQUFiLEVBQXFCO1lBQ2IyYyxPQUFPRCxNQUFNRSxHQUFOLEVBQVg7WUFDSWxCLFFBQVFnQixNQUFNRSxHQUFOLEVBQVo7WUFDSW5CLE9BQU9pQixNQUFNRSxHQUFOLEVBQVg7O1lBRUlsQixRQUFRRCxJQUFSLElBQWdCRCxRQUFwQixFQUE4QjtpQkFDckIsSUFBSS9WLElBQUlnVyxJQUFiLEVBQW1CaFcsS0FBS2lXLEtBQXhCLEVBQStCalcsR0FBL0IsRUFBb0M7b0JBQzVCd1gsT0FBTzFCLE9BQU8sSUFBSTlWLENBQVgsQ0FBUCxFQUFzQjhWLE9BQU8sSUFBSTlWLENBQUosR0FBUSxDQUFmLENBQXRCLEVBQXlDMlEsRUFBekMsRUFBNkMyRyxFQUE3QyxLQUFvREMsRUFBeEQsRUFBNERuWSxPQUFPSCxJQUFQLENBQVk0VyxJQUFJN1YsQ0FBSixDQUFaOzs7OztZQUtoRXVELElBQUl2TSxLQUFLbWYsS0FBTCxDQUFXLENBQUNILE9BQU9DLEtBQVIsSUFBaUIsQ0FBNUIsQ0FBUjs7WUFFSXhmLElBQUlxZixPQUFPLElBQUl2UyxDQUFYLENBQVI7WUFDSTdNLElBQUlvZixPQUFPLElBQUl2UyxDQUFKLEdBQVEsQ0FBZixDQUFSOztZQUVJaVUsT0FBTy9nQixDQUFQLEVBQVVDLENBQVYsRUFBYWlhLEVBQWIsRUFBaUIyRyxFQUFqQixLQUF3QkMsRUFBNUIsRUFBZ0NuWSxPQUFPSCxJQUFQLENBQVk0VyxJQUFJdFMsQ0FBSixDQUFaOztZQUU1QjZULFdBQVcsQ0FBQ0YsT0FBTyxDQUFSLElBQWEsQ0FBNUI7O1lBRUlBLFNBQVMsQ0FBVCxHQUFhdkcsS0FBSzlVLENBQUwsSUFBVXBGLENBQXZCLEdBQTJCNmdCLEtBQUt6YixDQUFMLElBQVVuRixDQUF6QyxFQUE0QztrQkFDbEN1SSxJQUFOLENBQVcrVyxJQUFYO2tCQUNNL1csSUFBTixDQUFXc0UsSUFBSSxDQUFmO2tCQUNNdEUsSUFBTixDQUFXbVksUUFBWDs7WUFFQUYsU0FBUyxDQUFULEdBQWF2RyxLQUFLOVUsQ0FBTCxJQUFVcEYsQ0FBdkIsR0FBMkI2Z0IsS0FBS3piLENBQUwsSUFBVW5GLENBQXpDLEVBQTRDO2tCQUNsQ3VJLElBQU4sQ0FBV3NFLElBQUksQ0FBZjtrQkFDTXRFLElBQU4sQ0FBV2dYLEtBQVg7a0JBQ01oWCxJQUFOLENBQVdtWSxRQUFYOzs7O1dBSURoWSxNQUFQOzs7QUFHSixTQUFTb1ksTUFBVCxDQUFnQmhHLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO1FBQ3hCOVMsS0FBSzJTLEtBQUtFLEVBQWQ7UUFDSTVTLEtBQUsyUyxLQUFLRSxFQUFkO1dBQ085UyxLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQXRCOzs7QUM5Q0osSUFBSXNSLE9BQU9xSCxNQUFYO0FBQ0EsSUFBSVQsU0FBUVUsT0FBWjtBQUNBLElBQUlMLFVBQVNNLFFBQWI7O0FBRUEsZUFBaUJDLE1BQWpCOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCQyxJQUF4QixFQUE4QkMsSUFBOUIsRUFBb0NoQyxRQUFwQyxFQUE4Q2lDLFNBQTlDLEVBQXlEO1dBQzlDLElBQUlDLE1BQUosQ0FBV0osTUFBWCxFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLEVBQStCaEMsUUFBL0IsRUFBeUNpQyxTQUF6QyxDQUFQOzs7QUFHSixTQUFTQyxNQUFULENBQWdCSixNQUFoQixFQUF3QkMsSUFBeEIsRUFBOEJDLElBQTlCLEVBQW9DaEMsUUFBcEMsRUFBOENpQyxTQUE5QyxFQUF5RDtXQUM5Q0YsUUFBUUksV0FBZjtXQUNPSCxRQUFRSSxXQUFmO2dCQUNZSCxhQUFhdFksS0FBekI7O1NBRUtxVyxRQUFMLEdBQWdCQSxZQUFZLEVBQTVCO1NBQ0s4QixNQUFMLEdBQWNBLE1BQWQ7O1NBRUtoQyxHQUFMLEdBQVcsSUFBSW1DLFNBQUosQ0FBY0gsT0FBT3RkLE1BQXJCLENBQVg7U0FDS3ViLE1BQUwsR0FBYyxJQUFJa0MsU0FBSixDQUFjSCxPQUFPdGQsTUFBUCxHQUFnQixDQUE5QixDQUFkOztTQUVLLElBQUl5RixJQUFJLENBQWIsRUFBZ0JBLElBQUk2WCxPQUFPdGQsTUFBM0IsRUFBbUN5RixHQUFuQyxFQUF3QzthQUMvQjZWLEdBQUwsQ0FBUzdWLENBQVQsSUFBY0EsQ0FBZDthQUNLOFYsTUFBTCxDQUFZLElBQUk5VixDQUFoQixJQUFxQjhYLEtBQUtELE9BQU83WCxDQUFQLENBQUwsQ0FBckI7YUFDSzhWLE1BQUwsQ0FBWSxJQUFJOVYsQ0FBSixHQUFRLENBQXBCLElBQXlCK1gsS0FBS0YsT0FBTzdYLENBQVAsQ0FBTCxDQUF6Qjs7O1NBR0MsS0FBSzZWLEdBQVYsRUFBZSxLQUFLQyxNQUFwQixFQUE0QixLQUFLQyxRQUFqQyxFQUEyQyxDQUEzQyxFQUE4QyxLQUFLRixHQUFMLENBQVN0YixNQUFULEdBQWtCLENBQWhFLEVBQW1FLENBQW5FOzs7QUFHSjBkLE9BQU81UCxTQUFQLEdBQW1CO1dBQ1IsZUFBVW9GLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0M7ZUFDOUJvSixPQUFNLEtBQUtuQixHQUFYLEVBQWdCLEtBQUtDLE1BQXJCLEVBQTZCckksSUFBN0IsRUFBbUNDLElBQW5DLEVBQXlDQyxJQUF6QyxFQUErQ0MsSUFBL0MsRUFBcUQsS0FBS21JLFFBQTFELENBQVA7S0FGVzs7WUFLUCxnQkFBVXRmLENBQVYsRUFBYUMsQ0FBYixFQUFnQm1GLENBQWhCLEVBQW1CO2VBQ2hCd2IsUUFBTyxLQUFLeEIsR0FBWixFQUFpQixLQUFLQyxNQUF0QixFQUE4QnJmLENBQTlCLEVBQWlDQyxDQUFqQyxFQUFvQ21GLENBQXBDLEVBQXVDLEtBQUtrYSxRQUE1QyxDQUFQOztDQU5SOztBQVVBLFNBQVNtQyxXQUFULENBQXFCNVAsQ0FBckIsRUFBd0I7V0FBU0EsRUFBRSxDQUFGLENBQVA7O0FBQzFCLFNBQVM2UCxXQUFULENBQXFCN1AsQ0FBckIsRUFBd0I7V0FBU0EsRUFBRSxDQUFGLENBQVA7OztBQ3BDMUIsSUFBTXhOLFlBQVU7cUJBQ007Q0FEdEI7O0lBSXFCc2Q7Ozs7Ozs7OzRCQUNqQkMsNkJBQVNDLFlBQVl4ZCxTQUFTO1lBQ3BCeWQsY0FBVyxLQUFLQyxZQUFMLEVBQWpCO1lBQ0ksQ0FBQ0QsV0FBTCxFQUFlO21CQUNKLElBQVA7O2VBRUdBLFlBQVNGLFFBQVQsQ0FBa0JDLFVBQWxCLEVBQThCeGQsT0FBOUIsQ0FBUDs7OztFQU5tQzhaOztBQVUzQ3dELGNBQWNyTCxZQUFkLENBQTJCalMsU0FBM0I7O0FBRUFzZCxjQUFjSyxnQkFBZCxDQUErQixlQUEvQjs7QUFFQUwsY0FBY00sZ0JBQWQsQ0FBK0IsT0FBL0I7OztvQkFFZ0J6YyxLQUFaLEVBQW1COzs7cURBQ2YsMEJBQU1BLEtBQU4sQ0FEZTs7ZUFFVjBjLGVBQUwsR0FBdUIsSUFBdkI7ZUFDS0MsaUJBQUwsR0FBeUIsSUFBekI7ZUFDS0MsZUFBTDs7OztxQkFHSkMsY0FUSiw2QkFTcUI7WUFDVCxDQUFDLEtBQUtILGVBQVYsRUFBMkI7bUJBQ2hCLEVBQVA7OztZQUdFeFIsWUFBWSxFQUFsQjtZQUNJLEtBQUtsTCxLQUFMLENBQVd1WixRQUFYLEVBQUosRUFBMkI7aUJBQ2xCdlosS0FBTCxDQUFXdVosUUFBWCxHQUFzQnZYLE9BQXRCLENBQThCLFVBQVVsSCxDQUFWLEVBQWE7b0JBQ2pDZ2lCLE1BQU1oZSxhQUFBLENBQWNpZSxvQkFBZCxDQUFtQ2ppQixFQUFFLFFBQUYsQ0FBbkMsRUFBZ0QsSUFBaEQsQ0FBWjtvQkFDSWdpQixHQUFKLEVBQVM7OEJBQ0s5WixJQUFWLENBQWU4WixHQUFmOzthQUhSOzs7YUFRQ0osZUFBTCxHQUF1QixLQUF2QjthQUNLQyxpQkFBTCxHQUF5QixJQUF6QjthQUNLSyxjQUFMLEdBQXNCLEtBQXRCO2VBQ085UixTQUFQO0tBM0JSOztxQkE4Qkl2SyxjQTlCSiw2QkE4QnFCO1lBQ1BoQyxLQUFLLEtBQUtBLEVBQWhCO2FBQ0tzZSxpQkFBTDs7WUFHTXZZLFdBQVcsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixhQUF4QixDQUFqQjtZQUNNUixVQUFVLEtBQUtLLGFBQUwsQ0FBbUIyWSxRQUFRblUsS0FBUixDQUFjb1UsWUFBakMsRUFBK0NELFFBQVFuVSxLQUFSLENBQWNxVSxjQUE3RCxFQUE2RTFZLFFBQTdFLENBQWhCO2FBQ0tnQixVQUFMLENBQWdCeEIsT0FBaEI7WUFDTXRELFNBQVMsS0FBS3dDLFlBQUwsRUFBZjtXQUNHaWEsVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCMWMsTUFBL0I7YUFDSzJDLGtCQUFMLENBQXdCLENBQ3BCLENBQUMsT0FBRCxFQUFVLENBQVYsQ0FEb0IsRUFFcEIsQ0FBQyxjQUFELEVBQWlCLENBQWpCLENBRm9CLENBQXhCO0tBeENSOztxQkE4Q0lnYSxJQTlDSixtQkE4Q1c7YUFDRTliLGFBQUw7YUFDSytiLGFBQUw7O1lBRUksQ0FBQyxLQUFLQyxZQUFWLEVBQXdCO2dCQUNkN2UsTUFBTSxLQUFLUyxNQUFMLEVBQVo7Z0JBQ0k2SSxVQUFVbkosY0FBY0gsR0FBZCxDQURkO2dCQUVNb1MsT0FBTyxLQUFLaFIsS0FBTCxDQUFXZ1IsSUFBeEI7Z0JBQ00wTSxrQkFBa0IsRUFBeEI7Z0JBQ005QixTQUFTLEVBQWY7aUJBQ0s2QixZQUFMLEdBQW9CLENBQXBCO2dCQUNNOWUsS0FBSyxLQUFLQSxFQUFoQjtnQkFDTWdmLGNBQWMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFwQjtpQkFDSyxJQUFJNVosSUFBSSxDQUFSLEVBQVd3SyxJQUFJeUMsS0FBSzFTLE1BQXpCLEVBQWlDeUYsSUFBSXdLLENBQXJDLEVBQXdDeEssR0FBeEMsRUFBNkM7b0JBQ3JDLENBQUNpTixLQUFLak4sQ0FBTCxDQUFMLEVBQWM7OztvQkFHVmdGLGNBQUo7b0JBQ0l0RixNQUFNQyxPQUFOLENBQWNzTixLQUFLak4sQ0FBTCxDQUFkLENBQUosRUFBNEI7NEJBQ2hCaU4sS0FBS2pOLENBQUwsQ0FBUjtpQkFESixNQUVPLElBQUlpTixLQUFLak4sQ0FBTCxFQUFRaUcsSUFBWixFQUFrQjt3QkFDZnpQLElBQUksS0FBSytULFdBQUwsQ0FBaUIwQyxLQUFLak4sQ0FBTCxDQUFqQixDQUFWOzs0QkFFUSxDQUFDeEosRUFBRSxDQUFGLENBQUQsRUFBT0EsRUFBRSxDQUFGLENBQVAsRUFBYXlXLEtBQUtqTixDQUFMLEVBQVE2WixVQUFyQixDQUFSOztvQkFFRUMsTUFBTSxLQUFLQyxZQUFMLENBQWtCLEVBQUUsY0FBZS9VLE1BQU0sQ0FBTixDQUFqQixFQUFsQixDQUFaO29CQUNJOFUsR0FBSixFQUFTO3lCQUNBSixZQUFMO3dCQUNNdlUsS0FBS3RLLElBQUl5SixpQkFBSixDQUFzQixJQUFJdkosbUJBQUosQ0FBd0JpSyxLQUF4QixDQUF0QixFQUFzRGIsT0FBdEQsQ0FBWDtvQ0FDZ0JsRixJQUFoQixDQUFxQmtHLEdBQUcxTyxDQUF4QixFQUEyQjBPLEdBQUd6TyxDQUE5QixFQUFpQ29qQixJQUFJRSxHQUFyQzsyQkFDTy9hLElBQVAsQ0FBWSxDQUFDa0csR0FBRzFPLENBQUosRUFBTzBPLEdBQUd6TyxDQUFWLEVBQWFvakIsSUFBSW5lLElBQWpCLEVBQXVCbWUsSUFBSTNhLE1BQTNCLEVBQW1DNkYsS0FBbkMsQ0FBWjs7d0JBRUk4VSxJQUFJbmUsSUFBSixDQUFTLENBQVQsSUFBY2llLFlBQVksQ0FBWixDQUFsQixFQUFrQztvQ0FDbEIsQ0FBWixJQUFpQkUsSUFBSW5lLElBQUosQ0FBUyxDQUFULENBQWpCOzt3QkFFQW1lLElBQUluZSxJQUFKLENBQVMsQ0FBVCxJQUFjaWUsWUFBWSxDQUFaLENBQWxCLEVBQWtDO29DQUNsQixDQUFaLElBQWlCRSxJQUFJbmUsSUFBSixDQUFTLENBQVQsQ0FBakI7Ozs7ZUFJVHNlLFVBQUgsQ0FBY3JmLEdBQUcyZSxZQUFqQixFQUErQixJQUFJMWtCLFlBQUosQ0FBaUI4a0IsZUFBakIsQ0FBL0IsRUFBa0UvZSxHQUFHc2YsV0FBckU7O2lCQUVLQyxZQUFMLEdBQW9CUCxXQUFwQjtpQkFDS1EsVUFBTCxDQUFnQnZDLE1BQWhCOzs7YUFHQ3dDLFlBQUw7YUFDS0MsY0FBTDtLQTdGUjs7cUJBZ0dJQyxpQkFoR0osZ0NBZ0d3QjthQUNYRixZQUFMO2FBQ0tDLGNBQUw7S0FsR1I7O3FCQXFHSWhhLFFBckdKLHVCQXFHZTthQUNGa2EsYUFBTDtlQUNPLEtBQUtDLFFBQVo7ZUFDTyxLQUFLQyxRQUFaO2lDQUNNcGEsUUFBTixDQUFlcUYsS0FBZixDQUFxQixJQUFyQixFQUEyQkMsU0FBM0I7S0F6R1I7O3FCQTRHSXlTLFFBNUdKLHFCQTRHYUMsVUE1R2IsRUE0R3lCeGQsT0E1R3pCLEVBNEdrQztZQUN0QixDQUFDLEtBQUs2ZixRQUFWLEVBQW9CO21CQUNULElBQVA7O1lBRUU5ZixNQUFNLEtBQUtTLE1BQUwsRUFBWjtZQUNNNkksVUFBVW5KLGNBQWNILEdBQWQsQ0FBaEI7WUFDTTNELElBQUkyRCxJQUFJeUosaUJBQUosQ0FBc0JnVSxVQUF0QixFQUFrQ25VLE9BQWxDLENBQVY7O1lBRU12TixRQUFRaUUsSUFBSW1JLFFBQUosS0FBaUJuSSxJQUFJbUksUUFBSixDQUFhbUIsT0FBYixDQUEvQjtZQUNJcEcsSUFBSW5ILFFBQVEsS0FBS3VqQixZQUFMLENBQWtCLENBQWxCLENBQWhCO1lBQ0luYyxJQUFJcEgsUUFBUSxLQUFLdWpCLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FEaEI7WUFFSXBjLElBQUksQ0FBUixFQUFXO2dCQUNILENBQUo7O1lBRUFDLElBQUksQ0FBUixFQUFXO2dCQUNILENBQUo7O1lBRUU2WCxNQUFNLEtBQUs4RSxRQUFMLENBQWMzRCxLQUFkLENBQW9COWYsRUFBRVQsQ0FBRixHQUFNc0gsQ0FBMUIsRUFBNkI3RyxFQUFFUixDQUFGLEdBQU1zSCxDQUFuQyxFQUFzQzlHLEVBQUVULENBQUYsR0FBTXNILENBQTVDLEVBQStDN0csRUFBRVIsQ0FBRixHQUFNc0gsQ0FBckQsQ0FBWjtZQUNJNGMsZUFBSjtZQUFZQyxjQUFaO1lBQ0kvZixPQUFKLEVBQWE7Z0JBQ0xBLFFBQVEsUUFBUixDQUFKLEVBQXVCO3lCQUNWQSxRQUFRLFFBQVIsQ0FBVDs7Z0JBRUFBLFFBQVEsT0FBUixDQUFKLEVBQXNCO3dCQUNWQSxRQUFRLE9BQVIsQ0FBUjs7OztZQUlGc0UsU0FBUyxFQUFmO2FBQ0ssSUFBSVksSUFBSSxDQUFSLEVBQVd3SyxJQUFJcUwsSUFBSXRiLE1BQXhCLEVBQWdDeUYsSUFBSXdLLENBQXBDLEVBQXVDeEssR0FBdkMsRUFBNEM7Z0JBQ2xDc0ksSUFBSSxLQUFLd1MsWUFBTCxDQUFrQmpGLElBQUk3VixDQUFKLENBQWxCLENBQVY7Z0JBQ012SixJQUFJNlIsRUFBRSxDQUFGLENBQVY7Z0JBQ0k1UixJQUFJNFIsRUFBRSxDQUFGLENBRFI7Z0JBRU0zTSxPQUFPMk0sRUFBRSxDQUFGLENBQWI7Z0JBQ0luSixTQUFTbUosRUFBRSxDQUFGLENBRGI7Z0JBRU15UyxTQUFTLENBQ1hua0IsU0FBUyxDQUFDK0UsS0FBSyxDQUFMLENBQUQsR0FBVyxDQUFYLEdBQWV3RCxPQUFPMUksQ0FBL0IsQ0FEVyxFQUVYRyxTQUFTLENBQUMrRSxLQUFLLENBQUwsQ0FBRCxHQUFXLENBQVgsR0FBZXdELE9BQU96SSxDQUEvQixDQUZXLEVBR1hFLFNBQVMrRSxLQUFLLENBQUwsSUFBVSxDQUFWLEdBQWN3RCxPQUFPMUksQ0FBOUIsQ0FIVyxFQUlYRyxTQUFTK0UsS0FBSyxDQUFMLElBQVUsQ0FBVixHQUFjd0QsT0FBT3pJLENBQTlCLENBSlcsQ0FBZjtnQkFNSVEsRUFBRVQsQ0FBRixJQUFRQSxJQUFJc2tCLE9BQU8sQ0FBUCxDQUFaLElBQ0E3akIsRUFBRVQsQ0FBRixJQUFRQSxJQUFJc2tCLE9BQU8sQ0FBUCxDQURaLElBRUE3akIsRUFBRVIsQ0FBRixJQUFRQSxJQUFJcWtCLE9BQU8sQ0FBUCxDQUZaLElBR0E3akIsRUFBRVIsQ0FBRixJQUFRQSxJQUFJcWtCLE9BQU8sQ0FBUCxDQUhoQixFQUc0QjtvQkFDcEIsQ0FBQ0gsTUFBRCxJQUFXQSxPQUFPdFMsRUFBRSxDQUFGLENBQVAsQ0FBZixFQUE2QjsyQkFFbEJySixJQUFQLENBQVlxSixFQUFFLENBQUYsQ0FBWjs7b0JBRUF1UyxTQUFTemIsT0FBTzdFLE1BQVAsSUFBaUJzZ0IsS0FBOUIsRUFBcUM7Ozs7O2VBTXRDemIsTUFBUDtLQW5LUjs7cUJBc0tJZ2IsVUF0S0osdUJBc0tlbk4sSUF0S2YsRUFzS3FCO2FBQ1I2TixZQUFMLEdBQW9CN04sSUFBcEI7YUFDSzBOLFFBQUwsR0FBZ0IvQyxTQUFPM0ssSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsRUFBekIsRUFBNkIrTixVQUE3QixDQUFoQjtLQXhLUjs7cUJBMktJakIsWUEzS0oseUJBMktpQmtCLEtBM0tqQixFQTJLd0I7WUFDWixDQUFDLEtBQUtoZixLQUFMLENBQVd5WixhQUFoQixFQUErQjttQkFDcEIsSUFBUDs7YUFFQyxJQUFJMVYsSUFBSSxDQUFSLEVBQVd0SCxNQUFNLEtBQUt1RCxLQUFMLENBQVd5WixhQUFYLENBQXlCbmIsTUFBL0MsRUFBdUR5RixJQUFJdEgsR0FBM0QsRUFBZ0VzSCxHQUFoRSxFQUFxRTtnQkFDN0QsS0FBSy9ELEtBQUwsQ0FBV3laLGFBQVgsQ0FBeUIxVixDQUF6QixFQUE0QjRhLE1BQTVCLENBQW1DSyxLQUFuQyxNQUE4QyxJQUFsRCxFQUF3RDt1QkFDN0M7MkJBQ0tqYixDQURMO2dDQUVVLEtBQUt5YSxRQUFMLENBQWNoYyxTQUFkLENBQXdCdUIsQ0FBeEIsQ0FGVjs4QkFHVSxLQUFLeWEsUUFBTCxDQUFjL2IsT0FBZCxDQUFzQnNCLENBQXRCLENBSFY7NEJBSVUsS0FBS3lhLFFBQUwsQ0FBYzliLEtBQWQsQ0FBb0JxQixDQUFwQjtpQkFKakI7OztlQVFELElBQVA7S0F6TFI7O3FCQTRMSXlaLGFBNUxKLDRCQTRMb0I7OztZQUNSLENBQUMsS0FBS2IsaUJBQVYsRUFBNkI7OztZQUd2QnpSLFlBQVksS0FBS0EsU0FBdkI7WUFDTXRKLFVBQVUsRUFBaEI7WUFDSSxLQUFLNUIsS0FBTCxDQUFXdVosUUFBWCxFQUFKLEVBQTJCOztvQkFDakIzYSxNQUFNLE9BQUtTLE1BQUwsRUFBWjt1QkFDS1csS0FBTCxDQUFXdVosUUFBWCxHQUFzQnZYLE9BQXRCLENBQThCLGlCQUFTO3dCQUM3QmlkLFNBQVMsSUFBSW5nQixlQUFKLENBQW9CLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBcEIsRUFBNEI7a0NBQzVCcVAsTUFBTSxRQUFOO3FCQURBLENBQWY7d0JBR00rUSxTQUFTRCxPQUFPRSxVQUFQLENBQWtCalUsU0FBbEIsRUFBNkJ0TSxJQUFJa0IsV0FBakMsQ0FBZjt3QkFDSW9mLE1BQUosRUFBWTtnQ0FDQWxjLElBQVIsQ0FBYWtjLE1BQWI7O2lCQU5SOzs7O2FBV0NWLFFBQUwsR0FBZ0IsS0FBSzdjLFlBQUwsQ0FBa0JDLE9BQWxCLEVBQTJCLElBQTNCLENBQWhCO1lBQ0ksQ0FBQyxLQUFLNGMsUUFBVixFQUFvQjs7OztZQUloQixPQUFRWSxNQUFSLElBQW1CLFdBQW5CLElBQWtDQSxPQUFPQywyQkFBN0MsRUFBMEU7bUJBQy9EQSwyQkFBUCxDQUFtQ3JlLFVBQW5DLENBQThDLElBQTlDLEVBQW9EaUMsU0FBcEQsQ0FBOEQsS0FBS3ViLFFBQUwsQ0FBYy9lLE1BQTVFLEVBQW9GLENBQXBGLEVBQXVGLENBQXZGOzs7YUFHQ2tkLGlCQUFMLEdBQXlCLEtBQXpCOztZQUVJLENBQUMsS0FBS0ssY0FBVixFQUEwQjtnQkFDaEJ6YSxNQUFNLEtBQUtpYyxRQUFMLENBQWMvZSxNQUFkLENBQXFCdUIsVUFBckIsQ0FBZ0MsSUFBaEMsQ0FBWjtnQkFDTUgsUUFBUSxLQUFLMmQsUUFBTCxDQUFjL2UsTUFBZCxDQUFxQm9CLEtBQW5DO2dCQUNNQyxTQUFTLEtBQUswZCxRQUFMLENBQWMvZSxNQUFkLENBQXFCcUIsTUFBcEM7Z0JBQ013ZSxZQUFZL2MsSUFBSWdkLFlBQUosQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIxZSxLQUF2QixFQUE4QkMsTUFBOUIsQ0FBbEI7aUJBQ0s2RSxXQUFMLENBQWlCMlosU0FBakI7aUJBQ0s3WSxhQUFMLENBQW1CLFdBQW5CO2lCQUNLdVcsY0FBTCxHQUFzQixJQUF0Qjs7Z0JBRU13QyxVQUFVLEtBQUtmLFFBQUwsR0FBZ0IsRUFBaEM7aUJBQ0ssSUFBSTFhLElBQUksQ0FBUixFQUFXdEgsTUFBTSxLQUFLdUQsS0FBTCxDQUFXeVosYUFBWCxDQUF5Qm5iLE1BQS9DLEVBQXVEeUYsSUFBSXRILEdBQTNELEVBQWdFc0gsR0FBaEUsRUFBcUU7d0JBQ3pEZixJQUFSLENBQWEwRyxLQUFiLENBQW1COFYsT0FBbkIsRUFBNEIsS0FBS2hCLFFBQUwsQ0FBY2hjLFNBQWQsQ0FBd0J1QixDQUF4QixDQUE1Qjt3QkFDUWYsSUFBUixDQUFhLEtBQUt3YixRQUFMLENBQWMvYixPQUFkLENBQXNCc0IsQ0FBdEIsRUFBeUJ2SixDQUF0QyxFQUF5QyxLQUFLZ2tCLFFBQUwsQ0FBYy9iLE9BQWQsQ0FBc0JzQixDQUF0QixFQUF5QnRKLENBQWxFOzs7S0F0T2hCOztxQkEyT0k2VCxXQTNPSix3QkEyT2dCdkYsS0EzT2hCLEVBMk91QjtZQUNYQSxNQUFNdUgsUUFBVixFQUFvQjtvQkFFUnZILE1BQU11SCxRQUFOLENBQWVDLFdBQXZCO1NBRkosTUFHTyxJQUFJeEgsTUFBTXdILFdBQVYsRUFBdUI7b0JBRWxCeEgsTUFBTXdILFdBQWQ7O2VBRUd4SCxLQUFQO0tBblBSOztxQkFzUElxVixZQXRQSiwyQkFzUG1CO1lBQ0x6ZixLQUFLLEtBQUtBLEVBQWhCO1lBQ00ySSxJQUFJLEtBQUtJLFlBQUwsRUFBVjtXQUNHK1gsZ0JBQUgsQ0FBb0I5Z0IsR0FBR3VGLE9BQUgsQ0FBV3diLFFBQS9CLEVBQXlDLEtBQXpDLEVBQWdEcFksQ0FBaEQ7V0FDR3FZLFNBQUgsQ0FBYWhoQixHQUFHdUYsT0FBSCxDQUFXMGIsT0FBeEIsRUFBaUMsS0FBS3ZnQixNQUFMLEdBQWMwSCxRQUFkLEVBQWpDO1dBQ0c4WSxVQUFILENBQWNsaEIsR0FBR3VGLE9BQUgsQ0FBVzRiLFFBQXpCLEVBQW1DLEtBQUtyQixRQUF4Qzs7V0FFR3NCLFVBQUgsQ0FBY3BoQixHQUFHcWhCLE1BQWpCLEVBQXlCLENBQXpCLEVBQTRCLEtBQUt2QyxZQUFqQztLQTdQUjs7cUJBZ1FJYixlQWhRSiw4QkFnUXNCO2FBQ1Q1YyxLQUFMLENBQVdpZ0IsRUFBWCxDQUFjLFVBQWQsRUFBMEIsS0FBS0MsZUFBL0IsRUFBZ0QsSUFBaEQ7S0FqUVI7O3FCQW9RSTNCLGFBcFFKLDRCQW9Rb0I7YUFDUHZlLEtBQUwsQ0FBV21nQixHQUFYLENBQWUsVUFBZixFQUEyQixLQUFLRCxlQUFoQyxFQUFpRCxJQUFqRDtLQXJRUjs7cUJBd1FJQSxlQXhRSiw4QkF3UXNCO2FBQ1R4RCxlQUFMLEdBQXVCLElBQXZCO0tBelFSOztxQkE0UUlPLGlCQTVRSixnQ0E0UXdCO1lBQ1ptRCxRQUFRLEtBQUtwZ0IsS0FBTCxDQUFXbkIsT0FBWCxDQUFtQixlQUFuQixDQUFaO1lBQ0ksQ0FBQ3VoQixLQUFMLEVBQVk7OztZQUdOemhCLEtBQUssS0FBS0EsRUFBaEI7Z0JBQ1F5aEIsTUFBTUMsV0FBTixFQUFSO1lBQ0lELFVBQVUsS0FBZCxFQUFxQjtlQUNkRSxhQUFILENBQWlCM2hCLEdBQUc0aEIsUUFBcEI7U0FESixNQUVPLElBQUlILFVBQVUsVUFBZCxFQUEwQjtlQUMxQkUsYUFBSCxDQUFpQjNoQixHQUFHNmhCLGFBQXBCO1NBREcsTUFFQSxJQUFJSixVQUFVLG1CQUFkLEVBQW1DO2VBQ25DRSxhQUFILENBQWlCM2hCLEdBQUc4aEIscUJBQXBCOztLQXhSWjs7O0VBQXNEdGhCLGFBQXREOzs7Ozs7O01DekJJcEIsUUFBUyxZQUFXOzs7YUFxQmZBLEtBQVQsQ0FBZTJpQixNQUFmLEVBQXVCQyxRQUF2QixFQUFpQzFHLEtBQWpDLEVBQXdDN04sU0FBeEMsRUFBbUQ7VUFDN0N1UyxNQUFKO1VBQ0ksUUFBT2dDLFFBQVAseUNBQU9BLFFBQVAsT0FBb0IsUUFBeEIsRUFBa0M7Z0JBQ3hCQSxTQUFTMUcsS0FBakI7b0JBQ1kwRyxTQUFTdlUsU0FBckI7aUJBQ1N1VSxTQUFTaEMsTUFBbEI7bUJBQ1dnQyxTQUFTQSxRQUFwQjs7O1VBSUVDLGFBQWEsRUFBakI7VUFDSUMsY0FBYyxFQUFsQjs7VUFFSUMsWUFBWSxPQUFPQyxNQUFQLElBQWlCLFdBQWpDOztVQUVJLE9BQU9KLFFBQVAsSUFBbUIsV0FBdkIsRUFDRUEsV0FBVyxJQUFYOztVQUVFLE9BQU8xRyxLQUFQLElBQWdCLFdBQXBCLEVBQ0VBLFFBQVF0RixRQUFSOztlQUdPcU0sTUFBVCxDQUFnQk4sTUFBaEIsRUFBd0J6RyxLQUF4QixFQUErQjtZQUV6QnlHLFdBQVcsSUFBZixFQUNFLE9BQU8sSUFBUDs7WUFFRXpHLFNBQVMsQ0FBYixFQUNFLE9BQU95RyxNQUFQOztZQUVFTyxLQUFKO1lBQ0lDLEtBQUo7WUFDSSxRQUFPUixNQUFQLHlDQUFPQSxNQUFQLE1BQWlCLFFBQXJCLEVBQStCO2lCQUN0QkEsTUFBUDs7O1lBR0UzaUIsTUFBTW9qQixTQUFOLENBQWdCVCxNQUFoQixDQUFKLEVBQTZCO2tCQUNuQixFQUFSO1NBREYsTUFFTyxJQUFJM2lCLE1BQU1xakIsVUFBTixDQUFpQlYsTUFBakIsQ0FBSixFQUE4QjtrQkFDM0IsSUFBSVcsTUFBSixDQUFXWCxPQUFPelcsTUFBbEIsRUFBMEJxWCxpQkFBaUJaLE1BQWpCLENBQTFCLENBQVI7Y0FDSUEsT0FBT2EsU0FBWCxFQUFzQk4sTUFBTU0sU0FBTixHQUFrQmIsT0FBT2EsU0FBekI7U0FGakIsTUFHQSxJQUFJeGpCLE1BQU15akIsUUFBTixDQUFlZCxNQUFmLENBQUosRUFBNEI7a0JBQ3pCLElBQUllLElBQUosQ0FBU2YsT0FBT2dCLE9BQVAsRUFBVCxDQUFSO1NBREssTUFFQSxJQUFJWixhQUFhQyxPQUFPWSxRQUFQLENBQWdCakIsTUFBaEIsQ0FBakIsRUFBMEM7a0JBQ3ZDLElBQUlLLE1BQUosQ0FBV0wsT0FBT3BpQixNQUFsQixDQUFSO2lCQUNPekYsSUFBUCxDQUFZb29CLEtBQVo7aUJBQ09BLEtBQVA7U0FISyxNQUlBO2NBQ0QsT0FBTzdVLFNBQVAsSUFBb0IsV0FBeEIsRUFBcUM7b0JBQzNCd1YsT0FBT0MsY0FBUCxDQUFzQm5CLE1BQXRCLENBQVI7b0JBQ1FrQixPQUFPbHBCLE1BQVAsQ0FBY3dvQixLQUFkLENBQVI7V0FGRixNQUlLO29CQUNLVSxPQUFPbHBCLE1BQVAsQ0FBYzBULFNBQWQsQ0FBUjtvQkFDUUEsU0FBUjs7OztZQUlBdVUsUUFBSixFQUFjO2NBQ1JuUSxRQUFRb1EsV0FBV2hXLE9BQVgsQ0FBbUI4VixNQUFuQixDQUFaOztjQUVJbFEsU0FBUyxDQUFDLENBQWQsRUFBaUI7bUJBQ1JxUSxZQUFZclEsS0FBWixDQUFQOztxQkFFU3hOLElBQVgsQ0FBZ0IwZCxNQUFoQjtzQkFDWTFkLElBQVosQ0FBaUJpZSxLQUFqQjs7O2FBR0csSUFBSWxkLENBQVQsSUFBYzJjLE1BQWQsRUFBc0I7Y0FDaEJvQixLQUFKO2NBQ0laLEtBQUosRUFBVztvQkFDRFUsT0FBT0csd0JBQVAsQ0FBZ0NiLEtBQWhDLEVBQXVDbmQsQ0FBdkMsQ0FBUjs7O2NBR0UrZCxTQUFTQSxNQUFNOWpCLEdBQU4sSUFBYSxJQUExQixFQUFnQzs7O2dCQUcxQitGLENBQU4sSUFBV2lkLE9BQU9OLE9BQU8zYyxDQUFQLENBQVAsRUFBa0JrVyxRQUFRLENBQTFCLENBQVg7OztlQUdLZ0gsS0FBUDs7O2FBR0tELE9BQU9OLE1BQVAsRUFBZXpHLEtBQWYsQ0FBUDs7O1VBVUkrSCxjQUFOLEdBQXVCLFNBQVNBLGNBQVQsQ0FBd0J0QixNQUF4QixFQUFnQztVQUNqREEsV0FBVyxJQUFmLEVBQ0UsT0FBTyxJQUFQOztVQUVFemxCLElBQUksU0FBSkEsQ0FBSSxHQUFZLEVBQXBCO1FBQ0VtUixTQUFGLEdBQWNzVSxNQUFkO2FBQ08sSUFBSXpsQixDQUFKLEVBQVA7S0FORjs7YUFXU2duQixVQUFULENBQW9CQyxDQUFwQixFQUF1QjthQUNkTixPQUFPeFYsU0FBUCxDQUFpQitWLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkYsQ0FBL0IsQ0FBUDs7VUFFSUQsVUFBTixHQUFtQkEsVUFBbkI7O2FBRVNULFFBQVQsQ0FBa0JVLENBQWxCLEVBQXFCO2FBQ1osUUFBT0EsQ0FBUCx5Q0FBT0EsQ0FBUCxPQUFhLFFBQWIsSUFBeUJELFdBQVdDLENBQVgsTUFBa0IsZUFBbEQ7O1VBRUlWLFFBQU4sR0FBaUJBLFFBQWpCOzthQUVTTCxTQUFULENBQW1CZSxDQUFuQixFQUFzQjthQUNiLFFBQU9BLENBQVAseUNBQU9BLENBQVAsT0FBYSxRQUFiLElBQXlCRCxXQUFXQyxDQUFYLE1BQWtCLGdCQUFsRDs7VUFFSWYsU0FBTixHQUFrQkEsU0FBbEI7O2FBRVNDLFVBQVQsQ0FBb0JjLENBQXBCLEVBQXVCO2FBQ2QsUUFBT0EsQ0FBUCx5Q0FBT0EsQ0FBUCxPQUFhLFFBQWIsSUFBeUJELFdBQVdDLENBQVgsTUFBa0IsaUJBQWxEOztVQUVJZCxVQUFOLEdBQW1CQSxVQUFuQjs7YUFFU0UsZ0JBQVQsQ0FBMEJlLEVBQTFCLEVBQThCO1VBQ3hCQyxRQUFRLEVBQVo7VUFDSUQsR0FBR0UsTUFBUCxFQUFlRCxTQUFTLEdBQVQ7VUFDWEQsR0FBR0csVUFBUCxFQUFtQkYsU0FBUyxHQUFUO1VBQ2ZELEdBQUdJLFNBQVAsRUFBa0JILFNBQVMsR0FBVDthQUNYQSxLQUFQOztVQUVJaEIsZ0JBQU4sR0FBeUJBLGdCQUF6Qjs7V0FFT3ZqQixLQUFQO0dBMUpZLEVBQVo7O01BNkpJLGFBQWtCLFFBQWxCLElBQThCMmtCLE9BQU9DLE9BQXpDLEVBQWtEO2tCQUNoRCxHQUFpQjVrQixLQUFqQjs7OztBQzlKRixjQUFpQjtjQUNILENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBREc7aUJBRUEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FGQTtTQUdSLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULENBSFE7ZUFJRixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUpFO1VBS1AsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FMTztVQU1QLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBTk87V0FPTixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQVBNO1VBUVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FSTzttQkFTRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQVRGO1NBVVIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsQ0FWUTtlQVdGLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxHQUFWLENBWEU7VUFZUCxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsRUFBVixDQVpPO2NBYUgsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FiRztjQWNILENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBZEc7ZUFlRixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsQ0FBWCxDQWZFO2NBZ0JILENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLENBaEJHO1VBaUJQLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLENBakJPO21CQWtCRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQWxCRjthQW1CSixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQW5CSTtZQW9CTCxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsRUFBVixDQXBCSztTQXFCUixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxDQXJCUTthQXNCSixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxDQXRCSTthQXVCSixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxDQXZCSTtrQkF3QkMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEVBQVgsQ0F4QkQ7YUF5QkosQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0F6Qkk7Y0EwQkgsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0ExQkc7YUEyQkosQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0EzQkk7Y0E0QkgsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0E1Qkc7Z0JBNkJELENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxHQUFULENBN0JDO21CQThCRSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixDQTlCRjtlQStCRixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsQ0FBWCxDQS9CRTtlQWdDRixDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsR0FBVixDQWhDRTtZQWlDTCxDQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVMsQ0FBVCxDQWpDSztlQWtDRixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQWxDRTtpQkFtQ0EsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FuQ0E7a0JBb0NDLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULENBcENEO2tCQXFDQyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQXJDRDtrQkFzQ0MsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0F0Q0Q7a0JBdUNDLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULENBdkNEO2VBd0NGLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxHQUFULENBeENFO2FBeUNKLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxHQUFWLENBekNJO2dCQTBDRCxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxDQTFDQztZQTJDTCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTNDSztZQTRDTCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTVDSztlQTZDRixDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixDQTdDRTtjQThDSCxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsRUFBVixDQTlDRztnQkErQ0QsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0EvQ0M7Z0JBZ0RELENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLENBaERDO1lBaURMLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxHQUFULENBakRLO2NBa0RILENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBbERHO2VBbURGLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBbkRFO1NBb0RSLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLENBcERRO2NBcURILENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLENBckRHO1NBc0RSLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBdERRO1VBdURQLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBdkRPO2dCQXdERCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsRUFBWCxDQXhEQztTQXlEUixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQXpEUTthQTBESixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTFESTtZQTJETCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTNESztjQTRESCxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsRUFBVixDQTVERztXQTZETixDQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVEsR0FBUixDQTdETTtVQThEUCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTlETztVQStEUCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQS9ETzthQWdFSixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQWhFSTtrQkFpRUMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FqRUQ7Y0FrRUgsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLENBQVgsQ0FsRUc7aUJBbUVBLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBbkVBO2NBb0VILENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBcEVHO2VBcUVGLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBckVFO2NBc0VILENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBdEVHO3lCQXVFUSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQXZFUjtjQXdFSCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQXhFRztlQXlFRixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQXpFRTtjQTBFSCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTFFRztjQTJFSCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTNFRztnQkE0RUQsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0E1RUM7a0JBNkVDLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBN0VEO2lCQThFQSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTlFQTttQkErRUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0EvRUY7bUJBZ0ZFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBaEZGO21CQWlGRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQWpGRjtnQkFrRkQsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FsRkM7U0FtRlIsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0FuRlE7Y0FvRkgsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEVBQVYsQ0FwRkc7VUFxRlAsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FyRk87WUFzRkwsQ0FBQyxHQUFELEVBQU0sQ0FBTixFQUFTLEdBQVQsQ0F0Rks7V0F1Rk4sQ0FBQyxHQUFELEVBQU0sQ0FBTixFQUFTLENBQVQsQ0F2Rk07cUJBd0ZJLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBeEZKO2VBeUZGLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBekZFO2lCQTBGQSxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsR0FBVixDQTFGQTtpQkEyRkEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0EzRkE7bUJBNEZFLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBNUZGO29CQTZGRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTdGSDtzQkE4RkssQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsQ0E5Rkw7b0JBK0ZHLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBL0ZIO29CQWdHRyxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsR0FBVixDQWhHSDtpQkFpR0EsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEdBQVQsQ0FqR0E7Y0FrR0gsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FsR0c7Y0FtR0gsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FuR0c7YUFvR0osQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FwR0k7Z0JBcUdELENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBckdDO1NBc0dSLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBdEdRO1lBdUdMLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBdkdLO1VBd0dQLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLENBeEdPO2NBeUdILENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLENBekdHO1dBMEdOLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLENBMUdNO2NBMkdILENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxDQUFWLENBM0dHO1dBNEdOLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBNUdNO2tCQTZHQyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTdHRDtjQThHSCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTlHRztrQkErR0MsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0EvR0Q7a0JBZ0hDLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBaEhEO2VBaUhGLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBakhFO2NBa0hILENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBbEhHO1NBbUhSLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLENBbkhRO1NBb0hSLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBcEhRO1NBcUhSLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBckhRO2VBc0hGLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBdEhFO1dBdUhOLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxHQUFULENBdkhNO2tCQXdIQyxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsR0FBVixDQXhIRDtRQXlIVCxDQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVMsQ0FBVCxDQXpIUztjQTBISCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQTFIRztjQTJISCxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixDQTNIRztnQkE0SEQsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEVBQVYsQ0E1SEM7V0E2SE4sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0E3SE07ZUE4SEYsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEVBQVgsQ0E5SEU7YUErSEosQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEVBQVYsQ0EvSEk7YUFnSUosQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FoSUk7V0FpSU4sQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEVBQVYsQ0FqSU07V0FrSU4sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FsSU07WUFtSUwsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FuSUs7Y0FvSUgsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEdBQVYsQ0FwSUc7Y0FxSUgsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FySUc7Y0FzSUgsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0F0SUc7U0F1SVIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0F2SVE7Z0JBd0lELENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULENBeElDO2NBeUlILENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBeklHO1FBMElULENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBMUlTO1NBMklSLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULENBM0lRO1lBNElMLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBNUlLO1dBNklOLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxFQUFWLENBN0lNO2NBOElILENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBOUlHO1dBK0lOLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBL0lNO1VBZ0pQLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBaEpPO1VBaUpQLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBakpPO2VBa0pGLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBbEpFO1dBbUpOLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLENBbkpNO2dCQW9KRCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsRUFBWDtDQXBKaEI7OztLQ0NJNmtCLGNBQWNwSCxPQUFsQjs7S0FNSXFILGtCQUFrQixFQUF0QjtNQUNLLElBQUl2WCxHQUFULElBQWdCc1gsV0FBaEIsRUFBNkI7TUFDeEJBLFlBQVlFLGNBQVosQ0FBMkJ4WCxHQUEzQixDQUFKLEVBQXFDO21CQUNwQnNYLFlBQVl0WCxHQUFaLENBQWhCLElBQW9DQSxHQUFwQzs7OztLQUlFbUMsVUFBVWlWLGNBQUEsR0FBaUI7T0FDekIsRUFBQ0ssVUFBVSxDQUFYLEVBQWNDLFFBQVEsS0FBdEIsRUFEeUI7T0FFekIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsS0FBdEIsRUFGeUI7T0FHekIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsS0FBdEIsRUFIeUI7T0FJekIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsS0FBdEIsRUFKeUI7UUFLeEIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsTUFBdEIsRUFMd0I7T0FNekIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsS0FBdEIsRUFOeUI7T0FPekIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsS0FBdEIsRUFQeUI7T0FRekIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsS0FBdEIsRUFSeUI7T0FTekIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsQ0FBQyxLQUFELENBQXRCLEVBVHlCO1dBVXJCLEVBQUNELFVBQVUsQ0FBWCxFQUFjQyxRQUFRLENBQUMsU0FBRCxDQUF0QixFQVZxQjtVQVd0QixFQUFDRCxVQUFVLENBQVgsRUFBY0MsUUFBUSxDQUFDLFFBQUQsQ0FBdEIsRUFYc0I7V0FZckIsRUFBQ0QsVUFBVSxDQUFYLEVBQWNDLFFBQVEsQ0FBQyxTQUFELENBQXRCLEVBWnFCO09BYXpCLEVBQUNELFVBQVUsQ0FBWCxFQUFjQyxRQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQXRCLEVBYnlCO1NBY3ZCLEVBQUNELFVBQVUsQ0FBWCxFQUFjQyxRQUFRLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQXRCLEVBZHVCO1FBZXhCLEVBQUNELFVBQVUsQ0FBWCxFQUFjQyxRQUFRLENBQUMsTUFBRCxDQUF0QjtFQWZQOztNQW1CSyxJQUFJQyxLQUFULElBQWtCeFYsT0FBbEIsRUFBMkI7TUFDdEJBLFFBQVFxVixjQUFSLENBQXVCRyxLQUF2QixDQUFKLEVBQW1DO09BQzlCLEVBQUUsY0FBY3hWLFFBQVF3VixLQUFSLENBQWhCLENBQUosRUFBcUM7VUFDOUIsSUFBSTVmLEtBQUosQ0FBVSxnQ0FBZ0M0ZixLQUExQyxDQUFOOzs7T0FHRyxFQUFFLFlBQVl4VixRQUFRd1YsS0FBUixDQUFkLENBQUosRUFBbUM7VUFDNUIsSUFBSTVmLEtBQUosQ0FBVSxzQ0FBc0M0ZixLQUFoRCxDQUFOOzs7T0FHR3hWLFFBQVF3VixLQUFSLEVBQWVELE1BQWYsQ0FBc0Ixa0IsTUFBdEIsS0FBaUNtUCxRQUFRd1YsS0FBUixFQUFlRixRQUFwRCxFQUE4RDtVQUN2RCxJQUFJMWYsS0FBSixDQUFVLHdDQUF3QzRmLEtBQWxELENBQU47OztPQUdHRixXQUFXdFYsUUFBUXdWLEtBQVIsRUFBZUYsUUFBOUI7T0FDSUMsU0FBU3ZWLFFBQVF3VixLQUFSLEVBQWVELE1BQTVCO1VBQ092VixRQUFRd1YsS0FBUixFQUFlRixRQUF0QjtVQUNPdFYsUUFBUXdWLEtBQVIsRUFBZUQsTUFBdEI7VUFDT0UsY0FBUCxDQUFzQnpWLFFBQVF3VixLQUFSLENBQXRCLEVBQXNDLFVBQXRDLEVBQWtELEVBQUNFLE9BQU9KLFFBQVIsRUFBbEQ7VUFDT0csY0FBUCxDQUFzQnpWLFFBQVF3VixLQUFSLENBQXRCLEVBQXNDLFFBQXRDLEVBQWdELEVBQUNFLE9BQU9ILE1BQVIsRUFBaEQ7Ozs7U0FJTUksR0FBUixDQUFZQyxHQUFaLEdBQWtCLFVBQVVELEdBQVYsRUFBZTtNQUM1QnhqQixJQUFJd2pCLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0lFLElBQUlGLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0lucUIsSUFBSW1xQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJM0ksTUFBTTFmLEtBQUswZixHQUFMLENBQVM3YSxDQUFULEVBQVkwakIsQ0FBWixFQUFlcnFCLENBQWYsQ0FBVjtNQUNJZ0osTUFBTWxILEtBQUtrSCxHQUFMLENBQVNyQyxDQUFULEVBQVkwakIsQ0FBWixFQUFlcnFCLENBQWYsQ0FBVjtNQUNJc3FCLFFBQVF0aEIsTUFBTXdZLEdBQWxCO01BQ0kxWSxDQUFKO01BQ0lqSCxDQUFKO01BQ0l5VCxDQUFKOztNQUVJdE0sUUFBUXdZLEdBQVosRUFBaUI7T0FDWixDQUFKO0dBREQsTUFFTyxJQUFJN2EsTUFBTXFDLEdBQVYsRUFBZTtPQUNqQixDQUFDcWhCLElBQUlycUIsQ0FBTCxJQUFVc3FCLEtBQWQ7R0FETSxNQUVBLElBQUlELE1BQU1yaEIsR0FBVixFQUFlO09BQ2pCLElBQUksQ0FBQ2hKLElBQUkyRyxDQUFMLElBQVUyakIsS0FBbEI7R0FETSxNQUVBLElBQUl0cUIsTUFBTWdKLEdBQVYsRUFBZTtPQUNqQixJQUFJLENBQUNyQyxJQUFJMGpCLENBQUwsSUFBVUMsS0FBbEI7OztNQUdHeG9CLEtBQUswZixHQUFMLENBQVMxWSxJQUFJLEVBQWIsRUFBaUIsR0FBakIsQ0FBSjs7TUFFSUEsSUFBSSxDQUFSLEVBQVc7UUFDTCxHQUFMOzs7TUFHRyxDQUFDMFksTUFBTXhZLEdBQVAsSUFBYyxDQUFsQjs7TUFFSUEsUUFBUXdZLEdBQVosRUFBaUI7T0FDWixDQUFKO0dBREQsTUFFTyxJQUFJbE0sS0FBSyxHQUFULEVBQWM7T0FDaEJnVixTQUFTdGhCLE1BQU13WSxHQUFmLENBQUo7R0FETSxNQUVBO09BQ0Y4SSxTQUFTLElBQUl0aEIsR0FBSixHQUFVd1ksR0FBbkIsQ0FBSjs7O1NBR00sQ0FBQzFZLENBQUQsRUFBSWpILElBQUksR0FBUixFQUFheVQsSUFBSSxHQUFqQixDQUFQO0VBckNEOztTQXdDUTZVLEdBQVIsQ0FBWUksR0FBWixHQUFrQixVQUFVSixHQUFWLEVBQWU7TUFDNUJ4akIsSUFBSXdqQixJQUFJLENBQUosQ0FBUjtNQUNJRSxJQUFJRixJQUFJLENBQUosQ0FBUjtNQUNJbnFCLElBQUltcUIsSUFBSSxDQUFKLENBQVI7TUFDSTNJLE1BQU0xZixLQUFLMGYsR0FBTCxDQUFTN2EsQ0FBVCxFQUFZMGpCLENBQVosRUFBZXJxQixDQUFmLENBQVY7TUFDSWdKLE1BQU1sSCxLQUFLa0gsR0FBTCxDQUFTckMsQ0FBVCxFQUFZMGpCLENBQVosRUFBZXJxQixDQUFmLENBQVY7TUFDSXNxQixRQUFRdGhCLE1BQU13WSxHQUFsQjtNQUNJMVksQ0FBSjtNQUNJakgsQ0FBSjtNQUNJUCxDQUFKOztNQUVJMEgsUUFBUSxDQUFaLEVBQWU7T0FDVixDQUFKO0dBREQsTUFFTztPQUNEc2hCLFFBQVF0aEIsR0FBUixHQUFjLElBQWYsR0FBdUIsRUFBM0I7OztNQUdHQSxRQUFRd1ksR0FBWixFQUFpQjtPQUNaLENBQUo7R0FERCxNQUVPLElBQUk3YSxNQUFNcUMsR0FBVixFQUFlO09BQ2pCLENBQUNxaEIsSUFBSXJxQixDQUFMLElBQVVzcUIsS0FBZDtHQURNLE1BRUEsSUFBSUQsTUFBTXJoQixHQUFWLEVBQWU7T0FDakIsSUFBSSxDQUFDaEosSUFBSTJHLENBQUwsSUFBVTJqQixLQUFsQjtHQURNLE1BRUEsSUFBSXRxQixNQUFNZ0osR0FBVixFQUFlO09BQ2pCLElBQUksQ0FBQ3JDLElBQUkwakIsQ0FBTCxJQUFVQyxLQUFsQjs7O01BR0d4b0IsS0FBSzBmLEdBQUwsQ0FBUzFZLElBQUksRUFBYixFQUFpQixHQUFqQixDQUFKOztNQUVJQSxJQUFJLENBQVIsRUFBVztRQUNMLEdBQUw7OztNQUdLRSxNQUFNLEdBQVAsR0FBYyxJQUFmLEdBQXVCLEVBQTNCOztTQUVPLENBQUNGLENBQUQsRUFBSWpILENBQUosRUFBT1AsQ0FBUCxDQUFQO0VBbkNEOztTQXNDUTZvQixHQUFSLENBQVlLLEdBQVosR0FBa0IsVUFBVUwsR0FBVixFQUFlO01BQzVCeGpCLElBQUl3akIsSUFBSSxDQUFKLENBQVI7TUFDSUUsSUFBSUYsSUFBSSxDQUFKLENBQVI7TUFDSW5xQixJQUFJbXFCLElBQUksQ0FBSixDQUFSO01BQ0lyaEIsSUFBSTBMLFFBQVEyVixHQUFSLENBQVlDLEdBQVosQ0FBZ0JELEdBQWhCLEVBQXFCLENBQXJCLENBQVI7TUFDSXRoQixJQUFJLElBQUksR0FBSixHQUFVL0csS0FBSzBmLEdBQUwsQ0FBUzdhLENBQVQsRUFBWTdFLEtBQUswZixHQUFMLENBQVM2SSxDQUFULEVBQVlycUIsQ0FBWixDQUFaLENBQWxCOztNQUVJLElBQUksSUFBSSxHQUFKLEdBQVU4QixLQUFLa0gsR0FBTCxDQUFTckMsQ0FBVCxFQUFZN0UsS0FBS2tILEdBQUwsQ0FBU3FoQixDQUFULEVBQVlycUIsQ0FBWixDQUFaLENBQWxCOztTQUVPLENBQUM4SSxDQUFELEVBQUlELElBQUksR0FBUixFQUFhN0ksSUFBSSxHQUFqQixDQUFQO0VBVEQ7O1NBWVFtcUIsR0FBUixDQUFZTSxJQUFaLEdBQW1CLFVBQVVOLEdBQVYsRUFBZTtNQUM3QnhqQixJQUFJd2pCLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0lFLElBQUlGLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0lucUIsSUFBSW1xQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJbm9CLENBQUo7TUFDSXFNLENBQUo7TUFDSTdNLENBQUo7TUFDSWlTLENBQUo7O01BRUkzUixLQUFLMGYsR0FBTCxDQUFTLElBQUk3YSxDQUFiLEVBQWdCLElBQUkwakIsQ0FBcEIsRUFBdUIsSUFBSXJxQixDQUEzQixDQUFKO01BQ0ksQ0FBQyxJQUFJMkcsQ0FBSixHQUFROE0sQ0FBVCxLQUFlLElBQUlBLENBQW5CLEtBQXlCLENBQTdCO01BQ0ksQ0FBQyxJQUFJNFcsQ0FBSixHQUFRNVcsQ0FBVCxLQUFlLElBQUlBLENBQW5CLEtBQXlCLENBQTdCO01BQ0ksQ0FBQyxJQUFJelQsQ0FBSixHQUFReVQsQ0FBVCxLQUFlLElBQUlBLENBQW5CLEtBQXlCLENBQTdCOztTQUVPLENBQUN6UixJQUFJLEdBQUwsRUFBVXFNLElBQUksR0FBZCxFQUFtQjdNLElBQUksR0FBdkIsRUFBNEJpUyxJQUFJLEdBQWhDLENBQVA7RUFkRDs7VUFvQlNpWCxtQkFBVCxDQUE2Qm5wQixDQUE3QixFQUFnQ0MsQ0FBaEMsRUFBbUM7U0FFakNNLEtBQUttSCxHQUFMLENBQVMxSCxFQUFFLENBQUYsSUFBT0MsRUFBRSxDQUFGLENBQWhCLEVBQXNCLENBQXRCLElBQ0FNLEtBQUttSCxHQUFMLENBQVMxSCxFQUFFLENBQUYsSUFBT0MsRUFBRSxDQUFGLENBQWhCLEVBQXNCLENBQXRCLENBREEsR0FFQU0sS0FBS21ILEdBQUwsQ0FBUzFILEVBQUUsQ0FBRixJQUFPQyxFQUFFLENBQUYsQ0FBaEIsRUFBc0IsQ0FBdEIsQ0FIRDs7O1NBT08yb0IsR0FBUixDQUFZUSxPQUFaLEdBQXNCLFVBQVVSLEdBQVYsRUFBZTtNQUNoQ1MsV0FBV2hCLGdCQUFnQk8sR0FBaEIsQ0FBZjtNQUNJUyxRQUFKLEVBQWM7VUFDTkEsUUFBUDs7O01BR0dDLHlCQUF5Qm5QLFFBQTdCO01BQ0lvUCxxQkFBSjs7T0FFSyxJQUFJSCxPQUFULElBQW9CaEIsV0FBcEIsRUFBaUM7T0FDNUJBLFlBQVlFLGNBQVosQ0FBMkJjLE9BQTNCLENBQUosRUFBeUM7UUFDcENULFFBQVFQLFlBQVlnQixPQUFaLENBQVo7O1FBR0k3VixXQUFXNFYsb0JBQW9CUCxHQUFwQixFQUF5QkQsS0FBekIsQ0FBZjs7UUFHSXBWLFdBQVcrVixzQkFBZixFQUF1Qzs4QkFDYi9WLFFBQXpCOzZCQUN3QjZWLE9BQXhCOzs7OztTQUtJRyxxQkFBUDtFQXhCRDs7U0EyQlFILE9BQVIsQ0FBZ0JSLEdBQWhCLEdBQXNCLFVBQVVRLE9BQVYsRUFBbUI7U0FDakNoQixZQUFZZ0IsT0FBWixDQUFQO0VBREQ7O1NBSVFSLEdBQVIsQ0FBWVksR0FBWixHQUFrQixVQUFVWixHQUFWLEVBQWU7TUFDNUJ4akIsSUFBSXdqQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJRSxJQUFJRixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJbnFCLElBQUltcUIsSUFBSSxDQUFKLElBQVMsR0FBakI7O01BR0l4akIsSUFBSSxPQUFKLEdBQWM3RSxLQUFLbUgsR0FBTCxDQUFVLENBQUN0QyxJQUFJLEtBQUwsSUFBYyxLQUF4QixFQUFnQyxHQUFoQyxDQUFkLEdBQXNEQSxJQUFJLEtBQTlEO01BQ0kwakIsSUFBSSxPQUFKLEdBQWN2b0IsS0FBS21ILEdBQUwsQ0FBVSxDQUFDb2hCLElBQUksS0FBTCxJQUFjLEtBQXhCLEVBQWdDLEdBQWhDLENBQWQsR0FBc0RBLElBQUksS0FBOUQ7TUFDSXJxQixJQUFJLE9BQUosR0FBYzhCLEtBQUttSCxHQUFMLENBQVUsQ0FBQ2pKLElBQUksS0FBTCxJQUFjLEtBQXhCLEVBQWdDLEdBQWhDLENBQWQsR0FBc0RBLElBQUksS0FBOUQ7O01BRUl1QixJQUFLb0YsSUFBSSxNQUFMLEdBQWdCMGpCLElBQUksTUFBcEIsR0FBK0JycUIsSUFBSSxNQUEzQztNQUNJd0IsSUFBS21GLElBQUksTUFBTCxHQUFnQjBqQixJQUFJLE1BQXBCLEdBQStCcnFCLElBQUksTUFBM0M7TUFDSXlCLElBQUtrRixJQUFJLE1BQUwsR0FBZ0IwakIsSUFBSSxNQUFwQixHQUErQnJxQixJQUFJLE1BQTNDOztTQUVPLENBQUN1QixJQUFJLEdBQUwsRUFBVUMsSUFBSSxHQUFkLEVBQW1CQyxJQUFJLEdBQXZCLENBQVA7RUFkRDs7U0FpQlEwb0IsR0FBUixDQUFZYSxHQUFaLEdBQWtCLFVBQVViLEdBQVYsRUFBZTtNQUM1QlksTUFBTXZXLFFBQVEyVixHQUFSLENBQVlZLEdBQVosQ0FBZ0JaLEdBQWhCLENBQVY7TUFDSTVvQixJQUFJd3BCLElBQUksQ0FBSixDQUFSO01BQ0l2cEIsSUFBSXVwQixJQUFJLENBQUosQ0FBUjtNQUNJdHBCLElBQUlzcEIsSUFBSSxDQUFKLENBQVI7TUFDSXpWLENBQUo7TUFDSXpWLENBQUo7TUFDSUcsQ0FBSjs7T0FFSyxNQUFMO09BQ0ssR0FBTDtPQUNLLE9BQUw7O01BRUl1QixJQUFJLFFBQUosR0FBZU8sS0FBS21ILEdBQUwsQ0FBUzFILENBQVQsRUFBWSxJQUFJLENBQWhCLENBQWYsR0FBcUMsUUFBUUEsQ0FBVCxHQUFlLEtBQUssR0FBNUQ7TUFDSUMsSUFBSSxRQUFKLEdBQWVNLEtBQUttSCxHQUFMLENBQVN6SCxDQUFULEVBQVksSUFBSSxDQUFoQixDQUFmLEdBQXFDLFFBQVFBLENBQVQsR0FBZSxLQUFLLEdBQTVEO01BQ0lDLElBQUksUUFBSixHQUFlSyxLQUFLbUgsR0FBTCxDQUFTeEgsQ0FBVCxFQUFZLElBQUksQ0FBaEIsQ0FBZixHQUFxQyxRQUFRQSxDQUFULEdBQWUsS0FBSyxHQUE1RDs7TUFFSyxNQUFNRCxDQUFQLEdBQVksRUFBaEI7TUFDSSxPQUFPRCxJQUFJQyxDQUFYLENBQUo7TUFDSSxPQUFPQSxJQUFJQyxDQUFYLENBQUo7O1NBRU8sQ0FBQzZULENBQUQsRUFBSXpWLENBQUosRUFBT0csQ0FBUCxDQUFQO0VBckJEOztTQXdCUW9xQixHQUFSLENBQVlELEdBQVosR0FBa0IsVUFBVUMsR0FBVixFQUFlO01BQzVCdGhCLElBQUlzaEIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSXZvQixJQUFJdW9CLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0k5VSxJQUFJOFUsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSWEsRUFBSjtNQUNJQyxFQUFKO01BQ0lDLEVBQUo7TUFDSWhCLEdBQUo7TUFDSWlCLEdBQUo7O01BRUl2cEIsTUFBTSxDQUFWLEVBQWE7U0FDTnlULElBQUksR0FBVjtVQUNPLENBQUM4VixHQUFELEVBQU1BLEdBQU4sRUFBV0EsR0FBWCxDQUFQOzs7TUFHRzlWLElBQUksR0FBUixFQUFhO1FBQ1BBLEtBQUssSUFBSXpULENBQVQsQ0FBTDtHQURELE1BRU87UUFDRHlULElBQUl6VCxDQUFKLEdBQVF5VCxJQUFJelQsQ0FBakI7OztPQUdJLElBQUl5VCxDQUFKLEdBQVE0VixFQUFiOztRQUVNLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQU47T0FDSyxJQUFJcGdCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7UUFDdEJoQyxJQUFJLElBQUksQ0FBSixHQUFRLEVBQUVnQyxJQUFJLENBQU4sQ0FBakI7T0FDSXFnQixLQUFLLENBQVQsRUFBWTs7O09BR1JBLEtBQUssQ0FBVCxFQUFZOzs7O09BSVIsSUFBSUEsRUFBSixHQUFTLENBQWIsRUFBZ0I7VUFDVEYsS0FBSyxDQUFDQyxLQUFLRCxFQUFOLElBQVksQ0FBWixHQUFnQkUsRUFBM0I7SUFERCxNQUVPLElBQUksSUFBSUEsRUFBSixHQUFTLENBQWIsRUFBZ0I7VUFDaEJELEVBQU47SUFETSxNQUVBLElBQUksSUFBSUMsRUFBSixHQUFTLENBQWIsRUFBZ0I7VUFDaEJGLEtBQUssQ0FBQ0MsS0FBS0QsRUFBTixLQUFhLElBQUksQ0FBSixHQUFRRSxFQUFyQixJQUEyQixDQUF0QztJQURNLE1BRUE7VUFDQUYsRUFBTjs7O09BR0duZ0IsQ0FBSixJQUFTc2dCLE1BQU0sR0FBZjs7O1NBR01qQixHQUFQO0VBOUNEOztTQWlEUUMsR0FBUixDQUFZRyxHQUFaLEdBQWtCLFVBQVVILEdBQVYsRUFBZTtNQUM1QnRoQixJQUFJc2hCLElBQUksQ0FBSixDQUFSO01BQ0l2b0IsSUFBSXVvQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJOVUsSUFBSThVLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0lpQixPQUFPeHBCLENBQVg7TUFDSXlwQixPQUFPeHBCLEtBQUtrSCxHQUFMLENBQVNzTSxDQUFULEVBQVksSUFBWixDQUFYO01BQ0lpVyxFQUFKO01BQ0lqcUIsQ0FBSjs7T0FFSyxDQUFMO09BQ01nVSxLQUFLLENBQU4sR0FBV0EsQ0FBWCxHQUFlLElBQUlBLENBQXhCO1VBQ1FnVyxRQUFRLENBQVIsR0FBWUEsSUFBWixHQUFtQixJQUFJQSxJQUEvQjtNQUNJLENBQUNoVyxJQUFJelQsQ0FBTCxJQUFVLENBQWQ7T0FDS3lULE1BQU0sQ0FBTixHQUFXLElBQUkrVixJQUFMLElBQWNDLE9BQU9ELElBQXJCLENBQVYsR0FBd0MsSUFBSXhwQixDQUFMLElBQVd5VCxJQUFJelQsQ0FBZixDQUE1Qzs7U0FFTyxDQUFDaUgsQ0FBRCxFQUFJeWlCLEtBQUssR0FBVCxFQUFjanFCLElBQUksR0FBbEIsQ0FBUDtFQWZEOztTQWtCUWlwQixHQUFSLENBQVlKLEdBQVosR0FBa0IsVUFBVUksR0FBVixFQUFlO01BQzVCemhCLElBQUl5aEIsSUFBSSxDQUFKLElBQVMsRUFBakI7TUFDSTFvQixJQUFJMG9CLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0lqcEIsSUFBSWlwQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJaUIsS0FBSzFwQixLQUFLbWYsS0FBTCxDQUFXblksQ0FBWCxJQUFnQixDQUF6Qjs7TUFFSXRHLElBQUlzRyxJQUFJaEgsS0FBS21mLEtBQUwsQ0FBV25ZLENBQVgsQ0FBWjtNQUNJc0ssSUFBSSxNQUFNOVIsQ0FBTixJQUFXLElBQUlPLENBQWYsQ0FBUjtNQUNJa2EsSUFBSSxNQUFNemEsQ0FBTixJQUFXLElBQUtPLElBQUlXLENBQXBCLENBQVI7TUFDSWlmLElBQUksTUFBTW5nQixDQUFOLElBQVcsSUFBS08sS0FBSyxJQUFJVyxDQUFULENBQWhCLENBQVI7T0FDSyxHQUFMOztVQUVRZ3BCLEVBQVI7UUFDTSxDQUFMO1dBQ1EsQ0FBQ2xxQixDQUFELEVBQUltZ0IsQ0FBSixFQUFPck8sQ0FBUCxDQUFQO1FBQ0ksQ0FBTDtXQUNRLENBQUMySSxDQUFELEVBQUl6YSxDQUFKLEVBQU84UixDQUFQLENBQVA7UUFDSSxDQUFMO1dBQ1EsQ0FBQ0EsQ0FBRCxFQUFJOVIsQ0FBSixFQUFPbWdCLENBQVAsQ0FBUDtRQUNJLENBQUw7V0FDUSxDQUFDck8sQ0FBRCxFQUFJMkksQ0FBSixFQUFPemEsQ0FBUCxDQUFQO1FBQ0ksQ0FBTDtXQUNRLENBQUNtZ0IsQ0FBRCxFQUFJck8sQ0FBSixFQUFPOVIsQ0FBUCxDQUFQO1FBQ0ksQ0FBTDtXQUNRLENBQUNBLENBQUQsRUFBSThSLENBQUosRUFBTzJJLENBQVAsQ0FBUDs7RUF4Qkg7O1NBNEJRd08sR0FBUixDQUFZSCxHQUFaLEdBQWtCLFVBQVVHLEdBQVYsRUFBZTtNQUM1QnpoQixJQUFJeWhCLElBQUksQ0FBSixDQUFSO01BQ0kxb0IsSUFBSTBvQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJanBCLElBQUlpcEIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSWtCLE9BQU8zcEIsS0FBS2tILEdBQUwsQ0FBUzFILENBQVQsRUFBWSxJQUFaLENBQVg7TUFDSWdxQixJQUFKO01BQ0lJLEVBQUo7TUFDSXBXLENBQUo7O01BRUksQ0FBQyxJQUFJelQsQ0FBTCxJQUFVUCxDQUFkO1NBQ08sQ0FBQyxJQUFJTyxDQUFMLElBQVU0cEIsSUFBakI7T0FDSzVwQixJQUFJNHBCLElBQVQ7UUFDT0gsUUFBUSxDQUFULEdBQWNBLElBQWQsR0FBcUIsSUFBSUEsSUFBL0I7T0FDS0ksTUFBTSxDQUFYO09BQ0ssQ0FBTDs7U0FFTyxDQUFDNWlCLENBQUQsRUFBSTRpQixLQUFLLEdBQVQsRUFBY3BXLElBQUksR0FBbEIsQ0FBUDtFQWhCRDs7U0FvQlFrVixHQUFSLENBQVlMLEdBQVosR0FBa0IsVUFBVUssR0FBVixFQUFlO01BQzVCMWhCLElBQUkwaEIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSW1CLEtBQUtuQixJQUFJLENBQUosSUFBUyxHQUFsQjtNQUNJb0IsS0FBS3BCLElBQUksQ0FBSixJQUFTLEdBQWxCO01BQ0loYixRQUFRbWMsS0FBS0MsRUFBakI7TUFDSTlnQixDQUFKO01BQ0l4SixDQUFKO01BQ0lrQixDQUFKO01BQ0kyVSxDQUFKOztNQUdJM0gsUUFBUSxDQUFaLEVBQWU7U0FDUkEsS0FBTjtTQUNNQSxLQUFOOzs7TUFHRzFOLEtBQUttZixLQUFMLENBQVcsSUFBSW5ZLENBQWYsQ0FBSjtNQUNJLElBQUk4aUIsRUFBUjtNQUNJLElBQUk5aUIsQ0FBSixHQUFRZ0MsQ0FBWjs7TUFFSSxDQUFDQSxJQUFJLElBQUwsTUFBZSxDQUFuQixFQUFzQjtPQUNqQixJQUFJdEksQ0FBUjs7O01BR0dtcEIsS0FBS25wQixLQUFLbEIsSUFBSXFxQixFQUFULENBQVQ7O01BRUlobEIsQ0FBSjtNQUNJMGpCLENBQUo7TUFDSXJxQixDQUFKO1VBQ1E4SyxDQUFSOztRQUVNLENBQUw7UUFDSyxDQUFMO1FBQVl4SixDQUFKLENBQU8rb0IsSUFBSWxULENBQUosQ0FBT25YLElBQUkyckIsRUFBSixDQUFRO1FBQ3pCLENBQUw7UUFBWXhVLENBQUosQ0FBT2tULElBQUkvb0IsQ0FBSixDQUFPdEIsSUFBSTJyQixFQUFKLENBQVE7UUFDekIsQ0FBTDtRQUFZQSxFQUFKLENBQVF0QixJQUFJL29CLENBQUosQ0FBT3RCLElBQUltWCxDQUFKLENBQU87UUFDekIsQ0FBTDtRQUFZd1UsRUFBSixDQUFRdEIsSUFBSWxULENBQUosQ0FBT25YLElBQUlzQixDQUFKLENBQU87UUFDekIsQ0FBTDtRQUFZNlYsQ0FBSixDQUFPa1QsSUFBSXNCLEVBQUosQ0FBUTNyQixJQUFJc0IsQ0FBSixDQUFPO1FBQ3pCLENBQUw7UUFBWUEsQ0FBSixDQUFPK29CLElBQUlzQixFQUFKLENBQVEzckIsSUFBSW1YLENBQUosQ0FBTzs7O1NBR3hCLENBQUN4USxJQUFJLEdBQUwsRUFBVTBqQixJQUFJLEdBQWQsRUFBbUJycUIsSUFBSSxHQUF2QixDQUFQO0VBeENEOztTQTJDUXlxQixJQUFSLENBQWFOLEdBQWIsR0FBbUIsVUFBVU0sSUFBVixFQUFnQjtNQUM5QnpvQixJQUFJeW9CLEtBQUssQ0FBTCxJQUFVLEdBQWxCO01BQ0lwYyxJQUFJb2MsS0FBSyxDQUFMLElBQVUsR0FBbEI7TUFDSWpwQixJQUFJaXBCLEtBQUssQ0FBTCxJQUFVLEdBQWxCO01BQ0loWCxJQUFJZ1gsS0FBSyxDQUFMLElBQVUsR0FBbEI7TUFDSTlqQixDQUFKO01BQ0kwakIsQ0FBSjtNQUNJcnFCLENBQUo7O01BRUksSUFBSThCLEtBQUswZixHQUFMLENBQVMsQ0FBVCxFQUFZeGYsS0FBSyxJQUFJeVIsQ0FBVCxJQUFjQSxDQUExQixDQUFSO01BQ0ksSUFBSTNSLEtBQUswZixHQUFMLENBQVMsQ0FBVCxFQUFZblQsS0FBSyxJQUFJb0YsQ0FBVCxJQUFjQSxDQUExQixDQUFSO01BQ0ksSUFBSTNSLEtBQUswZixHQUFMLENBQVMsQ0FBVCxFQUFZaGdCLEtBQUssSUFBSWlTLENBQVQsSUFBY0EsQ0FBMUIsQ0FBUjs7U0FFTyxDQUFDOU0sSUFBSSxHQUFMLEVBQVUwakIsSUFBSSxHQUFkLEVBQW1CcnFCLElBQUksR0FBdkIsQ0FBUDtFQWJEOztTQWdCUStxQixHQUFSLENBQVlaLEdBQVosR0FBa0IsVUFBVVksR0FBVixFQUFlO01BQzVCeHBCLElBQUl3cEIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSXZwQixJQUFJdXBCLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0l0cEIsSUFBSXNwQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJcGtCLENBQUo7TUFDSTBqQixDQUFKO01BQ0lycUIsQ0FBSjs7TUFFS3VCLElBQUksTUFBTCxHQUFnQkMsSUFBSSxDQUFDLE1BQXJCLEdBQWdDQyxJQUFJLENBQUMsTUFBekM7TUFDS0YsSUFBSSxDQUFDLE1BQU4sR0FBaUJDLElBQUksTUFBckIsR0FBZ0NDLElBQUksTUFBeEM7TUFDS0YsSUFBSSxNQUFMLEdBQWdCQyxJQUFJLENBQUMsTUFBckIsR0FBZ0NDLElBQUksTUFBeEM7O01BR0lrRixJQUFJLFNBQUosR0FDQyxRQUFRN0UsS0FBS21ILEdBQUwsQ0FBU3RDLENBQVQsRUFBWSxNQUFNLEdBQWxCLENBQVQsR0FBbUMsS0FEbkMsR0FFREEsSUFBSSxLQUZQOztNQUlJMGpCLElBQUksU0FBSixHQUNDLFFBQVF2b0IsS0FBS21ILEdBQUwsQ0FBU29oQixDQUFULEVBQVksTUFBTSxHQUFsQixDQUFULEdBQW1DLEtBRG5DLEdBRURBLElBQUksS0FGUDs7TUFJSXJxQixJQUFJLFNBQUosR0FDQyxRQUFROEIsS0FBS21ILEdBQUwsQ0FBU2pKLENBQVQsRUFBWSxNQUFNLEdBQWxCLENBQVQsR0FBbUMsS0FEbkMsR0FFREEsSUFBSSxLQUZQOztNQUlJOEIsS0FBSzBmLEdBQUwsQ0FBUzFmLEtBQUtrSCxHQUFMLENBQVMsQ0FBVCxFQUFZckMsQ0FBWixDQUFULEVBQXlCLENBQXpCLENBQUo7TUFDSTdFLEtBQUswZixHQUFMLENBQVMxZixLQUFLa0gsR0FBTCxDQUFTLENBQVQsRUFBWXFoQixDQUFaLENBQVQsRUFBeUIsQ0FBekIsQ0FBSjtNQUNJdm9CLEtBQUswZixHQUFMLENBQVMxZixLQUFLa0gsR0FBTCxDQUFTLENBQVQsRUFBWWhKLENBQVosQ0FBVCxFQUF5QixDQUF6QixDQUFKOztTQUVPLENBQUMyRyxJQUFJLEdBQUwsRUFBVTBqQixJQUFJLEdBQWQsRUFBbUJycUIsSUFBSSxHQUF2QixDQUFQO0VBN0JEOztTQWdDUStxQixHQUFSLENBQVlDLEdBQVosR0FBa0IsVUFBVUQsR0FBVixFQUFlO01BQzVCeHBCLElBQUl3cEIsSUFBSSxDQUFKLENBQVI7TUFDSXZwQixJQUFJdXBCLElBQUksQ0FBSixDQUFSO01BQ0l0cEIsSUFBSXNwQixJQUFJLENBQUosQ0FBUjtNQUNJelYsQ0FBSjtNQUNJelYsQ0FBSjtNQUNJRyxDQUFKOztPQUVLLE1BQUw7T0FDSyxHQUFMO09BQ0ssT0FBTDs7TUFFSXVCLElBQUksUUFBSixHQUFlTyxLQUFLbUgsR0FBTCxDQUFTMUgsQ0FBVCxFQUFZLElBQUksQ0FBaEIsQ0FBZixHQUFxQyxRQUFRQSxDQUFULEdBQWUsS0FBSyxHQUE1RDtNQUNJQyxJQUFJLFFBQUosR0FBZU0sS0FBS21ILEdBQUwsQ0FBU3pILENBQVQsRUFBWSxJQUFJLENBQWhCLENBQWYsR0FBcUMsUUFBUUEsQ0FBVCxHQUFlLEtBQUssR0FBNUQ7TUFDSUMsSUFBSSxRQUFKLEdBQWVLLEtBQUttSCxHQUFMLENBQVN4SCxDQUFULEVBQVksSUFBSSxDQUFoQixDQUFmLEdBQXFDLFFBQVFBLENBQVQsR0FBZSxLQUFLLEdBQTVEOztNQUVLLE1BQU1ELENBQVAsR0FBWSxFQUFoQjtNQUNJLE9BQU9ELElBQUlDLENBQVgsQ0FBSjtNQUNJLE9BQU9BLElBQUlDLENBQVgsQ0FBSjs7U0FFTyxDQUFDNlQsQ0FBRCxFQUFJelYsQ0FBSixFQUFPRyxDQUFQLENBQVA7RUFwQkQ7O1NBdUJRZ3JCLEdBQVIsQ0FBWUQsR0FBWixHQUFrQixVQUFVQyxHQUFWLEVBQWU7TUFDNUIxVixJQUFJMFYsSUFBSSxDQUFKLENBQVI7TUFDSW5yQixJQUFJbXJCLElBQUksQ0FBSixDQUFSO01BQ0lockIsSUFBSWdyQixJQUFJLENBQUosQ0FBUjtNQUNJenBCLENBQUo7TUFDSUMsQ0FBSjtNQUNJQyxDQUFKOztNQUVJLENBQUM2VCxJQUFJLEVBQUwsSUFBVyxHQUFmO01BQ0l6VixJQUFJLEdBQUosR0FBVTJCLENBQWQ7TUFDSUEsSUFBSXhCLElBQUksR0FBWjs7TUFFSW9ELEtBQUt0QixLQUFLbUgsR0FBTCxDQUFTekgsQ0FBVCxFQUFZLENBQVosQ0FBVDtNQUNJeUIsS0FBS25CLEtBQUttSCxHQUFMLENBQVMxSCxDQUFULEVBQVksQ0FBWixDQUFUO01BQ0lnQyxLQUFLekIsS0FBS21ILEdBQUwsQ0FBU3hILENBQVQsRUFBWSxDQUFaLENBQVQ7TUFDSTJCLEtBQUssUUFBTCxHQUFnQkEsRUFBaEIsR0FBcUIsQ0FBQzVCLElBQUksS0FBSyxHQUFWLElBQWlCLEtBQTFDO01BQ0l5QixLQUFLLFFBQUwsR0FBZ0JBLEVBQWhCLEdBQXFCLENBQUMxQixJQUFJLEtBQUssR0FBVixJQUFpQixLQUExQztNQUNJZ0MsS0FBSyxRQUFMLEdBQWdCQSxFQUFoQixHQUFxQixDQUFDOUIsSUFBSSxLQUFLLEdBQVYsSUFBaUIsS0FBMUM7O09BRUssTUFBTDtPQUNLLEdBQUw7T0FDSyxPQUFMOztTQUVPLENBQUNGLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLENBQVA7RUF2QkQ7O1NBMEJRdXBCLEdBQVIsQ0FBWWEsR0FBWixHQUFrQixVQUFVYixHQUFWLEVBQWU7TUFDNUIxVixJQUFJMFYsSUFBSSxDQUFKLENBQVI7TUFDSW5yQixJQUFJbXJCLElBQUksQ0FBSixDQUFSO01BQ0lockIsSUFBSWdyQixJQUFJLENBQUosQ0FBUjtNQUNJYyxFQUFKO01BQ0loakIsQ0FBSjtNQUNJOUcsQ0FBSjs7T0FFS0YsS0FBS3FTLEtBQUwsQ0FBV25VLENBQVgsRUFBY0gsQ0FBZCxDQUFMO01BQ0lpc0IsS0FBSyxHQUFMLEdBQVcsQ0FBWCxHQUFlaHFCLEtBQUttRSxFQUF4Qjs7TUFFSTZDLElBQUksQ0FBUixFQUFXO1FBQ0wsR0FBTDs7O01BR0doSCxLQUFLcUMsSUFBTCxDQUFVdEUsSUFBSUEsQ0FBSixHQUFRRyxJQUFJQSxDQUF0QixDQUFKOztTQUVPLENBQUNzVixDQUFELEVBQUl0VCxDQUFKLEVBQU84RyxDQUFQLENBQVA7RUFqQkQ7O1NBb0JRK2lCLEdBQVIsQ0FBWWIsR0FBWixHQUFrQixVQUFVYSxHQUFWLEVBQWU7TUFDNUJ2VyxJQUFJdVcsSUFBSSxDQUFKLENBQVI7TUFDSTdwQixJQUFJNnBCLElBQUksQ0FBSixDQUFSO01BQ0kvaUIsSUFBSStpQixJQUFJLENBQUosQ0FBUjtNQUNJaHNCLENBQUo7TUFDSUcsQ0FBSjtNQUNJOHJCLEVBQUo7O09BRUtoakIsSUFBSSxHQUFKLEdBQVUsQ0FBVixHQUFjaEgsS0FBS21FLEVBQXhCO01BQ0lqRSxJQUFJRixLQUFLRyxHQUFMLENBQVM2cEIsRUFBVCxDQUFSO01BQ0k5cEIsSUFBSUYsS0FBS0MsR0FBTCxDQUFTK3BCLEVBQVQsQ0FBUjs7U0FFTyxDQUFDeFcsQ0FBRCxFQUFJelYsQ0FBSixFQUFPRyxDQUFQLENBQVA7RUFaRDs7U0FlUW1xQixHQUFSLENBQVk0QixNQUFaLEdBQXFCLFVBQVVDLElBQVYsRUFBZ0I7TUFDaENybEIsSUFBSXFsQixLQUFLLENBQUwsQ0FBUjtNQUNJM0IsSUFBSTJCLEtBQUssQ0FBTCxDQUFSO01BQ0loc0IsSUFBSWdzQixLQUFLLENBQUwsQ0FBUjtNQUNJOUIsUUFBUSxLQUFLeFosU0FBTCxHQUFpQkEsVUFBVSxDQUFWLENBQWpCLEdBQWdDOEQsUUFBUTJWLEdBQVIsQ0FBWUksR0FBWixDQUFnQnlCLElBQWhCLEVBQXNCLENBQXRCLENBQTVDOztVQUVRbHFCLEtBQUt5UyxLQUFMLENBQVcyVixRQUFRLEVBQW5CLENBQVI7O01BRUlBLFVBQVUsQ0FBZCxFQUFpQjtVQUNULEVBQVA7OztNQUdHK0IsT0FBTyxNQUNObnFCLEtBQUt5UyxLQUFMLENBQVd2VSxJQUFJLEdBQWYsS0FBdUIsQ0FBeEIsR0FDQThCLEtBQUt5UyxLQUFMLENBQVc4VixJQUFJLEdBQWYsS0FBdUIsQ0FEdkIsR0FFRHZvQixLQUFLeVMsS0FBTCxDQUFXNU4sSUFBSSxHQUFmLENBSFEsQ0FBWDs7TUFLSXVqQixVQUFVLENBQWQsRUFBaUI7V0FDUixFQUFSOzs7U0FHTStCLElBQVA7RUFyQkQ7O1NBd0JRMUIsR0FBUixDQUFZd0IsTUFBWixHQUFxQixVQUFVQyxJQUFWLEVBQWdCO1NBRzdCeFgsUUFBUTJWLEdBQVIsQ0FBWTRCLE1BQVosQ0FBbUJ2WCxRQUFRK1YsR0FBUixDQUFZSixHQUFaLENBQWdCNkIsSUFBaEIsQ0FBbkIsRUFBMENBLEtBQUssQ0FBTCxDQUExQyxDQUFQO0VBSEQ7O1NBTVE3QixHQUFSLENBQVkrQixPQUFaLEdBQXNCLFVBQVVGLElBQVYsRUFBZ0I7TUFDakNybEIsSUFBSXFsQixLQUFLLENBQUwsQ0FBUjtNQUNJM0IsSUFBSTJCLEtBQUssQ0FBTCxDQUFSO01BQ0loc0IsSUFBSWdzQixLQUFLLENBQUwsQ0FBUjs7TUFJSXJsQixNQUFNMGpCLENBQU4sSUFBV0EsTUFBTXJxQixDQUFyQixFQUF3QjtPQUNuQjJHLElBQUksQ0FBUixFQUFXO1dBQ0gsRUFBUDs7O09BR0dBLElBQUksR0FBUixFQUFhO1dBQ0wsR0FBUDs7O1VBR003RSxLQUFLeVMsS0FBTCxDQUFZLENBQUM1TixJQUFJLENBQUwsSUFBVSxHQUFYLEdBQWtCLEVBQTdCLElBQW1DLEdBQTFDOzs7TUFHR3NsQixPQUFPLEtBQ1AsS0FBS25xQixLQUFLeVMsS0FBTCxDQUFXNU4sSUFBSSxHQUFKLEdBQVUsQ0FBckIsQ0FERSxHQUVQLElBQUk3RSxLQUFLeVMsS0FBTCxDQUFXOFYsSUFBSSxHQUFKLEdBQVUsQ0FBckIsQ0FGRyxHQUdSdm9CLEtBQUt5UyxLQUFMLENBQVd2VSxJQUFJLEdBQUosR0FBVSxDQUFyQixDQUhIOztTQUtPaXNCLElBQVA7RUF4QkQ7O1NBMkJRRixNQUFSLENBQWU1QixHQUFmLEdBQXFCLFVBQVU2QixJQUFWLEVBQWdCO01BQ2hDRyxRQUFRSCxPQUFPLEVBQW5COztNQUdJRyxVQUFVLENBQVYsSUFBZUEsVUFBVSxDQUE3QixFQUFnQztPQUMzQkgsT0FBTyxFQUFYLEVBQWU7YUFDTCxHQUFUOzs7V0FHT0csUUFBUSxJQUFSLEdBQWUsR0FBdkI7O1VBRU8sQ0FBQ0EsS0FBRCxFQUFRQSxLQUFSLEVBQWVBLEtBQWYsQ0FBUDs7O01BR0d6VSxPQUFPLENBQUMsQ0FBQyxFQUFFc1UsT0FBTyxFQUFULENBQUQsR0FBZ0IsQ0FBakIsSUFBc0IsR0FBakM7TUFDSXJsQixJQUFLLENBQUN3bEIsUUFBUSxDQUFULElBQWN6VSxJQUFmLEdBQXVCLEdBQS9CO01BQ0kyUyxJQUFLLENBQUU4QixTQUFTLENBQVYsR0FBZSxDQUFoQixJQUFxQnpVLElBQXRCLEdBQThCLEdBQXRDO01BQ0kxWCxJQUFLLENBQUVtc0IsU0FBUyxDQUFWLEdBQWUsQ0FBaEIsSUFBcUJ6VSxJQUF0QixHQUE4QixHQUF0Qzs7U0FFTyxDQUFDL1EsQ0FBRCxFQUFJMGpCLENBQUosRUFBT3JxQixDQUFQLENBQVA7RUFuQkQ7O1NBc0JRa3NCLE9BQVIsQ0FBZ0IvQixHQUFoQixHQUFzQixVQUFVNkIsSUFBVixFQUFnQjtNQUVqQ0EsUUFBUSxHQUFaLEVBQWlCO09BQ1pocUIsSUFBSSxDQUFDZ3FCLE9BQU8sR0FBUixJQUFlLEVBQWYsR0FBb0IsQ0FBNUI7VUFDTyxDQUFDaHFCLENBQUQsRUFBSUEsQ0FBSixFQUFPQSxDQUFQLENBQVA7OztVQUdPLEVBQVI7O01BRUlvcUIsR0FBSjtNQUNJemxCLElBQUk3RSxLQUFLbWYsS0FBTCxDQUFXK0ssT0FBTyxFQUFsQixJQUF3QixDQUF4QixHQUE0QixHQUFwQztNQUNJM0IsSUFBSXZvQixLQUFLbWYsS0FBTCxDQUFXLENBQUNtTCxNQUFNSixPQUFPLEVBQWQsSUFBb0IsQ0FBL0IsSUFBb0MsQ0FBcEMsR0FBd0MsR0FBaEQ7TUFDSWhzQixJQUFLb3NCLE1BQU0sQ0FBUCxHQUFZLENBQVosR0FBZ0IsR0FBeEI7O1NBRU8sQ0FBQ3psQixDQUFELEVBQUkwakIsQ0FBSixFQUFPcnFCLENBQVAsQ0FBUDtFQWREOztTQWlCUW1xQixHQUFSLENBQVlrQyxHQUFaLEdBQWtCLFVBQVVMLElBQVYsRUFBZ0I7TUFDN0JNLFVBQVUsQ0FBQyxDQUFDeHFCLEtBQUt5UyxLQUFMLENBQVd5WCxLQUFLLENBQUwsQ0FBWCxJQUFzQixJQUF2QixLQUFnQyxFQUFqQyxLQUNWLENBQUNscUIsS0FBS3lTLEtBQUwsQ0FBV3lYLEtBQUssQ0FBTCxDQUFYLElBQXNCLElBQXZCLEtBQWdDLENBRHRCLEtBRVZscUIsS0FBS3lTLEtBQUwsQ0FBV3lYLEtBQUssQ0FBTCxDQUFYLElBQXNCLElBRlosQ0FBZDs7TUFJSU8sU0FBU0QsUUFBUXBELFFBQVIsQ0FBaUIsRUFBakIsRUFBcUJzRCxXQUFyQixFQUFiO1NBQ08sU0FBUzVhLFNBQVQsQ0FBbUIyYSxPQUFPbG5CLE1BQTFCLElBQW9Da25CLE1BQTNDO0VBTkQ7O1NBU1FGLEdBQVIsQ0FBWWxDLEdBQVosR0FBa0IsVUFBVTZCLElBQVYsRUFBZ0I7TUFDN0JTLFFBQVFULEtBQUs5QyxRQUFMLENBQWMsRUFBZCxFQUFrQnVELEtBQWxCLENBQXdCLGNBQXhCLENBQVo7TUFDSSxDQUFDQSxLQUFMLEVBQVk7VUFDSixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFQOzs7TUFHR0gsVUFBVUksU0FBU0QsTUFBTSxDQUFOLENBQVQsRUFBbUIsRUFBbkIsQ0FBZDtNQUNJOWxCLElBQUsybEIsV0FBVyxFQUFaLEdBQWtCLElBQTFCO01BQ0lqQyxJQUFLaUMsV0FBVyxDQUFaLEdBQWlCLElBQXpCO01BQ0l0c0IsSUFBSXNzQixVQUFVLElBQWxCOztTQUVPLENBQUMzbEIsQ0FBRCxFQUFJMGpCLENBQUosRUFBT3JxQixDQUFQLENBQVA7RUFYRDs7U0FjUW1xQixHQUFSLENBQVl3QyxHQUFaLEdBQWtCLFVBQVV4QyxHQUFWLEVBQWU7TUFDNUJ4akIsSUFBSXdqQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJRSxJQUFJRixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJbnFCLElBQUltcUIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSW5oQixNQUFNbEgsS0FBS2tILEdBQUwsQ0FBU2xILEtBQUtrSCxHQUFMLENBQVNyQyxDQUFULEVBQVkwakIsQ0FBWixDQUFULEVBQXlCcnFCLENBQXpCLENBQVY7TUFDSXdoQixNQUFNMWYsS0FBSzBmLEdBQUwsQ0FBUzFmLEtBQUswZixHQUFMLENBQVM3YSxDQUFULEVBQVkwakIsQ0FBWixDQUFULEVBQXlCcnFCLENBQXpCLENBQVY7TUFDSTRzQixTQUFVNWpCLE1BQU13WSxHQUFwQjtNQUNJcUwsU0FBSjtNQUNJQyxHQUFKOztNQUVJRixTQUFTLENBQWIsRUFBZ0I7ZUFDSHBMLE9BQU8sSUFBSW9MLE1BQVgsQ0FBWjtHQURELE1BRU87ZUFDTSxDQUFaOzs7TUFHR0EsVUFBVSxDQUFkLEVBQWlCO1NBQ1YsQ0FBTjtHQURELE1BR0EsSUFBSTVqQixRQUFRckMsQ0FBWixFQUFlO1NBQ1AsQ0FBQzBqQixJQUFJcnFCLENBQUwsSUFBVTRzQixNQUFYLEdBQXFCLENBQTNCO0dBREQsTUFHQSxJQUFJNWpCLFFBQVFxaEIsQ0FBWixFQUFlO1NBQ1IsSUFBSSxDQUFDcnFCLElBQUkyRyxDQUFMLElBQVVpbUIsTUFBcEI7R0FERCxNQUVPO1NBQ0EsSUFBSSxDQUFDam1CLElBQUkwakIsQ0FBTCxJQUFVdUMsTUFBZCxHQUF1QixDQUE3Qjs7O1NBR00sQ0FBUDtTQUNPLENBQVA7O1NBRU8sQ0FBQ0UsTUFBTSxHQUFQLEVBQVlGLFNBQVMsR0FBckIsRUFBMEJDLFlBQVksR0FBdEMsQ0FBUDtFQS9CRDs7U0FrQ1F6QyxHQUFSLENBQVl1QyxHQUFaLEdBQWtCLFVBQVV2QyxHQUFWLEVBQWU7TUFDNUJ2b0IsSUFBSXVvQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJOVUsSUFBSThVLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0lwb0IsSUFBSSxDQUFSO01BQ0lRLElBQUksQ0FBUjs7TUFFSThTLElBQUksR0FBUixFQUFhO09BQ1IsTUFBTXpULENBQU4sR0FBVXlULENBQWQ7R0FERCxNQUVPO09BQ0YsTUFBTXpULENBQU4sSUFBVyxNQUFNeVQsQ0FBakIsQ0FBSjs7O01BR0d0VCxJQUFJLEdBQVIsRUFBYTtPQUNSLENBQUNzVCxJQUFJLE1BQU10VCxDQUFYLEtBQWlCLE1BQU1BLENBQXZCLENBQUo7OztTQUdNLENBQUNvb0IsSUFBSSxDQUFKLENBQUQsRUFBU3BvQixJQUFJLEdBQWIsRUFBa0JRLElBQUksR0FBdEIsQ0FBUDtFQWhCRDs7U0FtQlErbkIsR0FBUixDQUFZb0MsR0FBWixHQUFrQixVQUFVcEMsR0FBVixFQUFlO01BQzVCMW9CLElBQUkwb0IsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSWpwQixJQUFJaXBCLElBQUksQ0FBSixJQUFTLEdBQWpCOztNQUVJdm9CLElBQUlILElBQUlQLENBQVo7TUFDSWtCLElBQUksQ0FBUjs7TUFFSVIsSUFBSSxHQUFSLEVBQWE7T0FDUixDQUFDVixJQUFJVSxDQUFMLEtBQVcsSUFBSUEsQ0FBZixDQUFKOzs7U0FHTSxDQUFDdW9CLElBQUksQ0FBSixDQUFELEVBQVN2b0IsSUFBSSxHQUFiLEVBQWtCUSxJQUFJLEdBQXRCLENBQVA7RUFYRDs7U0FjUW1xQixHQUFSLENBQVl4QyxHQUFaLEdBQWtCLFVBQVV3QyxHQUFWLEVBQWU7TUFDNUI3akIsSUFBSTZqQixJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJM3FCLElBQUkycUIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSXRDLElBQUlzQyxJQUFJLENBQUosSUFBUyxHQUFqQjs7TUFFSTNxQixNQUFNLEdBQVYsRUFBZTtVQUNQLENBQUNxb0IsSUFBSSxHQUFMLEVBQVVBLElBQUksR0FBZCxFQUFtQkEsSUFBSSxHQUF2QixDQUFQOzs7TUFHRzBDLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWDtNQUNJdkIsS0FBTTFpQixJQUFJLENBQUwsR0FBVSxDQUFuQjtNQUNJeEgsSUFBSWtxQixLQUFLLENBQWI7TUFDSTNpQixJQUFJLElBQUl2SCxDQUFaO01BQ0kwckIsS0FBSyxDQUFUOztVQUVRbHJCLEtBQUttZixLQUFMLENBQVd1SyxFQUFYLENBQVI7UUFDTSxDQUFMO1NBQ00sQ0FBTCxJQUFVLENBQVYsQ0FBYXVCLEtBQUssQ0FBTCxJQUFVenJCLENBQVYsQ0FBYXlyQixLQUFLLENBQUwsSUFBVSxDQUFWLENBQWE7UUFDbkMsQ0FBTDtTQUNNLENBQUwsSUFBVWxrQixDQUFWLENBQWFra0IsS0FBSyxDQUFMLElBQVUsQ0FBVixDQUFhQSxLQUFLLENBQUwsSUFBVSxDQUFWLENBQWE7UUFDbkMsQ0FBTDtTQUNNLENBQUwsSUFBVSxDQUFWLENBQWFBLEtBQUssQ0FBTCxJQUFVLENBQVYsQ0FBYUEsS0FBSyxDQUFMLElBQVV6ckIsQ0FBVixDQUFhO1FBQ25DLENBQUw7U0FDTSxDQUFMLElBQVUsQ0FBVixDQUFheXJCLEtBQUssQ0FBTCxJQUFVbGtCLENBQVYsQ0FBYWtrQixLQUFLLENBQUwsSUFBVSxDQUFWLENBQWE7UUFDbkMsQ0FBTDtTQUNNLENBQUwsSUFBVXpyQixDQUFWLENBQWF5ckIsS0FBSyxDQUFMLElBQVUsQ0FBVixDQUFhQSxLQUFLLENBQUwsSUFBVSxDQUFWLENBQWE7O1NBRWxDLENBQUwsSUFBVSxDQUFWLENBQWFBLEtBQUssQ0FBTCxJQUFVLENBQVYsQ0FBYUEsS0FBSyxDQUFMLElBQVVsa0IsQ0FBVjs7O09BR3ZCLENBQUMsTUFBTTdHLENBQVAsSUFBWXFvQixDQUFqQjs7U0FFTyxDQUNOLENBQUNyb0IsSUFBSStxQixLQUFLLENBQUwsQ0FBSixHQUFjQyxFQUFmLElBQXFCLEdBRGYsRUFFTixDQUFDaHJCLElBQUkrcUIsS0FBSyxDQUFMLENBQUosR0FBY0MsRUFBZixJQUFxQixHQUZmLEVBR04sQ0FBQ2hyQixJQUFJK3FCLEtBQUssQ0FBTCxDQUFKLEdBQWNDLEVBQWYsSUFBcUIsR0FIZixDQUFQO0VBaENEOztTQXVDUUwsR0FBUixDQUFZcEMsR0FBWixHQUFrQixVQUFVb0MsR0FBVixFQUFlO01BQzVCM3FCLElBQUkycUIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSXRDLElBQUlzQyxJQUFJLENBQUosSUFBUyxHQUFqQjs7TUFFSXJyQixJQUFJVSxJQUFJcW9CLEtBQUssTUFBTXJvQixDQUFYLENBQVo7TUFDSVEsSUFBSSxDQUFSOztNQUVJbEIsSUFBSSxHQUFSLEVBQWE7T0FDUlUsSUFBSVYsQ0FBUjs7O1NBR00sQ0FBQ3FyQixJQUFJLENBQUosQ0FBRCxFQUFTbnFCLElBQUksR0FBYixFQUFrQmxCLElBQUksR0FBdEIsQ0FBUDtFQVhEOztTQWNRcXJCLEdBQVIsQ0FBWXZDLEdBQVosR0FBa0IsVUFBVXVDLEdBQVYsRUFBZTtNQUM1QjNxQixJQUFJMnFCLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0l0QyxJQUFJc0MsSUFBSSxDQUFKLElBQVMsR0FBakI7O01BRUlyWCxJQUFJK1UsS0FBSyxNQUFNcm9CLENBQVgsSUFBZ0IsTUFBTUEsQ0FBOUI7TUFDSUgsSUFBSSxDQUFSOztNQUVJeVQsSUFBSSxHQUFKLElBQVdBLElBQUksR0FBbkIsRUFBd0I7T0FDbkJ0VCxLQUFLLElBQUlzVCxDQUFULENBQUo7R0FERCxNQUdBLElBQUlBLEtBQUssR0FBTCxJQUFZQSxJQUFJLEdBQXBCLEVBQXlCO09BQ3BCdFQsS0FBSyxLQUFLLElBQUlzVCxDQUFULENBQUwsQ0FBSjs7O1NBR00sQ0FBQ3FYLElBQUksQ0FBSixDQUFELEVBQVM5cUIsSUFBSSxHQUFiLEVBQWtCeVQsSUFBSSxHQUF0QixDQUFQO0VBZEQ7O1NBaUJRcVgsR0FBUixDQUFZbkMsR0FBWixHQUFrQixVQUFVbUMsR0FBVixFQUFlO01BQzVCM3FCLElBQUkycUIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSXRDLElBQUlzQyxJQUFJLENBQUosSUFBUyxHQUFqQjtNQUNJcnJCLElBQUlVLElBQUlxb0IsS0FBSyxNQUFNcm9CLENBQVgsQ0FBWjtTQUNPLENBQUMycUIsSUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDcnJCLElBQUlVLENBQUwsSUFBVSxHQUFuQixFQUF3QixDQUFDLElBQUlWLENBQUwsSUFBVSxHQUFsQyxDQUFQO0VBSkQ7O1NBT1FrcEIsR0FBUixDQUFZbUMsR0FBWixHQUFrQixVQUFVbkMsR0FBVixFQUFlO01BQzVCM2hCLElBQUkyaEIsSUFBSSxDQUFKLElBQVMsR0FBakI7TUFDSXhxQixJQUFJd3FCLElBQUksQ0FBSixJQUFTLEdBQWpCO01BQ0lscEIsSUFBSSxJQUFJdEIsQ0FBWjtNQUNJZ0MsSUFBSVYsSUFBSXVILENBQVo7TUFDSXdoQixJQUFJLENBQVI7O01BRUlyb0IsSUFBSSxDQUFSLEVBQVc7T0FDTixDQUFDVixJQUFJVSxDQUFMLEtBQVcsSUFBSUEsQ0FBZixDQUFKOzs7U0FHTSxDQUFDd29CLElBQUksQ0FBSixDQUFELEVBQVN4b0IsSUFBSSxHQUFiLEVBQWtCcW9CLElBQUksR0FBdEIsQ0FBUDtFQVhEOztTQWNRNEMsS0FBUixDQUFjOUMsR0FBZCxHQUFvQixVQUFVOEMsS0FBVixFQUFpQjtTQUM3QixDQUFFQSxNQUFNLENBQU4sSUFBVyxLQUFaLEdBQXFCLEdBQXRCLEVBQTRCQSxNQUFNLENBQU4sSUFBVyxLQUFaLEdBQXFCLEdBQWhELEVBQXNEQSxNQUFNLENBQU4sSUFBVyxLQUFaLEdBQXFCLEdBQTFFLENBQVA7RUFERDs7U0FJUTlDLEdBQVIsQ0FBWThDLEtBQVosR0FBb0IsVUFBVTlDLEdBQVYsRUFBZTtTQUMzQixDQUFFQSxJQUFJLENBQUosSUFBUyxHQUFWLEdBQWlCLEtBQWxCLEVBQTBCQSxJQUFJLENBQUosSUFBUyxHQUFWLEdBQWlCLEtBQTFDLEVBQWtEQSxJQUFJLENBQUosSUFBUyxHQUFWLEdBQWlCLEtBQWxFLENBQVA7RUFERDs7U0FJUStDLElBQVIsQ0FBYS9DLEdBQWIsR0FBbUIsVUFBVTZCLElBQVYsRUFBZ0I7U0FDM0IsQ0FBQ0EsS0FBSyxDQUFMLElBQVUsR0FBVixHQUFnQixHQUFqQixFQUFzQkEsS0FBSyxDQUFMLElBQVUsR0FBVixHQUFnQixHQUF0QyxFQUEyQ0EsS0FBSyxDQUFMLElBQVUsR0FBVixHQUFnQixHQUEzRCxDQUFQO0VBREQ7O1NBSVFrQixJQUFSLENBQWE5QyxHQUFiLEdBQW1CNVYsUUFBUTBZLElBQVIsQ0FBYTNDLEdBQWIsR0FBbUIsVUFBVXlCLElBQVYsRUFBZ0I7U0FDOUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPQSxLQUFLLENBQUwsQ0FBUCxDQUFQO0VBREQ7O1NBSVFrQixJQUFSLENBQWExQyxHQUFiLEdBQW1CLFVBQVUwQyxJQUFWLEVBQWdCO1NBQzNCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBU0EsS0FBSyxDQUFMLENBQVQsQ0FBUDtFQUREOztTQUlRQSxJQUFSLENBQWF6QyxJQUFiLEdBQW9CLFVBQVV5QyxJQUFWLEVBQWdCO1NBQzVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVVBLEtBQUssQ0FBTCxDQUFWLENBQVA7RUFERDs7U0FJUUEsSUFBUixDQUFhbEMsR0FBYixHQUFtQixVQUFVa0MsSUFBVixFQUFnQjtTQUMzQixDQUFDQSxLQUFLLENBQUwsQ0FBRCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQVA7RUFERDs7U0FJUUEsSUFBUixDQUFhYixHQUFiLEdBQW1CLFVBQVVhLElBQVYsRUFBZ0I7TUFDOUI5QixNQUFNdHBCLEtBQUt5UyxLQUFMLENBQVcyWSxLQUFLLENBQUwsSUFBVSxHQUFWLEdBQWdCLEdBQTNCLElBQWtDLElBQTVDO01BQ0laLFVBQVUsQ0FBQ2xCLE9BQU8sRUFBUixLQUFlQSxPQUFPLENBQXRCLElBQTJCQSxHQUF6Qzs7TUFFSW1CLFNBQVNELFFBQVFwRCxRQUFSLENBQWlCLEVBQWpCLEVBQXFCc0QsV0FBckIsRUFBYjtTQUNPLFNBQVM1YSxTQUFULENBQW1CMmEsT0FBT2xuQixNQUExQixJQUFvQ2tuQixNQUEzQztFQUxEOztTQVFRcEMsR0FBUixDQUFZK0MsSUFBWixHQUFtQixVQUFVL0MsR0FBVixFQUFlO01BQzdCaUIsTUFBTSxDQUFDakIsSUFBSSxDQUFKLElBQVNBLElBQUksQ0FBSixDQUFULEdBQWtCQSxJQUFJLENBQUosQ0FBbkIsSUFBNkIsQ0FBdkM7U0FDTyxDQUFDaUIsTUFBTSxHQUFOLEdBQVksR0FBYixDQUFQO0VBRkQ7OztBQ2oxQkEsSUFBSStCLGdCQUFjNUssYUFBbEI7O0FBY0EsSUFBSTZLLFdBQVN6RSxPQUFPMEUsSUFBUCxDQUFZRixhQUFaLENBQWI7O0FBRUEsU0FBU0csVUFBVCxHQUFzQjtLQUNqQkMsUUFBUSxFQUFaOztNQUVLLElBQUkvcEIsTUFBTTRwQixTQUFPL25CLE1BQWpCLEVBQXlCeUYsSUFBSSxDQUFsQyxFQUFxQ0EsSUFBSXRILEdBQXpDLEVBQThDc0gsR0FBOUMsRUFBbUQ7UUFDNUNzaUIsU0FBT3RpQixDQUFQLENBQU4sSUFBbUI7YUFHUixDQUFDLENBSE87V0FJVjtHQUpUOzs7UUFRTXlpQixLQUFQOzs7QUFJRCxTQUFTQyxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtLQUN6QkYsUUFBUUQsWUFBWjtLQUNJdlMsUUFBUSxDQUFDMFMsU0FBRCxDQUFaOztPQUVNQSxTQUFOLEVBQWlCM1ksUUFBakIsR0FBNEIsQ0FBNUI7O1FBRU9pRyxNQUFNMVYsTUFBYixFQUFxQjtNQUNoQnFvQixVQUFVM1MsTUFBTWtILEdBQU4sRUFBZDtNQUNJMEwsWUFBWWhGLE9BQU8wRSxJQUFQLENBQVlGLGNBQVlPLE9BQVosQ0FBWixDQUFoQjs7T0FFSyxJQUFJbHFCLE1BQU1tcUIsVUFBVXRvQixNQUFwQixFQUE0QnlGLElBQUksQ0FBckMsRUFBd0NBLElBQUl0SCxHQUE1QyxFQUFpRHNILEdBQWpELEVBQXNEO09BQ2pEOGlCLFdBQVdELFVBQVU3aUIsQ0FBVixDQUFmO09BQ0kraUIsT0FBT04sTUFBTUssUUFBTixDQUFYOztPQUVJQyxLQUFLL1ksUUFBTCxLQUFrQixDQUFDLENBQXZCLEVBQTBCO1NBQ3BCQSxRQUFMLEdBQWdCeVksTUFBTUcsT0FBTixFQUFlNVksUUFBZixHQUEwQixDQUExQztTQUNLMlMsTUFBTCxHQUFjaUcsT0FBZDtVQUNNSSxPQUFOLENBQWNGLFFBQWQ7Ozs7O1FBS0lMLEtBQVA7OztBQUdELFNBQVNRLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsRUFBd0I7UUFDaEIsVUFBVWpDLElBQVYsRUFBZ0I7U0FDZmlDLEdBQUdELEtBQUtoQyxJQUFMLENBQUgsQ0FBUDtFQUREOzs7QUFLRCxTQUFTa0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBaUNaLEtBQWpDLEVBQXdDO0tBQ25DYSxPQUFPLENBQUNiLE1BQU1ZLE9BQU4sRUFBZTFHLE1BQWhCLEVBQXdCMEcsT0FBeEIsQ0FBWDtLQUNJRSxLQUFLbEIsY0FBWUksTUFBTVksT0FBTixFQUFlMUcsTUFBM0IsRUFBbUMwRyxPQUFuQyxDQUFUOztLQUVJRyxNQUFNZixNQUFNWSxPQUFOLEVBQWUxRyxNQUF6QjtRQUNPOEYsTUFBTWUsR0FBTixFQUFXN0csTUFBbEIsRUFBMEI7T0FDcEJxRyxPQUFMLENBQWFQLE1BQU1lLEdBQU4sRUFBVzdHLE1BQXhCO09BQ0tzRyxLQUFLWixjQUFZSSxNQUFNZSxHQUFOLEVBQVc3RyxNQUF2QixFQUErQjZHLEdBQS9CLENBQUwsRUFBMENELEVBQTFDLENBQUw7UUFDTWQsTUFBTWUsR0FBTixFQUFXN0csTUFBakI7OztJQUdFOEcsVUFBSCxHQUFnQkgsSUFBaEI7UUFDT0MsRUFBUDs7O0FBR0QsY0FBaUIsY0FBQSxDQUFVWixTQUFWLEVBQXFCO0tBQ2pDRixRQUFRQyxVQUFVQyxTQUFWLENBQVo7S0FDSWMsYUFBYSxFQUFqQjs7S0FFSW5CLFNBQVN6RSxPQUFPMEUsSUFBUCxDQUFZRSxLQUFaLENBQWI7TUFDSyxJQUFJL3BCLE1BQU00cEIsT0FBTy9uQixNQUFqQixFQUF5QnlGLElBQUksQ0FBbEMsRUFBcUNBLElBQUl0SCxHQUF6QyxFQUE4Q3NILEdBQTlDLEVBQW1EO01BQzlDcWpCLFVBQVVmLE9BQU90aUIsQ0FBUCxDQUFkO01BQ0kraUIsT0FBT04sTUFBTVksT0FBTixDQUFYOztNQUVJTixLQUFLcEcsTUFBTCxLQUFnQixJQUFwQixFQUEwQjs7OzthQUtmMEcsT0FBWCxJQUFzQkQsZUFBZUMsT0FBZixFQUF3QlosS0FBeEIsQ0FBdEI7OztRQUdNZ0IsVUFBUDtDQWpCRDs7QUM5RUEsSUFBSXBCLGNBQWM1SyxhQUFsQjtBQUNBLElBQUlpTSxRQUFRaE0sT0FBWjs7QUFFQSxJQUFJaE8sWUFBVSxFQUFkOztBQUVBLElBQUk0WSxTQUFTekUsT0FBTzBFLElBQVAsQ0FBWUYsV0FBWixDQUFiOztBQUVBLFNBQVNzQixPQUFULENBQWlCSixFQUFqQixFQUFxQjtLQUNoQkssWUFBWSxTQUFaQSxTQUFZLENBQVUxQyxJQUFWLEVBQWdCO01BQzNCQSxTQUFTMkMsU0FBVCxJQUFzQjNDLFNBQVMsSUFBbkMsRUFBeUM7VUFDakNBLElBQVA7OztNQUdHdGIsVUFBVXJMLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7VUFDbEJtRixNQUFNMkksU0FBTixDQUFnQnliLEtBQWhCLENBQXNCekYsSUFBdEIsQ0FBMkJ6WSxTQUEzQixDQUFQOzs7U0FHTTJkLEdBQUdyQyxJQUFILENBQVA7RUFURDs7S0FhSSxnQkFBZ0JxQyxFQUFwQixFQUF3QjtZQUNiRSxVQUFWLEdBQXVCRixHQUFHRSxVQUExQjs7O1FBR01HLFNBQVA7OztBQUdELFNBQVNHLFdBQVQsQ0FBcUJSLEVBQXJCLEVBQXlCO0tBQ3BCSyxZQUFZLFNBQVpBLFNBQVksQ0FBVTFDLElBQVYsRUFBZ0I7TUFDM0JBLFNBQVMyQyxTQUFULElBQXNCM0MsU0FBUyxJQUFuQyxFQUF5QztVQUNqQ0EsSUFBUDs7O01BR0d0YixVQUFVckwsTUFBVixHQUFtQixDQUF2QixFQUEwQjtVQUNsQm1GLE1BQU0ySSxTQUFOLENBQWdCeWIsS0FBaEIsQ0FBc0J6RixJQUF0QixDQUEyQnpZLFNBQTNCLENBQVA7OztNQUdHeEcsU0FBU21rQixHQUFHckMsSUFBSCxDQUFiOztNQUtJLFFBQU85aEIsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQztRQUMxQixJQUFJMUcsTUFBTTBHLE9BQU83RSxNQUFqQixFQUF5QnlGLElBQUksQ0FBbEMsRUFBcUNBLElBQUl0SCxHQUF6QyxFQUE4Q3NILEdBQTlDLEVBQW1EO1dBQzNDQSxDQUFQLElBQVloSixLQUFLeVMsS0FBTCxDQUFXckssT0FBT1ksQ0FBUCxDQUFYLENBQVo7Ozs7U0FJS1osTUFBUDtFQXBCRDs7S0F3QkksZ0JBQWdCbWtCLEVBQXBCLEVBQXdCO1lBQ2JFLFVBQVYsR0FBdUJGLEdBQUdFLFVBQTFCOzs7UUFHTUcsU0FBUDs7O0FBR0R0QixPQUFPcmtCLE9BQVAsQ0FBZSxVQUFVMGtCLFNBQVYsRUFBcUI7V0FDM0JBLFNBQVIsSUFBcUIsRUFBckI7O1FBRU94RCxjQUFQLENBQXNCelYsVUFBUWlaLFNBQVIsQ0FBdEIsRUFBMEMsVUFBMUMsRUFBc0QsRUFBQ3ZELE9BQU9pRCxZQUFZTSxTQUFaLEVBQXVCM0QsUUFBL0IsRUFBdEQ7UUFDT0csY0FBUCxDQUFzQnpWLFVBQVFpWixTQUFSLENBQXRCLEVBQTBDLFFBQTFDLEVBQW9ELEVBQUN2RCxPQUFPaUQsWUFBWU0sU0FBWixFQUF1QjFELE1BQS9CLEVBQXBEOztLQUVJK0UsU0FBU04sTUFBTWYsU0FBTixDQUFiO0tBQ0lzQixjQUFjcEcsT0FBTzBFLElBQVAsQ0FBWXlCLE1BQVosQ0FBbEI7O2FBRVkvbEIsT0FBWixDQUFvQixVQUFVb2xCLE9BQVYsRUFBbUI7TUFDbENFLEtBQUtTLE9BQU9YLE9BQVAsQ0FBVDs7WUFFUVYsU0FBUixFQUFtQlUsT0FBbkIsSUFBOEJVLFlBQVlSLEVBQVosQ0FBOUI7WUFDUVosU0FBUixFQUFtQlUsT0FBbkIsRUFBNEJhLEdBQTVCLEdBQWtDUCxRQUFRSixFQUFSLENBQWxDO0VBSkQ7Q0FURDs7QUFpQkEsY0FBaUI3WixTQUFqQjs7QUM1RUEsSUFBSXlhLGFBQWExTSxPQUFqQjs7QUFFQSxrQkFBaUI7WUFDTDJNLE9BREs7WUFFTEMsT0FGSztXQUdOQyxNQUhNO1dBSU5DLE1BSk07V0FLTkMsTUFMTTthQU1KQyxRQU5JOztjQVFIQyxTQVJHO2NBU0hDLFNBVEc7ZUFVRkMsVUFWRTtrQkFXQ0MsYUFYRDttQkFZRUMsY0FaRjtjQWFIQyxTQWJHO2VBY0ZDLFVBZEU7Y0FlSEMsU0FmRztZQWdCTHBGO0NBaEJaOztBQW1CQSxTQUFTdUUsT0FBVCxDQUFpQjNDLE1BQWpCLEVBQXlCO09BQ2xCLENBQUNBLE1BQUwsRUFBYTs7O09BR1R5RCxPQUFRLHFCQUFaO09BQ0kzRCxNQUFPLHFCQURYO09BRUk0RCxPQUFPLHlGQUZYO09BR0lDLE1BQU0sMkdBSFY7T0FJSXZGLFVBQVUsT0FKZDs7T0FNSVIsTUFBTSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFWO09BQ0l0cUIsSUFBSSxDQURSO09BRUk0c0IsUUFBUUYsT0FBT0UsS0FBUCxDQUFhdUQsSUFBYixDQUZaO09BR0l2RCxLQUFKLEVBQVc7Y0FDQUEsTUFBTSxDQUFOLENBQVI7V0FDSyxJQUFJM2hCLElBQUksQ0FBYixFQUFnQkEsSUFBSXFmLElBQUk5a0IsTUFBeEIsRUFBZ0N5RixHQUFoQyxFQUFxQzthQUM5QkEsQ0FBSixJQUFTNGhCLFNBQVNELE1BQU0zaEIsQ0FBTixJQUFXMmhCLE1BQU0zaEIsQ0FBTixDQUFwQixFQUE4QixFQUE5QixDQUFUOztJQUhOLE1BTUssSUFBSTJoQixRQUFRRixPQUFPRSxLQUFQLENBQWFKLEdBQWIsQ0FBWixFQUErQjtjQUN6QkksTUFBTSxDQUFOLENBQVI7V0FDSyxJQUFJM2hCLElBQUksQ0FBYixFQUFnQkEsSUFBSXFmLElBQUk5a0IsTUFBeEIsRUFBZ0N5RixHQUFoQyxFQUFxQzthQUM5QkEsQ0FBSixJQUFTNGhCLFNBQVNELE1BQU1tQyxLQUFOLENBQVk5akIsSUFBSSxDQUFoQixFQUFtQkEsSUFBSSxDQUFKLEdBQVEsQ0FBM0IsQ0FBVCxFQUF3QyxFQUF4QyxDQUFUOztJQUhELE1BTUEsSUFBSTJoQixRQUFRRixPQUFPRSxLQUFQLENBQWF3RCxJQUFiLENBQVosRUFBZ0M7V0FDN0IsSUFBSW5sQixJQUFJLENBQWIsRUFBZ0JBLElBQUlxZixJQUFJOWtCLE1BQXhCLEVBQWdDeUYsR0FBaEMsRUFBcUM7YUFDOUJBLENBQUosSUFBUzRoQixTQUFTRCxNQUFNM2hCLElBQUksQ0FBVixDQUFULENBQVQ7O1VBRUNxbEIsV0FBVzFELE1BQU0sQ0FBTixDQUFYLENBQUo7SUFKRSxNQU1BLElBQUlBLFFBQVFGLE9BQU9FLEtBQVAsQ0FBYXlELEdBQWIsQ0FBWixFQUErQjtXQUM1QixJQUFJcGxCLElBQUksQ0FBYixFQUFnQkEsSUFBSXFmLElBQUk5a0IsTUFBeEIsRUFBZ0N5RixHQUFoQyxFQUFxQzthQUM5QkEsQ0FBSixJQUFTaEosS0FBS3lTLEtBQUwsQ0FBVzRiLFdBQVcxRCxNQUFNM2hCLElBQUksQ0FBVixDQUFYLElBQTJCLElBQXRDLENBQVQ7O1VBRUNxbEIsV0FBVzFELE1BQU0sQ0FBTixDQUFYLENBQUo7SUFKRSxNQU1BLElBQUlBLFFBQVFGLE9BQU9FLEtBQVAsQ0FBYTlCLE9BQWIsQ0FBWixFQUFtQztVQUNqQzhCLE1BQU0sQ0FBTixLQUFZLGFBQWhCLEVBQStCO2dCQUNyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBUDs7WUFFR3dDLFdBQVd4QyxNQUFNLENBQU4sQ0FBWCxDQUFOO1VBQ0ksQ0FBQ3RDLEdBQUwsRUFBVTs7Ozs7UUFLUixJQUFJcmYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcWYsSUFBSTlrQixNQUF4QixFQUFnQ3lGLEdBQWhDLEVBQXFDO1VBQzlCQSxDQUFKLElBQVNwSixRQUFNeW9CLElBQUlyZixDQUFKLENBQU4sRUFBYyxDQUFkLEVBQWlCLEdBQWpCLENBQVQ7O09BRUMsQ0FBQ2pMLENBQUQsSUFBTUEsS0FBSyxDQUFmLEVBQWtCO1VBQ1gsQ0FBSjtJQURILE1BR0s7VUFDRTZCLFFBQU03QixDQUFOLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjs7T0FFQyxDQUFKLElBQVNBLENBQVQ7VUFDT3NxQixHQUFQOzs7QUFHSCxTQUFTZ0YsT0FBVCxDQUFpQjVDLE1BQWpCLEVBQXlCO09BQ2xCLENBQUNBLE1BQUwsRUFBYTs7O09BR1RuQyxNQUFNLDBHQUFWO09BQ0lxQyxRQUFRRixPQUFPRSxLQUFQLENBQWFyQyxHQUFiLENBQVo7T0FDSXFDLEtBQUosRUFBVztVQUNKMkQsUUFBUUQsV0FBVzFELE1BQU0sQ0FBTixDQUFYLENBQVo7VUFDSTNqQixJQUFJcEgsUUFBTWdyQixTQUFTRCxNQUFNLENBQU4sQ0FBVCxDQUFOLEVBQTBCLENBQTFCLEVBQTZCLEdBQTdCLENBQVI7VUFDSTVxQixJQUFJSCxRQUFNeXVCLFdBQVcxRCxNQUFNLENBQU4sQ0FBWCxDQUFOLEVBQTRCLENBQTVCLEVBQStCLEdBQS9CLENBRFI7VUFFSW5YLElBQUk1VCxRQUFNeXVCLFdBQVcxRCxNQUFNLENBQU4sQ0FBWCxDQUFOLEVBQTRCLENBQTVCLEVBQStCLEdBQS9CLENBRlI7VUFHSTVzQixJQUFJNkIsUUFBTTJ1QixNQUFNRCxLQUFOLElBQWUsQ0FBZixHQUFtQkEsS0FBekIsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsQ0FIUjthQUlPLENBQUN0bkIsQ0FBRCxFQUFJakgsQ0FBSixFQUFPeVQsQ0FBUCxFQUFVelYsQ0FBVixDQUFQOzs7O0FBSU4sU0FBU3l2QixNQUFULENBQWdCL0MsTUFBaEIsRUFBd0I7T0FDakIsQ0FBQ0EsTUFBTCxFQUFhOzs7T0FHVC9CLE1BQU0sd0dBQVY7T0FDSWlDLFFBQVFGLE9BQU9FLEtBQVAsQ0FBYWpDLEdBQWIsQ0FBWjtPQUNJaUMsS0FBSixFQUFXO1VBQ04yRCxRQUFRRCxXQUFXMUQsTUFBTSxDQUFOLENBQVgsQ0FBWjtVQUNNM2pCLElBQUlwSCxRQUFNZ3JCLFNBQVNELE1BQU0sQ0FBTixDQUFULENBQU4sRUFBMEIsQ0FBMUIsRUFBNkIsR0FBN0IsQ0FBUjtVQUNJNWpCLElBQUluSCxRQUFNeXVCLFdBQVcxRCxNQUFNLENBQU4sQ0FBWCxDQUFOLEVBQTRCLENBQTVCLEVBQStCLEdBQS9CLENBRFI7VUFFSXpzQixJQUFJMEIsUUFBTXl1QixXQUFXMUQsTUFBTSxDQUFOLENBQVgsQ0FBTixFQUE0QixDQUE1QixFQUErQixHQUEvQixDQUZSO1VBR0k1c0IsSUFBSTZCLFFBQU0ydUIsTUFBTUQsS0FBTixJQUFlLENBQWYsR0FBbUJBLEtBQXpCLEVBQWdDLENBQWhDLEVBQW1DLENBQW5DLENBSFI7YUFJTyxDQUFDdG5CLENBQUQsRUFBSUQsQ0FBSixFQUFPN0ksQ0FBUCxFQUFVSCxDQUFWLENBQVA7Ozs7QUFJTixTQUFTdXZCLE1BQVQsQ0FBZ0I3QyxNQUFoQixFQUF3QjtPQUNqQjBELE9BQU9mLFFBQVEzQyxNQUFSLENBQVg7VUFDTzBELFFBQVFBLEtBQUtyQixLQUFMLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBZjs7O0FBR0gsU0FBU1MsTUFBVCxDQUFnQjlDLE1BQWhCLEVBQXdCO09BQ2xCK0QsT0FBT25CLFFBQVE1QyxNQUFSLENBQVg7VUFDTytELFFBQVFBLEtBQUsxQixLQUFMLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBZjs7O0FBR0YsU0FBU1csUUFBVCxDQUFrQmhELE1BQWxCLEVBQTBCO09BQ25CZ0UsT0FBT3JCLFFBQVEzQyxNQUFSLENBQVg7T0FDSWdFLElBQUosRUFBVTthQUNBQSxLQUFLLENBQUwsQ0FBUDtJQURILE1BR0ssSUFBSUEsT0FBT3BCLFFBQVE1QyxNQUFSLENBQVgsRUFBNEI7YUFDdkJnRSxLQUFLLENBQUwsQ0FBUDtJQURFLE1BR0EsSUFBSUEsT0FBT2pCLE9BQU8vQyxNQUFQLENBQVgsRUFBMkI7YUFDdEJnRSxLQUFLLENBQUwsQ0FBUDs7OztBQUtOLFNBQVNmLFNBQVQsQ0FBbUJyRixHQUFuQixFQUF3QjtVQUNkLE1BQU1xRyxVQUFVckcsSUFBSSxDQUFKLENBQVYsQ0FBTixHQUEwQnFHLFVBQVVyRyxJQUFJLENBQUosQ0FBVixDQUExQixHQUNNcUcsVUFBVXJHLElBQUksQ0FBSixDQUFWLENBRGI7OztBQUlILFNBQVNzRixTQUFULENBQW1CUSxJQUFuQixFQUF5QkcsS0FBekIsRUFBZ0M7T0FDekJBLFFBQVEsQ0FBUixJQUFjSCxLQUFLLENBQUwsS0FBV0EsS0FBSyxDQUFMLElBQVUsQ0FBdkMsRUFBMkM7YUFDakNQLFdBQVdPLElBQVgsRUFBaUJHLEtBQWpCLENBQVA7O1VBRUksU0FBU0gsS0FBSyxDQUFMLENBQVQsR0FBbUIsSUFBbkIsR0FBMEJBLEtBQUssQ0FBTCxDQUExQixHQUFvQyxJQUFwQyxHQUEyQ0EsS0FBSyxDQUFMLENBQTNDLEdBQXFELEdBQTVEOzs7QUFHSCxTQUFTUCxVQUFULENBQW9CTyxJQUFwQixFQUEwQkcsS0FBMUIsRUFBaUM7T0FDMUJBLFVBQVV6QixTQUFkLEVBQXlCO2NBQ2JzQixLQUFLLENBQUwsTUFBWXRCLFNBQVosR0FBd0JzQixLQUFLLENBQUwsQ0FBeEIsR0FBa0MsQ0FBM0M7O1VBRUksVUFBVUEsS0FBSyxDQUFMLENBQVYsR0FBb0IsSUFBcEIsR0FBMkJBLEtBQUssQ0FBTCxDQUEzQixHQUFxQyxJQUFyQyxHQUE0Q0EsS0FBSyxDQUFMLENBQTVDLEdBQ0csSUFESCxHQUNVRyxLQURWLEdBQ2tCLEdBRHpCOzs7QUFJSCxTQUFTVCxhQUFULENBQXVCTSxJQUF2QixFQUE2QkcsS0FBN0IsRUFBb0M7T0FDN0JBLFFBQVEsQ0FBUixJQUFjSCxLQUFLLENBQUwsS0FBV0EsS0FBSyxDQUFMLElBQVUsQ0FBdkMsRUFBMkM7YUFDakNMLGVBQWVLLElBQWYsRUFBcUJHLEtBQXJCLENBQVA7O09BRUN6cEIsSUFBSTdFLEtBQUt5UyxLQUFMLENBQVcwYixLQUFLLENBQUwsSUFBUSxHQUFSLEdBQWMsR0FBekIsQ0FBUjtPQUNJNUYsSUFBSXZvQixLQUFLeVMsS0FBTCxDQUFXMGIsS0FBSyxDQUFMLElBQVEsR0FBUixHQUFjLEdBQXpCLENBRFI7T0FFSWp3QixJQUFJOEIsS0FBS3lTLEtBQUwsQ0FBVzBiLEtBQUssQ0FBTCxJQUFRLEdBQVIsR0FBYyxHQUF6QixDQUZSOztVQUlPLFNBQVN0cEIsQ0FBVCxHQUFhLEtBQWIsR0FBcUIwakIsQ0FBckIsR0FBeUIsS0FBekIsR0FBaUNycUIsQ0FBakMsR0FBcUMsSUFBNUM7OztBQUdILFNBQVM0dkIsY0FBVCxDQUF3QkssSUFBeEIsRUFBOEJHLEtBQTlCLEVBQXFDO09BQzlCenBCLElBQUk3RSxLQUFLeVMsS0FBTCxDQUFXMGIsS0FBSyxDQUFMLElBQVEsR0FBUixHQUFjLEdBQXpCLENBQVI7T0FDSTVGLElBQUl2b0IsS0FBS3lTLEtBQUwsQ0FBVzBiLEtBQUssQ0FBTCxJQUFRLEdBQVIsR0FBYyxHQUF6QixDQURSO09BRUlqd0IsSUFBSThCLEtBQUt5UyxLQUFMLENBQVcwYixLQUFLLENBQUwsSUFBUSxHQUFSLEdBQWMsR0FBekIsQ0FGUjtVQUdPLFVBQVV0cEIsQ0FBVixHQUFjLEtBQWQsR0FBc0IwakIsQ0FBdEIsR0FBMEIsS0FBMUIsR0FBa0NycUIsQ0FBbEMsR0FBc0MsS0FBdEMsSUFBK0Nvd0IsU0FBU0gsS0FBSyxDQUFMLENBQVQsSUFBb0IsQ0FBbkUsSUFBd0UsR0FBL0U7OztBQUdILFNBQVNKLFNBQVQsQ0FBbUJTLElBQW5CLEVBQXlCRixLQUF6QixFQUFnQztPQUN6QkEsUUFBUSxDQUFSLElBQWNFLEtBQUssQ0FBTCxLQUFXQSxLQUFLLENBQUwsSUFBVSxDQUF2QyxFQUEyQzthQUNqQ1IsV0FBV1EsSUFBWCxFQUFpQkYsS0FBakIsQ0FBUDs7VUFFSSxTQUFTRSxLQUFLLENBQUwsQ0FBVCxHQUFtQixJQUFuQixHQUEwQkEsS0FBSyxDQUFMLENBQTFCLEdBQW9DLEtBQXBDLEdBQTRDQSxLQUFLLENBQUwsQ0FBNUMsR0FBc0QsSUFBN0Q7OztBQUdILFNBQVNSLFVBQVQsQ0FBb0JRLElBQXBCLEVBQTBCRixLQUExQixFQUFpQztPQUMxQkEsVUFBVXpCLFNBQWQsRUFBeUI7Y0FDYjJCLEtBQUssQ0FBTCxNQUFZM0IsU0FBWixHQUF3QjJCLEtBQUssQ0FBTCxDQUF4QixHQUFrQyxDQUEzQzs7VUFFSSxVQUFVQSxLQUFLLENBQUwsQ0FBVixHQUFvQixJQUFwQixHQUEyQkEsS0FBSyxDQUFMLENBQTNCLEdBQXFDLEtBQXJDLEdBQTZDQSxLQUFLLENBQUwsQ0FBN0MsR0FBdUQsS0FBdkQsR0FDR0YsS0FESCxHQUNXLEdBRGxCOzs7QUFNSCxTQUFTTCxTQUFULENBQW1CdkYsR0FBbkIsRUFBd0I0RixLQUF4QixFQUErQjtPQUN4QkEsVUFBVXpCLFNBQWQsRUFBeUI7Y0FDYm5FLElBQUksQ0FBSixNQUFXbUUsU0FBWCxHQUF1Qm5FLElBQUksQ0FBSixDQUF2QixHQUFnQyxDQUF6Qzs7VUFFSSxTQUFTQSxJQUFJLENBQUosQ0FBVCxHQUFrQixJQUFsQixHQUF5QkEsSUFBSSxDQUFKLENBQXpCLEdBQWtDLEtBQWxDLEdBQTBDQSxJQUFJLENBQUosQ0FBMUMsR0FBbUQsR0FBbkQsSUFDSTRGLFVBQVV6QixTQUFWLElBQXVCeUIsVUFBVSxDQUFqQyxHQUFxQyxPQUFPQSxLQUE1QyxHQUFvRCxFQUR4RCxJQUM4RCxHQURyRTs7O0FBSUgsU0FBU3pGLE9BQVQsQ0FBaUJSLEdBQWpCLEVBQXNCO1VBQ2JzRyxhQUFhdEcsSUFBSXlFLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFiLENBQVA7OztBQUlGLFNBQVNsdEIsT0FBVCxDQUFlZ3ZCLEdBQWYsRUFBb0JsUCxHQUFwQixFQUF5QnhZLEdBQXpCLEVBQThCO1VBQ3BCbEgsS0FBSzBmLEdBQUwsQ0FBUzFmLEtBQUtrSCxHQUFMLENBQVN3WSxHQUFULEVBQWNrUCxHQUFkLENBQVQsRUFBNkIxbkIsR0FBN0IsQ0FBUDs7O0FBR0gsU0FBU3duQixTQUFULENBQW1CRSxHQUFuQixFQUF3QjtPQUNsQkMsTUFBTUQsSUFBSXhILFFBQUosQ0FBYSxFQUFiLEVBQWlCc0QsV0FBakIsRUFBVjtVQUNRbUUsSUFBSXRyQixNQUFKLEdBQWEsQ0FBZCxHQUFtQixNQUFNc3JCLEdBQXpCLEdBQStCQSxHQUF0Qzs7O0FBS0YsSUFBSUYsZUFBZSxFQUFuQjtBQUNBLEtBQUssSUFBSWhmLElBQVQsSUFBaUJ3ZCxVQUFqQixFQUE2QjtnQkFDYkEsV0FBV3hkLElBQVgsQ0FBYixJQUFpQ0EsSUFBakM7OztBQzFOSCxJQUFJM00sU0FBUXlkLE9BQVo7QUFDQSxJQUFJL04sVUFBVWdPLE9BQWQ7QUFDQSxJQUFJK0osU0FBUzlKLFdBQWI7O0FBRUEsSUFBSW1PLFFBQVEsU0FBUkEsS0FBUSxDQUFVQyxHQUFWLEVBQWU7S0FDdEJBLGVBQWVELEtBQW5CLEVBQTBCO1NBQ2xCQyxHQUFQOztLQUVHLEVBQUUsZ0JBQWdCRCxLQUFsQixDQUFKLEVBQThCO1NBQ3RCLElBQUlBLEtBQUosQ0FBVUMsR0FBVixDQUFQOzs7TUFHSUMsTUFBTCxHQUFjO09BQ1IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEUTtPQUVSLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRlE7T0FHUixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhRO09BSVIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKUTtRQUtQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUxPO1NBTU47RUFOUjs7S0FVSVAsSUFBSjtLQUNJLE9BQU9NLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtTQUNyQnRFLE9BQU8yQyxPQUFQLENBQWUyQixHQUFmLENBQVA7TUFDSU4sSUFBSixFQUFVO1FBQ0pRLFNBQUwsQ0FBZSxLQUFmLEVBQXNCUixJQUF0QjtHQURELE1BRU8sSUFBSUEsT0FBT2hFLE9BQU80QyxPQUFQLENBQWUwQixHQUFmLENBQVgsRUFBZ0M7UUFDakNFLFNBQUwsQ0FBZSxLQUFmLEVBQXNCUixJQUF0QjtHQURNLE1BRUEsSUFBSUEsT0FBT2hFLE9BQU8rQyxNQUFQLENBQWN1QixHQUFkLENBQVgsRUFBK0I7UUFDaENFLFNBQUwsQ0FBZSxLQUFmLEVBQXNCUixJQUF0QjtHQURNLE1BRUE7U0FDQSxJQUFJbm1CLEtBQUosQ0FBVSx3Q0FBd0N5bUIsR0FBeEMsR0FBOEMsR0FBeEQsQ0FBTjs7RUFURixNQVdPLElBQUksUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQW5CLEVBQTZCO1NBQzVCQSxHQUFQO01BQ0lOLEtBQUs1cEIsQ0FBTCxLQUFXZ29CLFNBQVgsSUFBd0I0QixLQUFLUyxHQUFMLEtBQWFyQyxTQUF6QyxFQUFvRDtRQUM5Q29DLFNBQUwsQ0FBZSxLQUFmLEVBQXNCUixJQUF0QjtHQURELE1BRU8sSUFBSUEsS0FBS2piLENBQUwsS0FBV3FaLFNBQVgsSUFBd0I0QixLQUFLVSxTQUFMLEtBQW1CdEMsU0FBL0MsRUFBMEQ7UUFDM0RvQyxTQUFMLENBQWUsS0FBZixFQUFzQlIsSUFBdEI7R0FETSxNQUVBLElBQUlBLEtBQUtqdkIsQ0FBTCxLQUFXcXRCLFNBQVgsSUFBd0I0QixLQUFLckcsS0FBTCxLQUFleUUsU0FBM0MsRUFBc0Q7UUFDdkRvQyxTQUFMLENBQWUsS0FBZixFQUFzQlIsSUFBdEI7R0FETSxNQUVBLElBQUlBLEtBQUsxbkIsQ0FBTCxLQUFXOGxCLFNBQVgsSUFBd0I0QixLQUFLVyxTQUFMLEtBQW1CdkMsU0FBL0MsRUFBMEQ7UUFDM0RvQyxTQUFMLENBQWUsS0FBZixFQUFzQlIsSUFBdEI7R0FETSxNQUVBLElBQUlBLEtBQUt2dUIsQ0FBTCxLQUFXMnNCLFNBQVgsSUFBd0I0QixLQUFLWSxJQUFMLEtBQWN4QyxTQUExQyxFQUFxRDtRQUN0RG9DLFNBQUwsQ0FBZSxNQUFmLEVBQXVCUixJQUF2QjtHQURNLE1BRUE7U0FDQSxJQUFJbm1CLEtBQUosQ0FBVSx1Q0FBdUNrSSxLQUFLQyxTQUFMLENBQWVzZSxHQUFmLENBQWpELENBQU47OztDQTNDSDs7QUFnREFELE1BQU16ZCxTQUFOLEdBQWtCO01BQ1osZUFBWTtTQUNULEtBQUtpZSxRQUFMLENBQWMsS0FBZCxFQUFxQjFnQixTQUFyQixDQUFQO0VBRmdCO01BSVosZUFBWTtTQUNULEtBQUswZ0IsUUFBTCxDQUFjLEtBQWQsRUFBcUIxZ0IsU0FBckIsQ0FBUDtFQUxnQjtNQU9aLGVBQVk7U0FDVCxLQUFLMGdCLFFBQUwsQ0FBYyxLQUFkLEVBQXFCMWdCLFNBQXJCLENBQVA7RUFSZ0I7TUFVWixlQUFZO1NBQ1QsS0FBSzBnQixRQUFMLENBQWMsS0FBZCxFQUFxQjFnQixTQUFyQixDQUFQO0VBWGdCO09BYVgsZ0JBQVk7U0FDVixLQUFLMGdCLFFBQUwsQ0FBYyxNQUFkLEVBQXNCMWdCLFNBQXRCLENBQVA7RUFkZ0I7O1dBaUJQLG9CQUFZO1NBQ2QsS0FBS29nQixNQUFMLENBQVkzRyxHQUFuQjtFQWxCZ0I7V0FvQlAsb0JBQVk7U0FDZCxLQUFLMkcsTUFBTCxDQUFZMUcsR0FBbkI7RUFyQmdCO1dBdUJQLG9CQUFZO1NBQ2QsS0FBSzBHLE1BQUwsQ0FBWXZHLEdBQW5CO0VBeEJnQjtXQTBCUCxvQkFBWTtNQUNqQixLQUFLdUcsTUFBTCxDQUFZVixLQUFaLEtBQXNCLENBQTFCLEVBQTZCO1VBQ3JCLEtBQUtVLE1BQUwsQ0FBWXRHLEdBQVosQ0FBZ0I2RyxNQUFoQixDQUF1QixDQUFDLEtBQUtQLE1BQUwsQ0FBWVYsS0FBYixDQUF2QixDQUFQOztTQUVNLEtBQUtVLE1BQUwsQ0FBWXRHLEdBQW5CO0VBOUJnQjtZQWdDTixxQkFBWTtTQUNmLEtBQUtzRyxNQUFMLENBQVlyRyxJQUFuQjtFQWpDZ0I7WUFtQ04scUJBQVk7TUFDbEJOLE1BQU0sS0FBSzJHLE1BQUwsQ0FBWTNHLEdBQXRCO1NBQ09BLElBQUlrSCxNQUFKLENBQVcsQ0FBQyxLQUFLUCxNQUFMLENBQVlWLEtBQWIsQ0FBWCxDQUFQO0VBckNnQjtzQkF1Q0ksK0JBQVk7TUFDNUJqRyxNQUFNLEtBQUsyRyxNQUFMLENBQVkzRyxHQUF0QjtNQUNJbUgsU0FBUyxFQUFiO09BQ0ssSUFBSXhtQixJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO1VBQ3BCQSxDQUFQLElBQVlxZixJQUFJcmYsQ0FBSixJQUFTLEdBQXJCOztTQUVNZixJQUFQLENBQVksS0FBSyttQixNQUFMLENBQVlWLEtBQXhCO1NBQ09rQixNQUFQO0VBOUNnQjtZQWdETixxQkFBWTtNQUNsQmxILE1BQU0sS0FBSzBHLE1BQUwsQ0FBWTFHLEdBQXRCO1NBQ09BLElBQUlpSCxNQUFKLENBQVcsQ0FBQyxLQUFLUCxNQUFMLENBQVlWLEtBQWIsQ0FBWCxDQUFQO0VBbERnQjtRQW9EVixlQUFVaEYsR0FBVixFQUFlO01BQ2pCQSxRQUFRdUQsU0FBWixFQUF1QjtVQUNmLEtBQUttQyxNQUFMLENBQVlWLEtBQW5COztPQUVJVyxTQUFMLENBQWUsT0FBZixFQUF3QjNGLEdBQXhCO1NBQ08sSUFBUDtFQXpEZ0I7O01BNERaLGFBQVVBLEdBQVYsRUFBZTtTQUNaLEtBQUttRyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCbkcsR0FBMUIsQ0FBUDtFQTdEZ0I7UUErRFYsZUFBVUEsR0FBVixFQUFlO1NBQ2QsS0FBS21HLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEJuRyxHQUExQixDQUFQO0VBaEVnQjtPQWtFWCxjQUFVQSxHQUFWLEVBQWU7U0FDYixLQUFLbUcsVUFBTCxDQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQm5HLEdBQTFCLENBQVA7RUFuRWdCO01BcUVaLGFBQVVBLEdBQVYsRUFBZTtNQUNmQSxHQUFKLEVBQVM7VUFDRCxHQUFQO1NBQ01BLE1BQU0sQ0FBTixHQUFVLE1BQU1BLEdBQWhCLEdBQXNCQSxHQUE1Qjs7U0FFTSxLQUFLbUcsVUFBTCxDQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQm5HLEdBQTFCLENBQVA7RUExRWdCO2FBNEVMLG9CQUFVQSxHQUFWLEVBQWU7U0FDbkIsS0FBS21HLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEJuRyxHQUExQixDQUFQO0VBN0VnQjtZQStFTixtQkFBVUEsR0FBVixFQUFlO1NBQ2xCLEtBQUttRyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCbkcsR0FBMUIsQ0FBUDtFQWhGZ0I7Y0FrRkoscUJBQVVBLEdBQVYsRUFBZTtTQUNwQixLQUFLbUcsVUFBTCxDQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQm5HLEdBQTFCLENBQVA7RUFuRmdCO1lBcUZOLG1CQUFVQSxHQUFWLEVBQWU7U0FDbEIsS0FBS21HLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEJuRyxHQUExQixDQUFQO0VBdEZnQjtZQXdGTixtQkFBVUEsR0FBVixFQUFlO1NBQ2xCLEtBQUttRyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCbkcsR0FBMUIsQ0FBUDtFQXpGZ0I7UUEyRlYsZUFBVUEsR0FBVixFQUFlO1NBQ2QsS0FBS21HLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEJuRyxHQUExQixDQUFQO0VBNUZnQjtPQThGWCxjQUFVQSxHQUFWLEVBQWU7U0FDYixLQUFLbUcsVUFBTCxDQUFnQixNQUFoQixFQUF3QixDQUF4QixFQUEyQm5HLEdBQTNCLENBQVA7RUEvRmdCO1VBaUdSLGlCQUFVQSxHQUFWLEVBQWU7U0FDaEIsS0FBS21HLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBeEIsRUFBMkJuRyxHQUEzQixDQUFQO0VBbEdnQjtTQW9HVCxnQkFBVUEsR0FBVixFQUFlO1NBQ2YsS0FBS21HLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBeEIsRUFBMkJuRyxHQUEzQixDQUFQO0VBckdnQjtRQXVHVixlQUFVQSxHQUFWLEVBQWU7U0FDZCxLQUFLbUcsVUFBTCxDQUFnQixNQUFoQixFQUF3QixDQUF4QixFQUEyQm5HLEdBQTNCLENBQVA7RUF4R2dCOztZQTJHTixxQkFBWTtTQUNmbUIsT0FBT2lELFNBQVAsQ0FBaUIsS0FBS3NCLE1BQUwsQ0FBWTNHLEdBQTdCLENBQVA7RUE1R2dCO1lBOEdOLHFCQUFZO1NBQ2ZvQyxPQUFPa0QsU0FBUCxDQUFpQixLQUFLcUIsTUFBTCxDQUFZM0csR0FBN0IsRUFBa0MsS0FBSzJHLE1BQUwsQ0FBWVYsS0FBOUMsQ0FBUDtFQS9HZ0I7YUFpSEwsc0JBQVk7U0FDaEI3RCxPQUFPbUQsVUFBUCxDQUFrQixLQUFLb0IsTUFBTCxDQUFZM0csR0FBOUIsRUFBbUMsS0FBSzJHLE1BQUwsQ0FBWVYsS0FBL0MsQ0FBUDtFQWxIZ0I7Z0JBb0hGLHlCQUFZO1NBQ25CN0QsT0FBT29ELGFBQVAsQ0FBcUIsS0FBS21CLE1BQUwsQ0FBWTNHLEdBQWpDLEVBQXNDLEtBQUsyRyxNQUFMLENBQVlWLEtBQWxELENBQVA7RUFySGdCO1lBdUhOLHFCQUFZO1NBQ2Y3RCxPQUFPc0QsU0FBUCxDQUFpQixLQUFLaUIsTUFBTCxDQUFZMUcsR0FBN0IsRUFBa0MsS0FBSzBHLE1BQUwsQ0FBWVYsS0FBOUMsQ0FBUDtFQXhIZ0I7YUEwSEwsc0JBQVk7U0FDaEI3RCxPQUFPdUQsVUFBUCxDQUFrQixLQUFLZ0IsTUFBTCxDQUFZMUcsR0FBOUIsRUFBbUMsS0FBSzBHLE1BQUwsQ0FBWVYsS0FBL0MsQ0FBUDtFQTNIZ0I7WUE2SE4scUJBQVk7U0FDZjdELE9BQU93RCxTQUFQLENBQWlCLEtBQUtlLE1BQUwsQ0FBWXRHLEdBQTdCLEVBQWtDLEtBQUtzRyxNQUFMLENBQVlWLEtBQTlDLENBQVA7RUE5SGdCO1VBZ0lSLG1CQUFZO1NBQ2I3RCxPQUFPNUIsT0FBUCxDQUFlLEtBQUttRyxNQUFMLENBQVkzRyxHQUEzQixFQUFnQyxLQUFLMkcsTUFBTCxDQUFZVixLQUE1QyxDQUFQO0VBaklnQjs7WUFvSU4scUJBQVk7U0FDZCxLQUFLVSxNQUFMLENBQVkzRyxHQUFaLENBQWdCLENBQWhCLEtBQXNCLEVBQXZCLEdBQThCLEtBQUsyRyxNQUFMLENBQVkzRyxHQUFaLENBQWdCLENBQWhCLEtBQXNCLENBQXBELEdBQXlELEtBQUsyRyxNQUFMLENBQVkzRyxHQUFaLENBQWdCLENBQWhCLENBQWhFO0VBcklnQjs7YUF3SUwsc0JBQVk7TUFFbkJBLE1BQU0sS0FBSzJHLE1BQUwsQ0FBWTNHLEdBQXRCO01BQ0lxSCxNQUFNLEVBQVY7T0FDSyxJQUFJMW1CLElBQUksQ0FBYixFQUFnQkEsSUFBSXFmLElBQUk5a0IsTUFBeEIsRUFBZ0N5RixHQUFoQyxFQUFxQztPQUNoQzJtQixPQUFPdEgsSUFBSXJmLENBQUosSUFBUyxHQUFwQjtPQUNJQSxDQUFKLElBQVUybUIsUUFBUSxPQUFULEdBQW9CQSxPQUFPLEtBQTNCLEdBQW1DM3ZCLEtBQUttSCxHQUFMLENBQVUsQ0FBQ3dvQixPQUFPLEtBQVIsSUFBaUIsS0FBM0IsRUFBbUMsR0FBbkMsQ0FBNUM7O1NBRU0sU0FBU0QsSUFBSSxDQUFKLENBQVQsR0FBa0IsU0FBU0EsSUFBSSxDQUFKLENBQTNCLEdBQW9DLFNBQVNBLElBQUksQ0FBSixDQUFwRDtFQWhKZ0I7O1dBbUpQLGtCQUFVRSxNQUFWLEVBQWtCO01BRXZCQyxPQUFPLEtBQUtDLFVBQUwsRUFBWDtNQUNJQyxPQUFPSCxPQUFPRSxVQUFQLEVBQVg7TUFDSUQsT0FBT0UsSUFBWCxFQUFpQjtVQUNULENBQUNGLE9BQU8sSUFBUixLQUFpQkUsT0FBTyxJQUF4QixDQUFQOztTQUVNLENBQUNBLE9BQU8sSUFBUixLQUFpQkYsT0FBTyxJQUF4QixDQUFQO0VBMUpnQjs7UUE2SlYsZUFBVUQsTUFBVixFQUFrQjtNQUNwQkksZ0JBQWdCLEtBQUtDLFFBQUwsQ0FBY0wsTUFBZCxDQUFwQjtNQUNJSSxpQkFBaUIsR0FBckIsRUFBMEI7VUFDbEIsS0FBUDs7O1NBR09BLGlCQUFpQixHQUFsQixHQUF5QixJQUF6QixHQUFnQyxFQUF2QztFQW5LZ0I7O09Bc0tYLGdCQUFZO01BRWIzSCxNQUFNLEtBQUsyRyxNQUFMLENBQVkzRyxHQUF0QjtNQUNJNkgsTUFBTSxDQUFDN0gsSUFBSSxDQUFKLElBQVMsR0FBVCxHQUFlQSxJQUFJLENBQUosSUFBUyxHQUF4QixHQUE4QkEsSUFBSSxDQUFKLElBQVMsR0FBeEMsSUFBK0MsSUFBekQ7U0FDTzZILE1BQU0sR0FBYjtFQTFLZ0I7O1FBNktWLGlCQUFZO1NBQ1gsQ0FBQyxLQUFLQyxJQUFMLEVBQVI7RUE5S2dCOztTQWlMVCxrQkFBWTtNQUNmOUgsTUFBTSxFQUFWO09BQ0ssSUFBSXJmLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7T0FDdkJBLENBQUosSUFBUyxNQUFNLEtBQUtnbUIsTUFBTCxDQUFZM0csR0FBWixDQUFnQnJmLENBQWhCLENBQWY7O09BRUlpbUIsU0FBTCxDQUFlLEtBQWYsRUFBc0I1RyxHQUF0QjtTQUNPLElBQVA7RUF2TGdCOztVQTBMUixpQkFBVTNhLEtBQVYsRUFBaUI7T0FDcEJzaEIsTUFBTCxDQUFZMUcsR0FBWixDQUFnQixDQUFoQixLQUFzQixLQUFLMEcsTUFBTCxDQUFZMUcsR0FBWixDQUFnQixDQUFoQixJQUFxQjVhLEtBQTNDO09BQ0t1aEIsU0FBTCxDQUFlLEtBQWYsRUFBc0IsS0FBS0QsTUFBTCxDQUFZMUcsR0FBbEM7U0FDTyxJQUFQO0VBN0xnQjs7U0FnTVQsZ0JBQVU1YSxLQUFWLEVBQWlCO09BQ25Cc2hCLE1BQUwsQ0FBWTFHLEdBQVosQ0FBZ0IsQ0FBaEIsS0FBc0IsS0FBSzBHLE1BQUwsQ0FBWTFHLEdBQVosQ0FBZ0IsQ0FBaEIsSUFBcUI1YSxLQUEzQztPQUNLdWhCLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLEtBQUtELE1BQUwsQ0FBWTFHLEdBQWxDO1NBQ08sSUFBUDtFQW5NZ0I7O1dBc01QLGtCQUFVNWEsS0FBVixFQUFpQjtPQUNyQnNoQixNQUFMLENBQVkxRyxHQUFaLENBQWdCLENBQWhCLEtBQXNCLEtBQUswRyxNQUFMLENBQVkxRyxHQUFaLENBQWdCLENBQWhCLElBQXFCNWEsS0FBM0M7T0FDS3VoQixTQUFMLENBQWUsS0FBZixFQUFzQixLQUFLRCxNQUFMLENBQVkxRyxHQUFsQztTQUNPLElBQVA7RUF6TWdCOzthQTRNTCxvQkFBVTVhLEtBQVYsRUFBaUI7T0FDdkJzaEIsTUFBTCxDQUFZMUcsR0FBWixDQUFnQixDQUFoQixLQUFzQixLQUFLMEcsTUFBTCxDQUFZMUcsR0FBWixDQUFnQixDQUFoQixJQUFxQjVhLEtBQTNDO09BQ0t1aEIsU0FBTCxDQUFlLEtBQWYsRUFBc0IsS0FBS0QsTUFBTCxDQUFZMUcsR0FBbEM7U0FDTyxJQUFQO0VBL01nQjs7U0FrTlQsZ0JBQVU1YSxLQUFWLEVBQWlCO09BQ25Cc2hCLE1BQUwsQ0FBWXRHLEdBQVosQ0FBZ0IsQ0FBaEIsS0FBc0IsS0FBS3NHLE1BQUwsQ0FBWXRHLEdBQVosQ0FBZ0IsQ0FBaEIsSUFBcUJoYixLQUEzQztPQUNLdWhCLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLEtBQUtELE1BQUwsQ0FBWXRHLEdBQWxDO1NBQ08sSUFBUDtFQXJOZ0I7O1VBd05SLGlCQUFVaGIsS0FBVixFQUFpQjtPQUNwQnNoQixNQUFMLENBQVl0RyxHQUFaLENBQWdCLENBQWhCLEtBQXNCLEtBQUtzRyxNQUFMLENBQVl0RyxHQUFaLENBQWdCLENBQWhCLElBQXFCaGIsS0FBM0M7T0FDS3VoQixTQUFMLENBQWUsS0FBZixFQUFzQixLQUFLRCxNQUFMLENBQVl0RyxHQUFsQztTQUNPLElBQVA7RUEzTmdCOztZQThOTixxQkFBWTtNQUNsQkwsTUFBTSxLQUFLMkcsTUFBTCxDQUFZM0csR0FBdEI7O01BRUlpQixNQUFNakIsSUFBSSxDQUFKLElBQVMsR0FBVCxHQUFlQSxJQUFJLENBQUosSUFBUyxJQUF4QixHQUErQkEsSUFBSSxDQUFKLElBQVMsSUFBbEQ7T0FDSzRHLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLENBQUMzRixHQUFELEVBQU1BLEdBQU4sRUFBV0EsR0FBWCxDQUF0QjtTQUNPLElBQVA7RUFuT2dCOztVQXNPUixpQkFBVTViLEtBQVYsRUFBaUI7T0FDcEJ1aEIsU0FBTCxDQUFlLE9BQWYsRUFBd0IsS0FBS0QsTUFBTCxDQUFZVixLQUFaLEdBQXFCLEtBQUtVLE1BQUwsQ0FBWVYsS0FBWixHQUFvQjVnQixLQUFqRTtTQUNPLElBQVA7RUF4T2dCOztVQTJPUixpQkFBVUEsS0FBVixFQUFpQjtPQUNwQnVoQixTQUFMLENBQWUsT0FBZixFQUF3QixLQUFLRCxNQUFMLENBQVlWLEtBQVosR0FBcUIsS0FBS1UsTUFBTCxDQUFZVixLQUFaLEdBQW9CNWdCLEtBQWpFO1NBQ08sSUFBUDtFQTdPZ0I7O1NBZ1BULGdCQUFVMGlCLE9BQVYsRUFBbUI7TUFDdEJwRixNQUFNLEtBQUtnRSxNQUFMLENBQVkxRyxHQUFaLENBQWdCLENBQWhCLENBQVY7UUFDTSxDQUFDMEMsTUFBTW9GLE9BQVAsSUFBa0IsR0FBeEI7UUFDTXBGLE1BQU0sQ0FBTixHQUFVLE1BQU1BLEdBQWhCLEdBQXNCQSxHQUE1QjtPQUNLZ0UsTUFBTCxDQUFZMUcsR0FBWixDQUFnQixDQUFoQixJQUFxQjBDLEdBQXJCO09BQ0tpRSxTQUFMLENBQWUsS0FBZixFQUFzQixLQUFLRCxNQUFMLENBQVkxRyxHQUFsQztTQUNPLElBQVA7RUF0UGdCOztNQTZQWixhQUFVK0gsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEI7TUFDOUJDLFNBQVMsSUFBYjtNQUNJWCxTQUFTUyxVQUFiO01BQ0kvZSxJQUFJZ2YsV0FBV3pELFNBQVgsR0FBdUIsR0FBdkIsR0FBNkJ5RCxNQUFyQzs7TUFFSXZwQixJQUFJLElBQUl1SyxDQUFKLEdBQVEsQ0FBaEI7TUFDSXZULElBQUl3eUIsT0FBT2pDLEtBQVAsS0FBaUJzQixPQUFPdEIsS0FBUCxFQUF6Qjs7TUFFSWtDLEtBQUssQ0FBQyxDQUFFenBCLElBQUloSixDQUFKLEtBQVUsQ0FBQyxDQUFaLEdBQWlCZ0osQ0FBakIsR0FBcUIsQ0FBQ0EsSUFBSWhKLENBQUwsS0FBVyxJQUFJZ0osSUFBSWhKLENBQW5CLENBQXRCLElBQStDLENBQWhELElBQXFELEdBQTlEO01BQ0kweUIsS0FBSyxJQUFJRCxFQUFiOztTQUVPLEtBQ0xuSSxHQURLLENBRUxtSSxLQUFLRCxPQUFPckIsR0FBUCxFQUFMLEdBQW9CdUIsS0FBS2IsT0FBT1YsR0FBUCxFQUZwQixFQUdMc0IsS0FBS0QsT0FBT0csS0FBUCxFQUFMLEdBQXNCRCxLQUFLYixPQUFPYyxLQUFQLEVBSHRCLEVBSUxGLEtBQUtELE9BQU9JLElBQVAsRUFBTCxHQUFxQkYsS0FBS2IsT0FBT2UsSUFBUCxFQUpyQixFQU1MckMsS0FOSyxDQU1DaUMsT0FBT2pDLEtBQVAsS0FBaUJoZCxDQUFqQixHQUFxQnNlLE9BQU90QixLQUFQLE1BQWtCLElBQUloZCxDQUF0QixDQU50QixDQUFQO0VBeFFnQjs7U0FpUlQsa0JBQVk7U0FDWixLQUFLK1csR0FBTCxFQUFQO0VBbFJnQjs7UUFxUlYsaUJBQVk7TUFDZHVJLE1BQU0sSUFBSTlCLEtBQUosRUFBVjtNQUNJRSxNQUFKLEdBQWFoc0IsT0FBTSxLQUFLZ3NCLE1BQVgsQ0FBYjtTQUNPNEIsR0FBUDs7Q0F4UkY7O0FBNFJBOUIsTUFBTXpkLFNBQU4sQ0FBZ0J3ZixTQUFoQixHQUE0QixVQUFVQyxLQUFWLEVBQWlCO0tBQ3hDckMsT0FBTyxFQUFYOztNQUVLLElBQUl6bEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJOG5CLE1BQU12dEIsTUFBMUIsRUFBa0N5RixHQUFsQyxFQUF1QztPQUNqQzhuQixNQUFNQyxNQUFOLENBQWEvbkIsQ0FBYixDQUFMLElBQXdCLEtBQUtnbUIsTUFBTCxDQUFZOEIsS0FBWixFQUFtQjluQixDQUFuQixDQUF4Qjs7O0tBR0csS0FBS2dtQixNQUFMLENBQVlWLEtBQVosS0FBc0IsQ0FBMUIsRUFBNkI7T0FDdkJ2d0IsQ0FBTCxHQUFTLEtBQUtpeEIsTUFBTCxDQUFZVixLQUFyQjs7O1FBSU1HLElBQVA7Q0FaRDs7QUFlQUssTUFBTXpkLFNBQU4sQ0FBZ0I0ZCxTQUFoQixHQUE0QixVQUFVNkIsS0FBVixFQUFpQnJDLElBQWpCLEVBQXVCO0tBQzlDdUMsU0FBUztPQUNQLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsQ0FETztPQUVQLENBQUMsS0FBRCxFQUFRLFlBQVIsRUFBc0IsV0FBdEIsQ0FGTztPQUdQLENBQUMsS0FBRCxFQUFRLFlBQVIsRUFBc0IsT0FBdEIsQ0FITztPQUlQLENBQUMsS0FBRCxFQUFRLFdBQVIsRUFBcUIsV0FBckIsQ0FKTztRQUtOLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsUUFBcEIsRUFBOEIsT0FBOUI7RUFMUDs7S0FRSUMsUUFBUTtPQUNOLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBRE07T0FFTixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUZNO09BR04sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FITTtPQUlOLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBSk07UUFLTCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQjtFQUxQOztLQVFJam9CLENBQUo7S0FDSXNsQixRQUFRLENBQVo7S0FDSXdDLFVBQVUsT0FBZCxFQUF1QjtVQUNkckMsSUFBUjtFQURELE1BRU8sSUFBSUEsS0FBS2xyQixNQUFULEVBQWlCO09BRWxCeXJCLE1BQUwsQ0FBWThCLEtBQVosSUFBcUJyQyxLQUFLM0IsS0FBTCxDQUFXLENBQVgsRUFBY2dFLE1BQU12dEIsTUFBcEIsQ0FBckI7VUFDUWtyQixLQUFLcUMsTUFBTXZ0QixNQUFYLENBQVI7RUFITSxNQUlBLElBQUlrckIsS0FBS3FDLE1BQU1DLE1BQU4sQ0FBYSxDQUFiLENBQUwsTUFBMEJsRSxTQUE5QixFQUF5QztPQUUxQzdqQixJQUFJLENBQVQsRUFBWUEsSUFBSThuQixNQUFNdnRCLE1BQXRCLEVBQThCeUYsR0FBOUIsRUFBbUM7UUFDN0JnbUIsTUFBTCxDQUFZOEIsS0FBWixFQUFtQjluQixDQUFuQixJQUF3QnlsQixLQUFLcUMsTUFBTUMsTUFBTixDQUFhL25CLENBQWIsQ0FBTCxDQUF4Qjs7O1VBR095bEIsS0FBSzF3QixDQUFiO0VBTk0sTUFPQSxJQUFJMHdCLEtBQUt1QyxPQUFPRixLQUFQLEVBQWMsQ0FBZCxDQUFMLE1BQTJCakUsU0FBL0IsRUFBMEM7TUFFNUNxRSxRQUFRRixPQUFPRixLQUFQLENBQVo7O09BRUs5bkIsSUFBSSxDQUFULEVBQVlBLElBQUk4bkIsTUFBTXZ0QixNQUF0QixFQUE4QnlGLEdBQTlCLEVBQW1DO1FBQzdCZ21CLE1BQUwsQ0FBWThCLEtBQVosRUFBbUI5bkIsQ0FBbkIsSUFBd0J5bEIsS0FBS3lDLE1BQU1sb0IsQ0FBTixDQUFMLENBQXhCOzs7VUFHT3lsQixLQUFLSCxLQUFiOzs7TUFHSVUsTUFBTCxDQUFZVixLQUFaLEdBQW9CdHVCLEtBQUtrSCxHQUFMLENBQVMsQ0FBVCxFQUFZbEgsS0FBSzBmLEdBQUwsQ0FBUyxDQUFULEVBQWE0TyxVQUFVekIsU0FBVixHQUFzQixLQUFLbUMsTUFBTCxDQUFZVixLQUFsQyxHQUEwQ0EsS0FBdkQsQ0FBWixDQUFwQjs7S0FFSXdDLFVBQVUsT0FBZCxFQUF1QjtTQUNmLEtBQVA7OztLQUdHSyxNQUFKOztNQUdLbm9CLElBQUksQ0FBVCxFQUFZQSxJQUFJOG5CLE1BQU12dEIsTUFBdEIsRUFBOEJ5RixHQUE5QixFQUFtQztXQUN6QmhKLEtBQUtrSCxHQUFMLENBQVMsQ0FBVCxFQUFZbEgsS0FBSzBmLEdBQUwsQ0FBU3VSLE1BQU1ILEtBQU4sRUFBYTluQixDQUFiLENBQVQsRUFBMEIsS0FBS2dtQixNQUFMLENBQVk4QixLQUFaLEVBQW1COW5CLENBQW5CLENBQTFCLENBQVosQ0FBVDtPQUNLZ21CLE1BQUwsQ0FBWThCLEtBQVosRUFBbUI5bkIsQ0FBbkIsSUFBd0JoSixLQUFLeVMsS0FBTCxDQUFXMGUsTUFBWCxDQUF4Qjs7O01BSUksSUFBSUMsS0FBVCxJQUFrQkosTUFBbEIsRUFBMEI7TUFDckJJLFVBQVVOLEtBQWQsRUFBcUI7UUFDZjlCLE1BQUwsQ0FBWW9DLEtBQVosSUFBcUIxZSxRQUFRb2UsS0FBUixFQUFlTSxLQUFmLEVBQXNCLEtBQUtwQyxNQUFMLENBQVk4QixLQUFaLENBQXRCLENBQXJCOzs7T0FJSTluQixJQUFJLENBQVQsRUFBWUEsSUFBSW9vQixNQUFNN3RCLE1BQXRCLEVBQThCeUYsR0FBOUIsRUFBbUM7WUFDekJoSixLQUFLa0gsR0FBTCxDQUFTLENBQVQsRUFBWWxILEtBQUswZixHQUFMLENBQVN1UixNQUFNRyxLQUFOLEVBQWFwb0IsQ0FBYixDQUFULEVBQTBCLEtBQUtnbUIsTUFBTCxDQUFZb0MsS0FBWixFQUFtQnBvQixDQUFuQixDQUExQixDQUFaLENBQVQ7UUFDS2dtQixNQUFMLENBQVlvQyxLQUFaLEVBQW1CcG9CLENBQW5CLElBQXdCaEosS0FBS3lTLEtBQUwsQ0FBVzBlLE1BQVgsQ0FBeEI7Ozs7UUFJSyxJQUFQO0NBdEVEOztBQXlFQXJDLE1BQU16ZCxTQUFOLENBQWdCaWUsUUFBaEIsR0FBMkIsVUFBVXdCLEtBQVYsRUFBaUI1RyxJQUFqQixFQUF1QjtLQUM3Q3VFLE9BQU92RSxLQUFLLENBQUwsQ0FBWDs7S0FFSXVFLFNBQVM1QixTQUFiLEVBQXdCO1NBRWhCLEtBQUtnRSxTQUFMLENBQWVDLEtBQWYsQ0FBUDs7O0tBSUcsT0FBT3JDLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7U0FDdEIvbEIsTUFBTTJJLFNBQU4sQ0FBZ0J5YixLQUFoQixDQUFzQnpGLElBQXRCLENBQTJCNkMsSUFBM0IsQ0FBUDs7O01BR0krRSxTQUFMLENBQWU2QixLQUFmLEVBQXNCckMsSUFBdEI7UUFDTyxJQUFQO0NBZEQ7O0FBaUJBSyxNQUFNemQsU0FBTixDQUFnQm9lLFVBQWhCLEdBQTZCLFVBQVVxQixLQUFWLEVBQWlCcmIsS0FBakIsRUFBd0I2VCxHQUF4QixFQUE2QjtLQUNyREEsUUFBUXVELFNBQVosRUFBdUI7U0FFZixLQUFLbUMsTUFBTCxDQUFZOEIsS0FBWixFQUFtQnJiLEtBQW5CLENBQVA7RUFGRCxNQUdPLElBQUk2VCxRQUFRLEtBQUswRixNQUFMLENBQVk4QixLQUFaLEVBQW1CcmIsS0FBbkIsQ0FBWixFQUF1QztTQUV0QyxJQUFQOzs7TUFJSXVaLE1BQUwsQ0FBWThCLEtBQVosRUFBbUJyYixLQUFuQixJQUE0QjZULEdBQTVCO01BQ0syRixTQUFMLENBQWU2QixLQUFmLEVBQXNCLEtBQUs5QixNQUFMLENBQVk4QixLQUFaLENBQXRCOztRQUVPLElBQVA7Q0FiRDs7QUFnQkEsY0FBaUJoQyxLQUFqQjs7SUNyY3FCdUM7OzswQkFFTHBzQixLQUFaLEVBQW1COzs7b0RBQ2YsMEJBQU1BLEtBQU4sQ0FEZTs7Y0FFVjBjLGVBQUwsR0FBdUIsSUFBdkI7Y0FDS0MsaUJBQUwsR0FBeUIsSUFBekI7Y0FDS0MsZUFBTDs7OzsyQkFHSkMsMkNBQWlCO1lBQ1QsQ0FBQyxLQUFLSCxlQUFWLEVBQTJCO21CQUNoQixFQUFQOzs7WUFHRXhSLFlBQVksRUFBbEI7WUFDSSxLQUFLbEwsS0FBTCxDQUFXeVosYUFBZixFQUE4QjtpQkFDckJ6WixLQUFMLENBQVd5WixhQUFYLENBQXlCelgsT0FBekIsQ0FBaUMsVUFBVWxILENBQVYsRUFBYTtrQkFDeEMsUUFBRixJQUFjZ0UsYUFBQSxDQUFjdXRCLGtCQUFkLENBQWlDdnhCLEVBQUUsUUFBRixDQUFqQyxDQUFkO29CQUNNZ2lCLE1BQU1oZSxhQUFBLENBQWNpZSxvQkFBZCxDQUFtQ2ppQixFQUFFLFFBQUYsQ0FBbkMsRUFBZ0QsSUFBaEQsQ0FBWjtvQkFDSWdpQixHQUFKLEVBQVM7OEJBQ0s5WixJQUFWLENBQWU4WixHQUFmOzthQUpSOzs7YUFVQ0osZUFBTCxHQUF1QixLQUF2Qjs7YUFFS0MsaUJBQUwsR0FBeUIsSUFBekI7O2FBRUtLLGNBQUwsR0FBc0IsS0FBdEI7O1lBRUk5UixVQUFVNU0sTUFBVixLQUFxQixDQUF6QixFQUE0QjttQkFDakIsRUFBUDs7O2VBR0c0TSxTQUFQOzs7MkJBR0p2SywyQ0FBaUI7YUFHUmhDLEVBQUwsQ0FBUTJ0QixZQUFSLENBQXFCLHdCQUFyQjs7OzJCQUlKam9CLCtCQUFXO2FBQ0ZrYSxhQUFMO2VBQ08sS0FBS2dPLFlBQVo7ZUFDTyxLQUFLL04sUUFBWjtpQ0FDTW5hLFFBQU4sQ0FBZXFGLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJDLFNBQTNCOzs7MkJBR0o2aUIsdUNBQWN4TixPQUFPO1lBQ2JsUSxRQUFRLENBQUMsQ0FBYjthQUNLLElBQUkvSyxJQUFJLENBQVIsRUFBV3dLLElBQUksS0FBS3ZPLEtBQUwsQ0FBV3laLGFBQVgsQ0FBeUJuYixNQUE3QyxFQUFxRHlGLElBQUl3SyxDQUF6RCxFQUE0RHhLLEdBQTVELEVBQWlFO2dCQUN2RG9LLFFBQVEsS0FBS25PLEtBQUwsQ0FBV3laLGFBQVgsQ0FBeUIxVixDQUF6QixDQUFkO2dCQUNNK0IsVUFBVSxLQUFLMm1CLFVBQUwsQ0FBZ0J0ZSxNQUFNOUMsTUFBdEIsQ0FBaEI7Z0JBQ0l2RixPQUFKLEVBQWE7OztnQkFHVHFJLE1BQU13USxNQUFOLENBQWEsRUFBRSxjQUFlSyxLQUFqQixFQUFiLE1BQTJDLElBQS9DLEVBQXFEO29CQUM3Q2xaLE9BQUosRUFBYTsyQkFDRjtrQ0FDUXFJLE1BQU05QyxNQURkO29DQUVVLEtBQUtraEIsWUFBTCxDQUFrQi9wQixTQUFsQixDQUE0QnNNLEtBQTVCLENBRlY7aUNBR08vSztxQkFIZDtpQkFESixNQU1POzJCQUNJO2tDQUNRb0ssTUFBTTlDLE1BRGQ7aUNBRU90SDtxQkFGZDs7OztlQVFMLElBQVA7OzsyQkFHSjJvQix5Q0FBZXJoQixRQUFRO2VBQ1osS0FBS3NoQixNQUFMLENBQVl2aEIsUUFBWixDQUFxQkMsTUFBckIsQ0FBUDs7OzJCQUdKdWhCLHlDQUFldmhCLFFBQVE7WUFDYndoQixjQUFjeGhCLFNBQVNBLE9BQU8sb0JBQVAsQ0FBVCxHQUF3QyxJQUE1RDtZQUNJd2hCLFdBQUosRUFBaUI7bUJBQ04sS0FBSzNoQixTQUFMLENBQWVjLFFBQWYsQ0FBd0I2Z0IsV0FBeEIsQ0FBUDs7ZUFFRyxJQUFQOzs7MkJBR0pyUCx5Q0FBZ0I7OztZQUNSLENBQUMsS0FBS2IsaUJBQVYsRUFBNkI7OzthQUd4QmdRLE1BQUwsR0FBYyxJQUFJMWhCLFNBQUosQ0FBYyxLQUFLQyxTQUFuQixDQUFkO1lBQ010SixVQUFVLEVBQWhCO1lBQ01rckIsY0FBYyxFQUFwQjtZQUNJLEtBQUs5c0IsS0FBTCxDQUFXeVosYUFBZixFQUE4QjtpQkFDckJ6WixLQUFMLENBQVd5WixhQUFYLENBQXlCelgsT0FBekIsQ0FBaUMsYUFBSztvQkFDOUJrZCxTQUFTLE9BQUt3TixjQUFMLENBQW9CNXhCLEVBQUV1USxNQUF0QixDQUFiO29CQUNJNlQsTUFBSixFQUFZOzRCQUNBbGMsSUFBUixDQUFha2MsTUFBYjs7O3lCQUdLLE9BQUswTixjQUFMLENBQW9COXhCLEVBQUV1USxNQUF0QixDQUFUO29CQUNJNlQsTUFBSixFQUFZO2dDQUNJbGMsSUFBWixDQUFpQjtrQ0FDRmtjLE1BREU7a0NBRUYsSUFBSXBnQixjQUFKLENBQW1CLENBQW5CLEVBQXNCLENBQXRCO3FCQUZmOzthQVJSOzs7YUFnQkMwZixRQUFMLEdBQWdCLEtBQUs3YyxZQUFMLENBQWtCQyxPQUFsQixDQUFoQjthQUNLMnFCLFlBQUwsR0FBb0IsS0FBSzVxQixZQUFMLENBQWtCbXJCLFdBQWxCLENBQXBCOztZQUVJLEtBQUt0TyxRQUFMLElBQWlCLE9BQVFZLE1BQVIsSUFBbUIsV0FBcEMsSUFBbURBLE9BQU9DLDJCQUE5RCxFQUEyRjtnQkFDakYwTixjQUFjM04sT0FBT0MsMkJBQTNCO3dCQUNZcmUsVUFBWixDQUF1QixJQUF2QixFQUE2QmdzQixRQUE3QixDQUFzQyxDQUF0QyxFQUF5QyxDQUF6QyxFQUE0Q0QsWUFBWWxzQixLQUF4RCxFQUErRGtzQixZQUFZanNCLE1BQTNFO3dCQUNZRSxVQUFaLENBQXVCLElBQXZCLEVBQTZCaXNCLFNBQTdCLEdBQXlDLG9CQUF6Qzt3QkFDWWpzQixVQUFaLENBQXVCLElBQXZCLEVBQTZCZ3NCLFFBQTdCLENBQXNDLENBQXRDLEVBQXlDLENBQXpDLEVBQTRDLEtBQUt4TyxRQUFMLENBQWMvZSxNQUFkLENBQXFCb0IsS0FBakUsRUFBd0UsS0FBSzJkLFFBQUwsQ0FBYy9lLE1BQWQsQ0FBcUJxQixNQUE3Rjt3QkFDWUUsVUFBWixDQUF1QixJQUF2QixFQUE2QmlDLFNBQTdCLENBQXVDLEtBQUt1YixRQUFMLENBQWMvZSxNQUFyRCxFQUE2RCxDQUE3RCxFQUFnRSxDQUFoRTs7O2FBR0NrZCxpQkFBTCxHQUF5QixLQUF6Qjs7WUFFSSxLQUFLNkIsUUFBTCxJQUFpQixDQUFDLEtBQUt4QixjQUEzQixFQUEyQztpQkFDbENyWCxXQUFMLENBQWlCLEtBQUs2WSxRQUFMLENBQWMvZSxNQUEvQjtpQkFDS2dILGFBQUwsQ0FBbUIsU0FBbkI7aUJBQ0t1VyxjQUFMLEdBQXNCLElBQXRCOzs7WUFHQSxLQUFLdVAsWUFBTCxJQUFxQixDQUFDLEtBQUtXLGtCQUEvQixFQUFtRDtpQkFDMUN2bkIsV0FBTCxDQUFpQixLQUFLNG1CLFlBQUwsQ0FBa0I5c0IsTUFBbkM7aUJBQ0tnSCxhQUFMLENBQW1CLGNBQW5CO2lCQUNLeW1CLGtCQUFMLEdBQTBCLElBQTFCOzs7WUFJQUMsVUFBVSxDQUFkO1lBQ01DLFNBQVMsS0FBS0MsT0FBTCxHQUFlLEVBQTlCO2FBQ0ssSUFBSXRwQixJQUFJLENBQVIsRUFBV3RILE1BQU0sS0FBS3VELEtBQUwsQ0FBV3laLGFBQVgsQ0FBeUJuYixNQUEvQyxFQUF1RHlGLElBQUl0SCxHQUEzRCxFQUFnRXNILEdBQWhFLEVBQXFFO2dCQUMzRG9LLFFBQVEsS0FBS25PLEtBQUwsQ0FBV3laLGFBQVgsQ0FBeUIxVixDQUF6QixDQUFkO2dCQUNNK0IsVUFBVSxLQUFLNG1CLGNBQUwsQ0FBb0J2ZSxNQUFNOUMsTUFBMUIsQ0FBaEI7Z0JBQ0l2RixPQUFKLEVBQWE7dUJBR0Y5QyxJQUFQLENBQVkwRyxLQUFaLENBQWtCMGpCLE1BQWxCLEVBQTBCLEtBQUs1TyxRQUFMLENBQWNoYyxTQUFkLENBQXdCMnFCLFNBQXhCLENBQTFCO3VCQUNPbnFCLElBQVAsQ0FBWSxDQUFDLENBQWI7YUFKSixNQUtPO29CQUdDb2lCLFFBQVFqWCxNQUFNOUMsTUFBTixDQUFhLFdBQWIsS0FBNkIsU0FBekM7d0JBQ1F3ZSxRQUFNekUsS0FBTixFQUFha0ksbUJBQWIsRUFBUjt1QkFDT3RxQixJQUFQLENBQVkwRyxLQUFaLENBQWtCMGpCLE1BQWxCLEVBQTBCaEksS0FBMUI7Ozs7a0JBS0UsQ0FBVjtZQUNNbUksYUFBYSxLQUFLQyxXQUFMLEdBQW1CLEVBQXRDO2FBQ0ssSUFBSXpwQixLQUFJLENBQVIsRUFBV3RILE9BQU0sS0FBS3VELEtBQUwsQ0FBV3laLGFBQVgsQ0FBeUJuYixNQUEvQyxFQUF1RHlGLEtBQUl0SCxJQUEzRCxFQUFnRXNILElBQWhFLEVBQXFFO2dCQUMzRG9LLFNBQVEsS0FBS25PLEtBQUwsQ0FBV3laLGFBQVgsQ0FBeUIxVixFQUF6QixDQUFkO2dCQUNNK0IsV0FBVSxLQUFLOG1CLGNBQUwsQ0FBb0J6ZSxPQUFNOUMsTUFBMUIsQ0FBaEI7Z0JBQ0l2RixRQUFKLEVBQWE7MkJBR0U5QyxJQUFYLENBQWdCMEcsS0FBaEIsQ0FBc0I2akIsVUFBdEIsRUFBa0MsS0FBS2hCLFlBQUwsQ0FBa0IvcEIsU0FBbEIsQ0FBNEIycUIsU0FBNUIsQ0FBbEM7MkJBQ1ducUIsSUFBWCxDQUFnQixDQUFDLENBQWpCO2FBSkosTUFLTztvQkFHQ29pQixTQUFRalgsT0FBTTlDLE1BQU4sQ0FBYSxhQUFiLEtBQStCLE1BQTNDO3lCQUNRd2UsUUFBTXpFLE1BQU4sRUFBYWtJLG1CQUFiLEVBQVI7MkJBQ1d0cUIsSUFBWCxDQUFnQjBHLEtBQWhCLENBQXNCNmpCLFVBQXRCLEVBQWtDbkksTUFBbEM7Ozs7OzJCQUtaeEksNkNBQWtCO2FBQ1Q1YyxLQUFMLENBQVdpZ0IsRUFBWCxDQUFjLFVBQWQsRUFBMEIsS0FBS0MsZUFBL0IsRUFBZ0QsSUFBaEQ7OzsyQkFHSjNCLHlDQUFnQjthQUNQdmUsS0FBTCxDQUFXbWdCLEdBQVgsQ0FBZSxVQUFmLEVBQTJCLEtBQUtELGVBQWhDLEVBQWlELElBQWpEOzs7MkJBR0pBLDZDQUFrQjthQUNUeEQsZUFBTCxHQUF1QixJQUF2Qjs7OztFQS9Ma0N2ZDs7QUNDMUMsSUFBTU4sWUFBVTtZQUNIO0NBRGI7O0lBSXFCNHVCOzs7Ozs7Ozs7RUFBcUI5VTs7QUFJMUM4VSxhQUFhM2MsWUFBYixDQUEwQmpTLFNBQTFCOztBQUVBNHVCLGFBQWFqUixnQkFBYixDQUE4QixjQUE5Qjs7QUFTQSxJQUFha1IsZUFBYjs7Ozs7Ozs7OEJBR0kvc0IsY0FISiw2QkFHcUI7WUFDUCtELFdBQVcsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixZQUF4QixFQUFvRCxhQUFwRCxDQUFqQjthQUNLaXBCLFlBQUwsR0FBb0IsS0FBS3BwQixhQUFMLENBQW1CMlksUUFBUWhQLElBQVIsQ0FBYWlQLFlBQWhDLEVBQThDRCxRQUFRaFAsSUFBUixDQUFha1AsY0FBM0QsRUFBMkUxWSxRQUEzRSxDQUFwQjtnQ0FDTS9ELGNBQU47S0FOUjs7OEJBU0k0YyxJQVRKLG1CQVNXO2FBQ0U5YixhQUFMOzthQUVLbXNCLFVBQUw7YUFDS3ZQLGNBQUw7S0FiUjs7OEJBZ0JJQyxpQkFoQkosZ0NBZ0J3QjthQUNYc1AsVUFBTDthQUNLdlAsY0FBTDtLQWxCUjs7OEJBcUJJaGEsUUFyQkosdUJBcUJlO2VBQ0EsS0FBS3dwQixXQUFaO2dDQUNNeHBCLFFBQU4sQ0FBZXFGLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJDLFNBQTNCO0tBdkJSOzs4QkEwQkk4aUIsVUExQkosdUJBMEJlcGhCLE1BMUJmLEVBMEJ1QjtlQUNSLEtBQUtxaEIsY0FBTCxDQUFvQnJoQixNQUFwQixDQUFQO0tBM0JSOzs4QkE4Qkl1aUIsVUE5QkoseUJBOEJpQjtZQUNIanZCLEtBQUssS0FBS0EsRUFBaEI7WUFDSUMsTUFBTSxLQUFLUyxNQUFMLEVBRFY7WUFFSTZFLFVBQVUsS0FBS3lwQixZQUZuQjthQUdLam9CLFVBQUwsQ0FBZ0J4QixPQUFoQjthQUNLc1osYUFBTDs7YUFFS3NRLGdCQUFMO2FBQ0tDLGVBQUwsQ0FBcUIsS0FBS0YsV0FBMUI7O1lBRU12bUIsSUFBSSxLQUFLSSxZQUFMLEVBQVY7V0FDRytYLGdCQUFILENBQW9COWdCLEdBQUd1RixPQUFILENBQVd3YixRQUEvQixFQUF5QyxLQUF6QyxFQUFnRHBZLENBQWhEO1dBQ0dxWSxTQUFILENBQWF6YixRQUFRMGIsT0FBckIsRUFBOEJoaEIsSUFBSW1JLFFBQUosS0FBaUJuSSxJQUFJbUksUUFBSixDQUFhaEksY0FBY0gsR0FBZCxDQUFiLENBQS9DO1dBQ0dpaEIsVUFBSCxDQUFjM2IsUUFBUThwQixRQUF0QixFQUFnQyxLQUFLWCxPQUFyQzs7WUFNSVksVUFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWQ7WUFDSSxLQUFLelAsUUFBVCxFQUFtQjtzQkFDTCxDQUFDLEtBQUtBLFFBQUwsQ0FBYy9lLE1BQWQsQ0FBcUJvQixLQUF0QixFQUE2QixLQUFLMmQsUUFBTCxDQUFjL2UsTUFBZCxDQUFxQnFCLE1BQWxELENBQVY7O1dBRURvdEIsVUFBSCxDQUFjaHFCLFFBQVFpcUIsVUFBdEIsRUFBa0MsSUFBSXYxQixZQUFKLENBQWlCcTFCLE9BQWpCLENBQWxDO1dBQ0dHLFlBQUgsQ0FBZ0J6dkIsR0FBRzB2QixTQUFuQixFQUE4QixLQUFLQyxhQUFuQyxFQUFrRDN2QixHQUFHNHZCLFlBQXJELEVBQW1FLENBQW5FOztXQUVHbFIsVUFBSCxDQUFjMWUsR0FBRzZ2QixvQkFBakIsRUFBdUMsSUFBdkM7S0F4RFI7OzhCQTJESVYsZ0JBM0RKLCtCQTJEdUI7WUFDWCxLQUFLRCxXQUFULEVBQXNCOzs7WUFHaEJsdkIsS0FBSyxLQUFLQSxFQUFoQjtZQUNJQyxNQUFNLEtBQUtTLE1BQUwsRUFEVjtZQUVNMlIsT0FBTyxLQUFLaFIsS0FBTCxDQUFXZ1IsSUFBeEI7WUFDTXlkLFVBQVUsSUFBSS9nQixXQUFKLENBQWdCL08sRUFBaEIsRUFBb0JDLEdBQXBCLENBQWhCO1lBQ0l5TSxlQUFKO2FBQ0ssSUFBSXRILElBQUksQ0FBUixFQUFXd0ssSUFBSXlDLEtBQUsxUyxNQUF6QixFQUFpQ3lGLElBQUl3SyxDQUFyQyxFQUF3Q3hLLEdBQXhDLEVBQTZDO2dCQUNyQyxDQUFDaU4sS0FBS2pOLENBQUwsQ0FBTCxFQUFjOzs7Z0JBR1ZOLE1BQU1DLE9BQU4sQ0FBY3NOLEtBQUtqTixDQUFMLENBQWQsQ0FBSixFQUE0Qjt5QkFDZixLQUFLeW9CLGFBQUwsQ0FBbUJ4YixLQUFLak4sQ0FBTCxFQUFRLENBQVIsQ0FBbkIsQ0FBVDt3QkFDUWtLLE9BQVIsQ0FBZ0IrQyxLQUFLak4sQ0FBTCxFQUFRLENBQVIsQ0FBaEIsRUFBNEJzSCxNQUE1QjthQUZKLE1BR08sSUFBSTJGLEtBQUtqTixDQUFMLEVBQVFpRyxJQUFaLEVBQWtCO3lCQUVaLEtBQUt3aUIsYUFBTCxDQUFtQnhiLEtBQUtqTixDQUFMLEVBQVE2WixVQUEzQixDQUFUO3dCQUNRM1AsT0FBUixDQUFnQitDLEtBQUtqTixDQUFMLENBQWhCLEVBQXlCc0gsTUFBekI7Ozs7WUFJRnFqQixhQUFhLEtBQUtiLFdBQUwsR0FBbUJZLFFBQVF6Z0IsU0FBUixFQUF0Qzs7YUFFS3NnQixhQUFMLEdBQXFCSSxXQUFXN2dCLFlBQVgsQ0FBd0J2UCxNQUE3QztLQXBGUjs7OEJBdUZJeXZCLGVBdkZKLDRCQXVGb0JXLFVBdkZwQixFQXVGZ0M7WUFDbEIvdkIsS0FBSyxLQUFLQSxFQUFoQjs7WUFFSSxDQUFDLEtBQUtnd0IsYUFBVixFQUF5QjtnQkFDZkMsZUFBZSxLQUFLRCxhQUFMLEdBQXFCLEtBQUt2ckIsWUFBTCxFQUExQztlQUNHaWEsVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCc1IsWUFBL0I7ZUFDRzVRLFVBQUgsQ0FBY3JmLEdBQUcyZSxZQUFqQixFQUErQixJQUFJMWtCLFlBQUosQ0FBaUI4MUIsV0FBVy9nQixXQUE1QixDQUEvQixFQUF5RWhQLEdBQUdzZixXQUE1RTtTQUhKLE1BSU87ZUFDQVosVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCLEtBQUtxUixhQUFwQzs7YUFFQ3ByQixrQkFBTCxDQUNJLENBQUMsT0FBRCxFQUFVLENBQVYsRUFBYSxPQUFiLENBREo7O1lBSUksQ0FBQyxLQUFLc3JCLGFBQVYsRUFBeUI7Z0JBRWZDLGVBQWUsS0FBS0QsYUFBTCxHQUFxQixLQUFLenJCLFlBQUwsRUFBMUM7ZUFDR2lhLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQndSLFlBQS9CO2VBQ0c5USxVQUFILENBQWNyZixHQUFHMmUsWUFBakIsRUFBK0IsSUFBSTFrQixZQUFKLENBQWlCODFCLFdBQVc5Z0IsV0FBNUIsQ0FBL0IsRUFBeUVqUCxHQUFHc2YsV0FBNUU7U0FKSixNQUtPO2VBQ0FaLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQixLQUFLdVIsYUFBcEM7O2FBRUN0ckIsa0JBQUwsQ0FBd0IsQ0FDcEIsQ0FBQyxVQUFELEVBQWEsQ0FBYixFQUFnQixPQUFoQixDQURvQixFQUVwQixDQUFDLGFBQUQsRUFBZ0IsQ0FBaEIsRUFBbUIsT0FBbkIsQ0FGb0IsQ0FBeEI7O1lBS0ksQ0FBQyxLQUFLd3JCLFVBQVYsRUFBc0I7Z0JBRVpDLFlBQVksS0FBS0QsVUFBTCxHQUFrQixLQUFLM3JCLFlBQUwsRUFBcEM7ZUFDR2lhLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQjBSLFNBQS9CO2VBQ0doUixVQUFILENBQWNyZixHQUFHMmUsWUFBakIsRUFBK0IsSUFBSTFrQixZQUFKLENBQWlCODFCLFdBQVc1Z0IsVUFBNUIsQ0FBL0IsRUFBd0VuUCxHQUFHc2YsV0FBM0U7U0FKSixNQUtPO2VBQ0FaLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQixLQUFLeVIsVUFBcEM7O2FBRUN4ckIsa0JBQUwsQ0FBd0IsQ0FDcEIsQ0FBQyxTQUFELEVBQVksQ0FBWixFQUFlLE9BQWYsQ0FEb0IsQ0FBeEI7O1dBS0c4WixVQUFILENBQWMxZSxHQUFHMmUsWUFBakIsRUFBK0IsSUFBL0I7O1lBRUksQ0FBQyxLQUFLMlIsY0FBVixFQUEwQjtnQkFFaEJDLGdCQUFnQixLQUFLRCxjQUFMLEdBQXNCLEtBQUs3ckIsWUFBTCxFQUE1QztlQUNHaWEsVUFBSCxDQUFjMWUsR0FBRzZ2QixvQkFBakIsRUFBdUNVLGFBQXZDO2VBQ0dsUixVQUFILENBQWNyZixHQUFHNnZCLG9CQUFqQixFQUF1QyxJQUFJVyxXQUFKLENBQWdCVCxXQUFXN2dCLFlBQTNCLENBQXZDLEVBQWlGbFAsR0FBR3NmLFdBQXBGO1NBSkosTUFLTztlQUNBWixVQUFILENBQWMxZSxHQUFHNnZCLG9CQUFqQixFQUF1QyxLQUFLUyxjQUE1Qzs7S0F2SVo7OztFQUFxQzdDLFlBQXJDOztBQStJQXFCLGFBQWFoUixnQkFBYixDQUE4QixPQUE5QixFQUF1Q2lSLGVBQXZDOztBQ25LQSxJQUFNN3VCLFlBQVU7WUFDSDtDQURiOztJQUlxQnV3Qjs7Ozs7Ozs7O0VBQXdCelc7O0FBSTdDeVcsZ0JBQWdCdGUsWUFBaEIsQ0FBNkJqUyxTQUE3Qjs7QUFFQXV3QixnQkFBZ0I1UyxnQkFBaEIsQ0FBaUMsaUJBQWpDOztBQUVBNFMsZ0JBQWdCM1MsZ0JBQWhCLENBQWlDLE9BQWpDOzs7Ozs7OztxQkFFSTliLGNBRkosNkJBRXFCO1lBQ1ArRCxXQUFXLENBQUMsVUFBRCxFQUFhLGtCQUFiLENBQWpCO2FBQ0sycUIsZUFBTCxHQUF1QixLQUFLOXFCLGFBQUwsQ0FBbUIyWSxRQUFRNUYsT0FBUixDQUFnQjZGLFlBQW5DLEVBQWlERCxRQUFRNUYsT0FBUixDQUFnQjhGLGNBQWpFLEVBQWlGMVksUUFBakYsQ0FBdkI7bUNBQ00vRCxjQUFOO0tBTFI7O3FCQVFJNGMsSUFSSixtQkFRVzthQUNFOWIsYUFBTDthQUNLNnRCLGFBQUw7YUFDSzN3QixFQUFMLENBQVE0QixPQUFSLENBQWdCLEtBQUs1QixFQUFMLENBQVEyQixLQUF4QjthQUNLc3RCLFVBQUw7YUFDS2p2QixFQUFMLENBQVEwQixNQUFSLENBQWUsS0FBSzFCLEVBQUwsQ0FBUTJCLEtBQXZCO2FBQ0srZCxjQUFMO0tBZFI7O3FCQWlCSUMsaUJBakJKLGdDQWlCd0I7YUFDWGdSLGFBQUw7YUFDSzN3QixFQUFMLENBQVE0QixPQUFSLENBQWdCLEtBQUs1QixFQUFMLENBQVEyQixLQUF4QjthQUNLc3RCLFVBQUw7YUFDS2p2QixFQUFMLENBQVEwQixNQUFSLENBQWUsS0FBSzFCLEVBQUwsQ0FBUTJCLEtBQXZCO2FBQ0srZCxjQUFMO0tBdEJSOztxQkF5QklvTyxVQXpCSix1QkF5QmVwaEIsTUF6QmYsRUF5QnVCO2VBQ1IsS0FBS3VoQixjQUFMLENBQW9CdmhCLE1BQXBCLENBQVA7S0ExQlI7O3FCQTZCSWlrQixhQTdCSiw0QkE2Qm9CO1lBQ04zd0IsS0FBSyxLQUFLQSxFQUFoQjtZQUNJdUYsVUFBVSxLQUFLbXJCLGVBRG5CO2FBRUszcEIsVUFBTCxDQUFnQnhCLE9BQWhCO2FBQ0tzWixhQUFMOzthQUVLK1IsbUJBQUw7O2FBRUtDLGtCQUFMLENBQXdCLEtBQUtDLGNBQTdCOztZQUVNbm9CLElBQUksS0FBS0ksWUFBTCxFQUFWO1dBQ0crWCxnQkFBSCxDQUFvQjlnQixHQUFHdUYsT0FBSCxDQUFXLFVBQVgsQ0FBcEIsRUFBNEMsS0FBNUMsRUFBbURvRCxDQUFuRDtXQUNHdVksVUFBSCxDQUFjM2IsUUFBUSxlQUFSLENBQWQsRUFBd0MsS0FBS3NwQixXQUE3QztXQUNHWSxZQUFILENBQWdCenZCLEdBQUcwdkIsU0FBbkIsRUFBOEIsS0FBS3FCLG9CQUFuQyxFQUF5RC93QixHQUFHNHZCLFlBQTVELEVBQTBFLENBQTFFOztXQUVHbFIsVUFBSCxDQUFjMWUsR0FBRzZ2QixvQkFBakIsRUFBdUMsSUFBdkM7S0E1Q1I7O3FCQStDSWUsbUJBL0NKLGtDQStDMEI7WUFDZCxLQUFLRSxjQUFULEVBQXlCOzs7WUFHbkI5d0IsS0FBSyxLQUFLQSxFQUFoQjtZQUNJQyxNQUFNLEtBQUtTLE1BQUwsRUFEVjs7WUFHTTJSLE9BQU8sS0FBS2hSLEtBQUwsQ0FBV2dSLElBQXhCO1lBQ015ZCxVQUFVLElBQUlyWCxjQUFKLENBQW1CelksRUFBbkIsRUFBdUJDLEdBQXZCLENBQWhCO1lBQ0l5TSxlQUFKO2FBQ0ssSUFBSXRILElBQUksQ0FBUixFQUFXd0ssSUFBSXlDLEtBQUsxUyxNQUF6QixFQUFpQ3lGLElBQUl3SyxDQUFyQyxFQUF3Q3hLLEdBQXhDLEVBQTZDO2dCQUNyQyxDQUFDaU4sS0FBS2pOLENBQUwsQ0FBTCxFQUFjOzs7Z0JBR1ZOLE1BQU1DLE9BQU4sQ0FBY3NOLEtBQUtqTixDQUFMLENBQWQsQ0FBSixFQUE0Qjt5QkFDZixLQUFLeW9CLGFBQUwsQ0FBbUJ4YixLQUFLak4sQ0FBTCxFQUFRLENBQVIsQ0FBbkIsQ0FBVDt3QkFDUXNULFVBQVIsQ0FBbUJyRyxLQUFLak4sQ0FBTCxFQUFRLENBQVIsQ0FBbkIsRUFBK0JzSCxNQUEvQjthQUZKLE1BR08sSUFBSTJGLEtBQUtqTixDQUFMLEVBQVFpRyxJQUFaLEVBQWtCO3lCQUVaLEtBQUt3aUIsYUFBTCxDQUFtQnhiLEtBQUtqTixDQUFMLEVBQVE2WixVQUEzQixDQUFUO3dCQUNRdkcsVUFBUixDQUFtQnJHLEtBQUtqTixDQUFMLENBQW5CLEVBQTRCc0gsTUFBNUI7OztZQUlGc2tCLGdCQUFnQixLQUFLRixjQUFMLEdBQXNCaEIsUUFBUXpnQixTQUFSLEVBQTVDO2FBQ0swaEIsb0JBQUwsR0FBNEJDLGNBQWM5aEIsWUFBZCxDQUEyQnZQLE1BQXZEO0tBeEVSOztxQkEyRUlreEIsa0JBM0VKLCtCQTJFdUJHLGFBM0V2QixFQTJFc0M7WUFDeEJoeEIsS0FBSyxLQUFLQSxFQUFoQjtZQUNJLENBQUMsS0FBS2l4QixvQkFBVixFQUFnQztnQkFFdEJoQixlQUFlLEtBQUtnQixvQkFBTCxHQUE0QixLQUFLeHNCLFlBQUwsRUFBakQ7ZUFDR2lhLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQnNSLFlBQS9CO2VBQ0c1USxVQUFILENBQWNyZixHQUFHMmUsWUFBakIsRUFBK0IsSUFBSTFrQixZQUFKLENBQWlCKzJCLGNBQWNoaUIsV0FBL0IsQ0FBL0IsRUFBNEVoUCxHQUFHc2YsV0FBL0U7U0FKSixNQUtPO2VBQ0FaLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQixLQUFLc1Msb0JBQXBDOzthQUVDcnNCLGtCQUFMLENBQ0ksQ0FBQyxPQUFELEVBQVUsQ0FBVixFQUFhLE9BQWIsQ0FESjs7WUFJSSxDQUFDLEtBQUtzc0IsaUJBQVYsRUFBNkI7Z0JBRW5CYixZQUFZLEtBQUthLGlCQUFMLEdBQXlCLEtBQUt6c0IsWUFBTCxFQUEzQztlQUNHaWEsVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCMFIsU0FBL0I7ZUFDR2hSLFVBQUgsQ0FBY3JmLEdBQUcyZSxZQUFqQixFQUErQixJQUFJMWtCLFlBQUosQ0FBaUIrMkIsY0FBYzdoQixVQUEvQixDQUEvQixFQUEyRW5QLEdBQUdzZixXQUE5RTtTQUpKLE1BS087ZUFDQVosVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCLEtBQUt1UyxpQkFBcEM7O2FBRUN0c0Isa0JBQUwsQ0FBd0IsQ0FDcEIsQ0FBQyxjQUFELEVBQWlCLENBQWpCLEVBQW9CLE9BQXBCLENBRG9CLENBQXhCOztXQUlHOFosVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCLElBQS9COztZQUVJLENBQUMsS0FBS3dTLGtCQUFWLEVBQThCO2dCQUVwQlosZ0JBQWdCLEtBQUtZLGtCQUFMLEdBQTBCLEtBQUsxc0IsWUFBTCxFQUFoRDtlQUNHaWEsVUFBSCxDQUFjMWUsR0FBRzZ2QixvQkFBakIsRUFBdUNVLGFBQXZDO2VBQ0dsUixVQUFILENBQWNyZixHQUFHNnZCLG9CQUFqQixFQUF1QyxJQUFJVyxXQUFKLENBQWdCUSxjQUFjOWhCLFlBQTlCLENBQXZDLEVBQW9GbFAsR0FBR3NmLFdBQXZGO1NBSkosTUFLTztlQUNBWixVQUFILENBQWMxZSxHQUFHNnZCLG9CQUFqQixFQUF1QyxLQUFLc0Isa0JBQTVDOztLQTdHWjs7cUJBaUhJenJCLFFBakhKLHVCQWlIZTtlQUNBLEtBQUtvckIsY0FBWjttQ0FDTXByQixRQUFOLENBQWVxRixLQUFmLENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQjtLQW5IUjs7O0VBQXdEK2pCLGVBQXhEOztBQ1hBLElBQU03dUIsWUFBVTtlQUVBO0NBRmhCOztJQVdxQmt4Qjs7OzRCQUNMcHhCLEVBQVosRUFBZ0JDLEdBQWhCLEVBQXFCQyxPQUFyQixFQUE4Qjs7O29EQUMxQixvQkFBTUYsRUFBTixFQUFVQyxHQUFWLEVBQWVDLE9BQWYsQ0FEMEI7O2NBSXJCOE8sV0FBTCxHQUFtQixFQUFuQjtjQUNLQyxXQUFMLEdBQW1CLEVBQW5CO2NBQ0tDLFlBQUwsR0FBb0IsRUFBcEI7Y0FDS0MsVUFBTCxHQUFrQixFQUFsQjs7Ozs2QkFPSkUsaUNBQVk7ZUFDRDsyQkFDYyxLQUFLTCxXQURuQjsyQkFFYSxLQUFLQyxXQUZsQjs0QkFHYyxLQUFLQyxZQUhuQjswQkFJYyxLQUFLQztTQUoxQjs7OzZCQW1CSnVKLGlDQUFXQyxTQUFTeFcsUUFBUXFOLE9BQU87WUFDM0IsQ0FBQ21KLE9BQUwsRUFBYzttQkFDSCxJQUFQOztZQUVBbkosTUFBTTlDLE1BQU4sQ0FBYSxnQkFBYixLQUFrQyxDQUF0QyxFQUF5QzttQkFDOUIsSUFBUDs7O1lBR0VnRCxVQUFVLEtBQUtDLFdBQUwsQ0FBaUJnSixPQUFqQixDQUFoQjs7WUFHSWpKLFFBQVEsQ0FBUixLQUFjNUssTUFBTUMsT0FBTixDQUFjMkssUUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFkLENBQWQsSUFBOEM1SyxNQUFNQyxPQUFOLENBQWMySyxRQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQUFkLENBQWxELEVBQW1GO2lCQUMxRSxJQUFJdEssSUFBSSxDQUFSLEVBQVd3SyxJQUFJRixRQUFRL1AsTUFBNUIsRUFBb0N5RixJQUFJd0ssQ0FBeEMsRUFBMkN4SyxHQUEzQyxFQUFnRDtxQkFDdkNzVCxVQUFMLENBQWdCaEosUUFBUXRLLENBQVIsQ0FBaEIsRUFBNEJqRCxNQUE1QixFQUFvQ3FOLEtBQXBDOzttQkFFRyxJQUFQOzs7YUFHQzZoQixXQUFMLENBQWlCM2hCLE9BQWpCLEVBQTBCdk4sTUFBMUIsRUFBa0NxTixLQUFsQztlQUNPLElBQVA7Ozs2QkFHSjZoQixtQ0FBWTNoQixTQUFTdk4sUUFBUXFOLE9BQU87WUFDMUI4aEIsWUFBWSxDQUFsQjs7WUFFTS9uQixVQUFVbkosY0FBYyxLQUFLSCxHQUFuQixDQUFoQjtZQUNNb1MsT0FBT0QsU0FBTytGLE9BQVAsQ0FBZXpJLE9BQWYsQ0FBYjs7WUFFTTZoQixTQUFTLEVBQWY7WUFDTUMsTUFBTSxFQUFaO1lBQ0lsMUIsVUFBSjs7YUFFSyxJQUFJOEksSUFBSSxDQUFSLEVBQVd3SyxJQUFJeUMsS0FBSytGLFFBQUwsQ0FBY3pZLE1BQWxDLEVBQTBDeUYsSUFBSXdLLENBQTlDLEVBQWlEeEssS0FBSyxDQUF0RCxFQUF5RDtnQkFDakRBLE1BQU13SyxJQUFJLENBQWQsRUFBaUI7b0JBQ1QsS0FBS2lKLFdBQUwsQ0FBaUJ4RyxLQUFLK0YsUUFBTCxDQUFjaFQsQ0FBZCxDQUFqQixFQUFtQ2lOLEtBQUsrRixRQUFMLENBQWMsQ0FBZCxDQUFuQyxDQUFKLEVBQTBEOzs7O2dCQUkxRCxLQUFLbFksT0FBTCxDQUFhLFNBQWIsQ0FBSixFQUE2QjtvQkFDckIsS0FBS0QsR0FBTCxDQUFTeUosaUJBQVQsQ0FBMkIsSUFBSXZKLG1CQUFKLENBQXdCa1MsS0FBSytGLFFBQUwsQ0FBY2hULENBQWQsQ0FBeEIsRUFBMENpTixLQUFLK0YsUUFBTCxDQUFjaFQsSUFBSSxDQUFsQixDQUExQyxDQUEzQixFQUE0Rm1FLE9BQTVGLENBQUo7dUJBQ09sRixJQUFQLENBQVkvSCxFQUFFVCxDQUFkLEVBQWlCUyxFQUFFUixDQUFuQixFQUFzQixDQUF0QjtvQkFDSXVJLElBQUosQ0FBUy9ILEVBQUVULENBQVgsRUFBY1MsRUFBRVIsQ0FBaEIsRUFBbUJxRyxNQUFuQjthQUhKLE1BSU87dUJBQ0lrQyxJQUFQLENBQVlnTyxLQUFLK0YsUUFBTCxDQUFjaFQsQ0FBZCxDQUFaLEVBQThCaU4sS0FBSytGLFFBQUwsQ0FBY2hULElBQUksQ0FBbEIsQ0FBOUIsRUFBb0QsQ0FBcEQ7b0JBQ0lmLElBQUosQ0FBU2dPLEtBQUsrRixRQUFMLENBQWNoVCxDQUFkLENBQVQsRUFBMkJpTixLQUFLK0YsUUFBTCxDQUFjaFQsSUFBSSxDQUFsQixDQUEzQixFQUFpRGpELE1BQWpEOzs7YUFHSGlXLFFBQUwsR0FBZ0JtWixNQUFoQjtZQUNJM2UsWUFBWVIsU0FBT0MsS0FBSytGLFFBQVosRUFBc0IvRixLQUFLZ0csS0FBM0IsRUFBa0NpWixTQUFsQyxDQUFoQjtZQUNJMWUsVUFBVWpULE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkI7OztZQUdyQm1ZLFlBQVkxRixTQUFPMEYsU0FBUCxDQUFpQnpGLEtBQUsrRixRQUF0QixFQUFnQy9GLEtBQUtnRyxLQUFyQyxFQUE0Q2laLFNBQTVDLEVBQXVEMWUsU0FBdkQsQ0FBbEI7WUFDSXhXLEtBQUt5UyxLQUFMLENBQVdpSixZQUFZLEdBQXZCLElBQThCLEdBQTlCLEtBQXNDLENBQTFDLEVBQTZDO2dCQUNyQ2dCLE9BQUosRUFBYTt3QkFDREMsSUFBUixDQUFhLHVCQUFiOzs7OztZQUtGNUksUUFBUW9oQixPQUFPNXhCLE1BQVAsR0FBZ0IyeEIsU0FBOUI7O1lBRU1HLFdBQVcsS0FBS3ppQixXQUFMLENBQWlCclAsTUFBakIsR0FBMEIyeEIsU0FBM0M7WUFDSUcsV0FBVyxDQUFmLEVBQWtCO3dCQUNGN2UsVUFBVTNTLEdBQVYsQ0FBYzt1QkFBS21MLElBQUlxbUIsUUFBVDthQUFkLENBQVo7OztxQkFHSixDQUFjL2YsTUFBZCxDQUFxQixLQUFLMUMsV0FBMUIsRUFBdUN1aUIsTUFBdkM7O3FCQUVBLENBQWM3ZixNQUFkLENBQXFCLEtBQUt4QyxZQUExQixFQUF3QzBELFNBQXhDOzthQUVLLElBQUl4TixLQUFJLENBQWIsRUFBZ0JBLEtBQUkrSyxLQUFwQixFQUEyQi9LLElBQTNCLEVBQWdDO2lCQUN2QjZKLFdBQUwsQ0FBaUI1SyxJQUFqQixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUFDLENBQTdCOzs7WUFJQThMLFFBQVEsQ0FBWixFQUFlO3dCQUNDeUMsVUFBVTNTLEdBQVYsQ0FBYzt1QkFBS21MLElBQUkrRSxLQUFUO2FBQWQsQ0FBWjs7O3FCQUdKLENBQWN1QixNQUFkLENBQXFCLEtBQUsxQyxXQUExQixFQUF1Q3dpQixHQUF2Qzs7cUJBRUEsQ0FBYzlmLE1BQWQsQ0FBcUIsS0FBS3hDLFlBQTFCLEVBQXdDMEQsU0FBeEM7O2FBRUssSUFBSXhOLE1BQUksQ0FBYixFQUFnQkEsTUFBSStLLEtBQXBCLEVBQTJCL0ssS0FBM0IsRUFBZ0M7aUJBQ3ZCNkosV0FBTCxDQUFpQjVLLElBQWpCLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCOzs7WUFJRXF0QixjQUFjLEtBQUsxaUIsV0FBTCxDQUFpQnJQLE1BQWpCLEdBQTBCMnhCLFNBQTlDO2FBQ0ssSUFBSWxzQixNQUFJLENBQVIsRUFBV3dLLEtBQUlPLEtBQXBCLEVBQTJCL0ssTUFBSXdLLEtBQUksQ0FBbkMsRUFBc0N4SyxLQUF0QyxFQUEyQztnQkFDakN1c0IsS0FBS3ZzQixNQUFJa3NCLFNBQWY7Z0JBQ001Z0IsU0FBUyxJQUFJbEQsT0FBSixDQUFVK2pCLE9BQU9JLEtBQUssQ0FBWixDQUFWLEVBQTBCSixPQUFPSSxLQUFLLENBQVosQ0FBMUIsRUFBMENoaEIsR0FBMUMsQ0FBOEMsSUFBSW5ELE9BQUosQ0FBVStqQixPQUFPSSxFQUFQLENBQVYsRUFBc0JKLE9BQU9JLEtBQUssQ0FBWixDQUF0QixDQUE5QyxFQUFxRnRqQixLQUFyRixHQUE2RkMsS0FBN0YsRUFBZjtpQkFDS1UsV0FBTCxDQUFpQjNLLElBQWpCLENBQXNCa3RCLE9BQU9JLEVBQVAsQ0FBdEIsRUFBa0NKLE9BQU9JLEtBQUssQ0FBWixDQUFsQyxFQUFrREosT0FBT0ksS0FBSyxDQUFaLENBQWxEO2lCQUNLM2lCLFdBQUwsQ0FBaUIzSyxJQUFqQixDQUFzQmt0QixPQUFPSSxLQUFLLENBQVosQ0FBdEIsRUFBc0NKLE9BQU9JLEtBQUssQ0FBWixDQUF0QyxFQUFzREosT0FBT0ksS0FBSyxDQUFaLENBQXREO2lCQUNLM2lCLFdBQUwsQ0FBaUIzSyxJQUFqQixDQUFzQm10QixJQUFJRyxLQUFLLENBQVQsQ0FBdEIsRUFBbUNILElBQUlHLEtBQUssQ0FBVCxDQUFuQyxFQUFnREgsSUFBSUcsS0FBSyxDQUFULENBQWhEO2lCQUNLM2lCLFdBQUwsQ0FBaUIzSyxJQUFqQixDQUFzQm10QixJQUFJRyxFQUFKLENBQXRCLEVBQStCSCxJQUFJRyxLQUFLLENBQVQsQ0FBL0IsRUFBNENILElBQUlHLEtBQUssQ0FBVCxDQUE1QztpQkFDSyxJQUFJbGdCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7cUJBQ25CeEMsV0FBTCxDQUFpQjVLLElBQWpCLENBQXNCcU0sT0FBTzdVLENBQTdCLEVBQWdDNlUsT0FBTzVVLENBQXZDLEVBQTBDLENBQTFDOztnQkFFRTgxQixLQUFLeHNCLE1BQUksQ0FBZjtpQkFDSzhKLFlBQUwsQ0FBa0I3SyxJQUFsQixDQUF1QnF0QixjQUFjRSxFQUFyQyxFQUF5Q0YsY0FBY0UsRUFBZCxHQUFtQixDQUE1RCxFQUErREYsY0FBY0UsRUFBZCxHQUFtQixDQUFsRjtpQkFDSzFpQixZQUFMLENBQWtCN0ssSUFBbEIsQ0FBdUJxdEIsY0FBY0UsRUFBckMsRUFBeUNGLGNBQWNFLEVBQWQsR0FBbUIsQ0FBNUQsRUFBK0RGLGNBQWNFLEVBQWQsR0FBbUIsQ0FBbEY7OzthQUtDeGhCLGFBQUwsQ0FBbUIsS0FBS3BCLFdBQUwsQ0FBaUJyUCxNQUFqQixHQUEwQjJ4QixTQUExQixHQUFzQ0csUUFBekQsRUFBbUVqaUIsS0FBbkU7Ozs2QkFHSkcsbUNBQVlxSixLQUFLO1lBQ1RBLElBQUlySCxRQUFSLEVBQWtCO2tCQUVScUgsSUFBSXJILFFBQUosQ0FBYUMsV0FBbkI7U0FGSixNQUdPLElBQUlvSCxJQUFJcEgsV0FBUixFQUFxQjtrQkFFbEJvSCxJQUFJcEgsV0FBVjs7ZUFFR29ILEdBQVA7Ozs2QkFHSjVJLHVDQUFjcUIsR0FBR2pDLE9BQU87WUFFZDVULElBQUk0VCxNQUFNcUMsS0FBTixHQUFjLEdBQWQsR0FBb0IsQ0FBQ3JDLE1BQU05QyxNQUFOLENBQWEsZ0JBQWIsS0FBa0MsQ0FBbkMsSUFBd0MsRUFBdEU7YUFDSyxJQUFJdEgsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcU0sQ0FBcEIsRUFBdUJyTSxHQUF2QixFQUE0QjtpQkFDbkIrSixVQUFMLENBQWdCOUssSUFBaEIsQ0FBcUJ6SSxDQUFyQjs7Ozs2QkFJUmlkLG1DQUFZSSxJQUFJQyxJQUFJO2VBQ1RELEdBQUcsQ0FBSCxNQUFVQyxHQUFHLENBQUgsQ0FBVixJQUFtQkQsR0FBRyxDQUFILE1BQVVDLEdBQUcsQ0FBSCxDQUFwQzs7OztFQXJLb0NuWjs7QUF5SzVDcXhCLGVBQWVqZixZQUFmLENBQTRCalMsU0FBNUI7O0FDbkxBLElBQU1BLFlBQVU7Z0JBQ0MsQ0FBQyxFQUFELEVBQUssQ0FBTCxFQUFRLEVBQVIsQ0FERDtrQkFFRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZIO3NCQUdPLEdBSFA7b0JBSUssQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWI7Q0FKckI7O0lBT3FCMnhCOzs7Ozs7Ozs7RUFBNEI3WDs7QUFJakQ2WCxvQkFBb0IxZixZQUFwQixDQUFpQ2pTLFNBQWpDOztBQUVBMnhCLG9CQUFvQmhVLGdCQUFwQixDQUFxQyxxQkFBckM7O0FBRUEsSUFBYWlVLGVBQWI7Ozs7Ozs7OzhCQUVJOXZCLGNBRkosNkJBRXFCO1lBQ1ArRCxXQUFXLENBQUMsVUFBRCxFQUFhLGtCQUFiLEVBQWlDLGNBQWpDLEVBQWlELFlBQWpELEVBQStELGdCQUEvRCxFQUFpRixrQkFBakYsQ0FBakI7YUFDS1IsT0FBTCxHQUFlLEtBQUtLLGFBQUwsQ0FBbUIyWSxRQUFRbE4sT0FBUixDQUFnQm1OLFlBQW5DLEVBQWlERCxRQUFRbE4sT0FBUixDQUFnQm9OLGNBQWpFLEVBQWlGMVksUUFBakYsQ0FBZjtnQ0FDTS9ELGNBQU47WUFDTWhDLEtBQUssS0FBS0EsRUFBaEI7V0FDRzBCLE1BQUgsQ0FBVTFCLEdBQUc2QixVQUFiOztXQUlHRCxPQUFILENBQVc1QixHQUFHMkIsS0FBZDtXQUNHQyxPQUFILENBQVc1QixHQUFHK3hCLFlBQWQ7V0FDR2p3QixXQUFILENBQWU5QixHQUFHK0IsOEJBQWxCLEVBQWtELEtBQWxEO0tBYlI7OzhCQWdCSTZjLElBaEJKLG1CQWdCVzthQUNFOWIsYUFBTDthQUNLa3ZCLGFBQUw7YUFDS3RTLGNBQUw7S0FuQlI7OzhCQXNCSUMsaUJBdEJKLGdDQXNCd0I7YUFDWHFTLGFBQUw7YUFDS3RTLGNBQUw7S0F4QlI7OzhCQTJCSWhhLFFBM0JKLHVCQTJCZTtlQUNBLEtBQUt1c0IsY0FBWjtnQ0FDTXZzQixRQUFOLENBQWVxRixLQUFmLENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQjtLQTdCUjs7OEJBZ0NJOGlCLFVBaENKLHVCQWdDZXBoQixNQWhDZixFQWdDdUI7ZUFDUixLQUFLdWhCLGNBQUwsQ0FBb0J2aEIsTUFBcEIsQ0FBUDtLQWpDUjs7OEJBb0NJc2xCLGFBcENKLDRCQW9Db0I7WUFDTmh5QixLQUFLLEtBQUtBLEVBQWhCO1lBQ0l1RixVQUFVLEtBQUtBLE9BRG5CO2FBRUt3QixVQUFMLENBQWdCeEIsT0FBaEI7YUFDS3NaLGFBQUw7O2FBRUtxVCxZQUFMO1lBQ012cEIsSUFBSSxLQUFLSSxZQUFMLEVBQVY7V0FDRytYLGdCQUFILENBQW9COWdCLEdBQUd1RixPQUFILENBQVcsVUFBWCxDQUFwQixFQUE0QyxLQUE1QyxFQUFtRG9ELENBQW5EO1dBQ0d1WSxVQUFILENBQWMzYixRQUFRLGVBQVIsQ0FBZCxFQUF3QyxLQUFLc3BCLFdBQTdDOztZQUVNc0QsV0FBVyxLQUFLOXdCLEtBQUwsQ0FBV25CLE9BQVgsQ0FBbUIsVUFBbkIsS0FBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsQ0FBbkQ7V0FDR2t5QixVQUFILENBQWNweUIsR0FBR3VGLE9BQUgsQ0FBVyxZQUFYLENBQWQsRUFBd0N4RyxXQUFBLENBQWUsRUFBZixFQUFtQm96QixRQUFuQixDQUF4Qzs7WUFFTUUsYUFBYSxLQUFLaHhCLEtBQUwsQ0FBV25CLE9BQVgsQ0FBbUIsWUFBbkIsS0FBb0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkQ7V0FDR295QixTQUFILENBQWF0eUIsR0FBR3VGLE9BQUgsQ0FBVyxjQUFYLENBQWIsRUFBeUM4c0IsV0FBVyxDQUFYLENBQXpDLEVBQXdEQSxXQUFXLENBQVgsQ0FBeEQsRUFBdUVBLFdBQVcsQ0FBWCxDQUF2RTs7WUFFTUUsVUFBVSxLQUFLbHhCLEtBQUwsQ0FBV25CLE9BQVgsQ0FBbUIsY0FBbkIsS0FBc0MsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBdEQ7V0FDR295QixTQUFILENBQWF0eUIsR0FBR3VGLE9BQUgsQ0FBVyxnQkFBWCxDQUFiLEVBQTJDZ3RCLFFBQVEsQ0FBUixDQUEzQyxFQUF1REEsUUFBUSxDQUFSLENBQXZELEVBQW1FQSxRQUFRLENBQVIsQ0FBbkU7O1lBRU1DLGlCQUFpQixLQUFLbnhCLEtBQUwsQ0FBV25CLE9BQVgsQ0FBbUIsZ0JBQW5CLEtBQXdDLEdBQS9EO1dBQ0c4Z0IsU0FBSCxDQUFhaGhCLEdBQUd1RixPQUFILENBQVcsa0JBQVgsQ0FBYixFQUE2Q2l0QixjQUE3QzthQUNLQyxrQkFBTCxDQUF3QixLQUFLUixjQUE3QjtXQUNHeEMsWUFBSCxDQUFnQnp2QixHQUFHMHZCLFNBQW5CLEVBQThCLEtBQUtDLGFBQW5DLEVBQWtEM3ZCLEdBQUc0dkIsWUFBckQsRUFBbUUsQ0FBbkU7O1dBR0dsUixVQUFILENBQWMxZSxHQUFHNnZCLG9CQUFqQixFQUF1QyxJQUF2QztLQTlEUjs7OEJBaUVJcUMsWUFqRUosMkJBaUVtQjtZQUNQLEtBQUtELGNBQVQsRUFBeUI7OztZQUduQmp5QixLQUFLLEtBQUtBLEVBQWhCO1lBQ0lDLE1BQU0sS0FBS1MsTUFBTCxFQURWO1lBRU02SSxVQUFVbkosY0FBY0gsR0FBZCxDQUFoQjtZQUNNb1MsT0FBTyxLQUFLaFIsS0FBTCxDQUFXZ1IsSUFBeEI7WUFDTXlkLFVBQVUsSUFBSXNCLGNBQUosQ0FBbUJweEIsRUFBbkIsRUFBdUJDLEdBQXZCLENBQWhCO2FBQ0ssSUFBSW1GLElBQUksQ0FBUixFQUFXd0ssSUFBSXlDLEtBQUsxUyxNQUF6QixFQUFpQ3lGLElBQUl3SyxDQUFyQyxFQUF3Q3hLLEdBQXhDLEVBQTZDO2dCQUNyQyxDQUFDaU4sS0FBS2pOLENBQUwsQ0FBTCxFQUFjOzs7Z0JBR1ZOLE1BQU1DLE9BQU4sQ0FBY3NOLEtBQUtqTixDQUFMLENBQWQsQ0FBSixFQUE0QjtvQkFDbEJzSCxTQUFTLEtBQUttaEIsYUFBTCxDQUFtQnhiLEtBQUtqTixDQUFMLEVBQVEsQ0FBUixDQUFuQixDQUFmO29CQUNNakQsU0FBU2tRLEtBQUtqTixDQUFMLEVBQVEsQ0FBUixFQUFXLFFBQVgsQ0FBZjtvQkFDTXN0QixVQUFVenlCLElBQUkweUIsZUFBSixDQUFvQnh3QixNQUFwQixFQUE0QixDQUE1QixFQUErQm9ILE9BQS9CLEVBQXdDckgsS0FBeEQ7d0JBQ1F3VyxVQUFSLENBQW1CckcsS0FBS2pOLENBQUwsRUFBUSxDQUFSLENBQW5CLEVBQStCc3RCLE9BQS9CLEVBQXdDaG1CLE1BQXhDO2FBSkosTUFLTyxJQUFJMkYsS0FBS2pOLENBQUwsRUFBUWlHLElBQVosRUFBa0I7b0JBRWZxQixVQUFTLEtBQUttaEIsYUFBTCxDQUFtQnhiLEtBQUtqTixDQUFMLEVBQVE2WixVQUEzQixDQUFmO29CQUNNOWMsVUFBU2tRLEtBQUtqTixDQUFMLEVBQVE2WixVQUFSLENBQW1CLFFBQW5CLENBQWY7b0JBQ015VCxXQUFVenlCLElBQUkweUIsZUFBSixDQUFvQnh3QixPQUFwQixFQUE0QixDQUE1QixFQUErQm9ILE9BQS9CLEVBQXdDckgsS0FBeEQ7d0JBQ1F3VyxVQUFSLENBQW1CckcsS0FBS2pOLENBQUwsQ0FBbkIsRUFBNEJzdEIsUUFBNUIsRUFBcUNobUIsT0FBckM7OztZQUdGa21CLGdCQUFnQixLQUFLWCxjQUFMLEdBQXNCbkMsUUFBUXpnQixTQUFSLEVBQTVDO2FBQ0tzZ0IsYUFBTCxHQUFxQmlELGNBQWMxakIsWUFBZCxDQUEyQnZQLE1BQWhEO0tBNUZSOzs4QkErRkk4eUIsa0JBL0ZKLCtCQStGdUJHLGFBL0Z2QixFQStGc0M7WUFDeEI1eUIsS0FBSyxLQUFLQSxFQUFoQjs7WUFFSSxDQUFDLEtBQUtnd0IsYUFBVixFQUF5QjtnQkFDZkMsZUFBZSxLQUFLRCxhQUFMLEdBQXFCLEtBQUt2ckIsWUFBTCxFQUExQztlQUNHaWEsVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCc1IsWUFBL0I7ZUFDRzVRLFVBQUgsQ0FBY3JmLEdBQUcyZSxZQUFqQixFQUErQixJQUFJMWtCLFlBQUosQ0FBaUIyNEIsY0FBYzVqQixXQUEvQixDQUEvQixFQUE0RWhQLEdBQUdzZixXQUEvRTtTQUhKLE1BSU87ZUFDQVosVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCLEtBQUtxUixhQUFwQzs7YUFFQ3ByQixrQkFBTCxDQUNJLENBQUMsT0FBRCxFQUFVLENBQVYsRUFBYSxPQUFiLENBREo7O1lBS0ksQ0FBQyxLQUFLc3JCLGFBQVYsRUFBeUI7Z0JBQ2ZDLGVBQWUsS0FBS0QsYUFBTCxHQUFxQixLQUFLenJCLFlBQUwsRUFBMUM7ZUFDR2lhLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQndSLFlBQS9CO2VBQ0c5USxVQUFILENBQWNyZixHQUFHMmUsWUFBakIsRUFBK0IsSUFBSTFrQixZQUFKLENBQWlCMjRCLGNBQWMzakIsV0FBL0IsQ0FBL0IsRUFBNEVqUCxHQUFHc2YsV0FBL0U7U0FISixNQUlPO2VBQ0FaLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQixLQUFLdVIsYUFBcEM7O2FBRUN0ckIsa0JBQUwsQ0FDSSxDQUFDLFVBQUQsRUFBYSxDQUFiLEVBQWdCLE9BQWhCLENBREo7O1lBSUksQ0FBQyxLQUFLd3JCLFVBQVYsRUFBc0I7Z0JBRVpDLFlBQVksS0FBS0QsVUFBTCxHQUFrQixLQUFLM3JCLFlBQUwsRUFBcEM7ZUFDR2lhLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQjBSLFNBQS9CO2VBQ0doUixVQUFILENBQWNyZixHQUFHMmUsWUFBakIsRUFBK0IsSUFBSTFrQixZQUFKLENBQWlCMjRCLGNBQWN6akIsVUFBL0IsQ0FBL0IsRUFBMkVuUCxHQUFHc2YsV0FBOUU7U0FKSixNQUtPO2VBQ0FaLFVBQUgsQ0FBYzFlLEdBQUcyZSxZQUFqQixFQUErQixLQUFLeVIsVUFBcEM7O2FBRUN4ckIsa0JBQUwsQ0FBd0IsQ0FDcEIsQ0FBQyxjQUFELEVBQWlCLENBQWpCLEVBQW9CLE9BQXBCLENBRG9CLENBQXhCOztXQUtHOFosVUFBSCxDQUFjMWUsR0FBRzJlLFlBQWpCLEVBQStCLElBQS9COztZQUVJLENBQUMsS0FBSzJSLGNBQVYsRUFBMEI7Z0JBRWhCQyxnQkFBZ0IsS0FBS0QsY0FBTCxHQUFzQixLQUFLN3JCLFlBQUwsRUFBNUM7ZUFDR2lhLFVBQUgsQ0FBYzFlLEdBQUc2dkIsb0JBQWpCLEVBQXVDVSxhQUF2QztlQUNHbFIsVUFBSCxDQUFjcmYsR0FBRzZ2QixvQkFBakIsRUFBdUMsSUFBSVcsV0FBSixDQUFnQm9DLGNBQWMxakIsWUFBOUIsQ0FBdkMsRUFBb0ZsUCxHQUFHc2YsV0FBdkY7U0FKSixNQUtPO2VBQ0FaLFVBQUgsQ0FBYzFlLEdBQUc2dkIsb0JBQWpCLEVBQXVDLEtBQUtTLGNBQTVDOztLQTlJWjs7O0VBQXFDN0MsWUFBckM7O0FBbUpBb0Usb0JBQW9CL1QsZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDZ1UsZUFBOUM7Ozs7Ozs7Ozs7OyJ9
