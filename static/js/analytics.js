// Initialize charts when the page loads
document.addEventListener('DOMContentLoaded', function () {
    initializePriceHistoryChart();
    initializeCompetitorPriceChart();
    initializeSalesTrendChart();
    initializeSalesByChannelChart();
    initializeTopProductsChart();
    initializeRegionSalesChart();
    initializeHourlySalesChart();
    initializeSentimentChart();
    initializeDiscountChart();
    initializeCategoryPerformanceChart();
});

function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab:nth-child(${['pricing', 'sales', 'sentiment', 'discount', 'category'].indexOf(tabId) + 1})`).classList.add('active');
    document.querySelectorAll('#contentArea > div').forEach(div => div.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function searchProduct() {
    const searchTerm = document.getElementById('productSearch').value;
    console.log('Searching for:', searchTerm);
}

// =============== PRICING TAB CHARTS ===============
function initializePriceHistoryChart() {
    const ctx = document.getElementById('priceHistoryChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Product Price History',
                data: [95, 99, 89, 95, 99, 99.99],
                borderColor: '#1a73e8',
                tension: 0.1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Price History (6 Months)'
                }
            }
        }
    });
}

function initializeCompetitorPriceChart() {
    const ctx = document.getElementById('competitorPriceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Your Product', 'Competitor A', 'Competitor B', 'Competitor C'],
            datasets: [{
                label: 'Current Prices',
                data: [99.99, 89.99, 94.99, 84.99],
                backgroundColor: ['#1a73e8', '#666', '#666', '#666']
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Competitor Price Comparison'
                }
            }
        }
    });
}

// =============== SALES TAB CHARTS ===============
function initializeSalesTrendChart() {
    const ctx = document.getElementById('salesTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Sales ($)',
                data: [65000, 59000, 80000, 81000, 86000, 95000, 92000, 88000, 100000, 94000, 108000, 99000],
                borderColor: '#1a73e8',
                backgroundColor: 'rgba(26, 115, 232, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => '$' + value.toLocaleString()
                    }
                }
            }
        }
    });
}

function initializeSalesByChannelChart() {
    const ctx = document.getElementById('salesChannelChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Online Store', 'Marketplace', 'Retail', 'Direct Sales', 'Partners'],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: ['#1a73e8', '#34a853', '#fbbc04', '#ea4335', '#9334e8']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function initializeTopProductsChart() {
    const ctx = document.getElementById('topProductsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Premium Widget', 'Basic Widget', 'Deluxe Widget', 'Widget Pro', 'Mini Widget'],
            datasets: [{
                label: 'Units Sold',
                data: [1200, 980, 850, 670, 540],
                backgroundColor: '#1a73e8'
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function initializeRegionSalesChart() {
    const ctx = document.getElementById('regionSalesChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['North', 'South', 'East', 'West', 'Central'],
            datasets: [{
                label: 'Sales ($)',
                data: [250000, 180000, 210000, 190000, 170000],
                backgroundColor: ['#1a73e8', '#34a853', '#fbbc04', '#ea4335', '#9334e8']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function initializeHourlySalesChart() {
    const ctx = document.getElementById('hourlySalesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
            datasets: [{
                label: 'Average Sales',
                data: [42, 25, 18, 95, 115, 125, 130, 85],
                borderColor: '#34a853',
                backgroundColor: 'rgba(52, 168, 83, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// =============== SENTIMENT TAB CHARTS ===============
function initializeSentimentChart() {
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Average Rating',
                data: [4.2, 4.3, 4.1, 4.4, 4.2, 4.3],
                borderColor: '#34a853',
                backgroundColor: 'rgba(52, 168, 83, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// =============== DISCOUNT TAB CHARTS ===============
function initializeDiscountChart() {
    const ctx = document.getElementById('discountChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['0%', '5%', '10%', '15%', '20%', '25%', '30%'],
            datasets: [{
                label: 'Sales Volume',
                data: [1000, 1200, 1800, 2200, 2800, 2400, 2000],
                backgroundColor: '#1a73e8'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Units Sold'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Discount Rate'
                    }
                }
            }
        }
    });
}

// =============== CATEGORY PERFORMANCE CHART ===============
function initializeCategoryPerformanceChart() {
    const ctx = document.getElementById('categoryPerformanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Home'],
            datasets: [{
                label: 'Revenue',
                data: [45000, 32000, 28000, 22000, 38000],
                backgroundColor: ['#1a73e8', '#34a853', '#fbbc04', '#ea4335', '#9334e8']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => '$' + value.toLocaleString()
                    }
                }
            }
        }
    });
}
