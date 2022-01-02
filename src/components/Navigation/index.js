import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return(
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="laptop"> 💻</span>James Lindsey
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                          className={`${currentCategory.name === category.name && !contactSelected && `navActive`
                        }`}
                        key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }} >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;