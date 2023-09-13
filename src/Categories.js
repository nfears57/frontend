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
        {showMLBTeams && (
        <div className="team-list">
          <h3>American League East</h3>
          <button className="team-btn">New York Yankees</button>
          <button className="team-btn">Boston Red Sox</button>
          <button className="team-btn">Baltimore Orioles</button>
          <button className="team-btn">Toronto Blue Jays</button>
          <button className="team-btn">Tampa Bay Rays</button>
          <h3>American League Central</h3>
          <button className="team-btn">Minnesota Twins</button>
          <button className="team-btn">Kansas City Royals</button>
          <button className="team-btn">Detroit Tigers</button>
          <button className="team-btn">Cleveland Guardians</button>
          <button className="team-btn">Chicago White Sox</button>
          <h3>American League West</h3>
          <button className="team-btn">Houston Astros</button>
          <button className="team-btn">Texas Rangers</button>
          <button className="team-btn">Oakland A's</button>
          <button className="team-btn">Los Angeles Angels</button>
          <button className="team-btn">Seattle Mariners</button>
          <h3>National League East</h3>
          <button className="team-btn">New York Mets</button>
          <button className="team-btn">Atlanta Braves</button>
          <button className="team-btn">Philadelphia Phillies</button>
          <button className="team-btn">Miami Marlins</button>
          <button className="team-btn">Washington Nationals</button>
          <h3>National League Central</h3>
          <button className="team-btn">Chicago Cubs</button>
          <button className="team-btn">St. Louis Cardinals</button>
          <button className="team-btn">Cincinnati Reds</button>
          <button className="team-btn">Milwaukee Brewers</button>
          <button className="team-btn">Pittsburgh Pirates</button>
          <h3>National League West</h3>
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
          <h3>Atlantic</h3>
          <button className="team-btn">New York Knicks</button>
          <button className="team-btn">Boston Celtics</button>
          <button className="team-btn">Brooklyn Nets</button>
          <button className="team-btn">Toronto Raptors</button>
          <button className="team-btn">Philadelphia 76ers</button>
          <h3>Central</h3>
          <button className="team-btn">Chicago Bulls</button>
          <button className="team-btn">Cleveland Cavaliers</button>
          <button className="team-btn">Detroit Pistons</button>
          <button className="team-btn">Milwaukee Bucks</button>
          <button className="team-btn">Indiana Pacers</button>
          <h3>Southeast</h3>
          <button className="team-btn">Atlanta Hawks</button>
          <button className="team-btn">Miami Heat</button>
          <button className="team-btn">Orlando Magic</button>
          <button className="team-btn">Charlotte Hornets</button>
          <button className="team-btn">Washinton Wizards</button>
          <h3>Northwest</h3>
          <button className="team-btn">Denver Nuggets</button>
          <button className="team-btn">Minnesota Timberwolves</button>
          <button className="team-btn">Oklahoma City Thunder</button>
          <button className="team-btn">Portland Trail Blazers</button>
          <button className="team-btn">Utah Jazz</button>
          <h3>Pacific</h3>
          <button className="team-btn">Sacramento Kings</button>
          <button className="team-btn">Golden State Warrios</button>
          <button className="team-btn">Los Angeles Clippers</button>
          <button className="team-btn">Los Angeles Lakers</button>
          <button className="team-btn">Phoenix Suns</button>
          <h3>Southwest</h3>
          <button className="team-btn">Memphis Grizzlies</button>
          <button className="team-btn">New Orleans Pelicans</button>
          <button className="team-btn">Dallas Mavericks</button>
          <button className="team-btn">Houston Rockets</button>
          <button className="team-btn">San Antonio Spurs</button>
          {/* Add more NBA teams here */}
        </div>
        )}
      </div>
      <div className="category-list">
   
        {showNFLTeams && (
        <div className="team-list">
          <h3>AFC East</h3>
          <button className="team-btn">New York Jets</button>
          <button className="team-btn">New England Patriots</button>
          <button className="team-btn">Buffalo Bills</button>
          <button className="team-btn">Miami Dolphins</button>
          <h3>AFC North</h3>
          <button className="team-btn">Cleveland Browns</button>
          <button className="team-btn">Cincinnati Bengals</button>
          <button className="team-btn">Pittsburgh Steelers</button>
          <button className="team-btn">Baltimore Ravens</button>
          <h3>AFC South</h3>
          <button className="team-btn">Jacksonville Jaguars</button>
          <button className="team-btn">Indianapolis Colts</button>
          <button className="team-btn">Tennessee Titans</button>
          <button className="team-btn">Houston Texans</button>
          <h3>AFC West</h3>
          <button className="team-btn">Las Vegas Raiders</button>
          <button className="team-btn">Kansas City Chiefs</button>
          <button className="team-btn">Los Angeles Chargers</button>
          <button className="team-btn">Denver Broncos</button>
          <h3>NFC East</h3>
          <button className="team-btn">New York Giants</button>
          <button className="team-btn">Philadelphia Eagles</button>
          <button className="team-btn">Dallas Cowboys</button>
          <button className="team-btn">Washinton Commanders</button>
          <h3>NFC North</h3>
          <button className="team-btn">Green Bay Packers</button>
          <button className="team-btn">Chicago Bears</button>
          <button className="team-btn">Detroit Lions</button>
          <button className="team-btn">Minnesota Vikings</button>
          <h3>NFC South</h3>
          <button className="team-btn">Atlanta Falcons</button>
          <button className="team-btn">Carolina Panthers</button>
          <button className="team-btn">Tampa Bay Buccaneers</button>
          <button className="team-btn">New Orleans Saints</button>
          <h3>NFC West</h3>
          <button className="team-btn">Arizona Carindals</button>
          <button className="team-btn">San Francisco 49ers</button>
          <button className="team-btn">Los Angeles Rams</button>
          <button className="team-btn">Seattle Seahawks</button>
          {/* Add more NFL teams here */}
        </div>
        )}
      </div>
      <div className='category-list'>
        {showCollegeFootball && (
          <div className="team-list">
          <button className="team-btn">ACC</button>
          <button className="team-btn">SEC</button>
          <button className="team-btn">Big 12</button>
          <button className="team-btn">Big 10</button>
          <button className="team-btn">Pac 12</button>
        </div>
            )}
      </div>
      <div className='category-list'>
        {showCollegeBasketball && (
          <div className="team-list">
          <button className="team-btn">ACC</button>
          <button className="team-btn">SEC</button>
          <button className="team-btn">Big 12</button>
          <button className="team-btn">Big 10</button>
          <button className="team-btn">Pac 12</button>
          <button className="team-btn">AAC</button>
          <button className="team-btn">Mountain West</button>
        </div>
            )}
      </div>
      <div className='category-list'>
        {showMusic && (
          <div className="team-list">
          <button className="team-btn">Pop</button>
          <button className="team-btn">Hip/Hop</button>
          <button className="team-btn">R&B</button>
          <button className="team-btn">Country</button>
          <button className="team-btn">Rock</button>
          <button className="team-btn">Alternative</button>
          <button className="team-btn">Indie</button>
          <button className="team-btn">Folk</button>
        </div>
            )}
      </div>
      <div className='category-list'>
        {showMovies && (
          <div className="team-list">
          <button className="team-btn">Action</button>
          <button className="team-btn">Thriller</button>
          <button className="team-btn">Drama</button>
          <button className="team-btn">Comedy</button>
          <button className="team-btn">Romantic Comedy</button>
          <button className="team-btn">Horror</button>
          <button className="team-btn">Biopics</button>
          <button className="team-btn">Sci-Fi</button>
          <button className="team-btn">Sports</button>
          <button className="team-btn">Animated</button>
        </div>
            )}
      </div>
      <div className='category-list'>
        {showTV && (
          <div className="team-list">
          <button className="team-btn">Comedy</button>
          <button className="team-btn">Drama</button>
          <button className="team-btn">Docuseries</button>
        </div>
            )}
      </div>
      <BlogList /> {/* Include the BlogList component */}
    </div>
  );
};

export default Categories;
