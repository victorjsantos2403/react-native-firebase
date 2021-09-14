import * as Analytics from 'expo-firebase-analytics';

export function registerAction(screen: string, action: string) {
  try {
    Analytics.setCurrentScreen(screen);
    Analytics.logEvent(screen, {
      action: action
    });
  } catch (err) {
    console.log(err);
  }
};