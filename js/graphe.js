const ctx = document.getElementById('myChart');
                
                        new Chart(ctx, {
                            type: 'bar',
                            data: {
                                labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                                datasets: [{
                                    label: "Consommation d'eau",
                                    data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0.5, 0, 0, 0, 0.2],
                                    backgroundColor:'#12255B',
                                }]
                            },
                            options: {
                                scales: {
                                    backgroundColor:'white',
                                    y: {
                                        beginAtZero: true,
                                    }
                                }
                            }
                        });