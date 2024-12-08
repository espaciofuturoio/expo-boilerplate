"use client";
import { vars } from "nativewind";
import hexRgb from 'hex-rgb';

// Utility function to convert hex to RGB
const hexToRgb = (hex: string): string => {
	const rgb = hexRgb(hex);
	return `${rgb.red} ${rgb.green} ${rgb.blue}`;
};

export const HEX_COLORS = {
	appWhite: "#fff", // 255 255 255
	appLightBlue: "#91fbff", // 145 251 255
	appBlue: "#00e3e7", // 0 227 231
	appDeepBlue: "#00a0b5", // 0 160 181
};

export const COLORS = {
	appWhite: hexToRgb(HEX_COLORS.appWhite),
	appLightBlue: hexToRgb(HEX_COLORS.appLightBlue),
	appBlue: hexToRgb(HEX_COLORS.appBlue),
	appDeepBlue: hexToRgb(HEX_COLORS.appDeepBlue),
};

const THEME_COLORS = {
	"0": COLORS.appDeepBlue,
	"50": hexToRgb("#5eecff"),
	"100": hexToRgb("#42e9ff"),
	"200": COLORS.appDeepBlue,
	"300": hexToRgb("#09e2ff"),
	"400": hexToRgb("#00d0eb"),
	"500": COLORS.appDeepBlue,
	"600": hexToRgb("#00a0b5"),
	"700": hexToRgb("#038c9e"),
	"800": hexToRgb("#067b8b"),
	"900": hexToRgb("#086b78"),
	"950": hexToRgb("#0a5b66"),
	"1000": hexToRgb("#0a4c54"),
	"1050": hexToRgb("#0a3d44"),
	"1100": hexToRgb("#092f34"),
};

