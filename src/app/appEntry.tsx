import createRoot from 'react-dom'
import BaseLayout from '@/app/layouts/BaseLayout'
import '@/reset.scss' //сброс стилей + container

createRoot.render(<BaseLayout/>, document.getElementById('root'))
