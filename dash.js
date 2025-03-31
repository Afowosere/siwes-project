// Department Distribution Chart
const deptCtx = document.getElementById('departmentChart').getContext('2d');
new Chart(deptCtx, {
    type: 'doughnut',
    data: {
        labels: ['Computer Science', 'Engineering', 'Business', 'Medicine'],
        datasets: [{
            label: 'Departments',
            data: [45, 30, 15, 10],
            backgroundColor: ['blue', 'green', 'orange', 'red']
        }]
    }
});

// Registration Trends Chart
const regCtx = document.getElementById('registrationChart').getContext('2d');
new Chart(regCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Registrations',
            data: [100, 250, 300, 290, 150, 180],
            borderColor: 'blue',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
