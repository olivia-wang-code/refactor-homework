const rankTest = require('ava');
const { rating } = require('../src/rank.js');

rankTest('foo', t => {
  t.pass();
});

rankTest('test should return B when given voyage with west-indies 10 history length 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 1,
    },{
      zone: 'west-indies',
      profit: 2,
    },{
      zone: 'china',
      profit: 3,
    },
    {
      zone: 'west-africa',
      profit: 4,
    },
  ];
  const myRating = rating(voyage, history);
  t.is(myRating,'B');
});

rankTest('test should return A when rating given voyage with china 19 history length 11', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'china',
      profit: 3,
    },
    {
      zone: 'china',
      profit: 4,
    },
    {
      zone: 'china',
      profit: 5,
    },
    {
      zone: 'china',
      profit: 6,
    },
    {
      zone: 'china',
      profit: 7,
    },
    {
      zone: 'china',
      profit: 8,
    },
    {
      zone: 'china',
      profit: 9,
    },
    {
      zone: 'china',
      profit: 10,
    },
    {
      zone: 'china',
      profit: 11,
    },
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('A', result);
})

rankTest('test should return A when rating given voyage with china 12 and history length 5', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'china',
      profit: 3,
    },
    {
      zone: 'china',
      profit: 4,
    },
    {
      zone: 'china',
      profit: 5,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('A', result);
})

rankTest('test should return B when rating given voyage with china 15 and history length 4', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'china',
      profit: 3,
    },
    {
      zone: 'china',
      profit: 4,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})

rankTest('test should retrn B when rating given voyage with german 19 history length 11', t => {
  //given
  const voyage = {
    zone: 'german',
    length: 19,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'china',
      profit: 3,
    },
    {
      zone: 'china',
      profit: 4,
    },
    {
      zone: 'china',
      profit: 5,
    },
    {
      zone: 'china',
      profit: 6,
    },
    {
      zone: 'china',
      profit: 7,
    },
    {
      zone: 'china',
      profit: 8,
    },
    {
      zone: 'china',
      profit: 9,
    },
    {
      zone: 'china',
      profit: 10,
    },
    {
      zone: 'china',
      profit: 11,
    },
  ];
    //when
    let result = rating(voyage, history);
    //then
    t.is('B', result);
  })

  rankTest('test should return B when given voyage with west-indies 10 history length 4', t => {
    const voyage = {
      zone: 'west-indies',
      length: 3,
    };
    const history = [
      {
        zone: 'east-indies',
        profit: 1,
      },{
        zone: 'west-indies',
        profit: 2,
      },{
        zone: 'china',
        profit: 3,
      },
      {
        zone: 'west-africa',
        profit: 4,
      },
    ];
    const myRating = rating(voyage, history);
    t.is(myRating,'B');
  });



