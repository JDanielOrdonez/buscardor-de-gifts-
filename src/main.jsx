import React from 'react';
import { createRoot } from 'react-dom/client'
import { GiftExpertApp } from './GiftExpertApp'
import './styles.css'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(    
    <React.StrictMode>
        <GiftExpertApp />
    </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <GiftExpertApp />
//   </React.StrictMode>
// )
