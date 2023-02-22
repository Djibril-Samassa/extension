import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const data = [
    {
      name: "Moteurs de recherche",
      url: ["https://www.google.com", "https://www.bing.com"]
    },
    {
      name: "Vidéos en ligne",
      url: ["https://www.youtube.com", "https://www.dailymotion.com"]
    },
    {
      name: "Application de design",
      url: ["https://www.canva.com/", "https://www.figma.com/fr/"]
    },
    {
      name: "Réseaux sociaux",
      url: ["https://www.facebook.com/", "https://www.linkedin.com/feed/"]
    },
    {
      name: "Courrier en ligne",
      url: ["https://mail.google.com/mail/u/0/#inbox", "https://outlook.fr/ "]
    }
  ]

  const data2 = [
    {
      name: "Tech",
      url: ["http://www.01net.com/", "http://www.lemonde.fr/pixels/", "http://www.clubic.com/"]
    },
    {
      name: "Cinéma",
      url: ["http://www.allocine.fr/film/", "http://www.festival-cannes.fr/", "http://www.cinemasgaumontpathe.com/"]
    },
    {
      name: "Actualité",
      url: ["http://www.lefigaro.fr/", "http://www.lequipe.fr/", "http://www.leparisien.fr/"]
    },
    {
      name: "Economie",
      url: ["http://www.leparisien.fr/", "http://www.latribune.fr/", "http://www.challenges.fr/"]
    },
    {
      name: "Jeux vidéo",
      url: ["http://www.gamekult.com/", "http://www.jeuxvideo.fr/", "http://www.gameblog.fr/"]
    },
    {
      name: "Sport",
      url: ["http://www.lequipe.fr/", "http://www.eurosport.fr/", "http://www.francetvsport.fr/"]
    },
    {
      name: "Lifestyle & Beauté",
      url: ["http://www.vogue.fr/", "http://www.aufeminin.com/", "http://www.elle.fr/"]
    }
  ]

  const data3 = ["https://www.linkedin.com/", "https://djibrilsamassa.netlify.app/", "https://github.com/Djibril-Samassa?tab=repositories"]


  const [list, setList] = useState(data)
  const [bestSites, setBestSites] = useState(data2)
  const [myLinks, setMyLinks] = useState(data3)

  const openUrl = (url) => {
    url.map((link) => {
      window.open(link, "_blank")
    })
  }

  return (
    <div className="App">
      <h3>Choisissez votre Application</h3>
      <p>Sites par thèmes</p>
      <div className='list'>
        {bestSites && bestSites.map((item) => {
          return (<button onClick={() => { openUrl(item.url) }} className='button'>{item.name}</button>)
        })}

      </div>
      <p>Autres liens</p>
      <div className='list'>
        {list && list.map((item) => {
          return (<button onClick={() => { openUrl(item.url) }} className='button'>{item.name}</button>)
        })}

      </div>
      <p>Mes liens</p>
      <div className='list'>
        <button onClick={() => { openUrl(myLinks) }} className='button'>Me trouver</button>
      </div>
    </div>
  );
}

export default App;
