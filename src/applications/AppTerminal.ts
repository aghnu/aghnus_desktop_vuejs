import { ApplicationStyle, AppName } from "../types/TypeApp";
import { ApplicationInternal } from "./ApplicationInternal";
import { getGlobalCSSVarValue } from "../utilities/getGlobalCSSVarValue";

export class AppTerminal extends ApplicationInternal {
  readonly name: AppName;

  applicationStyle: ApplicationStyle;
  backgroundColor: string;

  constructor() {
    super();
    this.name = "terminal";
    this.backgroundColor = "#020202";
    this.applicationStyle = {
      colorBackground: this.backgroundColor,
      colorTitleText: getGlobalCSSVarValue("--color-taskbar-text-bright"),
    };
  }

  initTerminal(element: HTMLIFrameElement) {
    element.contentWindow?.postMessage(
      {
        type: "init",

        colorPlain: "#a9a9a9",
        colorFocus: "#f9ca8f",
        colorBackground: this.backgroundColor,
        colorDesc: "#7fc5d0",
        colorAppBackground: "transparent",

        fontSize: "14px",
      },
      "*"
    );
  }
}
