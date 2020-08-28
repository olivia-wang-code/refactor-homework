const deliveryTest = require('ava');
const { deliveryDate } = require('../src/delivery.js');

deliveryTest('test should return 2 when deliveryDate given true and MA', t => {
    let isRush = true;
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: function (data) {
                return data;
            }
        }
    }

    let result = deliveryDate(anOrder, isRush)

    t.is(2, result);
})

