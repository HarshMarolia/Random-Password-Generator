import React from 'react'
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
    const [t, i18n] = useTranslation("global")

    const languageHandler = (lang) => {
            i18n.changeLanguage(lang);
    }
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle outline: none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t("nav.h6")}
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={()=>{languageHandler("en")}}>English</button></li>
                    <li><button className="dropdown-item" onClick={()=>{languageHandler("hi")}}>Hindi</button></li>
                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                </ul>
            </div>
        </>
    )
}

export default LanguageDropdown