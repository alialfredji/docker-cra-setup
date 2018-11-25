
import loadable from 'react-loadable'

const customLoadable = ({ loader, loading }) => loadable({
    loader,
    loading: () => loading ? loading : 'loading...',
})

export default customLoadable
