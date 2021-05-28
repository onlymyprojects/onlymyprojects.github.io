var data0 = {
  labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
  datasets: [ {
    label: "Dataset #1",
    backgroundColor: "rgb(99,187,255)",
    borderColor: "rgb(156,95,210)",
    borderWidth: 1,
    hoverBackgroundColor: "rgb(99,125,255)",
    hoverBorderColor: "rgb(99,193,255)",
    data: [ 65, 59, 20, 81, 56, 55, 40 ],
  } ]
};

var option0 = {
  responsive: false,
  scales: {
    yAxes: [ {
      ticks: {
        beginAtZero: true
      }
    } ],
    xAxes: [ {
      barPercentage: 0.3,
    } ]
  }
};

Chart.Bar('chart_0', {
  options: option0,
  data: data0
});


var data = {
  labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
  datasets: [ {
    label: "AppNexus Kept",
    backgroundColor: "rgb(99,255,224)",
    borderColor: "rgb(99,181,83)",
    hoverBackgroundColor: "rgb(85,214,170)",
    hoverBorderColor: "rgb(111,133,226)",
    data: [ 65, 59, 20, 81, 56, 55, 40 ],
  } ]
};

var option = {
  responsive: false,
  scales: {
    yAxes: [ {
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    } ],
    xAxes: [ {
      barPercentage: 0.1,
    } ]
  }
};

Chart.Bar('chart_1', {
  options: option,
  data: data
});

var data2 = {
  labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
  datasets: [ {
    label: "AppNexus Kept",
    backgroundColor: "rgb(0,255,114)",
    borderColor: "rgb(2,245,148)",
    borderWidth: 2,
    hoverBackgroundColor: "rgb(17,36,202)",
    hoverBorderColor: "rgb(92,38,238)",
    data: [ 65, 59, 20, 81, 56, 55, 40 ],
  } ]
};

var option2 = {
  responsive: false,
  scales: {
    yAxes: [ {
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    } ],
    xAxes: [ {
      barPercentage: 0.1,
    } ]
  }
};

Chart.Bar('chart_2', {
  options: option2,
  data: data2
});

var data3 = {
  labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
  datasets: [ {
    label: "AppNexus Resold",
    backgroundColor: "rgb(208,99,255)",
    borderColor: "rgb(88,255,249)",
    borderWidth: 2,
    hoverBackgroundColor: "rgb(234,59,255)",
    hoverBorderColor: "rgb(226,99,255)",
    data: [ 65, 59, 20, 81, 56, 55, 40 ],
  } ]
};
var option3 = {
  responsive: false,
  scales: {
    yAxes: [ {
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    } ],
    xAxes: [ {
      barPercentage: 0.1,
    } ]
  }
};

Chart.Bar('chart_3', {
  options: option3,
  data: data3
});

var data4 = {
  labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
  datasets: [ {
    label: "Improve Digital",
    backgroundColor: "rgb(253,247,62)",
    borderColor: "rgb(255,222,99)",
    borderWidth: 2,
    hoverBackgroundColor: "rgb(239,237,92)",
    hoverBorderColor: "rgb(200,255,99)",
    data: [ 65, 59, 20, 81, 56, 55, 40 ],
  } ]
};

var option4 = {
  responsive: false,
  scales: {
    yAxes: [ {
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    } ],
    xAxes: [ {
      barPercentage: 0.1,
    } ]
  }
};

Chart.Bar('chart_4', {
  options: option4,
  data: data4
});

var data5 = {
  labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
  datasets: [ {
    label: "Adform",
    backgroundColor: "rgb(255,26,26)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132, 1)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: [ 65, 59, 20, 81, 56, 55, 40 ],
  } ]
};
var option5 = {
  responsive: false,
  scales: {
    yAxes: [ {
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    } ],
    xAxes: [ {
      barPercentage: 0.1,
    } ]
  }
};

Chart.Bar('chart_5', {
  options: option5,
  data: data5
});


var data6 = {
  datasets: [ {
    data: [ 10, 20, 30 ]
  } ],

  labels: [
    'Red',
    'Yellow',
    'Blue'
  ]
};

var myChart = new Chart('chart_6', {
  type: 'doughnut',
  data: {
    datasets: [ {
      data: [ 40.69, 40.69, 18.62 ],
      backgroundColor: [
        'rgba(51, 214, 159, 1)',
        'rgba(111, 82, 237, 1)',
        'rgba(255, 76, 97, 1)'
      ],
      borderWidth: 0
    } ]
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false,
  }
});

var myChart = new Chart('chart_7', {
  type: 'doughnut',
  data: {
    datasets: [ {
      data: [ 40.69, 40.69, 18.62 ],
      backgroundColor: [
        'rgba(51, 214, 159, 1)',
        'rgba(111, 82, 237, 1)',
        'rgba(255, 76, 97, 1)'
      ],
      borderWidth: 0
    } ]
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false,
  }
});

var myChart = new Chart('chart_8', {
  type: 'doughnut',
  data: {
    datasets: [ {
      data: [ 40.69, 40.69, 18.62 ],
      backgroundColor: [
        'rgba(51, 214, 159, 1)',
        'rgba(111, 82, 237, 1)',
        'rgba(255, 76, 97, 1)'
      ],
      borderWidth: 0
    } ]
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false,
  }
});

function openStatistics(id, doughnutId) {
  const el = document.getElementById(id);
  const doughnut = document.getElementById(doughnutId);
  console.log(el);
  console.log(doughnut);

  if (el.classList.contains('active')) {
    el.classList.remove('active');
    doughnut.classList.add('active');
  }

  if (doughnut.classList.contains('active')) {
    doughnut.classList.remove('active');
    doughnut.classList.add('non-active');
    el.classList.add('active')
  }
}

$(function () {
  $("#accordion").accordion({
    active: false,
    collapsible: true
  });
});

function getElementId(selectorId) {
  var selector = document.getElementById(selectorId.id)
  console.log(selector.style.display);
  if (selector.style.display === '' || selector.style.display === 'none') {
    selector.style.display = 'block'
  } else {
    selector.style.display = 'none'
  }
}