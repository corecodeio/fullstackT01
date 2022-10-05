import Styles from './Portal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';

export default function Portal({ isShown, element, close }) {
    return isShown ? ReactDOM.createPortal(
        (<div className={Styles.container}>
          <div className={Styles.modal}>
            <button
                onClick={close}
            >close</button>
            {element}
            </div>
        </div>),
        document.getElementById('modal')
    ) : null
}