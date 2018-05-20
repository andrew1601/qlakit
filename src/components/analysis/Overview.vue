<template>
    <div>
        <h1>Analysis Overview Component</h1>
        <line-chart :data="{labels: ['1', '2', '3', '4', '5', '6', '7', '8'], datasets: [ {label: 'My Data', data: [1,2,4,2,6,1,1,4], backgroundColor: '#f53d13' } ]}"></line-chart>
    </div>
</template>

<script>

import LineChart from '../charts/LineChart.vue';

export default {

    components: {
        LineChart
    }
    
}
</script>

