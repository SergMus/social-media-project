import React from 'react';
import styles from './Message.module.css';


const Message = (props)=> {
    return (
            <div className={styles.message}>
                <img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-256.png' alt='icon'/>
                <span>{props.text}</span>
            </div>
)}

export default Message;