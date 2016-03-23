import {Observable} from "data/observable";
import {TabViewModel} from "../tab-view-model";

export class BrowseViewModel extends Observable implements TabViewModel {
  load() {
    console.log("Browse loaded");
  }
  
  unload() {
    console.log("Browse unloaded");
  }
}