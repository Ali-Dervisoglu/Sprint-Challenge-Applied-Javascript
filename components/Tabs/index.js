// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let data = [];
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        data = response.data.topics;
        let topicsElement = document.querySelector(".topics");
        topicsElement.appendChild(createTopics(data));
    })
    .catch(error => {
        console.error(error);
    })

function createTopics(data) {
    
    // console.log(data);
    let trends = [];
    let topics = document.createElement("div");
    for (let i = 0; i < data.length; i++){
        trends.push(document.createElement("div"));
    }
    for (let i = 0; i < trends.length; i++){
        trends[i].textContent = data[i].textContent;
        trends[i].classList.add("tab");
        topics.appendChild(trends[i]);
      }
    return topics;

    
}

// let topicsElement = document.querySelector(".topics");
// console.log(data);
// topicsElement.appendChild(createTopics(data));