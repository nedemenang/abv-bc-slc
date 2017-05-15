

describe('Test for 0 ', function () {
  it('Invalid Input 0', function () {
    expect(getPrime(0)).toEqual("Invalid input");
  });
});


describe('Test for valid input ', function () {
  it('Valid number 10', function () {
    expect(getPrime(10)).toEqual([2, 3, 5, 7]);
  });
});

describe('Test for valid input ', function () {
  it('Valid number 20', function () {
    expect(getPrime(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});


describe('Test for valid input ', function () {
  it('Valid number 30', function () {
    expect(getPrime(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});



describe('Test for Valid input 100 ', function () {
  it('Valid input', function () {
    expect(getPrime(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
});



describe('Test for input float 4.23', function () {
  it('Valid spec float', function () {
    expect(getPrime(4.23)).toEqual([2, 3]);
  });
});


describe('Test for input float 4.23', function () {
  it('Valid spec float', function () {
    expect(getPrime(8.33)).toEqual([2, 3, 5, 7]);
  });
});


describe('Test for negative number ', function () {
  it('Negative number', function () {
    expect(getPrime(-8)).toEqual('Invalid input');
  });
});


describe('Test for empty input ', function () {
  it('Invalid spec empty', function () {
    expect(getPrime()).toEqual("Invalid input");
  });
});


describe('Test for invalid input string ', function () {
  it('Invalid input string', function () {
    expect(getPrime("12")).toEqual('Invalid input');
  });
});