import { useRef, useEffect, useState } from "react";
import './main.css';

function Main() {
    const [searchTerm, setSearchTerm] = useState("");
    const [resultArtistVisible, setResultArtistVisible] = useState(false);
    const [playlistContainerVisible, setPlaylistContainerVisible] = useState(true);


    const handleInputChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        if (searchTerm === "") {
            setResultArtistVisible(false);
            setPlaylistContainerVisible(true);
        } else {
            requestApi(searchTerm);
        }
    };

    const requestApi = (searchTerm) => {
        fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
            .then((response) => response.json())
            .then((results) => displayResults(results));
    };

    const displayResults = (results) => {
        hidePlaylists();
        const artistImage = document.getElementById("artist-img");
        const artistName = document.getElementById("artist-name");

        results.forEach((element) => {
            artistImage.src = element.urlImg;
            artistName.innerText = element.name;
        });
        setResultArtistVisible(true);
    };

    const hidePlaylists = () => {
        setPlaylistContainerVisible(false);
    };

    return (
        <main>
            <div className="main-container">
                <nav className="header__navigation">
                    <div className="navigation">
                        <button className="arrow-left">
                            <img src="assets/icons/small-left.png" alt="" />
                        </button>
                        <button className="arrow-right">
                            <img src="assets/icons/small-right.png" alt="" />
                        </button>

                        <div className="header__search">
                            <img src="assets/icons/search.png" alt="" />
                            <input id="search-input" placeholder="O que você quer ouvir?" value={searchTerm}
                                onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="header__login">
                        <button className="subscribe">Inscreva-se</button>
                        <button className="login">Entrar</button>
                    </div>
                </nav>

                <div className="playlist-container">
                    <div id="result-playlists">
                        <div className="playlist">
                            <h1 id="greeting"></h1>
                            <h2 className="session">Navegar por todas as seções</h2>
                        </div>

                        <div className="offer__scroll-container">
                            <div className="offer__list">
                                <section className="offer__list-item">
                                    <a href="" className="cards">
                                        <div className="cards card1">
                                            <img src="assets/playlists/1.jpeg" alt="" />
                                            <span>Boas festas</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card2">
                                            <img src="assets/playlists/2.png" alt="" />
                                            <span>Feitos para você</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card3">
                                            <img src="assets/playlists/3.jpeg" alt="" />
                                            <span>Lançamentos</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card4">
                                            <img src="assets/playlists/4.jpeg" alt="" />
                                            <span>Creators</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card5">
                                            <img src="assets/playlists/5.jpeg" alt="" />
                                            <span>Para treinar</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card6">
                                            <img src="assets/playlists/6.jpeg" alt="" />
                                            <span>Podcasts</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card7">
                                            <img src="assets/playlists/7.jpeg" alt="" />
                                            <span>Sertanejo</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card8">
                                            <img src="assets/playlists/8.jpeg" alt="" />
                                            <span>Samba e pagode</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card9">
                                            <img src="assets/playlists/9.jpeg" alt="" />
                                            <span>Funk</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card10">
                                            <img src="assets/playlists/10.jpeg" alt="" />
                                            <span>MPB</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card11">
                                            <img src="assets/playlists/11.jpeg" alt="" />
                                            <span>Rock</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card12">
                                            <img src="assets/playlists/12.jpeg" alt="" />
                                            <span>Hip Hop</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card13">
                                            <img src="assets/playlists/13.jpeg" alt="" />
                                            <span>Indie</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card14">
                                            <img src="assets/playlists/14.jpeg" alt="" />
                                            <span>Relax</span>
                                        </div>
                                    </a>

                                    <a href="" className="cards">
                                        <div className="cards card15">
                                            <img src="assets/playlists/15.jpeg" alt="" />
                                            <span>Música Latina</span>
                                        </div>
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div id="result-artist" className="hidden">
                        <div className="grid-container">
                            <div className="artist-card" id="">
                                <div className="card-img">
                                    <img id="artist-img" className="artist-img" />
                                    <div className="play">
                                        <span className="fa fa-solid fa-play"></span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <a title="Foo Fighters" className="vst" href="">
                                        <span className="artist-name" id="artist-name"></span>
                                        <span className="artist-categorie">Artista</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;