import React from "react";

function FeaturedProjects() {

    return (
        <div className="featured-projects-section">
            <div className="featured-projects-content">
                <h2>Featured projects</h2>
                <div className="featured-project1">
                    <h3>Crypto Trader</h3>
                    <p>A simulated trading environment, to provide a safe, educational platform for aspiring traders to learn and practice cryptocurrency trading without financial risk.</p>
                </div>
                <div className="featured-project2">
                    <h3>Sudoku Puzzler</h3>
                    <p>A python-based terminal application that allows users to play Sudoku puzzles. It provides an interactive interface for solving Sudoku puzzles and offers features like puzzle generation, saving and loading game states, and more.</p>
                </div>
                <div className="featured-project3">
                    <h3>Sketch Off</h3>
                    <p>A fun drawing game where the player gets a random word and a set time to draw it on their board.</p>
                </div>
            </div>
        </div>
    );
}


export default FeaturedProjects;