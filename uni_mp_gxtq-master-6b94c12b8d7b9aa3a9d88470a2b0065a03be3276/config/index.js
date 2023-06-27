import * as development from "./development";
import * as production from "./production"

let config = {};
if (process.env.NODE_ENV === 'development') {
  console.log('开发环境');
  config = development
} else {
  console.log('生产环境');
  config = production
}

export default config
