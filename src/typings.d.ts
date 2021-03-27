export type Region =
    | "america"
    | "europe"
    | "asia"
    | "oceania"
    | "africa"
    | "north-america"
    | "south-america"
    | "central-america"
    | "caribbean"
    | "eu-union"
    | "ex-ussr"
    | "ex-yugos"
    | "baltic"
    | "middle-east"
    | "north-africa";

/** A 2-letter code that represents a country, example (fr: France) */
export type Iso2CodeCountry =
    | "af"
    | "al"
    | "dz"
    | "ad"
    | "ao"
    | "ag"
    | "ar"
    | "am"
    | "aw"
    | "au"
    | "at"
    | "az"
    | "bs"
    | "bh"
    | "bd"
    | "bb"
    | "by"
    | "be"
    | "bz"
    | "bj"
    | "bt"
    | "bo"
    | "ba"
    | "bw"
    | "br"
    | "io"
    | "bn"
    | "bg"
    | "bf"
    | "bi"
    | "kh"
    | "cm"
    | "ca"
    | "cv"
    | "bq"
    | "cf"
    | "td"
    | "cl"
    | "cn"
    | "co"
    | "km"
    | "cd"
    | "cg"
    | "cr"
    | "ci"
    | "hr"
    | "cu"
    | "cw"
    | "cy"
    | "cz"
    | "dk"
    | "dj"
    | "dm"
    | "do"
    | "ec"
    | "eg"
    | "sv"
    | "gq"
    | "er"
    | "ee"
    | "et"
    | "fj"
    | "fi"
    | "fr"
    | "gf"
    | "pf"
    | "ga"
    | "gm"
    | "ge"
    | "de"
    | "gh"
    | "gr"
    | "gd"
    | "gp"
    | "gu"
    | "gt"
    | "gn"
    | "gw"
    | "gy"
    | "ht"
    | "hn"
    | "hk"
    | "hu"
    | "is"
    | "in"
    | "id"
    | "ir"
    | "iq"
    | "ie"
    | "il"
    | "it"
    | "jm"
    | "jp"
    | "jo"
    | "kz"
    | "ke"
    | "ki"
    | "xk"
    | "kw"
    | "kg"
    | "la"
    | "lv"
    | "lb"
    | "ls"
    | "lr"
    | "ly"
    | "li"
    | "lt"
    | "lu"
    | "mo"
    | "mk"
    | "mg"
    | "mw"
    | "my"
    | "mv"
    | "ml"
    | "mt"
    | "mh"
    | "mq"
    | "mr"
    | "mu"
    | "mx"
    | "fm"
    | "md"
    | "mc"
    | "mn"
    | "me"
    | "ma"
    | "mz"
    | "mm"
    | "na"
    | "nr"
    | "np"
    | "nl"
    | "nc"
    | "nz"
    | "ni"
    | "ne"
    | "ng"
    | "kp"
    | "no"
    | "om"
    | "pk"
    | "pw"
    | "ps"
    | "pa"
    | "pg"
    | "py"
    | "pe"
    | "ph"
    | "pl"
    | "pt"
    | "pr"
    | "qa"
    | "re"
    | "ro"
    | "ru"
    | "rw"
    | "kn"
    | "lc"
    | "vc"
    | "ws"
    | "sm"
    | "st"
    | "sa"
    | "sn"
    | "rs"
    | "sc"
    | "sl"
    | "sg"
    | "sk"
    | "si"
    | "sb"
    | "so"
    | "za"
    | "kr"
    | "ss"
    | "es"
    | "lk"
    | "sd"
    | "sr"
    | "sz"
    | "se"
    | "ch"
    | "sy"
    | "tw"
    | "tj"
    | "tz"
    | "th"
    | "tl"
    | "tg"
    | "to"
    | "tt"
    | "tn"
    | "tr"
    | "tm"
    | "tv"
    | "ug"
    | "ua"
    | "ae"
    | "gb"
    | "us"
    | "uy"
    | "uz"
    | "vu"
    | "va"
    | "ve"
    | "vn"
    | "ye"
    | "zm"
    | "zw"

/** A 2-letter code that represents a territory, example (bm: Bermuda) */
export type Iso2CodeTerritory =
    | "as"
    | "ai"
    | "bm"
    | "vg"
    | "ky"
    | "ck"
    | "fk"
    | "fo"
    | "gi"
    | "gl"
    | "je"
    | "ms"
    | "nu"
    | "nf"
    | "mp"
    | "bl"
    | "sh"
    | "mf"
    | "pm"
    | "sx"
    | "tk"
    | "tc"
    | "vi"
    | "wf";


/** A usually 3-digit number that identifies a particular telephone service area in a country (such as the US, Canada and some other countries) */
export type AreaCode = string;

/**
 * Represents a country or a territory with raw data
 * [
 *    Country name,
 *    Regions,
 *    iso2 code,
 *    International dial code,
 *    Mask (if available),
 *    Order priority (if >1 country with same dial code),
 *    Area codes (if >1 country with same dial code)
 * ]
 */


/** Represents a Country with specific data */
export type Country = {
    name: string;
    /** 
     * Localized name of the country. 
     * Example: `Belgium` (english) => `Belgique` (french)
     */
    localName?: string;
    /** 
     * Country 2-letter identifier
     * Example: `fr` for France.
     */
    iso2: Iso2Code;
    /**
     * List of regions that apply to the country
     * Example: Argentina => ['america', 'south-america'],
     */
    regions: Region[];
    /** International Dial Code for a specific country, 
     * Example: "1" for the United States 
     */
    dialCode: string;
    /**
     * Format of the phone number.
     * Example: `... .. .. ..` will be used to format the number like: `999 99 99 99`
     */
    mask: string | null;
    /** Order priority (if >1 country with same dial code) */
    priority: number | null;
    /** A usually 3-digit number that identifies a particular telephone service area in a country (such as the US, Canada and some other countries) */
    areaCodes: string[] | null;
};

/** List of countries or territories */
export type Countries = Record<Iso2CodeCountry, Country>
export type Territories = Record<Iso2CodeTerritory, Country>

