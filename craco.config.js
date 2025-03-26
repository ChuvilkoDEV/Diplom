const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
      '@app': resolvePath('./src/1_app'),
      '@pages': resolvePath('./src/2_pages'),
      '@widgets': resolvePath('./src/3_widgets'),
      '@features': resolvePath('./src/4_features'),
      '@entities': resolvePath('./src/5_entities'),
      '@shared': resolvePath('./src/6_shared'),
    }
  }
}
