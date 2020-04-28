import React, { Component } from "react";
import tweets from '../../constants/tweets'
import Tweet from '../../component/Tweet/Tweet';
import TweetBox from "../../component/Tweetbox/TweetBox";
import moment from 'moment';


class App extends Component {

    state = {
        tweets,
    }


    publish = tweet => {
        const {tweets} = this.state

        this.setState({
            tweets: [{
                username: 'koto',
                fullname: 'tataz',
                content: tweet,
                date: (moment().format('DD/MM/YYYY')),
            },
                ...tweets
            ]})
    }

    remove = index => {
        const {tweets} = this.state
        this.setState({tweets: tweets.filter((tweet, i) => (
            index !== i
        ))})
    }

    render() {
        const {tweets} = this.state
        return(
            <div>
                <TweetBox publish={this.publish}/>
                <div>
                    {tweets.map((tweet, index) => (
                        <Tweet
                            key={index}
                            index={index}
                            remove={this.remove}
                            {...tweet}
                        />
                    ))}
                </div>
            </div>
        )
    }
}


export default App;