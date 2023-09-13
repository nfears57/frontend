// src/components/Categories.js
import React, {useState} from 'react';
import './Categories.css';
import BlogList from './BlogList'; // Import the BlogList component

const Categories = () => {
  const [showMLBTeams, setShowMLBTeams] = useState(false);
  const [showNBATeams, setShowNBATeams] = useState(false);
  const [showNFLTeams, setShowNFLTeams] = useState(false);
  const [showCollegeBasketball, setShowCollegeBasketball] = useState(false)
  const [showCollegeFootball, setShowCollegeFootball] = useState(false)
  const [showMusic, setShowMusic] = useState(false)
  const [showMovies, setShowMovies] = useState(false)
  const [showTV, setShowTV] = useState(false)
  const [showLifestyle, setShowLifestyle] = useState(false)
  const [showMisc, setShowMisc] = useState(false)

  const toggleMLBTeams = () => {
    setShowMLBTeams(!showMLBTeams);
    setShowNBATeams(false); // Close other team lists
    setShowNFLTeams(false);
    setShowCollegeBasketball(false);
    setShowCollegeFootball(false);
    setShowMovies(false)
    setShowLifestyle(false)
    setShowMisc(false)
    setShowTV(false)
    setShowMusic(false)
  };

  const toggleNBATeams = () => {
    setShowNBATeams(!showNBATeams);
    setShowMLBTeams(false); // Close other team lists
    setShowNFLTeams(false);
    setShowCollegeBasketball(false);
    setShowCollegeFootball(false);
    setShowMovies(false)
    setShowLifestyle(false)
    setShowMisc(false)
    setShowTV(false)
    setShowMusic(false)
  };

  const toggleNFLTeams = () => {
    setShowNFLTeams(!showNFLTeams);
    setShowMLBTeams(false); // Close other team lists
    setShowNBATeams(false);
    setShowCollegeBasketball(false);
    setShowCollegeFootball(false);
    setShowMovies(false)
    setShowLifestyle(false)
    setShowMisc(false)
    setShowTV(false)
    setShowMusic(false)
  };

  const toggleCBB = () => {
    setShowCollegeBasketball(!showCollegeBasketball);
    setShowNFLTeams(false);
    setShowMLBTeams(false); // Close other team lists
    setShowNBATeams(false);
    setShowCollegeFootball(false);
    setShowMovies(false)
    setShowLifestyle(false)
    setShowMisc(false)
    setShowTV(false)
    setShowMusic(false)
  };

  const toggleCFB = () => {
    setShowCollegeFootball(!showCollegeFootball)
    setShowCollegeBasketball(false);
    setShowNFLTeams(false);
    setShowMLBTeams(false); // Close other team lists
    setShowNBATeams(false);
    setShowMovies(false)
    setShowLifestyle(false)
    setShowMisc(false)
    setShowTV(false)
    setShowMusic(false)
  };

  const toggleMusic = () => {
    setShowMusic(!showMusic)
    setShowCollegeFootball(false);
    setShowCollegeBasketball(false);
    setShowNFLTeams(false);
    setShowMLBTeams(false); // Close other team lists
    setShowNBATeams(false);
    setShowMovies(false)
    setShowLifestyle(false)
    setShowMisc(false)
    setShowTV(false)
  }

  const toggleMovies = () => {
    setShowMovies(!showMovies)
    setShowMusic(false)
    setShowCollegeFootball(false);
    setShowCollegeBasketball(false);
    setShowNFLTeams(false);
    setShowMLBTeams(false); // Close other team lists
    setShowNBATeams(false);
    setShowMisc(false)
    setShowLifestyle(false)
    setShowTV(false)
  }

  const toggleTV = () => {
    setShowTV(!showTV)
    setShowMovies(false)
    setShowMusic(false)
    setShowCollegeFootball(false);
    setShowCollegeBasketball(false);
    setShowNFLTeams(false);
    setShowMLBTeams(false); // Close other team lists
    setShowNBATeams(false);
    setShowLifestyle(false)
    setShowMisc(false)
  }

  const toggleLifestyle = () => {
    setShowLifestyle(!showLifestyle)
    setShowTV(false)
    setShowMovies(false)
    setShowMusic(false)
    setShowMisc(false)
    setShowCollegeFootball(false);
    setShowCollegeBasketball(false);
    setShowNFLTeams(false);
    setShowMLBTeams(false); // Close other team lists
    setShowNBATeams(false);
  }

  const toggleMisc = () => {
    setShowMisc(!showMisc)
    setShowLifestyle(false)
    setShowTV(false)
    setShowMovies(false)
    setShowMusic(false)
    setShowCollegeFootball(false);
    setShowCollegeBasketball(false);
    setShowNFLTeams(false);
    setShowMLBTeams(false); // Close other team lists
    setShowNBATeams(false);
  }

  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-list">
      <button className="category-btn" onClick={toggleMLBTeams}>
          MLB
        </button>
        <button className="category-btn" onClick={toggleNBATeams}>
          NBA
        </button>
        <button className="category-btn" onClick={toggleNFLTeams}>
          NFL
        </button>
        <button className="category-btn" onClick={toggleCFB}>
          CFB
        </button>
        <button className="category-btn" onClick={toggleCBB}>
          CBB
        </button>
        <button className="category-btn" onClick={toggleMusic}>
          Music
        </button>
        <button className="category-btn" onClick={toggleMovies}>
          Movies
        </button>
        <button className="category-btn" onClick={toggleTV}>
          TV
        </button>
        <button className="category-btn" onClick={toggleLifestyle}>
          Lifestyle
        </button>
        <button className="category-btn" onClick={toggleMisc}>
          Misc
        </button>
        <button className="category-btn">Other</button>
        {showMLBTeams && (
        <div className="team-list">
          <button className="team-btn">New York Yankees</button>
          <button className="team-btn">Boston Red Sox</button>
          <button className="team-btn">Baltimore Orioles</button>
          <button className="team-btn">Toronto Blue Jays</button>
          <button className="team-btn">Tampa Bay Rays</button>
          <button className="team-btn">Minnesota Twins</button>
          <button className="team-btn">Kansas City Royals</button>
          <button className="team-btn">Detroit Tigers</button>
          <button className="team-btn">Cleveland Guardians</button>
          <button className="team-btn">Chicago White Sox</button>
          <button className="team-btn">Houston Astros</button>
          <button className="team-btn">Texas Rangers</button>
          <button className="team-btn">Oakland A's</button>
          <button className="team-btn">Los Angeles Angels</button>
          <button className="team-btn">Seattle Mariners</button>
          <button className="team-btn">New York Mets</button>
          <button className="team-btn">Atlanta Braves</button>
          <button className="team-btn">Philadelphia Phillies</button>
          <button className="team-btn">Miami Marlins</button>
          <button className="team-btn">Washington Nationals</button>
          <button className="team-btn">Chicago Cubs</button>
          <button className="team-btn">St. Louis Cardinals</button>
          <button className="team-btn">Cincinnati Reds</button>
          <button className="team-btn">Milwaukee Brewers</button>
          <button className="team-btn">Pittsburgh Pirates</button>
          <button className="team-btn">Los Angeles Dodgers</button>
          <button className="team-btn">Arizona Diamondbacks</button>
          <button className="team-btn">Colorado Rockies</button>
          <button className="team-btn">San Diego Padres</button>
          <button className="team-btn">San Francisco Giants</button>
          {/* Add more MLB teams here */}
        </div>
        )}
      </div>
      <div className="category-list">

        {showNBATeams && (
        <div className="team-list">
          <button className="team-btn">Team A</button>
          <button className="team-btn">Team B</button>
          <button className="team-btn">Team C</button>
          {/* Add more NBA teams here */}
        </div>
        )}
      </div>
      <div className="category-list">
   
        {showNFLTeams && (
        <div className="team-list">
          <button className="team-btn">Team X</button>
          <button className="team-btn">Team Y</button>
          <button className="team-btn">Team Z</button>
          {/* Add more NFL teams here */}
        </div>
        )}
      </div>
      <div className='category-list'>
        {showCollegeFootball && (
          <div className="team-list">
          <button className="team-btn">Team X</button>
          <button className="team-btn">Team Y</button>
          <button className="team-btn">Team Z</button>
        </div>
            )}
      </div>
      <div className='category-list'>
        {showCollegeBasketball && (
          <div className="team-list">
          <button className="team-btn">Team X</button>
          <button className="team-btn">Team Y</button>
          <button className="team-btn">Team Z</button>
        </div>
            )}
      </div>
      <BlogList /> {/* Include the BlogList component */}
    </div>
  );
};

export default Categories;
