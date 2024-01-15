# import the necessary modules
from flask import Flask , render_template , request , jsonify

# importing sentiment_analysis file as sa

import sentiment_analysis as sa
from sentiment_analysis import predict

app = Flask(__name__)

# app route for index page
@app.route('/')
def home():
    return render_template('index.html')

# write a route for post request
@app.route('' , methods = [''])
def review():

    # extract the customer_review by writing the appropriate 'key' from the JSON data
    review = request.json.get('')

    # check if the customer_review is empty, return error
    if not review:

        return jsonify({'status' : 'error' , 
                        'message' : 'Empty response'})
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():   
    input_text=request.json.get("text") 
    if not input_text:
        response={
          "status":"error",
          "message":"Please enter some text"
       }
        return jsonify(response)
    else:
        predicted_emotion,predict_emotion_img_url=predict(input_text)
        response={
           "status":"success",
          "data":{
            "predicted_emotion":predict_emotion,
            "predict_emotion_img_url":predict_emotion_img_url,
          }
        }
        return jsonify(response)


if __name__  ==  "__main__":
    app.run(debug = True)