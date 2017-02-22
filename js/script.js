$(document).ready(function() {

    var roman = new Array();
    roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var decimal = new Array();
    decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    function getRoman(value) {
        var romanNumeral = "";
        var numThousands = 0;
        for (var i = 0; i < roman.length; i++) {
            if (value === 0) break;
            while (value >= decimal[i]) {
                value -= decimal[i];
                romanNumeral += roman[i];
                if (roman[i] === 'M') numThousands++;
            }
        }
        return {
            numThousands: numThousands,
            romanNumeral: romanNumeral
        };
    }

    function decimalToRoman(value) {
        // 3,888,888 is the longest number represented by Roman numerals
        if (value <= 0 || value > 3888888) return value;
        var romanNumeral1 = "";
        var romanO = getRoman(value);
        // If the number is 4000 or greater
        if (romanO.numThousands > 4) {
            var thousandString = "";
            for (var j = 0; j < romanO.numThousands; j++) thousandString += "M";
            var thousandsO = getRoman(romanO.numThousands);
            var thBase = "<span style='border-top:1px solid #000'>" + thousandsO.romanNumeral + "</span>";
            romanNumeral = romanO.romanNumeral.replace(thousandString, thBase);
        } else romanNumeral = romanO.romanNumeral;
        return romanNumeral;
    }


});
