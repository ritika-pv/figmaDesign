import React, { useState } from 'react'
import './LatestArticles.css'

const cardData = [
    // Your card data objects
    { img: 'images/p1.png', title: 'Grilled Tomatoes at Home', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
    { img: 'images/p2.png', title: 'Snacks for Travel', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
    { img: 'images/p3.png', title: 'Post-workout Recipes', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
    { img: 'images/p4.png', title: 'How To Grill Corn', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
    { img: 'images/p5.png', title: 'Crunchwrap Supreme', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
    { img: 'images/p6.png', title: 'Broccoli Cheese Soup', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
];




const LatestArticles = () => {


    const CardsPerPage = 3;


    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * CardsPerPage;
    const visibleCards = cardData.slice(startIndex, startIndex + CardsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <div className='LatestArticles'>
            <div><h2>Latest Articles</h2></div>
            <div className="card-container">

                {visibleCards.map((card, index) => (
                    <div className="cardc" key={index}>
                        <img src={card.img} />
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                        <button >Read More</button>
                    </div>
                ))}
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(1)}
                        className={currentPage === 1 ? 'active' : ''}
                    >
                        1
                    </button>
                    <button
                        onClick={() => handlePageChange(2)}
                        className={currentPage === 2 ? 'active' : ''}
                    >
                        2
                    </button>
                </div>


            </div>
        </div>
    )
}

export default LatestArticles