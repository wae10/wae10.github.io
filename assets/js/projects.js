$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {

            image: 'assets/images/reviews.png',
            link: 'https://github.com/wae10/TripAdvisor-scraper',
            title: 'TripAdvisor Reviews Scraper',
            demo: 'https://github.com/wae10/TripAdvisor-scraper',
            technologies: ['Web-Scraping', 'Python'],
            description: "Unix executable that runs every day and collects TripAdvisor review data for all 20+ The Escape Game locations.",
            categories: ['featured','all', 'python']
        },

        
        {

            image: 'assets/images/nba.png',
            link: 'https://public.tableau.com/profile/william.everett2026#!/vizhome/DoesWinningintheNBAMatter/NBADashboard?publish=yes',
            title: 'Does Winning Matter in the NBA?',
            demo: false,
            technologies: ['Tableau', 'Data Viz','ETL'],
            description: "Interactive dashboard that allows the user to investigate the question posed in the title. Combined 9 datasets using ETL processes.",
            categories: ['featured','all', 'tableau']
        },
        {

            image: 'assets/images/ef.png',
            link: 'https://my-optimal-portfolio.herokuapp.com/',
            title: 'Optimal Portfolio Solver',
            demo: 'https://github.com/wae10/optimal-portfolio',
            technologies: ['Python', 'Pandas','Matplotlib'],
            description: "Determines optimal portfolio of stocks according to user objectives. Utilizes Matplotlib module to display visuals. Incorporates complex solver algorithms for optimization as well as real-time financial data with Yahoo Finance API.",
            categories: ['featured','all', 'python']
        },

        {
            image: 'assets/images/credit.png',
            link: '../assets/excel/credit.zip',
            title: 'Credit Approval System',
            demo: false,
            technologies: ['VBA', 'Pivot Tables'],
            description: "Decision system that analyzes risk of customers or payment data to ultimately provide a recommendation for whether or not to lend credit. Also calculates individual credit score. Supports decision with sensitivity analysis and dynamic visuals.",
            categories: ['featured','all', 'vba']
        },
        {
            image: 'assets/images/stars-scraper.png',
            link: 'https://github.com/wae10/aashe-stars-webscraper',
            title: 'AASHE STARS Scraper',
            demo: 'https://github.com/wae10/aashe-stars-webscraper',
            technologies: ['Web-Scraping', 'Python'],
            description: "Webscraper that compiles various information on hundreds of potential clients for a sustainability startup called Breeze Box LLC.",
            categories: ['featured','all', 'Python']
        },

        {
            image: 'assets/images/golf.png',
            link: 'https://golf-handicap-plf14.herokuapp.com/',
            title: 'Golf Handicap Calculator',
            demo: 'https://github.com/wae10/Golf-Handicap',
            technologies: ['Flask', 'Sheets API', 'Python'],
            description: "Web-based application that allows users to post golf scores to a database and receive an updated USGA Handicap Index.",
            categories: ['featured','all', 'python']
        },

        {
            image: 'assets/images/recipe.png',
            link: 'https://myrecipe-master.herokuapp.com/',
            title: 'Recipe Master',
            demo: 'https://github.com/wae10/recipe',
            technologies: ['Flask', 'Python'],
            description: "Web-based application with clean interface that allows users the ability to search from over 365,000 recipes.",
            categories: ['all', 'python']
        },
        {
            image: 'assets/images/protip.png',
            link: 'https://github.com/wae10/pro-tip-generator',
            title: 'Pro-Tip Generator',
            demo: 'https://github.com/wae10/pro-tip-generator',
            technologies: ['Python', 'Unix Shell'],
            description: "Automation tool that creates a separate Word Document containing only the most important information ('pro tips') extracted from an existing file of notes.",
            categories: ['all', 'python']
        },
        {
            image: 'assets/images/finance_calc.png',
            link: '../assets/excel/Personal_Finance_Calculator.xlsm',
            title: 'Personal Finance Calculator',
            demo: false,
            technologies: ['VBA'],
            description: "Determines annual financial savings based on several user inputs. Model implements various controls, error handling, and separation of interface.",
            categories: ['all', 'vba']
        },

        {
            image: 'assets/images/storm.png',
            link: '../assets/excel/storm.zip',
            title: 'Storm Damage Funding Calc',
            demo: false,
            technologies: ['VBA'],
            description: "Assesses whether funding distribution for storm damage is fair across state levels in both commercial and residential departments. Model features include various controls, file processing, data validation, and visualization of results.",
            categories: ['all', 'vba']
        },



        // {
        //     image: 'assets/images/raspberry-pi-monitor.png',
        //     link: 'https://github.com/abhn/RPi-Status-Monitor',
        //     title: 'Raspberry Pi Monitor',
        //     demo: false,
        //     technologies: ['python', 'flask'],
        //     description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
        //     categories: ['webdev', 'diy']
        // },
        // {
        //     image: 'assets/images/s3scan.png',
        //     link: 'https://github.com/abhn/S3Scan',
        //     title: 'S3Scan',
        //     demo: false,
        //     technologies: ['python'],
        //     description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
        //     categories: ['native', 'security']
        // },
        // {
        //     image: 'assets/images/elementary.png',
        //     link: 'https://github.com/abhn/Elementary',
        //     title: 'Elementary',
        //     demo: 'https://elementary-jekyll.github.io/',
        //     technologies: ['Jekyll', 'CSS3'],
        //     description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
        //     categories: ['webdev']
        // },
        // {
        //     image: 'assets/images/soot-spirits.png',
        //     link: 'https://github.com/abhn/Soot-Spirits',
        //     title: 'Soot Spirits',
        //     demo: 'https://sootspirits.github.io',
        //     technologies: ['Jekyll', 'CSS3'],
        //     description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
        //     categories: ['webdev']
        // },
        // {
        //     image: 'assets/images/python-chat.png',
        //     link: 'https://www.nagekar.com/2014/12/lan-group-messenger-in-python.html',
        //     title: 'Terminal Group Chat',
        //     demo: false,
        //     technologies: ['Python', 'Sockets'],
        //     description: "Simple terminal group chat based on native sockets using Python.",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/old-lcd.jpg',
        //     link: 'https://www.nagekar.com/2018/05/reusing-old-laptop-lcd-panel.html',
        //     title: 'Reusing Old LCD Panel',
        //     demo: false,
        //     technologies: ['DIY'],
        //     description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
        //     categories: ['diy']
        // },
        // {
        //     image: 'assets/images/nextcloud-enc.png',
        //     link: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
        //     title: 'Encrypted Self-Hosted Cloud',
        //     demo: false,
        //     technologies: ['NextCloud', 'GnuPG'],
        //     description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
        //     categories: ['diy', 'security']
        // },
        // {
        //     image: 'assets/images/google-cloud-backup.png',
        //     link: 'https://www.nagekar.com/2018/05/encrypted-backup-with-duplicity.html',
        //     title: 'Encrypted Backups - Google Cloud',
        //     demo: false,
        //     technologies: ['NextCloud', 'Duplicity'],
        //     description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
        //     categories: ['diy', 'security']
        // },
        // {
        //     image: 'assets/images/pi-cloud.jpg',
        //     link: 'https://www.nagekar.com/2016/01/how-to-private-local-cloud-using-raspberrypi.html',
        //     title: 'Local Cloud - Raspberry Pi',
        //     demo: false,
        //     technologies: ['FTP', 'DIY'],
        //     description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
        //     categories: ['diy']
        // },
        // {
        //     image: 'assets/images/koalamate.png',
        //     link: 'https://github.com/abhn/koalamate',
        //     title: 'Koalamate',
        //     demo: false,
        //     technologies: ['Electron', 'Javascript'],
        //     description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
        //     categories: ['native']
        // },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="William Everett project, Georgetown University" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}"><b>(<u>GitHub</u>)</b></a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `

}


let selected = (slug) => {
    render_projects(slug);
}