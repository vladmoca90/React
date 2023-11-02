// App.tsx
// Kindacode.com
import React, { useState } from "react";

const App = () => {
    const [selectedOption, setSelectedOption] = useState<String>();

    // This function is triggered when the select changes
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    return (
        <div>
            <select onChange={selectChange}>
                <option selected disabled>
                    Choose one
                </option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="kindacode.com">Kindacode.com</option>
            </select>
            {selectedOption && <h2>{selectedOption}</h2>}
        </div>
    );
};

export default App;