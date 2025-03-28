const Routes = {
  Drawer: { MainTab: 'MainTab', Settings: 'Settings', StackScreens: 'StackScreens' },
  Tabs: { Basic: 'Basic', MainAdvance: 'MainAdvance' },
  PageStack: { Page1: 'Page1', Page2: 'Page2', Page3: 'Page3' },
  AdvanceStack: {
    Advance: 'Advance',
    Pagination: 'Pagination',
    MainDynamicTabs: 'MainDynamicTabs',
    FormHandling: 'FormHandling',
  },
  DynamicTabs: { Songs: 'Songs', Albums: 'Albums', Artists: 'Artists', Playlists: 'Playlists', TopQuery: 'TopQuery' },
} as const;

export default Routes;
