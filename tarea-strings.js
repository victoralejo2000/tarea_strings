/* 1. Write a JavaScript function to check whether an 'input' is a string or not.
 *  Test Data :
 *  console.log(is_string('w3resource'));
 *  true
 *  console.log(is_string([1, 2, 4, 0]));
 *  false
 */

const is_string = (dato1) => typeof dato1 === 'string';
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

/* 2. Write a JavaScript function to check whether a string is blank or not.
 *  Test Data :
 *  console.log(is_Blank(''));
 *  console.log(is_Blank('abc'));
 *  true
 *  false
 */

const is_Blank = (dato2) => dato2.length === 0;
console.log(is_Blank(''));
console.log(is_Blank('abc'));

/* 3. Write a JavaScript function to split a string and convert it into an array of words.
 *  Test Data :
 *  console.log(string_to_array("Robin Singh"));
 *  ["Robin", "Singh"]
 */

const string_to_array = (dato3) => dato3.split(" ");
console.log(string_to_array("Robin Singh"));

/* 4. Write a JavaScript function to extract a specified number of characters from a string.
 *  Test Data :
 *  console.log(truncate_string("Robin Singh",4));
 *  "Robi"
 */

const truncate_string = (dato4,cant) => dato4.slice(0,cant);
console.log(truncate_string("Robin Singh",4));

/* 5. Write a JavaScript function to convert a string into abbreviated form.
 *  Test Data :
 *  console.log(abbrev_name("Robin Singh"));
 *  "Robin S."
 */

const abbrev_name = (dato5) => {
    let datosCompletos = dato5.split(" ");
    return datosCompletos[0]+" "+ datosCompletos[1].slice(0,1) +".";
};
console.log(abbrev_name("Robin Singh"));

/* 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
 *  Test Data :
 *  console.log(protect_email("robin_singh@example.com"));
 *  "robin...@example.com"
 */

const protect_email = (dato6) => {
  let correoCompleto = dato6.split("@");
  let userCorreo = correoCompleto[0];
  let dominioCorreo = correoCompleto[1];
  //   let correoCorte = userCorreo.split("_");
  //   userCorreo = correoCorte[0];
  let mitadTexto= userCorreo.length /2;
  let corteIzq = userCorreo.substring(0, mitadTexto);
  return corteIzq + "..." + "@" + dominioCorreo;
};
console.log(protect_email("victor_alejandro2000@example.com"));

/* 7. Write a JavaScript function to parameterize a string.
 *  Test Data :
 *  console.log(string_parameterize("Robin Singh from USA."));
 *  "robin-singh-from-usa"
 */

const string_parameterize = (dato7) =>
  dato7.toLowerCase().replace(".", "").replaceAll(" ", "-");
//   let textoPartes = dato7.split(" ");
//   console.log(textoPartes);
//   return textoPartes;
console.log(string_parameterize("Robin Singh from USA."));

/* 8. Write a JavaScript function to capitalize the first letter of a string.
 *  Test Data :
 *  console.log(capitalize('js string exercises'));
 *  "Js string exercises"
 */

const capitalize = function (str1) {
  let letraInicial = str1.charAt(0).toUpperCase();
  let textoAdcional = str1.slice(1, str1.length);
  let textoCompleto = letraInicial + textoAdcional;
  return textoCompleto;
};
console.log(capitalize("js string exercises"));

/* 9. Write a JavaScript function to capitalize the first letter of each word in a string.
 *  Test Data :
 *  console.log(capitalize_Words('js string exercises'));
 *  "Js String Exercises"
 */

/* 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
 *  Test Data :
 *  console.log(swapcase('AaBbc'));
 *  "aAbBC"
 */

/* 11. Write a JavaScript function to convert a string into camel case.
 *  Test Data :
 *  console.log(camelize("JavaScript Exercises"));
 *  console.log(camelize("JavaScript exercises"));
 *  console.log(camelize("JavaScriptExercises"));
 *  "JavaScriptExercises"
 *  "JavaScriptExercises"
 *  "JavaScriptExercises"
 */

