# Chatbot Deployment with Flask and JavaScript

This project is a **modified version** of the chatbot deployment tutorial from [python-engineer/pytorch-chatbot](https://github.com/python-engineer/pytorch-chatbot), deployed using Flask and JavaScript.  
The frontend code is adapted from [hitchcliff/front-end-chatjs](https://github.com/hitchcliff/front-end-chatjs).

This project provides **two deployment options**:
1. Deploy within a Flask app using Jinja2 templates.
2. Serve only the Flask prediction API. The HTML and JavaScript files can be included in any frontend application (with minimal modifications) and run completely separate from the Flask app.

## Modifications Made

- Modified `intents.json` with new intents and responses
- Updated frontend code for better integration with the Flask backend
- Fixed minor bugs and improved project structure

## Initial Setup

Clone the repository and create a virtual environment:

```bash
$ git clone https://github.com/your-username/your-repo.git
$ cd your-repo
$ python3 -m venv venv
$ . venv/bin/activate
```

Install dependencies
```bash
$ (venv) pip install Flask torch torchvision nltk
```

Install NLTK packages
```bash
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```

Modify `intents.json` to customize your chatbot.

Train the model:
```bash
$ (venv) python train.py
```

Test the chatbot in the console:
```bash
$ (venv) python chat.py
```


## Credits

Original chatbot tutorial: python-engineer/pytorch-chatbot
Frontend code: hitchcliff/front-end-chatjs
This modified project is licensed under the MIT License.

## License

This project is based on python-engineer/chatbot
 and [hitchcliff/front-end-chatjs], both MIT licensed.
My modifications are also licensed under the MIT License.



