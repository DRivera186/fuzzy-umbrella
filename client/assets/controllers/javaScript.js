var myConfig = {
            type: "pie",
            backgroundColor: "#2B313B",
            plot: {
              borderColor: "#2B313B",
              borderWidth: 5,
              // slice: 90,
              valueBox: {
                placement: 'out',
                text: '%t\n%npv%',
                fontFamily: "Open Sans"
              },
              tooltip: {
                fontSize: '18',
                fontFamily: "Open Sans",
                padding: "5 10",
                text: "%npv%"
              },
              animation: {
                effect: 2,
                method: 5,
                speed: 500,
                sequence: 1
              }
            },
            source: {
              text: 'gs.statcounter.com',
              fontColor: "#8e99a9",
              fontFamily: "Open Sans"
            },
            title: {
              fontColor: "#fff",
              text: 'Chart',
              align: "left",
              offsetX: 10,
              fontFamily: "Open Sans",
              fontSize: 25
            },
            subtitle: {
              offsetX: 10,
              offsetY: 10,
              fontColor: "#8e99a9",
              fontFamily: "Open Sans",
              fontSize: "16",
              text: 'May 2016',
              align: "left"
            },
            plotarea: {
              margin: "20 0 0 0"
            },
            series: [{
              values: [11.38],
              text: "Interest Rate",
              backgroundColor: '#50ADF5',
            }, {
              values: [56.94],
              text: "Payment",
              backgroundColor: '#FF7965'
            }, {
              values: [14.52],
              text: 'Improvements',
              backgroundColor: '#FFCB45'
            }, {
              text: 'Insurance',
              values: [9.69],
              backgroundColor: '#6877e5'
            }, {
              text: 'Taxes',
              values: [7.48],
              backgroundColor: '#6FB07F'
            }]
          };

          zingchart.render({
            id: 'myChart',
            data: myConfig,
            height: 500,
            width: 725
          });