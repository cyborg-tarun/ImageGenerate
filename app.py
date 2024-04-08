from flask import Flask, send_file, request
from flask_cors import CORS
from utils import generate_image

app = Flask(__name__)
CORS(app)


@app.route('/generate', methods=['GET'])
def generate_image_api():
    prompt = request.args.get('prompt')
    if not prompt:
        return "Error: prompt parameter is required", 400
    image_path = generate_image(prompt)
    return send_file(image_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
    

    