/* 12. Write a JavaScript function to uncommelize a string.
 *  Test Data :
 *  console.log(uncamelize('helloWorld'));
 *  console.log(uncamelize('helloWorld','-'));
 *  console.log(uncamelize('helloWorld','_'));
 *  "hello world"
 *  "hello-world"
 *  "hello_world"
 */

/* 13. Write a JavaScript function to concatenate a given string n times (default is 1).
 *  Test Data :
 *  console.log(repeat('Ha!'));
 *  console.log(repeat('Ha!',2));
 *  console.log(repeat('Ha!',3));
 *  "Ha!"
 *  "Ha!Ha!"
 *  "Ha!Ha!Ha!"
 */

/* 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
 *  Test Data :
 *  console.log(insert('We are doing some exercises.'));
 *  console.log(insert('We are doing some exercises.','JavaScript '));
 *  console.log(insert('We are doing some exercises.','JavaScript ',18));
 *  "We are doing some exercises."
 *  "JavaScript We are doing some exercises."
 *  "We are doing some JavaScript exercises."
 */

/* 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
 *  Test Data :
 *  console.log(humanize_format());
 *  console.log(humanize_format(1));
 *  console.log(humanize_format(8));
 *  console.log(humanize_format(301));
 *  console.log(humanize_format(402));
 *  "1st"
 *  "8th"
 *  "301st"
 *  "402nd"
 */

/* 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
 *  Test Data :
 *  console.log(text_truncate('We are doing JS string exercises.'))
 *  console.log(text_truncate('We are doing JS string exercises.',19))
 *  console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
 *  "We are doing JS string exercises."
 *  "We are doing JS ..."
 *  "We are doing !!"
 */

/* 17. Write a JavaScript function to chop a string into chunks of a given length.
 *  Test Data :
 *  console.log(string_chop('w3resource'));
 *  console.log(string_chop('w3resource',2));
 *  console.log(string_chop('w3resource',3));
 *  ["w3resource"]
 *  ["w3", "re", "so", "ur", "ce"]
 *  ["w3r", "eso", "urc", "e"]
 */

/* 18. Write a JavaScript function to count substrings in a string.
 *  Test Data :
 *  console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
 *  Output :
 *  2
 *  console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
 *  Output :
 *  1
 */

/* 19. Write a JavaScript function to escape a HTML string.
 *  Test Data :
 *  console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
 *  Output :
 *  "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
 */

/* 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.
 *  Test Data :
 *  console.log(formatted_string('0000',123,'l'));
 *  console.log(formatted_string('00000000',123,''));
 *  Output :
 *  "0123"
 *  "12300000"
 */

/* 21. Write a JavaScript function to repeat a string for a specified time.
 *  Test Data :
 *  console.log(repeat_string('a', 4));
 *  console.log(repeat_string('a'));
 *  Output :
 *  "aaaa"
 *  "Error in string or count."
 */

/* 22. Write a JavaScript function to get a part of a string after a specified character.
 *  Test Data :
 *  console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
 *  console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
 *  Output :
 *  "w3resource"
 *  "xercises"
 */

/* 23. Write a JavaScript function to strip leading and trailing spaces from a string.
 *  Test Data :
 *  console.log(strip('w3resource '));
 *  console.log(strip(' w3resource'));
 *  console.log(strip(' w3resource '));
 *  Output :
 *  "w3resource"
 *  "w3resource"
 *  "w3resource"
 */

/* 24. Write a JavaScript function to truncate a string to a certain number of words.
 *  Test Data :
 *  console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
 *  Output :
 *  "The quick brown fox"
 */

/* 25. Write a JavaScript function to alphabetize a given string.
 *  Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
 *  Test Data :
 *  console.log(alphabetize_string('United States'));
 *  Output :
 *  "SUadeeinsttt"
 */

/* 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
 *  Test Data :
 *  console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
 *  Output :
 *  "The quick brown fox jumps over lazy dog"
 */

/* 27. Write a JavaScript function to convert ASCII to Hexadecimal format.
 *  Test Data :
 *  console.log(ascii_to_hexa('12'));
 *  console.log(ascii_to_hexa('100'));
 *  Output :
 *  "3132"
 *  "313030"
 */

