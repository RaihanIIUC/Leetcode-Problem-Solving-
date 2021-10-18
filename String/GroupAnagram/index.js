/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  let grouped = {};

for (let str of strs) {
        const key = [...str].sort().join("");

   grouped[key] = grouped[key] ? [...grouped[key], str] : [];

  // if(!grouped[key]){
  //   grouped[key] =[]
  // }

  grouped[key].push(str);
}

  return Object.values(grouped);
};
