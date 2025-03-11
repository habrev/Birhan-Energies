from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data to serve
data = {
    'model_output': {
        'volatility': 0.04,
        'average_price_change': 1.2,
        'accuracy': 0.88
    },
    'datasets': {
        'historical_data': 'path_to_csv_file.csv',
        'economic_events': 'path_to_events_data.csv'
    }
}

# Route to serve model outputs
@app.route('/api/model-output', methods=['GET'])
def get_model_output():
    return jsonify(data['model_output'])

# Route to serve datasets
@app.route('/api/datasets', methods=['GET'])
def get_datasets():
    return jsonify(data['datasets'])

if __name__ == '__main__':
    app.run(debug=True)
