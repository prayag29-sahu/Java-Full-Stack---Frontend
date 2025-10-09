import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (!query.trim()) {
            setError('Please enter a search term.');
            setApiData([]);
            return;
        }

        setError('');
        fetch(`https://dummyjson.com/products/search?q=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data.products || []);
            })
            .catch((err) => {
                console.error('API error:', err);
                setError('Failed to fetch data.');
            });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Product Search</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div style={{ marginTop: '20px' }}>
                {apiData.length > 0 ? (
                    apiData.map((item) => (
                        <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <img src={item.thumbnail} alt={item.title} style={{ width: '100px' }} />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p><strong>Price:</strong> ${item.price}</p>
                        </div>
                    ))
                ) : (
                    !error && <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
