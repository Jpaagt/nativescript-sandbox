import {View} from "ui/core/view";
import {StackLayout} from "ui/layouts/stack-layout";
import {EventData, PropertyChangeData, Observable} from "data/observable";
import {MenuViewModel} from "./menu-view-model";

var stackLayout: StackLayout;
var menuViewModel: MenuViewModel;
var view: View;

export function onLoad(args: EventData) {
  console.log("Menu loading...");
  stackLayout = <StackLayout>args.object;
  view = <View>stackLayout.getViewById("menuView");
  menuViewModel = <MenuViewModel>stackLayout.bindingContext;

  menuViewModel.on(Observable.propertyChangeEvent, onPropertyChangeEvent);
  
  console.log("Menu loaded");
}

function onPropertyChangeEvent(evt: PropertyChangeData) {
  console.log(evt.propertyName + ": " + evt.value);
  if (evt.propertyName === "loaded") {
    onModelLoaded();
  }
}

function onModelLoaded() {
  console.log("onModelLoaded");
  view.animate({
    opacity: 1,
    duration: 1000
  });
}