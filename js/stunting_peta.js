AmCharts.makeChart("chartdiv_stunting", {
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
            {"id":"ID-AC", "color":"#d37202", "title":"Aceh, 41.5%"},
            {"id":"ID-SU", "color":"#d37202", "title":"Sumatera Utara, 42.5%"},
            {"id":"ID-SB", "color":"#ff9116", "title":"Sumatera Barat, 39.2%"},
            {"id":"ID-KR", "color":"#FFC67C", "title":"Kepulauan Riau, 26.3%"},
            {"id":"ID-SS", "color":"#ff9116", "title":"Sumatera Selatan, 36.7%"},
            {"id":"ID-RI", "color":"#ff9116", "title":"Riau, 36.8%"},
            {"id":"ID-JA", "color":"#ff9116", "title":"Jambi, 37.9%"},
            {"id":"ID-BE", "color":"#ff9116", "title":"Bengkulu, 39.7%"},
            {"id":"ID-LA", "color":"#d37202", "title":"Lampung, 42.6%"},
            {"id":"ID-BB", "color":"#FFC67C", "title":"Bangka Belitung, 28.7%"},

            /**Pulau Jawa**/
            {"id":"ID-JK", "color":"#FFC67C", "title":"Jakarta, 27.5%"},
            {"id":"ID-BT", "color":"#ff9116", "title":"Banten, 33%"},
            {"id":"ID-JB", "color":"#ff9116", "title":"Jawa Barat, 35.3%"},
            {"id":"ID-JT", "color":"#ff9116", "title":"Jawa Tengah, 36.8%"},
            {"id":"ID-JI", "color":"#ff9116", "title":"Jawa Timur, 35.8%"},
            {"id":"ID-YO", "color":"#FFC67C", "title":"Yogyakarta, 27.2%"},

            /**Pulau Bali, NTB, NTT**/
            {"id":"ID-BA", "color":"#ff9116", "title":"Bali, 32.5%"},
            {"id":"ID-NB", "color":"#d37202", "title":"NTB, 45.3%"},
            {"id":"ID-NT", "color":"#d37202", "title":"NTT, 51.7%"},

            /**Pulau Kalimantan**/
            {"id":"ID-KB", "color":"#ff9116", "title":"Kalimantan Barat, 38.6%"},
            {"id":"ID-KT", "color":"#d37202", "title":"Kalimantan Tengah, 41.3%"},
            {"id":"ID-KS", "color":"#d37202", "title":"Kalimantan Selatan, 44.2%"},
            {"id":"ID-KI", "color":"#FFC67C", "title":"Kalimantan Timur, 27.5%"},
            {"id":"ID-KU", "color":"#FFC67C", "title":"Kalimantan Utara, 27.5%"},

            /**Pulau Sulawesi**/
            {"id":"ID-SA", "color":"#ff9116", "title":"Sulawesi Utara, 34.8%"},
            {"id":"ID-ST", "color":"#d37202", "title":"Sulawesi Tengah, 41.1%"},
            {"id":"ID-SN", "color":"#d37202", "title":"Sulawesi Selatan, 40.9%"},
            {"id":"ID-SG", "color":"#d37202", "title":"Sulawesi Tenggara, 42.6%"},
            {"id":"ID-GO", "color":"#ff9116", "title":"Gorontalo, 38.9%"},
            {"id":"ID-SR", "color":"#d37202", "title":"Sulawesi Barat, 48%"},

            /**Pulau Maluku dan Papua**/
            {"id":"ID-MA", "color":"#d37202", "title":"Maluku, 40.6%"},
            {"id":"ID-MU", "color":"#d37202", "title":"Maluku Utara, 41%"},
            {"id":"ID-PA", "color":"#d37202", "title":"Papua, 40.1%"},
            {"id":"ID-PB", "color":"#d37202", "title":"Papua Barat, 44.6%"}
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
            "title": "Aceh, 41.5%",
            "zoomLevel": 5
        },
            { /**Data Sumatera Utara**/
                "latitude": 2.1154,
                "longitude": 99.5451,
                "type": "circle",
                "scale": 0.3,
                "color": "#FFFFFF",
                "labelColor": "#ffffff",
                "labelShiftY": 2,
                "title": "Sumatera Utara, 42.5%",
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
                "title": "Sumatera Barat, 39.2%",
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
                "title": "Riau, 36.8%",
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
                "title": "Kepulauan Riau, 26.3%",
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
                "title": "Sumatera Selatan, 36.7%",
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
                "title": "Jambi, 37.9%",
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
                "title": "Bengkulu, 39.7%",
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
                "title": "Lampung, 42.6%",
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
                "title": "Bangka Belitung, 28.7%",
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
                "title": "Banten, 33%",
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
                "title": "DKI Jakarta, 27.5%",
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
                "title": "Jawa Barat, 35.3%",
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
                "title": "Jawa Tengah, 36.8%",
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
                "title": "Jawa Timur, 35.8%",
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
                "title": "DI Yogyakarta, 27.2%",
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
                "title": "Bali, 32.5%",
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
                "title": "NTB, 45.3%",
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
                "title": "NTT, 51.7%",
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
                "title": "Kalimantan Barat, 38.6%",
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
                "title": "Kalimantan Tengah, 41.3%",
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
                "title": "Kalimantan Selatan, 40.9%",
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
                "title": "Kalimantan Timur, 27.5%",
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
                "title": "Kalimantan Utara, 27.5%",
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
                "title": "Sulawesi Utara, 34.8%",
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
                "title": "Sulawesi Tengah, 41.1%",
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
                "title": "Sulawesi Selatan, 40.9%",
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
                "title": "Sulawesi Tenggara, 42.6%",
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
                "title": "Gorontalo, 38.9%",
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
                "title": "Sulawesi Barat, 48%",
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
                "title": "Maluku, 40.6%",
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
                "title": "Maluku Utara, 41%",
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
                "title": "Papua Barat, 44.6%",
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
                "title": "Papua, 40.1%",
                "zoomLevel": 5,
            },
        ],

    },
    "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000"
    },
    "legend": {
        "backgroundColor": "#0c0000",
        "backgroundAlpha": 0.7,
        "align": "center",
        data: [{
            title: "Presentase 10%-30%",
            color: "#FFC67C"
        }, {
            title: "Presentase 30%-40%",
            color: "#ff9116"
        }, {
            title: "Presentase 40%-60%",
            color: "#d37202"
        }]
    },
});