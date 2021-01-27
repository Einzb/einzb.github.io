import React, { PureComponent } from "react";
import "./app.css";

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            flipList: [
                "Knowledge",
                "Happiness",
                "Motivation",
                "Prospective",
                "Idea",
            ],
            quickNav: [
                { name: "news", url: "#news" },
                { name: "about", url: "/" },
                { name: "article", url: "/article" },
                { name: "project", url: "/project" },
            ],
        };
    }

    render() {
        return (
            <div id="main">
                <div id="header">
                    <BubbleBackground />
                    <div id="title-box">
                        <div className="title">
                            <span> Plus </span>
                            <span> a little </span>
                            <span> More </span>
                        </div>
                        <div className="flip-list">
                            <ul>
                                {this.state.flipList.map((text, key) => {
                                    return <li key={key}>{text}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="quick-nav">
                    {this.state.quickNav.map((state, key) => {
                        return (
                            <a key={key} href={state.url}>
                                {state.name}
                            </a>
                        );
                    })}
                </div>
            </div>
        );
    }
}

function BubbleBackground(props) {
    let bubbles = [];
    for (let i = 0; i <= 10; ++i) {
        bubbles.push(<Bubble left={10 * i + "vw"} />);
    }
    return <ul class="bg-bubbles">{bubbles}</ul>;
}

function Bubble(props) {
    let size = random(20, 200);
    let width = size + "px",
        height = width,
        bottom = -size,
        animationDelay = random(0, 15) + "s",
        animationDuration = random(15, 60) + "s";

    return (
        <li
            style={{
                left: props.left,
                width,
                height,
                bottom,
                animationDelay,
                animationDuration,
            }}
        ></li>
    );
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