export const config = {
	// deep_blue
	// Palette size: 14
	// Color: #00a0b5
	// Difference: 60
	// Config type: flattened
	// https://json-color-palette-generator.vercel.app/api/get-color-palette?name=deep_blue&color=00a0b5&size=14&diff=60&configType=flattened
	light: vars({
		"--color-primary-0": hexToRgb("#ffffff"),
		"--color-primary-50": hexToRgb("#5eecff"),
		"--color-primary-100": hexToRgb("#42e9ff"),
		"--color-primary-200": COLORS.appDeepBlue,
		"--color-primary-300": hexToRgb("#09e2ff"),
		"--color-primary-400": hexToRgb("#00d0eb"),
		"--color-primary-500": COLORS.appDeepBlue,
		"--color-primary-600": hexToRgb("#00a0b5"),
		"--color-primary-700": hexToRgb("#038c9e"),
		"--color-primary-800": hexToRgb("#067b8b"),
		"--color-primary-900": hexToRgb("#086b78"),
		"--color-primary-950": hexToRgb("#0a5b66"),
		"--color-primary-1000": hexToRgb("#0a4c54"),
		"--color-primary-1050": hexToRgb("#0a3d44"),
		"--color-primary-1100": hexToRgb("#092f34"),

		/* Secondary  */
		"--color-secondary-0": "254 255 255",
		"--color-secondary-50": "241 242 242",
		"--color-secondary-100": "231 232 232",
		"--color-secondary-200": "219 219 219",
		"--color-secondary-300": "175 176 176",
		"--color-secondary-400": "114 115 115",
		"--color-secondary-500": "94 95 95",
		"--color-secondary-600": "81 82 82",
		"--color-secondary-700": "63 64 64",
		"--color-secondary-800": "39 38 38",
		"--color-secondary-900": "24 23 23",
		"--color-secondary-950": "11 12 12",

		/* Tertiary */
		"--color-tertiary-0": "255 250 245",
		"--color-tertiary-50": "255 242 229",
		"--color-tertiary-100": "255 233 213",
		"--color-tertiary-200": "254 209 170",
		"--color-tertiary-300": "253 180 116",
		"--color-tertiary-400": "251 157 75",
		"--color-tertiary-500": "231 129 40",
		"--color-tertiary-600": "215 117 31",
		"--color-tertiary-700": "180 98 26",
		"--color-tertiary-800": "130 73 23",
		"--color-tertiary-900": "108 61 19",
		"--color-tertiary-950": "84 49 18",

		/* Error */
		"--color-error-0": "254 233 233",
		"--color-error-50": "254 226 226",
		"--color-error-100": "254 202 202",
		"--color-error-200": "252 165 165",
		"--color-error-300": "248 113 113",
		"--color-error-400": "239 68 68",
		"--color-error-500": "230 53 53",
		"--color-error-600": "220 38 38",
		"--color-error-700": "185 28 28",
		"--color-error-800": "153 27 27",
		"--color-error-900": "127 29 29",
		"--color-error-950": "83 19 19",

		/* Success */
		"--color-success-0": "228 255 244",
		"--color-success-50": "202 255 232",
		"--color-success-100": "162 241 192",
		"--color-success-200": "132 211 162",
		"--color-success-300": "102 181 132",
		"--color-success-400": "72 151 102",
		"--color-success-500": "52 131 82",
		"--color-success-600": "42 121 72",
		"--color-success-700": "32 111 62",
		"--color-success-800": "22 101 52",
		"--color-success-900": "20 83 45",
		"--color-success-950": "27 50 36",

		/* Warning */
		"--color-warning-0": "255 253 251",
		"--color-warning-50": "255 249 245",
		"--color-warning-100": "255 231 213",
		"--color-warning-200": "254 205 170",
		"--color-warning-300": "253 173 116",
		"--color-warning-400": "251 149 75",
		"--color-warning-500": "231 120 40",
		"--color-warning-600": "215 108 31",
		"--color-warning-700": "180 90 26",
		"--color-warning-800": "130 68 23",
		"--color-warning-900": "108 56 19",
		"--color-warning-950": "84 45 18",

		/* Info */
		"--color-info-0": "236 248 254",
		"--color-info-50": "199 235 252",
		"--color-info-100": "162 221 250",
		"--color-info-200": "124 207 248",
		"--color-info-300": "87 194 246",
		"--color-info-400": "50 180 244",
		"--color-info-500": "13 166 242",
		"--color-info-600": "11 141 205",
		"--color-info-700": "9 115 168",
		"--color-info-800": "7 90 131",
		"--color-info-900": "5 64 93",
		"--color-info-950": "3 38 56",

		/* Typography */
		"--color-typography-0": COLORS.appWhite,
		"--color-typography-50": hexToRgb("#5eecff"),
		"--color-typography-100": hexToRgb("#42e9ff"),
		"--color-typography-200": COLORS.appDeepBlue,
		"--color-typography-300": hexToRgb("#09e2ff"),
		"--color-typography-400": hexToRgb("#00d0eb"),
		"--color-typography-500": COLORS.appDeepBlue,
		"--color-typography-600": hexToRgb("#00a0b5"),
		"--color-typography-700": hexToRgb("#038c9e"),
		"--color-typography-800": hexToRgb("#067b8b"),
		"--color-typography-900": hexToRgb("#086b78"),
		"--color-typography-950": hexToRgb("#0a5b66"),

		/* Outline */
		"--color-outline-0": THEME_COLORS["0"],
		"--color-outline-50": THEME_COLORS["50"],
		"--color-outline-100": THEME_COLORS["100"],
		"--color-outline-200": THEME_COLORS["200"],
		"--color-outline-300": THEME_COLORS["300"],
		"--color-outline-400": THEME_COLORS["400"],
		"--color-outline-500": THEME_COLORS["500"],
		"--color-outline-600": THEME_COLORS["600"],
		"--color-outline-700": THEME_COLORS["700"],
		"--color-outline-800": THEME_COLORS["800"],
		"--color-outline-900": THEME_COLORS["900"],
		"--color-outline-950": THEME_COLORS["950"],

		/* Background */
		"--color-background-0": hexToRgb("#ffffff"),
		"--color-background-50": hexToRgb("#5eecff"),
		"--color-background-100": hexToRgb("#42e9ff"),
		"--color-background-200": hexToRgb("#25e6ff"),
		"--color-background-300": hexToRgb("#09e2ff"),
		"--color-background-400": hexToRgb("#00d0eb"),
		"--color-background-500": hexToRgb("#00b7cf"),
		"--color-background-600": hexToRgb("#00a0b5"),
		"--color-background-700": hexToRgb("#038c9e"),
		"--color-background-800": hexToRgb("#067b8b"),
		"--color-background-900": hexToRgb("#086b78"),
		"--color-background-950": hexToRgb("#0a5b66"),
		"--color-background-1000": hexToRgb("#0a4c54"),
		"--color-background-1050": hexToRgb("#0a3d44"),
		"--color-background-1100": hexToRgb("#092f34"),

		"--color-background-app-white": COLORS.appWhite,
		"--color-background-app-light-blue": COLORS.appLightBlue,
		"--color-background-app-blue": COLORS.appBlue,
		"--color-background-app-deep-blue": COLORS.appDeepBlue,

		/* Background Special */
		"--color-background-error": "254 241 241",
		"--color-background-warning": "255 244 235",
		"--color-background-success": "237 252 242",
		"--color-background-muted": "247 248 247",
		"--color-background-info": "235 248 254",

		/* Focus Ring Indicator  */
		"--color-indicator-primary": COLORS.appLightBlue,
		"--color-indicator-info": "83 153 236",
		"--color-indicator-error": "185 28 28",
	}),
	dark: vars({
		"--color-primary-0": hexToRgb("#fff"),
		"--color-primary-50": hexToRgb("#5eecff"),
		"--color-primary-100": hexToRgb("#42e9ff"),
		"--color-primary-200": hexToRgb("#25e6ff"),
		"--color-primary-300": hexToRgb("#09e2ff"),
		"--color-primary-400": hexToRgb("#00d0eb"),
		"--color-primary-500": hexToRgb("#00b7cf"),
		"--color-primary-600": hexToRgb("#00a0b5"),
		"--color-primary-700": hexToRgb("#038c9e"),
		"--color-primary-800": hexToRgb("#067b8b"),
		"--color-primary-900": hexToRgb("#086b78"),
		"--color-primary-950": hexToRgb("#0a5b66"),
		"--color-primary-1000": hexToRgb("#0a4c54"),
		"--color-primary-1050": hexToRgb("#0a3d44"),
		"--color-primary-1100": hexToRgb("#092f34"),

		/* Secondary  */
		"--color-secondary-0": "11 12 12",
		"--color-secondary-50": "24 23 23",
		"--color-secondary-100": "39 38 38",
		"--color-secondary-200": "63 64 64",
		"--color-secondary-300": "81 82 82",
		"--color-secondary-400": "94 95 95",
		"--color-secondary-500": "114 115 115",
		"--color-secondary-600": "175 176 176",
		"--color-secondary-700": "219 219 219",
		"--color-secondary-800": "231 232 232",
		"--color-secondary-900": "241 242 242",
		"--color-secondary-950": "254 255 255",

		/* Tertiary */
		"--color-tertiary-0": "84 49 18",
		"--color-tertiary-50": "108 61 19",
		"--color-tertiary-100": "130 73 23",
		"--color-tertiary-200": "180 98 26",
		"--color-tertiary-300": "215 117 31",
		"--color-tertiary-400": "231 129 40",
		"--color-tertiary-500": "251 157 75",
		"--color-tertiary-600": "253 180 116",
		"--color-tertiary-700": "254 209 170",
		"--color-tertiary-800": "255 233 213",
		"--color-tertiary-900": "255 242 229",
		"--color-tertiary-950": "255 250 245",

		/* Error */
		"--color-error-0": "83 19 19",
		"--color-error-50": "127 29 29",
		"--color-error-100": "153 27 27",
		"--color-error-200": "185 28 28",
		"--color-error-300": "220 38 38",
		"--color-error-400": "230 53 53",
		"--color-error-500": "239 68 68",
		"--color-error-600": "248 113 113",
		"--color-error-700": "252 165 165",
		"--color-error-800": "254 202 202",
		"--color-error-900": "254 226 226",
		"--color-error-950": "254 233 233",

		/* Success */
		"--color-success-0": "27 50 36",
		"--color-success-50": "20 83 45",
		"--color-success-100": "22 101 52",
		"--color-success-200": "32 111 62",
		"--color-success-300": "42 121 72",
		"--color-success-400": "52 131 82",
		"--color-success-500": "72 151 102",
		"--color-success-600": "102 181 132",
		"--color-success-700": "132 211 162",
		"--color-success-800": "162 241 192",
		"--color-success-900": "202 255 232",
		"--color-success-950": "228 255 244",

		/* Warning */
		"--color-warning-0": "84 45 18",
		"--color-warning-50": "108 56 19",
		"--color-warning-100": "130 68 23",
		"--color-warning-200": "180 90 26",
		"--color-warning-300": "215 108 31",
		"--color-warning-400": "231 120 40",
		"--color-warning-500": "251 149 75",
		"--color-warning-600": "253 173 116",
		"--color-warning-700": "254 205 170",
		"--color-warning-800": "255 231 213",
		"--color-warning-900": "255 249 245",
		"--color-warning-950": "255 253 251",

		/* Info */
		"--color-info-0": "3 38 56",
		"--color-info-50": "5 64 93",
		"--color-info-100": "7 90 131",
		"--color-info-200": "9 115 168",
		"--color-info-300": "11 141 205",
		"--color-info-400": "13 166 242",
		"--color-info-500": "50 180 244",
		"--color-info-600": "87 194 246",
		"--color-info-700": "124 207 248",
		"--color-info-800": "162 221 250",
		"--color-info-900": "199 235 252",
		"--color-info-950": "236 248 254",

		/* Typography */
		"--color-typography-0": "23 23 23",
		"--color-typography-50": "38 38 39",
		"--color-typography-100": "64 64 64",
		"--color-typography-200": "82 82 82",
		"--color-typography-300": "115 115 115",
		"--color-typography-400": "140 140 140",
		"--color-typography-500": "163 163 163",
		"--color-typography-600": "212 212 212",
		"--color-typography-700": "219 219 220",
		"--color-typography-800": "229 229 229",
		"--color-typography-900": "245 245 245",
		"--color-typography-950": "254 254 255",

		/* Outline */
		"--color-outline-0": "26 23 23",
		"--color-outline-50": "39 38 36",
		"--color-outline-100": "65 65 65",
		"--color-outline-200": "83 82 82",
		"--color-outline-300": "115 116 116",
		"--color-outline-400": "140 141 141",
		"--color-outline-500": "165 163 163",
		"--color-outline-600": "211 211 211",
		"--color-outline-700": "221 220 219",
		"--color-outline-800": "230 230 230",
		"--color-outline-900": "243 243 243",
		"--color-outline-950": "253 254 254",

		/* Background */
		"--color-background-0": "18 18 18",
		"--color-background-50": "39 38 37",
		"--color-background-100": "65 64 64",
		"--color-background-200": "83 82 82",
		"--color-background-300": "116 116 116",
		"--color-background-400": "142 142 142",
		"--color-background-500": "162 163 163",
		"--color-background-600": "213 212 212",
		"--color-background-700": "220 219 219",
		"--color-background-800": "242 241 241",
		"--color-background-900": "246 246 246",
		"--color-background-950": "254 254 254",

		"--color-background-app-white": COLORS.appWhite,
		"--color-background-app-light-blue": COLORS.appLightBlue,
		"--color-background-app-blue": COLORS.appBlue,
		"--color-background-app-deep-blue": COLORS.appDeepBlue,

		/* Background Special */
		"--color-background-error": "66 43 43",
		"--color-background-warning": "65 47 35",
		"--color-background-success": "28 43 33",
		"--color-background-muted": "51 51 51",
		"--color-background-info": "26 40 46",

		/* Focus Ring Indicator  */
		"--color-indicator-primary": "247 247 247",
		"--color-indicator-info": "161 199 245",
		"--color-indicator-error": "232 70 69",
	}),
};
