AmCharts.makeChart("chartdiv_perkawinan", {
    /**
     * this tells amCharts it's a map
     */

    "type": "map",
    "theme":"chalk",

    /**
     * create data provider object
     * map properly is usually the same as the name of the map file
     * getAreasFromMap indicates that amMap should real all the areas available
     * in the map data and treat them as they are included in your data provider
     * in case you don't set it true, all the areas except listed in data
     * provider will be treated as unlisted
     */

    "dataProvider": {
        "map": "indonesiaLow",

        /**Provinsi Aceh**/
        "areas":[
            /**Pulau Sumatera**/
            {"id":"ID-AC", "color":"#ff216e", "title":"Aceh, 14%"},
            {"id":"ID-SU", "color":"#ff216e", "title":"Sumatera Utara, 17%"},
            {"id":"ID-SB", "color":"#ff216e", "title":"Sumatera Barat, 20%"},
            {"id":"ID-KR", "color":"#ff216e", "title":"Kepulauan Riau, 21%"},
            {"id":"ID-SS", "color":"#a31647", "title":"Sumatera Selatan, 59%"},
            {"id":"ID-RI", "color":"#ce1c5a", "title":"Riau, 35%"},
            {"id":"ID-JA", "color":"#7a1135", "title":"Jambi, 71%"},
            {"id":"ID-BE", "color":"#7a1135", "title":"Bengkulu, 75%"},
            {"id":"ID-LA", "color":"#ff216e", "title":"Lampung, 28%"},
            {"id":"ID-BB", "color":"#7a1135", "title":"Bangka Belitung, 66%"},

            /**Pulau Jawa**/
            {"id":"ID-JK", "color":"#ff216e", "title":"Jakarta, 22%"},
            {"id":"ID-BT", "color":"#ff216e", "title":"Banten, 22%"},
            {"id":"ID-JB", "color":"#ce1c5a", "title":"Jawa Barat, 33%"},
            {"id":"ID-JT", "color":"#ce1c5a", "title":"Jawa Tengah, 32%"},
            {"id":"ID-JI", "color":"#ce1c5a", "title":"Jawa Timur, 32%"},
            {"id":"ID-YO", "color":"#ff216e", "title":"Yogyakarta, 16%"},

            /**Pulau Bali, NTB, NTT**/
            {"id":"ID-BA", "color":"#a31647", "title":"Bali, 49%"},
            {"id":"ID-NB", "color":"#a31647", "title":"NTB, 56%"},
            {"id":"ID-NT", "color":"#a31647", "title":"NTT, 45%"},

            /**Pulau Kalimantan**/
            {"id":"ID-KB", "color":"#7a1135", "title":"Kalimantan Barat, 74%"},
            {"id":"ID-KT", "color":"#7a1135","title":"Kalimanatan Tengah, 79%"},
            {"id":"ID-KS", "color":"#a31647", "title":"Kalimantan Selatan, 59%"},
            {"id":"ID-KI", "color":"#7a1135", "title":"Kalimantan Timur, 65%"},
            {"id":"ID-KU", "color":"#7a1135", "title":"Kalimantan Utara, 85%"},

            /**Pulau Sulawesi**/
            {"id":"ID-SA", "color":"#7a1135", "title":"Sulawesi Utara, 56%"},
            {"id":"ID-ST", "color":"#7a1135", "title":"Sulawesi Tengah, 75%"},
            {"id":"ID-SN", "color":"#a31647", "title":"Sulawesi Selatan, 56%"},
            {"id":"ID-SG", "color":"#7a1135", "title":"Sulawesi Tenggara, 70%"},
            {"id":"ID-GO", "color":"#7a1135", "title":"Gorontalo, 73%"},
            {"id":"ID-SR", "color":"#7a1135", "title":"Sulawesi Barat, 77%"},

            /**Pulau Maluku dan Papua**/
            {"id":"ID-MA", "color":"#ff216e", "title":"Maluku, 23%"},
            {"id":"ID-MU", "color":"#7a1135", "title":"Maluku Utara, 64%"},
            {"id":"ID-PA", "color":"#a31647", "title":"Papua, 58%"},
            {"id":"ID-PB", "color":"#7a1135", "title":"Papua Barat, 71%"}
        ],
        "images": [{
            /**Data Aceh**/
            "latitude": 4.6951,
            "longitude": 96.7494,
            "type": "circle",
            "scale": 0.3,
            "color": "#FFFFFF",
            "labelColor": "#ffffff",
            "labelShiftY": 2,
            "title": "Aceh, 14%",
            "zoomLevel": 5,
        },
            { /**Data Sumatera Utara**/
                "latitude": 2.1154,
                "longitude": 99.5451,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sumatera Utara, 17%",
                "zoomLevel": 5,
            },
            {
                /**Data Sumatera Barat**/
                "latitude": 0.01000,
                "longitude": 99.900,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sumatera Barat, 20%",
                "zoomLevel": 5,
            },
            {
                /**Data Riau**/
                "latitude": 0.2933,
                "longitude": 101.7068,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Riau, 35%",
                "zoomLevel": 5,
            },
            {
                /**Data Kepulauan Riau**/
                "latitude": 1.1114,
                "longitude": 103.9876,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Kepulauan Riau, 21%",
                "zoomLevel": 5,
            },
            {
                /**Data Sumatera Selatan**/
                "latitude": -3.3194,
                "longitude": 104.9144,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sumatera Selatan, 59%",
                "zoomLevel": 5,
            },
            {
                /**Data Jambi**/
                "latitude": -1.4852,
                "longitude": 103.7381,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Jambi, 71%",
                "zoomLevel": 5,
            },
            {
                /**Data Bengkulu**/
                "latitude": -3.5778,
                "longitude": 102.3464,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Bengkulu, 75%",
                "zoomLevel": 5,
            },
            {
                /**Data Lampung**/
                "latitude": -4.5778,
                "longitude": 105.3464,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Lampung, 28%",
                "zoomLevel": 5,
            },
            {
                /**Data Kepulauan Bangka Belitung**/
                "latitude": -2.7411,
                "longitude": 106.4406,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Bangka Belitung, 66%",
                "zoomLevel": 5,
            },
            {
                /**Data Banten**/
                "latitude": -6.4058,
                "longitude": 106.0640,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Banten, 22%",
                "zoomLevel": 5,
            },
            {
                /**Data Jakarta**/
                "latitude": -6.1751,
                "longitude": 106.8650,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "DKI Jakarta, 22%",
                "zoomLevel": 5,
            },
            {
                /**Jawa Barat**/
                "latitude": -7.0909,
                "longitude": 107.6689,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Jawa Barat,33%",
                "zoomLevel": 5,
            },
            {
                /**Jawa Tengah**/
                "latitude": -7.1510,
                "longitude": 110.1403,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Jawa Tengah, 32%",
                "zoomLevel": 5,
            },
            {
                /**Jawa Timur**/
                "latitude": -7.1561,
                "longitude": 112.2384,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Jawa Timur, 32%",
                "zoomLevel": 5,
            },
            {
                /**Yogyakarta**/
                "latitude": -7.8754,
                "longitude": 110.4262,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Yogyakarta, 16%",
                "zoomLevel": 5,
            },
            {
                /**Bali**/
                "latitude": -8.3754,
                "longitude": 115.2262,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Bali, 49%",
                "zoomLevel": 5,
            },
            {
                /**NTB**/
                "latitude": -8.659,
                "longitude": 117.3616,
                "type": "circle",
                "scale": 0.8,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Nusa Tenggara Barat, 56%",
                "zoomLevel": 5,
            },
            {
                /**NTT**/
                "latitude": -8.6574,
                "longitude": 121.0794,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "NTT, 45%",
                "zoomLevel": 5,
            },
            {
                /**Kalimantan Barat**/
                "latitude": 0.1000,
                "longitude": 109.4753,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Kalimantan Barat, 74%",
                "zoomLevel": 5,
            },
            {
                /**Kalimantan Tengah**/
                "latitude": -2.181,
                "longitude": 113.5824,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Kalimantan Tengah, 79%",
                "zoomLevel": 5,
            },
            {
                /**Kalimantan Selatan**/
                "latitude": -3.0926,
                "longitude": 115.2838,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Kalimantan Selatan, 59%",
                "zoomLevel": 5,
            },
            {
                /**Kalimantan Timur**/
                "latitude": 0.538,
                "longitude": 116.4194,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Kalimantan Timur, 65%",
                "zoomLevel": 5,
            },
            {
                /**Kalimantan Utara**/
                "latitude": 3.1974,
                "longitude": 116.7194,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Kalimantan Utara, 85%",
                "zoomLevel": 5,            },
            {
                /**Sulawesi Utara**/
                "latitude": 0.6274,
                "longitude": 123.9750,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sulawesi Utara, 56%",
                "zoomLevel": 5,
            },
            {
                /**Sulawesi Tengah**/
                "latitude": -1.4300,
                "longitude": 121.4456,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sulawesi Tengah, 75%",
                "zoomLevel": 5,
            },
            {
                /**Sulawesi Selatan**/
                "latitude": -4.9688,
                "longitude": 119.7741,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sulawesi Selatan, 56%",
                "zoomLevel": 5,
            },
            {
                /**Sulawesi Tenggara**/
                "latitude": -4.1449,
                "longitude": 122.1746,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sulawesi Tenggara, 70%",
                "zoomLevel": 5,
            },
            {
                /**Gorontalo**/
                "latitude": 0.6999,
                "longitude": 122.4467,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Gorontalo, 73%",
                "zoomLevel": 5,
            },
            {
                /**Sulawesi Barat**/
                "latitude": -2.841,
                "longitude": 119.2321,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sulawesi Barat, 77%",
                "zoomLevel": 5,
            },
            {
                /**Maluku**/
                "latitude": -3.2385,
                "longitude": 130.1453,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Maluku, 23%",
                "zoomLevel": 5,
            },
            {
                /**Maluku Utara**/
                "latitude": -1.570,
                "longitude": 127.8088,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Maluku Utara, 64%",
                "zoomLevel": 5,
            },
            {
                /**Papua Barat**/
                "latitude": -1.3361,
                "longitude": 133.1747,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Papua Barat, 71%",
                "zoomLevel": 5,
            },
            {
                /**Papua**/
                "latitude": -4.2699,
                "longitude": 138.0804,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": " Papua, 58%",
                "zoomLevel": 5,
            },
        ],

    },
    /**
     * create areas settings
     * autoZoom set to true means that the map will zoom-in when clicked on the area
     * selectedColor indicates color of clicked area
     */

    "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000"
    },

    "mouseWheelZoomEnabled": true,

    /**
     * let's say we want a small map to be displayed, so let's create it
     */

    "smallMap":{}

});