/* 28. Write a JavaScript function to convert Hexadecimal to ASCII format.
 *  Test Data :
 *  console.log(hex_to_ascii('3132'));
 *  console.log(hex_to_ascii('313030'));
 *  Output :
 *  "12"
 *  "100"
 */

/* 29. Write a JavaScript function to find a word within a string.
 *  Test Data :
 *  console.log(search_word('The quick brown fox', 'fox'));
 *  console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
 *  Output :
 *  "'fox' was found 1 times."
 *  "'aa' was found 2 times."
 */

/* 30. Write a JavaScript function that checks whether a string ends with a specified suffix.
 *  Test Data :
 *  console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
 *  true
 *  console.log(string_endsWith('JS PHP PYTHON',''));
 *  false
 */

/* 31. Write a JavaScript function to escape special characters (&, <, >, ', ") for use in HTML.
 *  Test Data :
 *  console.log(escape_html('PHP & MySQL'));
 *  "PHP &amp; MySQL"
 *  console.log(escape_html('3 > 2'));
 *  "3 &gt; 2"
 */

/* 32. Write a JavaScript function to remove non-printable ASCII characters.
 *  Test Data :
 *  console.log(remove_non_ascii('???????PHP-MySQL??????'));
 *  "PHP-MySQL"
 */

/* 33. Write a JavaScript function to remove non-word characters.
 *  Test Data :
 *  console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
 *  "PHP - MySQL"
 */

/* 34. Write a JavaScript function to convert a string to title case.
 *  Test Data :
 *  console.log(sentenceCase('PHP exercises. python exercises.'));
 *  "Php Exercises. Python Exercises."
 */

/* 35. Write a JavaScript function to remove HTML/XML tags from a string.
 *  Test Data :
 *  console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
 *  "PHP Exercises"
 */

/* 36. Write a JavaScript function to create a zero-filled value with an optional +, - sign.
 *  Test Data :
 *  console.log(zeroFill(120, 5, '-'));
 *  "+00120"
 *  console.log(zeroFill(29, 4));
 *  "0029"
 */

/* 37. Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.
 *  Test Data :
 *  console.log(compare_strings('abcd', 'AbcD'));
 *  true
 *  console.log(compare_strings('ABCD', 'Abce'));
 *  false
 */

/* 38. Write a JavaScript function to create a case-insensitive search.
 *  Test Data :
 *  console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
 *  "Matched"
 *  console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
 *  "Matched"
 *  console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
 *  "Not Matched"
 */

/* 39. Write a JavaScript function to uncapitalize the first character of a string.
 *  Test Data :
 *  console.log(Uncapitalize('Js string exercises'));
 *  "js string exercises"
 */

/* 40. Write a JavaScript function to uncapitalize the first letter of each word of a string.
 *  Test Data :
 *  console.log(unCapitalize_Words('Js String Exercises'));
 *  "js string exercises"
 */

/* 41. Write a JavaScript function to capitalize each word in the string.
 *  Test Data :
 *  console.log(capitalizeWords('js string exercises'));
 *  "JS STRING EXERCISES"
 */

/* 42. Write a JavaScript function to uncapitalize each word in the string.
 *  Test Data :
 *  console.log(unCapitalizeWords('JS STRING EXERCISES'));
 *  "js string exercises"
 */

/* 43. Write a JavaScript function to test whether the character at the index provided is upper case.
 *  Test Data :
 *  console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
 *  false
 */

/* 44. Write a JavaScript function to test whether the character at the given (character) index is lower case.
 *  Test Data :
 *  console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
 *  true
 */

/* 45. Write a JavaScript function to get a humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
 *  Test Data :
 *  console.log(humanize(1));
 *  console.log(humanize(20));
 *  console.log(humanize(302));
 *  "1st"
 *  "20th"
 *  "302nd"
 */

/* 46. Write a JavaScript function to test whether a string starts with a specified string.
 *  Test Data :
 *  console.log(startsWith('js string exercises', 'js'));
 *  true
 */

