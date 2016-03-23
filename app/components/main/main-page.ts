import {MainViewModel} from "./main-view-model";
import {NavigatedData, Page} from "ui/page";
import {TabView, SelectedIndexChangedEventData} from "ui/tab-view";

var mainViewModel = new MainViewModel();

export function onNavigatingTo(args: NavigatedData) {
  console.log("MainPage::onNavigatingTo");
  var page = <Page>args.object;
  page.bindingContext = mainViewModel;
}

export function onLoaded(args: NavigatedData) {
  console.log("Main page loading...");
  var page = <Page>args.object;
  var tabView = <TabView>page.getViewById("tabView");
  tabView.on(TabView.selectedIndexChangedEvent, onTabChange);
  mainViewModel.selectedIndex = tabView.selectedIndex;
  console.log("Main page loaded");
}

function onTabChange(evt: SelectedIndexChangedEventData) {
  console.log("Old index:" + evt.oldIndex);
  console.log("New index:" + evt.newIndex);
  mainViewModel.selectedIndex = evt.newIndex;
}