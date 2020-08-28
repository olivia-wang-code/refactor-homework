function voyageRisk(voyage) {
  let result = 1;
  result += voyage.length > 8 ? 2 : 0;
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  result += history.length < 5 ? 4 : 0;
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === 'china') {
    result += 1;
  }
  if (voyage.zone === 'east-indies') {
    result += 1;
  }
  return caculateResult(voyage, history, result)
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

function caculateResult(voyage, history, result) {
  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    result += history.length > 10 ? 1 : 0;
    result += voyage.length > 12 ? 1 : 0;
    result -= voyage.length > 18 ? 1 : 0
  }
  else {
    result += history.length > 8 ? 1 : 0;
    result -= voyage.length > 14 ? 1 : 0
  }
  return result;
}

module.exports = {
  rating
};

