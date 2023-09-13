// src/components/Categories.js
import React, { useState, useEffect} from 'react';
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
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   // Fetch categories from your API endpoint
  //   fetch('categories')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Assuming your API returns an array of category names
  //       setCategories(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching categories:', error);
  //     });
  // }, [])

  const handleTeamClick = (teamName) => {
    console.log(teamName)
    setSelectedTeam(teamName);
  };


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
        {categories.map((category) => (
          <button
            key={category}
            className="category-btn"
            onClick={() => handleTeamClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
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
            <button className="team-btn" onClick={() => handleTeamClick('New York Yankees')}>
              New York Yankees
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Boston Red Sox')}>
              Boston Red Sox
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Baltimore Orioles')}>
              Baltimore Orioles
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Toronto Blue Jays')}>
              Toronto Blue Jays
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Tampa Bay Rays')}>
              Tampa Bay Rays
            </button>
            <h3>American League Central</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Minnesota Twins')}>
              Minnesota Twins
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Chicago White Sox')}>
              Chicago White Sox
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Cleveland Guardians')}>
              Cleveland Guardians
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Detroit Tigers')}>
              Detroit Tigers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Kansas City Royals')}>
              Kansas City Royals
            </button>
            <h3>American League West</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Houston Astros')}>
              Houston Astros
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Texas Rangers')}>
              Texas Rangers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Seattle Mariners')}>
              Seattle Mariners
            </button>
            <button className="team-btn" onClick={() => handleTeamClick("Oakland A's")}>
              Oakland A's
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Los Angeles Angels')}>
              Los Angeles Angels
            </button>
            <h3>National League East</h3>
            <button className="team-btn" onClick={() => handleTeamClick('New York Mets')}>
              New York Mets
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Atlanta Braves')}>
              Atlanta Braves
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Philadelphia Phillies')}>
              Philadelphia Phillies
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Miami Marlins')}>
              Miami Marlins
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Washington Nationals')}>
              Washington Nationals
            </button>
            <h3>National League Central</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Chicago Cubs')}>
              Chicago Cubs
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Cincinnati Reds')}>
              Cincinnati Reds
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Pittsburgh Pirates')}>
              Pittsburgh Pirates
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Milwaukee Brewers')}>
              Milwaukee Brewers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('St. Louis Cardinals')}>
              St. Louis Cardinals
            </button>
            <h3>National League West</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Los Angeles Dodgers')}>
              Los Angeles Dodgers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('San Diego Padres')}>
              San Diego Padres
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('San Francisco Giants')}>
              San Francisco Giants
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Arizona Diamondbacks')}>
              Arizona Diamondbacks
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Colorado Rockies')}>
              Colorado Rockies
            </button>
          </div>
        )}
      </div>
      <div className="category-list">

        {showNBATeams && (
          <div className="team-list">
            <h3>Atlantic</h3>
            <button className="team-btn" onClick={() => handleTeamClick('New York Knicks')}>
              New York Knicks
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Boston Celtics')}>
              Boston Celtics
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Brooklyn Nets')}>
              Brooklyn Nets
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Toronto Raptors')}>
              Toronto Raptors
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Philadelphia 76ers')}>
              Philadelphia 76ers
            </button>

            <h3>Central</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Chicago Bulls')}>
              Chicago Bulls
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Cleveland Cavaliers')}>
              Cleveland Cavaliers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Detroit Pistons')}>
              Detroit Pistons
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Milwaukee Bucks')}>
              Milwaukee Bucks
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Indiana Pacers')}>
              Indiana Pacers
            </button>

            <h3>Southeast</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Atlanta Hawks')}>
              Atlanta Hawks
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Miami Heat')}>
              Miami Heat
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Orlando Magic')}>
              Orlando Magic
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Charlotte Hornets')}>
              Charlotte Hornets
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Washington Wizards')}>
              Washington Wizards
            </button>

            <h3>Northwest</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Denver Nuggets')}>
              Denver Nuggets
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Minnesota Timberwolves')}>
              Minnesota Timberwolves
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Oklahoma City Thunder')}>
              Oklahoma City Thunder
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Portland Trail Blazers')}>
              Portland Trail Blazers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Utah Jazz')}>
              Utah Jazz
            </button>

            <h3>Pacific</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Sacramento Kings')}>
              Sacramento Kings
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Golden State Warriors')}>
              Golden State Warriors
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Los Angeles Clippers')}>
              Los Angeles Clippers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Los Angeles Lakers')}>
              Los Angeles Lakers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Phoenix Suns')}>
              Phoenix Suns
            </button>

            <h3>Southwest</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Memphis Grizzlies')}>
              Memphis Grizzlies
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('New Orleans Pelicans')}>
              New Orleans Pelicans
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Dallas Mavericks')}>
              Dallas Mavericks
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Houston Rockets')}>
              Houston Rockets
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('San Antonio Spurs')}>
              San Antonio Spurs
            </button>

            {/* Repeat this pattern for other divisions */}
          </div>
        )}

      </div>
      <div className="category-list">

        {showNFLTeams && (
          <div className="team-list">
            <h3>AFC East</h3>
            <button className="team-btn" onClick={() => handleTeamClick('New York Jets')}>
              New York Jets
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('New England Patriots')}>
              New England Patriots
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Buffalo Bills')}>
              Buffalo Bills
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Miami Dolphins')}>
              Miami Dolphins
            </button>

            <h3>AFC North</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Cleveland Browns')}>
              Cleveland Browns
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Cincinnati Bengals')}>
              Cincinnati Bengals
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Pittsburgh Steelers')}>
              Pittsburgh Steelers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Baltimore Ravens')}>
              Baltimore Ravens
            </button>

            <h3>AFC South</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Jacksonville Jaguars')}>
              Jacksonville Jaguars
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Indianapolis Colts')}>
              Indianapolis Colts
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Tennessee Titans')}>
              Tennessee Titans
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Houston Texans')}>
              Houston Texans
            </button>

            <h3>AFC West</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Las Vegas Raiders')}>
              Las Vegas Raiders
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Kansas City Chiefs')}>
              Kansas City Chiefs
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Los Angeles Chargers')}>
              Los Angeles Chargers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Denver Broncos')}>
              Denver Broncos
            </button>

            <h3>NFC East</h3>
            <button className="team-btn" onClick={() => handleTeamClick('New York Giants')}>
              New York Giants
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Philadelphia Eagles')}>
              Philadelphia Eagles
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Dallas Cowboys')}>
              Dallas Cowboys
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Washington Commanders')}>
              Washington Commanders
            </button>

            <h3>NFC North</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Green Bay Packers')}>
              Green Bay Packers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Chicago Bears')}>
              Chicago Bears
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Detroit Lions')}>
              Detroit Lions
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Minnesota Vikings')}>
              Minnesota Vikings
            </button>

            <h3>NFC South</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Atlanta Falcons')}>
              Atlanta Falcons
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Carolina Panthers')}>
              Carolina Panthers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Tampa Bay Buccaneers')}>
              Tampa Bay Buccaneers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('New Orleans Saints')}>
              New Orleans Saints
            </button>

            <h3>NFC West</h3>
            <button className="team-btn" onClick={() => handleTeamClick('Arizona Cardinals')}>
              Arizona Cardinals
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('San Francisco 49ers')}>
              San Francisco 49ers
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Los Angeles Rams')}>
              Los Angeles Rams
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Seattle Seahawks')}>
              Seattle Seahawks
            </button>

            {/* Add more NFL teams here */}
          </div>
        )}

      </div>
      <div className='category-list'>
        {showCollegeFootball && (
          <div className="team-list">
            <button className="team-btn" onClick={() => handleTeamClick('ACC')}>
              ACC
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('SEC')}>
              SEC
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Big 12')}>
              Big 12
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Big 10')}>
              Big 10
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Pac 12')}>
              Pac 12
            </button>
          </div>
        )}
      </div>

      <div className='category-list'>
        {showCollegeBasketball && (
          <div className="team-list">
            <button className="team-btn" onClick={() => handleTeamClick('ACC')}>
              ACC
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('SEC')}>
              SEC
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Big 12')}>
              Big 12
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Big 10')}>
              Big 10
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Pac 12')}>
              Pac 12
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('AAC')}>
              AAC
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Mountain West')}>
              Mountain West
            </button>
          </div>
        )}
      </div>

      <div className='category-list'>
        {showMusic && (
          <div className="team-list">
            <button className="team-btn" onClick={() => handleTeamClick('Pop')}>
              Pop
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Hip/Hop')}>
              Hip/Hop
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('R&B')}>
              R&B
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Country')}>
              Country
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Rock')}>
              Rock
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Alternative')}>
              Alternative
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Indie')}>
              Indie
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Folk')}>
              Folk
            </button>
          </div>
        )}
      </div>

      <div className='category-list'>
        {showMovies && (
          <div className="team-list">
            <button className="team-btn" onClick={() => handleTeamClick('Action')}>
              Action
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Thriller')}>
              Thriller
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Drama')}>
              Drama
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Comedy')}>
              Comedy
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Romantic Comedy')}>
              Romantic Comedy
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Horror')}>
              Horror
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Biopics')}>
              Biopics
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Sci-Fi')}>
              Sci-Fi
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Sports')}>
              Sports
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Animated')}>
              Animated
            </button>
          </div>
        )}
      </div>

      <div className='category-list'>
        {showTV && (
          <div className="team-list">
            <button className="team-btn" onClick={() => handleTeamClick('Comedy')}>
              Comedy
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Drama')}>
              Drama
            </button>
            <button className="team-btn" onClick={() => handleTeamClick('Docuseries')}>
              Docuseries
            </button>
          </div>
        )}
      </div>

      <BlogList teamName={selectedTeam} />
    </div>
  );
};

export default Categories;
