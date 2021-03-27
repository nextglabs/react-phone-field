export type FormatNumberOptions = {
    /** 
     * allows prefix customization 
     * @default "+" 
    */
    prefix?: string,
    /**
     * Enable long numbers to be displayed even if their length is bigger than the phone mask
     * @default false
     */
    enableLongNumbers?: boolean;
}

/**
 * Formats phone number text according to specified country (applies mask)
 * Example: 
 * input: `value=123456789` for US gives the following output: `+1 (123) 456-7890`
 * @param value phone number to be formatted
 * @param dialCode international dial code of the country
 * @param mask mask of the phone number
 * @param options customization options
 * @returns formatted phone number
 */
export const formatNumber = (value: string, dialCode: string, mask?: string | null, options?: FormatNumberOptions): string => {
    const defaultOptions = {
        enableLongNumbers: false,
        prefix: "+",
    }
    const { enableLongNumbers, prefix } = { ...defaultOptions, ...options }

    if (!value) return prefix;
    if (!dialCode) return value;

    // TODO: Handle Area Codes

    // for all values with length less than 2 
    // OR country doesn't have a defined mask
    // return the value with prefix
    if ((value && value.length < 2) || !mask) {
        return `${prefix}${value}`;
    }

    const formattedObject = mask.split('').reduce((acc, character) => {
        if (acc.remainingText.length === 0) {
            return acc;
        }

        if (character !== '.') {
            return {
                formattedText: acc.formattedText + character,
                remainingText: acc.remainingText
            };
        }

        const [head, ...tail] = acc.remainingText;

        return {
            formattedText: acc.formattedText + head,
            remainingText: tail
        };
    }, {
        formattedText: '',
        remainingText: value.split('')
    });


    let formattedNumber = formattedObject.formattedText;

    if (enableLongNumbers) {
        formattedNumber =
            formattedObject.formattedText + formattedObject.remainingText.join("");
    }

    // Always close brackets
    if (formattedNumber.includes('(') && !formattedNumber.includes(')')) {
        formattedNumber += ')';
    }

    return `${prefix}${dialCode} ${formattedNumber}`;
}