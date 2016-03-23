import {Observable} from "data/observable";
import {TabViewModel} from "../tab-view-model";

export class MenuViewModel extends Observable implements TabViewModel {

  loaded: boolean = false;
  isLoading: boolean;
  
  constructor() {
    super();
    this.set("title", "Menu");
  }

  load() {
    console.log("Loading MenuViewModel...");
    if (!this.loaded && !this.isLoading) {
      this.set("isLoading", true);
      console.log("MenuViewModel loading for the first time...");
      setTimeout(() => {
        this.set("entry1", "Entry 1");
        this.set("entry2", "Entry 2");
        this.set("entry3", "Entry 3");
        this.set("isLoading", false);
        this.set("loaded", true);
        console.log("MenuViewModel loaded");
      }, 3000);
    } else {
      console.log("MenuViewModel already loaded");
    }
  }
  
  unload() {
    console.log("Menu unloaded")
  }
  
}