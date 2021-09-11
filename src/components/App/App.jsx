import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const TotalTime = 60;
const ServiceURL = 'http://metaphorpsum.com/paragraphs/1/9';

class App extends React.Component {
    state = {
        selectedParagraph: "Linkinsunil",
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
    }

    componentDidMount () {
        fetch(ServiceURL)
        .then(response => response.text())
        .then(data =>{
            this.setState({ selectedParagraph: data })
        })
    }

    render(){
        console.log("Render method was called")
        return(
            <div className="app">
                <Nav />
                <Landing />
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    characters={this.state.characters}
                />
                <Footer />
            </div>
        )
    }
}

export default App;