import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumiwiki',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  themeConfig: {
    carrier: 'dumi', // title text at left on status bar of device
    hd: {
      // Switch HD schemes according to different device screen width breakpoints
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // More rule: https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    }
  }
  // more config: https://d.umijs.org/config
});
