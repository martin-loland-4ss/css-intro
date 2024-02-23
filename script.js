var dates = ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'];
var values = [5, 10, 8, 15, 12];

// Create a trace
var trace = {
    x: dates,
    y: values,
    type: 'scatter',
    mode: 'lines+markers'
};

// Create data array
var data = [trace];

// Define layout
var layout = {
    xaxis: {
        type: 'date',
        rangeslider: { // Add rangeslider
            visible: true
        }
    },
    yaxis: {
        title: 'BOP Resonance [sec]'
    },
    margin: {
        l: 50,
        r: 5,
        b: 0,
        t: 0,
        pad: 0
      }
};

var config = {responsive: true, displayModeBar: false}

for (const div of ["plot1", "plot2"]) {
    Plotly.newPlot(div, data, layout, config);    
}