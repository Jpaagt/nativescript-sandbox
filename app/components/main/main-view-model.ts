import {Observable} from "data/observable";
import {BrowseViewModel} from "./tabs/browse/browse-view-model";
import {MenuViewModel} from "./tabs/menu/menu-view-model";
import {TabViewModel} from "./tabs/tab-view-model";

export class MainViewModel extends Observable {

  browseViewModel = new BrowseViewModel();
  menuViewModel = new MenuViewModel();
  
  tabs: TabViewModel[] = [
    this.menuViewModel,
    this.browseViewModel
  ];
  
  private tabIndex: number = -1;

  constructor() {
    super();
    this.set("title", "Main");
  }
  
  get selectedIndex(): number {
    return this.tabIndex;
  }
  
  set selectedIndex(index: number) {
    console.log("Selected index " + index);
    if (index >= 0 && index < this.tabs.length && this.tabIndex !== index) {
      if (this.tabIndex >= 0 && this.tabIndex < this.tabs.length) {
        this.tabs[this.tabIndex].unload();
      }
      this.tabIndex = index;
      this.tabs[index].load();
    }
  }
}
