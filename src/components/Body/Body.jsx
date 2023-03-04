import React from 'react'
import './Body.css'
import { post1, post2, post3, post4 } from '../../assets'

const Body = () => {
  return (
    <div className='body-container'>
      <header>
        <h3>Trending Stories</h3>
      </header>
      <div className="body-content">
        <div className="content1">
          <figure>
            <img src={post1} alt="" />
            <caption>Move.co donates drones ahead of elections</caption>
            <figcaption>Move.co, the top leading fintec <br /> company that operates in the state has pledge to donate drones to monitor the upcoming Kwara state governorship election.</figcaption>
            <button>Read More</button>
          </figure>
          <figure className='figure2'>
            <img src={post4} alt="" />
            <caption>INEC Chairman in Ilorin, Kwara State</caption>
            <figcaption>Professor Mahmoud Yakub, Chairman of INEC, has expressed the readiness of the commission.. </figcaption>
            <button>Read More</button>
          </figure>
        </div>
        <div className="content2">
          <figure>
            <img src={post2} alt="" />
            <caption>Kwara states Citizens prepares for upcoming Governorship Election</caption>
            <figcaption>The 2023 Kwara State gubernatorial election will take place on 11 March 2023, to elect the Governor of Kwara State, concurrent with elections to the Kwara State House of Assembly as well as twenty-seven other gubernatorial elections and elections to all other state houses of assemble. Incumbent APC Governor AbdulRahman AbdulRazaq has been renominated by his party. As a result of the primaries scheduled for 4 April and 9 June 2022, the All Progressive Party Assembly re-nominated Abdul Razak without opposition on 26 May, while the People's Democratic Party (PDP) nominated Shuaib Yaman Abdullahi on 25th May. For the Social Democratic Party, its first primary on 25 May was annulled leading to a rerun on 30 May; both primaries were won by Hakeem Lawa, amongst a few others. With 30 per cent of the registered voters in the state saying they are ready to vote...</figcaption>
            <button>Read More</button>
          </figure>
        </div>
        <div className="content3">
          <figure>
            <img src={post3} alt="" />
            <caption>Massive youth turn out</caption>
            <figcaption>With over 1.4 million voters registered in Kwara for the March 2023 Kwara gubernatorial election, will turnout increase, especially as young people make up the largest electorate? Within a week, Kwara's youth will have the opportunity to vote for the government they believe will represent their future. Regarding electoral rolls across the state, it is believed that voter turnout in the next election would increase compared to the previous one due to the level of awareness among young people. Questions have been raised as to whether the young people who make up the mass will lead to higher voter turnout compared to past elections when voter turn out was low. The answer to these questions is yes. It's not only about the young people who make up the biggest bloc, but also about the figure party...</figcaption>
            <button>Read More</button>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Body