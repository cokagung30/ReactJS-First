import React from 'react';
import './App.css';

function Reviews() {
    const reviewer = [
    {
        "id": 1,
        "name" : "Gung Brata",
        "photo" : "profile.jpeg",
        "review": "Kopinya nikmat cocok untuk para penikmat senja."
    },
    {
        "id": 2,
        "name" : "Cok De",
        "photo" : "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "review": "Kopinya nikmat cocok untuk para penikmat senja."
    },
    {
        "id": 3,
        "name" : "Gung Juni",
        "photo" : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "review": "Kopinya nikmat cocok untuk para penikmat senja."
    },
    ];

    const listReview = reviewer.map((itemReview) => 
    <div key={itemReview.id} className="Item">
        <img src={itemReview.photo}/>
        <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
        </div>
    </div>
    );

    return (
    <div className="Review-box">
            <h2>Reviews</h2>
            {listReview}
    </div>    
    );
}

export default Reviews;