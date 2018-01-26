AmCharts.makeChart("chartdiv_pendidikan", {
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
            {"id":"ID-AC", "color":"#1f0d5b", "title": "Aceh, 81%"},
            {"id":"ID-SU", "color":"#1f0d5b", "title": "Sumatera Utara, 78%"},
            {"id":"ID-SB", "color":"#1f0d5b", "title": "Sumatera Barat, 81%"},
            {"id":"ID-KR", "color":"#1f0d5b", "title": "Kepulauan Riau, 79%"},
            {"id":"ID-SS", "color":"#1f0d5b", "title": "Sumatera Selatan, 73%"},
            {"id":"ID-RI", "color":"#1f0d5b", "title": "Riau, 76%"},
            {"id":"ID-JA", "color":"#1f0d5b", "title": "Jambi, 76%"},
            {"id":"ID-BE", "color":"#1f0d5b", "title": "Bengkulu, 77%"},
            {"id":"ID-LA", "color":"#1f0d5b", "title": "Lampung, 78%"},
            {"id":"ID-BB", "color":"#1f0d5b", "title": "Bangka Belitung, 68.5%"},

            /**Pulau Jawa**/
            {"id":"ID-JK", "color":"#1f0d5b", "title": "Jakarta, 66.5%"},
            {"id":"ID-BT", "color":"#1f0d5b", "title": "Banten, 72%"},
            {"id":"ID-JB", "color":"#1f0d5b", "title": "Jawa Barat, 70%"},
            {"id":"ID-JT", "color":"#1f0d5b", "title": "Jawa Tengah, 72.5%"},
            {"id":"ID-JI", "color":"#1f0d5b", "title": "Jawa Timur, 72%"},
            {"id":"ID-YO", "color":"#1f0d5b", "title": "Yogyakarta, 74%"},

            /**Pulau Bali, NTB, NTT**/
            {"id":"ID-BA", "color":"#1f0d5b", "title": "Bali, 75%"},
            {"id":"ID-NB", "color":"#1f0d5b", "title": "NTB, 74%"},
            {"id":"ID-NT", "color":"#1f0d5b", "title": "NTT, 75%"},

            /**Pulau Kalimantan**/
            {"id":"ID-KB", "color":"#1f0d5b", "title": "Kalimantan Barat, 68.5%"},
            {"id":"ID-KT", "color":"#1f0d5b", "title": "Kalimantan Tengah, 71%"},
            {"id":"ID-KS", "color":"#1f0d5b", "title": "Kalimantan Selatan, 72.5%"},
            {"id":"ID-KI", "color":"#1f0d5b", "title": "Kalimantan Timur, 80%"},
            {"id":"ID-KU", "color":"#1f0d5b", "title": "Kalimantan Utara, 75%"},

            /**Pulau Sulawesi**/
            {"id":"ID-SA", "color":"#1f0d5b", "title": "Sulawesi Utara, 77%"},
            {"id":"ID-ST", "color":"#1f0d5b", "title": "Sulawesi Tengah, 72%"},
            {"id":"ID-SN", "color":"#1f0d5b", "title": "Sulawesi Selatan, 72%"},
            {"id":"ID-SG", "color":"#1f0d5b", "title": "Sulawesi Tenggara, 75%"},
            {"id":"ID-GO", "color":"#1f0d5b", "title": "Gorontalo, 76%"},
            {"id":"ID-SR", "color":"#1f0d5b", "title": "Sulawesi Barat, 71%"},

            /**Pulau Maluku dan Papua**/
            {"id":"ID-MA", "color":"#1f0d5b", "title": "Maluku, 75%"},
            {"id":"ID-MU", "color":"#1f0d5b", "title": "Maluku Utara, 75%"},
            {"id":"ID-PA", "color":"#34198e", "title": "Papua, 55%"},
            {"id":"ID-PB", "color":"#1f0d5b", "title": "Papua Barat, 74.5%"}
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
            "title": "Aceh, 81%",
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
                "title": "Sumatera Utara, 78%",
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
                "title": "Sumatera Barat, 81%",
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
                "title": "Riau, 76%",
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
                "title": "Kepulauan Riau, 79%",
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
                "title": "Sumatera Selatan, 73%",
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
                "title": "Jambi, 76%",
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
                "title": "Bengkulu, 77%",
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
                "title": "Lampung, 78%",
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
                "title": "Bangka Belitung, 68.5%",
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
                "title": "Banten, 72%",
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
                "title": "DKI Jakarta, 66.5%",
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
                "title": "Jawa Barat, 70%",
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
                "title": "Jawa Tengah, 72.5%",
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
                "title": "Jawa Timur, 72%",
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
                "title": "Yogyakarta, 72%",
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
                "title": "Bali, 75%",
                "zoomLevel": 5,
            },
            {
                /**NTB**/
                "latitude": -8.659,
                "longitude": 117.3616,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Nusa Tenggara Barat, 74%",
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
                "title": "Nusa Tenggara Timur, 75%",
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
                "title": "Kalimantan Barat, 68.5%",
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
                "title": "Kalimantan Tengah, 75%",
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
                "title": "Kalimantan Selatan, 72.5%",
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
                "title": "Kalimantan Timur, 80%",
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
                "title": "Kalimantan Utara, 75%",
                "zoomLevel": 5,
            },
            {
                /**Sulawesi Utara**/
                "latitude": 0.6274,
                "longitude": 123.9750,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sulawesi Utara, 77%",
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
                "title": "Sulawesi Tengah, 72%",
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
                "title": "Sulawesi Selatan, 72%",
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
                "title": "Sulawesi Tenggara, 75%",
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
                "title": "Gorontalo, 76%",
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
                "title": "Sulawesi Barat, 71%",
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
                "title": "Maluku, 75%",
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
                "title": "Maluku Utara, 75%",
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
                "title": "Papua Barat, 74.5%",
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
                "title": "Papua, 55%",
                "zoomLevel": 5,
            },
        ],

    },
    "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000"
    },
    "legend": {
        "width": "100%",
        "divId": "legenddiv_pendidikan",
        "align": "center",
        data: [{
            title: "40%-60%",
            color: "#34198e"
        }, {
            title: "60%-90%",
            color: "#1f0d5b"
        }]
    },
});
