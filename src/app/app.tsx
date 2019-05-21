import * as React from 'react';
import * as ReactDOM from 'react-dom';
const AppTheme = React.lazy(() => import('app/components/theme/theme'));

ReactDOM.render(<AppTheme />, document.getElementById('root'));
