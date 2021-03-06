# drchrono-hackerrank - Dr. Chrono HackerRank Coding Challenge Solutions

## CountMatches.js

### Challenge

Given a string `ABCDDCDABCDABCDDDCDA` and a pattern `AB*D`, return the number of occurences of the pattern in the string.
The string will only consist of the characters `A`, `B`, `C`, and `D`. The pattern will consist of the same characters but may also contain a wild card `*`.
The input will be 3 lines taken from standard input.

### Input format

* Line 1: `<NUMBER OF CHARACTERS IN STRING> <NUMBER OF CHARACTERS IN PATTERN>`
* Line 2: `<STRING>`
* Line 3: `<PATTERN>`

### Sample input:

```
20 4
ABCDDCDABCDABCDDDCDA
AB*D
```
### Sample output:

```
3
```

----------------------------------------

## UniqueSSN.js

### Challenge

Given a file full of records containing names and Social Security Numbers, return non-duplicate records in the order they're encountered and displayed in the specified format `<NAME>:<SSN>` using the highest order name available. Several different names can be associated with a Social Security number, for example:

```
EVERSON,LAURETTE:329417207
LAURETTE EVERSON:329417207
EVERSON,LAURETTE CELESTA:329417207
L. C. EVERSON:329417207
```

In the case above, the non-duplicate record returned should be of the format: `LAURETTE CELESTA EVERSON: 329417207`

### Input format

* Line 1: `<NUMBER OF RECORDS>`
* Subsequent lines: `<NAME>:<SSN consisting of 9 digit numbers>`

### Sample Output

```
HOLLIS LEANDRA MILLS:715861502
DREW GARD:165871010
ELDA:994159653
SO RAUL FRITSCHE:083148476
THRESA FERREE:229225483
```
