import React from "react";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { LanguageSwitch } from "../../components/LanguageSwitch";
import { History } from "../../icons/History";
import "./style.css";

export const Page = () => {
  return (
    <div className="page">
      <div className="v-page">
        <InputForm className="input-form-instance" stateProp="default" />
        <p className="type-in-your">
          <span className="span">
            Type in your question.
            <br />
          </span>
          <span className="text-wrapper-2">For an accurate answer, please check our Questions Guide section.</span>
        </p>
        <div className="tips-tricks">
          <div className="questions-guide">QUESTIONS GUIDE</div>
          <p className="p">Ce tipuri de operațiuni de plată pot fi efectuate prin intermediul Contului curent?</p>
          <p className="text-wrapper-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex erat, tristique gravida lacus in,
            accumsan commodo lacus. Duis sem libero, eleifend in est eu, molestie mattis magna. Suspendisse imperdiet
            mollis consequat. Duis cursus velit odio, vitae tincidunt mauris feugiat vitae.
          </p>
          <p className="text-wrapper-4">Ce este necesar pentru ca un Cont revolving să funcționeze?</p>
          <p className="text-wrapper-5">Ce se întâmplă în cazul încasărilor interbancare în valută?</p>
        </div>
        <header className="header">
          <img
            className="logo"
            alt="Logo"
            src="https://generation-sessions.s3.amazonaws.com/6547d0460d31368f125c8f7e0f845e7e/img/logo.svg"
          />
          <LanguageSwitch state="EN" />
          <Button
            icon={<History className="history-1" color="#C73640" />}
            leadingIcon
            text="History"
            trailIcon={false}
            type="secondary"
          />
          <Button className="button-instance" leadingIcon={false} text1="FAQ" trailIcon={false} type="primary" />
        </header>
      </div>
    </div>
  );
};
