import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
  },
  selected: {
    fontWeight: 'bold',
  },
}))
