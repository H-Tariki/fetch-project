document.getElementById('what-number').addEventListener('click', function() {
    const inputNumber = this.value
    if (inputNumber) {
        const url = `https://jsonplaceholder.typicode.com/posts/${inputNumber}`

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }else{
                    return response.json()
                }       
            })
            .then((data) => {
                document.querySelector('#header-item').innerHTML =`Product number: ${data.id}`
                document.querySelector('#para1').innerHTML =`Description${data.id}: ${data.title}`
                document.querySelector('#para2').innerHTML =`about number${data.id}: ${data.body}`
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error)
                alert('Error fetching data. Please check the number you entered.')
            });
    } else {
        alert('Please enter a number!')
    }
});