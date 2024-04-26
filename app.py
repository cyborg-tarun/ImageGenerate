from flask import Flask, send_file, request,jsonify
from flask_cors import CORS
from utils import generate_image
from utils import generate_image, generate_related_words


app = Flask(__name__)
CORS(app)


@app.route('/generate', methods=['GET'])
def generate_image_api():
    prompt = request.args.get('prompt')
    if not prompt:
        return "Error: prompt parameter is required", 400
    image_path = generate_image(prompt)
    return send_file(image_path, as_attachment=True)

@app.route('/generate-new-words', methods=['GET'])
def generate_new_words():
    data = request.args.get('words')
    if not data:
        return jsonify({'error': 'Invalid request data'}), 400
   
    new_gen_words=generate_related_words(data)
    return jsonify({'new_gen_words': new_gen_words}), 200



if __name__ == '__main__':
    app.run(debug=True)
    