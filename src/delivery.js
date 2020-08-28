function deliveryStateIsInclude(include, deliveryState){
  return include.includes(deliveryState);
}
function getPlusDays(anOrder, deliveryTime) {
  return anOrder.placedOn.plusDays(deliveryTime);
}
function deliveryDateWithRush(anOrder) {
  return deliveryStateIsInclude(['MA', 'CT',], anOrder.deliveryState) ? 1 : deliveryStateIsInclude(['NY', 'NH',], anOrder.deliveryState) ? 2 : 3;
}
function deliveryDateWithoutRush(anOrder) {
  return deliveryStateIsInclude(['MA', 'CT', 'NY',], anOrder.deliveryState) ? 2 : deliveryStateIsInclude(['ME', 'NH',], anOrder.deliveryState) ? 3 : 4;
}
function deliveryDate (anOrder, isRush) {
  if (isRush) {
    deliveryTime=deliveryDateWithRush(anOrder)+1;
    return getPlusDays(anOrder, deliveryTime);
  }
  deliveryTime=deliveryDateWithoutRush(anOrder)+2
  return getPlusDays(anOrder, deliveryTime);
}
module.exports = {
  deliveryDate
};


