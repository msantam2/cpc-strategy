const MONTH_NAMES = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
}; 

export const parse = keywords => {
  let result = []; 

  for (let keyword of keywords) { // keywords.ranks = [{rank1}, {rank2}, etc.]  
    for (let rank of keyword.ranks) { // rank = {pos: 239, date: "2016-1-1"}
      let { rank_date, rank_position } = rank;
      let [rankDate, rankPosition] = [rank_date, rank_position]; 
      let [year, month, day] = rankDate.split("-").map(num => parseInt(num, 10)); 
      if (result.length === 0) {
        result.push([{
          v: new Date(year, month, day),
          f: `${MONTH_NAMES[month]} ${day}, ${yearAbbrev(year)}`
        }, rankPosition]); 
      } else {
        result.push([{
          v: new Date(year, month, day)
        }, rankPosition]); 
      }
    }
  }

  return result; 
}; 

function yearAbbrev(year) {
  return `'${year.toString().substr(2, 2)}`; 
}
