import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useLanguage from "../hooks/Language";
import useJsonDB from "../hooks/JsonDB";

export default function FilmmakerOfTheDay(props) {

    const {t, getCurrLang} = useLanguage();

    const [filmmaker, setPoet] = useState(null);

    const [dbLoaded, dbSearchPoet] = useJsonDB("prevDescription.json");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        if (dbLoaded) {
            let allPoets = dbSearchPoet("", "");
            let randomIndex = getRandomInt(allPoets.length);
            setPoet(allPoets[randomIndex]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dbLoaded]);


    return (
        <div id="daily">
            <div id={props.id} style={props.style}
                 className="container d-flex flex-column justify-content-center align-items-center mt-4 mb-4">
                {
                    dbLoaded === true && filmmaker !== null ? (
                        <>
                            <h3>{t("landing.filmmakerOfTheDay")}</h3>
                            <div className="card" style={{width: 18 + "rem", height: 100 + "%"}}>
                                <img src={filmmaker.photoUrl} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{filmmaker.name[getCurrLang()]}</h5>
                                    <p className="card-text">{filmmaker.description[getCurrLang()]}</p>
                                    <Link to={"/filmmakers/" + filmmaker.id}
                                          className="align-self-end btn btn-primary">{t("landing.filmmakerLink")}</Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <span>Loading</span>
                    )
                }
            </div>
        </div>
    );
}