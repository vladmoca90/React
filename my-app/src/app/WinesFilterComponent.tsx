"use client";
import { useCallback } from 'react';
import { WineCategory } from './APIs/wine-sell/route';

export type WinesFilterProps = {
    categories: WineCategory[];
    onWineSelected: (category: WineCategory | undefined) => void;
}

//A function that filters the dropdown and leaves only the selected wine on the page
export const WinesFilterComponent = (props: WinesFilterProps) => {

    //This function is triggered when the select changes
    const selectChange = useCallback(((event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (value === "All products") {
            props.onWineSelected(undefined);
        } else {
            props.onWineSelected(value as WineCategory);
        }
    }), [props]);

    return (
        <div>
            <select id="productsList" title="winesD" onChange={selectChange}>
                <option value="All products">All products</option>
                {
                    props.categories.map((category, index) => {
                        return (
                            <option value={category} key={index}>{category}</option>
                        );
                    })}
            </select>
        </div>
    );
};