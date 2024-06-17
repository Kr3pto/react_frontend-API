import React, { useState } from 'react';

const Filters = ({ categories, regions, onFilterChange }) => {
    const [category, setCategory] = useState('');
    const [region, setRegion] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleApplyFilters = () => {
        onFilterChange({ category, region, minPrice, maxPrice });
    };

    return (
        <div className="form-row mb-3">
            <div className="col">
                <label htmlFor="category-filter">Category</label>
                <select className="form-control" id="category-filter" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="col">
                <label htmlFor="region-filter">Region</label>
                <select className="form-control" id="region-filter" value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="">All Regions</option>
                    {regions.map(region => (
                        <option key={region.id} value={region.id}>{region.name}</option>
                    ))}
                </select>
            </div>
            <div className="col">
                <label htmlFor="min-price-filter">Min Price</label>
                <input type="number" className="form-control" id="min-price-filter" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </div>
            <div className="col">
                <label htmlFor="max-price-filter">Max Price</label>
                <input type="number" className="form-control" id="max-price-filter" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
            <div className="col-auto align-self-end">
                <button className="btn btn-primary" onClick={handleApplyFilters}>Apply Filters</button>
            </div>
        </div>
    );
};

export default Filters;
