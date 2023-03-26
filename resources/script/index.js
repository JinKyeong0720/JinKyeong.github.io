const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const tags = header.getElementsByClassName("tag");
    const projectTag = tags[0];
    const interestsTag = tags[1];

    projectsSection.addEventListener("mouseenter", e => {
        projectTag.setAttribute("style", "display : block");
    });
    projectsSection.addEventListener("mouseleave", e => {
        projectTag.setAttribute("style", "display : none");
    });

    interestsSection.addEventListener("mouseenter", e => {
        interestsTag.setAttribute("style", "display : block");
    });
    interestsSection.addEventListener("mouseleave", e => {
        interestsTag.setAttribute("style", "display : none");
    });
}

function Project(link, imageUrl, title, description, skills, period) {
    this.link = link;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.period = period;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
    let container;
    if (targetContainer === "backend") {
        container = backendDiv;
    }
    else {
        container = frontendDiv;
    }

    const article = document.createElement("article");
    const a = document.createElement("a");
    const projectImg = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("h6");
    const skills = document.createElement("div");
    const period = document.createElement("span");
    
    article.setAttribute("class", project.title);
    a.setAttribute("href", project.link);
    a.setAttribute("target", "_blank");
    projectImg.setAttribute("class", "project-img");
    projectImg.setAttribute("style", `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`);
    title.setAttribute("class", "title");
    title.innerText = project.title;
    description.className = "description";
    description.innerText = project.description;
    skills.setAttribute("class", "skills");
    period.className = "period";
    period.innerText = `${project.period[0]} ~ ${project.period[1]}`;

    a.append(projectImg);
    article.append(a);
    article.append(title);
    article.append(description);
    project.skills.forEach(str => {
        const skill = document.createElement("span");
        skill.innerText = str;
        skills.append(skill);
    });
    article.append(skills);
    article.append(period);

    container.append(article);
}

// Projects 
/* Ex)
const atm = new Project(
    "about:blank", atm 리포지토리 주소
    "https://em-content.zobj.net/thumbs/240/facebook/65/left-pointing-magnifying-glass_1f50d.png", 머신 일러스트 이미지 주소
    "sample", JinKyeong BANK
    "sample sample", Console ATM (Java mini profect)
    ['ReactJS','Typescript'], JAVA
    ['2023.03.09', "2023.04.30"] 2023.03.13
);

addProject(sample, "frontend", "cover", "center"); atm, "backend", "contain", "center"
*/
// 
const omok = new Project(
    "https://jinkyeong.site/Day55_omok/", 
    "https://m.media-amazon.com/images/I/81CDsUVn5EL.png",
    "Omok",
    "Play Omok Service",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.10', "2023.03.10"]
);

const bookSearch = new Project(
    "https://jinkyeong.site/Day55_booksearch/",
    "https://colterreed.com/wp-content/uploads/2015/10/Book-Search.jpg",
    "Book Search",
    "Book Search and Inquiry Service",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.13', "2023.03.13"]
);

const atm = new Project(
    "https://github.com/JinKyeong0720/atm.git",
    "https://media.istockphoto.com/id/1152312659/vector/atm.jpg?s=612x612&w=0&k=20&c=NR9IDrr2bPxrkBWVynX7wTf2CX6bMWlQe4PWVHAZg_Y=",
    "JinKyeong BANK",
    "Console ATM (Java mini Project)",
    ['JAVA'],
    ['2023.03.13']
);

const rpgGame = new Project(
    "https://github.com/JinKyeong0720/rpg-game.git",
    "https://media.istockphoto.com/id/1089774684/vector/flat-outline-game-icons.jpg?s=612x612&w=0&k=20&c=H2BLs7KkWuXdOp6OHSiySDE3B2ygwLaZBBbFBrngKLA=",
    "RPG Game",
    "RPG Game (Java mini Project)",
    ['JAVA'],
    ['2023.03.16', '2023.03.20']
);

const zombie = new Project(
    "https://github.com/JinKyeong0720/Kill_Monsters.git",
    "https://media.istockphoto.com/id/1094363120/vector/rpg-dungeon-game-treasure-chest.jpg?s=612x612&w=0&k=20&c=UujLrj8_1YomZCczSsWB8oXD6SbPst3H3p2-YeRLKLE=",
    "Killing Monsters",
    "Killing Monsters (Java mini Project)",
    ['JAVA'],
    ['2023.03.24', '2023.03.27']
);
    


addProject(omok, "frontend", "contain", "center");
addProject(bookSearch, "frontend", "contain", "center");
addProject(atm, "backend", "contain", "center");
addProject(rpgGame, "backend", "contain", "center");
addProject(zombie, "backend", "contain", "center");