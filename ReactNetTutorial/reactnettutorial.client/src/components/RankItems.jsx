import React, { useState, useEffect } from 'react';

const RankItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json()
            })
            .then(data => {
                setItems(data)
            })
    }, [])
    

    return (
        <main>
            {items != null ? items.map((item) => <h3>{item.title}</h3>>) : <div>Loading...</div>}
        </main>
    )
}