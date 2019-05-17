import Typography from 'typography'
import Lincoln from 'typography-theme-lincoln'

Lincoln.baseFontSize = `16px`
Lincoln.overrideThemeStyles = () => ({
  'a': {
    textShadow: 'unset',
    backgroundImage: 'unset'
  },
})

const typography = new Typography(Lincoln)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
