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

});
