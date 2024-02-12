export const SCREENS = {
    HomeScreen: "HomeScreen",
    NotificationScreen: "NotificationScreen",
    ProfileScreen: "ProfileScreen",
    SettingScreen: "SettingScreen"
}

export function getDrawerActiveBackgroundColor(routeName) {
    switch (routeName) {
        case SCREENS.HomeScreen:
            return 'lightsalmon';
        case SCREENS.NotificationScreen:
            return 'palegreen';
        case SCREENS.ProfileScreen:
            return 'cornflowerblue';
        case SCREENS.SettingScreen:
            return 'mediumaquamarine';
        default:
            return 'tomato';
    }
}
