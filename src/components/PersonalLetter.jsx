import React from 'react'
import {BsPaperclip} from 'react-icons/bs'

import Header from './Header'

const PersonalLetter = () => {
    return (
        <>
        <Header text="Personal Letter" />
        <BsPaperclip className="paper-clip" />
        <div className="pl">
            <p className="greeting">Hey! How fun that you found your way here. Let's learn more about Huiyi, shall we?</p>
            <div>
                <h2>Huiyis programming journey</h2>
                <p> 
                    Back in 2012 Huiyi briefly started learning basic C++, and that introduced her to the programming world, where she finds herself most comfortable and passionate.
                    Life took a different turn though for a couple of years, moving from China to Sweden, studying sustainable development, meeting a husband and getting two cats before once again taking up programming.
                    
                    When Huiyi was strugging with thinking up new project ideas and find finacial support at Miljöfordon, she downloaded Visual Studio Code and wrote her very first line of code in many years - "hello world". It didn't go well for the first time, but it felt well. And it felt right. 
                    This was the thing she has alway Wanted to do. At that moment she made her decision to become a real coder.   
                    
                    This time for good! It's now a large part of her life, taking up most evenings of the week.
                </p>
            </div>
            <div>
                <h2>How is Huiyi as a worker?</h2>
                <p>Huiyi is very focused when she is working, and she can stay focused for hours once she finds something she is really interested in. 
                Huiyi enjoys learning new knowledge in programming, she often reflects on work done and how to make further improvements.
                A good work week should end with a feeling of accomplishment and value.
                </p>
                <p>Huiyi's favorite working module is to receive tasks, solve problems and bring up some possible new ideas during the process. 
                That's why Huiyi finds programming to be so interesting and full of fun to work with. 
                Huiyi is quite independent on her work but she also likes to discuss with others for inspiration when she encounters problems. 
                She also likes to help her colleagues with everything she can. 
                </p> 
            </div>
            <div>
                <h2>How is Huiyi as a person?</h2>
                <p>
                    Huiyi has a great sense of humor, she jokes and laughs a lot. Actually, putting aside every consideration, her favorite and dream job would be as a comedy screenwriter, or actress, who knows.
                    In her spare time, Huiyi also likes to make things. She has crafted her own jewelry and home decoration. Yes, Huiyi is a big fan of handmade items. 
                    Huiyi is very curious and has a strong motivation of trying new stuff all the time. No matter it's a new flavor of an old favorite, or a new version of traditional goods. You can regard her as one of those early adopters.
                </p>
                <p>
                    Oh wow, this Huiyi girl sounds perfect. Does she not have any weaknesses?
                    Well if you meet her, you would notice that she talks a bit quietly. Yes, she is a bit shy at first sight. But once you get to know her a bit more, you will find she is super super funny.
                    Also, Huiyi is horrible, horrible when it comes to games. She lost almost all the games she played, no matter card game, board game, or computer games. 
                    So if you feel a bit down and doubtful about your gaming skills, you should definitely play with Huiyi one time, you will feel much better, promised.
                </p>
            </div>
    </div>
    </>
    )
}

export default PersonalLetter
