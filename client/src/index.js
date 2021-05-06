import React from 'react';
import ReactDOM from 'react-dom'; //UI를 실제 브라우저에서 렌더링 하는 라이브러리
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
