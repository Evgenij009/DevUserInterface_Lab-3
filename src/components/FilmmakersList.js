import React from "react";
import '../css/styles.css';
import useLanguage from "../hooks/Language";
import {Link} from "react-router-dom";

function FilmmakersList(props) {
    const {t, getCurrLang} = useLanguage();

    if (props.poets !== null && props.poets.length > 0) {
        let output = [];
        let i = 0;
        props.poets.forEach(filmmaker => {
            output.push(
                <div className="col-sm-4 mt-2 mb-2" key={i++}>
                    <div className="card" style={{width: 18 + "rem", height: 100 + "%"}}>
                        <img src={filmmaker.photoUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{filmmaker.name[getCurrLang()]}</h5>
                            <p className="card-text">{filmmaker.description[getCurrLang()]}</p>
                            <div className="container">
                                <Link to={"/filmmakers/" + filmmaker.id}
                                      className="align-self-end btn btn-primary">{t("landing.filmmakerLink")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="row">
                                {output}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return null;
    }
}

export default FilmmakersList;
