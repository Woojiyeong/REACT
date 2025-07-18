import { useState } from 'react'
import './App.css'
import Vote from "./components/Vote";

function App() {
    return (
        <>
            <Vote question="치킨 vs 피자, 어느 것이 더 좋나요?" />
            <Vote question='주 4일 근무제에 찬성하시나요?' />
        </>
    )
}

export default App
