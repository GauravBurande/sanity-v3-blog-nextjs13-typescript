import { buildLegacyTheme } from "sanity";

const props = {
    "--white": "#fff",
    "--black": "#1a1a1a",
    "--brand": "#0ACBCB",
    "--yellow": "#FFC026",
    "--purple": "#B194CC",
    "--red": "#F74258",
    "--green": "#D4F2D7",
}

export const myTheme = buildLegacyTheme({
    // Base theme colors
    "--black": props["--black"],
    "--white": props["--white"],


    "--gray": "#666",

    "--component-bg": props["--brand"],
    "--component-text-color": props["--white"],

    // Brand
    "--brand-primary": props["--brand"],

    // Default Button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--brand"],
    "--default-button-success-color": props["--green"],
    "--default-button-warning-color": props["--yellow"],
    "--default-button-danger-color": props["--red"],

    // state
    "--state-info-color": props["--brand"],
    "--state-success-color": props["--green"],
    "--state-warning-color": props["--yellow"],
    '--state-danger-color': props["--red"],

    // navbar
    "--main-navigation-color": props["--black"],
    "--main-navigation-color--inverted": props["--white"],

    "--focus-color": props["--brand"]
})