# grafana-plugin-example

This is an example External Plugin for Grafana.

This app does not do anything useful, it is just to demonstrate how Grafana can be extended using the External Plugin feature discussed in https://github.com/grafana/grafana/issues/3185 and implimented in https://github.com/raintank/grafana/tree/externalPlugin

# How to test
* download and build the externalPlugin branch of Grafana from https://github.com/raintank/grafana/tree/externalPlugin
* Drop the grafana/plugin.json file from this repo into the Grafana plugins dir.  public/app/plugins/*
* start up grafana
* start up the app in this repo. `python app.py`
* Bring up grafana in a browser.

