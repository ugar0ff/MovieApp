import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  item: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#e6e6e6',
  },
  poster: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
})
