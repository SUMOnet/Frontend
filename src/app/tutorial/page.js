import React from 'react'

import style from './tutorial.css'

const Tutorial = (props) => {
  return (
    <div>
      <h1 className='title'>Tutorial Page</h1>
      <div className='container'>
      <div className='usage'>
        <h2>How to use SUMOnet?</h2>
        <p>You can install SUMOnet as a python package as well: pip install sumonet
        <br/>
        You can clone SUMOnet from: github.com/berkedilekoglu/SUMOnet</p>
      </div>
      <div className='part1'>
        <h2>1. How to Load Data?</h2>
        <p>You can use our experimental data by using Data Class</p>
        <ul>
          <li>By using Data class - It does not take any input variable and returns our dbPTM data as Train and Test samples and their labels</li>
          <li>Data class gives X_train, X_test as a list of strings (21-mers), so you need to encode them</li>
          <li>y_train and y_test are lists of integers (labels), so you need to convert them to a 2-d array for feeding our model.</li>
        </ul>
        <p>
        <b>Python Code:</b>
<br/>
from sumonet.utils.data_pipe import Data
<br/>
data = Data()
<br/>
X_train, y_train, X_test, y_test = data.load_sumonet_experiment_data()
        </p>
        <p>
       <b> Example for Training sequences: </b>[RTSHLKQCAVKMEVGPQLLLQ, EDSARPGAHAKVKKLFVGGLK, EKEPPGQLQVKAQPQARMTVP, NMMKTSEAKIKHFDGEDYTCI, PVQKHAIPIIKEKRDLMACAQ]
        <br/>
<b>Example for Training labels:</b> [1, 1, 1, 1, 1]
        </p>
      </div>
      <div className='part2'>
      <h2>2. How to Encode?</h2>
      <p>
      <b>Encoding class </b>takes 2 parameters: encoderTypes and scaler.</p>
      <ul>
        <li>encoderTypes is initially defined as blosum62 according to our experiments, but you can use one-hot or nlf also.</li>
        <li>scaler is initially defined as True according to our experiments. It means that data will be passed into min-max scaler. If you want, you can cancel it.</li>
        <li>You can change the encoder type with the set_encoder_type(encoderType) function.</li>
      </ul>
      <p> <b>Python Code:</b> <br/>
      from sumonet.utils.encodings import Encoding
    <br/>
encoder = Encoding(encoderType='one-hot') ## Encoding(encoderType = 'blosum62', scale = True)
    <br/>
X_train_encoded = encoder.encode_data(X_train)
      </p>
      </div>
      <div className='part3'>
        <h2>3. How to Train SUMOnet Model?</h2>
        <ul>
          <li> You can use our architecture with randomly initialized weights.</li>
          <li> You can also use our pre-trained model in two different weights:
            <ol>
              <li>Model that was trained on the entire data (Train + Test) - This model is in production.</li>
              <li> Model that was trained only on Training data - If you want to use our test data to avoid information leak.</li>
            </ol>
          </li>
        </ul>
        <p><b>Important Note: </b>SUMOnet will be initialized with the input shape of blosum62 encoded vectors.
<br/>
First we need to get 2d array for training</p>
    <p> <b>Python Code:</b>
    <br/>
import numpy as np
    <br/>
y_train = np.asarray(y_train)
    <br/>
y_train = (y_train[:,None] == np.arange(2)).astype(int)</p>
    <p>Now we can train randomly initialized SUMOnet model</p>
    <p>
    <b>Python Code:</b> <br/>
from sumonet.model.architecture import SUMOnet
<br/>
model = SUMOnet(input_shape = X_train_encoded.shape[1:] ) #Input shape is the shape of blosum62 vector in default. But you can set your input shape for randomly initialized models.
<br/>
model.compile(loss='categorical_crossentropy', optimizer='Adam', metrics=['accuracy'])
<br/>
model.fit(X_train_encoded,y_train,epochs=3)
    </p>
      <ul>
          <li> You can use pre-trained models.</li>
          <li> You can also use our pre-trained model in two different weights:
            <ol>
              <li>Model that was trained on the entire data (Train + Test) - This model is in production.</li>
              <li> Model that was trained only on Training data - If you want to use our test data to avoid information leak.</li>
            </ol>
          </li>
        </ul>
        <p> <b>Python Code:</b> <br/>
from sumonet.model.architecture import SUMOnet
<br/>
SUMOnet3_model = SUMOnet()
<br/>
SUMOnet3_model.load_weights()
<br/>
#This model was trained on entire (Train + Test) data! If you want to use model that was trained on only Train samples please use load_weights(model_state='on_train_data')</p>
      <p>Now we can make predictions</p>
      <p>
    <b>  Python Code:</b> <br/>
encoder = Encoding(encoderType='blosum62') ## Firstly we need to encode our test data
<br/>
X_test_encoded = encoder.encode_data(X_test)
<br/>
y_preds = SUMOnet3_model.predict(X_test_encoded)
<br/>
      </p>
      </div>
      <div className='part4'>
      <h2>4. How to Evaluate Results?</h2>
      <p>Evaluate functions are organized according to our evaluation set-up so you can use them directly in comparisons
<br/>
evaluate function takes 3 arguments:</p>
      <ul>
        <li>y_test: Gold labels should be in 1-d, so if yours is 2-d like ours, use argmax(-1).</li>
        <li>y_pred: Predictions are already in a 2-d vector format.</li>
        <li>String or array that includes metrics.</li>
      </ul>
      <p> <b>Python Code:</b> <br/>
y_test = np.asarray(y_test) #Convert list of integers to 2d array
<br/>
y_test = (y_test[:,None] == np.arange(2)).astype(int)
<br/>
f1_score = evaluate(y_test.argmax(-1),y_preds,'f1')
<br/>
mcc = evaluate(y_test.argmax(-1),y_preds,'mcc')
<br/>
roc = evaluate(y_test.argmax(-1),y_preds,'roc')
<br/>
aupr = evaluate(y_test.argmax(-1),y_preds,'aupr')</p>
 <p>You can calculate all results at once.
<br/>
This calculation outputs a dictionary.</p>
    <p>
    <b>Python Code:</b>
<br/> 
evaluate(y_test.argmax(-1),y_preds,['f1','mcc','roc','aupr'])
    </p>
    <p>Output will look like this:
<br/>
'aupr': 0.7598319565641193, 'f1': 0.6580921757770631, 'mcc': 0.5694399870602478, 'roc': 0.8713018549625735</p>
      </div>
    </div>
    </div>
  )
}

export default Tutorial