/* 47. Write a JavaScript function to test whether a string ends with a specified string.
 *  Test Data :
 *  console.log(endsWith('JS string exercises', 'exercises'));
 *  true
 */

/* 48. Write a JavaScript function to get the successor to a string.
 *
 *  Note: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.
 *  Example :
 *  string.successor("abcd") == "abce"
 *  string.successor("THX1138") == "THX1139"
 *  string.successor("< >") == "< >"
 *  string.successor("1999zzz") == "2000aaa"
 *  string.successor("ZZZ9999") == "AAAA0000"
 *  Test Data :
 *  console.log(successor('abcd'));
 *  console.log(successor('3456'));
 *  "abce"
 *  "3457"
 */

/* 49. Write a JavaScript function to get a guid (an acronym for 'Globally Unique Identifier'?) of the specified length, or 32 by default.
 *  Test Data :
 *  console.log(guid());
 *  console.log(guid(15));
 *  "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
 *  "b7pwBqrZwqaDrex"
 */

/* 50. Write a JavaScript program to check if a given string contains alphanumeric characters that are palindromes regardless of special characters and letter case.
 *  A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama". The 19-letter Finnish word saippuakivikauppias (a soapstone vendor), is the longest single-word palindrome in everyday use, while the 12-letter term tattarrattat (from James Joyce in Ulysses) is the longest in English.
 *  Test Data :
 *  ('$22_|1372^2731|_22') -> true
 *  ('12%^&2') -> false
 *  ('234%$$%432') -> true
 *  (1234) -> "It must be string"
 *  ('aba%$aba') -> true
 *  ('Aba%$aba') -> true
 */

/* 51. Write a JavaScript function to implement the Boyer-Moore String Search Algorithm.
 *  From Wikipedia,
 *  In computer science, the Boyer-Moore string-search algorithm is an efficient string-searching algorithm that is the standard benchmark for practical string-search literature. It was developed by Robert S. Boyer and J Strother Moore in 1977. The original paper contained static tables for computing the pattern shifts without an explanation of how to produce them. The algorithm for producing the tables was published in a follow-on paper; this paper contained errors which were later corrected by Wojciech Rytter in 1980. The algorithm preprocesses the string being searched for (the pattern), but not the string being searched in (the text). It is thus well-suited for applications in which the pattern is much shorter than the text or where it persists across multiple searches. The Boyer-Moore algorithm uses information gathered during the preprocess step to skip sections of the text, resulting in a lower constant factor than many other string search algorithms. In general, the algorithm runs faster as the pattern length increases. The key features of the algorithm are to match on the tail of the pattern rather than the head, and to skip along the text in jumps of multiple characters rather than searching every single character in the text.
 *  The Boyer-Moore string search algorithm allows linear time in search by skipping indices when searching inside a string for a pattern.
 *  Test Data :
 *  ('THIS IS A TEST TEXT', 'TEST') -> 10
 *  ('THIS IS A TEST TEXT', 'TEST') -> 14
 */

/* 52. Write a JavaScript program to determine if a given word is exceeding word or not.
 *  There is an increasing gap between two adjacent characters in exceeding words. In ASCII, the gap represents the distance between two characters.
 *  Test Data :
 *  'acgl' -> true
 *  'aebc' -> false
 */

/* 53. Write a JavaScript function to check a given string is in Flat case or not.
 *  Flat case: As the name implies, flatcase refers to the use of lowercase letters, with no spaces between words.
 *  Test Data :
 *  ('j') -> true
 *  ('java exercises') -> false
 *  ('JavaScriptExercises') -> false
 *  ('javascriptexercises') -> true
 *  (12356) -> "It must be a string."
 */

/* 54. Write a JavaScript function to check a given string is in Kebab case or not.
 *  Kebab case: "the-quick-brown-fox-jumps-over-the-lazy-dog"
 *  Similar to snake case, above, except hyphens rather than underscores are used to replace spaces. It is also known as spinal case, param case, Lisp case in reference to the Lisp programming language, or dash case (or illustratively as kebab-case)
 *  Test Data :
 *  ('j') -> true
 *  ('java exercises') -> false
 *  ('JavaScriptExercises') -> false
 *  ('javascriptexercises') -> true
 *  (12356) -> "It must be a string."
 */

