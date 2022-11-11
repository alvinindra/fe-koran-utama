import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
import colors from 'windicss/colors'

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']
delete colors['zink']

export default defineConfig({
  plugins: [require('windicss/plugin/aspect-ratio'), require('windicss/plugin/line-clamp'), typography()],
  theme: {
    colors: colors,
    container: {
      center: true,
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      h1: ['48px', '62.4px'],
      h2: ['40px', '52px'],
      h3: ['32px', '41.6px'],
      h4: ['24px', '33.6px'],
      h5: ['20px', '28px'],
      h6: ['16px', '22.4px'],
      body1: ['16px', '22.4px'],
      body2: ['14px', '19.6px'],
      body3: ['12px', '16.8px'],
      caption1: ['12px', '16.8px'],
      caption2: ['11px', '15.4px'],
      caption3: ['10px', '14px'],
    },
  },
  shortcuts: {
    'container-mobile': 'max-w-768px mx-auto p-4 bg-white'
  }
})
