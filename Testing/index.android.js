import { Navigation } from "react-native-navigation";

import WelcomeScreen from "./src/components/WelcomeScreen";
import Screen2 from "./src/components/Screen2";
import PushedScreen1 from "./src/components/PushedScreen1";


Navigation.registerComponent(`app.welcomeScreen`, () => WelcomeScreen);
Navigation.registerComponent(`app.screen2`, () => Screen2);
Navigation.registerComponent(`app.pushedScreen1`, () => PushedScreen1);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [{
                    stack: {
                        children: [{
                            component: {
                                name: 'app.welcomeScreen',
                                passProps: {
                                    text: 'This is tab 1'
                                }
                            }
                        }],
                        options: {
                            bottomTab: {
                                text: 'Tab 1',
                                icon: require("./src/images/one.png"),
                                testID: 'FIRST_TAB_BAR_BUTTON'
                            }
                        }
                    }
                },
                {
                    component: {
                        name: "app.screen2",
                        passProps: {
                            text: 'This is tab 2'
                        },
                        options: {
                            bottomTab: {
                                text: 'Tab 2',
                                icon: require('./src/images/two.jpg'),
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                        }
                    }
                }
                ]
            }

        }
    })
});