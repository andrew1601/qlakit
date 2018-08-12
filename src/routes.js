import Home from './components/Home.vue'
import Analysis from './components/analysis/Analysis.vue'
import Paper from './components/analysis/Paper.vue'
import Overview from './components/analysis/Overview.vue'
import DataEntry from './components/dataentry/DataEntry.vue'
import Assessments from './components/admin/assessments/Assessments.vue'
import Assessment from './components/admin/assessments/Assessment.vue'


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'analysis',
        path: '/analysis',
        component: Analysis,
        children: [
            {
                name: 'paper',
                path: 'paper/:id',
                component: Paper
            },
            {
                name: 'overview',
                path: '',
                component: Overview
            }
        ]
    },
    {
        name: 'dataEntry',
        path: '/entry',
        component: DataEntry
    },
    {
        name: 'assessments',
        path: '/assessments',
        component: Assessments,
        children: [{
            name: 'assessment',
            path: ':id/',
            component: Assessment,
            children: [
                {
                    name: 'overview',
                    path: '',
                    component: Overview
                },
                {
                    name: 'paper',
                    path: 'paper/:id',
                    component: Paper
                }
            ]
        }]
    }
];