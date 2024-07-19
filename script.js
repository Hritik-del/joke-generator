document.getElementById('joke-btn').addEventListener('click', fetchData);

function fetchData() {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
        
        xhr.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200){
                const jokeResponse = JSON.parse(this.response);
                console.log(jokeResponse.value);
                const dom = document.getElementById('joke');
                dom.textContent = jokeResponse.value;
                resolve();
            }
        }
        xhr.send();
        
    });
    
}