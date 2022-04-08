//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

//Create a function which translates a given DNA string into RNA.

//For example:

//"GCAT"  =>  "GCAU"
//The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//solution:

//First step: declare a function of course since thats what's expected from codewars,
//Second step: since we only have to convert one character or item frm the array or words, we'll be using the replace method to solve this problem
//We want to replace the "T" in the DNA to a "U" in the RNA. However, we will be usinng the regular expression that wil globally replace every instance
//of "T" to "U" because ordinarily the replace method would only replace first charcters irrespective of whether there are millions of Ts in the function. 


function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U"); 
  }
  