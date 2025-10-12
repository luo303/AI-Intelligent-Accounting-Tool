import { globalIgnores } from 'eslint/config'
import {
  defineConfigWithVueTs,
  vueTsConfigs
} from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierconfig from 'eslint-config-prettier'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // 引入Prettier插件（关键步骤）
  {
    plugins: {
      prettier: prettierPlugin
    }
  },
  prettierconfig,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,

  // 自定义规则
  {
    rules: {
      // 允许使用 any 类型
      '@typescript-eslint/no-explicit-any': 'off',

      'prettier/prettier': 'warn'
    }
  }
)
