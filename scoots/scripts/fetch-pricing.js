document.addEventListener('DOMContentLoaded', () => {
    fetch('pricing.json')
        .then(response => response.json())
        .then(pricingData => {
            const tableBody = document.querySelector('#pricing-table tbody');

            pricingData.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.type}</td>
                    <td>${item.max_persons}</td>
                    <td>${item.reservation_half_day}</td>
                    <td>${item.reservation_full_day}</td>
                    <td>${item.walkin_half_day}</td>
                    <td>${item.walkin_full_day}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching pricing data:', error));
});