/* 55. Write a JavaScript function to check whether a string is a Pangram or not.
 *  A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once. Pangrams have been used to display typefaces, test equipment, and develop skills in handwriting, calligraphy, and keyboarding
 *  Test Data :
 *  ("The quick brown fox jumps over the lazy dog") -> true
 *  ("Waltz, bad nymph, for quick jigs vex.") -> true
 *  ("The five boxing wizards jump quickly.") -> true
 *  ("The boxing wizards jump quickly.") -> false
 *  (12356) -> "It must be a string."
 */

/* 56. Write a JavaScript function to check whether a string is in Pascal case or not.
 *  A PascalCase naming convention capitalizes the first letter of each compound word in a variable. It is a best practice in software development to use descriptive variable names.
 *  Test Data :
 *  ("XmlStream") -> true
 *  ("IOStream") -> true
 *  ("javascript") -> false
 *  (12356) -> "It must be a string."
 */

/* 57. Write a JavaScript function that receives a string and determines whether or not it can be rearranged to become a palindrome.
 *  When a word, phrase, or sequence can be read both forward and backward, it is considered a palindrome. e.g., madam or nurses run.
 *  Test Data :
 *  ("maamd") -> true
 *  ("civic") -> true
 *  ("IO") -> false
 *  (12321) -> "It must be a string."
 */

/* 58. Write a JavaScript program to find the most frequent character in a given string.
 *  T*  est Data :
 *  (12321) -> "It must be a string."
 *  ("Madam") -> "a"
 *  ("civic") -> "c"
 *  ("HellloL223LLL") -> "L"
 */

/* 59. Write a JavaScript program to find the most frequent word in a given string.
 *  Test Data :
 *  ("The quick brown fox jumps over the lazy dog") -> "the"
 *  ("Python is a high-level, general-purpose programming language.") -> "python"
 *  (" It was the same man, she was sure of it. It's always the same, Chauncey.") -> "was"
 *  (12321) -> "It must be a string."
 */

/* 60. Write a JavaScript function to reverse words in a given string.
 *  Test Data :
 *  ("abc") -> "cba"
 *  ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
 *  (1234) -> "It must be a string."
 */

/* 61. Write a JavaScript function to find the length of the longest subsequence present between two sequences.
 *  It is important to understand that a subsequence is a sequence that appears in a similar relative order, but is not necessarily contiguous.
 *  Test Data :
 *  ("abcda", "abcdef") -> 4
 *  ("ABCD", "ACBAD") -> 3
 *  ("pqr", "pqr") -> 3
 *  ("pqr", "abc") -> 0
 */

/* 62. Write a JavaScript function to get the length of the longest valid parentheses (well-formed) from a given string containing just the characters '[' and ']'.
 *  Test Data :
 *  The longest valid parentheses substring is "[]".
 *  ("[[]") -> 2
 *  The longest valid parentheses substring is "[][]".
 *  ("][][]]") -> 4
 *  No valid parentheses substring.
 *  ("") -> 0
 */

/* 63. Write a JavaScript function to find the length of the longest palindromic subsequence in a given string.
 *  Subsequences are sequences that can be created by deleting some or all of the elements from another sequence without changing their order.
 *  Test Data :
 *  ("aaaba") -> 4
 *  ("maadaem") -> 5
 *  ("zkksk") -> 3
 *  ("ab") -> 1
 *  ("") -> ""
 */

/* 64. Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer. Finally return the decimal version of the binary string.
 *  Test Data :
 *  (100) -> 19
 *  Explanation:
 *  Binary representation of 100 is 1100100
 *  Reverse of 1100100 is 10011
 *  Decimal form of 10011 is 19
 *  (1134) -> 945
 *  Explanation:
 *  Binary representation of 1134 is 10001101110
 *  Reverse of 10001101110 is 1110110001
 *  Decimal form of 1110110001 is 945
 */
