#!/usr/bin/python

from flask import Flask, jsonify, abort, request
app = Flask(__name__)

SERVERS = [
    {
        "hostname": "server1",
        "ip": "192.68.0.1"
    },
    {
        "hostname": "server2",
        "ip": "192.168.0.2"
    }
]

@app.route('/api/servers', methods=['GET'])
def server_list():
    return jsonify(servers=SERVERS)

@app.route("/api/servers/<server>", methods=['GET'])
def server_get(server):
    s = (item for item in SERVERS if item['hostname'] == server).next()
    if s is None:
        abort(404)
    return jsonify(server=s)

@app.route("/api/servers", methods=['POST'])
def server_update():
    server = request.get_json()
    if server is not None:
        if "hostname" in server and "ip" in server:
            SERVERS.append(server)
            return jsonify(status="success")
    abort(400)

if __name__ == '__main__':
    app.run(debug=True)
