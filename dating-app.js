function init() {
    let getNewButton = document.querySelector('#get-new-button');
    getNewButton.addEventListener('click', function() {
        let list = document.createElement('li');
        let listContainer= document.querySelector('#list');
        listContainer.appendChild(list);


        let imgItem = document.createElement('IMG');
        // list = document.querySelector('li');
        list.appendChild(imgItem);

        let newDiv = document.createElement('div');
        list.appendChild(newDiv);
        newDiv.classList.add('div');


        let h2 = document.createElement('h2');
        newDiv.appendChild(h2);
        h2.textContent ="Beezer Twelve Washingbeard";

        let buttonLike = document.createElement('button');
        newDiv.appendChild(buttonLike);
        buttonLike.textContent ="Like";
        buttonLike.addEventListener('click', function () {
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

        let clicked = document.getElementById('like-button').addEventListener('click', fadeOut);

        function fadeOut() {
            h2.classList.add('clicked');
        }

        
    });

}

window.addEventListener('load', init);












