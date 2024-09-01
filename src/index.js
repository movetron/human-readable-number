module.exports = function toReadable (number) {
    const units = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'
    ];

    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const tens = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (number < 10) {
        return units[number];
    }

    if (number < 20) {
        return teens[number - 10];
    }

    if (number < 100) {
        const unitPart = number % 10;
        const tenPart = Math.floor(number / 10);
        return tens[tenPart] + (unitPart ? ' ' + units[unitPart] : '');
    }

    if (number < 1000) {
        const hundredPart = Math.floor(number / 100);
        const rest = number % 100;
        return units[hundredPart] + ' hundred' + (rest ? ' ' + toReadable(rest) : '');
    }

    return ''
}
