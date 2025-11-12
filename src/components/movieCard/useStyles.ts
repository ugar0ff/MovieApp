import { CARD_HEIGHT } from '@constants'
import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    height: CARD_HEIGHT,
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
  },
  poster: {
    width: 100,
    height: '100%',
    borderRadius: 12,
  },
}))
