function init() {
    let getNewButton = document.querySelector('#get-new-button');
    getNewButton.addEventListener('click', function() {
        let list = document.createElement('li');
        let listContainer= document.querySelector('#list');
        listContainer.appendChild(list);


        let imgItem = document.createElement('IMG');
        // list = document.querySelector('li');
        list.appendChild(imgItem);
        imgItem.src = userImages([
            "https://randomuser.me/api/portraits/men/0.jpg", 
            "https://randomuser.me/api/portraits/men/25.jpg",
            "https://randomuser.me/api/portraits/men/3.jpg",
            "https://randomuser.me/api/portraits/men/58.jpg",
            "https://randomuser.me/api/portraits/men/90.jpg",
            "https://randomuser.me/api/portraits/men/18.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg",            
        ]);

        function userImages (images) {
            let i = Math.floor(Math.random()*7)
            return images[i];
        }

        let newDiv = document.createElement('div');
        list.appendChild(newDiv);
        newDiv.classList.add('div');


        let h2 = document.createElement('h2');
        newDiv.appendChild(h2);
        h2.textContent = userNames([
            "Beezer Twelve Washingbeard", 
            "Shakiraquan T.G.I.F. Carter", 
            "Goolius Boozler", 
            "Mergatroid Skittle", 
            "D'Pez Poopsie ", 
            "Quackadilly Blip", 
            "Jammie Jammie-Jammie"
        ]);

        function userNames (names) {
            let i = Math.floor(Math.random()*7)
            // console.log(i);
            // console.log(names);
            return names[i];
        }


        let buttonLike = document.createElement('button');
        newDiv.appendChild(buttonLike);
        buttonLike.textContent ="Like";
        buttonLike.addEventListener('click', function (event) {
            // console.log(event);
            list.classList.add('clicked');
            console.log("Like");
        });

        let buttonNope = document.createElement('button');
        newDiv.appendChild(buttonNope);
        buttonNope.textContent ="Nope";
        buttonNope.addEventListener('click', function () {
            list.classList.add('clicked');
            console.log("Nope");
        });

       // let clicked = document.getElementById('like-button').addEventListener('click', fadeOut);

        function fadeOut() {
            h2.classList.add('clicked');
        }

    });

}

window.addEventListener('load', init);











