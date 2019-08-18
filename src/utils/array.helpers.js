export const sortByTerms = (sortTerms, items, prop, order='ASC') => {

  return items.slice().sort((a, b) => {
    let diff;
    let lastDiff = a[prop][sortTerms[0]] - b[prop][sortTerms[0]]; 
    for (let i = 0; i < sortTerms.length; i++) {
      diff = a[prop][sortTerms[i]] - b[prop][sortTerms[i]];
      if (order === 'ASC') {
        if (diff < 0) {
          lastDiff = diff;
        }
      } else {
        if (diff >= 0) {
          lastDiff = diff;
        }
      }
    }
    return lastDiff;
  });
};
