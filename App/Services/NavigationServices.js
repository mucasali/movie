import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  if (_navigator) {
    const navigation = _navigator.getCurrentNavigation();
    navigation.navigate(routeName, params);
  }
}

function dispatch(action) {
  const navigation = _navigator.currentNavProp;
  navigation.dispatch(action);
}

function findActiveScreen(state, topRoute) {
  const {routes, index} = state;
  if (routes && routes[index]) {
    return findActiveScreen(routes[index], topRoute);
  }
  return {
    ...state,
    topRoute,
  };
}

function getActiveScreenAndParams() {
  const navigation = _navigator.currentNavProp;
  const {state} = navigation;
  const topRoute = state.routes[state.index];
  return findActiveScreen(state, {
    key: topRoute.key,
    routeName: topRoute.routeName,
  });
}

function goBack() {
  const navigation = _navigator.currentNavProp;
  navigation.goBack();
}

function popToTop() {
  const navigation = _navigator.currentNavProp;
  const action = StackActions.popToTop();
  navigation.dispatch(action);
}

function replace(routeName, params) {
  const navigation = _navigator.currentNavProp;
  const action = StackActions.replace({routeName, params});
  navigation.dispatch(action);
}

function push(routeName, params) {
  const navigation = _navigator.currentNavProp;
  const action = StackActions.push({routeName, params});
  navigation.dispatch(action);
}
// add other navigation functions that you need and export them

export default {
  navigate,
  dispatch,
  setTopLevelNavigator,
  getActiveScreenAndParams,
  goBack,
  popToTop,
  replace,
  push,
};
