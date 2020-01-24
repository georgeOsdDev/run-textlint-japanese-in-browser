import { TextlintKernel } from '@textlint/kernel'
import preset from 'textlint-rule-preset-japanese';
const linter = new TextlintKernel();
const option = {
  ext: '.txt',
  configBaseDir: undefined,
  rules: Object.keys(preset.rules).reduce((acc, key) => {
    acc.push({
      ruleId: key,
      rule: preset.rules[key],
      options: preset.rulesConfig[key],
    })
    return acc;
  }, []),
  plugins: [
    { pluginId: 'text', plugin: require("@textlint/textlint-plugin-text") }
  ]
};
export default (value) => linter.lintText(value, option);
