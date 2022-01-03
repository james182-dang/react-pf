import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [projects] = useState([
        {
            name: 'Horiseon',
            category: 'Single-Page-Websites',
            description: 'Horiseon is a single-page website built using traditional HTML, CSS, and Javascript. It is a demonstration, showing foundational understanding of HTML, CSS, and JS.',
        },
        {
            name: 'Run Buddy',
            category: 'Single-Page-Websites',
            description: 'Run Buddy is another demonstration of building a single-page website using some extra tools, such as setting up contact forms, iframes, and using a mobile-first approach.',
        },
        {
            name: 'Robot Gladiators',
            category: 'Games',
            description: 'Robot Gladiators is a console-based game where the player fights 3 robots while maintaining health, potions, and currency. This application demonstrates a foundational understanding of javascript, utilizing constructor classes, states, and of course, the console.',
        },
        {
            name: 'Password Generator',
            category: 'Utilities',
            description: 'This is a classic password generating application.',
        },
        {
            name: 'Taskinator',
            category: 'Utilities',
            description: 'This is a productivity utility, designed to keep you on task.',
        },
        // {
        //     name: 'jsQuiz',
        //     category: 'Games',
        //     description: 'IMG NEEDED Looking to test your JavaScript knowledge? This is a small four-question quiz demonstrating various JavaScript skills.'
        // },
        {
            name: 'Taskmaster-Pro',
            category: 'Utilities',
            description: 'Taskmaster-Pro is another productivity utility designed to keep you on task.'
        },
        // {
        //     name: 'Work Day Scheduler',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED Work Day Scheduler is a productivity utility designed to help you keep your work day on track.'
        // },
        {
            name: 'Git-It-Done',
            category: 'Utilities',
            description: 'Git It Done allows you to search a user on github, pulling up their existing public repositories and allowing you to search by language.'
        },
        {
            name: 'Forecastify',
            category: 'Single-Page-Websites',
            description: "Forecastify was created by me, Walker Phillips, Matt Roland, Jon Stivenz, and Alex Sabel. It is certainly a labor of love and was my first larger personal project to be a part of. Forecastify takes your location and displays a playlist relating to the weather in your area. If it's a rainy day, Forecastify will match you up with a rainy-day-esque playlist."
        },
        // {
        //     name: 'Portfolio-Generator',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED Portfolio-Generator is a command-line based utility that takes your responses from the command line and builds a portfolio based on those responses.'
        // },
        // {
        //     name: 'ReadMeGenerator',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED ReadMeGenerator is a command-line application that will output a generated ReadMe.md file for your project, based on your responses to the command line inquirer prompts.'
        // },
        // {
        //     name: 'jest-another-RPG',
        //     category: 'Games',
        //     description: 'IMG NEEDED jest-another-RPG is a command-line based game that demonstrates javascript skills as well as test-driven development, using jest.'
        // },
        // {
        //     name: 'Zookeepr',
        //     category: 'Multi-Page-Websites',
        //     description: 'IMG NEEDED Zookeepr is a fully functioning website/database following CRUD structure allowing you to update and view lists of animals and employees for a fictional Zoo, through their website as well as an API.'
        // },
        // {
        //     name: 'Team Profile Generator',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED Team Profile Generator is a command-line application allowing you to build an employment team.'
        // },
        // {
        //     name: 'NoteTaker',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED NoteTaker is a very simple note-taking application that allows you to save, update, and delete persistant notes.'
        // },
        // {
        //     name: 'u-develop-it',
        //     category: 'Multi-Page-Websites',
        //     description: "IMG NEEDED u-develop-it is a copy of 'Hacker News' (news.ycombinator.com) built fully from the ground up."
        // },
        // {
        //     name: 'employee-tracker',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED Employee Tracker is a SQL-based command-line application that displays information about employees including departments, salaries, etc.'
        // },
        // {
        //     name: 'e-commerce',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED This project involved creating back-end API routes for an e-commerce site including categories, tags, price, stock, etc.'
        // },
        // {
        //     name: 'Just-Tech-News',
        //     category: 'Multi-Page-Websites',
        //     description: 'IMG NEEDED Just-Tech-News is a multi-page site utilizing a SQL database. Users can create an account with a profile, make posts, and leave comments.'
        // },
        // {
        //     name: 'Tech-blog',
        //     category: 'Multi-Page-Websites',
        //     description: 'IMG NEEDED Tech-blog is a blog-style website, where I can post tech-related news and other users can leave comments.'
        // },
        {
            name: 'IPAPI',
            category: 'Multi-Page-Websites',
            description: "IPAPI is a social media website where users sign up and are connected with other users who share a similar palette in regards to alcohol. Users can message other users and organize meetups to meet their new 'taste buds'."
        },
        // {
        //     name: 'Pizza-Hunt',
        //     category: 'Multi-Page-Websites',
        //     description: 'IMG NEEDED Test description'
        // },
        // {
        //     name: 'Social-Network-API',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED Test description'
        // },
        {
            name: 'Weather Dashboard',
            category: 'Single-Page-Websites',
            description: 'Test description'
        },
        // {
        //     name: 'Food-Festival',
        //     category: 'Multi-Page-Websites',
        //     description: 'IMG NEEDED Test description (mention PWA)'
        // },
        // {
        //     name: 'budget-tracker',
        //     category: 'Utilities',
        //     description: 'IMG NEEDED Test description'
        // },
        // {
        //     name: 'Photo-Port',
        //     category: 'Multi-Page-Websites',
        //     description: 'IMG NEEDED Test description'
        // }
    ]);

    const currentProjects = projects.filter(project => project.category === category);

    const [currentProject, setCurrentProject] = useState();

    const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i})
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen && (
                <Modal currentProject={currentProject} onClose={toggleModal} />
            )}
            <div className='flex-row'>
                {currentProjects.map((image, i) => (
                    <img
                      src={require(`../../assets/small/${category}/${i}-min.png`).default}
                      alt={image.name}
                      className='img-thumbnail mx-1'
                      onClick={() => toggleModal(image, i)}
                      key={image.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;