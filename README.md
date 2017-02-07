# drchrono-hackerrank

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
