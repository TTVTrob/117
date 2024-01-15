$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date =new Date()
    let display_date="Date:"+date.toLocaleDateString()
    $(document).ready(function(){
        $('#display-date').html(display_date)
    })

    //  write an event, when Submit button is clicked
    $('').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        const data={text:text_value}
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',
            //  URL to send our request to
            url: '/predict-emotion',

            //  Data to be sent in JSON format
            data : JSON.stringify(review),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                predicted_emotion=result.data.predicted_emotion;
                emo_url=result.data.predicted_emotion_emoji

                //  update the DOM elements
                $("#prediction").html(predicted_emotion)
                $("#prediction").css("display","block")

                //  show them
                $("#emo_img_url").attr('src',emo_url)
                $("#emo_img_url").css("display", "block");

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})