# number-pairings

**JavaScript number pairings functions**

This is a fun project about [pairing functions](https://en.wikipedia.org/wiki/Pairing_function), the coding of two natural numbers into one and vice versa. Now implemented are:

- Pairing for finite fields (both dimensions are limited).
- Pairings for one finite and one infinite dimension.
- [Cantor pairing](https://en.wikipedia.org/wiki/Pairing_function), it's inversion and a *half* variant for unique pairs.
- [elegant pairing](https://www.google.ch/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjUtpeoj_bRAhXDVxoKHYJBCGwQFggoMAA&url=http%3A%2F%2Fszudzik.com%2FElegantPairing.pdf&usg=AFQjCNHlytYIHiOiE0jqc8McfJwheyft8g) and it's inversion.
- [POTO pairing](https://ch.mathworks.com/matlabcentral/fileexchange/44253-three-different-bijections-or-pairing-functions-between-n-and-n%5E2--including-cantor-polynomials-) and it's inversion. The formulas are derived from [here](http://www.cs.umb.edu/~marc/cs620/theo10-06.pdf). The inversion formula could not be found elsewhere.

This JavaSript nodejs module is written in [LiveScript](http://livescript.net/). The JavaScript library resides in the `lib` folder.

## Installation

**Prerequisite**: [Node.js](https://nodejs.org/en/) needs to be installed.

1. Make a folder
2. Open a console in that new folder
3. Install with: `npm install number-pairings` (ignore the error messages)

## Usage

```javascript
p = require( "number-pairings" );
pair = p.Cantor;
console.log( pair.xy( 100 ) );
//> [ 4, 9 ]
> console.log( pair.z( 4, 9 ) );
//> 100
```

Replace `p.Cantor` with e.g. `p.elegant` to try out the elegant pairing.

## Build
Build from LiveScript: `lsc -co lib src`.

## Limitations

- There are no overflow checks. Since the `z` is always in the order of a multiplication of `x` and `y` the library only works up to some numbers. There are no warnings given.
- There are other number pairings. Some of them are not "dense", i.e. there are numbers not used by any pair. These other pairings are not considered here. Examples include the *Gödel numbering* (see link below) and the pairing used in the article "Primitive recursive functions" from Raphael M. Robinson (1947).

## Further links

- [Gödel numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering) is also related to pairing functions. It works for more than two input numbers. Coding more numbers can be achieved with this library here by using the pairings recursively.
- Some more [background](http://www.cs.upc.edu/~alvarez/calculabilitat/enumerabilitat.pdf) about pairing functions.
- Another [JavaScript code](https://codepen.io/LiamKarlMitchell/pen/xnEca) of Cantor pairing. 

## License

See license file in the repository.
