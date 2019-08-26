import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
        <div style ={{width: '100%', margin: 'auto' }}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="circle">
                        <img 
                            alt="avatar"
                            className="avatar-img"
                            src="https://scontent.fbel1-1.fna.fbcdn.net/v/t1.0-9/14191895_1241350472583735_7428871373355356583_n.jpg?_nc_cat=109&_nc_oc=AQnut8DSWBmgMNkrKJEdbev8D_I7if6dJoplm8g_S_gs_mDprusXItIrTwoavreg-RE&_nc_ht=scontent.fbel1-1.fna&oh=014b30d318535b0b6ad97ffe11c6e72b&oe=5DD03C5D" />
                    </div>
                    <div className="banner-text">
                        <h1>Full Stack Developer</h1>
                        <hr/>

                        <p>HTML/CSS | Bootstrap | React | React Native | Nodejs | Express | MongoDB</p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>

                            {/* GitHub */}
                            <a href="http://github.com/jubureba" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>

                            {/* Freecodecamp */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                            </a>

                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"  aria-hidden="true"/>
                            </a>
                            
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Landing;