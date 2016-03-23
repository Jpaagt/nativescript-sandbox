import {NavigatedData, Page} from "ui/page"

  export function onNavigatingTo(args: NavigatedData) {
    console.log("Main::onNavigatingTo");
}

export function onLoaded(args: NavigatedData) {
    console.log("Main::onLoaded");
}