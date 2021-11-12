numbers_goml_small = {}
numbers_goml_small['ا'] = 1
numbers_goml_small['ء'] = 1
numbers_goml_small['أ'] = 1
numbers_goml_small['ٱ'] = 1
numbers_goml_small['إ'] = 1
numbers_goml_small['ئ'] = 1
numbers_goml_small['ؤ'] = 1


numbers_goml_small['ب'] = 2
numbers_goml_small['آ'] = 2
numbers_goml_small['ج'] = 3
numbers_goml_small['د'] = 4

numbers_goml_small['ه'] = 5
numbers_goml_small['ة'] = 5

numbers_goml_small['و'] = 6
numbers_goml_small['ز'] = 7
numbers_goml_small['ح'] = 8
numbers_goml_small['ط'] = 9

numbers_goml_small['ى'] = 1
numbers_goml_small['ي'] = 1

numbers_goml_small['ك'] = 2
numbers_goml_small['ل'] = 3
numbers_goml_small['م'] = 4
numbers_goml_small['ن'] = 5
numbers_goml_small['س'] = 6
numbers_goml_small['ع'] = 7
numbers_goml_small['ف'] = 8
numbers_goml_small['ص'] = 9


numbers_goml_small['ق'] = 1
numbers_goml_small['ر'] = 2
numbers_goml_small['ش'] = 3
numbers_goml_small['ت'] = 4
numbers_goml_small['ث'] = 5
numbers_goml_small['خ'] = 6

numbers_goml_small['ذ'] = 7
numbers_goml_small['ض'] = 8
numbers_goml_small['ظ'] = 9
numbers_goml_small['غ'] = 1










numbers_goml_small_seq = {}
numbers_goml_small_seq['ا'] = 1
numbers_goml_small_seq['ء'] = 1
numbers_goml_small_seq['أ'] = 1
numbers_goml_small_seq['ٱ'] = 1
numbers_goml_small_seq['إ'] = 1
numbers_goml_small_seq['ئ'] = 1
numbers_goml_small_seq['ؤ'] = 1


numbers_goml_small_seq['ب'] = 2
numbers_goml_small_seq['آ'] = 2
numbers_goml_small_seq['ج'] = 3
numbers_goml_small_seq['د'] = 4

numbers_goml_small_seq['ه'] = 5
numbers_goml_small_seq['ة'] = 5

numbers_goml_small_seq['و'] = 6
numbers_goml_small_seq['ز'] = 7
numbers_goml_small_seq['ح'] = 8
numbers_goml_small_seq['ط'] = 9

numbers_goml_small_seq['ى'] = 10
numbers_goml_small_seq['ي'] = 10

numbers_goml_small_seq['ك'] = 11
numbers_goml_small_seq['ل'] = 12
numbers_goml_small_seq['م'] = 13
numbers_goml_small_seq['ن'] = 14
numbers_goml_small_seq['س'] = 15
numbers_goml_small_seq['ع'] = 16
numbers_goml_small_seq['ف'] = 17
numbers_goml_small_seq['ص'] = 18


numbers_goml_small_seq['ق'] = 19
numbers_goml_small_seq['ر'] = 20
numbers_goml_small_seq['ش'] = 21
numbers_goml_small_seq['ت'] = 22
numbers_goml_small_seq['ث'] = 23
numbers_goml_small_seq['خ'] = 24

numbers_goml_small_seq['ذ'] = 25
numbers_goml_small_seq['ض'] = 26
numbers_goml_small_seq['ظ'] = 27
numbers_goml_small_seq['غ'] = 28







function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


function backlistofchar_getlistofnumbers(numbers_goml_small, list) {
  list_of_chars = []
  for (var i = 0; i < list.length; i++) {
    try {
      list_of_chars.push(getKeyByValue(numbers_goml_small_seq,list[i]))

    } catch {
    }
  }
  return list_of_chars

}







function getlistofchar_backlistofnumbers(numbers_goml_small, list) {
  list_of_numbers = []
  for (var i = 0; i < list.length; i++) {
    try {
    // console.log(list)
    //#console.log(numbers_goml_small[list[i]])
      list_of_numbers.push(numbers_goml_small[list[i]])

    } catch {
    }
  }
  return list_of_numbers

}






function normalize_text(text) {

  var withoutDiacs = text.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '');
  withoutDiacs = withoutDiacs.replace(/\s/g, '');
  return withoutDiacs
}




function unique_char(str) {
  str = normalize_text(str)
  var uniql = "";
  for (var x = 0; x < str.length; x++) {

    if (uniql.indexOf(str.charAt(x)) == -1) {
      uniql += str[x];

    }
  }
  return uniql;
}



const placeValue = (num, res = [], factor = 1) => {
  if(num){
     const val = (num % 10) * factor;
     res.unshift(val);
     return placeValue(Math.floor(num / 10), res, factor * 10);
  };
  return res;
};
