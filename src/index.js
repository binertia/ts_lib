const test = typeof ("".charAt(NaN));
console.log(test);
console.log(parseInt("123."));
console.log(parseInt(undefined));
console.log(["", "", null, undefined, 3].join());
