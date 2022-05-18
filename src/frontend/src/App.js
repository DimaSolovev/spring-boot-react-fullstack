import './App.css';
import React from 'react';
import { Button} from 'antd';
import { getAllStudent } from "./client";

function App() {
    getAllStudent().then(console.log);
    return (
        <div className="App">
            <Button type="primary">Hello</Button>
        </div>
    );
}

export default App;
