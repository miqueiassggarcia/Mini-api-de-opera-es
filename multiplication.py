from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/multiplication')
def multiplication():
  num1_str = request.args.get('num1')
  num2_str = request.args.get('num2')

  if num1_str is None or num2_str is None:
    return jsonify({'error': 'Please provide both num1 and num2 parameters'}), 400

  try:
    num1 = float(num1_str)
    num2 = float(num2_str)
  except ValueError:
    return jsonify({'error': 'num1 and num2 must be numbers'}), 400

  result = num1 * num2
  return jsonify({'result': result})

if __name__ == '__main__':
  app.run(debug=True, port=3003)