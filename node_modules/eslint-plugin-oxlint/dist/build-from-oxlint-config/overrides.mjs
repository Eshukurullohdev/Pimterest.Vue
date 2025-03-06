import { handleCategoriesScope } from "./categories.mjs";
import { readPluginsFromConfig } from "./plugins.mjs";
import { readRulesFromConfig, handleRulesScope } from "./rules.mjs";
const handleOverridesScope = (overrides, configs, baseCategories) => {
  for (const overrideIndex in overrides) {
    const override = overrides[overrideIndex];
    const eslintRules = {};
    const eslintConfig = {
      name: `oxlint/from-oxlint-config-override-${overrideIndex}`
    };
    eslintConfig.files = override.files;
    const plugins = readPluginsFromConfig(override);
    if (baseCategories !== void 0 && plugins !== void 0) {
      handleCategoriesScope(plugins, baseCategories, eslintRules);
    }
    const rules = readRulesFromConfig(override);
    if (rules !== void 0) {
      handleRulesScope(rules, eslintRules);
    }
    eslintConfig.rules = eslintRules;
    configs.push(eslintConfig);
  }
};
const readOverridesFromConfig = (config) => {
  return "overrides" in config && Array.isArray(config.overrides) ? config.overrides : void 0;
};
export {
  handleOverridesScope,
  readOverridesFromConfig
};
