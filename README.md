# Brent Oil Price Change Point Analysis

## Overview

This project focuses on analyzing how political and economic events affect Brent oil prices. The goal is to identify key events such as political decisions, conflicts in oil-producing regions, global economic sanctions, and changes in OPEC policies that influence Brent oil prices.

The analysis will provide actionable insights to help investors, policymakers, and energy companies make informed decisions in a volatile market.

## Business Objective

The main objective of this analysis is to detect changes in Brent oil prices that are linked to significant political and economic events over the past decade. This information will be valuable for:

- **Investors**: Making better investment decisions and managing risks.
- **Policymakers**: Formulating strategies for economic stability and energy security.
- **Energy Companies**: Forecasting oil prices, planning operations, and controlling costs.

## Project Goals

1. **Identify Key Events**: Analyze historical data to find key events that significantly impacted Brent oil prices.
2. **Measure Price Impact**: Quantify how these events affected price changes in the oil market.
3. **Provide Actionable Insights**: Deliver clear insights to guide investment strategies, policy development, and operational planning.

## Methodology

- **Change Point Detection**: Use statistical models and change point analysis to detect shifts in the oil price time series.
- **Event Correlation**: Link detected changes in price to specific political or economic events.
- **Data Sources**: Historical Brent oil price data, geopolitical event data, OPEC policy changes, and global economic sanctions.

## Project Structure
├── .github.<br>
│   └── workflows<br>
│       └── unittest.yaml<br>
├── .vscode<br>
│   └── settings.json<br>
├── DashBoard<br>
│   └── Flask_server<br>
│   |    └── image<br>
│   |    └── public<br>
│   |    └── api,py<br>
├───|              
│   └── React_app<br>
│       └── public<br>
│       └── src<br>
│       └── index.html<br>
│       └── package.json<br>
├── notebooks<br>
│   ├── ARIMA_model.ipynb<br>
│   ├── change_point_analysis.ipynb<br>
|   ├── economic_indicator.ipynb<br>
|   ├── EDA.ipynb<br>
│   ├── LSTM_Model.ipynb<br>
│   ├── README.md
│   
├──sam<br>          # virtual environment 
├──scripts<br>
|   ├──__init__.py<br>
|   ├──ARIMA.py<br>
|   ├──change_point_analysis.py<br>
|   ├──LSTM.py<br>
│   ├─utils.py<br>
│   
├── .gitignore<br>
├──  README.md<br>
├──  requirements.txt <br>

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/habrev/Birhan-Energies.git
   cd Birhan_Energies
2. **Set up Python environment**: Create a virtual environment and activate it:
   ```bash
    python -m venv .venv
    source .venv/bin/activate  # For Linux/macOS
    .venv\Scripts\activate  # For Windows

2. **Install the required packages**: Install the dependencies from the `requirements.txt` file:
   ```bash
    pip install -r requirements.txt

## Contributing
Contributions to improve this project are welcome. If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
