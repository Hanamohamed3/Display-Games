
let allData = [];

async function getData(category) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c6978c5328msh62fc4d3f9dbfc56p1959f7jsnd3adfba5885f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const data = await response.json();
        console.log(data);
        allData = data;
        display();
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

getData('mmorpg');

function display() {
    let cartona = ``;
    for (let i = 0; i < allData.length; i++) {
        cartona += `
  <div class="card m-4 text-white " style="width: 18rem; background-color:#222" onclick="getId('${allData[i].id}')">

            <img src="${allData[i].thumbnail}" class="card-img-top mt-2" alt="...">
            <div class="card-body ">
                <div class="titles d-flex justify-content-between">
                    <h5 class="card-title">${allData[i].title}</h5>
                    <button type="button" class="btn btn-primary btn-sm"> Free</button>
                </div>
                <p class="card-text">${allData[i].short_description}</p>
                <hr/>
                <div class="titless d-flex justify-content-between">
                    <button type="button" class="btn btn-primary btn-sm"> ${allData[i].genre} </button>
                    <button type="button" class="btn btn-primary btn-sm"> ${allData[i].platform} </button>
                </div>
            </div>
        </div>`;
    }

    document.querySelector("#myData").innerHTML = cartona;
}


function removeActiveClass() {
    const navLinks = document.querySelectorAll('.navbar-nav .active');
    navLinks.forEach(link => link.classList.remove('active'));
}



document.querySelector('#MMORPG').addEventListener('click', function (event) {
    event.preventDefault();
    removeActiveClass();
    this.classList.add('active');
    getData('mmorpg');
});



document.querySelector('#shooterLink').addEventListener('click', function (event) {
    event.preventDefault();
    removeActiveClass();
    this.classList.add('active');
    getData('shooter');
});

document.querySelector('#sailingLink').addEventListener('click', function (event) {
    event.preventDefault();

    removeActiveClass();
    this.classList.add('active');

    getData('sailing');
});



document.querySelector('#PERMADEATH').addEventListener('click', function (event) {
    event.preventDefault();

    removeActiveClass();
    this.classList.add('active');

    getData('permadeath');
});
document.querySelector('#SUPERHERO').addEventListener('click', function (event) {
    event.preventDefault();

    removeActiveClass();
    this.classList.add('active');


    getData('superhero');
});
document.querySelector('#PIXEL').addEventListener('click', function (event) {
    event.preventDefault();

    removeActiveClass();
    this.classList.add('active');


    getData('pixel');
});




function getId(myId) {
    // console.log(myId)
    getGameDetails2(myId)
}



async function getGameDetails2(id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c6978c5328msh62fc4d3f9dbfc56p1959f7jsnd3adfba5885f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    response = await response.json();
    let thisGame = response;
    console.log(thisGame);
    displayDet(thisGame);
}






function displayDet(oneGame) {
   document.querySelector("#Bar").classList.add("d-none")
   document.querySelector("#second").classList.remove("first")

    let cartona = '';


    cartona += `
            <div class="container">
  <div class="game-container">
  <div class="d-flex justify-content-between mt-3" id="lightBoxContainer">

    <h2 class="mb-4">Details Game</h2>
    <i class="fa-solid fa-xmark fs-3" id="closeBtn"></i>
</div>
    <div class="row">
      <div class="col-md-3">
      <img src="${oneGame.thumbnail}" alt="${oneGame.title}">

      </div>
      <div class="col-md-9">
      <h2>Title: ${oneGame.title}</h2>
        <h4>Category:  <button type="button" class="btn btn-primary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
        ${oneGame.genre}
    </button>
    </h4>
        <h4>Platform:  
        <button type="button" class="btn btn-primary"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                ${oneGame.platform}
                            </button>
         
        </h4>
        <h4>Status:  
        <button type="button" class="btn btn-primary"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
            ${oneGame.status}
        </button> 
           </h4>
           <p class="mb-4">${oneGame.description}</p>
        <br/>
        <a class="btn btn-outline-warning show-game" id="game" href="${oneGame.game_url}" target="_blank">Show Game</a>
      </div>
    </div>
  </div>
</div> `;


    document.querySelector("#myData").innerHTML = cartona;



const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', () => {
    closeDetailsContainer();
});
}



function closeDetailsContainer() {
    window.location.href = 'index.html';
}





