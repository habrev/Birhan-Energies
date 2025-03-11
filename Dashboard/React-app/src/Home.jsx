import React from 'react';
import history from "./assets/historyoil.png"
import dist from "./assets/dist.png"
import average from "./assets/average.png"

function Home({ selectedItem }) {
  return (
    <div className="home-content">
      <h2>{selectedItem}</h2> {/* Display the name of the selected item */}
      {selectedItem === 'Home' && <div>
    <h2>Understanding the Global Impact of Events on Brent Oil Prices</h2>
The global oil market is highly sensitive to political, economic, and policy shifts, which often lead
 to significant price fluctuations in Brent oil. Understanding how events such as political decisions,
  conflicts in oil-producing regions, international sanctions, and OPEC policy changes influence oil prices
   is crucial for making informed decisions in the energy sector. By analyzing these events, stakeholders 
   such as investors, policymakers, and energy companies can better navigate the complexities of the market,
    manage risks, and plan strategically to ensure economic stability and energy security.

 <h2> Key Events that Shaped Brent Oil Prices Over the Last Decade</h2>
Over the past decade, several political and economic events have had a profound impact on Brent oil prices.
 From geopolitical tensions in oil-producing regions to shifts in global trade policies and sanctions, 
 these events have created periods of heightened volatility in the oil market. By examining these key 
 moments in history, we can identify patterns in how such events influence price changes, providing 
 critical insights for future market forecasting and decision-making in the energy sector.
 <p> For more information visit my <li><a href="https://github.com/habrev/Birhan-Energies" target="_blank" rel="noopener noreferrer">Github</a></li>
 <li><a href="https://www.linkedin.com/in/samuel-g-getahun-30b15b1b5/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
 </p>
 </div>}

      
      {selectedItem === 'Historical Analysis' && <div>historical price of oil 
        <img src={history} alt="Description of Image" className="image-class" />
        <h2>distribution of oil price </h2>
        <img src={dist} alt="Description of Image" className="image-class" />
        <h2>average price of oil per year</h2>
        <img src={average} alt="Description of Image" className="image-class" />

        </div>}
      {selectedItem === 'Forecast' && <div>Here are the forecast details...</div>}
      {selectedItem === 'Filters' && <div>Here are the available filters...</div>}
      {selectedItem === 'Key Metrics' && <div>Here are the key metrics...</div>}
      {selectedItem === 'About' && <div>Learn more about the analysis process...</div>}
    </div>
  );
}

export default Home;
