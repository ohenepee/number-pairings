// Generated by LiveScript 1.5.0
(function(){
  var ref$, say, fl, sq, tn, tr, ext, min, max, pow, log, minBound, list, plot, Cantor, elegant, poto, half, field, stackY, stackX, testExamples;
  ref$ = require('./helpers'), say = ref$.say, fl = ref$.fl, sq = ref$.sq, tn = ref$.tn, tr = ref$.tr, ext = ref$.ext, min = ref$.min, max = ref$.max, pow = ref$.pow, log = ref$.log, minBound = ref$.minBound, list = ref$.list, plot = ref$.plot;
  Cantor = {
    z: function(x, y){
      return tn(x + y) + y;
    },
    xy: function(z){
      var t;
      t = tr(z);
      return [t * (t + 3) / 2 - z, z - (t * (t + 1)) / 2];
    },
    b: [0, 0, 0]
  };
  elegant = {
    z: function(x, y){
      if (y >= x) {
        return y * (y + 1) + x;
      } else {
        return x * x + y;
      }
    },
    xy: function(z){
      var sq_z, t;
      sq_z = sq(z);
      if (sq_z * sq_z > z) {
        sq_z--;
      }
      t = z - sq_z * sq_z;
      if (t < sq_z) {
        return [sq_z, t];
      } else {
        return [t - sq_z, sq_z];
      }
    },
    b: [0, 0, 0]
  };
  poto = {
    z: function(x, y){
      return pow(2, x) * (2 * y + 1) - 1;
    },
    xy: function(z){
      var _z, i$, x, p, q;
      _z = z + 1;
      for (i$ = 0; i$ < _z; ++i$) {
        x = i$;
        p = fl(pow(2, x));
        q = _z / p;
        if (q % 2 === 1) {
          return [x, fl(q / 2)];
        }
      }
    },
    b: [0, 0, 0]
  };
  half = {
    z: function(x, y){
      var _x, _y;
      _x = max(x, y);
      _y = min(x, y);
      return tn(_x) + _y;
    },
    xy: function(z){
      var x, y;
      x = tr(z);
      y = ext(z);
      return [x, y];
    },
    b: [0, 0, 0]
  };
  field = function(sx, sy){
    return {
      z: function(x, y){
        if (x < sx && y < sy) {
          return sx * y + x % sx;
        }
      },
      xy: function(z){
        if (z < sx * sy) {
          return [z % sx, fl(z / sx)];
        }
      },
      b: [sx, sy, sx * sy]
    };
  };
  stackY = function(sx){
    return {
      z: function(x, y){
        if (x < sx) {
          return sx * y + x % sx;
        }
      },
      xy: function(z){
        return [z % sx, fl(z / sx)];
      },
      b: [sx, 0, 0]
    };
  };
  stackX = function(sy){
    return {
      z: function(x, y){
        if (y < sy) {
          return y % sy + sy * x;
        }
      },
      xy: function(z){
        return [fl(z / sy), z % sy];
      },
      b: [0, sy, 0]
    };
  };
  testExamples = function(){
    var say, f, sy, sx;
    say = console.log;
    say('Cantor\n');
    say(list(Cantor));
    say(plot(Cantor));
    say('elegant\n');
    say(list(elegant));
    say(plot(elegant));
    say('poto\n');
    say(list(poto));
    say(plot(poto));
    say('half\n');
    say(list(half));
    say(plot(half));
    say('field\n');
    f = field(3, 4);
    say(f.b);
    say(list(f));
    say(plot(f));
    say('stack-y\n');
    sy = stackY(3);
    say(list(sy));
    say(plot(sy));
    say('stack-x\n');
    sx = stackX(3);
    say(list(sx));
    say(plot(sx));
  };
  if (require.main === module) {
    testExamples();
  } else {
    module.exports = {
      Cantor: Cantor,
      elegant: elegant,
      poto: poto,
      half: half,
      field: field,
      stackY: stackY,
      stackX: stackX
    };
  }
}).call(this);