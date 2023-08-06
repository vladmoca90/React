/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useState } from 'react';
import { WineCategory } from './data';

export type WinesFilterProps = {
    categories: WineCategory[];
    onWineSelected: (category: WineCategory) => void;
}

//A function that filters the dropdown and leaves only the selected wine on the page

export const WinesFilterComponent = (props: WinesFilterProps) => {
    const [selectedOption, setSelectedOption] = useState<String>();

    // This function is triggered when the select changes
    const selectChange = useCallback(((event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        props.onWineSelected(value as WineCategory);
    }), [props]);

    return (
        <div>
            <select title="winesD" onChange={selectChange}>
                <option>All products</option>
                {props.categories.map((category, index) => {
                    return (
                        <option value={category} key={index}>{category}</option>
                    );
                })}
            </select>
            {selectedOption && <h2>{selectedOption}</h2>}
        </div>
    );
};
