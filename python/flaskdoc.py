from flask import Flask, jsonify, request,send_file
from flask_cors import CORS
from docx import Document

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def getrequest():
    return jsonify({'message': "This server doesn't accept GET request" }),500


def fill_template(template_path,output_path,data):
    doc=Document(template_path)

    for paragraph in doc.paragraphs:
        for key,value in data.items():
            if key in paragraph.text:
                for run in paragraph.runs:
                    run.text=run.text.replace(key,value)

    doc.save(output_path)
@app.route('/template-filling',methods=['POST'])
def template_filling():
    try:
        data=request.json
        print(data)
        template_path = data.get('input_file')
        data_dict = data.get('data')
        output_path_file = 'result.docx'
        fill_template(template_path,output_path_file,data_dict)
        return send_file(output_path_file, as_attachment=True,mimetype='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        

        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    


if __name__ == '__main__':
    app.run(debug=True)