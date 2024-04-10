import { 
    defineConfig,
    presetIcons,
    presetUno,
    presetAttributify,
  } from 'unocss'

export default defineConfig({
  presets: [
      presetUno(),
      presetIcons({ scale: 1.2 }),
      presetAttributify(),
    ],
  theme: {
    colors: {
      'primary': '#3366A2',
      'primary-light': '#409EFF',
      'primary-dark': '#195090',
      'danger': '#E6653C',
      'bdr-gray': '#DCE0F0',
      'bg-gray':'#F5F7F9',
    },
  },
})